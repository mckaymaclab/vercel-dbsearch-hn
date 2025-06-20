export interface LibraryResource {
    name: string;
    description: string;
    url: string;
    subjects: string[];
    contentTypes: string[];
    accessNote?: string;
    featured?: boolean;
    fullText?: boolean;
}

export const resourceDatabase: LibraryResource[] = [
    {
        name: "A to Z Maps Online",
        description:
            "Thousands of current, proprietary, royalty-free maps of the world, continents, countries, and states. ",
        subjects: [
            "Family History",
            "Geography",
            "History",
            "Political Science",
        ],
        contentTypes: ["Maps"],
        url: "https://www.atozmapsonline.com/?c=mSeZqk7t49",
    },
    {
        name: "Academic Search Premier",
        description:
            "EBSCO's multi-disciplinary database with millions of articles for academic study.",
        subjects: [
            "Animal and Food Science",
            "Applied Plant Science",
            "Automotive Engineering / Technology",
            "Business Management",
            "Chemistry",
            "Computer Information Technology",
            "Design and Construction Management",
            "English",
            "Foundations & GE (General Education)",
            "General",
            "Health Services",
            "History",
            "Home and Family",
            "Human Performance and Recreation",
            "Humanities and Philosophy",
            "Interdisciplinary Studies",
            "Job and Career Resources",
            "Languages and International Studies",
            "Mathematics",
            "Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=aph&authtype=sso&custid=s8406107",
    },
    {
        name: "AcademicPowerSearch",
        description:
            "Gale's multi-disciplinary search through millions of pages in peer-reviewed articles, eBooks, primary sources, and more. ",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/i.do?p=GPS&sw=w&u=byuidaho&v=2.1&pg=BasicSearch&it=static&sid=bookmark-GPS",
    },
    {
        name: "Acceda Noticias (NewsBank)",
        description:
            "Includes more than 180 Spanish-language news sources from major cities in the United States and from more than 20 countries.",
        subjects: ["Languages and International Studies"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://infoweb-newsbank-com.byui.idm.oclc.org/apps/news/browse-multi?t=collection%3AANOT%21Acceda+Noticias&p=AWNB&f=advanced",
    },
    {
        name: "Access Engineering (McGraw-Hill)",
        description:
            "A collection of the most-used authoritative, regularly updated engineering reference information; interactive tools, resources, codes, etc.",
        subjects: [
            "Automotive Engineering / Technology",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Mechanical & Civil Engineering",
            "Physics",
        ],
        contentTypes: ["eBooks;Video;Full-Text Articles;Interactive Learning"],
        url: "https://accessengineeringlibrary.com",
    },
    {
        name: "Access U.S. Newswires & Transcripts",
        description:
            "Fully searchable database of current and archived articles from key newswires and broadcast transcripts from top U.S. TV and radio news shows. ",
        subjects: [
            "Business Management",
            "Economics",
            "Geography",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Newspapers"],
        url: "https://infoweb.newsbank.com/resources/search/nb?p=AWNB&t=collection%3AANW%21Access%20Newswires",
    },
    {
        name: "ACLS Humanities E-Book Project",
        description:
            "Now Open Access Content Only. Books in the humanities: culture, society, history, rhetoric, language arts, visual & performing arts, etc. THIS ONLY HAD 4 USES IN LAST YEART - HIDING TO SEE IF ANY ISSUES COME UP as we don't list OA materials, unless we had paid for them in the past and they continue to have high usage (6/2025) ",
        subjects: [
            "English",
            "History",
            "Humanities and Philosophy",
            "Special Collections",
        ],
        contentTypes: ["eBooks;Primary Resource;Full-Text Articles"],
        url: "https://www-fulcrum-org.byui.idm.oclc.org/heb?locale=en&user_access=true",
    },
    {
        name: "ACM Digital Library [Association of Computing Machinery]",
        description:
            "A research, discovery, and networking platform on computer science, AI, networks, communication, multimedia, software, programming, etc.",
        subjects: [
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
        ],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://dlnext.acm.org/",
    },
    {
        name: "ACS [American Chemical Society] Journals",
        description:
            "Access to chemistry-related information and research in peer-reviewed journals and eBooks.",
        subjects: ["Chemistry"],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://pubs.acs.org/",
    },
    {
        name: "ACSESS Digital Library",
        description:
            "Search for articles published by ACSESS on crop breeding and genetics, soil physics, agro-climatology, ecology, and more. ",
        subjects: ["Animal and Food Science", "Applied Plant Science"],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://acsess.onlinelibrary.wiley.com/",
    },
    {
        name: "Acta Sanctorum",
        description:
            "An encyclopedic text of the lives of Christian saints, organized by the saints' feast days - collected and published from 1629-1940.",
        subjects: ["History", "Religious Education"],
        contentTypes: ["Primary Resource"],
        url: "https://www.proquest.com/actasanctorum",
    },
    {
        name: "African American Music Reference",
        description:
            "A comprehensive collection of blues, jazz, spirituals, slave songs, minstrels, rhythm & blues, gospel, hip hop, and other forms of black American musical expression.",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://search.alexanderstreet.com/aamr",
    },
    {
        name: "African American Newspapers",
        description:
            "An collection of African American newspapers with a wealth of information about cultural life and history during the 1800s. Learn ",
        subjects: ["Family History", "History", "Special Collections"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/anco/",
    },
    {
        name: "African American Poetry",
        description:
            "A collection of poetry by African American poets from the 1700s - 1800s.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/aap",
    },
    {
        name: "Agricola",
        description:
            "Database of citations for the literature created by the National Agricultural Library from its early days; full coverage from 1970. ",
        subjects: ["Animal and Food Science", "Applied Plant Science"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=agr&authtype=sso&custid=s8406107",
    },
    {
        name: "Agriculture",
        description:
            "Access current and authoritative periodical content covering agriculture and its related fields.",
        subjects: ["Animal and Food Science", "Applied Plant Science"],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPAG&u=byuidaho",
    },
    {
        name: "AIP Publishing",
        description:
            "Current and influential news, analysis, and research in these Physical Science journals: American Journal of Physics, Physics Today, and Physics Teacher. ",
        subjects: ["Physics"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://pubs-aip-org.byui.idm.oclc.org/",
    },
    {
        name: "Alexander Street Video & Image Collection",
        description:
            "Audio tracks, music scores, video performances, and reference materials for the humanities and social sciences. ",
        subjects: [
            "Dance",
            "General",
            "Health Services",
            "Home and Family",
            "Human Performance and Recreation",
            "Humanities and Philosophy",
            "Music",
            "Theatre",
        ],
        contentTypes: [
            "Images;Video;Audio;Primary Resource;Full-Text Articles;Musical Scores",
        ],
        url: "https://search-alexanderstreet-com.byui.idm.oclc.org/",
    },
    {
        name: "ALT HealthWatch",
        description:
            "A research database with peer-reviewed articles on holistic medicine and therapies.",
        subjects: ["Health Services", "Nursing"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=awh&authtype=sso&custid=s8406107",
    },
    {
        name: "AM Explorer",
        description:
            "A collection of curated historical databases with primary source products for the social sciences and humanities. ",
        subjects: [
            "Geography",
            "History",
            "Political Science",
            "Sociology and Social Work",
            "Special Collections",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.archiveexplorer.amdigital.co.uk/Default.aspx",
    },
    {
        name: "America: History & Life",
        description:
            "A bibliographic database focusing on the history of and life in the United States and Canada. ",
        subjects: ["Geography", "History", "Political Science"],
        contentTypes: ["Abstract / Citation / Index;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ahl&authtype=sso&custid=s8406107",
    },
    {
        name: "America's Historical Imprints, 1640-1819",
        description:
            "A collection of virtually every know book, monograph, pamphlet, and broadside published in American between 1640 and 1819.",
        subjects: ["English", "History", "Humanities and Philosophy"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://infoweb.newsbank.com/?db=EAIX",
    },
    {
        name: "American Ancestors",
        description:
            'Database with multiple resources for genealogical research plus the archive for the "American Ancestors" journal.',
        subjects: ["Family History", "History"],
        contentTypes: ["Primary Resource;Full-Text Articles;Journals"],
        url: "https://www-americanancestors-org.byui.idm.oclc.org/search/databasesearch/405/american-ancestors-magazine",
    },
    {
        name: "American Antiquarian Society Historical Periodicals (Gale Primary Sources)",
        description:
            "Digitized images of thousands of American newspapers, magazines, and journals published between 1684 and 1912. ",
        subjects: ["Family History", "History", "Special Collections"],
        contentTypes: [
            "Newspapers;Primary Resource;Full-Text Articles;Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/AAHP?u=byuidaho",
    },
    {
        name: "American Antiquarian Society Historical Periodicals Collection (EBSCO)",
        description:
            "Digitized images of thousands of American newspapers, magazines, and journals published between 1684 and 1912. ",
        subjects: ["Family History", "History", "Special Collections"],
        contentTypes: [
            "Newspapers;Primary Resource;Full-Text Articles;Journals",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=h9h,h9k,h9j,h9i,h9m&authtype=sso&custid=s8406107",
    },
    {
        name: "American Civil Liberties Union Papers, 1912-1990",
        description:
            "Covers American civil liberties issues from 1912-1990, including immigration, civil rights, Vietnam War, and conscientious objectors, with extensive ACLU involvement and documentation.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/ACLU?u=byuidaho",
    },
    {
        name: "American Civil War Letters & Diaries",
        description:
            "A collection of over 2,000 diaries, letters, and memoirs of people experiencing the American Civil War.",
        subjects: [
            "Biographies",
            "Family History",
            "History",
            "Special Collections",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/cwld",
    },
    {
        name: "American County Histories",
        description:
            "A collection of county histories from throughout the United States.",
        subjects: ["Family History", "Geography", "History"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/amch/",
    },
    {
        name: "American Drama 1714-1915",
        description:
            "A comprehensive survey of American dramaturgy from its origins up to the era of sensational melodrama and manners comedy.",
        subjects: ["Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343200115?accountid=9817",
    },
    {
        name: "American Fiction 1774-1920",
        description:
            "Explore thousands of works of fiction written by Americans from the political beginnings of the U.S. through World War I.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://link-gale-com.byui.idm.oclc.org/apps/AMFN?u=byuidaho&aty=ip",
    },
    {
        name: "American Geophysical Union Journals",
        description:
            "A database comprising the scholarly, scientific journals published by the American Geophysical Union in earth & space sciences.",
        subjects: ["Geology"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://agupubs.onlinelibrary.wiley.com/search/advanced",
    },
    {
        name: "American History in Video",
        description:
            "Video coverage of historical events in United States history.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Video;Primary Resource"],
        url: "https://search.alexanderstreet.com/ahiv",
    },
    {
        name: "American History, 1493-1945",
        description:
            "This unique collection documents American History from the earliest settlers to the mid-twentieth century. From the Gilder Lehrman Collection.",
        subjects: ["History", "Political Science", "Special Collections"],
        contentTypes: ["Images;Video;Primary Resource;Full-Text Articles"],
        url: "http://www.americanhistory.amdigital.co.uk/",
    },
    {
        name: "American Indians and the American West",
        description:
            "Access several collections focusing on the interaction between American Indians and the U.S. government in the 19th and 20th Centuries. Read More | Search | Browse ",
        subjects: ["History", "Special Collections"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse\u2223=7410#7410",
    },
    {
        name: "American Music",
        description: "Hear and feel the music from America's past.",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://search.alexanderstreet.com/amso",
    },
    {
        name: "American Periodicals",
        description:
            "Digitized images of periodicals published between 1740 and 1940 in the United States.",
        subjects: [
            "Family History",
            "General",
            "History",
            "Special Collections",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles;Journals"],
        url: "https://search.proquest.com/americanperiodicals?accountid=9817",
    },
    {
        name: "American Poetry",
        description:
            "Works by and biographies about poets in America from the 1700s to the early 1900s.",
        subjects: ["English", "General", "History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/ap",
    },
    {
        name: "American Politics and Society",
        description:
            "Covers the investigations made by the Immigration and Naturalization Service (INS) during the massive immigration wave of 1880-1930. Read More | Search | Browse",
        subjects: ["History", "Political Science", "Special Collections"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse\u2223=48990#48990",
    },
    {
        name: "American State Papers, 1789-1838",
        description:
            "Legislative and executive documents from the United States, most originating from the important period between 1789 and 1817.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://infoweb.newsbank.com/?db=ASPA&s_startsearch=keyword",
    },
    {
        name: "Ancestry",
        description:
            "Billions of historical records, millions of family trees, and the AncestryDNA database for genealogical research.",
        subjects: ["Family History"],
        contentTypes: ["Interactive Learning"],
        url: "https://www.ancestryinstitution.com",
    },
    {
        name: "Annual Reviews",
        description:
            "Scholarly reviews of articles in the fields of biological, life, biomedical, physical, and social sciences.",
        subjects: ["Health Services"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://www.annualreviews.org/",
    },
    {
        name: "ANSI Industry Standards",
        description:
            "Request  ISO and IEC standards from ANSI for academic use on an individual basis. After finding standard name & number, contact eResources@byui.edu or come to 259 McKay to initiate requests. See also Additional Information.",
        subjects: [
            "Automotive Engineering / Technology",
            "Chemistry",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Mechanical & Civil Engineering",
        ],
        contentTypes: ["Reports / Data"],
        url: "nan",
    },
    {
        name: "AP Stylebook",
        description:
            "The definitive resource for journalists, the AP Stylebook online edition gives fundamental guidelines for spelling, language, punctuation, usage, and journalistic style. ",
        subjects: ["Business Management", "Communications", "English"],
        contentTypes: ["Reference;Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://www.apstylebook.com/mckay-library-brigham-young-university-idaho",
    },
    {
        name: "APA PsycInfo - EBSCOhost",
        description:
            "Search this database of peer-reviewed literature in behavioral science and mental health; produced by the American Psychological Association (APA). ",
        subjects: ["Psychology"],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=psyh&authtype=sso&custid=s8406107",
    },
    {
        name: "APA PsycInfo Discover & Personalized Research Services",
        description:
            "Sign up with your BYU-I email to create an account for research discovery & individualized content within the APA PsycInfo site. ",
        subjects: ["Psychology"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://psycinfo.apa.org/home",
    },
    {
        name: "APM Music",
        description:
            "Music for educational use; covers multiple genres and styles. Non-educational uses require additional licensing. ",
        subjects: ["General", "Humanities and Philosophy", "Music"],
        contentTypes: ["Audio"],
        url: "https://content.byui.edu/integ/gen/6b4c56a2-4b3d-4e02-a825-5cbf9b6c6216/1/",
    },
    {
        name: "ArchiveGrid",
        description:
            "Search hundreds of archival collections throughout the world.",
        subjects: ["History", "Special Collections"],
        contentTypes: ["Abstract / Citation / Index;Primary Resource"],
        url: "https://beta.worldcat.org/archivegrid/",
    },
    {
        name: "Archives Unbound",
        description:
            "Topically-focused digital collections of historical documents that support the research on various topics.",
        subjects: ["Geography", "History", "Special Collections"],
        contentTypes: [
            "Newspapers;Primary Resource;Full-Text Articles;Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/i.do?p=GDSC&sw=w&u=byuidaho&v=2.1&pg=BasicSearch&it=static&sid=bookmark-GDSC",
    },
    {
        name: "ArkivDigital",
        description:
            "A Swedish genealogy database with indexes, family trees, pictures, and more.",
        subjects: ["Family History"],
        contentTypes: ["Interactive Learning"],
        url: "https://www.arkivdigital.se/",
    },
    {
        name: "Art and Architecture Archive",
        description:
            "Searchable archives of leading trade and consumer magazines, tracing the history of photography, design, architecture, fine and applied arts, and more.",
        subjects: [
            "Art",
            "Design and Construction Management",
            "History",
            "Humanities and Philosophy",
            "Interior Design",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.proquest.com/artarchitecture?accountid=9817",
    },
    {
        name: "Art Full Text",
        description:
            "Abstracts and full text articles from periodicals, yearbooks, and museum bulletins, art dissertations, art reproductions, and journals.",
        subjects: ["Art", "Humanities and Philosophy"],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=aft&authtype=sso&custid=s8406107",
    },
    {
        name: "Art Index Retrospective",
        description:
            "An index to literature on a variety of art topics from the years 1929 to 1984 - articles, reviews, exhibition listings, anthologies, etc.",
        subjects: ["Art", "Humanities and Philosophy"],
        contentTypes: [
            "Abstract / Citation / Index;eBooks;Images;Full-Text Articles",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=air&authtype=sso&custid=s8406107",
    },
    {
        name: "ARTstor - now   JSTOR Images",
        description:
            "Artstor has become part of the JSTOR website. It is the same content hosted on a new site with more functionality.",
        subjects: ["nan"],
        contentTypes: ["nan"],
        url: "https://www.jstor.org/images#artstor-collections",
    },
    {
        name: "ASABE Online Technical Library",
        description:
            "Access technical papers, conference proceedings, peer-reviewed journal articles, reference books, and standards published by ASABE.",
        subjects: ["Animal and Food Science", "Applied Plant Science"],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://elibrary.asabe.org/",
    },
    {
        name: "ASTM Compass",
        description:
            "Access and manage thousands of industry and technology standards. Can create own account. For use only by BYU-I students and faculty. ",
        subjects: [
            "Automotive Engineering / Technology",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Mechanical & Civil Engineering",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://secure.astm.org/login?redirectUrl=aHR0cHM6Ly9jb21wYXNzLmFzdG0ub3Jn&newApproach=true",
    },
    {
        name: "ATLA Religion Database",
        description:
            "A resource for religious & theological studies with bibliographic records for topics such as biblical studies, world religions, and religion in society.",
        subjects: [
            "History",
            "Religious Education",
            "Sociology and Social Work",
        ],
        contentTypes: [
            "Abstract / Citation / Index;eBooks;Full-Text Articles;Journals",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=reh&authtype=sso&custid=s8406107",
    },
    {
        name: "Atlanta Constitution, The",
        description:
            "Search and read through first-hand accounts of the politics, society, and events of the city of Atlanta during the years of 1868-1984.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpatlantaconstitution2/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Atlantic",
        description:
            "Website for the magazine covering news, politics, culture, technology, health, and more, through articles, podcasts, and videos. App: iOS or Android.",
        subjects: ["Accounting", "Finance", "General", "Political Science"],
        contentTypes: ["Full-Text Articles"],
        url: "https://theatlantic.com/byuidaho-login/",
    },
    {
        name: "Audio Drama: The L.A. Theatre Works Collection",
        description:
            "Audio files of over 300 historic dramatic works from the curated archive of the L.A. Theatre Works Collection. ",
        subjects: ["Theatre"],
        contentTypes: ["Audio"],
        url: "https://search.alexanderstreet.com/radr",
    },
    {
        name: "Austin American Statesman",
        description:
            "Search and read first-hand accounts of the politics, society, and events of Austin, Texas, and the surrounding area during the years 1871-1980.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpaustinamericanstatesman/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Auto Repair Source",
        description:
            "Guides with repair information for thousands of domestic and imported vehicles. Search by make, model, year, etc.",
        subjects: [
            "Automotive Engineering / Technology",
            "Mechanical & Civil Engineering",
        ],
        contentTypes: ["Reference"],
        url: "https://search.ebscohost.com/login.aspx?profile=autorepso&custid=s8406107&authtype=sso",
    },
    {
        name: "AVON - Academic Video Online",
        description:
            "AVON delivers movies and archival materials spanning multiple subject areas including anthropology, business, counseling, film, etc.",
        subjects: [
            "Art",
            "Business Management",
            "Chemistry",
            "Computer Information Technology",
            "Design and Construction Management",
            "English",
            "Family History",
            "General",
            "Health Services",
            "History",
            "Home and Family",
            "Humanities and Philosophy",
            "Job and Career Resources",
            "Languages and International Studies",
            "Mathematics",
            "Psychology",
            "Sociology and Social Work",
            "Theatre",
        ],
        contentTypes: ["Video"],
        url: "https://video-alexanderstreet-com.byui.idm.oclc.org/channels",
    },
    {
        name: "Baltimore Sun, The",
        description:
            "Search and read first-hand accounts and other coverage of the politics, society, and events in and surrounding Baltimore, Maryland; 1837-1997.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpbaltimoresun/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Berliner Philharmoniker: Digital Concert Hall",
        description:
            "Enjoy live and recorded concerts from one of the most acclaimed and well-respected orchestras in the world, the Berlin Philharmonic. As an App:  Android    Apple",
        subjects: ["General", "Music"],
        contentTypes: ["Video;Audio"],
        url: "https://www.digitalconcerthall.com/en/concerts",
    },
    {
        name: "Bible in English 990-1970",
        description:
            "Full text of 20 versions of the Bible, including all prefatory matter, notes, running heads and glossaries.",
        subjects: [
            "Humanities and Philosophy",
            "Languages and International Studies",
            "Religious Education",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/bible",
    },
    {
        name: "Biblical Archaeology Society Online Archive",
        description:
            "Thousands of articles and images with integrated Bible passages from Bible study journals. If article does not open, go to magazine and locate by year and issue.",
        subjects: ["Religious Education"],
        contentTypes: ["Video;Full-Text Articles;Journals"],
        url: "https://www.baslibrary.org/",
    },
    {
        name: "Biography and Genealogy Master Index",
        description:
            "Provides biographical citations on more than 6 millions persons, living and deceased, covering more than 2,000 years of human history.",
        subjects: ["Biographies", "Family History", "General"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/aboutSeries.do?userGroupName=byuidaho&inPS=true&prodId=GDL&seriesId=6BJC",
    },
    {
        name: "Biography in Context",
        description:
            "Continuously updated biographies of international figures from all time periods and areas of study. ",
        subjects: [
            "Biographies",
            "English",
            "General",
            "History",
            "Human Performance and Recreation",
            "Political Science",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/i.do?p=BIC&sw=w&u=byuidaho&v=2.1&pg=BasicSearch&it=static&sid=bookmark-BIC",
    },
    {
        name: "Biography Reference Source",
        description:
            "Search biographies searchable by keyword, subject (i.e.: occupation, nationality, gender) or genre (i.e.: artists, leaders, explorers, scientists, etc.).",
        subjects: [
            "Biographies",
            "English",
            "General",
            "History",
            "Humanities and Philosophy",
            "Political Science",
        ],
        contentTypes: ["Reference;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=brc&custid=s8406107&authtype=sso",
    },
    {
        name: "BizMiner",
        description:
            "Industry financial analysis and market research, includes reports on more than 16,000 lines of business in national and local markets.",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
            "Finance",
            "Marketing",
        ],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://app.bizminer.com",
    },
    {
        name: "Black Drama: Second Edition",
        description:
            "Hundreds of plays written by black playwrights from North America, English-speaking Africa, the Caribbean, and other African diaspora countries. ",
        subjects: ["Dance", "History", "Music", "Theatre"],
        contentTypes: ["Images;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/theatre/browse/title?ff%5B0%5D=unitaccess%3ABLDR-2E",
    },
    {
        name: "Black Freedom Struggle in the United States",
        description:
            "A primary source collection of over 3,000 documents related to people and events vital to African American history.",
        subjects: ["History", "Political Science", "Special Collections"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://blackfreedom.proquest.com/",
    },
    {
        name: "Black Thought and Culture",
        description:
            "A collection of non-fiction writings by major American black leaders presenting an evolving and complex view of what it is to be black in America.",
        subjects: ["History", "Music", "Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/bltc",
    },
    {
        name: "Black Women Writers",
        description:
            "Black Women Writers presents literature and essays on feminist issues, written by authors from Africa and the African diaspora.",
        subjects: ["Biographies", "English", "History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.proquest.com/litcollectionblww/index",
    },
    {
        name: "Bloom's Literature",
        description:
            "Bloom's Literature is rich with content on core authors and works, multicultural classics, contemporary literature, and more.",
        subjects: ["Dance", "English", "Music", "Theatre"],
        contentTypes: ["eBooks;Video;Full-Text Articles"],
        url: "https://online.infobaselearning.com/Direct.aspx?aid=104034&pid=WE54",
    },
    {
        name: "Book Review Digest Retrospective",
        description:
            "Provides excerpts from, and citations to, reviews of adult and juvenile fiction and non-fiction in the English language.",
        subjects: ["English", "General"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=brr&authtype=sso&custid=s8406107",
    },
    {
        name: "Book Review Index",
        description:
            "Peruse millions of book reviews to conduct research in numerous disciplines, including literature, history, education, psychology, etc.",
        subjects: ["English", "General"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://link-gale-com.byui.idm.oclc.org/apps/BRIP?u=byuidaho&aty=ip",
    },
    {
        name: "Books and Authors",
        description:
            "Find book recommendations and reads that are similar to your favorites. Search by genre, title, author, award winners, and more. Note: the library does not own all titles recommended.",
        subjects: ["English", "Humanities and Philosophy"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/BNA?u=byuidaho",
    },
    {
        name: "Books in Print",
        description:
            "Books In Print is the leading bibliographic database for publishers, retailers and libraries around the world. Books In Print provides a valuable resource for anyone interested in learning what is happening in the world of books. Helps identify find the right title and explore all known format options.",
        subjects: ["English", "General"],
        contentTypes: ["Reference"],
        url: "https://www.booksinprint.com/",
    },
    {
        name: "Boston Globe, The",
        description:
            "Search and read first-hand accounts and other coverage of the politics, society, and events of Boston, Massachusetts area from 1872-1991.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpnewyorkbostonglobe/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Brill's Online Reference",
        description:
            "Search through scores of reference books for articles related to history, international studies, law, language, religion, and the classical world.  ",
        subjects: ["History", "Humanities and Philosophy"],
        contentTypes: ["Reference"],
        url: "https://brill-com.byui.idm.oclc.org/browse?access_0=free&access_1=user&access_2=open&level=parent&pageSize=10&pubschedule_3=published&sort=datedescending",
    },
    {
        name: "Britannica Academic",
        description:
            "Thousands of articles covering multiple disciplines for getting started on research.",
        subjects: ["General"],
        contentTypes: ["Images;Video;Reference;Full-Text Articles"],
        url: "https://academic-eb-com.byui.idm.oclc.org/levels/collegiate",
    },
    {
        name: "British & Irish Women's Letters & Diaries",
        description:
            "The largest collection of women's diaries and correspondence; providing researchers a view into life and experiences over a 300 year span. ",
        subjects: ["English", "History", "Special Collections"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/bwl2",
    },
    {
        name: "British Library Newspapers",
        description:
            "A collection of newspapers specially selected by the British Library to best represent 18th-, 19th-, and 20th-century Britain.",
        subjects: ["English", "Family History", "History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=BNCN&u=byuidaho",
    },
    {
        name: "British Literary Manuscripts Online",
        description:
            "An intimate look into the lives and works of over a thousand authors; delivers insights into the culture and context of centuries of British literary achievement.",
        subjects: ["English", "History", "Languages and International Studies"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/BLMO?u=byuidaho",
    },
    {
        name: "Broadway-HD Collection (Alexander Street)",
        description:
            "A collection of Broadway and Broadway-caliber shows made available to individual users, thus promoting & preserving live theatre.",
        subjects: ["General", "Music", "Theatre"],
        contentTypes: ["Video"],
        url: "https://search.alexanderstreet.com/bwhd/search?ff%5B0%5D=publishing_body_facet%3Abroadwayhd%2ABroadwayHD%7C58421",
    },
    {
        name: "Business",
        description:
            "Updated daily, find herein insights into the activities of companies and industries worldwide through business and trade publications.  ",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
        ],
        contentTypes: ["Newspapers;Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=ITBC&u=byuidaho",
    },
    {
        name: "Business Cases by ProQuest",
        description:
            "Over 10,000 business cases and case studies. Browse by subject or title.",
        subjects: ["Accounting", "Business Management"],
        contentTypes: ["Full-Text Articles;Reports / Data"],
        url: "https://www.proquest.com/browseterms/businessCases_business/0?accountid=9817",
    },
    {
        name: "Business Expert Press eBooks",
        description:
            "A library of born-digital eBooks covering business disciplines and topics, representing current business theory & practice. Available as an app: Android    Ios",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
            "Marketing",
        ],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "http://portal.igpublish.com/iglibrary/search",
    },
    {
        name: "Business Monitor International (BMI) Industry Reports",
        description:
            "Country-focused industry reports and regional insights with SWOT analysis, market trends, forecasts, & competitive data.",
        subjects: ["Accounting", "Business Management", "Marketing"],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://search.proquest.com/browseterms/bmi_business?accountid=9817",
    },
    {
        name: "Business Source Premier",
        description:
            "Find business-related articles, case studies, company profiles, industry reports, SWOT analyses, country economic reports, company profiles, etc.",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
            "Finance",
            "Marketing",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=buh&authtype=sso&custid=s8406107",
    },
    {
        name: "Business, Economics, Finance, & Accounting eBooks",
        description:
            "Reference e-books in the fields of Business. To search: scroll down to Business, Economics, Finance & Accounting and select desired subject.",
        subjects: [
            "Accounting",
            "Business Management",
            "Economics",
            "Marketing",
        ],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://onlinelibrary.wiley.com/",
    },
    {
        name: "Business: Insights",
        description:
            "Explore the world's companies through expert analysis such as SWOT analyses, financial statements, case studies, and articles. ",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
        ],
        contentTypes: ["Statistics;Full-Text Articles;Reports / Data"],
        url: "https://link-gale-com.byui.idm.oclc.org/apps/GBIB?u=byuidaho&aty=ip",
    },
    {
        name: "BYU Digital Collections",
        description:
            "Curated by BYU-Provo; contains materials from BYU Special Collections, the BYU Museum of Art, and research by BYU faculty & students.",
        subjects: ["Art", "History", "Religious Education"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://lib.byu.edu/collections/digital/",
    },
    {
        name: "BYU-Idaho McKay Library Catalog",
        description:
            "Access to the BYU-I McKay Library catalog - search for physical materials (books, CDs, DVDs, music, etc.) and eBooks in the library collection.",
        subjects: ["General"],
        contentTypes: [
            "eBooks;Video;Audio;Full-Text Articles;Musical Scores;Journals",
        ],
        url: "https://byui.ent.sirsi.net/client/en_US/main",
    },
    {
        name: "BYU-Idaho Special Collections & Archives",
        description:
            "Special Collections & Archives houses items unique to University history and campus curriculum, the local area, & the history of writing. ",
        subjects: ["Special Collections"],
        contentTypes: ["Images;Primary Resource"],
        url: "https://spc.byui.edu/",
    },
    {
        name: "C19: The Nineteenth Century Index (ProQuest)",
        description:
            "An index of records covering the printed record of the English-speaking world in the 19th century. From newspapers, registers, books, etc.; some full-text. ",
        subjects: ["History"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://www.proquest.com/c19index",
    },
    {
        name: "Canadian Newsstream",
        description:
            "Access to Canadian news outlets and newspapers including The Globe and Mail, Toronto Star. Extensive backfiles plus daily updates. ",
        subjects: ["General", "History", "Languages and International Studies"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/canadiannews",
    },
    {
        name: "Canadian Poetry",
        description:
            "This collection comprises essentially the complete cannon of English-Language Canadian poetry from the 17th to the early 20th centuries.",
        subjects: ["English", "History", "Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/cp",
    },
    {
        name: "CAS SciFinder",
        description:
            "Must register here first. A comprehensive database of chemical literature and information (drawings, molecular formulas, identifiers).",
        subjects: ["Chemistry"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://scifinder.cas.org",
    },
    {
        name: "CCH AnswerConnect",
        description:
            'A tax issues database. Click on the "Subscribers - Log in here" button on the top right, which verifies & provides access through your CAS.',
        subjects: ["Accounting"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.answerconnect.cch.com",
    },
    {
        name: "Chemical Educator Journal",
        description:
            "Access this peer-reviewed chemistry journal, covering current topics, experiments, and teaching methodology. ",
        subjects: ["Chemistry"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "http://chemeducator.org/",
    },
    {
        name: "Chicago Manual of Style Online",
        description:
            "The Chicago Manual of Style Online (17th Edition) is the venerable, time-tested guide to style, usage, and grammar in an online format.",
        subjects: ["English", "General", "History"],
        contentTypes: ["Reference;Full-Text Articles"],
        url: "https://www.chicagomanualofstyle.org/home.html",
    },
    {
        name: "Chicago Tribune",
        description:
            "This historical newspaper provides searchable first-hand account of the politics, society, & events of Chicago & surrounding area; 1849-1996.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpchicagotribune/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Children's Literature Comprehensive Database",
        description:
            "Basic descriptions, professional reviews, and curriculum tools for PreK-12th grade books and other media. ",
        subjects: ["English", "Teacher Education"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://enterprise.clcd.com",
    },
    {
        name: "Chilton Library [Automotive]",
        description:
            "Detailed guides for step-by-step vehicle maintenance and repairs. Includes videos and ASE test prep materials and printable guides. ",
        subjects: ["Automotive Engineering / Technology", "General"],
        contentTypes: ["Reference;Interactive Learning"],
        url: "https://infotrac.galegroup.com/itweb/byuidaho?db=CHLL",
    },
    {
        name: "China, America and the Pacific",
        description:
            "Explore the cultural and trading relationships that emerged between America, China and the Pacific region between the 18th-20th centuries. ",
        subjects: [
            "History",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Maps;Primary Resource;Government;Full-Text Articles"],
        url: "https://www.cap.amdigital.co.uk",
    },
    {
        name: "Choice Reviews",
        description:
            "Covering 1988-present, find book reviews, webinars, podcasts, bibliographic essays, etc. to build library collections & strengthen skills.",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.choicereviews.org",
    },
    {
        name: "Christian Science Monitor, The",
        description:
            "Read the CSM, an interantional news organization that is known for its thoughtful global coverage of current events; coverage 1908-2009. ",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpchristiansciencemonitor/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Chronicle of Higher Education",
        description:
            "The nation's largest newsroom dedicated to covering colleges and universities. Use your BYU-I email for a free account with full access.",
        subjects: ["General", "Teacher Education"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://www.chronicle.com",
    },
    {
        name: "CINAHL",
        description:
            "CINAHL, the Cumulative Index to Nursing and Allied Health Literature, indexes the top nursing and allied health literature.",
        subjects: ["Health Services", "Nursing"],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=cin20&authtype=sso&custid=s8406107",
    },
    {
        name: "Civil Rights and the Black Freedom Struggle",
        description:
            "This collection features records of the NAACP, SCLC, SNCC, CORE, and federal records of the Black Freedom Struggle. Read More | Browse the Collection | Search | ",
        subjects: ["History", "Political Science", "Special Collections"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&action=Civil%20Rights%20and%20the%20Black%20Freedom%20Struggle",
    },
    {
        name: "Civil War Collection",
        description:
            "A collection of period newspapers that covered the American Civil War. ",
        subjects: ["History", "Special Collections"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/cwco/",
    },
    {
        name: "Classical Music Library",
        description:
            "Multi-label database of 50,000+ classical music recordings for listening and learning. Find, listen to, and even buy classical music recordings.",
        subjects: ["Dance", "Music", "Theatre"],
        contentTypes: ["Audio"],
        url: "https://clmu.alexanderstreet.com/",
    },
    {
        name: "Classical Music Reference Library",
        description:
            "Brings together a variety of reference materials on music theory & technique, spanning the entire history of Western classical music. ",
        subjects: ["Biographies", "Dance", "Music", "Theatre"],
        contentTypes: ["Audio;Reference;Full-Text Articles"],
        url: "https://bakr.alexanderstreet.com",
    },
    {
        name: "Classical Scores Library",
        description:
            "Musical scores representing the classical canon from the Renaissance to the 21st century; includes full scores, study scores, vocal scores, etc.",
        subjects: ["Dance", "Music", "Theatre"],
        contentTypes: ["Musical Scores"],
        url: "https://search.alexanderstreet.com/shmu",
    },
    {
        name: "Cochrane Library",
        description:
            "The Cochrane Library consists of a regularly updated collection of evidence-based medicine reports.",
        subjects: ["Health Services", "Nursing"],
        contentTypes: ["Journals;Reports / Data"],
        url: "https://www.thecochranelibrary.com",
    },
    {
        name: "College in Context",
        description:
            "Interdisciplinary content organized by topic to facilitate research at the college level and to reinforce critical thinking, problem solving, collaboration, etc.",
        subjects: ["Art"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=CSIC&u=byuidaho&aty=ip",
    },
    {
        name: "Colonial America",
        description:
            "Digitized versions of original correspondence between the British government and the governments of the American colonies.",
        subjects: ["History", "Political Science", "Special Collections"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://www.colonialamerica.amdigital.co.uk/",
    },
    {
        name: "Colonial Newspapers",
        description:
            "Selected issues of historical newspapers, accessing eyewitness accounts of life in 18th & 19th century America. ",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/coco/",
    },
    {
        name: "ComDisDome (Communication Sciences and Disorders)",
        description:
            "An indexing and abstracting tool covering the communications disorders literature, with focus on speech-language pathology and audiology.",
        subjects: ["Communications", "Teacher Education"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://search.proquest.com/comdisdome?accountid=9817",
    },
    {
        name: "Communication and Mass Media Complete",
        description:
            "Access quality research in areas related to communication and mass media.",
        subjects: ["Business Management", "Communications", "English"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ufh&authtype=sso&custid=s8406107",
    },
    {
        name: "Communications and Mass Media",
        description:
            "Search millions of articles covering all aspects of communications, including advertising, public relations, linguistics, literature, and more.",
        subjects: ["Communications", "English", "Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://link-gale-com.byui.idm.oclc.org/apps/PPCM?u=byuidaho&aty=ip",
    },
    {
        name: "Company Profiles by Business Source Premier",
        description:
            "Profiles and information including company overviews and business descriptions, key facts, history, products and services, and top competitors. Listed by Country |  Listed by Industry",
        subjects: [
            "Accounting",
            "Business Management",
            "Economics",
            "Job and Career Resources",
        ],
        contentTypes: ["Reports / Data"],
        url: "https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000162890?isDashboardExpanded=true",
    },
    {
        name: "Compendex",
        description:
            "Engineering-focused database searching journals, conference proceedings, dissertations, standards, books, and recently preprints. Click document type to refine search.",
        subjects: [
            "Chemistry",
            "Computer Science and Electrical Engineering",
            "Mechanical & Civil Engineering",
            "Physics",
        ],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://www-engineeringvillage-com.byui.idm.oclc.org/search/quick.url",
    },
    {
        name: "Comprehensive Physiology",
        description:
            "Covers latest key developments in the field of physiology; an authoritative resource for those in the health sciences.",
        subjects: [
            "Biology",
            "Chemistry",
            "Health Services",
            "Human Performance and Recreation",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://onlinelibrary.wiley.com/doi/book/10.1002/cphy",
    },
    {
        name: "Computer Science",
        description:
            "Access leading business and technical publications in the computer, telecommunications, and electronics industries. ",
        subjects: [
            "Business Management",
            "Communications",
            "Computer Science and Electrical Engineering",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=CDB&u=byuidaho",
    },
    {
        name: "Computer Source",
        description:
            "Provides the latest information and current trends in high technology from numerous journals.",
        subjects: [
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Mathematics",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=cph&authtype=sso&custid=s8406107",
    },
    {
        name: "Conditions & Politics in Occupied Western Europe, 1940-1945",
        description:
            "Original documents from occupied territories, from various channels, after the cessation of normal peacetime activities at the close of WWII.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/6ACQ/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Congressional Publications",
        description:
            "Access congressional hearings and other information about the US Congress. | Research Guide",
        subjects: ["General", "Geography", "History", "Political Science"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://search.proquest.com/congressional",
    },
    {
        name: "Contemporary Authors",
        description:
            "Biographical information on numerous modern novelists, poets, playwrights, nonfiction writers, journalists and scriptwriters.",
        subjects: ["Biographies", "English"],
        contentTypes: ["Reference;Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=CA&u=byuidaho",
    },
    {
        name: "Contemporary Women's Issues",
        description:
            "Find comprehensive coverage of issues that influence women's lives across the globe.",
        subjects: [
            "Home and Family",
            "Political Science",
            "Sociology and Social Work",
        ],
        contentTypes: ["Newspapers;Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=CWI&u=byuidaho",
    },
    {
        name: "Contemporary World Music",
        description:
            "Delivers the sounds from all regions of the world and from every continent. ",
        subjects: ["Dance", "Music", "Theatre"],
        contentTypes: ["Audio"],
        url: "https://search.alexanderstreet.com/womu",
    },
    {
        name: "Coronavirus Research Database",
        description:
            "Covering the COVID-19 outbreak, this database curates openly available content related to coronaviruses.",
        subjects: ["Health Services"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/coronavirus",
    },
    {
        name: "Counseling and Psychotherapy Transcripts",
        description:
            "Transcripts from actual therapy and counseling sessions, first-person narratives, and reference works on mental illness.",
        subjects: ["Psychology", "Sociology and Social Work"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.alexanderstreet.com/psyc",
    },
    {
        name: "Counseling and Therapy in Video",
        description:
            "Access videos of actual therapy sessions, training videos, and reenactments conducted by counseling professionals.",
        subjects: ["Psychology", "Sociology and Social Work"],
        contentTypes: ["Video"],
        url: "https://search.alexanderstreet.com/ctiv",
    },
    {
        name: "Country Life Archive",
        description:
            "An archive (1897 to 2005) of the weekly British culture and lifestyle magazine, Country Life, focusing on fine art and architecture.",
        subjects: [
            "Applied Plant Science",
            "Art",
            "Design and Construction Management",
            "History",
            "Home and Family",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.proquest.com/countrylifearchive",
    },
    {
        name: "Country Reports by Business Source Premier",
        description:
            "Access to world-wide, country-specific data including demographic, political, economic, business, cultural and environmental information.",
        subjects: [
            "Accounting",
            "Business Management",
            "Economics",
            "Humanities and Philosophy",
            "Interdisciplinary Studies",
            "Political Science",
        ],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000123036?isDashboardExpanded=true",
    },
    {
        name: "CQ Almanac Archive",
        description:
            "The definitive annual reference for studying the U.S. Congress and its legislation. Covers 1945-2007.",
        subjects: ["General", "Geography", "History", "Political Science"],
        contentTypes: ["Government;Reference;Full-Text Articles"],
        url: "https://library.cqpress.com/cqalmanac/",
    },
    {
        name: "CQ Magazine",
        description:
            "A weekly news magazine featuring in-depth, un-biased reporting on the activities of the US Congress; coverage from 1983-present.",
        subjects: ["General", "Political Science"],
        contentTypes: ["Government;Full-Text Articles;Journals"],
        url: "https://library.cqpress.com/cqweekly",
    },
    {
        name: "CQ Researcher Plus Archives",
        description:
            "A database of in-depth, authoritative reports on a full range of political and social-policy issues, dating from 1923-present. ",
        subjects: [
            "General",
            "History",
            "Political Science",
            "Sociology and Social Work",
        ],
        contentTypes: ["Statistics;Full-Text Articles"],
        url: "https://library.cqpress.com/cqresearcher/",
    },
    {
        name: "CRC Handbook of Chemistry & Physics",
        description:
            "The CRC Handbook of Chemistry and Physics is a reference book providing high-quality data for chemical compounds and physical particles. ",
        subjects: ["Chemistry", "Physics"],
        contentTypes: ["eBooks;Reference"],
        url: "https://hbcp.chemnetbase.com/",
    },
    {
        name: "Criminal Justice",
        description:
            "Research source for those studying law or law enforcement or those training for paralegal, forensics, sociology, investigation, security, etc.",
        subjects: [
            "Political Science",
            "Psychology",
            "Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPCJ&u=byuidaho",
    },
    {
        name: "Culinary Arts",
        description:
            "Information from major cooking and nutrition magazines and eBooks. Includes restaurant reviews, recipes, and industry information.",
        subjects: ["Animal and Food Science", "Home and Family"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPCA&u=byuidaho",
    },
    {
        name: "Daily Mail Historical Archive, 1896-2004",
        description:
            "The Daily Mail has been the heart of British Journalism since 1896; this archive allows you to access to its content thru 2004.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=DMHA&u=byuidaho",
    },
    {
        name: "Dance Education Literature & Research descriptive index (DELRdi)",
        description:
            "Provides documents & citations about dance, dance education & research, techniques, and more. From the National Dance Education Organization.",
        subjects: ["Dance"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://delrdiresearch.online/",
    },
    {
        name: "Dance in Video",
        description:
            "Dance in Video provides hundreds of hours of video content covering the full scope of 20th and 21st century dance. ",
        subjects: ["Dance", "Theatre"],
        contentTypes: ["Video"],
        url: "https://video.alexanderstreet.com/channel/dance-online-dance-in-video",
    },
    {
        name: "Defining Gender, 1450-1910",
        description:
            "Explore 600 years of of gender views in this vast body of British source material.",
        subjects: [
            "English",
            "History",
            "Psychology",
            "Sociology and Social Work",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.gender.amdigital.co.uk/",
    },
    {
        name: "Dictionary of Literary Biography",
        description:
            "Contains thousands of biographical and critical essays on the lives, works, and careers of the world's most influential literary figures.",
        subjects: [
            "Biographies",
            "English",
            "Languages and International Studies",
        ],
        contentTypes: ["Reference;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=DLBC&u=byuidaho",
    },
    {
        name: "Digital Dissertations and Theses Global",
        description:
            "A collection of millions of dissertations and theses from around the world - coverage from 1743 to the present; thousands of annual additions.",
        subjects: [
            "Biology",
            "Dance",
            "General",
            "Health Services",
            "History",
            "Humanities and Philosophy",
            "Interdisciplinary Studies",
            "Mathematics",
            "Music",
            "Political Science",
            "Sociology and Social Work",
            "Theatre",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/pqdtglobal",
    },
    {
        name: "Digital Library of Classic Protestant Texts",
        description:
            "Access an extensive range of seminal works from the Reformation and post-Reformation eras.",
        subjects: [
            "English",
            "History",
            "Humanities and Philosophy",
            "Religious Education",
            "Special Collections",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/tcpt",
    },
    {
        name: "Digital National Security Archive (DNSA)",
        description:
            "A trove of declassified US government documents from 1945 to the present.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://search.proquest.com/dnsa",
    },
    {
        name: "Digital Scholar Lab",
        description:
            "Apply natural language processing tools to raw text data (OCR) from Gale Primary Sources (or any .txt file) in this research platform. Select Microsoft Log in; use BYU-I email.",
        subjects: ["History"],
        contentTypes: ["Statistics;Interactive Learning"],
        url: "https://link-gale-com.byui.idm.oclc.org/apps/DSLAB?u=byuidaho&aty=ip",
    },
    {
        name: "Digital Theatre+",
        description:
            "Stream full-length British theatre productions including Shakespeare, classics, musical theater, dance, opera, and recent productions.",
        subjects: ["Dance", "Theatre"],
        contentTypes: ["Video"],
        url: "https://edu.digitaltheatreplus.com",
    },
    {
        name: "Directory Library",
        description:
            "Directories give non-biased information on companies, publishers, associations, etc. Users have the ability to sort, filter, & export. ",
        subjects: ["Business Management", "Communications"],
        contentTypes: ["Reference"],
        url: "https://link-gale-com.byui.idm.oclc.org/apps/GDL?u=byuidaho&aty=ip",
    },
    {
        name: "Diversity Studies",
        description:
            "The Diversity Studies Collection explores cultural differences, contributions, and influences in the global community. ",
        subjects: [
            "History",
            "Humanities and Philosophy",
            "Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPDS&u=byuidaho",
    },
    {
        name: "DSM Library",
        description:
            "The most comprehensive, current, and critical resource for clinical practice for today's mental health clinicians and researchers (5 titles).",
        subjects: ["Nursing", "Psychology"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://dsm.psychiatryonline.org/",
    },
    {
        name: "DSM-5 Diagnostic and Statistical Manual of Mental Disorders",
        description:
            "Direct access to to the diagnostic manual portion of the DSM-5 library.",
        subjects: ["Nursing", "Psychology"],
        contentTypes: ["eBooks;Reference"],
        url: "https://doi-org.byui.idm.oclc.org/10.1176/appi.books.9780890425787",
    },
    {
        name: "Early American Fiction 1789-1875",
        description:
            "Early American Fiction 1789 - 1875 contains the full text of hundred of early masterpieces of American fiction. ",
        subjects: ["English"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343198504?accountid=9817",
    },
    {
        name: "Early Encounters in North America: Peoples, Cultures, and the Environment",
        description:
            "Documents the relationships among peoples in North America from 1534 to 1850; gleaned from narrative, diaries, journals, & letters.",
        subjects: ["History", "Special Collections"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/eena",
    },
    {
        name: "Early English Books Online",
        description:
            "Page images of almost every work printed in the British Isles and North America, as well as works in English printed elsewhere from 1470-1700. ",
        subjects: ["English", "History", "Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/eebo",
    },
    {
        name: "Early English Prose Fiction",
        description:
            "A collection of more than 200 works from the period 1500 - 1700, exploring the prose fiction in English preceding the form of the realist novel.",
        subjects: ["English", "History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343194076?accountid=9817",
    },
    {
        name: "Early Modern Books",
        description:
            "Brings together searches from two databases: Early English Books Online (EEBO) and Early European Books.",
        subjects: ["English", "History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/emb/literature/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Eastern Idaho Obituary Index",
        description:
            "This index contains over 134,000 obituary records, primarily from southeastern Idaho and adjoining areas.",
        subjects: ["Family History"],
        contentTypes: ["Abstract / Citation / Index;Primary Resource"],
        url: "https://archives.byui.edu/family-history/obits",
    },
    {
        name: "Ebook Central (ProQuest)",
        description:
            "Ebook Central offers access to more than a million ebooks, many selected specifically for BYU-Idaho courses. ",
        subjects: ["General"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://ebookcentral.proquest.com/lib/byui/home.action?ebraryDocId=null",
    },
    {
        name: "eBook Collections (EBSCO)",
        description:
            "Access scores high-quality eBooks and audio books in multiple disciplines from major academic publishers and university presses. Android app   iOS app",
        subjects: ["General"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=nlebk,e867sww,e866sww,e864sww,e865sww,e868sww&authtype=sso&custid=s8406107",
    },
    {
        name: "EBSCO Research Databases",
        description:
            "Search all BYU-I's subscribed EBSCO databases simultaneously. ",
        subjects: ["nan"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost,e866sww,e868sww,b6h&custid=s8406107&authtype=sso",
    },
    {
        name: "EconLit with Full Text",
        description:
            "Full-text access to key economic journals, dissertations, and books covering all types of economic topics.",
        subjects: ["Business Management", "Communications", "Economics"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eoh&authtype=sso&custid=s8406107",
    },
    {
        name: "Economics and Theory Collection",
        description:
            "Discover content useful for useful for starting a business, marketing a product, developing policy, analyzing trends, etc. ",
        subjects: ["Business Management", "Communications", "Economics"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPBE&u=byuidaho",
    },
    {
        name: "Economist Historical Archive, 1843-2015",
        description:
            "The Economist magazine has long presented timely reporting, concise commentary and comprehensive analysis of global news every week.",
        subjects: [
            "Business Management",
            "Communications",
            "Economics",
            "History",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=ECON&u=byuidaho",
    },
    {
        name: "Ed.Flicks",
        description:
            "Access over 400 early childhood video training segments, featuring topics like Challenging Behaviors, Infant & Toddler Care, Family Partnerships.",
        subjects: ["Teacher Education"],
        contentTypes: ["Video"],
        url: "https://hub.exchangepress.com/videos/",
    },
    {
        name: "Education - Primary",
        description:
            "Access magazines and reference materials designed for primary school children. All articles include Lexile reading level information. ",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=prh,e867sww,funk,ehk5&authtype=sso&custid=s8406107",
    },
    {
        name: "Education - Secondary",
        description:
            "A variety of resources designed for middle and high school students: magazines, reference books, biographies, images, & more. Includes Lexile level.",
        subjects: ["General", "Teacher Education"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=g5h,mih,ulh,funk,e865sww,e866sww&authtype=sso&custid=s8406107",
    },
    {
        name: "Education - Teachers",
        description:
            "Search multiple EBSCO Education databases designed for education professionals, pedagogy students, and policy makers. ",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eric,tfh,eue,eft&authtype=sso&custid=s8406107",
    },
    {
        name: "Education Full Text",
        description:
            "A research database for education students, professionals and policymakers covering the essentials of education & related fields. ",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eft&authtype=sso&custid=s8406107",
    },
    {
        name: "Education in Video",
        description:
            "A collection of videos for training & developing teacher with demonstrations, documentaries, classroom footage, etc.",
        subjects: ["Teacher Education"],
        contentTypes: ["Video;Primary Resource"],
        url: "https://search.alexanderstreet.com/ediv",
    },
    {
        name: "Education Index Retrospective: 1929-1983 (H.W. Wilson)",
        description:
            "An archive index chronicling over a half a century (1929-1983) of important education literature. Access full-text for many.",
        subjects: ["Teacher Education"],
        contentTypes: ["Abstract / Citation / Index;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eir&authtype=sso&custid=s8406107",
    },
    {
        name: "Education Source",
        description:
            "Thousands of education journals, books and education-related conference papers. Spans all levels of education & many specialty areas.",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eue&authtype=sso&custid=s8406107",
    },
    {
        name: "Educator's Reference Complete",
        description:
            "ERC seeks to provide full-text access for articles in the ERIC database; covers topics from all education levels, issues, and specialties.",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=PROF&u=byuidaho",
    },
    {
        name: "Eighteenth Century Collections Online",
        description:
            "ECCO contains English-language and foreign-language titles published in the UK between 1701 and 1800, plus thousands from the Americas. ",
        subjects: [
            "Dance",
            "English",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
            "Special Collections",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=ECCO&u=byuidaho",
    },
    {
        name: "Eighteenth Century Drama",
        description:
            "A unique archive of almost every play submitted for license in England between 1737 and 1824, plus documents providing social context.",
        subjects: ["History", "Theatre"],
        contentTypes: ["Images;Primary Resource;Full-Text Articles"],
        url: "https://www.eighteenthcenturydrama.amdigital.co.uk/",
    },
    {
        name: "Eighteenth Century Fiction",
        description:
            "A collection of 96 complete works of English prose created during the period 1700 - 1780 by writers from the British Isles.",
        subjects: ["English", "History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343194074?accountid=9817",
    },
    {
        name: "Eighteenth Century Journals",
        description:
            "Rare journals printed between c1685 & 1815, illuminating all aspects of eighteenth-century social, political & literary life. ",
        subjects: [
            "English",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.18thcjournals.amdigital.co.uk/",
    },
    {
        name: "Emerald Insight",
        description:
            "Access Emerald Publishing's born-digital journals, books, and case studies; relevant to a wide range of subject areas.",
        subjects: [
            "Accounting",
            "Animal and Food Science",
            "Applied Plant Science",
            "Business Management",
            "Communications",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Finance",
            "Home and Family",
            "Marketing",
            "Mechanical & Civil Engineering",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://www-emerald-com.byui.idm.oclc.org/insight/",
    },
    {
        name: "Empire Online",
        description:
            "A collection of various primary source materials for the study of Empire, its theories, practices, and consequences. ",
        subjects: ["English", "History", "Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.empire.amdigital.co.uk/",
    },
    {
        name: "English Drama",
        description:
            "Plays in verse and prose from medieval mystery cycles of the late thirteenth century to the comedies and dramas of the early twentieth. ",
        subjects: ["Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343197739?accountid=9817",
    },
    {
        name: "English Poetry, Second Edition",
        description:
            "Comprises essentially the complete cannon of English poetry of the British Isles and the British empire from the 8th century to the early 20th.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343199843?accountid=9817",
    },
    {
        name: "Entrepreneurship",
        description:
            "Analyze business insights, tips, strategies, and success stories. Updated daily. Best for business schools and entrepreneurs. ",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=PPSB&u=byuidaho",
    },
    {
        name: "Environmental Studies",
        description:
            "Repository of authoritative content on green technologies. ",
        subjects: [
            "Animal and Food Science",
            "Applied Plant Science",
            "Biology",
            "Chemistry",
            "Design and Construction Management",
            "Health Services",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=GRNR&u=byuidaho",
    },
    {
        name: "Environmental Studies and Policy",
        description:
            "Explore environmental issues and concerns with diverse perspectives from the scientific community, policy makers, and corporate interests.",
        subjects: [
            "Animal and Food Science",
            "Applied Plant Science",
            "Biology",
            "Chemistry",
            "Geography",
            "Geology",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPES&u=byuidaho",
    },
    {
        name: "ERIC by EBSCO",
        description:
            "EBSCO interface for the ERIC education database, an authoritative source of indexed and full-text education literature and resources.",
        subjects: ["Teacher Education"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eric&authtype=sso&custid=s8406107",
    },
    {
        name: "Essay and General Literature Retrospective (H.W. Wilson)",
        description:
            "Collections of essays from the US, the UK, and Canada from 1900-1984. Coverage spans the range of humanities and social sciences.",
        subjects: [
            "Economics",
            "English",
            "History",
            "Humanities and Philosophy",
            "Political Science",
            "Theatre",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=egr&authtype=sso&custid=s8406107",
    },
    {
        name: "Ethnic Newswatch",
        description:
            "A comprehensive full text database of the newspapers, magazines, and journals of the ethnic, minority, and native press.",
        subjects: [
            "Geography",
            "Political Science",
            "Sociology and Social Work",
        ],
        contentTypes: ["Newspapers;Full-Text Articles;Journals"],
        url: "https://search.proquest.com/ethnicnewswatch?accountid=9817",
    },
    {
        name: "Euromonitor Passport",
        description:
            "A Global market information database with statistics, market reports, company profiles, etc. on consumers & industries in 205 countries.",
        subjects: [
            "Business Management",
            "Economics",
            "Geography",
            "Interdisciplinary Studies",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Statistics;Full-Text Articles;Reports / Data"],
        url: "https://www.portal.euromonitor.com",
    },
    {
        name: "European Views of the Americas: 1493 to 1750",
        description:
            "An index of publications related to the Americas and written in Europe before 1750, includes thousands of primary source documents.",
        subjects: ["English", "History", "Humanities and Philosophy"],
        contentTypes: ["Abstract / Citation / Index;Primary Resource"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hev&authtype=sso&custid=s8406107",
    },
    {
        name: "Explora Databases",
        description:
            "EBSCO's Explora provides a simplified search engine with access to articles of all types. Includes access to databases listed under Additional Info. ",
        subjects: ["General", "Teacher Education"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehk5&custid=s8406107&authtype=sso",
    },
    {
        name: "Faber Poetry Library",
        description:
            "The works of 50 poets published by Faber; the database continues to grow with the active support of the publisher and the poets or their estates.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343195082?accountid=9817",
    },
    {
        name: "FamilySearch",
        description:
            "Search for your ancestors and preserve and bring their stories to life in this genealogy database provided by the LDS Church.",
        subjects: ["Family History"],
        contentTypes: ["Interactive Learning"],
        url: "http://www.familysearch.org/",
    },
    {
        name: "Feminism in Cuba: Nineteenth through Twentieth Century Archival Documents",
        description:
            "This collection is a study on feminists & the feminist movement in Cuba, from the time of Cuban independence to the end of the Batista regime.",
        subjects: ["History", "Political Science", "Sociology and Social Work"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/3FIU/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Film Scripts Online",
        description:
            "An exploration of culture and cinema through the decades through the theater, revealing cultural attitudes and lifestyles.",
        subjects: ["History", "Theatre"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/afso",
    },
    {
        name: "Filmakers Library Online",
        description:
            "Award-winning documentaries with relevance across the curriculum. ",
        subjects: [
            "Communications",
            "Dance",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
            "Music",
            "Political Science",
            "Sociology and Social Work",
            "Theatre",
        ],
        contentTypes: ["Video"],
        url: "https://search.alexanderstreet.com/flon",
    },
    {
        name: "Films on Demand",
        description:
            "A comprehensive video collection of documentaries, nursing films, art and drama performances, and career and technical videos. Apps: Android      iOS",
        subjects: [
            "Dance",
            "English",
            "General",
            "Health Services",
            "History",
            "Home and Family",
            "Humanities and Philosophy",
            "Job and Career Resources",
            "Music",
            "Nursing",
            "Psychology",
            "Sociology and Social Work",
            "Theatre",
        ],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://fod.infobase.com/PortalPlayLists.aspx?wid=104034",
    },
    {
        name: "Financial Times Historical Archive",
        description:
            "This resource delivers the complete run of the London edition of this internationally known daily paper, from its first issue in 1888 through 2010. ",
        subjects: [
            "Accounting",
            "Business Management",
            "Economics",
            "Finance",
            "History",
        ],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=FTHA&u=byuidaho",
    },
    {
        name: "FindMyPast",
        description:
            "Findmypast brings the past to life with billions of historical records and newspaper pages to explore, especially for the United Kingdom.",
        subjects: ["Family History", "History"],
        contentTypes: ["Newspapers;Interactive Learning"],
        url: "https://www.findmypast.co.uk/",
    },
    {
        name: "Fine Arts",
        description:
            "Periodical database for serious students of drama, music, art history, and filmmaking. ",
        subjects: ["Art", "Humanities and Philosophy", "Music"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPFA&u=byuidaho",
    },
    {
        name: "First World War",
        description:
            "Primary sources from libraries, archives, and personal collections covering the Great War. Collected from personal accounts, military records, and more.",
        subjects: ["History", "Special Collections"],
        contentTypes: [
            "Images;Video;Audio;Maps;Primary Resource;Full-Text Articles",
        ],
        url: "https://www.firstworldwar.amdigital.co.uk/",
    },
    {
        name: "Flipster (Popular Magazines)",
        description:
            "Flipster is an easy-to-use digital magazine newsstand with popular magazines provided by BYU-Idaho. As an app:  Android     iOS ",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "http://search.ebscohost.com/login.aspx?authtype=sso&custid=s8406107&profile=eon&groupid=main",
    },
    {
        name: "Fold3",
        description:
            "Fold3 provides convenient access to military records, including the stories, photos, and documents of the men and women who served. NOTE: If you receive an error page after a search, use the Search & Browse feature at the top of the page.",
        subjects: ["Family History", "History"],
        contentTypes: ["Images;Primary Resource;Government"],
        url: "https://www-fold3-com.byui.idm.oclc.org/",
    },
    {
        name: "Food Science & Technology Abstracts",
        description:
            "FSTA indexes journals, books, conference proceedings, reports, theses, patents, standards, and legislation related to human nutrition and food science, technology, and manufacturing. ",
        subjects: ["Animal and Food Science", "Home and Family"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://www-webofscience-com.byui.idm.oclc.org/wos/fsta/basic-search",
    },
    {
        name: "Forbes",
        description:
            "A trade magazine focusing on business, investing, technology, entrepreneurship, leadership, and lifestyle. Register here first with BYU-I email for access.",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
            "Marketing",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.forbes.com/",
    },
    {
        name: "Foreign Broadcast Information Service (FBIS) Daily Reports",
        description:
            "A news archive from around the world for years 1941-1996, providing global views on the United States foreign and domestic policy after WW II.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://infoweb-newsbank-com.byui.idm.oclc.org/apps/readex/?p=FBISX",
    },
    {
        name: "Foreign Office Files for China, 1919-1980",
        description:
            "The complete British Foreign Office Files dealing with China, Hong Kong, and Taiwan from 1919 to 1980.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://www.foreignofficefileschina.amdigital.co.uk/",
    },
    {
        name: "Foreign Primary Sources, 1600--1970",
        description:
            "Provides an interpretive analysis of various European legal codes through monograph publications. ",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MLFP?u=byuidaho",
    },
    {
        name: "Foreign, Comparative, and International Law, 1600--1926",
        description:
            "Provides researchers with instant, full-text access to foreign, comparative, and international legal literature. ",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MMLF?u=byuidaho",
    },
    {
        name: "Funk and Wagnalls New World Encyclopedia",
        description:
            "Over 25,000 full-text encyclopedic entries searchable by subject or keyword; includes images & biographies. Annual updates.",
        subjects: ["Biographies", "General"],
        contentTypes: ["Reference;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=funk&authtype=sso&custid=s8406107",
    },
    {
        name: "Gale Academic OneFile",
        description:
            "Gale's multi-disciplinary database for accessing millions of peer-reviewed articles, podcasts, and more.  App:   Android    Apple  ",
        subjects: [
            "Chemistry",
            "Economics",
            "General",
            "History",
            "Marketing",
            "Political Science",
            "Psychology",
        ],
        contentTypes: ["Newspapers;Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=AONE&u=byuidaho",
    },
    {
        name: "Gale Databases",
        description:
            "A searchable listing of all Gale databases to which BYU-Idaho subscribes. ",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "https://find.gale.com/menu/commonmenu.do?userGroupName=byuidaho",
    },
    {
        name: "Gale eBooks (GVRL)",
        description:
            "Access to reference books in subjects across the curriculum from Arts to History; from Medicine to Social Science.",
        subjects: ["Art", "General", "Mathematics"],
        contentTypes: ["eBooks;Reference"],
        url: "https://link.gale.com/apps/GVRL?u=byuidaho",
    },
    {
        name: "Gale Primary Sources",
        description:
            "Search across the primary source documents in the Gale databases provided by BYU-Idaho; utilizes various search options and research tools.",
        subjects: [
            "English",
            "History",
            "Humanities and Philosophy",
            "Political Science",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=GDCS&fromProdId=GDCS&userGroupName=byuidaho",
    },
    {
        name: "Gardening and Horticulture",
        description:
            "Millions of articles from topic-specific journals plus reference titles from Delmar on gardening, landscaping, and horticulture.",
        subjects: ["Animal and Food Science", "Applied Plant Science"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPGL&u=byuidaho",
    },
    {
        name: "Garland Encyclopedia of World Music",
        description:
            "An encyclopedia devoted to music research of all the world's peoples. Consists of articles and audio recordings from experts around the world.",
        subjects: ["Music"],
        contentTypes: ["Audio;Reference;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/glnd",
    },
    {
        name: "Gender Studies",
        description:
            "Balanced coverage of this significant aspect of culture and society, covering topics such as roles, equity, identity, family, and marriage.",
        subjects: ["Sociology and Social Work"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPGB&u=byuidaho",
    },
    {
        name: "Genealogy Connect",
        description:
            'Gale Genealogy Connect provides books on the "how-to" of genealogy research plus dozens of location- and topic-related resources.',
        subjects: ["Family History", "History"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://link-gale-com.byui.idm.oclc.org/apps/GENVRL?u=byuidaho&aty=ip",
    },
    {
        name: "General OneFile",
        description:
            "Gale's largest general-interest journal & magazine resource plus accompanying reference, newspaper, and audio content.",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=ITOF&u=byuidaho",
    },
    {
        name: "GeoRef",
        description:
            "Best accessed via GeoScienceWorld. Contains a vast amount of indexed information covering a wide spectrum of geoscience literature.",
        subjects: ["Geography", "Geology"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://www.engineeringvillage.com/search/quick.url?database=2097152",
    },
    {
        name: "GeoScienceWorld",
        description:
            "A comprehensive resource for research in the geosciences; an aggregation of journals indexed, linked and inter-operable with GeoRef.",
        subjects: ["Geography", "Geology"],
        contentTypes: [
            "Abstract / Citation / Index;Maps;Full-Text Articles;Journals",
        ],
        url: "https://www.geoscienceworld.org/",
    },
    {
        name: "German Folklore and Popular Culture: Das Kloster. Scheible.",
        description:
            "This collection provides insight into the pervasive influence of German folklore on literature and popular culture.",
        subjects: [
            "English",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/4LKO/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Gerritsen Collection - Women's History Online",
        description:
            "The greatest single source for the study of women's history in the world, with materials spanning four centuries (1543-1945) and 15 languages.",
        subjects: [
            "History",
            "Languages and International Studies",
            "Sociology and Social Work",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.proquest.com/gerritsen",
    },
    {
        name: "getAbstract",
        description:
            "Delivers concise summaries of the latest, sharpest, and most relevant books in business. App:    iOS     Android    ",
        subjects: [
            "Business Management",
            "Communications",
            "General",
            "Job and Career Resources",
        ],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://www.getabstract.com/portal/byui",
    },
    {
        name: "Global Breaking Newswires",
        description:
            "Updated thrice daily, this resource gives timely access to global newswire (distributed) content.",
        subjects: ["General", "Political Science"],
        contentTypes: ["Newspapers;Primary Resource"],
        url: "https://search.proquest.com/globalwires?accountid=9817",
    },
    {
        name: "Global Issues",
        description:
            "Overviews plus access to extensive international viewpoints on a broad spectrum of current global issues, topics, and events from accurate and timely sources.",
        subjects: [
            "Economics",
            "Geography",
            "Health Services",
            "History",
            "Political Science",
            "Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=GIC&u=byuidaho",
    },
    {
        name: "Global Newsstream",
        description:
            "Access recent & archived content from newspapers, newswires, and news sites from across the world - includes four component databases.",
        subjects: [
            "General",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://search.proquest.com/globalnews?accountid=9817",
    },
    {
        name: "Global Plants",
        description:
            "A growing collection of nearly three million high-resolution type specimens and related materials from contributors around the world.",
        subjects: ["Applied Plant Science", "Biology"],
        contentTypes: ["Images;Primary Resource;Full-Text Articles"],
        url: "https://plants.jstor.org/",
    },
    {
        name: "Global Road Warrior",
        description:
            "Country by country guide designed for those engaged in international trade & business travel. Includes points of interest, climate, internet, etc.",
        subjects: [
            "Business Management",
            "Communications",
            "Geography",
            "Languages and International Studies",
            "Political Science",
            "Sociology and Social Work",
        ],
        contentTypes: ["Reports / Data"],
        url: "https://www.globalroadwarrior.com/?c=DUVHJTs2Za",
    },
    {
        name: "GospeLink",
        description:
            "GospeLink is a reference library of Latter-day Saint resources. ",
        subjects: ["General", "Religious Education"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://www.gospelink.com/",
    },
    {
        name: "GreenFILE",
        description:
            "A database covering environmental concerns. It indexes scholarly and general interest titles, as well as government documents and reports. ",
        subjects: [
            "Applied Plant Science",
            "Biology",
            "Chemistry",
            "Geography",
            "Political Science",
        ],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=8gh&authtype=sso&custid=s8406107",
    },
    {
        name: "GuideStar by Candid",
        description:
            "GuideStar provides data on every non-profit organization registered with the IRS.",
        subjects: [
            "Business Management",
            "Communications",
            "Finance",
            "Job and Career Resources",
        ],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://www.guidestar.org/AdvancedSearch.aspx",
    },
    {
        name: "HarpWeek: Civil War Era, Reconstruction, and Gilded Age",
        description:
            "Full-text electronic access to Harper's Weekly newspaper (1857-1912) covering these collections: Civil War Era, Reconstruction, Gilded Age I, II, III & IV.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://app.harpweek.com",
    },
    {
        name: "Harvard Business Publishing Core Curriculum",
        description:
            "76 readings that cover entrepreneurship, finance, accounting, marketing, operations management, organizational behavior and strategy. ",
        subjects: ["Business Management"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hcc&authtype=sso&custid=s8406107",
    },
    {
        name: "Harvard Business Publishing eBook Collection - Worldwide",
        description:
            "This collection includes the complete catalog of e-books published by Harvard Business Review Press; providing access to hundreds of e-books.",
        subjects: ["Business Management"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=e076mww&authtype=sso&custid=s8406107",
    },
    {
        name: "Harvard Business School Select Case Study Collection",
        description:
            "2,000+ Harvard Business School case studies providing real-world scenarios and commentary. ",
        subjects: ["Business Management"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=t098sww&authtype=sso&custid=s8406107",
    },
    {
        name: "Health and Medicine",
        description:
            "Resources on health care topics found in medical journals, periodicals, reference books, pamphlets, and videos (of procedures & live surgeries).",
        subjects: [
            "Health Services",
            "Human Performance and Recreation",
            "Nursing",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=HRCA&u=byuidaho",
    },
    {
        name: "Health and Wellness",
        description:
            "Delivers up-to-date reference material plus full-text magazines, journals, and pamphlets from a wide variety of authoritative medical sources.",
        subjects: [
            "Health Services",
            "Human Performance and Recreation",
            "Nursing",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=HWRC&u=byuidaho",
    },
    {
        name: "Health Databases Search (EBSCO)",
        description:
            "Searches CINAHL, Health Source: Nursing/Academic Edition, MEDLINE.",
        subjects: ["nan"],
        contentTypes: ["Full-Text Articles"],
        url: "https://web-p-ebscohost-com.byui.idm.oclc.org/ehost/search/basic?vid=0&sid=727c3ba3-a1bd-4aad-8a99-9c8d94ed640b%40redis",
    },
    {
        name: "Health Source : Consumer Edition",
        description:
            "A collection of less-scholarly health information from consumer health magazines, reference books, and current health pamphlets. ",
        subjects: ["General", "Health Services", "Nursing"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hxh&authtype=sso&custid=s8406107",
    },
    {
        name: "Health Source : Nursing & Academic Edition",
        description:
            "A trusted full-text database covering nursing and allied health topics: pediatric, critical care, mental health, nursing management, medical law, etc.",
        subjects: [
            "Health Services",
            "Human Performance and Recreation",
            "Nursing",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hch&authtype=sso&custid=s8406107",
    },
    {
        name: "Hispanic American Newspapers, 1808-1980",
        description:
            "Hundreds of fully searchable newspapers published in the United States by and for Hispanics.",
        subjects: ["History", "Languages and International Studies"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://infoweb.newsbank.com/?db=EANX&d_collections=EANASP",
    },
    {
        name: "Historical Newspapers",
        description:
            "Search archives of several major US newspapers individually or together, including Chicago Tribune, NYT, and WSJ, plus the Toronto Star (coverage years vary).",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/?accountid=9817&selectids=1008864,1008804,1006744,1006091,1007871,1006744,1006056,1008718,1006360,1007155,1007154",
    },
    {
        name: "History Commons (formerly Accessible Archives)",
        description:
            "Material from historic periodicals and books sharing eyewitness accounts, vivid descriptions of daily life, editorial observations, commerce, and genealogical records. ",
        subjects: ["Family History", "History", "Special Collections"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/",
    },
    {
        name: "History of Science, Technology and Medicine",
        description:
            "History of Science, Technology and Medicine reflects the influences these fields have had on society and culture throughout time. ",
        subjects: ["History", "Humanities and Philosophy"],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=htm&authtype=sso&custid=s8406107",
    },
    {
        name: "History Vault",
        description:
            "Access millions of primary source materials in five collections; cross-searchable, full-text documents and full images from various archives. ",
        subjects: ["History", "Political Science", "Special Collections"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=home",
    },
    {
        name: "Hospitality and Tourism",
        description:
            "Content about historical and current activities in hospitality and tourism, plus information for the every-day traveler, including Fodor's guides.",
        subjects: ["General", "Geography", "Human Performance and Recreation"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPTH&u=byuidaho",
    },
    {
        name: "House and Senate Journals, Series 1, 1789-1817",
        description:
            "Journals of the House of Representatives and Senate 1789 to 1817, covering the first 14 Congresses of the United States.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://infoweb-newsbank-com.byui.idm.oclc.org/iw-search/we/Digital?p_product=HSJA&p_action=keyword&p_theme=sset2&p_nbid=M69M59VPMTY5NTY2MjgwOC45ODkyNjY6MToxNDoxMzIuMTc0LjI1NS40OQ&p_clear_search=yes&d_refprod=HSJA&",
    },
    {
        name: "Humanities & Social Sciences Index Retrospective: 1907-1984 (H.W. Wilson)",
        description:
            "An index of influential humanities and social science journals published from 1907-1984; includes articles and book reviews.",
        subjects: [
            "English",
            "Humanities and Philosophy",
            "Sociology and Social Work",
        ],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hsr&authtype=sso&custid=s8406107",
    },
    {
        name: "Humanities Source",
        description:
            "Offers a single resource for accessing full-text humanities content from EBSCO and H.W. Wilson to provide comprehensive and relevant results. ",
        subjects: ["Art", "English", "Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hus&authtype=sso&custid=s8406107",
    },
    {
        name: "IBISWorld",
        description:
            "IBISWorld is a rich source of in-depth and concise business intelligence information - research, reports, statistics, etc.",
        subjects: [
            "Business Management",
            "Communications",
            "Job and Career Resources",
        ],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://my.ibisworld.com",
    },
    {
        name: "Idaho Newspapers",
        description:
            "Current Idaho newspapers - most include at least a ten year archive. Includes news from Boise, Idaho Falls, Moscow, Twin Falls, AP Wire, & more. See Additional Info for complete list.",
        subjects: ["General", "History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://infoweb.newsbank.com/apps/news/browse-multi?p=WORLDNEWS&t=country%3AUSA%21USA/state%3AID%21USA%2B-%2BIdaho&f=advanced&action=browse",
    },
    {
        name: "Idaho State Death Index",
        description:
            "Created by the state of Idaho; an index of all deaths that occurred in Idaho from 1911-1951 and were filed with the Idaho Bureau of Vital Statistics. ",
        subjects: ["Family History", "Special Collections"],
        contentTypes: ["Abstract / Citation / Index;Government"],
        url: "https://archives.byui.edu/family-history/deaths",
    },
    {
        name: "Idaho Statesman Collection",
        description:
            "Archive of the [Boise,] Idaho Statesman newspaper from its founding in 1864.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://infoweb.newsbank.com/apps/news/browse-multi?p=WORLDNEWS&f=advanced&t=favorite%3AIDAHO%21Idaho%20Statesman%20Collection",
    },
    {
        name: "IEEE Xplore Digital Library",
        description:
            "Access to all IEEE journals, conferences, and standards; representing almost 1/3 of the world's electrical engineering and computer science lit.",
        subjects: [
            "Automotive Engineering / Technology",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Mechanical & Civil Engineering",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://ieeexplore.ieee.org",
    },
    {
        name: "Illustrated Civil War Newspapers & Magazines",
        description:
            "Access to important and rare periodicals from Confederate, Union, Abolitionist, and British Presses. ",
        subjects: ["History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://staging.lincolnandthecivilwar.com",
    },
    {
        name: "Illustrated London News Historical Archive, 1842-2003",
        description:
            "Search the complete digital edition (over 260,000 full color pages) of the world's first illustrated weekly newspaper.",
        subjects: ["Art", "Communications", "History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=ILN&u=byuidaho",
    },
    {
        name: "Image Quest - Discontinued 5/1/25",
        description:
            "For more free & Creative Commons (CC) licensed images see below:List compiled by BYU-I faculty  |  JSTOR Images  |  ",
        subjects: ["Art", "General"],
        contentTypes: ["Images"],
        url: "nan",
    },
    {
        name: "Images of America: A History of American Life in Images and Texts",
        description:
            "An indexed database of images and text depicting the spirit and life of communities across the United States of America and parts of Canada. ",
        subjects: ["Art", "History"],
        contentTypes: ["Images;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/lrho",
    },
    {
        name: "Images of the American Civil War: Photographs, Posters & Ephemera",
        description:
            "An illustrated view of life during the American Civil War and 19th-century America.",
        subjects: ["History"],
        contentTypes: ["Images;Full-Text Articles"],
        url: "https://search-alexanderstreet-com.byui.idm.oclc.org/cpho",
    },
    {
        name: "Indigenous Histories and Cultures in North America",
        description:
            "Explore manuscripts, artwork, and rare printed books dating from early European colonization up to photographs and Indigenous newspapers from the mid-twentieth century. ",
        subjects: ["History"],
        contentTypes: ["Images;Full-Text Articles"],
        url: "https://www.aihc.amdigital.co.uk",
    },
    {
        name: "Indigenous Newspapers in North America",
        description:
            "Nearly 200 years of Indigenous print journalism from the US and Canada.",
        subjects: ["Geography", "History"],
        contentTypes: ["Images;Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://www.indigenousnewspapersinnorthamerica.amdigital.co.uk/",
    },
    {
        name: "Industry Reports in Business Source Premier",
        description:
            "These profiles identify market size and segmentation, competitive landscape, and provide forecast data of market performance and trends.",
        subjects: ["Business Management", "Finance", "Marketing"],
        contentTypes: ["Reports / Data"],
        url: "https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000123002?isDashboardExpanded=true",
    },
    {
        name: "Information Science",
        description:
            "Periodical content covering all aspects of managing and maintaining information and technology, including usability, cataloging, business, etc.",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPIS&u=byuidaho",
    },
    {
        name: "Informe Acad\u00e9mico",
        description:
            "Search across full-text Spanish- and Portuguese-language scholarly journals and magazines from and about Latin America.",
        subjects: ["General", "Languages and International Studies"],
        contentTypes: ["Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=IFME&u=byuidaho",
    },
    {
        name: "Insider Intelligence",
        description:
            "Provides market research and trend analysis on Internet, e-business, online marketing, media and emerging technologies. ",
        subjects: [
            "Business Management",
            "Communications",
            "Economics",
            "Marketing",
        ],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://totalaccess.emarketer.com/extranet.aspx?byu",
    },
    {
        name: "International Newsstream",
        description:
            "Access recent news content from outside of the US and Canada, plus decades of archives. Features newspapers, newswires, and news sites.",
        subjects: [
            "General",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://www-proquest-com.byui.idm.oclc.org/internationalnews1?accountid=9817",
    },
    {
        name: "International Relations and Military Conflicts",
        description:
            "Features formerly confidential reports of U.S. diplomats and military officers from 1911-1975 - offers insight into accounts & perspectives. Read more | Browse | Search",
        subjects: [
            "History",
            "Languages and International Studies",
            "Political Science",
            "Special Collections",
        ],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse\u2223=59583#59583",
    },
    {
        name: "Internet Archive: BYU-Idaho Collection",
        description:
            "Search genealogy, family history, Americana, and other materials that have been digitized and indexed by BYU-Idaho, plus from repositories worldwide.",
        subjects: ["General", "History", "Special Collections"],
        contentTypes: ["eBooks;Primary Resource;Full-Text Articles"],
        url: "https://www.archive.org/search.php?query=rexburg%20AND%20mediatype%3Atexts",
    },
    {
        name: "IOPscience",
        description:
            "Full-text access to scientific, technical, and medical content in open access journals published by the Institute of Physics. Covers 1874-present.",
        subjects: ["Mathematics", "Physics"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://iopscience.iop.org",
    },
    {
        name: "IPA Source",
        description:
            "The web's largest library of International Phonetic Alphabet (IPA) transcriptions & literal translations of aria and art song texts.",
        subjects: ["Music", "Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.ipasource.com/",
    },
    {
        name: "Irish Women Poets of the Romantic Period",
        description:
            "Poetry, biographies, and essays by and about Irish women poets during the Romantic Period (1768-1842).",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343199312?accountid=9817",
    },
    {
        name: "Japanese Immigrants to the United States, 1887-1924",
        description:
            "Part of BYU-Idaho's special collections, this resource provides students with thousands of records on the early Japanese immigrants to the United States. ",
        subjects: ["Family History", "History"],
        contentTypes: [
            "Abstract / Citation / Index;Primary Resource;Government",
        ],
        url: "https://archives-byui-edu.byui.idm.oclc.org/family-history/japan/jnames",
    },
    {
        name: "Jazz Music Library",
        description:
            "The largest and most comprehensive collection of jazz available online - with thousands of jazz artists, ensembles, albums, and genres.",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://jazz.alexanderstreet.com",
    },
    {
        name: "Jewish Life in America, 1654-1954",
        description:
            "Explore the history of American Jewish communities, the communal & social aspects of Jewish identity & culture, and their influence on American society.",
        subjects: ["History", "Religious Education"],
        contentTypes: ["Images;Primary Resource;Full-Text Articles"],
        url: "https://www.jewishlife.amdigital.co.uk",
    },
    {
        name: "Journal & Newspaper Finder",
        description:
            "Use this link to find which periodicals you can access thru McKay library databases; particularly helpful for searchers with only a citation. ",
        subjects: ["General"],
        contentTypes: ["Newspapers"],
        url: "https://library.byui.edu/journals/",
    },
    {
        name: "Journal of Visualized Experiments (JoVE)",
        description:
            "Peer-reviewed scientific videos to assist in research and education. Biology Journal | Biology Education | Neuroscience Ed. | BYU-I JoVE subscribed content list \r\n ",
        subjects: [
            "Biology",
            "Chemistry",
            "Computer Science and Electrical Engineering",
            "Health Services",
            "Mechanical & Civil Engineering",
            "Nursing",
            "Physics",
            "Psychology",
        ],
        contentTypes: ["Video;Full-Text Articles"],
        url: "https://www-jove-com.byui.idm.oclc.org/research/biology",
    },
    {
        name: "JSTOR",
        description:
            "A digital library with access millions of academic journals, books, and primary sources in over 50 languages. ",
        subjects: [
            "General",
            "Interdisciplinary Studies",
            "Sociology and Social Work",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles;Journals"],
        url: "https://www.jstor.org/",
    },
    {
        name: "JSTOR Images | Artstor",
        description:
            "Explore millions of images for research contributed by universities, archives, museums, plus community and private collections. ",
        subjects: [
            "Art",
            "Design and Construction Management",
            "History",
            "Interdisciplinary Studies",
        ],
        contentTypes: ["Images"],
        url: "https://www.jstor.org/images#artstor-collections",
    },
    {
        name: "Kanopy",
        description:
            "Streaming rights for movies. This site for admin only; not public facing.",
        subjects: ["General"],
        contentTypes: ["Video"],
        url: "https://www.kanopy.com/user/19356",
    },
    {
        name: "Knovel Science and Engineering",
        description:
            "Knovel provides access to books, datasets, and reference works for engineering, life sciences, and physical sciences. Apps: Android and iOS",
        subjects: [
            "Automotive Engineering / Technology",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Design and Construction Management",
            "Mathematics",
            "Mechanical & Civil Engineering",
        ],
        contentTypes: [
            "eBooks;Full-Text Articles;Interactive Learning;Journals",
        ],
        url: "https://app.knovel.com/web",
    },
    {
        name: "Landmark Records and Briefs of the U.S. Courts of Appeals",
        description:
            "Chronicles the first 90 years of US appellate courts, highlighting legal, social, economic, and political issues from 1891 to 1980.",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MMLR?u=byuidaho",
    },
    {
        name: "Language & Linguistics",
        description:
            "Search journals, ebooks, and reference materials on Language & Linguistics by topic in the Wiley Online Library. See Additional Info for list of topics.",
        subjects: [
            "Communications",
            "English",
            "Languages and International Studies",
        ],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://onlinelibrary.wiley.com/topic/browse/000075",
    },
    {
        name: "Latin America and the Caribbean - Content now part of Gale's Academic OneFile",
        description: "Access to Academic OneFile. ",
        subjects: ["nan"],
        contentTypes: ["nan"],
        url: "nan",
    },
    {
        name: "Latin American Newsstream",
        description:
            "Search the most recent & archival local, national, and regional news from countries throughout Latin America - content in Spanish and Portuguese.",
        subjects: [
            "Geography",
            "History",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/latinamericanews?accountid=9817",
    },
    {
        name: "Legal Treatises, 1800--1926 (Gale Primary Sources)",
        description:
            "A comprehensive database of Anglo-American legal treatises from 1800-1926, covering various legal topics and sourced from major libraries, enabling extensive legal research.",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MOML?u=byuidaho",
    },
    {
        name: "LegalTrac",
        description:
            "Index of hundreds of law reviews, some link to full-text articles. Covers federal & state law, legal practice, and some international law.",
        subjects: ["Political Science"],
        contentTypes: [
            "Abstract / Citation / Index;Newspapers;Government;Full-Text Articles",
        ],
        url: "https://go.gale.com/ps/start.do?p=LT&u=byuidaho",
    },
    {
        name: "Legislative Insight",
        description:
            "Compilations of full-text Congressional publications that follow the process leading to the enactment of specific US Public laws.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Statistics;Government;Full-Text Articles"],
        url: "https://search.proquest.com/legislativeinsight",
    },
    {
        name: "Libby",
        description:
            "Popular eBooks and audiobooks from various publishers; covering a variety of interests and ages. App: Android     iOS ",
        subjects: ["General"],
        contentTypes: ["eBooks"],
        url: "https://libbyapp.com/library/byu",
    },
    {
        name: "Liberty Magazine Historical Archive, 1924-1950",
        description:
            "Offers a view of early 20th century American life through a delightful range of art, stories, articles, and advertisements.",
        subjects: ["Art", "Dance", "English", "History", "Music", "Theatre"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/LBRT?u=byuidaho",
    },
    {
        name: "LinkedIn Learning",
        description:
            "An online educational platform to discover and develop business, technology, and creative skills through expert course videos. Use BYU-I email as log-in.",
        subjects: [
            "Art",
            "Business Management",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "General",
            "Interdisciplinary Studies",
            "Job and Career Resources",
        ],
        contentTypes: ["Video;Interactive Learning"],
        url: "https://www.linkedin.com/learning/",
    },
    {
        name: "Listening",
        description:
            "Streaming audio of classical, popular, opera, jazz and world music. Also includes, liner notes, biographies, and images.",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://search-alexanderstreet-com.byui.idm.oclc.org/musp",
    },
    {
        name: "Literary Encyclopedia",
        description:
            "A scholarly, dynamic resource on literary and cultural history with expert-authored articles and teaching tools.",
        subjects: ["English", "Languages and International Studies"],
        contentTypes: ["Reference;Full-Text Articles"],
        url: "https://www.litencyc.com/",
    },
    {
        name: "Literary Index",
        description:
            "Search this digital master index to find coverage of authors and works in products published by Gale.",
        subjects: ["English"],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/LITN?u=byuidaho",
    },
    {
        name: "Literary Manuscripts (Berg Collection)",
        description:
            "Poems, working notebooks, manuscripts, and drawings from Victorian authors, allowing searchers to trace the inspiration & genesis behind their works.",
        subjects: ["English", "History", "Languages and International Studies"],
        contentTypes: ["Primary Resource"],
        url: "https://www.literarymanuscriptsberg.amdigital.co.uk/",
    },
    {
        name: "Literary Manuscripts (Leeds Collection)",
        description:
            "Complete facsimile images of 190 manuscripts of 17th and 18th century verse held in the celebrated Brotherton Collection at the University of Leeds.",
        subjects: ["English", "History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.literarymanuscriptsleeds.amdigital.co.uk/",
    },
    {
        name: "Literature",
        description:
            "Search across Gale's literary databases for literary works, journal articles, criticisms, analyses, reviews, biographies, overviews, and more.",
        subjects: ["Biographies", "English"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=GLS&u=byuidaho",
    },
    {
        name: "Literature Criticism",
        description:
            "One-stop search for literary reviews from centuries ago to today.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=LCO&u=byuidaho",
    },
    {
        name: "Literature Online (LION)",
        description:
            "Tens of thousands works of English and American poetry, drama and prose, plus biographies, bibliographies, criticisms, and reference resources.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/lion",
    },
    {
        name: "Literature Resource Center",
        description:
            "Biographies, bibliographies, and critical analyses of >120,000 authors from every age and literary discipline.",
        subjects: ["Biographies", "English"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=LitRC&u=byuidaho",
    },
    {
        name: "Literature, Culture and Society in Depression Era America: Archives of the Federal Writers Project",
        description:
            "This collection presents the Federal Writers' Project (FWP) publications of all 47 states involved in the project, which ran from 1933 to 1943.",
        subjects: ["English", "History", "Political Science"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/3TQA/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "LitFinder",
        description:
            "Provides access to a wealth of literary works and secondary-source materials covering world literature and authors throughout history.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=LITF&u=byuidaho",
    },
    {
        name: "London Low Life",
        description:
            "A resource containing full color images of rare books, ephemera, maps, and other materials relating to 18th, 19th and early 20th century London.",
        subjects: ["History"],
        contentTypes: ["Maps;Primary Resource;Full-Text Articles"],
        url: "https://www.londonlowlife.amdigital.co.uk/",
    },
    {
        name: "Magill on Literature Plus",
        description:
            "Biographical essays on the most studied authors, up-to-date lists of each author's principal works, and essays on genres, themes, & settings. ",
        subjects: ["Biographies", "English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=mjh&authtype=sso&custid=s8406107",
    },
    {
        name: "Making of Modern Law",
        description:
            "Find Foreign and American legal history resources - consists of 8 collections. See additional info.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://gdc.galegroup.com/gdc/artemis?fromProdId=MMLP&p=MMLP&u=byuidaho",
    },
    {
        name: "Making of Modern Law: Primary Sources",
        description:
            "Documents published by state constitutional conventions, state codes, city charters, law dictionaries, digests, and more. ",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MMLP?u=byuidaho",
    },
    {
        name: "Making of the Modern World",
        description:
            "A series covering the history of Western trade, the modern labor movement, the evolution of the working class, economic theories, and much more.",
        subjects: ["Business Management", "History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://gdc.galegroup.com/gdc/artemis?p=MOME&fromProdId=MOME&u=byuidaho",
    },
    {
        name: "Mango Languages",
        description:
            "Learn a language online! Lessons in over 70 world languages; self paced with adaptive technology. App:   Android    iOS ",
        subjects: ["Languages and International Studies"],
        contentTypes: ["Interactive Learning"],
        url: "https://connect.mangolanguages.com/byui/login",
    },
    {
        name: "Manuscript Women's Letters and Diaries",
        description:
            "Brings together personal writings from women in the 18th, 19th, and 20th centuries. Indexed and displayed as images of the originals.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/mwld",
    },
    {
        name: "Map as History",
        description:
            "A collection of more than 230 animated historical maps for demonstrating the development of world history events over time.",
        subjects: [
            "Foundations & GE (General Education)",
            "Geography",
            "History",
            "Humanities and Philosophy",
            "Political Science",
        ],
        contentTypes: ["Maps"],
        url: "https://www.the-map-as-history.com/connect-ip-byu",
    },
    {
        name: "Market Research & American Business, 1935-1965",
        description:
            "This collection provides insight into the American consumer boom of the mid-20th century. ",
        subjects: [
            "Business Management",
            "Communications",
            "Economics",
            "History",
        ],
        contentTypes: ["Primary Resource;Statistics;Full-Text Articles"],
        url: "https://www.marketresearch.amdigital.co.uk",
    },
    {
        name: "Market Research Reports / Publications in Business Source Premier",
        description:
            "Market Research Reports offer detailed analyses about a specific market situations by subject. ",
        subjects: ["Business Management", "Economics", "Finance", "Marketing"],
        contentTypes: ["Reports / Data"],
        url: "http://search.ebscohost.com/login.aspx?direct=true&setup=0&db=buh&authdb=buhjnh&browse_option=MR&site=bsi-live",
    },
    {
        name: "Mediae Latinitatis Lexicon Niermeyer",
        description:
            "Dictionary of Medieval Latin with English, French, and German translations. ",
        subjects: [
            "English",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
        ],
        contentTypes: ["Reference"],
        url: "https://dictionaries.brillonline.com/niermeyer",
    },
    {
        name: "Medici.tv",
        description:
            "Hundreds of live and archived concerts, operas, ballets, documentaries, artist portraits, educational programs, and master classes.  iOS  |  Android",
        subjects: ["Dance", "Humanities and Philosophy", "Music", "Theatre"],
        contentTypes: ["Video;Audio"],
        url: "https://edu.medici.tv",
    },
    {
        name: "Medieval Family Life",
        description:
            "Search full-color images of medieval manuscripts of family letter collections and their transcripts (viewable side-by side).",
        subjects: ["History", "Humanities and Philosophy"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.medievalfamilylife.amdigital.co.uk/",
    },
    {
        name: "Medieval Travel Writing",
        description:
            "Manuscripts of some of the most important works of European travel writing from the later medieval period.",
        subjects: ["Geography", "History", "Humanities and Philosophy"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.medievaltravel.amdigital.co.uk/",
    },
    {
        name: "MEDLINE",
        description:
            "Bibliographic database with citations and abstracts for biomedical & health journals; some link to full text. ",
        subjects: ["Health Services", "Nursing"],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=cmedm&authtype=sso&custid=s8406107",
    },
    {
        name: "Mergent Intellect",
        description:
            "Provides access to private and public US and international business data, industry news, facts and figures, executive contact information, & more.",
        subjects: ["Business Management", "Marketing"],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://www.mergentintellect.com/",
    },
    {
        name: "Mergent Online",
        description:
            "Detail on US and International public companies: business description, history, property, subsidiaries, officers, long-term debt and capital stock. ",
        subjects: ["Business Management", "Marketing"],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://www.mergentonline.com/",
    },
    {
        name: "Met Opera on Demand",
        description:
            "Enjoy hundreds of recordings of Met Opera performances: live HD productions, archived classics, and telecasts. New content added regularly.",
        subjects: ["Dance", "Humanities and Philosophy", "Music", "Theatre"],
        contentTypes: ["Video"],
        url: "https://ondemand.metopera.org/",
    },
    {
        name: "Middle East Online: Arab-Israeli Relations, 1917-1970",
        description:
            "Wide source of materials on Arab-Israeli relations from the Balfour Declaration through the Black September war of 1970-71.",
        subjects: [
            "History",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/6ACM/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Middle East Online: Iraq, 1914-1974",
        description:
            "First-hand documents dating from the dismantling of the Ottoman Empire, the creation of the Iraq, through the rise of Saddam Hussein in 1974.",
        subjects: [
            "History",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/6ACN/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Middle Search Plus",
        description:
            "Designed for middle school students and their teachers; access popular magazines, biographies, essays, images, maps, and more. Includes Lexile level.",
        subjects: ["Teacher Education"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=mih,e866sww&authtype=sso&custid=s8406107",
    },
    {
        name: "Migration to New Worlds",
        description:
            "Charts the emigration experience of millions across 200 years of turbulent history from the century of immigration to the modern era.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.migration.amdigital.co.uk/",
    },
    {
        name: "Military & Government Collection",
        description:
            "Provides current news pertaining to all branches of the military. Taken from related journals and periodicals.",
        subjects: [
            "History",
            "Human Performance and Recreation",
            "Political Science",
        ],
        contentTypes: ["Government;Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=mth&authtype=sso&custid=s8406107",
    },
    {
        name: "Military and Intelligence",
        description:
            "Search scholarly journals, magazines, and reports covering all aspects of past and present military affairs. Updated daily.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Government;Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPMI&u=byuidaho",
    },
    {
        name: "Mintel Market Research Reports",
        description:
            "Compare international market developments and learn consumer attitudes & behaviors, to better to shape informed ideas and opinions.Each user must create an individual account.",
        subjects: ["Business Management", "Marketing"],
        contentTypes: ["Statistics;Full-Text Articles;Reports / Data"],
        url: "https://clients.mintel.com",
    },
    {
        name: "MLA Directory of Periodicals",
        description:
            "Information on periodicals & books series that cover literature, folklore, dramatic arts, language, linguistics, pedagogy, rhetoric, publishing, etc.",
        subjects: ["English"],
        contentTypes: ["Abstract / Citation / Index;Reference"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=kah&authtype=sso&custid=s8406107",
    },
    {
        name: "MLA International Bibliography",
        description:
            "This bibliography directs users to citations from journal articles, books, book chapters, dissertations, scholarly websites, editions, & translations. Online Course on Researching",
        subjects: ["English"],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=mzh&authtype=sso&custid=s8406107",
    },
    {
        name: "Mometrix eLibrary",
        description:
            "Study guides, flashcards, and practice questions for standardized exams including Praxis, GRE, MCAT, NCLEX, HESI A2, GMAT, etc. Just added: NCAC & POSS.",
        subjects: [
            "Academic Support Centers",
            "Accounting",
            "Applied Plant Science",
            "Biology",
            "Business Management",
            "Chemistry",
            "Computer Science and Electrical Engineering",
            "Design and Construction Management",
            "Economics",
            "English",
            "Foundations & GE (General Education)",
            "General",
            "Home and Family",
            "Human Performance and Recreation",
            "Interdisciplinary Studies",
            "Job and Career Resources",
            "Mechanical & Civil Engineering",
            "Nursing",
            "Physics",
            "Political Science",
            "Psychology",
            "Sociology and Social Work",
            "Teacher Education",
        ],
        contentTypes: ["Interactive Learning"],
        url: "https://portal.mometrixelibrary.com/?__acct=12352",
    },
    {
        name: "MotoVisuals",
        description:
            "Service and repair animations for automobiles. Enhances understanding of automotive issues with accurate visualizations.",
        subjects: ["Automotive Engineering / Technology"],
        contentTypes: ["Video"],
        url: "https://education.motovisuals.com/#!/home",
    },
    {
        name: "Mountain People: Life and Culture in Appalachia",
        description:
            "Diaries and narratives of the people, culture, and life of people in the Appalachian region of the U.S. from the Colonial era through the early 1900s.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/3XNL/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "MRI-Simmons Catalyst",
        description:
            "A consumer intelligence and discovery platform that provides marketers with fast access to actionable consumer insights. ",
        subjects: ["Business Management", "Communications"],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://insights.mrisimmons.com/university/byui",
    },
    {
        name: "Museum of Art (BYU)",
        description:
            "Enjoy virtual tours, online resources, and art database of the MOA permanent collection. Search by title, artist, medium, description, and subject.",
        subjects: ["Art"],
        contentTypes: ["Images;Full-Text Articles"],
        url: "https://moa.byu.edu",
    },
    {
        name: "Music & Performing Arts",
        description:
            "Cross search ASP audio & video resources spanning all time periods, and countless artists, composers, choreographers, and ensembles.",
        subjects: ["Dance", "Humanities and Philosophy", "Music", "Theatre"],
        contentTypes: ["Video;Audio"],
        url: "https://search-alexanderstreet-com.byui.idm.oclc.org/music-performing-arts",
    },
    {
        name: "Music Periodicals Database",
        description:
            "A database with indexes, abstracts, and full-text for hundreds of international music periodicals, most are recent; some date to the 1800s.",
        subjects: ["Music"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://search.proquest.com/iimpft?accountid=9817",
    },
    {
        name: "MyHeritage",
        description:
            "Access a variety of family history resources such as Census, Birth, Marriage, Death, Military, Immigration, Family Trees, Newspapers, etc.",
        subjects: ["Family History", "History"],
        contentTypes: ["Primary Resource;Government;Interactive Learning"],
        url: "https://www.myheritage.com/",
    },
    {
        name: "National Geographic Virtual Library",
        description:
            "A complete archive of the magazine to present (45-day embargo); includes all pages & photographs with a browsable & searchable interface. ",
        subjects: ["Art", "General", "Geography", "History"],
        contentTypes: ["Images;Full-Text Articles"],
        url: "http://infotrac.galegroup.com/itweb/byuidaho?db=NGMA",
    },
    {
        name: "National Theatre Collection",
        description:
            "World-class productions from U.K.'s National Theatre, offering significant insight in to theatre and performance studies.",
        subjects: ["Theatre"],
        contentTypes: ["Video"],
        url: "https://video.alexanderstreet.com/channel/national-theatre-collection",
    },
    {
        name: "Naxos Music Library",
        description:
            "The world\u00b4s largest online classical music library, offering millions of music tracks for listening and studying. After opening, users can click on Playlists to see BYU-I playlists and to create their own account.\r\nApp:       Android     iOS",
        subjects: ["General", "Music"],
        contentTypes: ["Audio;Full-Text Articles"],
        url: "https://brighamyui.naxosmusiclibrary.com",
    },
    {
        name: "Naxos Video Library",
        description:
            "A video library of Performing Arts: music, opera, ballet, live performance, documentaries, and more from some of the world's greatest in the fields.",
        subjects: ["Dance", "Music", "Theatre"],
        contentTypes: ["Video"],
        url: "https://brighamyui.naxosvideolibrary.com",
    },
    {
        name: "Neal A. Maxwell Institute for Religious Scholarship",
        description:
            "An academic research unit at BYU comprised of scholars studying Religion to inspire and fortify Latter-day Saints.",
        subjects: ["nan"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://mi.byu.edu/",
    },
    {
        name: "New England Journal of Medicine",
        description:
            "The New England Journal of Medicine (NEJM) is the world's leading medical journal and website. ",
        subjects: ["Nursing"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://content.nejm.org/",
    },
    {
        name: "New York Times",
        description:
            "Breaking U.S. and international news and reports covering politics, business, opinion, technology, science, health, sports, arts, books, style, and more. ",
        subjects: [
            "Business Management",
            "Communications",
            "Finance",
            "General",
            "History",
            "Interdisciplinary Studies",
            "Political Science",
        ],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://www.nytimes.com",
    },
    {
        name: "New York Times in Education",
        description:
            "A resource for faculty and students to utilize instructional strategies, activities, and teaching resources from The New York Times. Register here. ",
        subjects: [
            "Accounting",
            "Art",
            "Biology",
            "Business Management",
            "Communications",
            "Economics",
            "English",
            "General",
            "Health Services",
            "Nursing",
            "Political Science",
            "Psychology",
            "Sociology and Social Work",
        ],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://nytimesineducation.com/",
    },
    {
        name: "New York Times: ProQuest Historical Newspapers",
        description:
            "Provides researchers, genealogists, and scholars with searchable first-hand accounts and coverage of the politics, society, and events since 1851. ",
        subjects: ["Family History", "General", "History", "Political Science"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpnewyorktimes?accountid=9817",
    },
    {
        name: "News: Gale OneFile",
        description:
            "Access thousands of major U.S. regional, national, and local newspapers, papers from around the world, plus radio & TV broadcasts.",
        subjects: ["General", "History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/STND?u=byuidaho",
    },
    {
        name: "NewsBank",
        description:
            "The world's largest collection of newspapers. Find current & archived state, national, & international articles on issues, events, & people. ",
        subjects: ["Family History", "General", "History", "Political Science"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://infoweb.newsbank.com/apps/news/advanced-search/?p=WORLDNEWS&f=advanced",
    },
    {
        name: "Newspaper / Periodical databases from Gale",
        description:
            "Search the collection of Gale's historical newspapers and periodicals to which the BYU-I McKay Library subscribes. ",
        subjects: ["General", "History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://find.galegroup.com/dvnw/start.do?prodId=DVNW&userGroupName=byuidaho",
    },
    {
        name: "Newspaper Source",
        description:
            "Newspaper Source provides cover-to-cover full text for hundreds of national (U.S.), international and regional newspapers plus radio & tv news.",
        subjects: ["General"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=nfh&authtype=sso&custid=s8406107",
    },
    {
        name: "Nineteenth Century British Pamphlets",
        description:
            "A collection of the most significant pamphlets; used In the 19th century as an important means of public debate on current issues.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.jstor.org/site/primary-sources/19th-century-british-pamphlets/",
    },
    {
        name: "Nineteenth Century Collections Online",
        description:
            "Records from the 1800s, with its explosion in written materials describing this time of expansion, innovation, & change.",
        subjects: ["English", "History", "Political Science"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=NCCO&u=byuidaho",
    },
    {
        name: "Nineteenth Century UK Periodicals",
        description:
            "A collection of periodicals which cover the events, lives, values, and themes that shaped the 19th century world.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=NCUK&u=byuidaho",
    },
    {
        name: "Nineteenth Century US Newspapers",
        description:
            "Full-text content and images from numerous newspapers from a range of urban and rural regions throughout the U.S. during the 1800s.",
        subjects: [
            "Family History",
            "History",
            "Political Science",
            "Special Collections",
        ],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=NCNP&u=byuidaho",
    },
    {
        name: "Nineteenth-Century Fiction",
        description:
            "A collection of some 250 British and Irish novels from Gothic fiction to Decadent & new Woman Novels from the Victorian Era.",
        subjects: ["English"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343197091?accountid=9817",
    },
    {
        name: "Nixon Years, 1969-1974",
        description:
            "This collection provides complete FCO 7 and FCO 82 files for the entire period of Richard Nixon's presidency.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Government;Full-Text Articles"],
        url: "https://www.thenixonyears.amdigital.co.uk",
    },
    {
        name: "North American Immigrant Letters, Diaries, & Oral Histories",
        description:
            "Gathered from thousands of authors, this is a unique and personal view of what it meant to immigrate to America and Canada from 1800 - 1950.",
        subjects: ["History"],
        contentTypes: ["Audio;Primary Resource;Full-Text Articles"],
        url: "https://imld.alexanderstreet.com",
    },
    {
        name: "North American Indian Drama",
        description:
            "Numerous plays by dozens of creators representing the stories and creative energies of American Indian and First Nation playwrights.",
        subjects: ["Dance", "English", "History", "Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.alexanderstreet.com/theatre/browse/title?ff%5B0%5D=unitaccess%3AINDR-1E",
    },
    {
        name: "North American Indian Thought and Culture",
        description:
            "Bringing together biographies, photos, histories, and more, this collection shares perspectives of American Indians, Alaska Natives, & Canadian First Peoples.",
        subjects: [
            "Biographies",
            "English",
            "Geography",
            "History",
            "Humanities and Philosophy",
        ],
        contentTypes: ["Audio;Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/ibio",
    },
    {
        name: "North American Women's Drama",
        description:
            "Plays written from the Colonial times to the present by women in United States and Canada, many previously unpublished.",
        subjects: ["English", "History", "Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.alexanderstreet.com/theatre/browse/title?ff%5B0%5D=unitaccess%3AWODR-1E",
    },
    {
        name: "North American Women's Letters and Diaries",
        description:
            "Scope is from Colonial times to 1950. A detailed record of clothing, food, amusements, work, & religious activities.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://nwld.alexanderstreet.com",
    },
    {
        name: "North American Women's Magazines & Newspapers",
        description:
            "A growing, award-winning collection of the most historically important North American women's magazines and newspapers from the 1800's thru the early 1900's.",
        subjects: [
            "History",
            "Sociology and Social Work",
            "Special Collections",
        ],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/woco/",
    },
    {
        name: "Nursing and Allied Health",
        description:
            "Access authoritative content on specialized care, treatment, and patient management - includes full-text for most titles cited in CINAHL . ",
        subjects: ["Nursing"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=PPNU&u=byuidaho",
    },
    {
        name: "Nursing Core Collection",
        description:
            "Film collection designed to help nursing students in their studies and to prepare them for long-term job success in the health care system.",
        subjects: ["Health Services", "Nursing"],
        contentTypes: ["Video"],
        url: "https://fod.infobase.com/PortalPlayLists.aspx?wid=104034&level=Subject&sid=1587",
    },
    {
        name: "Nursing Databases",
        description:
            "Search three of our most popular nursing databases at once: CINAHL, Health Source: Nursing/Academic Edition, and MEDLINE.",
        subjects: ["Nursing"],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=cmedm,cin20,hch&authtype=sso&custid=s8406107",
    },
    {
        name: "Nursing Education in Video",
        description:
            "Hundreds of up-to-date nurse training videos for demonstration and training for those looking to improve their clinical skills and patient care. ",
        subjects: ["Nursing"],
        contentTypes: ["Video"],
        url: "https://search.alexanderstreet.com/mcom",
    },
    {
        name: "O'Reilly Books Online",
        description:
            "Up-to-date technical books covering software development, CAD, data, design, hardware, math, engineering, leadership, etc. App:  IOS    Anroid ",
        subjects: [
            "Automotive Engineering / Technology",
            "Business Management",
            "Communications",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Design and Construction Management",
            "General",
            "Job and Career Resources",
            "Mathematics",
        ],
        contentTypes: ["eBooks;Full-Text Articles;Interactive Learning"],
        url: "https://go.oreilly.com/byu-idaho",
    },
    {
        name: "OmniFile",
        description:
            "Multidisciplinary full-text articles covering topics including art, business, education, humanities, science, social sciences, and technology. ",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ofs&authtype=sso&custid=s8406107",
    },
    {
        name: "One Business",
        description:
            "A business-focused database for researching business & companies, marketing plans, SWOT analyses, case studies, and industry reports.",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
            "Marketing",
        ],
        contentTypes: [
            "Abstract / Citation / Index;eBooks;Newspapers;Video;Full-Text Articles;Journals",
        ],
        url: "https://www.proquest.com/pq1business?accountid=9817",
    },
    {
        name: "Opera in Video",
        description:
            "Hundred of hours of opera performances from staged productions, interviews, and documentaries. ",
        subjects: ["Dance", "Humanities and Philosophy", "Music", "Theatre"],
        contentTypes: ["Video"],
        url: "https://search.alexanderstreet.com/opiv",
    },
    {
        name: "Opposing Viewpoints",
        description:
            "Browse controversial subjects and view the pros and cons from both sides of frequently studied and discussed issues.",
        subjects: ["General"],
        contentTypes: ["Maps;Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=OVIC&u=byuidaho",
    },
    {
        name: "Oral History Online",
        description:
            "Provides indexing and searching to several thousand Oral Histories collections (in English) from around the world, plus access to many of them.",
        subjects: ["History"],
        contentTypes: ["Audio;Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/orhi",
    },
    {
        name: "Organ Cinema",
        description:
            "Learn the history, sound, and repertoire of the organ in these masterful films and recordings. No login required; click "View Project Detail.",
        subjects: ["Music"],
        contentTypes: ["Video;Audio"],
        url: "https://organcinema.com",
    },
    {
        name: "Overland Journeys: Travels in the West, 1800-1880",
        description:
            "A unique window into Western History from the view of the settlers and their journeys. Taken from various microfilm collections (listed below).",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/3FIV/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "OVID",
        description:
            "Health professionals rely on OVID for articles on current medical research; access OVID's medical journal & book collection here.",
        subjects: ["Health Services", "Nursing"],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://gateway.ovid.com/autologin.html",
    },
    {
        name: "Oxford English Dictionary (OED)",
        description:
            "The authority on the evolution of the English language over the last millennium; a guide to the meaning, history, and pronunciation to present & past words.",
        subjects: ["English", "General"],
        contentTypes: ["Reference"],
        url: "https://www.oed.com/",
    },
    {
        name: "Oxford Handbooks Online - Selected",
        description:
            "Contains in-depth, high-level articles by scholars at the top of their field. Search Politics purchased content. Search all OPU Open Access.",
        subjects: ["Political Science"],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://academic.oup.com/oxford-handbooks-online",
    },
    {
        name: "Oxford Music Online",
        description:
            "The  world's premier online music encyclopedia, offering comprehensive coverage of music, musicians, music-making, and music scholarship. ",
        subjects: ["Music"],
        contentTypes: ["Reference;Full-Text Articles"],
        url: "https://www.oxfordmusiconline.com/",
    },
    {
        name: "Oxford Reference Online",
        description:
            "Over 120 dictionaries (English and foreign languages) and reference titles from Oxford University Press's Dictionaries and Encyclopedias.",
        subjects: [
            "Accounting",
            "Applied Plant Science",
            "Art",
            "Biology",
            "Chemistry",
            "Dance",
            "English",
            "Family History",
            "General",
            "Geography",
            "Health Services",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
            "Mathematics",
            "Mechanical & Civil Engineering",
            "Music",
            "Physics",
            "Political Science",
            "Religious Education",
        ],
        contentTypes: ["Reference"],
        url: "https://www.oxfordreference.com/",
    },
    {
        name: "Oxford Research Encyclopedia of Religion",
        description:
            "Read open-access, peer-reviewed, regularly updated articles on religious themes. Homepage.",
        subjects: ["Religious Education"],
        contentTypes: ["Reference;Full-Text Articles;Journals"],
        url: "https://oxfordre-com.byui.idm.oclc.org/religion/browse?submittedFilterId=by-availability&subSite=religion&pageSize=20&sort=titlesort&avail_3=unlocked&avail_4=free",
    },
    {
        name: "Papers of Amiri Baraka, Poet Laureate of the Black Power Movement",
        description:
            "A collection of materials documenting African American author and activist Amiri Baraka. Includes poetry, speeches, publications, plays, & more.",
        subjects: ["English", "History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/3LBY/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Patrologia Latina",
        description:
            "A collection of the works of the Church Fathers from Tertullian in 200 AD to the death of Pope Innocent III in 1216.",
        subjects: ["History", "Religious Education"],
        contentTypes: ["Primary Resource"],
        url: "https://www.proquest.com/patrologialatina",
    },
    {
        name: "PBS (Alexander Street Collection)",
        description:
            "Hundreds of documentaries published by the Public Broadcasting System collected into one easily-searched interface.",
        subjects: ["General"],
        contentTypes: ["Video"],
        url: "https://search.alexanderstreet.com/pbsv",
    },
    {
        name: "Perdita Manuscripts: Women Writers, 1500-1700",
        description:
            "Discover manuscripts written or compiled by women in the British Isles during the sixteenth and seventeenth centuries. ",
        subjects: ["English", "History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.perditamanuscripts.amdigital.co.uk",
    },
    {
        name: "Performing Arts Periodicals Database",
        description:
            "Indexing and abstracts for hundreds of periodicals covering the arts & entertainment industry such as dance, music, circus, opera, film, etc.",
        subjects: [
            "Art",
            "Dance",
            "Humanities and Philosophy",
            "Music",
            "Theatre",
        ],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://search.proquest.com/iipaft?accountid=9817",
    },
    {
        name: "Periodicals Archive Online",
        description:
            "An archive of scholarly periodicals covering the arts, humanities and social science. Provides full-text access to most journals via the Periodicals Index Online.",
        subjects: ["General"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://www.proquest.com/pao",
    },
    {
        name: "Periodicals Index Online",
        description:
            "Provides citations for millions of articles published in the arts, humanities, and social sciences over the past 300 years. ",
        subjects: [
            "Art",
            "General",
            "History",
            "Humanities and Philosophy",
            "Interdisciplinary Studies",
        ],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://www.proquest.com/pio/socialsciences/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Peterson's Test and Career Prep / TERC",
        description:
            "Search thousands of college and graduate schools, identify scholarships, take practice tests, create resumes, and explore careers.",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
            "General",
            "Job and Career Resources",
            "Teacher Education",
        ],
        contentTypes: ["Full-Text Articles;Interactive Learning"],
        url: "https://link-gale-com.byui.idm.oclc.org/apps/PTCP?u=byuidaho&aty=ip",
    },
    {
        name: "Philosopher's Index",
        description:
            "A bibliographic database with abstracts covering scholarly research in all areas of philosophy going back to 1940.",
        subjects: ["Humanities and Philosophy"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://www.proquest.com/philosophersindex/socialsciences/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Physical Therapy and Sports Medicine",
        description:
            "Access to academic journals and magazines covering the fields of physical therapy, physical fitness, and sports medicine. ",
        subjects: ["Human Performance and Recreation", "Nursing"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPSM&u=byuidaho",
    },
    {
        name: "Pittsburgh Courier (1911-2002)",
        description:
            "Search and read through first-hand accounts of the politics, society, and events of the Pittsburgh & the surrounding area during the years of 1911-2002.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://www.proquest.com/hnppittsburghcourier/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "PNAS",
        description:
            "Official journal of the National Academy of Sciences (NAS) - access articles and abstracts from issues 1915 to present.",
        subjects: [
            "Biology",
            "Chemistry",
            "Computer Science and Electrical Engineering",
            "Mathematics",
            "Physics",
            "Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://www.pnas.org/",
    },
    {
        name: "PolicyMap",
        description:
            "A mapping tool with over 50,000 indicators to perform analytics on demographic and socioeconomic analysis on areas of the US.",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
            "Finance",
            "General",
            "Geography",
            "Health Services",
            "Home and Family",
            "Interdisciplinary Studies",
            "Job and Career Resources",
            "Languages and International Studies",
            "Marketing",
            "Nursing",
            "Political Science",
            "Sociology and Social Work",
        ],
        contentTypes: ["Maps;Statistics;Government"],
        url: "https://byui.policymap.com/",
    },
    {
        name: "Pop Culture Studies",
        description:
            "Access scholarly journals & magazines that both analyze and contribute to popular culture; great for Social Sciences, History, Art, & Liberal Arts courses.",
        subjects: ["Art", "History", "Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPOP&u=byuidaho",
    },
    {
        name: "Popular Culture in Britain and America, 1950-1975",
        description:
            "Popular Culture explores the dynamic period of social, political, and cultural change between 1950 and 1975. ",
        subjects: ["History", "Music"],
        contentTypes: ["Images;Video;Primary Resource;Full-Text Articles"],
        url: "https://www.rockandroll.amdigital.co.uk/",
    },
    {
        name: "Post Register Online (Idaho Falls)",
        description:
            "Access digital editions (past 30 days); plus access other southeast Idaho newspapers. For students, faculty, and staff of BYU-Idaho. Archives at  NewsBank. ",
        subjects: ["General"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://content.byui.edu/items/b22ae80b-6324-44da-8d64-fcb64588883d/1/?attachment.uuid=1f00f709-aafa-45bb-a2ee-836990ba74b2&attachment.stream=true",
    },
    {
        name: "Post War Europe: Refugees, Exile and Resettlement, 1945-1950",
        description:
            "Primary sources for studying and understanding the challenges facing the European peoples in the aftermath of World War II.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/6ACO/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "PrivCo",
        description:
            "A premiere source for business and financial data on major, non-publicly traded corporations. Use BYU-I email to create account. ",
        subjects: ["Business Management"],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://system.privco.com/academic",
    },
    {
        name: "Pronunciator",
        description:
            "Real-time, life-like language instruction. Test your pronunciation in real time. Track your progress and measure your results.",
        subjects: ["Languages and International Studies"],
        contentTypes: ["Interactive Learning"],
        url: "https://learning.pronunciator.com/getstarted.php?library_id=8061",
    },
    {
        name: "ProQuest databases",
        description:
            "Select from the ProQuest databases offered at BYU-I to search across all major subject areas.",
        subjects: ["General"],
        contentTypes: [
            "Abstract / Citation / Index;eBooks;Full-Text Articles;Journals",
        ],
        url: "https://www.proquest.com/databases/index?accountid=9817",
    },
    {
        name: "Psychological Warfare and Propaganda in World War II: Air Dropped and Shelled Leaflets and Periodicals",
        description:
            "View over 1,000 leaflets & periodicals created and disseminated during World War II by Allied and other forces.",
        subjects: ["History"],
        contentTypes: ["nan"],
        url: "https://link.gale.com/apps/collection/4OPX/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Psychology",
        description:
            "Gives access to authoritative periodical content supporting research in all fields of psychology.",
        subjects: ["Psychology"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPPC&u=byuidaho",
    },
    {
        name: "Psychology and Behavioral Science Collection",
        description:
            "Search journals covering emotional & behavioral characteristics, psychiatry & psychology, mental processes, anthropology, and observational & experimental methods. ",
        subjects: ["Psychology"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=pbh&authtype=sso&custid=s8406107",
    },
    {
        name: 'PsycINFO        --see "APA PsycINFO - EBSCOhost"',
        description: "nan",
        subjects: ["nan"],
        contentTypes: ["nan"],
        url: "https://libguides.byui.edu/az/databases?q=apa%20psycINFO%20-%20EBSCO",
    },
    {
        name: "PTSDpubs",
        description:
            "Produced by the US Department of Veterans Affairs National Center for PTSD, this database provides global abstracts on PTSD & trauma.",
        subjects: ["Nursing", "Psychology", "Sociology and Social Work"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://search.proquest.com/ptsdpubs",
    },
    {
        name: "PubMed",
        description:
            "Citations and abstracts for articles from biomedical literature, life science journals, & books. Links to some full text in journals or PubMed Central.",
        subjects: [
            "Animal and Food Science",
            "Health Services",
            "Human Performance and Recreation",
        ],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://www.ncbi.nlm.nih.gov/sites/entrez?otool=idbryulib",
    },
    {
        name: "PubMed Central",
        description:
            "A full-text archive of biomedical and life science journal literature at the US National Institutes of Health's National Library of Medicine (NIH/NLM).",
        subjects: [
            "Animal and Food Science",
            "Health Services",
            "Human Performance and Recreation",
            "Nursing",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://www.ncbi.nlm.nih.gov/pmc/",
    },
    {
        name: "Punch Historical Archive, 1841-1992",
        description:
            "From 1841 to 1992 Punch was the world's most celebrated magazine of humor and satire; search the complete archives of this formative icon.",
        subjects: ["Art", "English", "History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=PNCH&userGroupName=byuidaho",
    },
    {
        name: "Queen Victoria's Journals",
        description:
            "The full collection of Queen Victoria's surviving diaries, from her childhood days throughout her complete reign. ",
        subjects: ["English", "History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.proquest.com/qvj",
    },
    {
        name: "Rastafari Ephemeral Publications from the Written Rastafari Archives Project",
        description:
            "A collection of materials covering the Rastafari Movement from the early 1970s to the present, providing a historical time stamp & commentary.",
        subjects: ["English", "History", "Religious Education"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/8NJA/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Readers' Guide Retrospective (1890-1982)",
        description:
            "Indexing of general-interest periodical articles published in the U.S. from 1890 through 1982, the ultimate index of subjects in the popular press.",
        subjects: ["History"],
        contentTypes: ["Abstract / Citation / Index;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=rgr&authtype=sso&custid=s8406107",
    },
    {
        name: "Readex AllSearch",
        description:
            "A primary source archive that contains centuries of primary sources: books, pamphlets, newspapers, government documents, and more.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://infoweb.newsbank.com/apps/readex/?p=ARDX",
    },
    {
        name: "Recreational Sports & Therapy Journals",
        description:
            "Access three journals covering recreational sports & therapy research and news. American Journal of Recreation Therapy | Recreational Sports Journal | Therapeutic Recreation Journal.",
        subjects: ["Human Performance and Recreation"],
        contentTypes: ["Full-Text Articles"],
        url: "nan",
    },
    {
        name: "RefWorks",
        description:
            "RefWorks helps users in the research process to compile resources, store citations, and create bibliographies. Use BYU-I email to create account.",
        subjects: ["General"],
        contentTypes: ["Interactive Learning"],
        url: "https://refworks.proquest.com/",
    },
    {
        name: "Regional Business News",
        description:
            "Comprehensive full text coverage for over 80 regional business publications covering metropolitan and rural areas within the United States.",
        subjects: [
            "Business Management",
            "Communications",
            "Economics",
            "Marketing",
        ],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=bwh&authtype=sso&custid=s8406107",
    },
    {
        name: "Religion and Philosophy",
        description:
            "Search journals on multiple religious & philosophical topics; explore the impact of religion on literature, arts, & language throughout history.",
        subjects: ["Humanities and Philosophy", "Religious Education"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPRP&u=byuidaho",
    },
    {
        name: "Religion and Philosophy Collection",
        description:
            "Searches three EBSCO databases at once: Religion, Philosophy Collection, and ATLA Religion. ",
        subjects: ["Humanities and Philosophy", "Religious Education"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=rlh&authtype=sso&custid=s8406107",
    },
    {
        name: "Religions of America",
        description:
            "Discover the history and unique character of religious movements that originated in the United States and Canada in the 1800-1900s.",
        subjects: ["Religious Education", "Sociology and Social Work"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/ROAM?u=byuidaho",
    },
    {
        name: "Religious Education Archive Image Collection",
        description:
            "Photographs, drawings, and paintings of LDS historic sites, Holy Land sites, and people in LDS Church history and doctrine. Curated by BYU Library.",
        subjects: ["History", "Religious Education"],
        contentTypes: ["Images"],
        url: "https://lib.byu.edu/digital/relarchive/",
    },
    {
        name: "Religious Studies Center",
        description:
            "Enjoy publications of the Religious Studies Center, the research and publication arm of BYU Religious Education. ",
        subjects: ["nan"],
        contentTypes: ["Video;Audio;Full-Text Articles;Journals"],
        url: "https://rsc.byu.edu/",
    },
    {
        name: "Research Library",
        description:
            "A multidisciplinary resource featuring full-text scholarly journals, professional and trade publications, and magazines covering multiple subjects. ",
        subjects: [
            "Art",
            "Business Management",
            "English",
            "General",
            "Health Services",
            "History",
            "Home and Family",
            "Human Performance and Recreation",
            "Interdisciplinary Studies",
            "Music",
            "Theatre",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.proquest.com/pqrl?accountid=9817",
    },
    {
        name: "RILM Abstracts of Music Literature",
        description:
            "A comprehensive bibliography of writings about music, featuring bibliographic citations, abstracts, and indexing from around the world.",
        subjects: ["Music"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ram&authtype=sso&custid=s8406107",
    },
    {
        name: "RISM Catalog",
        description:
            "The most comprehensive documentation for music manuscripts and printed music from 1600-1800 (and beyond).",
        subjects: ["Music"],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Musical Scores",
        ],
        url: "https://opac.rism.info/index.php?id=4",
    },
    {
        name: "Romanticism: Life, Literature and Landscape",
        description:
            "Discover the working methods of Romantic poets and trace the evolution of celebrated verse with this collection from the Wordsworth Trust. ",
        subjects: ["Art", "English"],
        contentTypes: ["Images;Maps;Primary Resource;Full-Text Articles"],
        url: "https://www.romanticism.amdigital.co.uk/",
    },
    {
        name: "Roper iPOLL",
        description:
            "Search data from public opinion polls conducted in the U.S. covering thousands of topics. Searchable by keyword, topic, date, or source. Available integration with Canvas.",
        subjects: [
            "Business Management",
            "Communications",
            "Economics",
            "Health Services",
            "History",
            "Political Science",
            "Sociology and Social Work",
        ],
        contentTypes: ["Statistics"],
        url: "https://ropercenter.cornell.edu/ipoll",
    },
    {
        name: "Routledge Encyclopedia of Philosophy",
        description:
            "Articles by and about major philosophers of all periods. This version features regular updates to reflect the most current philosophical thinking.",
        subjects: ["Humanities and Philosophy"],
        contentTypes: ["Primary Resource;Reference;Full-Text Articles"],
        url: "https://www.rep.routledge.com/",
    },
    {
        name: "Routledge Handbooks Online",
        description:
            "Articles by leading scholars providing an overview of classic, current, and future trends in the Social Sciences & Humanities, plus theory, method, & debates.",
        subjects: [
            "Animal and Food Science",
            "Biology",
            "Business Management",
            "Chemistry",
            "Communications",
            "Computer Science and Electrical Engineering",
            "English",
            "General",
            "Geography",
            "Health Services",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
            "Mechanical & Civil Engineering",
            "Physics",
            "Political Science",
            "Psychology",
            "Sociology and Social Work",
        ],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://www.taylorfrancis.com/search?context=rho&sortBy=relevance&isLicensed=true&fullyOABook=true&key=&openAccess=true&OAChapter=true",
    },
    {
        name: "Sabin Americana: History of the Americas, 1500-1926",
        description:
            "Books, pamphlets, etc. on the Americas from 1500-1926, providing original accounts of exploration, trade, colonialism, Native Americans, & more.",
        subjects: ["Economics", "English", "History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=SABN&u=byuidaho",
    },
    {
        name: "Sage Journals",
        description:
            "Full-text access to hundreds of journals in Business, Humanities, Social Sciences, Science, Technology, and Medicine from SAGE Publications.",
        subjects: [
            "Home and Family",
            "Nursing",
            "Psychology",
            "Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://online.sagepub.com/",
    },
    {
        name: "Salem Press",
        description:
            "A broad range of e-books covering literature, history, science, health, and career topics published by Salem Press, H.W. Wilson, and Grey House. ",
        subjects: [
            "English",
            "General",
            "Health Services",
            "History",
            "Nursing",
            "Psychology",
        ],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://online.salempress.com",
    },
    {
        name: "San Francisco Chronicle",
        description:
            "Read through first-hand accounts of the politics, society, and events of San Francisco and the surrounding area; 1865-1922.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpsfchronicle/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Sanborn Digital Maps 1867-1970",
        description:
            "Sanborn fire insurance maps provide maps of more than 12,000 American towns and cities; useful for urban planners, genealogists, geographers, etc.",
        subjects: ["Family History", "Geography", "History"],
        contentTypes: ["Maps;Primary Resource"],
        url: "https://sanborn.umi.com",
    },
    {
        name: "Schlager Digital Library",
        description:
            "A collection of over 2,500 primary sources covering world history, ethnic and gender studies, American government, and religious studies.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://library.schlagergroup.com/",
    },
    {
        name: "Science (AAAS)",
        description:
            "Science is a leading outlet for scientific news, commentary, and cutting-edge research. Full-text access via the publisher, 1880s-present. ",
        subjects: ["Biology", "Chemistry", "Physics"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://science.sciencemag.org/",
    },
    {
        name: "Science in Context",
        description:
            "Science In Context showcases how scientific disciplines relate to real-world issues ranging from bacteria to obesity and weather. ",
        subjects: [
            "Biographies",
            "Biology",
            "Chemistry",
            "Health Services",
            "Physics",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=SCIC&u=byuidaho",
    },
    {
        name: "ScienceDirect",
        description:
            "Explore scientific, technical, and medical research in over 620 full-text journals from Elsevier. Years of coverage vary by journal.",
        subjects: [
            "Animal and Food Science",
            "Applied Plant Science",
            "Biology",
            "Computer Science and Electrical Engineering",
            "Geology",
            "Health Services",
            "Home and Family",
            "Human Performance and Recreation",
            "Mathematics",
            "Mechanical & Civil Engineering",
            "Nursing",
            "Psychology",
            "Sociology and Social Work",
        ],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://www.sciencedirect.com",
    },
    {
        name: "Scopus",
        description:
            "Abstracts & citations for scientific journals, books, & more covering research across all scientific and technical disciplines. Can register with BYU-I email. ",
        subjects: [
            "Animal and Food Science",
            "Applied Plant Science",
            "Art",
            "Automotive Engineering / Technology",
            "Biology",
            "Business Management",
            "Chemistry",
            "Economics",
            "General",
            "Geography",
            "Geology",
            "Health Services",
            "Humanities and Philosophy",
            "Nursing",
            "Physics",
        ],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://www.scopus.com",
    },
    {
        name: "Scottish Women Poets of the Romantic Period",
        description:
            "Contains 60 volumes of Romantic Poetry, extensive contemporary critical reviews, as well as material specially written for this database by leading scholars.Project commissioned by Alexander Street Press. Part of the ProQuest Literature Online series (LION)",
        subjects: ["Art", "English", "Humanities and Philosophy"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://www-proquest-com.byui.idm.oclc.org/lion/docview/2343193964?accountid=9817",
    },
    {
        name: "Scribner Writer Series",
        description:
            "Access original, scholar-signed essays on the lives and works of authors from around the world and from all time periods. ",
        subjects: ["Biographies", "English"],
        contentTypes: ["Full-Text Articles"],
        url: "http://go.galegroup.com/ps/start.do?p=G-Scrib&u=byuidaho&authCount=1",
    },
    {
        name: "Scripture Citation Index",
        description:
            "An index linking scriptures to places they are cited in general conference talks, Journal of Discourses, and Teachings of the prophet Joseph Smith. ",
        subjects: ["General", "Religious Education"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "http://scriptures.byu.edu/",
    },
    {
        name: "Seventeenth and Eighteenth Century Burney Newspapers Collection",
        description:
            "The Burney Collection represents the largest single collection of 17th & 18th century English news media.",
        subjects: ["History", "Special Collections"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=BBCN&u=byuidaho",
    },
    {
        name: "Seventeenth and Eighteenth Century Nichols Newspapers Collection",
        description:
            "The Nichols Collection London newspapers, broadsheets, and pamphlets collected by J. Nichols, covering the years 1672 to 1737.",
        subjects: [
            "Geography",
            "History",
            "Languages and International Studies",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/NICN?u=byuidaho",
    },
    {
        name: "Shakespeare in Performance",
        description:
            "Go behind the scenes and explore how Shakespeare's plays have been interpreted by theatre companies, actors and directors around the world. ",
        subjects: ["English", "Theatre"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.shakespeareinperformance.amdigital.co.uk",
    },
    {
        name: "Shakespeare Quarterly",
        description:
            "A leading journal in Shakespeare studies, published by the Oxford Press for the Folger Shakespeare Library, with essays, notes, and reviews. 5 yr. embargo.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://www.jstor.org/journals/00373222.html",
    },
    {
        name: "Short Story Index",
        description:
            "Index to English short stories that have been published in anthologies and selected periodicals.",
        subjects: ["English"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ssx&authtype=sso&custid=s8406107",
    },
    {
        name: "SIRS Issues Researcher",
        description:
            "Explore complex social issues with this curated, balanced database with documents and graphics that help researchers see various points of view. Legacy search site",
        subjects: [
            "Business Management",
            "Communications",
            "General",
            "Health Services",
            "Political Science",
            "Sociology and Social Work",
        ],
        contentTypes: ["Newspapers;Full-Text Articles;Journals"],
        url: "https://explore.proquest.com/sirsissuesresearcher/home?accountid=9817",
    },
    {
        name: "Sixties: Primary Documents and Personal Narratives 1960 - 1974",
        description:
            "Explore the era of the Sixties through various primary sources and scholarly commentary. NOTE: Some content might be offensive.",
        subjects: ["Biographies", "History", "Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/sixt",
    },
    {
        name: "Slavery and Anti-Slavery: A Transnational Archive",
        description:
            "A collection devoted to the transatlantic history of slavery (1600s-1800s) through books, manuscripts, court records, and serials. ",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=SAS&u=byuidaho",
    },
    {
        name: "Smithsonian Collections Online: World's Fairs and Expositions",
        description:
            "A collection of documents and ephemera from the world's fairs of 1840-1923, capturing the spirit, design, and innovations that influenced the world.",
        subjects: [
            "Art",
            "Geography",
            "History",
            "Languages and International Studies",
            "Music",
            "Theatre",
        ],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/SMIT?u=byuidaho",
    },
    {
        name: "Smithsonian Global Sound for Libraries",
        description:
            "Virtual encyclopedia of the world's musical and aural traditions. Produced in partnership with Smithsonian Folkways Recordings.",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://glmu.alexanderstreet.com",
    },
    {
        name: "Social and Cultural History: Letters and Diaries Online",
        description:
            "This resource brings together the voices of ordinary men & women from all walks of life sharing their unique perspectives on events of their days.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/lado",
    },
    {
        name: "Social Theory",
        description:
            "Documents that explore the complexities and interpret the nature of social behavior and organization. ",
        subjects: ["Sociology and Social Work"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.alexanderstreet.com/soth",
    },
    {
        name: "Something About the Author",
        description:
            "Thousands of illustrated biographical profiles of authors and illustrators for children's and young adult literature.",
        subjects: ["Biographies", "English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=SATA&u=byuidaho",
    },
    {
        name: "Southeast Idaho Oral Histories",
        description:
            "Transcribed oral histories shared by residents of Southeast Idaho. Includes histories of the area, individuals, the Teton flood, and more.",
        subjects: ["History"],
        contentTypes: ["Audio;Primary Resource;Full-Text Articles"],
        url: "https://archives.byui.edu/s/public/page/oral-histories",
    },
    {
        name: "Southern Life, Slavery, and the Civil War",
        description:
            "Features petitions on race & slavery, state laws on slavery, & records from Southern Plantations, Civil War, Reconstruction Era, & industrial slavery.Read more | Search | Browse Collections",
        subjects: ["History", "Political Science", "Special Collections"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&action=Southern%20Life,%20Slavery,%20and%20the%20Civil%20War",
    },
    {
        name: "Southern Literary Messenger: Literature of the Old South",
        description:
            "Peruse the pages of The Southern Literary Messenger; one of the most successful and influential literary magazines in the South. ",
        subjects: ["English"],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://link.gale.com/apps/collection/4KOP/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Special Reports",
        description:
            "News articles focusing on topics of current interest. Includes content from around the world to provide a global perspective. Updated daily.**** Site under construction 10/12/23 for approximately 6 more months **** ",
        subjects: ["General"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://infoweb.newsbank.com/iw-search/we/Static/?p_product=SR&p_theme=current&p_action=home",
    },
    {
        name: "Specialized Encyclopedias",
        description:
            "Links to specialized encyclopedias available in the BYU-I McKay Library. Arranged by topic.",
        subjects: ["General"],
        contentTypes: ["Reference"],
        url: "https://libguides.byui.edu/encyclopedias",
    },
    {
        name: "Springer Nature Link",
        description:
            "Online access to millions of high-quality Science, Technology, and Medicine journals; e-books; and the entire Springer Protocols collection.",
        subjects: [
            "Biology",
            "Health Services",
            "Home and Family",
            "Mathematics",
            "Mechanical & Civil Engineering",
        ],
        contentTypes: ["eBooks;Full-Text Articles;Journals"],
        url: "https://link.springer.com",
    },
    {
        name: "State Papers Online [British]",
        description:
            "State Papers Online provides access to the British State Papers, predominately the papers of the Secretary of State, for the Tudor era 1509-1603. ",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/SPOL?u=byuidaho",
    },
    {
        name: "Statista",
        description:
            "Statistical insights and facts from over 170 industries and 150 countries. Get statistics, studies, and reports in seconds in response to your query. App: Android   iOS",
        subjects: [
            "Business Management",
            "Communications",
            "Finance",
            "General",
            "Mathematics",
        ],
        contentTypes: ["Statistics;Full-Text Articles"],
        url: "https://www.statista.com/",
    },
    {
        name: "Sunday Times Historical Archive",
        description:
            "World class journalism spanning more than 180 years, including news, society, sports, arts, and politics.",
        subjects: ["General", "History"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/STHA?u=byuidaho",
    },
    {
        name: "SUR, 1931-1992",
        description:
            "The complete run of the Latin magazine, featuring fiction, poetry, philosophy, criticism, and history. Written by leading figures, primarily from Latin America. ",
        subjects: ["History", "Languages and International Studies"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/8RPY/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Swank Digital Campus",
        description:
            "Allows legal viewing of course-assigned films inside and outside the classroom. (Select SAML login for school login). Mobile app available:   Android   iOS (no app--view in Safari)",
        subjects: ["General"],
        contentTypes: ["Video"],
        url: "https://digitalcampus.swankmp.net/byuidaho279946/",
    },
    {
        name: "SWOT Analyses in Business Source Premier",
        description:
            "A SWOT Analysis provides detailed information about a company's strengths, weaknesses, opportunities, and threats.",
        subjects: ["Business Management", "Economics", "Finance", "Marketing"],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000156095?isDashboardExpanded=true",
    },
    {
        name: "Taylor & Francis Online",
        description:
            "Search and explore the millions of quality, peer-reviewed journal articles published under the Taylor & Francis, Routledge and Dove Medical Press imprints.",
        subjects: ["nan"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.tandfonline.com/",
    },
    {
        name: "Telegraph Historical Archive, 1855-2000",
        description:
            "Gain fundamental insight into domestic and international affairs with access to both the daily and Sunday editions of The Telegraph.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go.gale.com/ps/i.do?p=TGRH&sw=w&u=byuidaho&v=2.1&pg=BasicSearch&it=static&sid=bookmark-TGRH",
    },
    {
        name: "Testaments to the Holocaust",
        description:
            "Digitized holdings of the Wiener library, the first archive to collect evidence of the Holocaust and the anti-Semitic activities of the Nazi party.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/6ACL/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Theatre",
        description:
            "Works by American, European, Asian, and other dramatists from the past several centuries; includes written works, drawings, videos, etc..",
        subjects: ["Theatre"],
        contentTypes: [
            "Images;Video;Audio;Primary Resource;Full-Text Articles",
        ],
        url: "https://search.alexanderstreet.com/theatre",
    },
    {
        name: "Theatre and Drama Premium",
        description:
            "Enjoy the spectacle of theater and drama in your room; from interviews with dramatic giants to unpublished manuscripts of theatrical geniuses.",
        subjects: ["Theatre"],
        contentTypes: ["Images;Video;Primary Resource;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/drap",
    },
    {
        name: "Theatre in Context Collection",
        description:
            "This collection helps draw connections between the people who brought key productions and dramas to life: directors, designers, actors, etc. ",
        subjects: ["Theatre"],
        contentTypes: ["Images;Full-Text Articles"],
        url: "https://search.alexanderstreet.com/ticc",
    },
    {
        name: "Theatre in Video",
        description:
            "Theatre in Video contains hundreds of videos, including documentaries and definitive performances of the world's most important plays.",
        subjects: ["Art", "Theatre"],
        contentTypes: ["Video"],
        url: "https://search.alexanderstreet.com/ativ",
    },
    {
        name: "Times Digital Archive, 1785-1985, The",
        description:
            "Full-text facsimile archive of each page of the highly regarded British newspaper, The Times, from its beginning in 1785 through 1985.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=TTDA&u=byuidaho",
    },
    {
        name: "Times Literary Supplement Historical Archive",
        description:
            "Contains the full text of every issue of the Times Literary Supplement published between 1902 and the present (6 yr embargo) ",
        subjects: ["English", "History"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=TLSH&u=byuidaho&authCount=1",
    },
    {
        name: "Toronto Star",
        description:
            "Search and read through first-hand accounts and other coverage of Toronto and Canada in this newspaper archive - coverage: 1894-2020.",
        subjects: ["History"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnptorontostar/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Travel Writing, Spectacle, and World History",
        description:
            "A resource with hundreds of accounts by women of their travels across the globe from the early 1800s thru the late 1900s.",
        subjects: ["History"],
        contentTypes: ["eBooks;Primary Resource;Full-Text Articles"],
        url: "https://www-travelwriting-amdigital-co-uk.byui.idm.oclc.org/",
    },
    {
        name: "Trench Journal and Unit Magazines of the First World War",
        description:
            "A collection of magazines created by and for servicemen & women of all nations during the First World War.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.proquest.com/trenchjournals",
    },
    {
        name: "Trials, 1600--1926",
        description:
            "A comprehensive database of full-text documents from Anglo-American trials. ",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MMLT?u=byuidaho",
    },
    {
        name: "Twayne's Authors Series",
        description:
            "Find in-depth critical introductions to the lives and works of major writers. Includes influences of literary movements.",
        subjects: ["Biographies", "English"],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://go.galegroup.com/ps/start.do?p=G-Twayne&u=byuidaho&authCount=1",
    },
    {
        name: "Twentieth Century Advice Literature: North American Guides on Race, Gender, Sex, and the Family",
        description:
            "A collection of etiquette guides, self-help books, etc. from the 1900s that illustrate how American behaved and how they felt they should behave.",
        subjects: ["English", "History", "Home and Family"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.alexanderstreet.com/adli",
    },
    {
        name: "Twentieth Century North American Drama",
        description:
            "Analyze the economic, historical, social, and political psyche of North America through this collection of plays and related materials.",
        subjects: ["Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.alexanderstreet.com/theatre/browse/title?ff%5B0%5D=unitaccess%3ANADR-1E",
    },
    {
        name: "Twentieth Century Religious Thought, Volume 1, Christianity",
        description:
            "A collection of works by over 250 key worldwide religious thinkers from the early 1900s until the turn of the 21st century.",
        subjects: ["Religious Education"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.alexanderstreet.com/tcrt",
    },
    {
        name: "Twentieth-Century African American Poetry",
        description:
            "Poems by African American poets from the early 1900s, thru the Harlem Renaissance, the Black Arts movement, and into the 1990s.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343198855?accountid=9817",
    },
    {
        name: "Twentieth-Century American Poetry",
        description:
            "Fifty thousand poems by poets of the century - movements such as the modernist, Black Mountain School, Deep Image, & underground, included.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343198879?accountid=9817",
    },
    {
        name: "Twentieth-Century English Poetry",
        description:
            "A collection of poetry reflecting the multiple concerns and techniques of a century's writing from conventional to free-verse.",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://www.proquest.com/lion/docview/2343197364?accountid=9817",
    },
    {
        name: "U.S. Congressional Serial Set : 1817-1994",
        description:
            "The essential record of the United States government from the 15th thru the 103rd Congress.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Government;Full-Text Articles"],
        url: "https://infoweb-newsbank-com.byui.idm.oclc.org/apps/readex/?p=SERIAL",
    },
    {
        name: "U.S. Congressional Serial Set Maps",
        description:
            "This collection of historic maps illustrates the important role of rivers in shaping the history, politics, and geography of the United States.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Maps;Primary Resource;Full-Text Articles"],
        url: "https://infoweb-newsbank-com.byui.idm.oclc.org/apps/readex/?p=SSMAP",
    },
    {
        name: "U.S. History",
        description:
            "Search balanced coverage of events in U.S. history. Great for novice historians and academic researchers. Updated daily.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPUS&u=byuidaho",
    },
    {
        name: "U.S. History in Context",
        description:
            "A database for those seeking contextual information on hundreds of the most significant people, events, and topics in US History.",
        subjects: ["Biographies", "History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=UHIC&u=byuidaho&aty=ip",
    },
    {
        name: "U.S. Intelligence on Europe, 1945-1995",
        description:
            "Declassified US government documents surveying US intelligence activities in Europe from the end of WWII to beyond the fall of the Iron Curtain.",
        subjects: [
            "History",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Primary Resource;Government"],
        url: "https://primarysources.brillonline.com/browse/us-intelligence-on-europe",
    },
    {
        name: "U.S. Newsstream (PQ)",
        description:
            "Full text of hundreds of U.S. and international news sources.   View title list (XLS)",
        subjects: ["General"],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/newsstand?accountid=9817",
    },
    {
        name: "U.S. Supreme Court Records and Briefs, 1832--1978",
        description:
            "A comprehensive online collection of records and briefs brought before the nation's highest court by leading legal practitioners.",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/SCRB?u=byuidaho",
    },
    {
        name: "UlrichsWeb Global Serials Directory - Discontinued 1/31/2025",
        description:
            "An easy-to-search source of detailed information on more than 300,000 serials/periodicals.",
        subjects: ["General"],
        contentTypes: ["Abstract / Citation / Index;Reference"],
        url: "https://ulrichsweb.com/ulrichsweb/",
    },
    {
        name: "Upper Snake River Valley Idaho Histories",
        description:
            "Short historical sketches of pioneers who settled in the Upper Snake River Valley between 1883 and 1893.",
        subjects: ["Family History", "History", "Special Collections"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.lib.byu.edu/dlib/byui_usrv/",
    },
    {
        name: "UpToDate",
        description:
            "UpToDate is a clinical information resource covering medical specialties, calculators, Medline abstracts, drug database, etc. Apps  Android  iOS",
        subjects: ["Health Services", "Nursing"],
        contentTypes: ["Abstract / Citation / Index;Reports / Data"],
        url: "https://www.uptodate.com/contents/search",
    },
    {
        name: "Value Line",
        description:
            "Full-page reports & analyst commentaries on over 1,700 publicly traded stocks, plus reports on ~1,800 additional small & mid-cap stocks.",
        subjects: ["Business Management", "Economics"],
        contentTypes: ["Statistics;Reports / Data"],
        url: "https://research.valueline.com/secure/dashboard",
    },
    {
        name: "Victorian Popular Culture",
        description:
            "A resource for the study of popular entertainment in  1800s- early 1900s. Includes popular entertainment, sensation, magic, sideshows, etc.",
        subjects: ["English", "History"],
        contentTypes: [
            "Images;Video;Audio;Primary Resource;Full-Text Articles",
        ],
        url: "https://www.victorianpopularculture.amdigital.co.uk/",
    },
    {
        name: "Virginia Company Archives",
        description:
            " A comprehensive record of the history of the Virginia Company of London, 1606-1624.",
        subjects: ["History"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://www.virginiacompanyarchives.amdigital.co.uk/",
    },
    {
        name: "Vocational and Career Collection",
        description:
            "This collection provides full text coverage for nearly 340 trade and industry-related periodicals.",
        subjects: ["General", "Job and Career Resources"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=voh&authtype=sso&custid=s8406107",
    },
    {
        name: "Vocations and Careers",
        description:
            "Access periodical coverage on researching a vocation, finding an appropriate institution of learning, job searching, maintaining a career, etc.",
        subjects: ["General", "Job and Career Resources"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go.gale.com/ps/start.do?p=PPVC&u=byuidaho",
    },
    {
        name: "Vogue archive",
        description:
            "Searchable archive of the American Vogue magazine from 1892 to the present. Includes every page, covers, and foldouts. ",
        subjects: [
            "Art",
            "History",
            "Home and Family",
            "Humanities and Philosophy",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/vogue?accountid=9817",
    },
    {
        name: "Voices from Ellis Island: An Oral History of American Immigration",
        description:
            "Stories of immigrants who underwent examination and processing at the Ellis Island facility in upper New York harbor. ",
        subjects: ["Family History", "History", "Special Collections"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse\u2223=48990&cid=001745&action=detailAZ",
    },
    {
        name: "Wall Street Journal",
        description:
            "Leading business & economics newspaper since 1889, following advances in business, science, technology, entertainment, society, & globalization. ",
        subjects: [
            "Accounting",
            "Business Management",
            "Communications",
            "Economics",
            "Finance",
            "General",
            "History",
            "Political Science",
        ],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "http://library.byui.edu/resources/wsj/",
    },
    {
        name: "Wall Street Journal: ProQuest Historical Newspapers",
        description:
            "Historical archive of the Wall Street Journal with access to its coverage of finance, politics, and events in the nation and world of 1889-2011.",
        subjects: [
            "Business Management",
            "Economics",
            "Finance",
            "General",
            "History",
            "Political Science",
        ],
        contentTypes: ["Newspapers;Full-Text Articles"],
        url: "https://search.proquest.com/hnpwallstreetjournal?accountid=9817",
    },
    {
        name: "War and Terrorism",
        description:
            "Articles providing valuable insight into conflicts and their causes, impact, and perception on a global scale.",
        subjects: ["History", "Political Science", "Sociology and Social Work"],
        contentTypes: ["Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=PPWT&u=byuidaho",
    },
    {
        name: "Washington Post (1987-current)",
        description:
            "Access the Washington Post with its coverage of news events, politics, companies, and people in the nation and world from 1987-present.",
        subjects: ["History", "Political Science"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://www-proquest-com.byui.idm.oclc.org/washingtonpost/news/fromDatabasesLayer?accountid=9817",
    },
    {
        name: "Web of Science",
        description:
            "A premier research platform, helping users find, analyze, and share information in the sciences, social sciences, arts, and humanities. ",
        subjects: [
            "Animal and Food Science",
            "Biology",
            "Business Management",
            "Chemistry",
            "Finance",
            "Geology",
            "Mathematics",
            "Mechanical & Civil Engineering",
            "Nursing",
            "Psychology",
            "Sociology and Social Work",
        ],
        contentTypes: [
            "Abstract / Citation / Index;Full-Text Articles;Journals",
        ],
        url: "https://www.webofknowledge.com/WOS",
    },
    {
        name: "Western States Marriage Record Index",
        description:
            "An index of virtually all of the pre-1900 marriages for Arizona, Idaho and Nevada, plus many into the 1930s from Idaho and Utah counties.",
        subjects: ["Family History", "History"],
        contentTypes: ["Abstract / Citation / Index;Primary Resource"],
        url: "https://archives.byui.edu/family-history/wsmri",
    },
    {
        name: "What Can I Do With This Major?",
        description:
            "Learn typical career areas and types of employers that hire in these fields, as well as strategies to make you a more marketable candidate.",
        subjects: ["Job and Career Resources"],
        contentTypes: ["Reports / Data"],
        url: "https://whatcanidowiththismajor.com/major",
    },
    {
        name: "Wiley Online Library",
        description:
            "Multi-disciplinary content from journals, books, reference works, databases, & manuals. On landing page, scroll down to search by subject. Apps: Android     iOS  ",
        subjects: [
            "Animal and Food Science",
            "Art",
            "Biology",
            "Business Management",
            "Chemistry",
            "Computer Information Technology",
            "Computer Science and Electrical Engineering",
            "Economics",
            "English",
            "Geography",
            "Geology",
            "Health Services",
            "History",
            "Home and Family",
            "Humanities and Philosophy",
            "Mathematics",
            "Mechanical & Civil Engineering",
            "Nursing",
            "Physics",
            "Political Science",
            "Psychology",
            "Sociology and Social Work",
        ],
        contentTypes: ["eBooks;Full-Text Articles"],
        url: "https://onlinelibrary.wiley.com",
    },
    {
        name: "Women and Social Movements in the United States, 1600-2000",
        description:
            "A resource for students and scholars of U.S. history and U.S. women's history. ",
        subjects: ["History", "Sociology and Social Work"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search-alexanderstreet-com.byui.idm.oclc.org/wass",
    },
    {
        name: "Women, War, and Society, 1914-1918",
        description:
            "Documents exploring the revolutionary & permanent impact of the First World War on the personal, social, and professional lives of all women.",
        subjects: ["History", "Sociology and Social Work"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://link.gale.com/apps/collection/6ACP/GDSC?u=byuidaho&sid=bookmark-GDSC",
    },
    {
        name: "Women's Magazine Archive",
        description:
            "An archival research resource comprising the backfiles of leading women's interest consumer magazines.",
        subjects: ["History", "Home and Family"],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://search.proquest.com/wma",
    },
    {
        name: "Women's Periodicals: Social and Political Issues",
        description:
            "Historical periodicals published by, for, and/or about women, their lives, and the issues that affected them.",
        subjects: ["History", "Political Science", "Sociology and Social Work"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/aboutThisCollection?userGroupName=byuidaho&inPS=true&mCode=4ZHA&prodId=GDSC",
    },
    {
        name: "Women's Wear Daily Archive",
        description:
            "Archive of the noted fashion magazine; each page digitized in full color with searchable text & indexing. From launch to present (6 mo. embargo).",
        subjects: ["Home and Family"],
        contentTypes: ["Full-Text Articles"],
        url: "https://search.proquest.com/wwd",
    },
    {
        name: "World History",
        description:
            "Provides balanced coverage of events in world history with relevant articles updated daily - both current thinking and established scholarly work.",
        subjects: [
            "Foundations & GE (General Education)",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://go.gale.com/ps/start.do?p=PPWH&u=byuidaho",
    },
    {
        name: "World History Encyclopedia",
        description:
            "Written for the general public with academic standards, WHE helps users gain a deep, fundamental knowledge of our interconnected human past.",
        subjects: ["History", "Humanities and Philosophy", "Political Science"],
        contentTypes: ["Images;Video;Audio;Maps;Reference;Full-Text Articles"],
        url: "https://www.worldhistory.org/",
    },
    {
        name: "World History in Context",
        description:
            "Provides balanced coverage of events in world history with relevant articles, sharing both current thinking and established scholarly work. ",
        subjects: [
            "Foundations & GE (General Education)",
            "History",
            "Humanities and Philosophy",
            "Languages and International Studies",
        ],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=WHIC&u=byuidaho",
    },
    {
        name: "World History in Video",
        description:
            "Documentaries covering human history from the earliest civilizations to the late twentieth century. Content is global in scope.",
        subjects: [
            "Foundations & GE (General Education)",
            "History",
            "Languages and International Studies",
        ],
        contentTypes: ["Video"],
        url: "https://search.alexanderstreet.com/whiv",
    },
    {
        name: "World Religions",
        description:
            "Covers all the basic information on the beliefs, practices, and history of each major world religion, including leaders, holy days, topics, and texts. ",
        subjects: ["Religious Education"],
        contentTypes: ["eBooks;Video;Full-Text Articles"],
        url: "https://online.infobaselearning.com/Direct.aspx?aid=104034&pid=WE30",
    },
    {
        name: "World War I Military Camp Newspapers",
        description:
            "A collection of military camp newspapers, much written by soldiers for soldiers, covering the experiences of American soldiers during World War I Era.",
        subjects: ["Family History", "History", "Special Collections"],
        contentTypes: ["Newspapers;Primary Resource;Full-Text Articles"],
        url: "https://history-commons.net/modules/awco/",
    },
    {
        name: "World War II: U.S. Documents on Planning, Operations, Intelligence, Axis War Crimes, and Refugees",
        description:
            "Firsthand accounts of the innermost workings of the top level of military planning during World War II. Part of the History Vault Collection. More Info | Search ",
        subjects: [
            "History",
            "Languages and International Studies",
            "Political Science",
        ],
        contentTypes: ["Primary Resource;Full-Text Articles"],
        url: "https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse\u2223=34319#34319",
    },
    {
        name: "WorldCat",
        description:
            "Connecting the catalogs of thousands of libraries worldwide to help users locate and access content.",
        subjects: ["General"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://worldcat.org/",
    },
    {
        name: "XBRL - Discontinued Dec 2024",
        description:
            "A tool to help communicate, analyze, and exchange business information. Register for an account with your BYU-I email (look-up).",
        subjects: ["Accounting", "Business Management", "Finance", "Marketing"],
        contentTypes: ["Statistics"],
        url: "nan",
    },
    {
        name: "Zoological Record",
        description:
            "Web of Science access to zoological resources. Covers all aspects of modern animal research from 1978 to the present.",
        subjects: ["Biology"],
        contentTypes: ["Full-Text Articles;Journals"],
        url: "http://www.webofknowledge.com/ZOOREC",
    },
];
