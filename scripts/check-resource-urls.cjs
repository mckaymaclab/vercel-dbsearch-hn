#!/usr/bin/env node
/**
 * Scan lib/resource-database.ts for malformed URL patterns:
 *  - Spaces inside the protocol+host portion (e.g., https://byui. idm.oclc.org)
 *  - Spaces immediately after dots in domain segments (e.g., 'link. gale.')
 *  - %20 appearing in the hostname (should only appear in path/query)
 *  - Spaced domains in embedded HTML attributes (href="https://...")
 *  - Plain occurrences of 'http://www. ' or 'https://www. ' (space after dot)
 *  - Any raw ' byui.idm.oclc.org' with internal spaces (defensive)
 *
 * Exit code:
 *   0 if clean
 *   1 if any issues found (prints a report)
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'lib', 'resource-database.ts');

function loadFile() {
  return fs.readFileSync(FILE, 'utf8').split(/\r?\n/);
}

const rules = [
  {
    rule: 'SPACE_IN_PROTOCOL_HOST',
    description: 'Spaces between protocol and host components (e.g., https://byui. idm.oclc.org)',
    custom(line) {
      const pattern = /https?:\/\/[A-Za-z0-9.-]*\s+[A-Za-z0-9.-]*\.[A-Za-z]{2,}/g;
      const out = [];
      let m;
      while ((m = pattern.exec(line)) !== null) {
        out.push({ col: m.index + 1, excerpt: m[0] });
      }
      return out;
    },
  },
  {
    rule: 'SPACE_AFTER_DOT',
    description: 'Space directly after a dot inside what appears to be a URL (e.g., link. gale.)',
    custom(line) {
      const out = [];
      const pattern = /(https?:[^\s"')]+)/g;
      let m;
      while ((m = pattern.exec(line)) !== null) {
        if (/\.[ ]+[A-Za-z0-9]/.test(m[0])) {
          out.push({ col: m.index + 1, excerpt: m[0] });
        }
      }
      return out;
    },
  },
  {
    rule: 'PERCENT20_IN_HOST',
    description: '%20 occurring before first / after protocol (likely in host)',
    custom(line) {
      const out = [];
      const pattern = /https?:\/\/[^\/:]*%20[^\s"')]+/g;
      let m;
      while ((m = pattern.exec(line)) !== null) {
        out.push({ col: m.index + 1, excerpt: m[0] });
      }
      return out;
    },
  },
  {
    rule: 'SPACED_WWW',
    description: "'http(s)://www.' followed by a space after the dot",
    regex: /https?:\/\/www\.[ ]+[A-Za-z0-9]/g,
  },
  {
    rule: 'BYUI_PROXY_SPACED',
    description: 'Residual spaced byui.idm.oclc.org variant (requires at least one internal space)',
    regex: /byui\s+\.\s*idm|byui\s*\.\s*idm\s+\.\s*oclc|idm\s+\.\s*oclc|oclc\s+\.\s*org/gi,
  },
];

function scan(lines) {
  const findings = [];
  lines.forEach((line, i) => {
    rules.forEach(r => {
      if (r.custom) {
        const matches = r.custom(line, i) || [];
        matches.forEach(m => findings.push({ line: i + 1, rule: r.rule, description: r.description, col: m.col || 1, excerpt: m.excerpt.slice(0, 160) }));
      } else if (r.regex) {
        if (r.regex.global) {
          let m;
            while ((m = r.regex.exec(line)) !== null) {
              findings.push({ line: i + 1, rule: r.rule, description: r.description, col: m.index + 1, excerpt: m[0].slice(0, 160) });
            }
          // reset lastIndex for safety
          r.regex.lastIndex = 0;
        } else {
          const m = r.regex.exec(line);
          if (m) {
            findings.push({ line: i + 1, rule: r.rule, description: r.description, col: m.index + 1, excerpt: m[0].slice(0, 160) });
          }
        }
      }
    });
  });
  return findings;
}

function main() {
  if (!fs.existsSync(FILE)) {
    console.error('File not found:', FILE);
    process.exit(2);
  }
  const lines = loadFile();
  const findings = scan(lines);
  if (findings.length === 0) {
    console.log('✅ URL spacing validation passed: no malformed patterns found.');
    process.exit(0);
  }
  console.error('❌ Malformed URL patterns detected (' + findings.length + '):');
  findings.slice(0, 200).forEach(f => {
    console.error(`${f.rule} (line ${f.line}, col ${f.col}): ${f.excerpt}`);
  });
  if (findings.length > 200) {
    console.error('... truncated additional findings');
  }
  process.exit(1);
}

if (require.main === module) {
  main();
}
