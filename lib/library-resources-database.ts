export interface LibraryResource {
    name: string;
    description: string;
    url: string;
    subjects: string[];
    contentTypes: string[];
    accessNote?: string;
    featured?: boolean;
    fullText?: boolean;
    moreInfo?: string;
}

export const libraryResourceDatabase: LibraryResource[] = [
    {
        name: "A–Z Database List",
        description:
            "The comprehensive A–Z listing of all library databases across disciplines.",
        url: "https://library.byui.edu/az",
        subjects: ["Multidisciplinary", "Research"],
        contentTypes: ["Database"],
        featured: true,
        fullText: false,
        moreInfo: "Includes academic journals, ebooks, datasets.",
    },
    {
        name: "Special Collections & Archives",
        description:
            "Digital and physical archives: campus history, manuscripts, exhibits.",
        url: "https://archives.byui.edu",
        subjects: ["History", "Primary Sources", "Idaho Region"],
        contentTypes: ["Manuscript", "Photograph", "Exhibit"],
        accessNote:
            "Open to students, faculty, and guests; some materials by request.",
        moreInfo: "Includes 'Oracles of God' & regional collections.",
    },
    {
        name: "Mac Lab & 3D Printing",
        description:
            "On-site Mac workstations and 3D printing support in the library lab.",
        url: "https://library.byui.edu/maclab",
        subjects: [
            "Media Production",
            "Design",
            "3D Printing",
            "Equipment rentals",
            "Adobe",
        ],
        contentTypes: ["Equipment"],
        accessNote:
            "Available to BYU‑Idaho students & faculty; schedule through the library.",
    },
    {
        name: "Interlibrary Loan",
        description: "Request books or articles not available at BYU‑Idaho.",
        url: "https://byui.idm.oclc.org/login?url=https://illiad.lib.byu.edu/ILLiad/IDA/illiad.dll",
        subjects: ["Multidisciplinary"],
        contentTypes: ["Service"],
        moreInfo: "Typically fulfilled within days via partner libraries.",
    },
    {
        name: "Research Guides (LibGuides)",
        description:
            "Subject and course-specific curated collections of resources.",
        url: "http://libguides.byui.edu/",
        subjects: ["All Disciplines"],
        contentTypes: ["Guide"],
        moreInfo:
            "Includes video tutorials, selected databases, contact info for subject librarians.",
    },
];
