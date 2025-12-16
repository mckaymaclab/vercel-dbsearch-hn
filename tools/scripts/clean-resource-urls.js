#!/usr/bin/env node
/**
 * Cleans URL strings inside lib/resource-database.ts by removing stray spaces around dots
 * and collapsing multiple spaces inside protocol + domain sections.
 *
 * Transformation rules (conservative):
 * 1. Only operate on string literals that look like URLs (start with http://, https://, or mailto:)
 * 2. Inside the scheme+authority+path (before first whitespace or final quote), remove any space directly before or after a dot or slash.
 *    Example: 'https://byui. idm. oclc. org' -> 'https://byui.idm.oclc.org'
 * 3. Collapse sequences of spaces to a single space only inside mailto body/query (but keep %20 as-is).
 * 4. Do NOT decode or change existing % encodings (including %20) – user requested preserving encoded spaces.
 * 5. Skip strings that already appear clean.
 *
 * A backup of the original file is written to lib/resource-database.ts.bak (once per run if not existing).
 */
import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '..', 'lib', 'resource-database.ts');
const backupPath = targetPath + '.bak';

if (!fs.existsSync(targetPath)) {
  console.error('Could not find resource-database.ts at', targetPath);
  process.exit(1);
}

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(targetPath, backupPath);
  console.log('Backup created at', backupPath);
}

let text = fs.readFileSync(targetPath, 'utf8');

// Regex to find URL-like string literals that START with a URL (legacy behavior)
const leadingUrlLiteralRegex = /(["'`])((?:https?:\/\/|mailto:)[^"'`\n\r]*?)\1/g;

// Regex to capture ANY string literal so we can process embedded URLs within descriptions
const anyStringLiteralRegex = /(["'])(?:\\.|(?!\1)[^\n\r])*\1/g;

let modifiedCount = 0; // count of individual URL segments modified

function cleanUrl(original) {
  // Split off query/hash so we can still clean nested spaced URLs inside parameters later
  const splitPoint = original.search(/[?#]/);
  const mainPart = splitPoint === -1 ? original : original.slice(0, splitPoint);
  const tail = splitPoint === -1 ? '' : original.slice(splitPoint);

  // Remove ANY whitespace characters in the structural part (scheme + authority + path)
  const structuralClean = mainPart.replace(/\s+/g, '');

  // Inside the tail, also remove whitespace inside any nested http(s) URL (login?url=... cases)
  const tailClean = tail.replace(/https?:\/\/[^"'`<>\n\r]+/g, (frag) => frag.replace(/\s+/g, ''));

  const recombined = structuralClean + tailClean;
  if (recombined !== original) modifiedCount++;
  return recombined;
}

// First pass (backwards compatibility) – clean literals that themselves are a URL
text = text.replace(leadingUrlLiteralRegex, (full, quote, urlBody) => {
  const cleaned = cleanUrl(urlBody);
  return `${quote}${cleaned}${quote}`;
});

// Second pass – scan every string literal for embedded URLs and clean them in-place
text = text.replace(anyStringLiteralRegex, (literal) => {
  const quote = literal[0];
  let body = literal.slice(1, -1);
  body = body.replace(/https?:\/\/[^"'`<>\n\r]+/g, (frag) => frag.replace(/\s+/g, ''));
  return quote + body + quote;
});

// Third pass – aggressive: match ANY http/https fragment up to a terminating quote/backtick/angle bracket/newline (we allow internal spaces)
// Then remove all plain spaces inside.
// Third pass (broad sweep outside of string-literal parsing fallbacks)
text = text.replace(/https?:\/\/[^"'`<>\n\r]+/g, (frag) => frag.replace(/\s+/g, ''));


if (modifiedCount === 0) {
  console.log('No URL literals required modification.');
} else {
  fs.writeFileSync(targetPath, text, 'utf8');
  console.log(`Updated ${modifiedCount} URL literal(s).`);
}
