export interface LibraryResource {
    name: string;
    description: string;
    url: string;
    subjects: string[];
    contentTypes: string[];
    accessNote?: string;
    moreInfo?: string;
}

export const resourceDatabase: LibraryResource[] = [
    {
        name: "McKay Library Catalog",
        description:
            "<p>Search the library's catalog for books, eBooks, media, and more.</p>",
        subjects: ["General"],
        contentTypes: ["Books", "eBooks", "Media"],
        url: "https://byui.idm.oclc.org/login?url=https://byui.ent.sirsi.net/",
        moreInfo:
            "Search the library's catalog for books, eBooks, media, and more. Both physical and digital items are included in the catalog. You can also search for items in other libraries and request them through Interlibrary Loan.",
        accessNote:
            "Access is available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "A to Z Maps Online",
        description:
            "<p>Thousands of current, proprietary, royalty-free maps of the world, continents, countries, and states.&nbsp;</p>",
        subjects: ["Family History, Geography, History, Political Science"],
        contentTypes: ["Maps"],
        url: "https://byui.idm.oclc.org/login?url=https://www.atozmapsonline.com/?c=mSeZqk7t49",
        moreInfo:
            "Included in the 4,000+ maps are: political maps, physical maps, outline maps, population maps, precipitation maps, climate maps, and other thematic maps. Updated monthly.&nbsp;",
    },
    {
        name: "Academic Search Premier ",
        description:
            "<p>EBSCO's multi-disciplinary database with millions of articles for academic study.</p>",
        subjects: [
            "Animal and Food Science, Applied Plant Science, Automotive Engineering / Technology, Business Management, Chemistry, Computer Information Technology, Computer Science and Electrical Engineering, Design and Construction Management, English, Foundations & GE (General Education), General, Health Services, History, Home and Family, Human Performance and Recreation, Humanities and Philosophy, Interdisciplinary Studies, Job and Career Resources, Languages and International Studies, Mathematics, Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=aph&authtype=sso&custid=s8406107",
        moreInfo:
            "World's largest scholarly, multi-disciplinary database accessing nearly 4,600&nbsp; publications with full text plus indexing and abstracts for over 8,000 others. Information covers nearly every area of academic study including: social sciences, humanities, education, computer sciences, engineering, physics, chemistry, language and linguistics, arts &amp; literature, medical sciences, ethnic studies, etc.&nbsp;Available as an App:&nbsp; &nbsp;&nbsp;Android&nbsp;&nbsp;&nbsp; Apple",
    },
    {
        name: "AcademicPowerSearch ",
        description:
            "<p>Gale's multi-disciplinary search through millions of pages in peer-reviewed articles, eBooks, primary sources, and more.&nbsp;</p>",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/i.do?p=GPS&sw=w&u=byuidaho&v=2.1&pg=BasicSearch&it=static&sid=bookmark-GPS",
        moreInfo: "",
    },
    {
        name: "Acceda Noticias (NewsBank)",
        description:
            "<p>Includes more than 180 Spanish-language news sources from major cities in the United States and from more than 20 countries.</p>",
        subjects: ["Languages and International Studies"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb-newsbank-com.byui.idm.oclc.org/apps/news/browse-multi?t=collection%3AANOT%21Acceda+Noticias&p=AWNB&f=advanced",
        moreInfo:
            "Acceda Noticias also includes tens of thousands of current and archived full-text articles from other news sources and complete electronic newspaper editions across Argentina, Brazil, Chile, China, Columbia, Ecuador, Mexico, Peru, Spain, and more.",
    },
    {
        name: "Access Engineering (McGraw-Hill) ",
        description:
            "<p>A collection of the most-used authoritative, regularly updated engineering reference information; interactive tools, resources, codes, etc.</p>",
        subjects: [
            "Automotive Engineering / Technology, Computer Information Technology, Computer Science and Electrical Engineering, Mechanical & Civil Engineering, Physics",
        ],
        contentTypes: [
            "eBooks",
            "Video",
            "Full-Text Articles",
            "Interactive Learning",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://accessengineeringlibrary.com",
        moreInfo:
            "Includes dynamic online features, such as books, infographics, instructional videos &amp; webinars, calculators, interactive tables and charts, as well as personalization tools allowing users to organize crucial project information as they work.For engineering students &amp; facultyPrepares students to apply solutions to real-world engineering problemsHelps engineering students visualize material properties to enhance their understanding of material classes and property valuesAids in students learning more in less time with step-by-step explanations of engineering problemsHelps engineers analyze data and reduce errors with the thousands of interactive tools in the platformAllows engineers to find updated codes &amp; standards and find relevant information faster during project concepting and designAssists in driving increased ROI and efficient &amp; sustainable project outputs For professional engineersOffers access to the most premiere and well-trusted engineering resources, including titles like, Perry\u2019s Chemical Engineers\u2019 Handbook, Marks\u2019 Standard Handbook for Mechanical Engineers, Roark\u2019s Formulas for Stress and Strain, and the Standard Handbook for Electrical Engineers.",
    },
    {
        name: "Access U.S. Newswires & Transcripts",
        description:
            "<p>Fully searchable database of current and archived articles from key newswires and broadcast transcripts from top U.S. TV and radio news shows.&nbsp;</p>",
        subjects: [
            "Business Management, Economics, Geography, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Newspapers"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/resources/search/nb?p=AWNB&t=collection%3AANW%21Access%20Newswires",
        moreInfo:
            "Includes content from the Associated Press, the Los Angeles Times, Washington Post News Service and the Targeted News Service.",
    },
    {
        name: "ACLS Humanities E-Book Project ",
        description:
            "<p><i><strong>Now Open Access Content Only</strong></i>. Books in the humanities: culture, society, history, rhetoric, language arts, visual &amp; performing arts, etc.&nbsp;</p><p>&nbsp;</p>",
        subjects: [
            "English, History, Humanities and Philosophy, Special Collections",
        ],
        contentTypes: ["eBooks", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www-fulcrum-org.byui.idm.oclc.org/heb?locale=en&user_access=true",
        moreInfo:
            "Please see our other Humanities resources such as: Humanities Source, Oxford Reference Online, and more.",
    },
    {
        name: "ACM Digital Library [Association of Computing Machinery]",
        description:
            "<p>A research, discovery, and networking platform on computer science, AI, networks, communication, multimedia, software, programming, etc.</p>",
        subjects: [
            "Computer Information Technology, Computer Science and Electrical Engineering",
        ],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://dlnext.acm.org/",
        moreInfo:
            "This platform includes:--Full-Text collection of all ACM publications, including journals, conference proceedings, technical magazines, newsletters and books.\r\n--A collection of curated and hosted full-text publications from select publishers.\r\n--The ACM Guide to Computing Literature, a comprehensive bibliographic database focused exclusively on the field of computing.\r\n--A richly interlinked set of connections among authors, works, institutions, and specialized communities.Available as an App&nbsp; &nbsp;&nbsp;Android&nbsp; &nbsp;&nbsp;Apple",
    },
    {
        name: "ACS [American Chemical Society] Journals",
        description:
            "<p>Access to chemistry-related information and research in peer-reviewed journals and eBooks.</p>",
        subjects: ["Chemistry"],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://pubs.acs.org/",
        moreInfo:
            "ACS Publications is a leader in providing access to chemistry-related information and research through peer-reviewed journal and eBooks. Research from Nobel Prize winners in Chemistry and Medicine have been published in ACS Publications in journals and eBooks.Available as an App:&nbsp;&nbsp; &nbsp;&nbsp;Android&nbsp; &nbsp;&nbsp;Apple",
    },
    {
        name: "ACSESS Digital Library",
        description:
            "<p>Search for articles published by ACSESS on crop breeding and genetics, soil physics, agro-climatology, ecology, and more.&nbsp;</p>",
        subjects: ["Animal and Food Science, Applied Plant Science"],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://acsess.onlinelibrary.wiley.com/",
        moreInfo:
            "A joint venture of the American Society of Agronomy, Crop Science Society of America, and Soil Science Society of America, providing access to all of their published literature - journals, books, and conference presentations.&nbsp;&nbsp;",
    },
    {
        name: "Acta Sanctorum",
        description:
            "<p>An encyclopedic text of the lives of Christian saints, organized by the saints' feast days - collected and published from 1629-1940.</p>",
        subjects: ["History, Religious Education"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/actasanctorum",
        moreInfo:
            "This database is an electronic version of the complete print edition published in sixty-eight volumes by the Soci\u00e9t\u00e9 des Bollandistes. It is a collection of documents examining the lives of saints, organized according to each saint's feast day. It runs from the two January volumes published in 1643 to the Propylaeum to December published in 1940. The entire Acta Sanctorum is available, including all prefatory material, original texts, critical apparatus and indices along with Bibliotheca Hagiographica Latina reference numbers.&nbsp;This collection lends itself to historical research of many kinds - social and ecclesiastical history, art and architecture, literature, folklore, and ethnology. Acta Sanctorum records every detail of domestic and public life from the beginning of the Christian era to the end of the 16th century.",
    },
    {
        name: "African American Music Reference ",
        description:
            "<p>A comprehensive collection of blues, jazz, spirituals, slave songs, minstrels, rhythm &amp; blues, gospel, hip hop, and other forms of black American musical expression.</p>",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/aamr",
        moreInfo: "",
    },
    {
        name: "African American Newspapers ",
        description:
            '<p>An collection of African American newspapers with a wealth of information about cultural life and history during the 1800s. <a href="https://byui.idm.oclc.org/login?url=https://coherentdigital.net/aanw">Learn more</a></p>',
        subjects: ["Family History, History, Special Collections"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/anco/",
        moreInfo:
            "An extensive collection of African American newspapers containing a wealth of information about cultural life and history during the 1800s rich with first-hand reports of the major events and issues of the day, all of which embody the African-American experience.Provides many related early biographies, vital statistics, essays, editorials, poetry, prose, and advertisements.&nbsp;Learn more about African American Newspapers &nbsp; &nbsp; | &nbsp; &nbsp; This resource is part History Commons'&nbsp;Accessible Archives&nbsp;collection&nbsp;Includes:&nbsp;The Canadian ObserverThe Christian RecorderThe Colored AmericanDouglass\u2019 MonthlyFrederick Douglass\u2019 PaperThe Freedmen\u2019s RecordFreedom\u2019s JournalThe North StarThe LiberatorThe National EraThe National Anti-Slavery StandardThe Negro Business League HeraldThe Provincial FreemanThe Weekly Advocate",
    },
    {
        name: "African American Poetry ",
        description:
            "<p>A collection of poetry by African American poets from the 1700s - 1800s.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/aap",
        moreInfo:
            "This collection of nearly 3,000 poems by African American poets provides a survey of the early history of African American poetry.&nbsp;Coverage includes writers from both North and South, from rural and urban backgrounds, and ranges from university-educated professionals to those for whom the very acts of reading and writing constituted a defiance of Southern slave laws.&nbsp;",
    },
    {
        name: "Agricola",
        description:
            "<p>Database of citations for the literature created by the National Agricultural Library from its early days; full coverage from 1970.&nbsp;</p>",
        subjects: ["Animal and Food Science, Applied Plant Science"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=agr&authtype=sso&custid=s8406107",
        moreInfo:
            "Agricola contains bibliographic records from the U.S. Department of Agriculture's National Agricultural Library for documents created for the land grant and other state colleges. Covers materials in all formats. The citations are comprised of journal articles, monographs, theses, patents, software, audiovisual materials, &amp; technical reports related to agriculture.",
    },
    {
        name: "Agriculture ",
        description:
            "<p>Access current and authoritative periodical content covering agriculture and its related fields.</p>",
        subjects: ["Animal and Food Science, Applied Plant Science"],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPAG&u=byuidaho",
        moreInfo:
            "&nbsp;Provides access to over 600 journals and 30 Delmar e-textbooks focused on agriculture and related fields. Provides access to current and authoritative content on topics from practical aspects of farming to cutting-edge scientific research in horticulture (coverage has a strong emphasis on titles covered in the Agricola database).",
    },
    {
        name: "AIP Publishing ",
        description:
            "<p>Current and influential news, analysis, and research in these Physical Science journals: <i>American Journal of Physics</i>, <i>Physics Today</i>, and <i>Physics Teacher</i>.&nbsp;</p>",
        subjects: ["Physics"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://pubs-aip-org.byui.idm.oclc.org/",
        moreInfo:
            "There is also substantial free and open access content available on the site.To see only content to which we have access in search results:Conduct a searchGo to \u201cUpdate Search\u201d columnScroll down to \u201cAvailability\u201dClick the appropriate boxes",
    },
    {
        name: "Alexander Street Video & Image Collection",
        description:
            "<p>Audio tracks, music scores, video performances, and reference materials for the humanities and social sciences.&nbsp;</p>",
        subjects: [
            "Dance, General, Health Services, Home and Family, Human Performance and Recreation, Humanities and Philosophy, Music, Theatre",
        ],
        contentTypes: [
            "Images",
            "Video",
            "Audio",
            "Primary Resource",
            "Full-Text Articles",
            "Musical Scores",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search-alexanderstreet-com.byui.idm.oclc.org/",
        moreInfo:
            "&nbsp;Discover over 10 million audio tracks,&nbsp;1.3 million pages of scores, thousands of video performances, along with reference materials and primary sources are included in this collection, founded&nbsp;with the goal of publishing digital collections in the humanities and social sciences. This has grown to include materials&nbsp;in the fields of counseling, anthropology, history, diversity studies, theatre, film, music, dance, news, current affairs, and the social sciences.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Alexander Street Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Alexander Street Video Home PageCollections we subscribe to:American Civil War Research DatabaseAmerican Film Scripts OnlineAmerican History in VideoBlack DramaBlack Women WritersBritish and Irish Women\u2019s Letters and DiariesClassical Scores Library, Volume 1Counseling and Psychotherapy Transcripts: Client Narratives, and Reference WorksCounseling and Therapy in Video, Volume 1Early Encounters in North AmericaFilmmakers Library OnlineGarland Encyclopedia of World MusicImages of AmericaImages of the American Civil WarNorth American Immigrant LettersDiaries and Oral HistoriesNorth American Indian DramaNorth American Indian Thought and CultureNorth American Theatre OnlineNorth American Women\u2019s DramaNorth American Women\u2019s Letters and DiariesNursing Education in VideoOpera in VideoOral History OnlineScottish Women Poets of the Romantic PeriodSocial TheoryThe American Civil War: Letters and DiariesThe Digital Library of Classic Protestant TextsThe Sixties: Primary Documents and Personal Narratives 1960 \u2013 1974Twentieth Century Advice LiteratureTwentieth Century North American DramaTwentieth Century Religious Thought, Volume 1: ChristianityWomen and Social MovementsWorld History in Video",
    },
    {
        name: "ALT HealthWatch ",
        description:
            "<p>A research database with peer-reviewed articles on holistic medicine and therapies.</p>",
        subjects: ["Health Services, Nursing"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=awh&authtype=sso&custid=s8406107",
        moreInfo:
            "A research database focused on alternative, complementary, holistic and integrated approaches to health care and wellness. It offers the latest information about the evolving practice of holistic medicine and therapies.&nbsp;It provides full text for over 140 publications, including full text for many peer-reviewed journals, from 1990 to the present.",
    },
    {
        name: "AM Explorer",
        description:
            "<p>A collection of curated historical databases with primary source products for the social sciences and humanities.&nbsp;</p>",
        subjects: [
            "Geography, History, Political Science, Sociology and Social Work, Special Collections",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.archiveexplorer.amdigital.co.uk/Default.aspx",
        moreInfo:
            "Learn more about AM ExplorerCollections at BYU-Idaho: &nbsp;&nbsp;American HistoryAmerican Indian Histories and CulturesAmerican Indian NewspapersAmerican WestChina, America and the PacificColonial AmericaConfidential Print: Latin AmericaDefining GenderEighteenth Century DramaEighteenth Century JournalsEmpire OnlineFirst World WarForeign Office Files for ChinaFrontier LifeJewish Life in America c.1654-1954Literary Manuscripts BergLiterary Manuscripts LeedsLondon Low LifeMarket Research and American BusinessMedieval Family LifeMedieval TravelMigration to New WorldsPerdita ManuscriptsRomanticism: Life, Literature and LandscapeShakespeare In PerformanceSlavery, Abolition and Social JusticeThe Nixon YearsTravel WritingVictorian Popular CultureVirginia Company Archives",
    },
    {
        name: "America: History & Life ",
        description:
            "<p>A bibliographic database focusing on the history of and life in the United States and Canada.&nbsp;</p>",
        subjects: ["Geography, History, Political Science"],
        contentTypes: ["Abstract / Citation / Index", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ahl&authtype=sso&custid=s8406107",
        moreInfo:
            "A bibliographic database focusing on the history of and life in the United States and Canada. Indexes journal coverage, includes citations and links to book &amp; media reviews along with abstracts in English for articles published in a variety of languages.&nbsp;",
    },
    {
        name: "America's Historical Imprints, 1640-1819 ",
        description:
            "<p>A collection of virtually every know book, monograph, pamphlet, and broadside published in American between 1640 and 1819.</p>",
        subjects: ["English, History, Humanities and Philosophy"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/?db=EAIX",
        moreInfo:
            "Virtually every know book, monograph, pamphlet, and broadside published in American between 1640 and 1819, plus numerous government documents and ephemera to enable researchers to explore America's distant and not so distant past.&nbsp;Available in this collection:&nbsp;Early American Imprints, Series I: Evans, 1639-1800Early American Imprints, Series IIShaw-Shoemaker, 1801-1819",
    },
    {
        name: "American Ancestors",
        description:
            '<p>Database with multiple resources for genealogical research plus the archive for the "American Ancestors" journal.</p>',
        subjects: ["Family History, History"],
        contentTypes: ["Primary Resource", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www-americanancestors-org.byui.idm.oclc.org/search/databasesearch/405/american-ancestors-magazine",
        moreInfo:
            "Published by the NEHGS (New England Historic Genealogical Society) and regarded as a premier resource for American family history.&nbsp;American Ancestors Journal Archive&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Research Databases&nbsp;&nbsp;",
    },
    {
        name: "American Antiquarian Society Historical Periodicals (Gale Primary Sources)",
        description:
            "<p>Digitized images of thousands of American newspapers, magazines, and journals published between 1684 and 1912.&nbsp;</p>",
        subjects: ["Family History, History, Special Collections"],
        contentTypes: [
            "Newspapers",
            "Primary Resource",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/AAHP?u=byuidaho",
        moreInfo:
            'This collection offers a highly comprehensive documentary history of the American experience spanning four centuries with multiple perspectives on the thought, culture, and society of North America. These periodicals present history through the eyes of those who experienced it, showing its impact on citizens from all walks of life.To see list of publications included , click on "Browse."',
    },
    {
        name: "American Antiquarian Society Historical Periodicals Collection (EBSCO)",
        description:
            "<p>Digitized images of thousands of American newspapers, magazines, and journals published between 1684 and 1912.&nbsp;</p>",
        subjects: ["Family History, History, Special Collections"],
        contentTypes: [
            "Newspapers",
            "Primary Resource",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=h9h,h9k,h9j,h9i,h9m&authtype=sso&custid=s8406107",
        moreInfo:
            "This collection provides rich details of American history and culture; provided via a partnership between the American Antiquarian Society (AAS) and EBSCO. Covers advertising, health, women's issues, science, the history of slavery, industry and professions, religious issues, culture, the arts, and more.List of Periodicals available in AAS Collection",
    },
    {
        name: "American Civil Liberties Union Papers, 1912-1990",
        description:
            "<p>Covers American civil liberties issues from 1912-1990, including immigration, civil rights, Vietnam War, and conscientious objectors, with extensive ACLU involvement and documentation.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/ACLU?u=byuidaho",
        moreInfo:
            "The Making of Modern Law: American Civil Liberties Papers, Part I, 1912-1990 contains a collection of important papers spanning the majority of the twentieth century and cover numerous topics that resonate for contemporary research. Subjects include the first 'Red Scare' following the Russian Revolution of 1917; debates in the 1920s on immigration; the American Birth Control League; lynchings in the 1930s; debates on aliens and immigrants in the years immediately preceding the U.S. entry into the Second World War; and the ACLU's involvement in two of the mid-century's most important issues: the Vietnam War and the Civil Rights movement. The conscientious objector issue during the First World War fills over 37 volumes with hundreds of letters from people objecting to military service.\r\nAmerican Civil Liberties Union, Part I consists of two major collections comprising myriad subseries. The Roger Baldwin Years, 1912-1950, contains subseries with clippings and files on academic freedom, censorship, legislation, federal departments and federal legislation, state activities, conscientious objectors, injunctions, and labor and labor organization correspondence. Years of Expansion, 1950-1990, encompasses foundation project files on the Amnesty Project, 1964-1980; the Lawyers Constitutional Defense Committee, 1964-1976; and subject files on freedom of belief, expression, and association; due process of law; equality before the law; international civil liberties; and legal case files, 1933-1990.",
    },
    {
        name: "American Civil War Letters & Diaries",
        description:
            "<p>A collection of over 2,000 diaries, letters, and memoirs of people experiencing the American Civil War.</p>",
        subjects: ["Biographies, Family History, History, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/cwld",
        moreInfo:
            "This collection is indexed to enhance searching. Includes biographies, an extensive bibliography of the sources in the database, and material licensed from The Civil War Day-by-Day.&nbsp;Part of the Alexander Street collection.",
    },
    {
        name: "American County Histories ",
        description:
            "<p>A collection of county histories from throughout the United States.</p>",
        subjects: ["Family History, Geography, History"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/amch/",
        moreInfo:
            "These books contain information about history, statistics, geology, geography, weather, government, medical systems, military, business, legal concerns, schools, cemeteries, family histories, transportation, public officials, banking, insurance, public service, and more.&nbsp; More about American County Histories collection&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;This resource is part History Commons'&nbsp;Accessible Archives&nbsp;collection &nbsp; &nbsp;",
    },
    {
        name: "American Drama 1714-1915 ",
        description:
            "<p>A comprehensive survey of American dramaturgy from its origins up to the era of sensational melodrama and manners comedy.</p>",
        subjects: ["Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343200115?accountid=9817",
        moreInfo:
            "A Collection of over 1,500 dramatic works from the colonial period to the beginning of the twentieth century (1714-1915) - comprising a comprehensive survey of American dramaturgy from its origins up to the era of sensational melodrama and manners comedy.",
    },
    {
        name: "American Fiction 1774-1920",
        description:
            "<p>Explore thousands of works of fiction written by Americans from the political beginnings of the U.S. through World War I.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link-gale-com.byui.idm.oclc.org/apps/AMFN?u=byuidaho&aty=ip",
        moreInfo: "",
    },
    {
        name: "American Geophysical Union Journals",
        description:
            "<p>A database comprising the scholarly, scientific journals published by the American Geophysical Union in earth &amp; space sciences.</p>",
        subjects: ["Geology"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://agupubs.onlinelibrary.wiley.com/search/advanced",
        moreInfo:
            "A database comprising the scholarly, scientific journals published by the American Geophysical Union covering research in the Earth and space sciences.List of the AGU journals&nbsp;in the collection.",
    },
    {
        name: "American History in Video",
        description:
            "<p>Video coverage of historical events in United States history.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Video", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/ahiv",
        moreInfo:
            "Over 760 hours of footage covering historical events in United States history, gleaned from commercial and governmental newsreels, archival footage, public affairs footage, and documentaries. Includes profiles of American leaders and personalities. Allows the researcher to examine culture, rhetoric, stereotypes, propaganda, and more in the context of history.",
    },
    {
        name: "American History, 1493-1945 ",
        description:
            "<p>This unique collection documents American History from the earliest settlers to the mid-twentieth century. From the Gilder Lehrman Collection.</p>",
        subjects: ["History, Political Science, Special Collections"],
        contentTypes: [
            "Images",
            "Video",
            "Primary Resource",
            "Full-Text Articles",
        ],
        url: "http://www.americanhistory.amdigital.co.uk/",
        moreInfo:
            "The Gilder Lehrman Collection is considered as one of the finest archives available for the study of American History.Part of the AM Explorer collection",
    },
    {
        name: "American Indians and the American West",
        description:
            '<p>Access several collections focusing on the interaction between American Indians and the U.S. government in the 19th and 20th Centuries.</p><p>&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&amp;action=American%20Indians%20and%20the%20American%20West">Read More</a> | <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=advanced_ui&amp;module=7410">Search </a>| <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&amp;mid=7410#7410">Browse&nbsp;</a></p>',
        subjects: ["History, Special Collections"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&mid=7410#7410",
        moreInfo:
            "American Indians and the American West&nbsp;contains several collections focusing on the interaction between American Indians and the U.S. government in the 19th and 20th Centuries.Includes&nbsp;Indian Removal, records from the Bureau of Indian&nbsp;Affairs, and records from the Major Council Meetings of American Indian Tribes.&nbsp;Read More | Search | Browse&nbsp;",
    },
    {
        name: "American Music",
        description: "<p>Hear and feel the music from America's past.</p>",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/amso",
        moreInfo:
            "The database includes songs by and about Native Americans, miners, immigrants, slaves, children, pioneers and cowboys.&nbsp;Includes songs of Civil Rights, political campaigns, Prohibition, the Revolutionary War, the Civil War, anti-war protests, and more.&nbsp;Includes music from early America through the twentieth century.",
    },
    {
        name: "American Periodicals ",
        description:
            "<p>Digitized images of periodicals published between 1740 and 1940 in the United States.</p>",
        subjects: ["Family History, General, History, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/americanperiodicals?accountid=9817",
        moreInfo:
            "This database contains digitized images of periodicals published between 1740 and 1940, including special interest and general magazines, literary and professional journals, children's and women's magazines and many other historically-significant periodicals.",
    },
    {
        name: "American Poetry ",
        description:
            "<p>Works by and biographies about poets in America from the 1700s to the early 1900s.</p>",
        subjects: ["English, General, History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/ap",
        moreInfo:
            "American Poetry contains over 40,000 poems by more than 200 poets, covering the Colonial period to the early twentieth century, and drawn from over 1,200 printed sources. Includes biographies of the poets.&nbsp;",
    },
    {
        name: "American Politics and Society",
        description:
            '<p>Covers the investigations made by the Immigration and Naturalization Service (INS) during the massive immigration wave of 1880-1930.&nbsp;</p><p><a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&amp;action=American%20Politics%20and%20Society">Read More </a>| <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=advanced_ui&amp;module=48990">Search</a> | <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&amp;mid=48990#48990">Browse</a></p>',
        subjects: ["History, Political Science, Special Collections"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&mid=48990#48990",
        moreInfo:
            "The files cover Asian immigration, especially Japanese and Chinese migration, to California, Hawaii, and other states; Mexican immigration to the U.S. from 1906-1930; and European immigration. There are also extensive files on the INS's regulation of prostitution and white slavery and on suppression of radical aliens.Features Roosevelt, Truman, Eisenhower, Kennedy, Johnson, and Nixon administration records as well as numerous collections focusing on the Progressive Era and Immigration.Read More | Search | Browse",
    },
    {
        name: "American State Papers, 1789-1838 ",
        description:
            "<p>Legislative and executive documents from the United States, most originating from the important period between 1789 and 1817.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/?db=ASPA&s_startsearch=keyword",
        moreInfo:
            "Provides a detailed record of the birth of the nation. Cross-searchable with the Readex U.S. Congressional Serial Set and all other Readex Archive of American collections.",
    },
    {
        name: "Ancestry ",
        description:
            "<p>Billions of historical records, millions of family trees, and the AncestryDNA database for genealogical research.</p>",
        subjects: ["Family History"],
        contentTypes: ["Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://www.ancestryinstitution.com",
        moreInfo:
            "Billions of historical records, millions of family trees, and the AncestryDNA database, organized to provide individuals with insights about who they are and where they come from. Includes all available US Census.&nbsp;Access available On Campus Only&nbsp; &nbsp;&nbsp;Android app&nbsp;&nbsp; &nbsp;&nbsp;iOS appUsers with an existing personal account log on here.",
    },
    {
        name: "Annual Reviews",
        description:
            "<p>Scholarly reviews of articles in the fields of biological, life, biomedical, physical, and social sciences.</p>",
        subjects: ["Health Services"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www.annualreviews.org/",
        moreInfo:
            "Annual Reviews is a nonprofit publisher dedicated to synthesizing and integrating knowledge for the progress of science and the benefit of society. Over 50 journals that review contemporary research in the fields of life, biomedical, physical, and social sciences.&nbsp;Link to a list of journals.",
    },
    {
        name: "ANSI Industry Standards",
        description:
            '<p>Request&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://webstore.ansi.org/sdo/iso"> <strong>ISO</strong></a><strong> </strong>and <a href="https://byui.idm.oclc.org/login?url=https://webstore.ansi.org/sdo/iec"><strong>IEC </strong></a>standards from ANSI for academic use on an individual basis. After finding standard name &amp; number, contact <a href="mailto:eResources@byui.edu"><strong>eResources@byui.edu</strong></a> or come to 259 McKay to initiate requests. &nbsp;See also \u201cAdditional Information.\u201d&nbsp;</p>',
        subjects: [
            "Automotive Engineering / Technology, Chemistry, Computer Information Technology, Computer Science and Electrical Engineering, Mechanical & Civil Engineering",
        ],
        contentTypes: ["Reports / Data"],
        url: "",
        moreInfo:
            "Some standards we have access to are maintained by these organizations:ANSI: American National Standards InstituteISO: International Standards OrganizationIEC: International Electrotechnical CommissionASTM: American Society for Testing and MaterialsIEEE: Institute of Electrical and Electronics Engineers&nbsp;&nbsp;",
    },
    {
        name: "AP Stylebook",
        description:
            "<p>The definitive resource for journalists, the <i>AP Stylebook </i>online edition gives fundamental guidelines for spelling, language, punctuation, usage, and journalistic style.&nbsp;</p>",
        subjects: ["Business Management, Communications, English"],
        contentTypes: ["Reference", "Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://www.apstylebook.com/mckay-library-brigham-young-university-idaho",
        moreInfo: "",
    },
    {
        name: "APA PsycInfo - EBSCOhost",
        description:
            "<p>Search this database of peer-reviewed literature in behavioral science and mental health; produced by the American Psychological Association (APA).</p><p>&nbsp;</p>",
        subjects: ["Psychology"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=psyh&authtype=sso&custid=s8406107",
        moreInfo:
            "An indispensable tool for the discovery of global scholarly research. Coverage, which spans from 1887 to present, includes international material selected from more than 1,700 periodicals in over 35 languages with over 60,000 records added each year.&nbsp;\r\nPsychINFO also includes information about the psychological aspects of related disciplines such as medicine, psychiatry, nursing, sociology, education, pharmacology, physiology, linguistics, anthropology, business and law.\r\n&nbsp;",
    },
    {
        name: "APA PsycInfo Discover & Personalized Research Services",
        description:
            "<p>Sign up with your BYU-I email to create an account for research discovery &amp; individualized content within the APA PsycInfo site.&nbsp;</p>",
        subjects: ["Psychology"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://psycinfo.apa.org/home",
        moreInfo:
            "Sign up for research alerts on your selected topics; find out about trending articles; browse thru journals, books, and dissertations; Utilize the Mapper tool to search by topic, citation, or author; and link to articles.APA PsycInfo is an abstracts database that provides systematic coverage of the psychological literature from the 1800s to the present. (Includes some records from the 1600s and 1700s.)&nbsp;",
    },
    {
        name: "APM Music",
        description:
            "<p>Music for educational use; covers multiple genres and styles. <i><strong>Non-educational uses require additional licensing</strong></i><strong>.&nbsp;</strong></p>",
        subjects: ["General, Humanities and Philosophy, Music"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://content.byui.edu/integ/gen/6b4c56a2-4b3d-4e02-a825-5cbf9b6c6216/1/",
        moreInfo:
            "A robust &amp; constantly refreshed collection of music for educational use from one of the largest and broadest music collections in the industry.&nbsp;Find music tracks by genre, style, mood, region, context, popularity, instrument, tempo, and length, using state-of-the-art&nbsp;search, download, and project cue sheet applications.&nbsp;Under our educational license you are allowed to use APM Music in your classroom videos &amp; projects, in classrooms, for campus events, or in other student/staff/faculty projects.Non-educational uses require additional licensing.&nbsp;",
    },
    {
        name: "ArchiveGrid ",
        description:
            "<p>Search hundreds of archival collections throughout the world.</p>",
        subjects: ["History, Special Collections"],
        contentTypes: ["Abstract / Citation / Index", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://beta.worldcat.org/archivegrid/",
        moreInfo:
            "Find descriptions and photos of the archived items and information on how to arrange a visit to examine the materials. Collections are located in archives, libraries, museums, and historical societies.",
    },
    {
        name: "Archives Unbound ",
        description:
            "<p>Topically-focused digital collections of historical documents that support the research on various topics.</p>",
        subjects: ["Geography, History, Special Collections"],
        contentTypes: [
            "Newspapers",
            "Primary Resource",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/i.do?p=GDSC&sw=w&u=byuidaho&v=2.1&pg=BasicSearch&it=static&sid=bookmark-GDSC",
        moreInfo:
            "Topically-focused digital collections of historical documents that support the research and study needs of scholars and students at the college and university level.&nbsp; LibGuide for Archives Unbound.Topics cover:American HistoryBritish HistoryEuropean HistoryStudies in:BusinessEconomicsWomenHealthEnvironmentReligionHolocaustInternational RelationsAfrican AmericansNative AmericansLatin Americaand more",
    },
    {
        name: "ArkivDigital",
        description:
            "<p>A Swedish genealogy database with indexes, family trees, pictures, and more.</p>",
        subjects: ["Family History"],
        contentTypes: ["Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://www.arkivdigital.se/",
        moreInfo: "",
    },
    {
        name: "Art and Architecture Archive",
        description:
            "<p>Searchable archives of leading trade and consumer magazines, tracing the history of photography, design, architecture, fine and applied arts, and more.</p>",
        subjects: [
            "Art, Design and Construction Management, History, Humanities and Philosophy, Interior Design",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/artarchitecture?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Art Full Text ",
        description:
            "<p>Abstracts and full text articles from periodicals, yearbooks, and museum bulletins, art dissertations, art reproductions, and journals.</p>",
        subjects: ["Art, Humanities and Philosophy"],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=aft&authtype=sso&custid=s8406107",
        moreInfo:
            "Find abstracts and full text articles from English-language periodicals, yearbooks, and museum bulletins, art dissertations, art reproductions, and journals (plus some in several foreign languages). Also find books by and about artists, artist materials and methods, artist profiles, and a database-specific thesaurus.",
    },
    {
        name: "Art Index Retrospective ",
        description:
            "<p>An index to literature on a variety of art topics from the years 1929 to 1984 - articles, reviews, exhibition listings, anthologies, etc.</p>",
        subjects: ["Art, Humanities and Philosophy"],
        contentTypes: [
            "Abstract / Citation / Index",
            "eBooks",
            "Images",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=air&authtype=sso&custid=s8406107",
        moreInfo:
            "This archival database indexes historical literature on a variety of art topics from the years 1929 to 1984, covering fine, decorative, and commercial art.&nbsp; The Index contains hundreds of titles from feature articles, interviews, film reviews, book reviews, bibliographies, exhibition listings, conference reports, anthologies, yearbooks, museum bulletins, and editorials.&nbsp;&nbsp;List of publications included.",
    },
    {
        name: "ARTstor - now   JSTOR Images",
        description:
            "<p>Artstor has become part of the JSTOR website. It is the same content hosted on a new site with more functionality.</p>",
        subjects: ["nan"],
        contentTypes: ["nan"],
        url: "https://byui.idm.oclc.org/login?url=https://www.jstor.org/images#artstor-collections",
        moreInfo: "",
    },
    {
        name: "ASABE Online Technical Library",
        description:
            "<p>Access technical papers, conference proceedings, peer-reviewed journal articles, reference books, and standards published by ASABE.</p>",
        subjects: ["Animal and Food Science, Applied Plant Science"],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://elibrary.asabe.org/",
        moreInfo:
            "The American Society of Agricultural and Biological Engineers (ASABE), is an educational and scientific organization dedicated to the advancement of engineering applicable to agricultural, food, and biological systems.&nbsp;&nbsp;",
    },
    {
        name: "ASTM Compass",
        description:
            "<p>Access and manage thousands of industry and technology standards. Can create own account. For use only by BYU-I students and faculty.&nbsp;</p>",
        subjects: [
            "Automotive Engineering / Technology, Computer Information Technology, Computer Science and Electrical Engineering, Mechanical & Civil Engineering",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://secure.astm.org/login?redirectUrl=aHR0cHM6Ly9jb21wYXNzLmFzdG0ub3Jn&newApproach=true",
        moreInfo:
            "Access is for standards only; does not include journals, papers, or reports.",
    },
    {
        name: "ATLA Religion Database ",
        description:
            "<p>A resource for religious &amp; theological studies with bibliographic records for topics such as biblical studies, world religions, and religion in society.</p>",
        subjects: ["History, Religious Education, Sociology and Social Work"],
        contentTypes: [
            "Abstract / Citation / Index",
            "eBooks",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=reh&authtype=sso&custid=s8406107",
        moreInfo:
            "Produced by Atla, a membership association of collectors and connectors in religion and theology, the Atla Religion Database database is an essential resource for religious and theological studies. Represents literature and scholarship on major religions, faiths, and denominations in various languages. Provides coverage from 1949 plus retrospective indexing for several journal from the 1800s.",
    },
    {
        name: "Atlanta Constitution, The",
        description:
            "<p>Search and read through first-hand accounts of the politics, society, and events of the city of Atlanta during the years of 1868-1984.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpatlantaconstitution2/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Atlantic ",
        description:
            '<p>Website for the magazine covering news, politics, culture, technology, health, and more, through articles, podcasts, and videos. &nbsp;<a style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(5, 80, 200);font-family:&quot;Helvetica Neue&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:left;text-decoration:underline;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;" href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/the-atlantic-magazine/id397599894"><span style="color:rgb(17,85,204);"><span class="wysiwyg-underline" style="box-sizing:border-box;font-weight:normal;text-decoration:underline;">App: iOS</span></span></a><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.75);"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-family:&quot;Helvetica Neue&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:left;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"> or </span></span><a style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(5, 80, 200);font-family:&quot;Helvetica Neue&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:left;text-decoration:underline;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;" href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.theatlantic.newsstand&amp;hl=en_US&amp;pli=1"><span style="color:rgb(17,85,204);"><span class="wysiwyg-underline" style="box-sizing:border-box;font-weight:normal;text-decoration:underline;">Android.</span></span></a></p>',
        subjects: ["Accounting, Finance, General, Political Science"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://theatlantic.com/byuidaho-login/",
        moreInfo:
            'Access is automatic using the link above and entering BYU-I credentials.For future access, follow these steps.&nbsp;Access website directly theatlantic.com or go to the appClick \u201cSign In"\u201cSign In through your Institution\u201d&nbsp;Start typing "briClick on \u201cBrigham Young University Idaho\u201dAuthenticate with BYU-I credentialsMore information at The Atlantic Help.',
    },
    {
        name: "Audio Drama: The L.A. Theatre Works Collection ",
        description:
            "<p>Audio files of over 300 historic dramatic works from the curated archive of the L.A. Theatre Works Collection.&nbsp;</p>",
        subjects: ["Theatre"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/radr",
        moreInfo:
            "These performances - which represent some of the most significant dramatic literature of the nineteenth, twentieth, and twenty-first centuries - are performed by leading actors from around the world and recorded specifically for online listening. Most are indexed to allow searching for scenes that touch on subjects in the humanities, social sciences, theatre, hard sciences, law, medicine, and virtually every other field of study.",
    },
    {
        name: "Austin American Statesman",
        description:
            "<p>Search and read first-hand accounts of the politics, society, and events of Austin, Texas, and the surrounding area during the years 1871-1980.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpaustinamericanstatesman/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Auto Repair Source",
        description:
            "<p>Guides with repair information for thousands of domestic and imported vehicles.&nbsp;Search by make, model, year, etc.</p>",
        subjects: [
            "Automotive Engineering / Technology, Mechanical & Civil Engineering",
        ],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=autorepso&custid=s8406107&authtype=sso",
        moreInfo:
            "Kept up-to-date, this authoritative and accurate content comes from the Original Equipment Manufacturers (OEM) guides and includes step-by-step repair information, diagrams, maintenance schedules, parts and labor estimates, service bulletins and recalls.Content Includes: service and repair procedures, wiring diagrams, technical service bulletins and recalls, maintenance schedules, specifications, diagnostic trouble codes, labor estimates, parts pricing, component locations.",
    },
    {
        name: "AVON - Academic Video Online",
        description:
            "<p>AVON delivers movies and archival materials spanning multiple subject areas including anthropology, business, counseling, film, etc.</p>",
        subjects: [
            "Art, Business Management, Chemistry, Computer Information Technology, Design and Construction Management, English, Family History, General, Health Services, History, Home and Family, Humanities and Philosophy, Job and Career Resources, Languages and International Studies, Mathematics, Psychology, Sociology and Social Work, Theatre",
        ],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://video-alexanderstreet-com.byui.idm.oclc.org/channels",
        moreInfo:
            "Formats include documentaries, interviews, performances, news programs, commercials, field recordings, and raw footage.Users will find films for classroom instruction, newly released films, and award-winning films, including Academy\u00ae, Emmy\u00ae, and Peabody\u00ae winners.",
    },
    {
        name: "Baltimore Sun, The",
        description:
            "<p>Search and read first-hand accounts and other coverage of the politics, society, and events in and surrounding Baltimore, Maryland; 1837-1997.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpbaltimoresun/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Berliner Philharmoniker: Digital Concert Hall",
        description:
            '<p>Enjoy live and recorded concerts from one of the most acclaimed and well-respected orchestras in the world, the Berlin Philharmonic. As an App:&nbsp; <a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.novoda.dch&amp;referrer=adjust_reftag%3Dc2ucciPY7L8Ys%26utm_source%3DDCH%2BWebsite%2B-%2BGeneral%26utm_campaign%3DDCH%2BWebsite%2BGeneral%2B-%2BEN">Android</a>&nbsp; &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/app/id554616591?mt=8">Apple</a></p>',
        subjects: ["General, Music"],
        contentTypes: ["Video", "Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://www.digitalconcerthall.com/en/concerts",
        moreInfo:
            "These concert streams are shown in high definition video with excellent sound. Your access from BYU-Idaho provides around 40 live performances each year plus an archive with hundreds of recordings by some of the greatest artists of classical music, documentaries, and bonus films.&nbsp;Available as an App:&nbsp;&nbsp; &nbsp;&nbsp;Android&nbsp; &nbsp;&nbsp;Apple",
    },
    {
        name: "Bible in English 990-1970 ",
        description:
            "<p>Full text of 20 versions of the Bible, including all prefatory matter, notes, running heads and glossaries.</p>",
        subjects: [
            "Humanities and Philosophy, Languages and International Studies, Religious Education",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/bible",
        moreInfo:
            "This resource contains full text of 20 versions of the Bible, including the Geneva, Great, Wesley, Wycliffe, King James, Webster, West Saxon, and Tyndale Bibles.&nbsp;All the most significant texts from Tyndale to the King James Bible appear in the database. This consistently structured and encoded database allows students to study the ways in which the Bible has influenced authors and how the English language has changed over hundreds of years.",
    },
    {
        name: "Biblical Archaeology Society Online Archive",
        description:
            "<p>Thousands of articles and images with integrated Bible passages from Bible study journals.&nbsp;</p><p>If article does not open, go to magazine and locate by year and issue.</p>",
        subjects: ["Religious Education"],
        contentTypes: ["Video", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www.baslibrary.org/",
        moreInfo:
            'Thousands of articles and images with integrated Bible passages. Includes the archive of three journals: "Biblical Archaeology Review" (1975-current), "Bible Review" (1985-2005) and "Archaeology Odyssey" (1998-2006); the&nbsp;New Encyclopedia of Archaeological Excavations in the Holy Land;&nbsp;&nbsp;a collaborative books series by the Biblical Archaeology Society and the Smithsonian Institution; video lectures; and other collections.&nbsp;',
    },
    {
        name: "Biography and Genealogy Master Index",
        description:
            "<p>Provides biographical citations on more than 6 millions persons, living and deceased, covering more than 2,000 years of human history.</p>",
        subjects: ["Biographies, Family History, General"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/aboutSeries.do?userGroupName=byuidaho&inPS=true&prodId=GDL&seriesId=6BJC",
        moreInfo: "",
    },
    {
        name: "Biography in Context ",
        description:
            "<p>Continuously updated biographies of international figures from all time periods and areas of study.&nbsp;</p>",
        subjects: [
            "Biographies, English, General, History, Human Performance and Recreation, Political Science",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/i.do?p=BIC&sw=w&u=byuidaho&v=2.1&pg=BasicSearch&it=static&sid=bookmark-BIC",
        moreInfo:
            "Search by name, occupation, nationality, ethnicity, date, or keyword.&nbsp;Formats include journal articles, videos, audio selections, images, and primary sources.&nbsp;",
    },
    {
        name: "Biography Reference Source",
        description:
            "<p>Search biographies searchable by keyword,&nbsp;subject (i.e.: occupation, nationality, gender) or genre (i.e.: artists, leaders, explorers, scientists, etc.).</p>",
        subjects: [
            "Biographies, English, General, History, Humanities and Philosophy, Political Science",
        ],
        contentTypes: ["Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=brc&custid=s8406107&authtype=sso",
        moreInfo:
            "Results can also be limited by reading level indicators (Lexile) and source types (abridged, detailed, interviews, obituaries, etc.). Single images included of each individual.",
    },
    {
        name: "BizMiner",
        description:
            "<p>Industry financial analysis and market research, includes reports on more than 16,000 lines of business in national and local markets.</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics, Finance, Marketing",
        ],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://app.bizminer.com",
        moreInfo:
            "Use Bizminer to find industry financial averages and ratios, failure rates of businesses, local industry market research statistics, competitive market analysis, and more by US location (state, city, county, zip, etc.). Facilitates measurement of peer performance in an industry.",
    },
    {
        name: "Black Drama: Second Edition",
        description:
            "<p>Hundreds of plays written by black playwrights from North America, English-speaking Africa, the Caribbean, and other African diaspora countries.&nbsp;</p>",
        subjects: ["Dance, History, Music, Theatre"],
        contentTypes: ["Images", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/theatre/browse/title?ff%5B0%5D=unitaccess%3ABLDR-2E",
        moreInfo:
            "Representing over 200 black playwrights who wrote from the mid-1800s to the present, many works are published here for the first time.&nbsp;Includes detailed, fielded information on related productions, theaters, production companies, and more. The database also includes selected playbills, production photographs and other ephemera related to the plays. Some 440 of the plays are published here for the first time, including a number by major authors.",
    },
    {
        name: "Black Freedom Struggle in the United States ",
        description:
            "<p>A primary source collection of over 3,000 documents related to people and events vital to African American history.&nbsp;</p>",
        subjects: ["History, Political Science, Special Collections"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://blackfreedom.proquest.com/",
        moreInfo:
            "Easily browse by era: Slavery &amp; Abolitionist Movement, Civil War &amp; Reconstruction, Jim Crow Era to Great Depression, New Deal &amp; World War II, Civil Rights &amp; Black Power Movements, and the Contemporary Era.Direct access to Advanced Search",
    },
    {
        name: "Black Thought and Culture ",
        description:
            "<p>A collection of non-fiction writings by major American black leaders presenting an evolving and complex view of what it is to be black in America.</p>",
        subjects: ["History, Music, Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/bltc",
        moreInfo:
            "The writings represent the works of various leaders - teachers, artists, politicians, religious leaders, athletes, war veterans, entertainers, and other figures\u2014covering 250 years of history.&nbsp;Includes familiar works plus previously inaccessible material, including letters, speeches, prefatory essays, political leaflets, interviews, periodicals, and trial transcripts.&nbsp;",
    },
    {
        name: "Black Women Writers ",
        description:
            "<p>Black Women Writers presents literature and essays on feminist issues, written by authors from Africa and the African diaspora.&nbsp;</p>",
        subjects: ["Biographies, English, History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/litcollectionblww/index",
        moreInfo:
            "Facing both sexism and racism, black women needed to create their own identities and movements. This collection documents that effort, presenting the woman\u2019s perspective on the diversity and development of black people generally, and in particular the works document the evolution of black feminism.&nbsp;",
    },
    {
        name: "Bloom's Literature ",
        description:
            "<p>Bloom's Literature is rich with content on core authors and works, multicultural classics, contemporary literature, and more.</p>",
        subjects: ["Dance, English, Music, Theatre"],
        contentTypes: ["eBooks", "Video", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://online.infobaselearning.com/Direct.aspx?aid=104034&pid=WE54",
        moreInfo:
            "Built for the student and the professor, Bloom's has essays, writing guides, streaming video of productions, hundreds of full-text classic works, literary criticisms, synopses, character analysis, literary movements, poems &amp; stories, author profiles, and more. Of particular note are the essay strategy helps and the Shakespeare Center.",
    },
    {
        name: "Book Review Digest Retrospective ",
        description:
            "<p>Provides excerpts from, and citations to, reviews of adult and juvenile fiction and non-fiction in the English language.</p>",
        subjects: ["English, General"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=brr&authtype=sso&custid=s8406107",
        moreInfo:
            "Collecting nearly eight decades of H.W. Wilson's Book Review Digest, this database provides excerpts from and citations to reviews of adult and juvenile fiction and non-fiction from 1903 to 1982. Virtually every major idea that shaped the 20th century found expression in books. The reactions to those ideas are reflected in the reviews of those books, and Book Review Digest Retrospective makes it easy to search this vast record of information.Book reviewers are searchable by name, with excerpts by famous writers such as Edmund Wilson and John Updike.",
    },
    {
        name: "Book Review Index",
        description:
            "<p>Peruse millions of book reviews to conduct research in numerous disciplines, including literature, history, education, psychology, etc.</p>",
        subjects: ["English, General"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link-gale-com.byui.idm.oclc.org/apps/BRIP?u=byuidaho&aty=ip",
        moreInfo:
            "This unique product&nbsp;provides quick access to reviews of books, periodicals, books on tape, and electronic media representing a wide range of popular, academic, and professional interests.",
    },
    {
        name: "Books and Authors",
        description:
            "<p>Find book recommendations and reads that are similar to your favorites. Search by genre, title, author, award winners, and more.&nbsp;</p><p>Note: the library does <i><strong>not </strong></i>own all titles recommended.</p>",
        subjects: ["English, Humanities and Philosophy"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/BNA?u=byuidaho",
        moreInfo:
            "Gale Books and Authors, a reader's advisory database that provides search paths for read-alike books, and multiple booklists from award winners to community and expert picks to make finding a great read much less challenging. Readers can define search parameters and create a search as wide or narrow as they wish, whether browsing by genre, or, with the author search feature, by nationality, ethnicity, and more.",
    },
    {
        name: "Books in Print ",
        description:
            "<p>Books In Print is the leading bibliographic database for publishers, retailers and libraries around the world.&nbsp; Books In Print provides a valuable resource for anyone interested in learning what is happening in the world of books. Helps identify find the right title and explore all known format options.</p>",
        subjects: ["English, General"],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://www.booksinprint.com/",
        moreInfo: "",
    },
    {
        name: "Boston Globe, The",
        description:
            "<p>Search and read first-hand accounts and other coverage of the politics, society, and events of Boston, Massachusetts area from 1872-1991.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpnewyorkbostonglobe/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Brill's Online Reference ",
        description:
            "<p>Search through scores of reference books for articles related to history, international studies, law, language, religion, and the classical world.&nbsp;&nbsp;</p><p>&nbsp;</p>",
        subjects: ["History, Humanities and Philosophy"],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://brill-com.byui.idm.oclc.org/browse?access_0=free&access_1=user&access_2=open&level=parent&pageSize=10&pubschedule_3=published&sort=datedescending",
        moreInfo:
            "Includes the New Pauly Encyclopaedia of the Ancient World, considered the best English-language encyclopedia for classical studies.&nbsp;Brill's main subject areas are:African StudiesAmerican StudiesAncient Near East and EgyptArt and ArchitectureAsian StudiesBiblical StudiesBiologyClassical StudiesHistoryHuman Rights and Humanitarian LawInternational LawInternational RelationsJewish StudiesLanguage and LinguisticsMiddle East and Islamic StudiesPhilosophyReligious StudiesScienceSlavic and Eurasian StudiesSocial Sciences&nbsp;",
    },
    {
        name: "Britannica Academic",
        description:
            "<p>Thousands of articles covering multiple disciplines for getting started on research.</p>",
        subjects: ["General"],
        contentTypes: ["Images", "Video", "Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://academic-eb-com.byui.idm.oclc.org/levels/collegiate",
        moreInfo:
            "Also includes:Britannica Year in Review | Multimedia images, videos, audio, interactives, infographics | Merriam-Webster\u2019s Collegiate\u00ae Dictionary | selected eBooks &amp; journals (including Lillian Goldman Law Library at Yale Law School.)Written by&nbsp;knowledge experts from around the globe, including more than a hundred Nobel laureates, Pulitzer Prize winners, historians, professors, and noted leaders from many fields of study.&nbsp;Go to Britannica School&nbsp;for K-12 content. Visit Britannica Image Quest&nbsp;for millions of free images for educational use.",
    },
    {
        name: "British & Irish Women's Letters & Diaries ",
        description:
            "<p>The largest collection of women's diaries and correspondence; providing researchers a view into life and experiences over a 300 year span.&nbsp;</p>",
        subjects: ["English, History, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/bwl2",
        moreInfo:
            "This collection has been carefully indexed to facilitate research. Each source has been carefully chosen using leading bibliographies. The collection also includes biographies and an extensive annotated bibliography of the sources in the database.&nbsp;",
    },
    {
        name: "British Library Newspapers",
        description:
            "<p>A collection of newspapers specially selected by the British Library to best represent 18th-, 19th-, and 20th-century Britain.</p>",
        subjects: ["English, Family History, History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=BNCN&u=byuidaho",
        moreInfo:
            "This collection encompassing a wide variety of perspectives from penny papers aimed at the working class to papers from university towns.&nbsp;Special attention was paid to include newspapers that helped lead particular political or social movements such as Reform, Chartism, and Home Rule. Over 240 titles with millions of pages of content from articles to advertisements.",
    },
    {
        name: "British Literary Manuscripts Online ",
        description:
            "<p>An intimate look into the lives and works of over a thousand authors; delivers insights into the culture and context of centuries of British literary achievement.</p>",
        subjects: ["English, History, Languages and International Studies"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/BLMO?u=byuidaho",
        moreInfo:
            "Covers years 1120-1900. Includes facsimile images of literary manuscripts, including letters and diaries, drafts of poems, plays, novels, and other literary works, and similar materials for research and teaching. The manuscripts range from medieval texts to the works of Oscar Wilde. Users can browse the manuscripts individually or search the metadata for author names, titles, manuscript numbers or notes.",
    },
    {
        name: "Broadway-HD Collection (Alexander Street)",
        description:
            "<p>A collection of Broadway and Broadway-caliber shows made available to individual users, thus promoting &amp; preserving live theatre.</p>",
        subjects: ["General, Music, Theatre"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/bwhd/search?ff%5B0%5D=publishing_body_facet%3Abroadwayhd%2ABroadwayHD%7C58421",
        moreInfo:
            "These recordings are made possible through a partnership with Alexander Street - bringing the magic of performance to your screen.",
    },
    {
        name: "Business ",
        description:
            "<p>Updated daily, find herein insights into the activities of companies and industries worldwide through business and trade publications.&nbsp;</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=ITBC&u=byuidaho",
        moreInfo:
            "Covers all business disciplines including accounting, economics, finance, marketing, management and strategy, as well as business theory and practice.&nbsp;",
    },
    {
        name: "Business Cases by ProQuest",
        description:
            "<p>Over 10,000 business cases and case studies. Browse by subject or title.</p>",
        subjects: ["Accounting, Business Management"],
        contentTypes: ["Full-Text Articles", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/browseterms/businessCases_business/0?accountid=9817",
        moreInfo:
            "Includes the Times 100 Business Case Studies and others from providers including International Academy for Case Studies and Journal of Business Case Studies.&nbsp;",
    },
    {
        name: "Business Expert Press eBooks",
        description:
            '<p>A library of born-digital eBooks covering business disciplines and topics, representing current business theory &amp; practice. Available as an app: <a href="https://byui.idm.oclc.org/login?url=https://www.igpublish.com/guides/iglibrary/en/html/igpreader.html">Android</a>&nbsp; &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://www.igpublish.com/guides/iglibrary/en/html/igpreader.html">Ios</a></p>',
        subjects: [
            "Accounting, Business Management, Communications, Economics, Marketing",
        ],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "http://portal.igpublish.com/iglibrary/search",
        moreInfo:
            "Written by experts in the field - from accounting to supply chain management.&nbsp;Includes DRM-free textbooks for use by the academic community.Available as an App:&nbsp;&nbsp; &nbsp;&nbsp;Android&nbsp; &nbsp;&nbsp;Apple",
    },
    {
        name: "Business Monitor International (BMI) Industry Reports",
        description:
            "<p>Country-focused industry reports and regional insights with SWOT analysis, market trends, forecasts, &amp; competitive data.</p>",
        subjects: ["Accounting, Business Management, Marketing"],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/browseterms/bmi_business?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Business Source Premier",
        description:
            "<p>Find business-related articles, case studies, company profiles, industry reports, SWOT analyses, country economic reports, company profiles, etc.</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics, Finance, Marketing",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=buh&authtype=sso&custid=s8406107",
        moreInfo:
            "Covers all business disciplines such as marketing, management, accounting, finance, and economics.&nbsp;",
    },
    {
        name: "Business, Economics, Finance, & Accounting eBooks",
        description:
            "<p>Reference e-books in the fields of Business. To search: scroll down to <strong>Business, Economics, Finance &amp; Accounting</strong> and select desired subject.</p>",
        subjects: ["Accounting, Business Management, Economics, Marketing"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://onlinelibrary.wiley.com/",
        moreInfo: "",
    },
    {
        name: "Business: Insights",
        description:
            "<p>Explore the world's companies through expert analysis such as SWOT analyses, financial statements, case studies, and articles.&nbsp;</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics",
        ],
        contentTypes: ["Statistics", "Full-Text Articles", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://link-gale-com.byui.idm.oclc.org/apps/GBIB?u=byuidaho&aty=ip",
        moreInfo:
            "Compiles data into logical useable context to provide deep business intelligence. Information is taken from from academic journals, trade magazines, news outlets, and more.&nbsp;",
    },
    {
        name: "BYU Digital Collections",
        description:
            "<p>Curated by BYU-Provo; contains materials from BYU Special Collections, the BYU Museum of Art, and research by BYU faculty &amp; students.</p>",
        subjects: ["Art, History, Religious Education"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://lib.byu.edu/collections/digital/",
        moreInfo:
            "The CES Digital Collections page, curated by BYU-Provo, allows users to search pioneer diaries, BYU theses &amp; dissertations, Latter-day Saint books &amp; magazine indexes, images of LDS historical and doctrinal significance, images from the BYU Museum of Art, and much more.&nbsp;The collection includes scanned images of books, documents, photographs, and other materials, primarily from BYU Special Collections, as well as research published by BYU faculty and students.Browse more at https://lib.byu.edu/collections/",
    },
    {
        name: "BYU-Idaho McKay Library Catalog",
        description:
            "<p>Access to the BYU-I McKay Library catalog - search for physical materials (books, CDs, DVDs, music, etc.) and eBooks in the library collection.</p>",
        subjects: ["General"],
        contentTypes: [
            "eBooks",
            "Video",
            "Audio",
            "Full-Text Articles",
            "Musical Scores",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://byui.ent.sirsi.net/client/en_US/main",
        moreInfo: "",
    },
    {
        name: "BYU-Idaho Special Collections & Archives",
        description:
            "<p>Special Collections &amp; Archives houses items unique to University history and campus curriculum, the local area, &amp; the history of writing.&nbsp;</p>",
        subjects: ["Special Collections"],
        contentTypes: ["Images", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://spc.byui.edu/",
        moreInfo:
            "Special Collections &amp; Archives houses items unique to University history and campus curriculum, the history of the Upper Snake River Plain, and changes in writing. Collections range from prehistoric artifacts and manuscripts that demonstrate early writing systems, to pictures, journals, letters, and emails documenting the history of campus and the Rexburg region.&nbsp;",
    },
    {
        name: "C19: The Nineteenth Century Index (ProQuest)",
        description:
            "<p>An index of records covering the printed record of the English-speaking world in the 19th century. From newspapers, registers, books, etc.; some full-text.</p><p>&nbsp;</p>",
        subjects: ["History"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/c19index",
        moreInfo: "",
    },
    {
        name: "Canadian Newsstream ",
        description:
            "<p>Access to Canadian news outlets and newspapers including <i>The Globe and Mail</i>, <i>Toronto Star. </i>Extensive backfiles plus daily updates.</p><p>&nbsp;</p>",
        subjects: ["General, History, Languages and International Studies"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/canadiannews",
        moreInfo:
            "Also provides access to newswires, websites, and broadcast transcripts in full-text format. Most titles are updated daily. The backfiles, some dating back into the 1970's, are available for most news sources, providing full access to the articles, columns, editorials, and features published in each.&nbsp;This resource is part of ProQuest's&nbsp;Global Newsstream&nbsp;Collection.",
    },
    {
        name: "Canadian Poetry ",
        description:
            "<p>This collection comprises essentially the complete cannon of English-Language Canadian poetry from the 17th to the early 20th centuries.</p>",
        subjects: ["English, History, Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/cp",
        moreInfo:
            "Includes the works of Bliss Carman, Isabella Valancy Crawford, Archibald Lampman, Charles G. D. Roberts, Duncan Campbell Scott, and many more. Created in partnership with the Electronic Text Centre at the University of New Brunswick Libraries, this unique collection contains the full text thousands of poems by 177 poets.&nbsp;",
    },
    {
        name: "CAS SciFinder",
        description:
            '<p><a href="https://byui.idm.oclc.org/login?url=https://scifinder.cas.org/registration/index.html?corpKey=1FD7E894-86F3-F00A-11C6-7AE765E9B6A7"><strong>Must register here first</strong></a>. A comprehensive database of chemical literature and information (drawings, molecular formulas, identifiers).</p>',
        subjects: ["Chemistry"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://scifinder.cas.org",
        moreInfo:
            "Must use byu-i email to register. May not allow registration when off campus.A product of the American Chemical Society (ACS), CAS SciFinder\u207f is a student-designed version of CAS SciFinder\u00ae; giving reference, substance, reaction and supplier content.&nbsp;Its services include relevance-ranked results, step-by-step procedures and protocols, citation mapping, bio-sequence searching, retrosynthetic analysis, patent landscape mapping, touch-screen enabled structure drawing and much more\u2014all accessible in a simple, easy-to-use interface.",
    },
    {
        name: "CCH AnswerConnect",
        description:
            '<p>A tax issues database. <strong>Click on the "Subscribers - Log in here" </strong>button on the top right, which verifies &amp; provides access through your CAS.</p>',
        subjects: ["Accounting"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.answerconnect.cch.com",
        moreInfo:
            'CCH AnswerConnect provides quick answers and in-depth analysis on federal and state tax issues, and coverage of the federal tax code and regulations. The database also includes the U.S. Master Tax Guide, tools, practice aids, compliance information and tips, and federal and state tax forms.\r\nTo access full database, click on the "Subscribers - Log in here" button on the top right, which will verify through your CAS and provide access.',
    },
    {
        name: "Chemical Educator Journal",
        description:
            "<p>Access this peer-reviewed chemistry journal, covering current topics, experiments, and teaching methodology.&nbsp;</p>",
        subjects: ["Chemistry"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "http://chemeducator.org/",
        moreInfo:
            "This is a peer-reviewed journal, designed for chemical education professionals. Covers current topics, experiments, teaching methodology. Includes animations, full-color graphics, handouts, tutorials, and video clips to enhance the articles. Provides educators an instant resource for current topics and techniques in teaching chemistry.",
    },
    {
        name: "Chicago Manual of Style Online",
        description:
            "<p>The <i>Chicago Manual of Style Online&nbsp;</i>(17th Edition) is the venerable, time-tested guide to style, usage, and grammar in an online format.</p>",
        subjects: ["English, General, History"],
        contentTypes: ["Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.chicagomanualofstyle.org/home.html",
        moreInfo:
            "Provides an indispensable reference for writers, editors, proofreaders, indexers, copywriters, designers, and publishers, informing the editorial canon with sound, definitive advice.",
    },
    {
        name: "Chicago Tribune",
        description:
            "<p>This historical newspaper provides searchable first-hand account of the politics, society, &amp; events of Chicago &amp; surrounding area; 1849-1996.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpchicagotribune/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Children's Literature Comprehensive Database",
        description:
            "<p>Basic descriptions, professional reviews, and curriculum tools for PreK-12th grade books and other media.&nbsp;</p>",
        subjects: ["English, Teacher Education"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://enterprise.clcd.com",
        moreInfo:
            "CLCD allows for filtering by term, title, series, subject, awards, reading lists, Dewey Decimal, Lexile/reading or interest level, genre, and many other limiters.",
    },
    {
        name: "Chilton Library [Automotive]",
        description:
            "<p>Detailed guides for step-by-step vehicle maintenance and repairs. Includes videos and ASE test prep materials and printable guides.&nbsp;</p>",
        subjects: ["Automotive Engineering / Technology, General"],
        contentTypes: ["Reference", "Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://infotrac.galegroup.com/itweb/byuidaho?db=CHLL",
        moreInfo:
            "Includes maintenance and specification tables, step-by-step service &amp; repair procedures, labor estimating tool, vacuum diagrams, wiring diagrams, close-up photographs &amp; illustrations, ASE test prep quizzes, and the ability to print guides as needed. Search by make, model, year, vin, etc.&nbsp;",
    },
    {
        name: "China, America and the Pacific ",
        description:
            "<p>Explore the cultural and trading relationships that emerged between America, China and the Pacific region between the 18th-20th centuries.&nbsp;</p>",
        subjects: [
            "History, Languages and International Studies, Political Science",
        ],
        contentTypes: [
            "Maps",
            "Primary Resource",
            "Government",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.cap.amdigital.co.uk",
        moreInfo:
            "Explore the cultural and trading relationships that emerged between America, China and the Pacific region between the early 18th and 20th centuries. Sourced from world-class collections at American and Canadian libraries including the Massachusetts Historical Society and the Peabody Essex Museum in Salem, this database offers unique insights into the history of North American trade and cultural interactions with China. Coverage also includes Pacific trading centers, such as Hawai\u2018i.Part of the&nbsp;AM Explorer collection.",
    },
    {
        name: "Choice Reviews ",
        description:
            "<p>Covering 1988-present, find book reviews, webinars, podcasts, bibliographic essays, etc. to build library collections &amp; strengthen skills.</p>",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.choicereviews.org",
        moreInfo: "",
    },
    {
        name: "Christian Science Monitor, The",
        description:
            "<p>Read the CSM, an interantional news organization that is known for its thoughtful global coverage of current events; coverage 1908-2009.</p><p>&nbsp;</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpchristiansciencemonitor/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Chronicle of Higher Education",
        description:
            "<p>The nation\u2019s largest newsroom dedicated to covering colleges and universities. Use your BYU-I email for a free account with full access.</p>",
        subjects: ["General, Teacher Education"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www.chronicle.com",
        moreInfo:
            "Chronicle provides readers with indispensable real-time news and deep insights into higher education, plus essential tools, career opportunities, and knowledge to succeed in a rapidly changing world.",
    },
    {
        name: "CINAHL ",
        description:
            "<p>CINAHL, the Cumulative Index to Nursing and Allied Health Literature, indexes the top nursing and allied health literature.</p>",
        subjects: ["Health Services, Nursing"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=cin20&authtype=sso&custid=s8406107",
        moreInfo:
            "The indexed materials include nursing journals and publications from the National League for Nursing and the American Nurses Association, covering topics such as nursing, biomedicine, health sciences librarianship, alternative/complementary medicine, consumer health and allied health.The CINAHL Database also provides access to health care books, nursing dissertations, selected conference proceedings, standards of practice, audiovisuals and book chapters. Indexes and links to numerous related open access full-text journals.",
    },
    {
        name: "Civil Rights and the Black Freedom Struggle",
        description:
            '<p>This collection features records of the NAACP, SCLC, SNCC, CORE, and federal records of the Black Freedom Struggle. &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&amp;action=Civil%20Rights%20and%20the%20Black%20Freedom%20Struggle">Read More</a>&nbsp;| <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&amp;mid=28990#28990">Browse the Collection</a>&nbsp;| <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=advanced_ui&amp;module=28990">Search </a>|&nbsp;</p>',
        subjects: ["History, Political Science, Special Collections"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&action=Civil%20Rights%20and%20the%20Black%20Freedom%20Struggle",
        moreInfo:
            "Search government records, organizational records, personal papers, and legal department files to find unique documentation and a variety of perspectives on the 20th century fight for freedom and social change.&nbsp;Contains three modules:&nbsp;Black Freedom Struggle in the 20th Century: Federal Government RecordsBlack Freedom Struggle in the 20th Century: Organizational Records and Personal Papers, Part 1NAACP Papers: The NAACP's Major Campaigns--Legal Department FilesRead More&nbsp;| Browse the Collection&nbsp;| Search |&nbsp;",
    },
    {
        name: "Civil War Collection",
        description:
            "<p>A collection of period newspapers that covered the American Civil War.&nbsp;</p>",
        subjects: ["History, Special Collections"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/cwco/",
        moreInfo:
            "A collection of newspapers that covered the American Civil War. Find informative and eclectic articles from foreign trade and relationship, industries, slavery, pre- and post- war attitudes, troop movements, state issues, trans-continental railroad, Lincoln's death, and more.&nbsp;Description of the Civil War collection &nbsp; &nbsp;| &nbsp; &nbsp; This resource is part History Commons'&nbsp;Accessible Archives&nbsp;collection&nbsp;",
    },
    {
        name: "Classical Music Library",
        description:
            "<p>Multi-label database of 50,000+ classical music recordings for listening and learning. Find, listen to, and even buy classical music recordings.</p>",
        subjects: ["Dance, Music, Theatre"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://clmu.alexanderstreet.com/",
        moreInfo: "",
    },
    {
        name: "Classical Music Reference Library",
        description:
            "<p>Brings together a variety of reference materials on music theory &amp; technique, spanning the entire history of Western classical music.&nbsp;</p>",
        subjects: ["Biographies, Dance, Music, Theatre"],
        contentTypes: ["Audio", "Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://bakr.alexanderstreet.com",
        moreInfo:
            "Includes the authoritative reference titles Baker's Dictionary of Music, Baker's Biographical Dictionary of Musicians, and Baker's Student Encyclopedia of Music, and much more.&nbsp;Provides audio files with samples of musical genres &amp; instruments.Browse by: Titles, Time Periods, Composers, Instruments, Performers/Ensembles, Genres, People, Publishers",
    },
    {
        name: "Classical Scores Library",
        description:
            "<p>Musical scores representing the classical canon from the Renaissance to the 21st century; includes full scores, study scores, vocal scores, etc.</p>",
        subjects: ["Dance, Music, Theatre"],
        contentTypes: ["Musical Scores"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/shmu",
        moreInfo:
            "&nbsp;Music Online: Classical Scores Library&nbsp;is a series of four volumes with a mission to provide a reliable and authoritative source for scores of the classical canon, as well as a resource for the discovery of lesser-known contemporary works. The collections encompass all major classical musical genres and time periods from the Middle Ages to the 21st century. With full, study, piano, and vocal scores, this comprehensive collection will enhance the study of music history, performance, composition and theory for a variety of scholars.&nbsp;",
    },
    {
        name: "Cochrane Library",
        description:
            "<p>The Cochrane Library consists of a regularly updated collection of evidence-based medicine reports.</p>",
        subjects: ["Health Services, Nursing"],
        contentTypes: ["Journals", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://www.thecochranelibrary.com",
        moreInfo:
            "The Cochrane Library is a collection of databases that contain high-quality, independent evidence to inform healthcare decision-making.&nbsp;This collection consists of the Cochrane Database of Systematic Reviews (CDSR),&nbsp; Cochrane Central Register of Controlled Trials (CENTRAL), and Cochrane Clinical Answers (CCAs).For further details, visit the About&nbsp;site.",
    },
    {
        name: "College in Context",
        description:
            "<p>Interdisciplinary content organized by topic to facilitate research at the college level and to reinforce critical thinking, problem solving, collaboration, etc.</p>",
        subjects: ["Art"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=CSIC&u=byuidaho&aty=ip",
        moreInfo:
            "This interdisciplinary content reinforces skills such as critical thinking, problem solving, communication, collaboration, and innovation.&nbsp;Content comes from full-text newspapers and periodicals like The Economist, The New York Times, National Geographic, Newsweek, Popular Science, Smithsonian, and more.&nbsp;Learning is enriched with hundreds of thousands of images, videos, and audio selections that include archival film clips, broadcast video, BBC News, New York Times video, and NPR.",
    },
    {
        name: "Colonial America",
        description:
            "<p>Digitized versions of original correspondence between the British government and the governments of the American colonies.</p>",
        subjects: ["History, Political Science, Special Collections"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.colonialamerica.amdigital.co.uk/",
        moreInfo:
            "Colonial America makes available all 1,450 volumes of the CO 5 series from The National Archives, UK, covering the period 1606 to 1822. CO 5 consists of the original correspondence between the British government and the governments of the American colonies, making it a uniquely rich resource for all historians of the period.&nbsp;Part of the&nbsp;AM Explorer&nbsp; collection.",
    },
    {
        name: "Colonial Newspapers",
        description:
            "<p>Selected issues of historical newspapers, accessing eyewitness accounts of life in 18th &amp; 19th century America.</p><p>&nbsp;</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/coco/",
        moreInfo:
            "Selected issues of these historical newspapers primarily covering 18th &amp; 19th century America:&nbsp;&nbsp; More information about Colonial Newspapers&nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; This resource is part History Commons'&nbsp;Accessible Archives&nbsp;collection &nbsp;Includes:The Virginia Gazette (1732-1775)The Pennsylvania Gazette (1728-1815)The Pennsylvania Packet (1776-1779, 1787)The Maryland Gazette (1795-1835)South Carolina NewspapersThe Charlestown Gazette (1779\u20131780)The Gazette of the State of South-Carolina (1777\u20131780)The South-Carolina and American General Gazette (1764\u20131775)The South Carolina Gazette (1732-1775)The South-Carolina Gazette and Country Journal (1765\u20131775)",
    },
    {
        name: "ComDisDome (Communication Sciences and Disorders)",
        description:
            "<p>An indexing and abstracting tool covering the communications disorders literature, with focus on speech-language pathology and audiology.</p>",
        subjects: ["Communications, Teacher Education"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/comdisdome?accountid=9817",
        moreInfo:
            "This database is an indexing and abstracting tool covering the communications disorders literature, with focus on speech-language pathology and audiology. Quickly identify and connect to reliable information from multiple sources, including journal articles and books, along with access to profiles of researchers working in this area. Coverage 1950-present.",
    },
    {
        name: "Communication and Mass Media Complete",
        description:
            "<p>Access quality research in areas related to communication and mass media.</p>",
        subjects: ["Business Management, Communications, English"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ufh&authtype=sso&custid=s8406107",
        moreInfo:
            "Communication &amp; Mass Media Complete (CMMC) is a robust database of scholarly literature in communication studies. It provides full-text, indexing and abstracts for hundreds of top communication scholarly journals covering all related disciplines, including media studies, linguistics, rhetoric, advertising, marketing, film/video, game studies, journalism, language, logic, discourse, and other related fields.",
    },
    {
        name: "Communications and Mass Media",
        description:
            "<p>Search millions of articles covering all aspects of communications, including advertising, public relations, linguistics, literature, and more.</p>",
        subjects: ["Communications, English, Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://link-gale-com.byui.idm.oclc.org/apps/PPCM?u=byuidaho&aty=ip",
        moreInfo: "",
    },
    {
        name: "Company Profiles by Business Source Premier",
        description:
            '<p>Profiles and information including company overviews and business descriptions, key facts, history, products and services, and top competitors.&nbsp;</p><p><a href="https://byui.idm.oclc.org/login?url=https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000162890?isDashboardExpanded=true">Listed by Country</a> | &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000123041?isDashboardExpanded=true">Listed by Industry</a></p>',
        subjects: [
            "Accounting, Business Management, Economics, Job and Career Resources",
        ],
        contentTypes: ["Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000162890?isDashboardExpanded=true",
        moreInfo: "",
    },
    {
        name: "Compendex",
        description:
            "<p>Engineering-focused database searching journals, conference proceedings, dissertations, standards, books, and recently preprints. Click document type to refine search.</p>",
        subjects: [
            "Chemistry, Computer Science and Electrical Engineering, Mechanical & Civil Engineering, Physics",
        ],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://www-engineeringvillage-com.byui.idm.oclc.org/search/quick.url",
        moreInfo: "",
    },
    {
        name: "Comprehensive Physiology",
        description:
            "<p>Covers latest key developments in the field of physiology; an authoritative resource for those in the health sciences.</p>",
        subjects: [
            "Biology, Chemistry, Health Services, Human Performance and Recreation",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://onlinelibrary.wiley.com/doi/book/10.1002/cphy",
        moreInfo:
            "Comprehensive Physiology is an authoritative and comprehensive collection of physiology information. It covers the latest key developments in the field, through the most authoritative articles on the subjects covered, making it a valued reference work on the evolving science of physiology for both researchers and clinicians. It also provides a useful teaching tool for instructors and an informative resource for medical students and other students in the life and health sciences. Includes content from the Handbook of Physiology&nbsp;(1977-2008).",
    },
    {
        name: "Computer Science",
        description:
            "<p>Access leading business and technical publications in the computer, telecommunications, and electronics industries.&nbsp;</p>",
        subjects: [
            "Business Management, Communications, Computer Science and Electrical Engineering",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=CDB&u=byuidaho",
        moreInfo:
            "Computer Science database provides access to leading business and technical publications in the computer, telecommunications, and electronics industries. The database includes more than 600 journals and periodicals, providing information on computer-related product introductions, news and reviews in areas such as hardware, software, electronics, engineering, communications, and the application of technology.&nbsp;",
    },
    {
        name: "Computer Source",
        description:
            "<p>Provides the latest information and current trends in high technology from numerous journals.</p>",
        subjects: [
            "Computer Information Technology, Computer Science and Electrical Engineering, Mathematics",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=cph&authtype=sso&custid=s8406107",
        moreInfo:
            "Computer Source: Consumer Edition&nbsp;provides full text access to numerous journals, plus indexing data for many more, covering topics such as computer science, information systems, programming, robotics, cybernetics, artificial intelligence, software, the internet, electronics, and&nbsp; telecommunications.&nbsp;",
    },
    {
        name: "Conditions & Politics in Occupied Western Europe, 1940-1945",
        description:
            "<p>Original documents from occupied territories, from various channels, after the cessation of normal peacetime activities at the close of WWII.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/6ACQ/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "Created from original intelligence reports received in the British foreign office, this is an invaluable source for those investigating conditions in Europe during World War II. Documented are German attempts to win over important groups in occupied countries; the reaction to, and effect of, the German occupation; the propaganda struggle; the creation of the first resistance units; and repercussions of various events.&nbsp; This collection includes detailed information, indexed by year and country, regarding Belgium, France, Norway, Italy, Denmark, Spain, Sweden, Switzerland, the Netherlands, the Vatican, Portugal and Luxembourg, as well as general files regarding Europe as a whole.&nbsp; This resource is part of the Archives Unbound&nbsp;collection from Gale.",
    },
    {
        name: "Congressional Publications",
        description:
            '<p>Access congressional hearings and other information about the US Congress. | <a href="https://byui.idm.oclc.org/login?url=https://proquest.libguides.com/pq_congressional#s-lg-box-32378018">Research Guide</a></p>',
        subjects: ["General, Geography, History, Political Science"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/congressional",
        moreInfo:
            "BYU-Idaho's holdings in ProQuest Congressional offers a comprehensive collection of Congressional Hearings from 1824-2003. This primary source collection offers users an opportunity to understand the present by comparing today\u2019s events and opinions with trends and patterns throughout our nation\u2019s history. The documents offer a unique perspective on all aspects of U.S. social, economic, and political history by presenting differing views from representatives of all societal sectors, including business, industry, labor, education, health, criminal justice, and government.&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;",
    },
    {
        name: "Contemporary Authors",
        description:
            "<p>Biographical information on numerous modern novelists, poets, playwrights, nonfiction writers, journalists and scriptwriters.</p>",
        subjects: ["Biographies, English"],
        contentTypes: ["Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=CA&u=byuidaho",
        moreInfo:
            "Biographical information on more than 149,000 modern novelists, poets, playwrights, nonfiction writers, journalists and scriptwriters. Sketches typically include personal information, contact information, career history, writings, biographical and critical sources, authors' comments, and informative essays about their lives and work.Use the Topic Finder to discover the context of your search term and uncover hidden connections and use Term Frequency to graph search results to see trends over time for one or more terms.&nbsp;",
    },
    {
        name: "Contemporary Women's Issues",
        description:
            "<p>Find comprehensive coverage of issues that influence women\u2019s lives across the globe.</p>",
        subjects: [
            "Home and Family, Political Science, Sociology and Social Work",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=CWI&u=byuidaho",
        moreInfo:
            "Contemporary Women's Issues (CWI) is a multidisciplinary database that brings together relevant content from mainstream periodicals, \"gray\" literature, and the alternative press -- with a focus on the critical issues and events that influence women's lives such as civil rights, health, education, professional development, and entrepreneurship. CWI includes English-language titles from East and West Africa, Asia, and South and Central America, the Caribbean, North America and Europe.&nbsp;Compiles often overlooked and hard-to-find newsletters, NGO research reports, and ephemeral literature from leading research institutes and grass roots organizations.",
    },
    {
        name: "Contemporary World Music",
        description:
            "<p>Delivers the sounds from all regions of the world and from every continent.&nbsp;</p><p>&nbsp;</p>",
        subjects: ["Dance, Music, Theatre"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/womu",
        moreInfo:
            "Covers traditional and non-traditional genres such as reggae, worldbeat, neo-traditional, world fusion, Balkanic jazz, African film, Bollywood, Arab swing and jazz, Indian classical, fado, flamenco, klezmer, zydeco, gospel, gagaku, and more.",
    },
    {
        name: "Coronavirus Research Database",
        description:
            "<p>Covering the COVID-19 outbreak, this database curates openly available content related to coronaviruses.</p>",
        subjects: ["Health Services"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/coronavirus",
        moreInfo:
            "Including coverage of the COVID-19 outbreak, this database curates openly available content related to coronaviruses. It includes thousands of open-access articles from the world\u2019s leading publishers as well as current research from pre-print repositories such as arXiv and will continue to grow and evolve as more is learned about the pandemic.",
    },
    {
        name: "Counseling and Psychotherapy Transcripts",
        description:
            "<p>Transcripts from actual therapy and counseling sessions, first-person narratives, and reference works on mental illness.</p>",
        subjects: ["Psychology, Sociology and Social Work"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/psyc",
        moreInfo:
            "Counseling and Psychotherapy Transcripts, Client Narratives, and Reference Works is a searchable collection containing real transcripts of counseling and therapy sessions and first-person narratives illuminating the experience of mental illness and treatment, as well as reference works to contextualize the primary material. The database contains more than 2,000 session transcripts, 44,000 pages of client narratives, and 25,000 pages of secondary reference material",
    },
    {
        name: "Counseling and Therapy in Video",
        description:
            "<p>Access videos of actual therapy sessions, training videos, and reenactments conducted by counseling professionals.</p>",
        subjects: ["Psychology, Sociology and Social Work"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/ctiv",
        moreInfo:
            "Counseling and Therapy in Video provides faculty and students with a first-hand look at the realities of working with clients and the challenges associated with putting theoretical concepts into practice. These collections provide a thorough grounding in dozens of therapeutic methods and diagnoses, insight into the human condition, and training in skills such as reflection and empathy while working with specific populations such as veterans and teens. This series contains more than 2,400 hours of footage from actual therapy sessions, training videos, and reenactments conducted by renowned counseling professionals.",
    },
    {
        name: "Country Life Archive ",
        description:
            "<p>An archive (1897 to 2005) of the weekly British culture and lifestyle magazine, <i>Country Life</i>, focusing on fine art and architecture.</p>",
        subjects: [
            "Applied Plant Science, Art, Design and Construction Management, History, Home and Family",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/countrylifearchive",
        moreInfo:
            "Country Life, focuses on fine art and architecture, the great country houses, and rural living.&nbsp;Every page of the magazine is reproduced in high resolution color and is fully searchable. Country Life Archive presents a chronicle of more than 100 years of British heritage, including its art, architecture, and landscapes, with an emphasis on leisure pursuits such as antique collecting, hunting, shooting, equestrian news, and gardening.",
    },
    {
        name: "Country Reports by Business Source Premier",
        description:
            "<p>Access to world-wide, country-specific data including demographic, political, economic, business, cultural and environmental information.</p>",
        subjects: [
            "Accounting, Business Management, Economics, Humanities and Philosophy, Interdisciplinary Studies, Political Science",
        ],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000123036?isDashboardExpanded=true",
        moreInfo: "",
    },
    {
        name: "CQ Almanac Archive",
        description:
            "<p>The definitive annual reference for studying the U.S. Congress and its legislation. Covers 1945-2007.</p>",
        subjects: ["General, Geography, History, Political Science"],
        contentTypes: ["Government", "Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://library.cqpress.com/cqalmanac/",
        moreInfo:
            "Published annually, CQ Almanac gives authoritative analysis on the major legislation and actions of congress for each year since 1945. Unique data on the voting patterns of Congress members provide insight into the legislative process and history of the institution. Users can follow the history of a policy issue with the Policy Tracker tool which links reports on the same issue for almost 70 years.",
    },
    {
        name: "CQ Magazine",
        description:
            "<p>A weekly news magazine featuring in-depth, un-biased reporting on the activities of the US Congress; coverage from 1983-present.</p>",
        subjects: ["General, Political Science"],
        contentTypes: ["Government", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://library.cqpress.com/cqweekly",
        moreInfo:
            'This magazine reports on public policy, politics, congressional legislation, and elections, including a complete wrap-up of news on Congress, the status of bills in play, behind-the-scenes maneuvering, committee and floor activity, debates, and all roll-call votes.&nbsp;Users can search by topic, page number, committee, "exact phrases or words," bill number, byline or reporter, and by Boolean full-text and date searches. Detailed floor votes dating back to August 1983 are easily retrieved.',
    },
    {
        name: "CQ Researcher Plus Archives",
        description:
            "<p>A database of in-depth, authoritative reports on a full range of political and social-policy issues, dating from 1923-present.&nbsp;</p>",
        subjects: [
            "General, History, Political Science, Sociology and Social Work",
        ],
        contentTypes: ["Statistics", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://library.cqpress.com/cqresearcher/",
        moreInfo:
            "CQ Researcher provides a balanced view of today's most pressing social, political, and economic issues. Each report is footnoted and includes an overview, background section, chronology, bibliography, and debate-style pro-con feature, plus tools to study the evolution of the topic over time. Includes graphics, photos, \u201chot topics\u201d, and sidebar features.&nbsp;",
    },
    {
        name: "CRC Handbook of Chemistry & Physics",
        description:
            "<p>The <i>CRC Handbook of Chemistry and Physics </i>is a reference book providing high-quality data for chemical compounds and physical particles.&nbsp;</p>",
        subjects: ["Chemistry, Physics"],
        contentTypes: ["eBooks", "Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://hbcp.chemnetbase.com/",
        moreInfo:
            "Covers chemistry, physics, and related subjects, organized in easy-to-find, well-organized tables.&nbsp;Continuously updated to reflect current data.",
    },
    {
        name: "Criminal Justice",
        description:
            "<p>Research source for those studying law or law enforcement or those training for paralegal, forensics, sociology, investigation, security, etc.</p>",
        subjects: ["Political Science, Psychology, Sociology and Social Work"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPCJ&u=byuidaho",
        moreInfo:
            "The Criminal Justice Collection informs the research process for researchers who are studying law, law enforcement, or terrorism, training for paralegal service, preparing for a career in homeland security, delving into forensic science, investigating crime scenes, developing policy, going to court, writing sociological reports, and much more--Gale.",
    },
    {
        name: "Culinary Arts",
        description:
            "<p>Information from major cooking and nutrition magazines and eBooks. Includes restaurant reviews, recipes, and industry information.</p>",
        subjects: ["Animal and Food Science, Home and Family"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPCA&u=byuidaho",
        moreInfo:
            "The Culinary Arts Collection offers a smorgasbord of information on cooking, nutrition, food science, and restaurant management. Content includes thousands of recipes, restaurant reviews, and industry information.",
    },
    {
        name: "Daily Mail Historical Archive, 1896-2004",
        description:
            "<p>The <i>Daily Mail</i> has been the heart of British Journalism since 1896; this archive allows you to access to its content thru 2004.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=DMHA&u=byuidaho",
        moreInfo:
            "The Daily Mail Historical Archive offers the searchable, full-text content Of Britain's influential Daily Mail newspaper, including all of the major news stories, features, advertisements and images. It also includes the Daily Mail Atlantic Edition, which was published on board the transatlantic liners that sailed between New York and Southampton between 1923 and 1931.",
    },
    {
        name: "Dance Education Literature & Research descriptive index (DELRdi)",
        description:
            "<p>Provides documents &amp; citations about dance, dance education &amp; research, techniques, and more. From the National Dance Education Organization.</p>",
        subjects: ["Dance"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://delrdiresearch.online/",
        moreInfo:
            "What does DELRdi do?Provides a body of knowledge for dance education spanning 9,000+ documents and citationsTargets whatever impacts teaching and learning in or through danceProvides a history about dance education and the educational processDefines methodologies of research and research techniquesPresents a description of the document, an abstract, or full text when copyright permission is grantedInforms the user where to locate and access the original documentWhat can DELRdi do for YOU?Offers researchers a showcase for their workTargets issues in your dance education researchProvides a concentrated collection of Dance Education research and literaturePresents the work of leading dance educators in the fieldBroadens the perspective of researchers in other fields that write about dance educationOffers hours of fun and amusement to view the work of people you know or topics of interest",
    },
    {
        name: "Dance in Video ",
        description:
            "<p><i>Dance in Video</i>&nbsp;provides hundreds of hours of video content covering the full scope of 20th and 21st century dance.&nbsp;</p>",
        subjects: ["Dance, Theatre"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://video.alexanderstreet.com/channel/dance-online-dance-in-video",
        moreInfo:
            "&nbsp;The collection includes performances, documentaries, interviews, and instructional videos from the most influential performers and companies. The diverse content supports a wide range of courses, from dance history and dance appreciation to choreography, dance composition, and improvisation.",
    },
    {
        name: "Defining Gender, 1450-1910",
        description:
            "<p>Explore 600 years of of gender views in this vast body of British source material.</p>",
        subjects: ["English, History, Psychology, Sociology and Social Work"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.gender.amdigital.co.uk/",
        moreInfo:
            "Using correspondence, advice literature, periodicals, ephemera and government documents, the user can analyze traditional models and contemporary perceptions of gender. This interdisciplinary resource will enrich the teaching and research of gender, history, sociology, education and literature.&nbsp;Part of the&nbsp;AM Explorer&nbsp; collection.",
    },
    {
        name: "Dictionary of Literary Biography ",
        description:
            "<p>Contains thousands of biographical and critical essays on the lives, works, and careers of the world's most influential literary figures.</p>",
        subjects: ["Biographies, English, Languages and International Studies"],
        contentTypes: ["Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=DLBC&u=byuidaho",
        moreInfo:
            "Find information about writers from all eras and genres.Dictionary of Literary Biography (DLB) Complete Online includes the DLB main series, the DLB Documentary Series, and the DLB Yearbook Series.",
    },
    {
        name: "Digital Dissertations and Theses Global",
        description:
            "<p>A collection of millions of dissertations and theses from around the world - coverage from 1743 to the present; thousands of annual additions.</p>",
        subjects: [
            "Biology, Dance, General, Health Services, History, Humanities and Philosophy, Interdisciplinary Studies, Mathematics, Music, Political Science, Sociology and Social Work, Theatre",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/pqdtglobal",
        moreInfo:
            "Subject coverageArtsBusiness &amp; EconomicsEducationHumanitiesSocial SciencesBehavioral SciencesNatural SciencesMathematics &amp; Physical SciencesHealth &amp; Medical Sciences",
    },
    {
        name: "Digital Library of Classic Protestant Texts",
        description:
            "<p>Access an extensive range of seminal works from the Reformation and post-Reformation eras.</p>",
        subjects: [
            "English, History, Humanities and Philosophy, Religious Education, Special Collections",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/tcpt",
        moreInfo:
            "A resource for historians, theologians, political scientists, and sociologists studying the religious and social upheavals of the 16th and 17th centuries, the Digital Library of Classic Protestant Texts gives access to a treasury of theological writings, biblical commentaries and translations, confessional documents, sermons, letters, polemical treatises, and other works by hundreds of Protestant authors from the Reformation and post-Reformation eras.&nbsp;",
    },
    {
        name: "Digital National Security Archive (DNSA)",
        description:
            "<p>A trove of declassified US government documents from 1945 to the present.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/dnsa",
        moreInfo:
            "Created in partnership with the National Security Archive, this resource consists of expertly curated, and meticulously indexed, declassified government documents covering U.S. policy toward critical world events \u2013 including their military, intelligence, diplomatic and human rights dimensions \u2013 from 1945 to the present. Each collection is assembled by foreign policy experts and features chronologies, glossaries, bibliographies, and scholarly overviews to provide unparalleled access to the defining international issues of our time.",
    },
    {
        name: "Digital Scholar Lab",
        description:
            "<p>Apply natural language processing tools to raw text data (OCR) from Gale Primary Sources (or any .txt file) in this research platform. Select Microsoft Log in; use BYU-I email.</p>",
        subjects: ["History"],
        contentTypes: ["Statistics", "Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://link-gale-com.byui.idm.oclc.org/apps/DSLAB?u=byuidaho&aty=ip",
        moreInfo:
            "Gale Digital Scholar Lab equips students and scholars with text and data mining resources, visualization tools, and methodology suggestions. The incremental process of Build, Clean, and Analyze supports newcomers and experienced users alike as they interpret both Gale Primary Sources and their own documents.&nbsp;",
    },
    {
        name: "Digital Theatre+",
        description:
            "<p>Stream full-length British theatre productions including Shakespeare, classics, musical theater, dance, opera, and recent productions.</p>",
        subjects: ["Dance, Theatre"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://edu.digitaltheatreplus.com",
        moreInfo:
            "Search by title, theme, genre, people, or series.&nbsp;Includes interviews, study guides, essays, and other educational resources.Digital Theatre+ collaborates with over 50 world-class theatre companies, industry associations, practitioners, teachers, examination boards and scholars to capture and curate live performance in stunning quality, bring an unprecedented range of insights from behind the scenes, and commission bespoke educational resources to support study at every level.",
    },
    {
        name: "Directory Library",
        description:
            "<p>Directories give non-biased information on companies, publishers, associations, etc. Users have the ability to sort, filter, &amp; export.&nbsp;</p><p>&nbsp;</p>",
        subjects: ["Business Management, Communications"],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://link-gale-com.byui.idm.oclc.org/apps/GDL?u=byuidaho&aty=ip",
        moreInfo:
            "Full List of Directories Included:&nbsp;Publishers DirectoryDirectory of Publications and Broadcast MediaConsultants &amp; Consulting Organizations DirectoryEncyclopedia of Association: International OrganizationsEncyclopedia of Association: National Organizations of the U.S.International Research Centers DirectoryNational Directory of Nonprofit OrganizationsBiography &amp; Genealogy Master IndexDirectory of Special Libraries &amp; Information Centers",
    },
    {
        name: "Diversity Studies",
        description:
            "<p>The Diversity Studies Collection explores cultural differences, contributions, and influences in the global community.&nbsp;</p>",
        subjects: [
            "History, Humanities and Philosophy, Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPDS&u=byuidaho",
        moreInfo:
            "This collection includes almost 3 million articles from 150 journals, updated daily. Exclusive features, including Topic Finder, and a mobile-optimized interface, support and enhance the search experience.",
    },
    {
        name: "DSM Library",
        description:
            "<p>The most comprehensive, current, and critical resource for clinical practice for today's mental health clinicians and researchers (5 titles).</p>",
        subjects: ["Nursing, Psychology"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://dsm.psychiatryonline.org/",
        moreInfo:
            "The DSM Library includes full-text access to these DSM texts:&nbsp;DSM-5 Diagnostic and Statistical Manual of Mental DisordersDiagnostic and Statistical Manual of Mental DisordersDSM-5 Handbook of Differential Diagnosis,&nbsp;DSM-5 Clinical Cases (and DSM-5-TR)DSM-5 Handbook on the Cultural&nbsp;Formulation Interview&nbsp;Gu\u00eda de Consulta del DSM-5&nbsp;-- Used by health professionals, social workers, and forensic and legal specialists, and others to diagnose and classify mental disorders.",
    },
    {
        name: "DSM-5 Diagnostic and Statistical Manual of Mental Disorders ",
        description:
            "<p>Direct access to to the diagnostic manual portion of the DSM-5 library.</p>",
        subjects: ["Nursing, Psychology"],
        contentTypes: ["eBooks", "Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://doi-org.byui.idm.oclc.org/10.1176/appi.books.9780890425787",
        moreInfo: "",
    },
    {
        name: "Early American Fiction 1789-1875 ",
        description:
            "<p><i>Early American Fiction 1789\u20131875</i> contains the full text of hundred of early masterpieces of American fiction.</p><p>&nbsp;</p>",
        subjects: ["English"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343198504?accountid=9817",
        moreInfo:
            "This collection situates the work of canonical writers alongside numerous novels and short stories popular in their own time but now forgotten and largely inaccessible in print form. Provides links to biographies and critical reviews of the writers as well as related reference works.Includes works by Louisa May Alcott, Herman Melville, Harriet Beecher Stowe, James Fenimore Cooper, Edgar Allan Poe, Nathaniel Hawthorne, Mark Twain, William Hill Brown, Susanna Haswell Rowson, Joseph Holt Ingraham, Harriet Jacobs, William Wells Brown, and others.And such works as Power of Sympathy, Lost of Mount Auburn, Moby Dick, Incidents in the Life of a Slave Girl, and Clotelle.",
    },
    {
        name: "Early Encounters in North America: Peoples, Cultures, and the Environment",
        description:
            "<p>Documents the relationships among peoples in North America from 1534 to 1850; gleaned from narrative, diaries, journals, &amp; letters.</p>",
        subjects: ["History, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/eena",
        moreInfo:
            "Assembled from hundreds of sources, this collection focuses on personal accounts and provides unique perspectives from all of the protagonists, including traders, slaves, missionaries, explorers, soldiers, native peoples, and officials - both men and women. The project brings coherence to a wide range of published and unpublished accounts, including narratives, diaries, journals, and letters.",
    },
    {
        name: "Early English Books Online",
        description:
            "<p>Page images of almost every work printed in the British Isles and North America, as well as works in English printed elsewhere from 1470-1700.&nbsp;</p>",
        subjects: ["English, History, Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/eebo",
        moreInfo:
            "Early English Books Online (EEBO) features page images of almost every work printed in the British Isles and North America, as well as works in English printed elsewhere from 1470-1700. EEBO includes publications in all subjects: literature, religion, government, medicine, science, and music. EEBO provides the facsimile of each work, so researchers can study them as they appeared. New content added yearly.",
    },
    {
        name: "Early English Prose Fiction ",
        description:
            "<p>A collection of more than 200 works from the period 1500\u20131700, exploring the prose fiction in English preceding the form of the realist novel.</p>",
        subjects: ["English, History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343194076?accountid=9817",
        moreInfo:
            "A collection of more than 200 works from the period 1500\u20131700, exploring the rich diversity of prose fiction in English in the period preceding the emergence of the realist novel as its dominant form. Early English Prose Fiction offers the full text of works in various genres such as prose romances, jest fiction, and rogue literature.Writers include: John Bunyan, Sir Philip Sidney, Thomas Nashe, Aphra Behn, Roger Boyle, Philip Sidney, George Peele, John Skelton, and Elkanah Settle.Works include: Pilgrim\u2019s Progress, Arcadia, Parthenissa, Merrie Conceited lests, Merie Tales, Notorious Impostor, Life and Death of Mrs. Mary Frith, and Mal Cutpurse.",
    },
    {
        name: "Early Modern Books",
        description:
            "<p>Brings together searches from two databases: <i>Early English Books Online (EEBO) </i>and <i>Early European Books.</i></p>",
        subjects: ["English, History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/emb/literature/fromDatabasesLayer?accountid=9817",
        moreInfo:
            "Early Modern Books covers material from the British Isles and Europe for the period 1450-1700, bringing together two powerful databases into one interface: Early English Books Online (EEBO) and Early European Books - allowing scholars to view materials from over 225 source libraries worldwide. Content from the European collection covers the curated materials from 4 national libraries and London's Wellcome Library.&nbsp;",
    },
    {
        name: "Eastern Idaho Obituary Index",
        description:
            "<p>This index contains over 134,000 obituary records, primarily from southeastern Idaho and adjoining areas.</p>",
        subjects: ["Family History"],
        contentTypes: ["Abstract / Citation / Index", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://archives.byui.edu/family-history/obits",
        moreInfo: "",
    },
    {
        name: "Ebook Central (ProQuest)",
        description:
            "<p><i>Ebook Central</i> offers access to more than a million ebooks, many selected specifically for BYU-Idaho courses.&nbsp;</p>",
        subjects: ["General"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://ebookcentral.proquest.com/lib/byui/home.action?ebraryDocId=null",
        moreInfo:
            "Ebook central offers access to more than a million ebooks, with new titles added each year, many selected specifically for BYU-Idaho courses. It provides users with discovery, selection, acquisition, administration, and reporting, all in one platform.Information on how to read on a mobile device.",
    },
    {
        name: "eBook Collections (EBSCO)",
        description:
            '<p>Access scores high-quality eBooks and audio books in multiple disciplines from major academic publishers and university presses. &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.ebsco.ebscomobile">Android app&nbsp;</a>&nbsp; <a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/ebsco-mobile/id1473281170">iOS app</a></p>',
        subjects: ["General"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=nlebk,e867sww,e866sww,e864sww,e865sww,e868sww&authtype=sso&custid=s8406107",
        moreInfo:
            "Access over a million high-quality eBooks and audio books in multiple disciplines from major academic publishers and university presses around the world. Selected from best-sellers, award winners, and specific titles for BYU-I courses.&nbsp;EBSCO Android Mobile app&nbsp;&nbsp; EBSCO iOS Mobile app",
    },
    {
        name: "EBSCO Research Databases",
        description:
            "<p>Search all BYU-I's subscribed EBSCO databases simultaneously.&nbsp;</p>",
        subjects: ["nan"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost,e866sww,e868sww,b6h&custid=s8406107&authtype=sso",
        moreInfo: "",
    },
    {
        name: "EconLit with Full Text ",
        description:
            "<p>Full-text access to key economic journals, dissertations, and books covering all types of economic topics.</p>",
        subjects: ["Business Management, Communications, Economics"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eoh&authtype=sso&custid=s8406107",
        moreInfo:
            "EconLit with Full Text is the full-text counterpart to EconLit, the American Economic Association's authoritative index for economic literature, providing indexing and full-text access to key economic journals, dissertations, and books. Includes the&nbsp;American Economic Association journals with no embargo:American Economic ReviewJournal of Economic LiteratureJournal of Economic Perspectivesplus hundreds of other journals covering all types of economic topics.Topics include: Agricultural economics, Business economics, Capital markets, Country studies, Economics, Economic forecasting, Environmental economics, &nbsp;Econometrics, Economic forecasting, Economic systems, Environmental economics, Financial economics, General economics, Government regulations, History of economic thought, Industrial organization, International economics, Labor and Demographic economics, Law and economics, Macroeconomics, Microeconomics, Monetary theory, Public economics, Rural economics, Urban economics",
    },
    {
        name: "Economics and Theory Collection",
        description:
            "<p>Discover content useful for useful for starting a business, marketing a product, developing policy, analyzing trends, etc.&nbsp;</p>",
        subjects: ["Business Management, Communications, Economics"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPBE&u=byuidaho",
        moreInfo:
            "Other topics covered include: constructing economic models, investing for the future, researching rates, economics, and marketing.",
    },
    {
        name: "Economist Historical Archive, 1843-2015",
        description:
            "<p><i>The Economist</i> magazine has long presented timely reporting, concise commentary and comprehensive analysis of global news every week.</p>",
        subjects: ["Business Management, Communications, Economics, History"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=ECON&u=byuidaho",
        moreInfo:
            "The Economist has delivered a highly intelligent and comprehensive report of the week's events and has long been a leading magazine for business and political leaders, politicians, diplomats, bankers, journalists, and other influential people throughout the world.&nbsp;Here its back issues are made accessible and serve as key witnesses to the economic and political history of the last 170 years. They provide a unique, unbiased analysis of major world events; facilitate the comparison of economic trends across continents and centuries; and offer an ideal historical resource for cutting-edge ideas in an easily digestible form.",
    },
    {
        name: "Ed.Flicks",
        description:
            "<p>Access over 400 early childhood video training segments, featuring topics like Challenging Behaviors, Infant &amp; Toddler Care, Family Partnerships.</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://hub.exchangepress.com/videos/",
        moreInfo:
            "Ed.Flicks Exchange Training Videos on Demand gives access to a growing library of over 400 high-quality early childhood video training segments you can use in small group presentations, PowerPoint presentations, and online learning platforms. Featuring real-time interactions from classrooms across the country and insights from recognized experts in the field, these high-definition, closed-captioned videos on child development and teaching, featuring topics such as Addressing Challenging Behaviors, Infant &amp; Toddler Care, Family Partnerships, and more (Exchange Press).",
    },
    {
        name: "Education - Primary ",
        description:
            "<p>Access magazines and reference materials designed for primary school children. All articles include Lexile reading level information.</p><p>&nbsp;</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=prh,e867sww,funk,ehk5&authtype=sso&custid=s8406107",
        moreInfo:
            "Magazines include: Fun for Kidz, Girls' Life, Highlights, Ranger Rick, Ranger Rick, Jr., Scout Life, Sports Illustrated Kids, Cobblestone, Stone Soup, TIME for Kids, Zoobooks,&nbsp;plus dozens of others.This search includes the following EBSCO databases: Primary Search, Funk &amp; Wagnalls Encyclopedia, Primary Search Reference eBooks, and Explora Primary Schools.",
    },
    {
        name: "Education - Secondary",
        description:
            "<p>A variety of resources designed for middle and high school students: magazines, reference books, biographies, images, &amp; more. Includes Lexile level.</p>",
        subjects: ["General, Teacher Education"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=g5h,mih,ulh,funk,e865sww,e866sww&authtype=sso&custid=s8406107",
        moreInfo:
            "A combined search of the EBSCO databases Middle Search Plus; MAS Ultra - School Editions; MasterFILE Premier; all full-text articles include Lexile (reading) levels.Provides access to a variety of sources such as:&nbsp; &nbsp;-Reference Books such as Funk &amp; Wagnalls New World Encyclopedia and the Encyclopedia of Animals.&nbsp; &nbsp;-Full-text magazines including Sports Illustrated Kids, Scholastic News, National Geographic, People, US News &amp; World Report, Time, Newsweek, and dozens more.&nbsp; &nbsp;-Biographies, Images, Primary Source Documents, and more.",
    },
    {
        name: "Education - Teachers",
        description:
            "<p>Search multiple EBSCO Education databases designed for education professionals, pedagogy students, and policy makers.&nbsp;</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eric,tfh,eue,eft&authtype=sso&custid=s8406107",
        moreInfo:
            "Includes these collections:&nbsp;ERIC, Professional Development Collection, Education Full Text (H.W. Wilson), and Education Source.&nbsp;Covers these topics and more: Social Sciences, Humanities, Education, Computer Sciences, Engineering, Physics, Chemistry, Language, Linguistics, Arts, Literature, Medical Sciences, Ethnicity, Political Science, Psychology, Sociology, World History, Theology, Women's Studies, Business, Health, Teaching, Teachers, Education, classroom management, school environment, classroom, child development, child care, \u2026",
    },
    {
        name: "Education Full Text",
        description:
            "<p>A research database for education students, professionals and policymakers covering the essentials of education &amp; related fields.&nbsp;</p><p>&nbsp;</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eft&authtype=sso&custid=s8406107",
        moreInfo:
            "Includes hundreds of peer-reviewed, open access, and non-open access journals.List of journals covered",
    },
    {
        name: "Education in Video",
        description:
            "<p>A collection of videos for training &amp; developing teacher with demonstrations, documentaries, classroom footage, etc.</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Video", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/ediv",
        moreInfo:
            "Over a thousand hours of videos developed specifically for pedagogy.&nbsp;Video content includes demonstrations, lectures, documentaries, and primary-source footage of students and teachers in actual classrooms, giving students a way to observe the intricacies of behavior, tone, facial expression, and body language that define effective teaching styles.&nbsp; The collection also contains a wealth of ready-to-use teaching tools, including course, study, and discussion guides; assessment checklists; and themed playlists.",
    },
    {
        name: "Education Index Retrospective: 1929-1983 (H.W. Wilson)",
        description:
            "<p>An archive index chronicling over a half a century (1929-1983) of important education literature. Access full-text for many.</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Abstract / Citation / Index", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eir&authtype=sso&custid=s8406107",
        moreInfo:
            "Education Index Retrospective&nbsp;covers&nbsp;societal trends affecting education, including&nbsp;segregation, multiculturalism, feminism, economic developments&nbsp;and more. It contains both historical and updated subject headings, ensuring that researchers using either old or new search terms will obtain all the information on that subject. Original subject headings offer insight into how the topics were once framed.",
    },
    {
        name: "Education Source",
        description:
            "<p>Thousands of education journals, books and education-related conference papers. Spans all levels of education &amp; many specialty areas.</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eue&authtype=sso&custid=s8406107",
        moreInfo:
            "Research database for education students, professionals, and policymakers with full text articles, indexing, and abstracts from thousands of education journals, books, and education-related conference papers. Coverage spans all levels of education and includes educational specialties such as multilingual education, health education and testing.",
    },
    {
        name: "Educator's Reference Complete",
        description:
            "<p>ERC seeks to provide full-text access for articles in the ERIC database; covers topics from all education levels, issues, and specialties.</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=PROF&u=byuidaho",
        moreInfo:
            "Covers education topics for teaching and learning from preschool through college in every education specialty such as administration, bilingual education, child development, funding, health education, reading, technology, testing. Educator's Reference Complete&nbsp;seeks to provide full text for articles indexed in the ERIC database.",
    },
    {
        name: "Eighteenth Century Collections Online",
        description:
            "<p><i>ECCO </i>contains English-language and foreign-language titles published in the UK between 1701 and 1800, plus thousands from the Americas.&nbsp;</p>",
        subjects: [
            "Dance, English, History, Humanities and Philosophy, Languages and International Studies, Special Collections",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=ECCO&u=byuidaho",
        moreInfo:
            "The largest and most comprehensive online historical archive of its kind and an essential resource for advanced study of the eighteenth century, this collection contains every significant English-language and foreign-language title (books, pamphlets, &amp; broadsides) printed in the United Kingdom between the years 1701 and 1800, plus thousands of important works from the Americas. It also contains 150,000 printed works covering the American Revolution, the French Revolution, and the Industrial Revolution.",
    },
    {
        name: "Eighteenth Century Drama",
        description:
            "<p>A unique archive of almost every play submitted for license in England between 1737 and 1824, plus documents providing social context.</p>",
        subjects: ["History, Theatre"],
        contentTypes: ["Images", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.eighteenthcenturydrama.amdigital.co.uk/",
        moreInfo:
            "A unique archive of almost every play submitted for license between 1737 and 1824, and hundreds of documents that provide social context for the plays, featuring: The Huntington Library's Larpent collection, supplementary documents including Anna Larpent's criticisms and insights, playbills, theatre records, and a biographical dictionary of London stage personnel from 1660-1800. This resource provides rich insight not only theatre and drama, but literature, history, politics, music, censorship, gender and Romanticism.Part of the&nbsp;AM Explorer collection.",
    },
    {
        name: "Eighteenth Century Fiction",
        description:
            "<p>A collection of 96 complete works of English prose created during the period 1700\u20131780 by writers from the British Isles.</p>",
        subjects: ["English, History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343194074?accountid=9817",
        moreInfo:
            "The eighteenth century saw an enormous increase in the production and publication of prose narratives. Users have access to this dynamic period of English literary history; a time when the structure and conventions of what would be termed the novel were shaped and developed. Represents both major writers and less well-known, but significant figures in the literary scene.",
    },
    {
        name: "Eighteenth Century Journals",
        description:
            "<p>Rare journals printed between c1685 &amp; 1815, illuminating all aspects of eighteenth-century social, political &amp; literary life.&nbsp;</p>",
        subjects: [
            "English, History, Humanities and Philosophy, Languages and International Studies",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.18thcjournals.amdigital.co.uk/",
        moreInfo:
            "Bringing together rare journals printed between c.1685 and 1835, this resource illuminates all aspects of eighteenth-century social, political and literary life. Topics covered are wide-ranging and include colonial life, provincial and rural affairs, the French and American revolutions, reviews of literature and fashion throughout Europe, political debates, and London coffee house gossip and discussion.&nbsp;Part of the&nbsp;AM Explorer collection.",
    },
    {
        name: "EMarketer / Insider Intelligence - Dropped by CCLA in 2022",
        description:
            "<p>Provides market research and trend analysis on Internet, e-business, online marketing, media and emerging technologies.&nbsp;</p>",
        subjects: ["Business Management, Communications, Economics, Marketing"],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://totalaccess.emarketer.com/extranet.aspx?byu",
        moreInfo:
            "Insider Intelligence provides market research and trend analysis on Internet, e-business, online marketing, media and emerging technologies; aggregating and analyzing information from over 3,000 sources, it brings results together in analyst reports, daily research articles and a database of e-business and online marketing statistics.&nbsp;",
    },
    {
        name: "Emerald Insight",
        description:
            "<p>Access Emerald Publishing's born-digital journals, books, and case studies; relevant to a wide range of subject areas.</p>",
        subjects: [
            "Accounting, Animal and Food Science, Applied Plant Science, Business Management, Communications, Computer Information Technology, Computer Science and Electrical Engineering, Finance, Home and Family, Marketing, Mechanical & Civil Engineering",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www-emerald-com.byui.idm.oclc.org/insight/",
        moreInfo:
            "Subject areas include accounting, finance, management, marketing, education, information studies, automation, circuitry, hospitality, libraries, and engineering.&nbsp;Subscribed journals and books are listed on the site under My Products. The site also includes links to additional useful resources for students, teachers and researchers.&nbsp;",
    },
    {
        name: "Empire Online ",
        description:
            "<p>A collection of various primary source materials for the study of \u2018Empire,\u2019 its theories, practices, and consequences. &nbsp;</p>",
        subjects: ["English, History, Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.empire.amdigital.co.uk/",
        moreInfo:
            "This resource brings together manuscript, printed and visual sources for the study of 'Empire' and its theories, practices and consequences. The materials provide varying points of view, giving American, French, Dutch, Spanish, Portuguese, German, and British perspectives. Spanning across the last five centuries, these materials are accompanied by a host of secondary learning resources including scholarly essays, maps, and an interactive chronology.Part of the&nbsp;AM Explorer collection.",
    },
    {
        name: "English Drama ",
        description:
            "<p>Plays in verse and prose from medieval mystery cycles of the late thirteenth century to the comedies and dramas of the early twentieth.</p><p>&nbsp;</p>",
        subjects: ["Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343197739?accountid=9817",
        moreInfo:
            "English Drama contains more than 3,900, offering exhaustive coverage of the prodigious dramatic literature of the Elizabethan and Jacobean periods, as well as Restoration plays, medieval morality plays and mystery cycles, and nineteenth-century closet dramas. Includes works by and about figures as varied as Ben Jonson, Aphra Behn, William Wycherley, Oliver Goldsmith, Richard Sheridan, Oscar Wilde, J. M. Synge, and Shakespeare.Access list of works included.&nbsp;",
    },
    {
        name: "English Poetry, Second Edition ",
        description:
            "<p>Comprises essentially the complete cannon of English poetry of the British Isles and the British empire from the 8th century to the early 20th.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343199843?accountid=9817",
        moreInfo:
            "English Poetry, Second Edition draws&nbsp;from over 2,700 poets. Developed from and adding to the original Chadwyk-Healy collection (1st edition), this collection highlights the literary heritage of the Commonwealth and ex-colonial countries and the poetic legacies of English writers. In addition to the six-volume series of the Anglo-Saxon Poetic Records, several landmark anthologies are available in their entirety, including England's Helicon, Richard Tottel's \"Miscellany\", and Robert Dodsley's A Collection of Poems in Six Volumes.First Edition contents only",
    },
    {
        name: "Entrepreneurship ",
        description:
            "<p>Analyze business insights, tips, strategies, and success stories. Updated daily. Best for business schools and entrepreneurs.</p><p>&nbsp;</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPSB&u=byuidaho",
        moreInfo:
            "This resource covers all aspects of starting and operating a business, including accounting, finance, human resources, management, marketing, tax, and more.&nbsp;It combines authoritative periodical and reference content to support prospective and current entrepreneurs as well as business students.&nbsp;The interface is mapped to four key stages\u2014plan, fund, start, and manage\u2014to fit needs at any point in a business's development.",
    },
    {
        name: "Environmental Studies",
        description:
            "<p>Repository of authoritative content on green technologies.&nbsp;</p>",
        subjects: [
            "Animal and Food Science, Applied Plant Science, Biology, Chemistry, Design and Construction Management, Health Services, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=GRNR&u=byuidaho",
        moreInfo:
            "Understand environmental issues that affect people globally through topic overviews, journals, news, and multimedia content.&nbsp;Primary areas of focus include Earth Systems, Energy, Global Change, Land &amp; Water Use, Legislation &amp; Organizations, Agriculture, Law &amp; Politics, Economics &amp; Trade, Pollution, Energy, Resource Management, Environment &amp; Ecology, Social Factors, and more.&nbsp;",
    },
    {
        name: "Environmental Studies and Policy ",
        description:
            "<p>Explore environmental issues and concerns with diverse perspectives from the scientific community, policy makers, and corporate interests.</p>",
        subjects: [
            "Animal and Food Science, Applied Plant Science, Biology, Chemistry, Geography, Geology",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPES&u=byuidaho",
        moreInfo:
            "Includes content from hundreds of journals and reference books from Delmar, including Soil, Science, and Management; Introduction to Agronomy; Food, Crops, &amp; Environment; Fundamental Soil Science; and more.&nbsp;",
    },
    {
        name: "ERIC by EBSCO",
        description:
            "<p>EBSCO interface for the ERIC education database, an authoritative source of indexed and full-text education literature and resources.</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=eric&authtype=sso&custid=s8406107",
        moreInfo:
            "Sponsored by the Institute of Education Sciences of the U.S. Department of Education, this is an essential tool for education researchers of all kinds.&nbsp;Limit search by education level or intended audience.",
    },
    {
        name: "Essay and General Literature Retrospective (H.W. Wilson)",
        description:
            "<p>Collections of essays from the US, the UK, and Canada from 1900-1984. Coverage spans the range of humanities and social sciences.</p>",
        subjects: [
            "Economics, English, History, Humanities and Philosophy, Political Science, Theatre",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=egr&authtype=sso&custid=s8406107",
        moreInfo:
            "Offers access to 300,000+ essays; new ones are index &amp; added annually.Subjects Include:AnthropologyArchaeologyArtEconomicsEducationGeographyHistoryLanguageLawLinguisticsLiteratureMusicPhilosophyPolitical SciencePsychologyReligionSociologyTheatre",
    },
    {
        name: "Ethnic Newswatch ",
        description:
            "<p>A comprehensive full text database of the newspapers, magazines, and journals of the ethnic, minority, and native press.</p>",
        subjects: ["Geography, Political Science, Sociology and Social Work"],
        contentTypes: ["Newspapers", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/ethnicnewswatch?accountid=9817",
        moreInfo:
            '"Additional viewpoints for the other side of the story." Ethnic NewsWatch is a current resource of full-text newspapers, magazines, and journals of the ethnic and minority press, providing researchers access to essential, often overlooked perspectives. The database now also contains Ethnic NewsWatch: A History, which provides historical coverage of Native American, African American, and Hispanic American periodicals from 1959-1989.Subject coverageEthnic groupsMinoritiesCultureReligionIndependent pressEthnic studiesAfrican AmericanCaribbeanAfricanHispanic AmericanNative AmericanIndigenous peoplesAsianPacific IslandersArab AmericansMiddle Eastern AmericansEuropean AmericansEastern EuropeanJewish AmericansMulti-ethnicMulti-culturalHuman rightsActivism',
    },
    {
        name: "Euromonitor Passport",
        description:
            "<p>A Global market information database with statistics, market reports, company profiles, etc. on consumers &amp; industries in 205 countries.</p>",
        subjects: [
            "Business Management, Economics, Geography, Interdisciplinary Studies, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Statistics", "Full-Text Articles", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://www.portal.euromonitor.com",
        moreInfo:
            "Passport is Euromonitor International's global market analysis software platform, which analyses the industry in countries around the world and provides data and insight on industries, economies, and consumers worldwide, helping users analyze market context and identify future trends. Provides unbiased views by local analysts and gives access to over 115 million international standardized statistics.&nbsp;",
    },
    {
        name: "European Views of the Americas: 1493 to 1750 ",
        description:
            "<p>An index of publications related to the Americas and written in Europe before 1750, includes thousands of primary source documents.</p>",
        subjects: ["English, History, Humanities and Philosophy"],
        contentTypes: ["Abstract / Citation / Index", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hev&authtype=sso&custid=s8406107",
        moreInfo:
            "This resource comes from \u201cEuropean Americana: A Chronological Guide to Works Printed In Europe Relating to The Americas, 1493-1750.\u201d The database contains more than 32,000 entries covering the history of European exploration as well as portrayals of Native American peoples.&nbsp; Subjects include:&nbsp; British in America, Commerce, Discoveries, Dutch in America, French in America, Great Britain\u2014Colonies, Jesuits and other religious orders in America, Pirates, and the Slave trade.",
    },
    {
        name: "Explora Databases",
        description:
            "<p>EBSCO's <i>Explora</i> provides a simplified search engine with access to articles of all types. Includes access to databases listed below under \u201cAdditional Info.\u201d</p>",
        subjects: ["General, Teacher Education"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehk5&custid=s8406107&authtype=sso",
        moreInfo:
            "A safe, trustworthy environment for students to look up articles and facts for research papers, class projects, or homework in a database with easy-to-use features and age-appropriate content from the world\u2019s leading magazines, books, and reference books.Databases in Explora:&nbsp;Academic Search PremierBiography Reference Source &amp; eBooksComputer SourceEBSCO Host eBook CollectionERICFunk &amp; Wagnalls New World EncyclopediaHealth Source - Consumer EditionMAS Reference eBook CollectionMiddle Search Plus &amp; eBook CollectionMilitary &amp; Government CollectionNewspaper SourcePrimary Search Reference &amp; eBook CollectionProfessional Development CollectionPsychology and Behavioral Sciences CollectionReligion and Philosophy CollectionTopic Overviews K-5&nbsp;&nbsp;",
    },
    {
        name: "Faber Poetry Library",
        description:
            "<p>The works of 50 poets published by Faber; the database continues to grow with the active support of the publisher and the poets or their estates.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343195082?accountid=9817",
        moreInfo:
            "Contains the works of 50 poets, each a part of the Faber Poetry list, comprising 140 volumes of poetry.&nbsp;The Faber list spans the first seventy years of this major publishing house, showcasing some of the most influential poets of the twentieth century.&nbsp;Authors covered include Simon Armitage, Rupert Brooke, Wendy Cope, T. S. Eliot, Lavinia Greenlaw, Thom Gunn, Seamus Heaney, Ted Hughes, David Jones, Louis MacNeice, Andrew Motion, Paul Muldoon, Tom Paulin, Sylvia Plath, Siegfried Sassoon, Stephen Spender and Edward Thomas.",
    },
    {
        name: "FamilySearch",
        description:
            "<p>Search for your ancestors and preserve and bring their stories to life in this genealogy database provided by the LDS Church.</p>",
        subjects: ["Family History"],
        contentTypes: ["Interactive Learning"],
        url: "http://www.familysearch.org/",
        moreInfo: "",
    },
    {
        name: "Feminism in Cuba: Nineteenth through Twentieth Century Archival Documents ",
        description:
            "<p>This collection is a study on feminists &amp; the feminist movement in Cuba, from the time of Cuban independence to the end of the Batista regime.</p>",
        subjects: ["History, Political Science, Sociology and Social Work"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/3FIU/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "This collection is a study on feminists and the feminist movement in Cuba, from the time of Cuban independence to the end of the Batista regime. It provides a documentary explanation of how a small group of women and men helped to shape broad legal reforms and describes their campaigns, the version of feminism they adopted with all its contradictions, and contrasts it to the model of American feminism.This resource is part of the&nbsp;Archives Unbound&nbsp;collection from Gale.",
    },
    {
        name: "Film Scripts Online",
        description:
            "<p>An exploration of culture and cinema through the decades through the theater, revealing cultural attitudes and lifestyles.</p>",
        subjects: ["History, Theatre"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/afso",
        moreInfo:
            "Over 1,100 authorized versions of copyrighted screenplays. Explore full text scripts plus biographies of directors and writers.",
    },
    {
        name: "Filmakers Library Online",
        description:
            "<p>Award-winning documentaries with relevance across the curriculum.&nbsp;</p>",
        subjects: [
            "Communications, Dance, History, Humanities and Philosophy, Languages and International Studies, Music, Political Science, Sociology and Social Work, Theatre",
        ],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/flon",
        moreInfo:
            "Filmakers Library is a collection of issues-based documentaries; crossing nearly all academic disciplines and educate students and researchers on critical and thought-provoking issues, figures, and cultures.Topics includerace and gender studies&nbsp;human rights&nbsp;globalization and global studies&nbsp;multiculturalism&nbsp;international relations&nbsp;criminal justice&nbsp;the environment&nbsp;bioethics&nbsp;health&nbsp;political science&nbsp;current events&nbsp;psychology&nbsp;artsliterature\u2026and more",
    },
    {
        name: "Films on Demand",
        description:
            '<p>A comprehensive video collection of documentaries, nursing films, art and drama performances, and career and technical videos. Apps: <a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.infobase.fod&amp;hl=en_US&amp;gl=US">Android</a> &nbsp; &nbsp; &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/films-on-demand/id1475123089">iOS</a></p>',
        subjects: [
            "Dance, English, General, Health Services, History, Home and Family, Humanities and Philosophy, Job and Career Resources, Music, Nursing, Psychology, Sociology and Social Work, Theatre",
        ],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://fod.infobase.com/PortalPlayLists.aspx?wid=104034",
        moreInfo:
            "Films on Demand&nbsp;is a collection of documentary and educational videos and news footage covering a wide range of academic topics. Ideal for use in instructions or presentation.Selections include the works of filmmakers such as Bill Moyers and Ken Burns as well as PBS programs, TED talks, CNBC political footage, Biography Channel works, British Broadcasting (BBC, National Geographic, HBO Documentary Films, the American Museum of Natural History, and more.Use in presentations or easily embed complete films, segments, or transcripts into coursework.Available as an app: &nbsp; &nbsp; &nbsp; &nbsp;Android app&nbsp; &nbsp;&nbsp;iOS app",
    },
    {
        name: "Financial Times Historical Archive",
        description:
            "<p>This resource delivers the complete run of the London edition of this internationally known daily paper, from its first issue in 1888 through 2010.&nbsp;</p>",
        subjects: [
            "Accounting, Business Management, Economics, Finance, History",
        ],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=FTHA&u=byuidaho",
        moreInfo:
            "A &nbsp;complete online facsimile of the Financial Times Historical Archive,&nbsp;fully-searchable by subject or topic. Every article, advertisement, and market listing is included \u2013 shown both individually and in the context of the full page and issue of the day.Financial Times reports on topics such as industry, energy and international politics. In the final decades of the twentieth century, coverage of management, personal finance and the arts was added, making the paper a complete general newspaper for the businessman.",
    },
    {
        name: "FindMyPast",
        description:
            "<p><i>Findmypast</i> brings the past to life with billions of historical records and newspaper pages to explore, especially for the United Kingdom.</p>",
        subjects: ["Family History, History"],
        contentTypes: ["Newspapers", "Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://www.findmypast.co.uk/",
        moreInfo:
            "FindMyPast provides full access to England, Wales &amp; Scotland census records, easy-to-search birth, marriage and death records, the UK's largest collection of parish records, historical British newspapers and much more.AVAILABLE ON CAMPUS ONLY",
    },
    {
        name: "Fine Arts",
        description:
            "<p>Periodical database for serious students of drama, music, art history, and filmmaking.&nbsp;</p>",
        subjects: ["Art, Humanities and Philosophy, Music"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPFA&u=byuidaho",
        moreInfo:
            "The Fine Arts &amp; Music Collection places 10.4 million articles at the searcher's fingertips. More than 250 journals covered in databases such as the Wilson Art Index and the R\u00e9pertoire International de Litt\u00e9rature Musicale (RILM) index are available in full text. Exclusive features, including Topic Finder, InterLink, and a mobile-optimized interface, support and enhance the search experience.",
    },
    {
        name: "First World War",
        description:
            "<p>Primary sources from libraries, archives, and personal collections covering the \u201cGreat War.\u201d Collected from personal accounts, military records, and more.</p>",
        subjects: ["History, Special Collections"],
        contentTypes: [
            "Images",
            "Video",
            "Audio",
            "Maps",
            "Primary Resource",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.firstworldwar.amdigital.co.uk/",
        moreInfo:
            "The First World War portal makes available invaluable primary sources for the study of the Great War, brought together in four thematic modules (Personal Experiences, Propaganda &amp; Recruitment; Visual Perspectives &amp; Narratives; A Global Conflict). From personal collections and rare printed material to military files, artwork, and audio-visual files, content highlights the experiences of soldiers, civilians and governments on both sides of a conflict that shook the world.&nbsp;Part of the&nbsp;AM Explorer collection.",
    },
    {
        name: "Flipster (Popular Magazines)",
        description:
            '<p><i>Flipster </i>is an easy-to-use digital magazine newsstand with popular magazines provided by BYU-Idaho. As an app: &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.eis.mae.flipster.readerapp">Android&nbsp;</a> &nbsp; &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/flipster-digital-magazines/id797106282">iOS&nbsp;</a></p>',
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "http://search.ebscohost.com/login.aspx?authtype=sso&custid=s8406107&profile=eon&groupid=main",
        moreInfo: "",
    },
    {
        name: "Fold3",
        description:
            '<p><i>Fold3</i> provides convenient access to military records, including the stories, photos, and documents of the men and women who served. <span style="background-color:hsl(60, 75%, 60%);">NOTE</span>: If you receive an error page after a search, use the \u201cSearch &amp; Browse\u201d feature at the top of the page.</p>',
        subjects: ["Family History, History"],
        contentTypes: ["Images", "Primary Resource", "Government"],
        url: "https://byui.idm.oclc.org/login?url=https://www-fold3-com.byui.idm.oclc.org/",
        moreInfo:
            "Fold3 provides convenient access to military records, including the stories, photos, and personal documents of the men and women who served. The records at Fold3 help you discover and share stories about these everyday heroes, forgotten soldiers, and the families that supported them. Users are also allowed to create online memorials for those who served by combining Fold3&nbsp;and personal records.",
    },
    {
        name: "Food Science & Technology Abstracts",
        description:
            "<p>FSTA indexes journals, books, conference proceedings, reports, theses, patents, standards, and legislation related to human nutrition and food science, technology, and manufacturing.&nbsp;</p>",
        subjects: ["Animal and Food Science, Home and Family"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://www-webofscience-com.byui.idm.oclc.org/wos/fsta/basic-search",
        moreInfo: "",
    },
    {
        name: "Forbes ",
        description:
            '<p><span style="background-color:rgb(255,255,255);color:rgb(32,44,70);font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-family:Inter, &quot;Helvetica Neue&quot;, Arial, sans-serif;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">A trade magazine focusing on business, investing, technology, entrepreneurship, leadership, and lifestyle. Register </span></span><a href="http://account.forbes.com/sign-in?type=new"><span style="background-color:rgb(255,255,255);color:rgb(32,44,70);font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-family:Inter, &quot;Helvetica Neue&quot;, Arial, sans-serif;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>here </strong>first with BYU-I email</span></span></a><span style="background-color:rgb(255,255,255);color:rgb(32,44,70);font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-family:Inter, &quot;Helvetica Neue&quot;, Arial, sans-serif;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"> for access.</span></span></p>',
        subjects: [
            "Accounting, Business Management, Communications, Economics, Marketing",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.forbes.com/",
        moreInfo: "",
    },
    {
        name: "Foreign Broadcast Information Service (FBIS) Daily Reports ",
        description:
            "<p>A news archive from around the world for years 1941-1996, providing global views on the United States foreign and domestic policy after WW II.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb-newsbank-com.byui.idm.oclc.org/apps/readex/?p=FBISX",
        moreInfo:
            "An archive of 20th Century news (1941-1996) from around the world, providing global views on the United States foreign and domestic policy after world War II.&nbsp; Covers the Cold War, China, the Middle East, Latin America, the Soviet Union and more. This collection is the United States' principal record of political and historical open source intelligence.",
    },
    {
        name: "Foreign Office Files for China, 1919-1980",
        description:
            "<p>The complete British Foreign Office Files dealing with China, Hong Kong, and Taiwan from 1919 to 1980.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.foreignofficefileschina.amdigital.co.uk/",
        moreInfo:
            "These formerly restricted files give access to diplomatic dispatches, letters, newspaper cuttings, political pamphlets, reports of court cases, and other materials, representing a constant exchange of information, summaries, reviews, and reports between London and the British embassies and consulates, giving first-hand accounts to this turbulent period of Chinese history.&nbsp;Part of the&nbsp;AM Explorer&nbsp; collection.",
    },
    {
        name: "Foreign Primary Sources, 1600--1970 ",
        description:
            "<p>Provides an interpretive analysis of various European legal codes through monograph publications.&nbsp;</p>",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MLFP?u=byuidaho",
        moreInfo:
            "Jurisdictions included in this collection: Great Britain, Ireland, France, Germany, Austria, Switzerland, as well as other countries in Northern and Eastern Europe.&nbsp;Complements the treatises found in Gale's Foreign, Comparative, and International Law, 1600\u20131926.&nbsp;Note that the term \"primary sources\" is used not in the historian's sense of a manuscript, letter, or diary, but rather in the legal sense of a case, statute, or regulation.",
    },
    {
        name: "Foreign, Comparative, and International Law, 1600--1926",
        description:
            "<p>Provides researchers with instant, full-text access to foreign, comparative, and international legal literature.&nbsp;</p>",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MMLF?u=byuidaho",
        moreInfo:
            "This collection gathers together titles across individual volumes that address issues in the realms of foreign, comparative, Islamic, Jewish, and even Roman and ancient law. The vast majority of titles concentrate on international law, while other titles devoted to foreign law address legal systems in specific countries.\r\nOf special interest in the subfield of international law are works by such great legal theorists as Gentili, Grotius, Selden, Zouche, Pufendorf, Bijnkershoek, Wolff, Vattel, Martens, Mackintosh, and Wheaton, among others. In the realm of foreign law, scholars will find titles that explore questions of law and legal history specific to Argentina, Australia, Belgium, Canada, Chile, China, Egypt, Germany, India, Italy, Japan, Mexico, Netherlands, South Africa, Spain, and Switzerland, with an especially strong representation of legal works on France from 1800 to 1925. In the field of comparative law, this collection features books that compare more than one legal system, with close inspections of common law and civil law systems as well as Talmudic, Islamic, and indigenous legal systems. Featured works cover a vast array of legal fields, including civil, commercial, constitutional, contract, criminal, and tort law, as well as issues in jurisprudence and procedure and legal diplomacy.",
    },
    {
        name: "Funk and Wagnalls New World Encyclopedia",
        description:
            "<p>Over 25,000 full-text encyclopedic entries searchable by subject or keyword; includes images &amp; biographies. Annual updates.</p>",
        subjects: ["Biographies, General"],
        contentTypes: ["Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=funk&authtype=sso&custid=s8406107",
        moreInfo: "",
    },
    {
        name: "Gale Academic OneFile",
        description:
            '<p>Gale\'s multi-disciplinary database for accessing millions of peer-reviewed articles, podcasts, and more. &nbsp; App: &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.cengage.android.accessmylibrary&amp;hl=en_US&amp;gl=US">Android</a>&nbsp; &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/access-my-library/id920817861?ls=1">&nbsp;Apple&nbsp;</a></p><p>&nbsp;</p>',
        subjects: [
            "Chemistry, Economics, General, History, Marketing, Political Science, Psychology",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=AONE&u=byuidaho",
        moreInfo:
            "Search by assigned subject, publication, or related topics. Subjects include Biology, Chemistry, Criminal Justice, Economics, Environmental Science, History, Marketing, Political Science, and Psychology.Available as an App&nbsp; &nbsp; &nbsp;Android&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;Apple&nbsp;",
    },
    {
        name: "Gale Databases",
        description:
            "<p>A searchable listing of all Gale databases to which BYU-Idaho subscribes.</p><p>&nbsp;</p>",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://find.gale.com/menu/commonmenu.do?userGroupName=byuidaho",
        moreInfo: "",
    },
    {
        name: "Gale eBooks (GVRL)",
        description:
            "<p>Access to reference books in subjects across the curriculum from Arts to History; from Medicine to Social Science.</p>",
        subjects: ["Art, General, Mathematics"],
        contentTypes: ["eBooks", "Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/GVRL?u=byuidaho",
        moreInfo:
            "Gale eBooks&nbsp;provides access to more than 2,600 reference e-books in Arts, Biography, Business, Education, Environment, History, Law, Literature, Medicine, Multicultural Studies, Nation &amp; World, Religion, Science, and Social Science. Gale provides a seamless, integrated website experience that allows users to streamline information for research and educational purposes.Android App&nbsp; &nbsp; iOS app",
    },
    {
        name: "Gale Primary Sources",
        description:
            "<p>Search across the primary source documents in the Gale databases provided by BYU-Idaho; utilizes various search options and research tools.</p>",
        subjects: [
            "English, History, Humanities and Philosophy, Political Science",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=GDCS&fromProdId=GDCS&userGroupName=byuidaho",
        moreInfo:
            "Gale Primary Sources is a universal research experience that combines Gale's acclaimed digital archives in a single cross-search interface. Gale Primary Sources greatly enhances the research experience for students and researchers by broadening their discovery of primary source documents through the use of multiple search options and powerful research tools. By building a seamless research environment for multiple collections, Gale is creating the largest digital humanities and social sciences resource in the world.&nbsp;",
    },
    {
        name: "Gardening and Horticulture",
        description:
            "<p>Millions of articles from topic-specific journals plus reference titles from Delmar on gardening, landscaping, and horticulture.</p>",
        subjects: ["Animal and Food Science, Applied Plant Science"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPGL&u=byuidaho",
        moreInfo:
            "A few of the hundreds of titles included:&nbsp;Foliage and Creative DesignComputer Graphics for Landscape ArchitectsFarmingFundamental Soil ScienceGardens IllustratedGood Organic GardeningHorticulture, the Art of American GardeningJournal of EcologyLandscape Architecture MagazineMother Earth NewsNOVAFarmer's AlmanacTrends in Plant ScienceHandbook of Flowers, Foliage, and Creative Design&nbsp;&nbsp;",
    },
    {
        name: "Garland Encyclopedia of World Music ",
        description:
            "<p>An encyclopedia devoted to music research of all the world's peoples. Consists of articles and audio recordings from experts around the world.</p>",
        subjects: ["Music"],
        contentTypes: ["Audio", "Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/glnd",
        moreInfo:
            "Volume 1: AfricaVolume 2: South America, Mexico, Central America, and the CaribbeanVolume 3: The United States and CanadaVolume 4: Southeast AsiaVolume 5: South Asia: The Indian SubcontinentVolume 6: The Middle EastVolume 7: East Asia: China, Japan, and KoreaVolume 8: EuropeVolume 9: Australia and the Pacific IslandsVolume 10: The World's Music: General Perspective and Reference Tools",
    },
    {
        name: "Gender Studies",
        description:
            "<p>Balanced coverage of this significant aspect of culture and society, covering topics such as roles, equity, identity, family, and marriage.</p>",
        subjects: ["Sociology and Social Work"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPGB&u=byuidaho",
        moreInfo:
            "The database offers access to scholarly journals and magazines covering topics related to culture, gender, identity, roles, and more.",
    },
    {
        name: "Genealogy Connect",
        description:
            '<p><i>Gale Genealogy Connect</i>&nbsp;provides books on the "how-to" of genealogy research plus dozens of location- and topic-related resources.</p>',
        subjects: ["Family History, History"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link-gale-com.byui.idm.oclc.org/apps/GENVRL?u=byuidaho&aty=ip",
        moreInfo:
            "More than 1,500 authoritative resources from Genealogical.com and Clearfield.&nbsp;Collections include: Getting Started, Essentials, Colonial, Immigration, Native American, New England, and Royal &amp; Noble sources.",
    },
    {
        name: "General OneFile",
        description:
            "<p>Gale's largest general-interest journal &amp; magazine resource plus accompanying reference, newspaper, and audio content.</p>",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=ITOF&u=byuidaho",
        moreInfo:
            "Gale's largest general-interest periodical resource, General OneFile allows researchers to find the information from sources with guaranteed quality. Most content in this resource is full-text with no embargo and recommended by Bowker's Magazines for Libraries. Also includes reference, newspaper, and audio content that complements the collection of magazines and journals.&nbsp;",
    },
    {
        name: "GeoRef",
        description:
            '<p>Best accessed via <a href="https://byui.idm.oclc.org/login?url=https://pubs-geoscienceworld-org.byui.idm.oclc.org/advanced-search">GeoScienceWorld.</a> Contains a vast amount of indexed information covering a wide spectrum of geoscience literature.</p>',
        subjects: ["Geography, Geology"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.engineeringvillage.com/search/quick.url?database=2097152",
        moreInfo:
            'GeoRef contains a vast amount of indexed information covering a wide spectrum of geoscience literature plus a thesaurus of geologic terms. Other records featured within the database include indexed books, maps, government reports, conference papers, theses and dissertations. GeoRef "covers the geology of North America from 1666 to the present and the rest of the world from 1933 to the present...[and] includes references to all the publications of the U.S. Geological Survey." (GSW)',
    },
    {
        name: "GeoScienceWorld",
        description:
            "<p>A comprehensive resource for research in the geosciences; an aggregation of journals indexed, linked and inter-operable with GeoRef.</p>",
        subjects: ["Geography, Geology"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Maps",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.geoscienceworld.org/",
        moreInfo:
            "GeoScienceWorld (GSW) is a resource for research and communications in the earth sciences built on a core database of peer-reviewed journals and integrated with the GeoRef index. The organization gives global researchers a single point of access to dozens of full-text scholarly journals plus specialized searching capabilities and links to millions of relevant resources hosted elsewhere on the Web.&nbsp;",
    },
    {
        name: "German Folklore and Popular Culture: Das Kloster. Scheible.",
        description:
            "<p>This collection provides insight into the pervasive influence of German folklore on literature and popular culture.</p>",
        subjects: [
            "English, History, Humanities and Philosophy, Languages and International Studies",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/4LKO/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "Germany is a land of fascinating customs and traditions and this collection is an accessible introduction to German folklore.&nbsp;Through the work of the many authors, Germany's folk and fairy tales have become widely read around the world. German folklore has also inspired numerous literary, artistic, and musical works.&nbsp;Part of the Archives Unbound collection.",
    },
    {
        name: "Gerritsen Collection - Women's History Online ",
        description:
            "<p>The greatest single source for the study of women's history in the world, with materials spanning four centuries (1543-1945) and 15 languages.</p>",
        subjects: [
            "History, Languages and International Studies, Sociology and Social Work",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/gerritsen",
        moreInfo:
            "Trace the evolution of feminism within a country or across the world with this cross-cultural resource for information on women's history. It spans more than four centuries and 15 languages and includes over two million pages in full image. Learn the impact feminist movements in one country had on another. The Gerritsen Collection is the single largest source for the study of women's history in the world.",
    },
    {
        name: "getAbstract",
        description:
            '<p>Delivers concise summaries of the latest, sharpest, and most relevant books in business. App: &nbsp; &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://itunes.apple.com/us/app/getabstract/id338552990">iOS &nbsp;&nbsp;</a> &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.soxes.getAbstract">Android</a> &nbsp;&nbsp;</p><p>&nbsp;</p>',
        subjects: [
            "Business Management, Communications, General, Job and Career Resources",
        ],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://www.getabstract.com/portal/byui",
        moreInfo:
            "GetAbstract is the world's largest collection of business, leadership, and personal development summaries; with powerful 5-page / 10-minute read or listen summaries. Glean the key insights from 20,000+ of the best nonfiction and business books, articles, and video talks. GetAbstract is used by over one third of Fortune 100 companies to provide their employees and executives with the knowledge they need to succeed.Available as an app&nbsp;&nbsp; &nbsp;&nbsp;Android&nbsp; &nbsp;&nbsp; iOS&nbsp;Authenticates with BYU-I credentials.",
    },
    {
        name: "Global Breaking Newswires",
        description:
            "<p>Updated thrice daily, this resource gives timely access to global newswire (distributed) content.</p>",
        subjects: ["General, Political Science"],
        contentTypes: ["Newspapers", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/globalwires?accountid=9817",
        moreInfo:
            "Global Breaking Newswires&nbsp;is an aggregated full-text news database with timely access to the best newswire (distributed) content available globally. Updated three times per day, it is a continually-growing archive of news content that may not be captured via traditional print sources or online sources.This resource is part of ProQuest's&nbsp;Global Newsstream&nbsp;Collection.",
    },
    {
        name: "Global Issues",
        description:
            "<p>Overviews plus access to extensive international viewpoints on a broad spectrum of current global issues, topics, and events from accurate and timely sources.</p>",
        subjects: [
            "Economics, Geography, Health Services, History, Political Science, Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=GIC&u=byuidaho",
        moreInfo:
            "Search by topic to find summaries and extended information on the most current and important issues facing the world today.Global Issues In Context supports global awareness and provides a global perspective by giving users access to information on business and economics, conflict and diplomacy, society and culture, environment and climate change, etc.&nbsp;Brings together global viewpoints, reference materials, country information, primary source documents, videos, statistics, and more in a single search. Contains rich multimedia: podcasts, video, and interactive graphs. Updated daily.&nbsp;&nbsp;",
    },
    {
        name: "Global Newsstream ",
        description:
            "<p>Access recent &amp; archived content from newspapers, newswires, and news sites from across the world - includes four component databases.</p>",
        subjects: [
            "General, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/globalnews?accountid=9817",
        moreInfo:
            "Global Newsstream enables users to search the most recent global news content, as well as archives stretching back into the 1980s.&nbsp; Features content from newspapers, newswires, and news sites from the US, Canada, Europe, Africa, Asia, Latin America, and Australia. Includes limited audio &amp; video files.Component resources include: Canadian Newsstream; Global Breaking Newswires; International Newsstream; U.S. Newsstream.",
    },
    {
        name: "Global Plants",
        description:
            "<p>A growing collection of nearly three million high-resolution type specimens and related materials from contributors around the world.</p>",
        subjects: ["Applied Plant Science, Biology"],
        contentTypes: ["Images", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://plants.jstor.org/",
        moreInfo:
            "The Global Plants database is a growing collection of nearly three million high-resolution type specimens and related materials from community contributors around the world.The largest of its kind, Global Plants consists of 66 sub-collections, featuring reference works and primary sources, such as collectors\u2019 correspondence and diaries, hand-selected specimens, illustrations, and photographs. Specimens help scientific study as vouchers of nomenclature and historical records of changes in various flora.",
    },
    {
        name: "Global Road Warrior",
        description:
            "<p>Country by country guide designed for those engaged in international trade &amp; business travel. Includes points of interest, climate, internet, etc.</p>",
        subjects: [
            "Business Management, Communications, Geography, Languages and International Studies, Political Science, Sociology and Social Work",
        ],
        contentTypes: ["Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://www.globalroadwarrior.com/?c=DUVHJTs2Za",
        moreInfo:
            "Global Road Warrior is a massive database of constantly updated proprietary editorial and graphics for 175 countries of the world. It provides deep content coverage in major topic areas of society and culture, travel, communications, business, trade, marketing, and security.&nbsp;",
    },
    {
        name: "GospeLink",
        description:
            "<p><i>GospeLink </i>is a reference library of Latter-day Saint resources. &nbsp;</p>",
        subjects: ["General, Religious Education"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.gospelink.com/",
        moreInfo:
            "To use the GospeLink database you MUST Register for free account here.GospeLink was created to connect the church globally for the purpose of gospel ministry. Access provides full-text searching of scriptures, church books, and periodicals across the Deseret Book online library; ChurchofJesusChrist.org; byu.edu (Speeches, FARMS, &amp; Maxwell Institute for Religious Scholarship); Church Educational System (CES); Greek &amp; Hebrew lexicons; and other resources.&nbsp;&nbsp;Available On Campus Only&nbsp;&nbsp;GospeLink is being updated on a limited basis at this time and is expected to be discontinued at \u201csome point\u201d in the future (as of 2023).&nbsp;",
    },
    {
        name: "GreenFILE",
        description:
            "<p>A database covering environmental concerns. It indexes scholarly and general interest titles, as well as government documents and reports.&nbsp;</p>",
        subjects: [
            "Applied Plant Science, Biology, Chemistry, Geography, Political Science",
        ],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=8gh&authtype=sso&custid=s8406107",
        moreInfo:
            "Drawing on the connection between the environment and disciplines such as agriculture, education, law, health and technology, GreenFILE serves as an informative resource offering a unique perspective on the positive and negative ways humans affect the environment.&nbsp;",
    },
    {
        name: "GuideStar by Candid",
        description:
            "<p>GuideStar provides data on every non-profit organization registered with the IRS.</p>",
        subjects: [
            "Business Management, Communications, Finance, Job and Career Resources",
        ],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://www.guidestar.org/AdvancedSearch.aspx",
        moreInfo:
            "GuideStar provides data on every IRS registered non-profit organization. Discover the mission, legitimacy, impact, reputation, finances, programs, transparency, and governance of over 1.8 million non-profit organizations. GuideStar has merged with Foundation Center to provide users with the largest source of information about philanthropy and non-profit organizations.&nbsp;",
    },
    {
        name: "HarpWeek: Civil War Era, Reconstruction, and Gilded Age",
        description:
            "<p>Full-text electronic access to Harper's Weekly newspaper (1857-1912) covering these collections: Civil War Era, Reconstruction, Gilded Age I, II, III &amp; IV.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://app.harpweek.com",
        moreInfo:
            "The 56 years of Harper\u2019s Weekly provide a continuous record of what happened on a weekly basis from 1857 through 1912. The first segment includes the Civil War Era: 1857-1865. The next two cover Reconstruction: 1866-1871 and 1872-1877. The last six encompass the Gilded Age: 1878-1912.",
    },
    {
        name: "Harvard Business Publishing Core Curriculum ",
        description:
            "<p>76 readings that cover<strong> </strong>entrepreneurship, finance, accounting, marketing, operations management, organizational behavior and strategy.&nbsp;</p>",
        subjects: ["Business Management"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hcc&authtype=sso&custid=s8406107",
        moreInfo:
            "Seventy-six readings &nbsp;from the Harvard Core Curriculum. Readings cover entrepreneurship, finance, accounting, marketing, operations management, organizational behavior and strategy. Provided via EBSCOhost.",
    },
    {
        name: "Harvard Business Publishing eBook Collection - Worldwide ",
        description:
            "<p>This collection includes the complete catalog of e-books published by Harvard Business Review Press; providing access to hundreds of e-books.</p>",
        subjects: ["Business Management"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=e076mww&authtype=sso&custid=s8406107",
        moreInfo:
            "This ground-breaking collection includes the complete catalog of e-books published by Harvard Business Review Press. Provides access to more than 600 e-books including 400+ monographs. Includes a variety of newly published and seminal works along with over 150 article compilations including foundational articles from the HBR Classics series.&nbsp;\r\n&nbsp;\r\n&nbsp;",
    },
    {
        name: "Harvard Business School Select Case Study Collection",
        description:
            "<p>2,000+ Harvard Business School case studies providing real-world scenarios and commentary.&nbsp;</p>",
        subjects: ["Business Management"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=t098sww&authtype=sso&custid=s8406107",
        moreInfo:
            "&nbsp;These case studies help students examine issues related to the dynamics of business.",
    },
    {
        name: "Health and Medicine",
        description:
            "<p>Resources on health care topics found in medical journals, periodicals, reference books, pamphlets, and videos (of procedures &amp; live surgeries).</p>",
        subjects: [
            "Health Services, Human Performance and Recreation, Nursing",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=HRCA&u=byuidaho",
        moreInfo:
            "Created especially for students and health care professionals, Health and Medicine&nbsp;is the perfect resource for up-to-date information on the complete range of health care topics. Created from a wide range of periodicals, reference books, pamphlets, and hundreds of videos demonstrating medical procedures and live surgeries,&nbsp;Health and Medicine&nbsp;ensures that researchers get current, scholarly, comprehensive answers to health-related questions. (Formerly Health Reference Center - Academic).",
    },
    {
        name: "Health and Wellness",
        description:
            "<p>Delivers up-to-date reference material plus full-text magazines, journals, and pamphlets from a wide variety of authoritative medical sources.</p>",
        subjects: [
            "Health Services, Human Performance and Recreation, Nursing",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=HWRC&u=byuidaho",
        moreInfo:
            "Perfect for researchers at all levels, this comprehensive consumer health resource provides authoritative information on the full range of health-related issues, from current disease and disorder information to in-depth coverage of alternative medical practices. Includes files of many formats.",
    },
    {
        name: "Health Databases Search (EBSCO)",
        description:
            "<p>Searches CINAHL, Health Source: Nursing/Academic Edition, MEDLINE.</p>",
        subjects: ["nan"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://web-p-ebscohost-com.byui.idm.oclc.org/ehost/search/basic?vid=0&sid=727c3ba3-a1bd-4aad-8a99-9c8d94ed640b%40redis",
        moreInfo: "",
    },
    {
        name: "Health Source : Consumer Edition",
        description:
            "<p>A collection of less-scholarly health information from consumer health magazines, reference books, and current health pamphlets.&nbsp;</p>",
        subjects: ["General, Health Services, Nursing"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hxh&authtype=sso&custid=s8406107",
        moreInfo:
            "A collection of health information from consumer health magazines, reference books, and current health pamphlets. Provides coverage on many general health topics, as well as specific diseases and conditions.&nbsp;Includes access to&nbsp;Covers:&nbsp;addictionagingalcoholismchildbirthchildcarechildren's healthdermatologydietdiabetesdiseasesenvironmental healthexercisefood and cookingfood and drug safetyfood sciencesfitnessgeneral healthgeriatric healthhealthhealth servicesmedical sciencesmedicationmedicinemen\u2019s healthnutritionophthalmologyparentingpregnancypsychologysports medicinevegetarianism/veganismwomen's health\u2026and more",
    },
    {
        name: "Health Source : Nursing & Academic Edition",
        description:
            "<p>A trusted full-text database covering nursing and allied health topics: pediatric, critical care, mental health, nursing management, medical law, etc.</p>",
        subjects: [
            "Health Services, Human Performance and Recreation, Nursing",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hch&authtype=sso&custid=s8406107",
        moreInfo:
            "Health Source: Nursing &amp; Academic Edition is a trusted full-text database covering nursing and allied health topics, including pediatric nursing, critical care, mental health, nursing management, medical law and more.Includes the Lexi-PAL Drug Guide&nbsp;with over 1,300 generic drug patient education sheets, covering over 4,700 brand names.",
    },
    {
        name: "Hispanic American Newspapers, 1808-1980 ",
        description:
            "<p>Hundreds of fully searchable newspapers published in the United States by and for Hispanics.</p>",
        subjects: ["History, Languages and International Studies"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/?db=EANX&d_collections=EANASP",
        moreInfo:
            "Offers unabridged voices, ranging from intellectuals and literary notables to politicians, union organizers, and grassroots figures.",
    },
    {
        name: "Historical Newspapers ",
        description:
            "<p>Search archives of several major US newspapers individually or together, including Chicago Tribune, NYT, and WSJ, plus the Toronto Star (coverage years vary).</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/?accountid=9817&selectids=1008864,1008804,1006744,1006091,1007871,1006744,1006056,1008718,1006360,1007155,1007154",
        moreInfo:
            "Historical newspaper content is among researchers\u2019 most sought-after primary source material.&nbsp;BYU-Idaho's ProQuest Historical Newspapers access includes the archives of:&nbsp;Austin American/Daily/Democratic/Evening Statesman 1880-1980Atlanta Constitution/Daily Constitution 1869-1984&nbsp;[Baltimore] Sun 1837-Boston Globe/Boston Daily Globe 1872-Chicago Tribune/Chicago Daily Tribune 1847-Christian Science Monitor 1908-New York Times/Daily 1851-San Francisco Chronicle/Call/Examiner/Daily Dramatic/Morning 1865-1922Toronto Star/Daily/Evening 1894-Wall Street Journal 1889-From leading issues and events, like the U.S. Civil War, immigration, westward expansion, industrial developments, race relations, and World War I and II; to international, local and regional politics, society, arts, culture, business, and sports, these archives reveal the day-to-day news coverage to researchers and historical explorers, providing invaluable insights and information to users from a wide range of subjects.",
    },
    {
        name: "History Commons ",
        description:
            "<p>Material from historic periodicals and books sharing eyewitness accounts, vivid descriptions of daily life, editorial observations, commerce, and genealogical records.&nbsp;</p>",
        subjects: ["Family History, History, Special Collections"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/",
        moreInfo:
            "Curated by historians and scholars full of material from leading historic periodicals and books sharing eyewitness accounts, vivid descriptions of daily life, editorial observations, commerce (via ads), and genealogical records.&nbsp;Includes the following components:&nbsp;African American Newspapers;&nbsp;America and World War I: American Military Camp Newspapers; American County Histories;&nbsp; American Inventor;&nbsp;Anatomy of Protest in America;&nbsp;The Civil War Collection; Historical Newspapers; Godey\u2019s Lady\u2019s Book; History Commons; History of Woman Suffrage;&nbsp;National Anti-Slavery Standard; Native Americans in History;&nbsp; Reconstruction of Southern States: Pamphlets;&nbsp;Scenes in the Life of Harriet Tubman; Twelve Years A Slave; Women\u2019s Suffrage Collection.&nbsp;History of Accessible Archives&nbsp;",
    },
    {
        name: "History of Science, Technology and Medicine ",
        description:
            "<p><i>History of Science, Technology and Medicine </i>reflects the influences these fields have had on society and culture throughout time.&nbsp;</p>",
        subjects: ["History, Humanities and Philosophy"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=htm&authtype=sso&custid=s8406107",
        moreInfo:
            "Current coverage while addressing events from prehistory to the present, this database includes records of journal articles, conference proceedings, books, dissertations, serials, maps, and other related materials.&nbsp;Integrates four bibliographies: the Isis Current Bibliography of the History of Science, the Current Bibliography in the History of Technology, the Bibliografia Italiana di Storia della Scienza and the Wellcome Library for the History and Understanding of Medicine. Covers 1975-present.Updated monthly.",
    },
    {
        name: "History Vault",
        description:
            "<p>Access millions of primary source materials in five collections; cross-searchable, full-text documents and full images from various archives.&nbsp;</p>",
        subjects: ["History, Political Science, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=home",
        moreInfo:
            "These resources cover the most widely studied issues in 19th- and 20th- century American history and include letters, papers, government documents, photographs, scrapbooks, diaries, ledgers, and more.Collection includes: American Indians and the West; American Politics and Society: Immigration; Civil Rights and the Black Freedom Struggle; International Relations and Military Conflicts;&nbsp; and Southern Life, Slavery, and the Civil War.&nbsp;To browse all the collections.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; To go directly to search.",
    },
    {
        name: "Hospitality and Tourism",
        description:
            "<p>Content about historical and current activities in hospitality and tourism, plus information for the every-day traveler, including Fodor's guides.</p>",
        subjects: ["General, Geography, Human Performance and Recreation"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPTH&u=byuidaho",
        moreInfo:
            "Hospitality and Tourism provides access to scholarly journals, magazines, and trade publications that cover topics including the cultural and economic aspects of travel and tourism. The database offers current and relevant content that provides well-rounded coverage of both the historical and current state of affairs in the hospitality and tourism industries. The curious traveler will also find a wealth of information, from contents on state parks and information on planning a vacation to full-text travel guides from Fodor's.",
    },
    {
        name: "House and Senate Journals, Series 1, 1789-1817",
        description:
            "<p>Journals of the House of Representatives and Senate 1789 to 1817, covering the first 14 Congresses of the United States.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb-newsbank-com.byui.idm.oclc.org/iw-search/we/Digital?p_product=HSJA&p_action=keyword&p_theme=sset2&p_nbid=M69M59VPMTY5NTY2MjgwOC45ODkyNjY6MToxNDoxMzIuMTc0LjI1NS40OQ&p_clear_search=yes&d_refprod=HSJA&",
        moreInfo:
            "Includes the Constitutional Convention, the Bill of Rights, and Constitutional Amendments.&nbsp;Cross-searchable with American State Papers, House and Senate Journal, and the U.S. Congressional Serial Set.",
    },
    {
        name: "Humanities & Social Sciences Index Retrospective: 1907-1984 (H.W. Wilson)",
        description:
            "<p>An index of influential humanities and social science journals published from 1907-1984; includes articles and book reviews.</p>",
        subjects: [
            "English, Humanities and Philosophy, Sociology and Social Work",
        ],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hsr&authtype=sso&custid=s8406107",
        moreInfo: "",
    },
    {
        name: "Humanities Source",
        description:
            "<p>Offers a single resource for accessing full-text humanities content from EBSCO and H.W. Wilson to provide comprehensive and relevant results.&nbsp;</p>",
        subjects: ["Art, English, Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=hus&authtype=sso&custid=s8406107",
        moreInfo:
            "Includes feature articles, interviews, obituaries, bibliographies, original works of fiction, book reviews, and reviews of ballets, dance programs, motion pictures, musicals, operas, plays, and much more.",
    },
    {
        name: "IBISWorld",
        description:
            "<p><i>IBISWorld </i>is a rich source of&nbsp;in-depth and concise business intelligence information - research, reports, statistics, etc.</p>",
        subjects: [
            "Business Management, Communications, Job and Career Resources",
        ],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://my.ibisworld.com",
        moreInfo:
            "Provides industry and company research, reports, and statistics for over 1000 industries: size, segmentation, cost structures, etc.Not all services are part of our subscription (i.e. company benchmarking).",
    },
    {
        name: "Idaho Newspapers",
        description:
            "<p>Current Idaho newspapers - most include at least a ten year archive. Includes news from Boise, Idaho Falls, Moscow, Twin Falls, AP Wire, &amp; more. See Additional Info for complete list.</p>",
        subjects: ["General, History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/apps/news/browse-multi?p=WORLDNEWS&t=country%3AUSA%21USA/state%3AID%21USA%2B-%2BIdaho&f=advanced&action=browse",
        moreInfo:
            "Newspapers include:Associated Press State Wire: Idaho (ID)&nbsp;&nbsp;&nbsp;&nbsp;\r\nBoise Examiner (ID)&nbsp;&nbsp;&nbsp;&nbsp;2008 - 2016&nbsp;&nbsp;&nbsp;&nbsp;\r\nBonner County Daily Bee (Sandpoint, ID)&nbsp;&nbsp;&nbsp;&nbsp;2004 - Current&nbsp;\r\nBonners Ferry Herald (ID)&nbsp;&nbsp;&nbsp;&nbsp;2006 - Current&nbsp;&nbsp;&nbsp;\r\nChallis Messenger (ID)&nbsp;&nbsp;&nbsp;&nbsp;2005 - Current&nbsp;&nbsp;&nbsp;&nbsp;\r\nCoeur d'Alene Press, The (ID)&nbsp;&nbsp;&nbsp;&nbsp;2003 - Current&nbsp;&nbsp;&nbsp;\r\nIdaho Argonaut, The: University of Idaho (Moscow, ID)&nbsp;&nbsp;&nbsp;&nbsp;2013 - Current&nbsp;&nbsp;&nbsp;&nbsp;\r\nIdaho Business Review (Boise, ID)&nbsp;&nbsp;&nbsp;&nbsp;2001 - Current&nbsp;\r\nIdaho Falls Examiner (ID)&nbsp;&nbsp;&nbsp;&nbsp;2009 - 2014&nbsp;&nbsp;\r\nIdaho Press (Nampa, ID)&nbsp;&nbsp;&nbsp;&nbsp;1999 - Current&nbsp;\r\nIdaho Press: Blogs (Nampa, ID)&nbsp;&nbsp;&nbsp;&nbsp;2007 - 2018\r\nIdaho Spokesman-Review (Coeur d'Alene, ID)&nbsp;&nbsp;&nbsp;&nbsp;1994 - 2007&nbsp;\r\nIdaho State Journal (Pocatello, ID)&nbsp;&nbsp;&nbsp;&nbsp;2000 - Current&nbsp;&nbsp;\r\nIdaho State Journal: Blogs (ID)&nbsp;&nbsp;&nbsp;&nbsp;2006 - 2017&nbsp;&nbsp;&nbsp;\r\nIdaho Statesman&nbsp;&nbsp;&nbsp;&nbsp;1864 - 1999&nbsp;&nbsp;\r\nIdaho Statesman, The (Boise, ID)&nbsp;&nbsp;&nbsp;&nbsp;1999 - Current&nbsp;&nbsp;\r\nIdaho Statesman, The: Blogs (Boise, ID)&nbsp;&nbsp;&nbsp;&nbsp;2007 - Current&nbsp;&nbsp;\r\nIndependent Enterprise (Payette, ID)&nbsp;&nbsp;&nbsp;&nbsp;2007 - 2020&nbsp;&nbsp;&nbsp;\r\nISU Bengal, The: Idaho State University (Pocatello, ID) &nbsp; &nbsp;2012 - 2022Source Name\r\nLewiston Tribune (ID)&nbsp;&nbsp;&nbsp;&nbsp;1989 - Current&nbsp;&nbsp;&nbsp;\r\nLewiston Tribune: Blogs (ID)&nbsp;&nbsp;&nbsp;&nbsp;2011 - 2017&nbsp;&nbsp;&nbsp;\r\nMeridian Examiner (ID)&nbsp;&nbsp;&nbsp;&nbsp;2009 - 2016&nbsp;&nbsp;&nbsp;\r\nMorning News, The (Blackfoot, ID)&nbsp;&nbsp;&nbsp;&nbsp;2008 - 2020&nbsp;&nbsp;&nbsp;&nbsp;\r\nMoscow-Pullman Daily News, The (ID)&nbsp;&nbsp;&nbsp;&nbsp;1998 - Current&nbsp;&nbsp;&nbsp;&nbsp;\r\nNBC - 7 KTVB (Boise, ID)&nbsp;&nbsp;&nbsp;&nbsp;2009 - Current&nbsp;&nbsp;\r\nPost Register (Idaho Falls, ID)&nbsp;&nbsp;&nbsp;&nbsp;1992 - Current&nbsp;&nbsp;&nbsp;\r\nPriest River Times (ID)&nbsp;&nbsp;&nbsp;&nbsp;2006 - 2018&nbsp;&nbsp;&nbsp;\r\nScroll: Brigham Young University (Rexburg, ID)&nbsp;&nbsp;&nbsp;&nbsp;2013 - Current&nbsp;&nbsp;&nbsp;\r\nShoshone News-Press (Kellogg, ID)&nbsp;&nbsp;&nbsp;&nbsp;2007 - Current&nbsp;&nbsp;&nbsp;\r\nTimes-News, The (Twin Falls, ID)&nbsp;&nbsp;&nbsp;&nbsp;1999 - Current&nbsp;&nbsp;&nbsp;\r\nTwin Falls Examiner (ID)&nbsp;&nbsp;&nbsp;&nbsp;2009 - 2014&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    },
    {
        name: "Idaho State Death Index",
        description:
            "<p>Created by the state of Idaho; an index of all deaths that occurred in Idaho from 1911-1951 and were filed with the Idaho Bureau of Vital Statistics.&nbsp;</p>",
        subjects: ["Family History, Special Collections"],
        contentTypes: ["Abstract / Citation / Index", "Government"],
        url: "https://byui.idm.oclc.org/login?url=https://archives.byui.edu/family-history/deaths",
        moreInfo:
            "Full name of bureau; \u201cBureau of Health Policy and Vital Statistics in Boise, Idaho.\u201d",
    },
    {
        name: "Idaho Statesman Collection",
        description:
            "<p>Archive of the [Boise,] Idaho Statesman newspaper from its founding in 1864.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/apps/news/browse-multi?p=WORLDNEWS&f=advanced&t=favorite%3AIDAHO%21Idaho%20Statesman%20Collection",
        moreInfo:
            "This archive contains images and text of the Idaho Stateman Newspaper. Established the year after Idaho became a territory (1864), the paper provides a lively glimpse into the Gem State\u2019s people, issues and events that shaped Idaho, from early mining ventures and dam-building to nuclear power and modern agriculture.&nbsp;&nbsp;",
    },
    {
        name: "IEEE Xplore Digital Library",
        description:
            "<p>Access to all IEEE journals, conferences, and standards; representing almost 1/3 of the world's electrical engineering and computer science lit.</p>",
        subjects: [
            "Automotive Engineering / Technology, Computer Information Technology, Computer Science and Electrical Engineering, Mechanical & Civil Engineering",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://ieeexplore.ieee.org",
        moreInfo:
            "IEEE Xplore provides access to journal articles, conference proceedings, technical standards, and related materials on computer science, engineering, electronics, and allied fields. It contains material published mainly by the Institute of Electrical and Electronics Engineers (IEEE) and other partner publishers.",
    },
    {
        name: "Illustrated Civil War Newspapers & Magazines",
        description:
            "<p>Access to important and rare periodicals from Confederate, Union, Abolitionist, and British Presses.&nbsp;</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://staging.lincolnandthecivilwar.com",
        moreInfo:
            "The database contains 65,000 illustrated pages drawn from 49 periodicals and scores of letters and diaries published from 1860 to 1865. The letters and diaries are drawn equally from those sympathetic to the Confederate and Union causes.",
    },
    {
        name: "Illustrated London News Historical Archive, 1842-2003 ",
        description:
            "<p>Search the complete digital edition (over 260,000 full color pages) of the world's first illustrated weekly newspaper.</p>",
        subjects: ["Art, Communications, History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=ILN&u=byuidaho",
        moreInfo:
            "With its debut in 1842, the Illustrated London News became the world's first illustrated weekly newspaper, sparking a revolution in journalism and news reporting. The publication presented a vivid picture of British and world events - including news of war, disasters, royalty, social affairs, the arts and science. This archive includes every issue of the ILN's run, 1842-2003.",
    },
    {
        name: "Image Quest - Discontinued 5/1/25",
        description:
            '<p>For more free &amp; Creative Commons (CC) licensed images see below:</p><p><a href="https://byui.idm.oclc.org/login?url=https://content.byui.edu/items/e877e768-579d-434c-a9ec-1a57d0cda2eb/1/?fuc_cl=98425336-8f1f-43b4-961f-a91d3def0087">List compiled</a> by BYU-I faculty &nbsp;| &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://www.jstor.org/images#artstor-collections">JSTOR Images</a> &nbsp;| &nbsp;</p>',
        subjects: ["Art, General"],
        contentTypes: ["Images"],
        url: "",
        moreInfo:
            "Britannica ImageQuest&nbsp; offers access to images from 62 leading collections such as the Bridgeman Art Gallery, Getty Images, the Science Photo Library, Ingram Publishing, the National Geographic Society, and other trusted image sources.&nbsp;Also incudes a Graphics collection with infographics, signs and symbols, graphic concepts and vector illustrations,All images are rights-cleared for educational, non-commercial use.&nbsp;",
    },
    {
        name: "Images of America: A History of American Life in Images and Texts",
        description:
            "<p>An indexed database of images and text depicting the spirit and life of communities across the United States of America and parts of Canada.&nbsp;</p>",
        subjects: ["Art, History"],
        contentTypes: ["Images", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/lrho",
        moreInfo:
            "Search this indexed database of images and text depicting the spirit and life of communities across the United States of America and parts of Canada. Contains the full text and images (photos, drawings, postcards, and maps) from local histories collected by Arcadia Publishing. Most images are from the 1900s, but a few maps and drawings date to the 1600s.",
    },
    {
        name: "Images of the American Civil War: Photographs, Posters & Ephemera",
        description:
            "<p>An illustrated view of life during the American Civil War and 19th-century America.</p>",
        subjects: ["History"],
        contentTypes: ["Images", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search-alexanderstreet-com.byui.idm.oclc.org/cpho",
        moreInfo:
            "These dramatic images, taken from photos, posters, and ephemera, present a historical account of the American Civil War and a view of nineteenth-century America from social, military, and political perspectives. Gives a view of both the monumental and the mundane. Includes images from fields of battle, the home front, politics, and general society.",
    },
    {
        name: "Indigenous Histories and Cultures in North America",
        description:
            "<p>Explore manuscripts, artwork, and rare printed books dating from early European colonization up to photographs and Indigenous newspapers from the mid-twentieth century.&nbsp;</p>",
        subjects: ["History"],
        contentTypes: ["Images", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.aihc.amdigital.co.uk",
        moreInfo:
            "Browse through a wide range of rare and original documents from treaties, speeches and diaries, to historic maps and travel journals.The wide range of material included in Indigenous Histories and Cultures in North America presents a unique insight into interactions between Indigenous Peoples in North America and European colonists from their earliest contact, continuing through the turbulence of the American Civil War, the on-going repercussions of government legislation, right up to the civil rights movement of the mid- to late-twentieth century. This resource contains material from the Newberry Library\u2019s extensive Edward E. Ayer Collection; one of the strongest archival collections on histories of Indigenous Peoples in North America in the world.",
    },
    {
        name: "Indigenous Newspapers in North America",
        description:
            "<p>Nearly 200 years of Indigenous print journalism from the US and Canada.</p>",
        subjects: ["Geography, History"],
        contentTypes: [
            "Images",
            "Newspapers",
            "Primary Resource",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.indigenousnewspapersinnorthamerica.amdigital.co.uk/",
        moreInfo:
            "Indigenous Newspapers in North America includes dozens of unique titles published throughout the nineteenth, twentieth, and twenty-first centuries - from historic pressings to contemporary periodicals. The newspapers represent a huge variety in publisher, audience, and era, allowing the researcher to discover how events were reported by and for Indigenous communities.Part of the&nbsp;AM Explorer&nbsp; collection.",
    },
    {
        name: "Industry Reports in Business Source Premier",
        description:
            "<p>These profiles identify market size and segmentation, competitive landscape, and provide forecast data of market performance and trends.</p>",
        subjects: ["Business Management, Finance, Marketing"],
        contentTypes: ["Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000123002?isDashboardExpanded=true",
        moreInfo:
            'EBSCO\'s "Industry profiles" represent industry sector analyses across several countries or areas. The reports are a resource of information on key vertical markets. The industry profiles identify market size and segmentation, competitive landscape and provide forecast data of market performance and trends.&nbsp;',
    },
    {
        name: "Information Science",
        description:
            "<p>Periodical content covering all aspects of managing and maintaining information and technology, including usability, cataloging, business, etc.</p>",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPIS&u=byuidaho",
        moreInfo:
            "Updated daily with articles covering all aspects of managing and maintaining information and technology, including computer science, the internet, databases, usability, cataloging, circulation, business information, libraries, personal computers, intellectual property, and more.&nbsp;",
    },
    {
        name: "Informe Acad\u00e9mico",
        description:
            "<p>Search across full-text Spanish- and Portuguese-language scholarly journals and magazines from and about Latin America.</p>",
        subjects: ["General, Languages and International Studies"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=IFME&u=byuidaho",
        moreInfo:
            "Informe Acad\u00e9mico meets the research needs of Spanish-speaking users with a wide range of full-text Spanish- and Portuguese-language scholarly journals and magazines both from and about Latin America. Informe Acad\u00e9mico provides quality reference material--not simply translations of English-language materials--on a powerful, easy-to-use interface configured for Spanish-speaking users, allowing researchers to analyze topics and conduct research in Spanish.",
    },
    {
        name: "International Newsstream",
        description:
            "<p>Access recent news content from outside of the US and Canada, plus decades of archives. Features newspapers, newswires, and news sites.</p>",
        subjects: [
            "General, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www-proquest-com.byui.idm.oclc.org/internationalnews1?accountid=9817",
        moreInfo:
            "ProQuest International Newsstream provides information from more than 660 of the world's top newspapers, including The Times (London), The Bangkok Post, El Norte, Financial Times, The Guardian, Jerusalem Post, South China Morning Post, The Daily Telegraph, Asian Wall Street Journal, and the BBC Monitoring series of publications.This resource is part of ProQuest's&nbsp;Global Newsstream&nbsp;Collection.Includes access to these databases: Asian Newsstream, Australia &amp; New Zealand Newsstream, European Newsstream, Latin American Newsstream, and Middle East &amp; African Newsstream&nbsp;",
    },
    {
        name: "International Relations and Military Conflicts",
        description:
            '<p>Features formerly confidential reports of U.S. diplomats and military officers from 1911-1975 - offers insight into accounts &amp; perspectives. <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&amp;action=International%20Relations%20and%20Military%20Conflicts">Read more</a> | <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&amp;mid=59583#59583">Browse </a>| <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=advanced_ui&amp;module=59583&amp;module=34319&amp;module=77400">Search</a></p>',
        subjects: [
            "History, Languages and International Studies, Political Science, Special Collections",
        ],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&mid=59583#59583",
        moreInfo:
            "Consists of three modules:U.S. Military Intelligence Reports, 1911-1944World War II: U.S. Documents on Planning, Operations, Intelligence, Axis War Crimes, and Refugees&nbsp;Vietnam War and American Foreign Policy, 1960-1975Covers U.S. involvement, actions and decisions, presidential administrations, peace talks, various perspectives from government to media persons, map room files, records of the Joint Chiefs of Staff, operational reports, and much more.&nbsp;",
    },
    {
        name: "Internet Archive: BYU-Idaho Collection",
        description:
            "<p>Search genealogy, family history, Americana, and other materials that have been digitized and indexed by BYU-Idaho, plus from repositories worldwide.</p>",
        subjects: ["General, History, Special Collections"],
        contentTypes: ["eBooks", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.archive.org/search.php?query=rexburg%20AND%20mediatype%3Atexts",
        moreInfo:
            "Moving beyond the BYU Idaho Collection in Internet Archive, users have access to millions of free books, movies, software, music, websites, and more.&nbsp;Search genealogy, family history, Americana and other texts. The primary resources are books, but other media are also available.&nbsp;Internet Archive is run by a non-profit organization.",
    },
    {
        name: "IOPscience",
        description:
            "<p>Full-text access to scientific, technical, and medical content in <i>open access</i> <i>journals </i>published by the Institute of Physics. Covers 1874-present.</p>",
        subjects: ["Mathematics, Physics"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://iopscience.iop.org",
        moreInfo: "",
    },
    {
        name: "IPA Source",
        description:
            "<p>The web\u2019s largest library of International Phonetic Alphabet (IPA) transcriptions &amp; literal translations of aria and art song texts.</p>",
        subjects: ["Music, Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.ipasource.com/",
        moreInfo:
            "IPA Source was developed to benefit singers, teachers, and all those interested in the correct and knowledgeable performance of vocal literature. It is the web's largest library of International Phonetic Alphabet (IPA) transcriptions and literal translations of opera arias and art song texts.&nbsp; The goal of IPA Source is to promote the comprehension and accurate pronunciation of foreign language texts in art song and opera in order that the singer may imbue each syllable with the appropriate emotional content.&nbsp;&nbsp;IPA Source offers texts to works for the solo voice in Latin, Italian, German, French, Spanish, and English.&nbsp;",
    },
    {
        name: "Irish Women Poets of the Romantic Period ",
        description:
            "<p>Poetry, biographies, and essays by and about Irish women poets during the Romantic Period (1768-1842).</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343199312?accountid=9817",
        moreInfo:
            "Irish Women Poets of the Romantic Period includes more than 80 volumes of poetry by approximately 50 Irish women writing between 1768 and 1842. Compiled and edited by Stephen Behrendt of the University of Nebraska, the database also offers numerous biographical and critical essays prepared by leading scholars specifically for the project. This database contains over 10,800 pages.&nbsp;",
    },
    {
        name: "Japanese Immigrants to the United States, 1887-1924",
        description:
            "<p>Part of BYU-Idaho's special collections, this resource provides students with thousands of records on the early Japanese immigrants to the United States.&nbsp;</p>",
        subjects: ["Family History, History"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Primary Resource",
            "Government",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://archives-byui-edu.byui.idm.oclc.org/family-history/japan/jnames",
        moreInfo:
            "Users have access to thousands of records that include: birth and death dates, residences, occupation, children, and information about their spouse. A brief history of the experiences of Japanese immigrants is also included.",
    },
    {
        name: "Jazz Music Library",
        description:
            "<p>The largest and most comprehensive collection of jazz available online - with thousands of jazz artists, ensembles, albums, and genres.</p>",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://jazz.alexanderstreet.com",
        moreInfo: "",
    },
    {
        name: "Jewish Life in America, 1654-1954",
        description:
            "<p>Explore the history of American Jewish communities, the communal &amp; social aspects of Jewish identity &amp; culture, and their influence on American society.</p>",
        subjects: ["History, Religious Education"],
        contentTypes: ["Images", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.jewishlife.amdigital.co.uk",
        moreInfo:
            "Explore the history of Jewish communities in America from their first arrival in New York in 1654 to the integral part that they play today. Based on a rich variety of original manuscript collections from the American Jewish Historical Society in New York, this indispensable resource offers captivating insights into the everyday lives of the American Jewish population over three centuries.&nbsp;Charting the Jewish Diaspora from the earliest settlements through to the mass European influx of the early twentieth century, Jewish Life in America will appeal to researchers of all aspects of this diverse and extensive cultural heritage. The collection is based on a rich variety of original manuscript documents ranging from a peddler\u2019s certificate signed by Benjamin Franklin, to records of organizations such as the Baron de Hirsch fund, which supported Jewish entrepreneurship all across America from 1819 to the 1980s. &nbsp;This resource is part of the AM Explorer collection.",
    },
    {
        name: "Journal & Newspaper Finder",
        description:
            "<p>Use this link to find which periodicals you can access thru McKay library databases; particularly helpful for searchers with only a citation.&nbsp;</p>",
        subjects: ["General"],
        contentTypes: ["Newspapers"],
        url: "https://byui.idm.oclc.org/login?url=https://library.byui.edu/journals/",
        moreInfo: "",
    },
    {
        name: "Journal of Visualized Experiments (JoVE) ",
        description:
            '<p>Peer-reviewed scientific videos to assist in research and education. <a href="https://byui.idm.oclc.org/login?url=https://app.jove.com/research/journal/biology">Biology Journal </a>| <a href="https://byui.idm.oclc.org/login?url=https://app.jove.com/education/science-education/basic-biology/general-laboratory-techniques?ed_subject=biology">Biology Education</a> | <a href="https://byui.idm.oclc.org/login?url=https://app.jove.com/education/science-education/advanced-biology/neuroscience">Neuroscience Ed. </a>| <a href="https://byui.idm.oclc.org/login?url=https://app.jove.com/access">BYU-I JoVE subscribed </a>content list&nbsp;<br>&nbsp;</p>',
        subjects: ["Biology, Health Services, Nursing"],
        contentTypes: ["Video", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www-jove-com.byui.idm.oclc.org/research/biology",
        moreInfo:
            "BYU-I current subscribed content does not include Biology Lab Animal Research nor Lab Safety content.For more about JoVE:JoVE Video Journal is the first, peer-reviewed scientific journal combining high-quality video demonstrations with detailed text protocols.&nbsp;JoVE Science Education is a video library dedicated to teaching scientific fundamentals through easy-to-understand video demonstrations.&nbsp;",
    },
    {
        name: "JSTOR",
        description:
            "<p>A digital library with access millions of academic journals, books, and primary sources in over 50 languages.&nbsp;</p>",
        subjects: [
            "General, Interdisciplinary Studies, Sociology and Social Work",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www.jstor.org/",
        moreInfo: "",
    },
    {
        name: "JSTOR Images | Artstor",
        description:
            "<p>Explore millions of images for research contributed by universities, archives, museums, plus community and private collections.&nbsp;</p>",
        subjects: [
            "Art, Design and Construction Management, History, Interdisciplinary Studies",
        ],
        contentTypes: ["Images"],
        url: "https://byui.idm.oclc.org/login?url=https://www.jstor.org/images#artstor-collections",
        moreInfo:
            "Classified into groupings such as: Architecture, Decorative Arts, Drawing, Film, Garden &amp; Landscape, Graphic Design, Humanities &amp; Social Sciences, Performing Arts, Paintings, Prints, Photographs, Manuscripts, Maps &amp; Charts, Science &amp; Technology, and Sculpture &amp; Installations.Easily create your own account to collect images to study, share, or integrate into presentations.ARTstor is migrating to JSTOR/images. All log-ins will remain the same. ARTstor Image Groups will migrate to JSTOR's Workspace.",
    },
    {
        name: "Kanopy",
        description:
            "<p>Streaming rights for movies. This site for admin only; not public facing.</p>",
        subjects: ["General"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://www.kanopy.com/user/19356",
        moreInfo: "",
    },
    {
        name: "Knovel Science and Engineering ",
        description:
            '<p>Knovel provides access to books, datasets, and reference works for engineering, life sciences, and physical sciences. Apps: <a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.elsevier.knovel&amp;pli=1">Android </a>and <a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/gb/app/knovel-togo/id972213358">iOS</a></p>',
        subjects: [
            "Automotive Engineering / Technology, Computer Information Technology, Computer Science and Electrical Engineering, Design and Construction Management, Mathematics, Mechanical & Civil Engineering",
        ],
        contentTypes: [
            "eBooks",
            "Full-Text Articles",
            "Interactive Learning",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://app.knovel.com/web",
        moreInfo:
            "Knovel provides access to books, datasets, and reference works for engineering (electrical, mechanical, civil, materials, chemical, and biotechnology), chemistry and biochemistry, earth and environmental sciences, and more. Search through books and databases or use the interactive material property search, analytical tools, or equation solver that allow users to manipulate, analyze, and export data.&nbsp;Knovel ToGo Mobile App for Android and Apple allows access to content saved by registered users.",
    },
    {
        name: "Landmark Records and Briefs of the U.S. Courts of Appeals",
        description:
            "<p>Chronicles the first 90 years of US appellate courts, highlighting legal, social, economic, and political issues from 1891 to 1980.</p>",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MMLR?u=byuidaho",
        moreInfo:
            "The Making of Modern Law: Landmark Records and Briefs of the U.S. Courts of Appeals focuses on the first 90 years of the federal appellate court system's history. This collection chronicles the evolution of the appellate courts, providing a deeper understanding of social, economic, political, and historical issues from 1891 until the start of the Reagan era in 1980.&nbsp;Researchers will find information not only on legal issues but social, cultural, and economic matters through legal debate over such issues as the intangible property rights that accumulated around patents, trademarks and copyrights, underscoring America's modern technological and intellectual development; the limits on free speech imposed by anti-sedition legislation; the role Prohibition played in reshaping the judicial views of interstate commerce, law enforcement, tax policy and social mores; the impact legislation had on the changing configuration of labor and worker rights; the powers of government to exclude, deport, intern, and incarcerate documented and undocumented immigrants as well as American citizens of foreign heritage.&nbsp;Economic historians will find cases within the Second Circuit that would reshape America's corporate and political landscape; for legal scholars, there will be found cases from the District of Columbia Circuit that commonly address matters of constitutional and administrative law; for the historian of media and communications, the Ninth Circuit offers any number of cases related to America's entertainment industries. The Making of Modern Law: Landmark Records and Briefs of the U.S. Courts of Appeals is split into two parts: Part I, 1950-1980 and Part II: 1891-1950.",
    },
    {
        name: "Language & Linguistics ",
        description:
            "<p>Search journals, ebooks, and reference materials on Language &amp; Linguistics by topic in the Wiley Online Library. See Additional Info for list of topics.</p>",
        subjects: [
            "Communications, English, Languages and International Studies",
        ],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://onlinelibrary.wiley.com/topic/browse/000075",
        moreInfo:
            "Search these topics:Applied LinguisticsBilingualismChild LanguageComputational LinguisticsDiscourse &amp; Conversation AnalysisEducational LinguisticsEnglish as a Second LanguageEnglish LanguageForeign Languages Special TopicsFrench Grammars &amp; DictionariesGeneral &amp; Introductory LinguisticsGeneral Foreign LanguagesGerman Grammars &amp; DictionariesHistorical LinguisticsHistory of English LanguageIntercultural CommunicationItalian Grammars &amp; DictionariesJapanese Grammars &amp; DictionariesLanguage &amp; LiteratureLanguage TeachingLinguistic AnthropologyLinguistics Special TopicsModern &amp; World EnglishOld &amp; Middle EnglishOther LanguagesPhoneticsPhonologyPragmaticsPsycholinguisticsRussian Grammars &amp; DictionariesSecond Language AcquisitionSemanticsSign LanguageSociolinguisticsSpanish Grammars &amp; DictionariesSpeech ScienceSyntaxTheoretical Linguistics",
    },
    {
        name: "Latin America and the Caribbean - Content now part of Gale's Academic OneFile",
        description:
            '<p>Access to <a href="https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=AONE&amp;u=byuidaho"><strong>Academic OneFile.</strong></a></p><p>&nbsp;</p>',
        subjects: ["nan"],
        contentTypes: ["nan"],
        url: "",
        moreInfo: "",
    },
    {
        name: "Latin American Newsstream",
        description:
            "<p>Search the most recent &amp; archival local, national, and regional news from countries throughout Latin America - content in Spanish and Portuguese.</p>",
        subjects: [
            "Geography, History, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/latinamericanews?accountid=9817",
        moreInfo:
            "Latin American Newsstream enables users to search the most recent local, national, and regional news content with archives featuring newspapers, newswire, and news sites in active full-text format. It includes titles from Brazil, Mexico, Argentina, Costa Rica, Peru, Uruguay, Chile, Colombia, Ecuador, Guatemala, Puerto Rico, and Venezuela.Latin American Newsstream provides newspapers in Spanish and Portuguese.&nbsp;Key newspaper titles include: El Universal (Mexico City), O Globo (Brazil), &nbsp;La Naci\u00f3n (Argentina), and El Mercurio (Chile).&nbsp;",
    },
    {
        name: "Legal Treatises, 1800--1926 (Gale Primary Sources)",
        description:
            "<p>A comprehensive database of Anglo-American legal treatises from 1800-1926, covering various legal topics and sourced from major libraries, enabling extensive legal research.</p>",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MOML?u=byuidaho",
        moreInfo:
            "The Making of Modern Law: Legal Treatises, 1800-1926 is a comprehensive database of full-text Anglo-American legal treatises. The titles that comprise this collection originated as Nineteenth Century and Twentieth Century Legal Treatises, a microfilm collection sourced from the holdings of Harvard Law School Library, Yale University, York University, Columbia University, and 21 other institutions in the United States, Canada, and the United Kingdom.&nbsp;This archive covers nearly every aspect of American and British law and encompasses a broad array of the analytical, theoretical, and practical literature for research in U.S. and British legal history, tracing the evolution of historical and contemporary legal thought in both nations during a period of monumental change. Researchers can browse through casebooks, local practice manuals, form books, works for lay readers, pamphlets, letters, speeches, and other works from the most influential writers and legal thinkers of the time. The database provides researchers with a logical, interdisciplinary approach to the study of modern law and allows a vast segment of the literature of law to be quickly searched by specific keywords or phrases, full text, author, title, date, subject, source library, and more.The Making of Modern Law: Legal Treatises, 1800-1926 is based on both bibliographic sources and advisor/selector recommendations, with titles in the collection that address such topics as administration of justice and administrative law; agriculture; bankruptcy; biography; business and commercial law; communications, regulated utilities and trades and crafts; constitutional law; contracts; copyright and intellectual law; family law; international law; jurisprudence; labor and social welfare; legal education, history, and profession; legislature, politics, and government; local government, civil service, and judicial assistance; maritime law; medical jurisprudence; military justice; national defense; natural resources; probate or notoriat, obligations, practice and private law; procedural law; public law, education, health, and use planning; public property; real property; reference works and bibliographies; religion; taxation and public finance; torts; transportation; trials; trust and estate.",
    },
    {
        name: "LegalTrac",
        description:
            "<p>Index of hundreds of law reviews, some link to full-text articles. Covers federal &amp; state law, legal practice, and some international law.</p>",
        subjects: ["Political Science"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Newspapers",
            "Government",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=LT&u=byuidaho",
        moreInfo:
            "LegalTrac provides indexing for more than 1,200 major law reviews, legal newspapers, specialty publications, Bar Association journals, and international legal journals, including more than 200 titles in full text. The American Association of Law Libraries not only endorses LegalTrac, its special advisory committee selects, reviews, and enhances the content of this resource. The database offers coverage of federal and state cases, laws and regulations, legal practice and taxation, as well as British Commonwealth, European Union, and international law.",
    },
    {
        name: "Legislative Insight",
        description:
            "<p>Compilations of full-text Congressional publications that follow the process leading to the enactment of specific US Public laws.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Statistics", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/legislativeinsight",
        moreInfo:
            "The Legislative Insight&nbsp;Collection&nbsp;is a Federal legislative history service that makes available thoroughly researched compilations of digital full-text publications created by Congress during the process leading up to the enactment of U.S. Public Laws. Search the Legislative Process; Citations; Historical Context; and Legislative Histories.The following document types may be included in a legislative history:&nbsp; bills, reports, documents, hearings CRS reports, committee prints, Congressional Record sections, Presidential Signing Statements, and Statutes.It includes only documents related to the passage of a law, so hearings, reports, bills, etc., that are not part of a legislative history are not included in the database.",
    },
    {
        name: "Libby ",
        description:
            '<p>Popular eBooks and audiobooks from various publishers; covering a variety of interests and ages. I-number is BYU-I \u201clibrary card.\u201d</p><p>App: <a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.overdrive.mobile.android.libby">Android&nbsp;</a> &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://itunes.apple.com/us/app/libby-by-overdrive-labs/id1076402606?pt=211483&amp;ct=meetLibby&amp;mt=8"> iOS&nbsp;</a></p><p>&nbsp;</p>',
        subjects: ["General"],
        contentTypes: ["eBooks"],
        url: "https://byui.idm.oclc.org/login?url=https://libbyapp.com/library/byu",
        moreInfo:
            "Please note: Only titles that are compatible with your device will be shown.Available as: &nbsp; &nbsp;Android app&nbsp; &nbsp; &nbsp; &nbsp; iOS app &nbsp; &nbsp; &nbsp;&nbsp;Adobe Digital Editions",
    },
    {
        name: "Liberty Magazine Historical Archive, 1924-1950",
        description:
            "<p>Offers a view of early 20th century American life through a delightful range of art, stories, articles, and advertisements.</p>",
        subjects: ["Art, Dance, English, History, Music, Theatre"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/LBRT?u=byuidaho",
        moreInfo:
            "The Liberty Magazine Historical Archive, 1924-1950 provides users engaged in research of the twentieth century a delightful range of art, stories, articles, and advertisements offering valuable insight into life in the United States during the Depression era and World War II.&nbsp;The magazine flourished during a time of immense creativity and growing interest in world affairs, when illustrated magazines were the leading form of mass entertainment. The magazine charted the moods, attitudes, lifestyles, fads, and fortunes of middle America through three of its most significant decades.The archive features adventure stories; short-short stories (approximately 1,000 words); serial stories; mystery, suspense, and spy stories; human interest stories; Westerns; biographies and autobiographies; love stories; stories from World War I and World War II; humor stories; articles; and art.",
    },
    {
        name: "LinkedIn Learning",
        description:
            "<p>An online educational platform to discover and develop business, technology, and creative skills through expert course videos. Use BYU-I email as log-in.</p>",
        subjects: [
            "Art, Business Management, Computer Information Technology, Computer Science and Electrical Engineering, General, Interdisciplinary Studies, Job and Career Resources",
        ],
        contentTypes: ["Video", "Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://www.linkedin.com/learning/",
        moreInfo:
            "With more than 15,000 courses and personalized recommendations, you can discover, complete, and track courses related to their field and interests. You can also choose to add these courses and related skills to your LinkedIn profile once you've completed them. Includes classes in Business, Technology, and Creativity (such Career &amp; Personal development, Data Analysis, and Construction Management) and popular software (such as MS Word, Excel, Fusion 360, and Blender).Provided by the&nbsp;The BYU Center for Teaching and Learning&nbsp;for all CES users. Log in using your BYU-Idaho email address; you with then need to authenticate with your Net ID and password.",
    },
    {
        name: "Listening",
        description:
            "<p>Streaming audio of classical, popular, opera, jazz and world music. Also includes, liner notes, biographies, and images.</p>",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://search-alexanderstreet-com.byui.idm.oclc.org/musp",
        moreInfo:
            "Allows students and researchers alike to analyze unique and valuable content from over 500 producers and distributors around the world.Search by keyword, title, creator, performer, subject, location, contributor, publisher, theme, date, and more.",
    },
    {
        name: "Literary Encyclopedia",
        description:
            "<p>A scholarly, dynamic resource on literary and cultural history with expert-authored articles and teaching tools.</p>",
        subjects: ["English, Languages and International Studies"],
        contentTypes: ["Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.litencyc.com/",
        moreInfo:
            "The Literary Encyclopedia is a constantly evolving and updating repository of authoritative reference work about literary and cultural history. &nbsp;All articles are written by specialist scholars from around the world on an invitation-only basis, then approved by subject editors. This gives LE a uniquely selective, reliable, and authoritative voice.In addition to rapid publication and updates, the online format allows for integrated digital resources (author life-chronologies, customizable timelines, thematic or course-oriented bookshelves, related article clusters, critical bibliographies) to assist both teachers and learners.&nbsp;",
    },
    {
        name: "Literary Index ",
        description:
            "<p>Search this digital master index to find coverage of authors and works in products published by Gale.</p>",
        subjects: ["English"],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/LITN?u=byuidaho",
        moreInfo: "",
    },
    {
        name: "Literary Manuscripts (Berg Collection)",
        description:
            "<p>Poems, working notebooks, manuscripts, and drawings from Victorian authors, allowing searchers to trace the inspiration &amp; genesis behind their works.</p>",
        subjects: ["English, History, Languages and International Studies"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://www.literarymanuscriptsberg.amdigital.co.uk/",
        moreInfo:
            "Explore Victorian Manuscripts from the Henry W. and Albert A. Berg Collection of The New York Public Library. This collection includes a broad range of authors from across the nineteenth century featuring their manuscripts, notebooks, letters, and diaries.&nbsp; Trace the genesis of some of the period's greatest literary masterpieces through the unique manuscripts of their authors.&nbsp;These manuscripts and such are supplemented by rare printed materials, including early editions annotated by the authors. Each author collection is included in its entirety, allowing users to browse and search the manuscripts as they would in the Berg Reading Room.&nbsp;Featured artists are: Matthew Arnold,&nbsp;The Bront\u00ebs, Elizabeth Barrett Browning, Robert Browning, Wilkie Collins, Charles Dickens, Thomas Hardy, Henry James, Dante Gabriel Rossetti, John Ruskin, Alfred Tennyson, and William Makepeace Thackeray.&nbsp;This resource is part of the&nbsp;AM Digital&nbsp;collection.",
    },
    {
        name: "Literary Manuscripts (Leeds Collection)",
        description:
            "<p>Complete facsimile images of 190 manuscripts of 17th and 18th century verse held in the celebrated Brotherton Collection at the University of Leeds.</p>",
        subjects: ["English, History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.literarymanuscriptsleeds.amdigital.co.uk/",
        moreInfo:
            "Examine complete images of 190 manuscripts of seventeenth and eighteenth-century verse held in the celebrated Brotherton Collection at the University of Leeds. These manuscripts can be read and explored in conjunction with the Brotherton Collection Manuscript Verse Index, which includes first lines, last lines, attribution, author, title, date, length, verse form, content and bibliographic references for over 6,600 poems within the collection.Alongside original compositions are copied verses, translations, songs and riddles. The whole collection is situated within an assortment of manuscripts, some entirely dedicated to poetry, while others contain medicinal recipes, household accounts, draft letters, musical scores and plays. There are also several printed works, with handwritten verse additions.Part of the AM Explorer Collection",
    },
    {
        name: "Literature",
        description:
            "<p>Search across Gale's literary databases for literary works, journal articles, criticisms, analyses, reviews, biographies, overviews, and more.</p>",
        subjects: ["Biographies, English"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=GLS&u=byuidaho",
        moreInfo:
            "Gale Literary Sources integrates full-text literary content with metadata and subject indexing and provides workflow tools to analyze information. You can research authors and their works, literary movements and genres. Search across your library's Literature databases to find full text of literary works, journal articles, literature criticism, reviews, biographical information and overviews.",
    },
    {
        name: "Literature Criticism",
        description:
            "<p>One-stop search for literary reviews from centuries ago to today.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=LCO&u=byuidaho",
        moreInfo:
            "The largest, most extensive compilation of literary commentary available, representing a range of modern and historical views on authors and their works across regions, eras, and genres. Peruse scholarly and popular commentary from broadsheets, pamphlets, encyclopedias, books, and periodicals.&nbsp;",
    },
    {
        name: "Literature Online (LION)",
        description:
            "<p>Tens of thousands works of English and American poetry, drama and prose, plus biographies, bibliographies, criticisms, and reference resources.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/lion",
        moreInfo:
            "Literature Online (LION)&nbsp;is a fully integrated service that combines the texts of over 355,000 literary works with a vast library of key criticism and reference resources.&nbsp;Literature Online\u2019s collection of accurate poetry, prose and drama is relied upon by researchers around the world on a daily basis and the essential criticism and reference resources, including an ever-growing library of full-text journals and author biographies, helps keep you up to date on the latest research into every aspect of literary and linguistic study.&nbsp;",
    },
    {
        name: "Literature Resource Center",
        description:
            "<p>Biographies, bibliographies, and critical analyses of &gt;120,000 authors from every age and literary discipline.</p>",
        subjects: ["Biographies, English"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=LitRC&u=byuidaho",
        moreInfo:
            "Literature Resource Center offers current, comprehensive, and reliable online information about a broad range of authors and their works, plus full-text critical and literary analysis. The database provides researchers with vast evidence to support their literary responses and theses statements through a diversity of scholars and critics that ensure all views and perspectives are represented.",
    },
    {
        name: "Literature, Culture and Society in Depression Era America: Archives of the Federal Writers Project",
        description:
            "<p>This collection presents the Federal Writers\u2019 Project (FWP) publications of all 47 states involved in the project, which ran from 1933 to 1943.</p>",
        subjects: ["English, History, Political Science"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/3TQA/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            'The Federal Writers Project (FWP) was the most controversial and contentious program of the Work Projects Administration (WPA), an integral part of Franklin D. Roosevelts "New Deal." This bold, imaginative and wide-ranging enterprise is the key to understanding literature, culture and society in America during the Depression era. Date Range: 1933-1943.&nbsp;This collection presents the Federal Writers\' Project (FWP) publications of all 47 states involved in the project, which ran from 1933 to 1943. Forming the most complete collection of publications from all participating states, this archive contains thousands of images, many from typed or mimeographed originals that received only limited circulation.&nbsp;This resource is part of the&nbsp;Archives Unbound&nbsp;collection from Gale.',
    },
    {
        name: "LitFinder ",
        description:
            "<p>Provides access to a wealth of literary works and secondary-source materials covering world literature and authors throughout history.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=LITF&u=byuidaho",
        moreInfo:
            "Includes access to numerous full-text poems, poetry citations, short stories, speeches, and plays.Secondary-source materials include biographies, work summaries, photographs, and glossaries.&nbsp;The easy-to-use search paths allow users to easily target the information they are looking for or to browse the database through various refine search and results limiter options.",
    },
    {
        name: "London Low Life",
        description:
            "<p>A resource containing full color images of rare books, ephemera, maps, and other materials relating to 18th, 19th and early 20th century London.</p>",
        subjects: ["History"],
        contentTypes: ["Maps", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.londonlowlife.amdigital.co.uk/",
        moreInfo:
            "Designed for teaching and study, this resource helps students and scholars from a wide range of disciplines, such as literature, cultural studies, urban studies, social history, and the study of leisure and tourism.This resource is part of the&nbsp;AM Digital collection.",
    },
    {
        name: "Magill on Literature Plus",
        description:
            "<p>Biographical essays on the most studied authors, up-to-date lists of each author's principal works, and essays on genres, themes, &amp; settings.&nbsp;</p>",
        subjects: ["Biographies, English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=mjh&authtype=sso&custid=s8406107",
        moreInfo:
            "MagillOnLiterature Plus contains biographical essays that reflect extended coverage of the 2,500 most studied authors and include up-to-date lists of each author's principal works and current secondary bibliographies.&nbsp; In all, more than 8,500 writers of fiction, poetry, drama, and essays are featured.&nbsp; There are more than 400 comprehensive essays on specific literary genres, themes and settings round out the collection.&nbsp; A cross-referenced glossary of terms is also included to provide definitive explanations of more than 1,800 literary words and phrases.",
    },
    {
        name: "Making of Modern Law",
        description:
            "<p>Find Foreign and American legal history resources - consists of 8 collections. See additional info.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://gdc.galegroup.com/gdc/artemis?fromProdId=MMLP&p=MMLP&u=byuidaho",
        moreInfo:
            "A goldmine of information for researchers of American legal history -- a fully searchable digital archive of the published records of the American colonies, documents published by state constitutional conventions, state codes, city charters, law dictionaries, digests, and more. The collection brings together in one place many of the important documents that have been lost, destroyed, or previously inaccessible to researchers of American legal history around the world.The BYU-Idaho collection includes:Foreign Primary Sources, 1600-1970Foreign, Comparative, and International Law, 1600-1926American Civil Liberties Union PapersLandmark Records and Briefs of the U.S. Courts of AppealsU.S. Supreme Courts Records and Briefs, 1832-1978Legal Treatises, 1800-1926Trials, 1600-1926 (Anglo-American)Primary Sources (state &amp; municipal codes, documents relating to constitutional conventions, and other American legal history resources)",
    },
    {
        name: "Making of Modern Law: Primary Sources",
        description:
            "<p>Documents published by state constitutional conventions, state codes, city charters, law dictionaries, digests, and more.&nbsp;</p>",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MMLP?u=byuidaho",
        moreInfo:
            "A fully searchable digital archive of the published records of the American colonies, documents published by state constitutional conventions, state codes, city charters, law dictionaries, digests, and more.&nbsp;The archive brings together many of the important documents that previously lost, destroyed, or previously inaccessible to researchers of American legal history around the world.&nbsp;The Making of Modern Law: Primary Sources is split into two parts: Part I, 1620-1926 and Part II, 1763-1970.",
    },
    {
        name: "Making of the Modern World",
        description:
            "<p>A series covering the history of Western trade, the modern labor movement, the evolution of the working class, economic theories, and much more.</p>",
        subjects: ["Business Management, History"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://gdc.galegroup.com/gdc/artemis?p=MOME&fromProdId=MOME&u=byuidaho",
        moreInfo:
            "This resource is extraordinary for research into the history of the dynamics of Western trade, including the Industrial Revolution in Great Britain, encompassing the coal, iron, and steel industries, the railway industry, the cotton industry, banking and finance, and the emergence of the modern corporation. It is also strong in the rise of the modern labor movement, the evolving status of slavery, the condition and making of the working class, colonization, the Atlantic world, Latin American/Caribbean studies, social history, gender, and the economic theories that championed and challenged capitalism in the nineteenth century.&nbsp;For a more in-depth look at what this resource offers, see here.",
    },
    {
        name: "Mango Languages",
        description:
            '<p>Learn a language online! Lessons in over 70 world languages; self paced with adaptive technology. App: &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.mango.android">Android &nbsp;</a>&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/mango-languages-learning/id443516516"> iOS&nbsp;</a></p>',
        subjects: ["Languages and International Studies"],
        contentTypes: ["Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://connect.mangolanguages.com/byui/login",
        moreInfo:
            "Mango combines quality content, intelligent technology, and an adaptive algorithm that delivers practical phrases from real situations. Courses are crafted using conversational methodology in a self-paced format that introduce the learner to cultural insights and grammatical nuances specific to their language of choice. Include lessons for English speakers of other languages and lessons for teaching English to speakers of other languages.Android app&nbsp; &nbsp; iOS appLanguages &amp; dialects offered include:&nbsp;Arabic (Egyptian, Iraqi, Levantine, Modern Standard)ArmenianAzerbaijaniBengaliChaldean AramaicCherokeeChinese (Cantonese &amp; Mandarin)CroatianCzechDanishDariDutchDzongkhaEnglish (for non-native speakers &amp; Shakespearean)Filipino (Tagalog)Farsi (Persian)FinnishFrenchGermanGreek (Ancient, Kione, &amp; Modern)Haitian CreoleHawaiianHebrewBiblical HebrewHindiHungarianIcelandicIgboIndonesianIrishItalianJapaneseKoreanLatinMalayNorwegianPashtoPiratePolishPortuguese (Brazil)PotawatomiRomanianRussianScottish GaelicSlovakSpanish (Castilian &amp; Latin American)SwahiliSwedishTamilThaiTurkishUkrainianUrduUzbekVietnameseYiddish\u2026and more!",
    },
    {
        name: "Manuscript Women's Letters and Diaries",
        description:
            "<p>Brings together personal writings from women in the 18th, 19th, and 20th centuries. Indexed and displayed as images of the originals.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/mwld",
        moreInfo:
            "The collection is drawn entirely from the extensive holdings of the American Antiquarian Society.&nbsp;&nbsp;",
    },
    {
        name: "Map as History",
        description:
            "<p>A collection of more than 230 animated historical maps for demonstrating the development of world history events over time.</p>",
        subjects: [
            "Foundations & GE (General Education), Geography, History, Humanities and Philosophy, Political Science",
        ],
        contentTypes: ["Maps"],
        url: "https://byui.idm.oclc.org/login?url=https://www.the-map-as-history.com/connect-ip-byu",
        moreInfo:
            "Also features timelines that further clarify and contextualize historical progress.&nbsp;Learn about Prehistory, The Bible and History, Ancient Greece, History of Jerusalem, Rome and its Empire, History of Christianity, Middle Ages, Origins of Islam and the Arabo-Muslim Empire, Crusades, The Age of Discovery, The Portuguese and Spanish Empires, European Colonies in North America, United States, Europe, Decolonization, The World Wars and the Cold War, History of India, The Middle East.",
    },
    {
        name: "Market Research & American Business, 1935-1965",
        description:
            "<p>This collection provides insight into the American consumer boom of the mid-20th century.&nbsp;</p>",
        subjects: ["Business Management, Communications, Economics, History"],
        contentTypes: ["Primary Resource", "Statistics", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.marketresearch.amdigital.co.uk",
        moreInfo:
            "Also known as&nbsp;American Consumer Culture,&nbsp;this collection provides insight into the American consumer boom of the mid-20th century. Includes the complete market reports of Ernest Dichter, an interactive chronology, essays, advertising images, case studies, business biographies, and more. Searchable by name, document, industry, etc.Part of the AM Explorer collection",
    },
    {
        name: "Market Research Reports / Publications in Business Source Premier",
        description:
            "<p><i>Market Research Reports </i>offer detailed analyses about a specific market situations by subject.&nbsp;</p>",
        subjects: ["Business Management, Economics, Finance, Marketing"],
        contentTypes: ["Reports / Data"],
        url: "http://search.ebscohost.com/login.aspx?direct=true&setup=0&db=buh&authdb=buhjnh&browse_option=MR&site=bsi-live",
        moreInfo:
            "The reports contain information on market shifts due to social, technological and economic changes. Explains market opportunities and how to harvest them by focusing on organizational alignment, business processes, and capital structures.For off-campus access, go through Business Source Premier.",
    },
    {
        name: "Mediae Latinitatis Lexicon Niermeyer",
        description:
            "<p>Dictionary of Medieval Latin with English, French, and German translations.</p><p>&nbsp;</p>",
        subjects: [
            "English, History, Humanities and Philosophy, Languages and International Studies",
        ],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://dictionaries.brillonline.com/niermeyer",
        moreInfo:
            "J. F. Niermeyer's Mediae Latinitatis Lexicon Minus is a highly practical lexicon, providing researchers, teaching staff and students in the field of Medieval History with concise, essential information. This new online edition, still the \u201ccompendious lexicon for rapid information\u201d envisaged by Niermeyer, recreates the second print edition (2002) on Brill\u2019s Dictionary Platform , providing French, English and German translations for every entry of a Medieval Latin concept and searches on lemma and full text: searches can be refined by century of use.",
    },
    {
        name: "Medici.tv",
        description:
            '<p>Hundreds of live and archived concerts, operas, ballets, documentaries, artist portraits, educational programs, and master classes.&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/fr/app/medici-tv-edu/id1200334923"><strong> &nbsp;iOS &nbsp;</strong></a><strong>| &nbsp;</strong><a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.appmedici.tv&amp;hl=en_US&amp;pli=1"><strong>Android</strong></a></p>',
        subjects: ["Dance, Humanities and Philosophy, Music, Theatre"],
        contentTypes: ["Video", "Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://edu.medici.tv",
        moreInfo:
            "Created in partnership with some of the world's &nbsp;most prestigious venues, opera houses, festivals and competitions, Medici.tv offers over 100 new live events each year plus thousands of archived historical concerts, operas, ballets, documentaries, artist portraits, educational programs, and master classes. &nbsp;Titles are available for streaming VOD with unlimited access to the films for as long and as often as you choose; both English and French.",
    },
    {
        name: "Medieval Family Life",
        description:
            "<p>Search full-color images of medieval manuscripts of family letter collections and their transcripts (viewable side-by side).</p>",
        subjects: ["History, Humanities and Philosophy"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.medievalfamilylife.amdigital.co.uk/",
        moreInfo:
            "A plethora of topics are covered in these collections, including trade, warfare, arranging advantageous marriages, arguments between parents and children, matters of inheritance, births and deaths, estate management, legal disputes, domestic finances, women and their role in the family and everyday social and domestic life.Along with the letter collections themselves there are many additional features useful for teaching and research. These include a chronology, a visual sources gallery, an interactive map, a glossary, and family trees for four of the featured families.This resource is part of the&nbsp;AM Explorer collection.",
    },
    {
        name: "Medieval Travel Writing",
        description:
            "<p>Manuscripts of some of the most important works of European travel writing from the later medieval period.</p>",
        subjects: ["Geography, History, Humanities and Philosophy"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.medievaltravel.amdigital.co.uk/",
        moreInfo:
            "The chief focus is on journeys to central Asia and the Far East, including accounts of travel to Mongolia, Persia, India, China and South-East Asia. The collection also includes a number of important accounts of travels to or through the Holy Land, although in this it makes no claims to full or even broad coverage. It is an indispensable source for scholars of medieval travel, geography, exploration trade, literature, and the new field of medieval postcolonial studies.&nbsp;This resource is part of the&nbsp;AM Explorer&nbsp;collection.",
    },
    {
        name: "MEDLINE",
        description:
            "<p>Bibliographic database with citations and abstracts for biomedical &amp; health journals; some link to full text.&nbsp;</p>",
        subjects: ["Health Services, Nursing"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=cmedm&authtype=sso&custid=s8406107",
        moreInfo:
            "MEDLINE, created by the United States National Library of Medicine, and provides authoritative medical information on medicine, nursing, dentistry, veterinary medicine, the health care system, pre-clinical sciences, and much more. Used by health care professionals, nurses, clinicians and researchers.",
    },
    {
        name: "Mergent Intellect",
        description:
            "<p>Provides access to private and public US and international business data, industry news, facts and figures, executive contact information, &amp; more.</p>",
        subjects: ["Business Management, Marketing"],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://www.mergentintellect.com/",
        moreInfo:
            "Mergent Intellect is a highly flexible web-based application that features a deep collection of worldwide business information that enables companies to generate insightful business intelligence. Coupling Mergent's expertise in developing products for the reference marketplace with D and B's private company database, Mergent Intellect provides access to private and public US and international business data, industry news, facts and figures, executive contact information, the ability to access industry profiles and much more. With advanced data collection service, cloud-based applications, desktop analytics and print products, Mergent and its subsidiaries provides solutions from top down economic and demographic information to detailed equity and debt fundamental analysis.",
    },
    {
        name: "Mergent Online (being discontinued in 2024; use Mergent Intellect)",
        description:
            '<p>Detail on US and International public companies: business description, history, property, subsidiaries, officers, long-term debt and capital stock.&nbsp;</p><p>Go to <a href="https://byui.idm.oclc.org/login?url=https://www.mergentintellect.com/">Mergent Intellect </a>for new interface.</p>',
        subjects: ["Business Management, Marketing"],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://www.mergentonline.com/",
        moreInfo:
            "This product is being sunsetted (discontinued) by the vendor. BYU chose to replace with the Mergent Intellect platform.",
    },
    {
        name: "Met Opera on Demand",
        description:
            "<p>Enjoy hundreds of recordings of Met Opera performances: live HD productions, archived classics, and telecasts. New content added regularly.</p>",
        subjects: ["Dance, Humanities and Philosophy, Music, Theatre"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://ondemand.metopera.org/",
        moreInfo:
            "The Metropolitan Opera is a vibrant home for the most creative and talented singers, conductors, composers, musicians, stage directors, designers, visual artists, choreographers, and dancers from around the world.&nbsp;",
    },
    {
        name: "Middle East Online: Arab-Israeli Relations, 1917-1970 ",
        description:
            "<p>Wide source of materials on Arab-Israeli relations from the Balfour Declaration through the Black September war of 1970-71.</p>",
        subjects: [
            "History, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/6ACM/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "Fully searchable database of documents held by the British National Archives. The original source material chronicles the politics, wars, administration, and diplomacy surrounding the Palestine Mandate and the Arab-Israeli conflict. Topics covered include the background to the establishment of the State of Israel, Black September, the Border wars of the 1950s, the British capture of Jerusalem, the Cold War in the Middle East, the formation of the United Arab Republic, Jewish terror groups, and milestones in the Palestine-Zionist tension and their impact on British policy leading to the Partition of 1948. This resource is part of the&nbsp;Archives Unbound&nbsp;collection from Gale.",
    },
    {
        name: "Middle East Online: Iraq, 1914-1974",
        description:
            "<p>First-hand documents dating from the dismantling of the Ottoman Empire, the creation of the Iraq, through the rise of Saddam Hussein in 1974.</p>",
        subjects: [
            "History, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/6ACN/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "An essential contemporary resource for the understanding of modern Iraq, this online archive of primary source documents delivers first-hand government records covering the period from the dismantling of the Ottoman Empire, the creation of the new state, up to the rise of Saddam Hussein in 1974. Major strategic issues and policy-making statements are set out in their full context, revealing the internal workings of the Mandate administration, international relations and treaties, the importance of oil, and all matters of local and regional importance. Included is coverage of a wide variety of historic Iraq events beginning in 1917 with the capture of Baghdad, through the rise of Saddam Hussein in 1974.This resource is part of the&nbsp;Archives Unbound&nbsp;collection from Gale.",
    },
    {
        name: "Middle Search Plus",
        description:
            "<p>Designed for middle school students and their teachers; access popular magazines, biographies, essays, images, maps, and more. Includes Lexile level.</p>",
        subjects: ["Teacher Education"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=mih,e866sww&authtype=sso&custid=s8406107",
        moreInfo:
            "Full text for more than 140 popular, middle school magazines. All full text articles included in the database are assigned a reading level indicator (Lexiles). Full text is also available for thousands of biographies and historical essays. Middle Search Plus also contains 84,774 biographies, 105,786 primary source documents, and an Image Collection of over 453,000 photos, maps and flags.",
    },
    {
        name: "Migration to New Worlds ",
        description:
            "<p>Charts the emigration experience of millions across 200 years of turbulent history from the \u201ccentury of immigration\u201d to the modern era.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.migration.amdigital.co.uk/",
        moreInfo:
            "From the century of immigration, through to the modern era, Migration to New Worlds charts the emigration experience of millions across 200 years of turbulent history. Explore the rise and fall of the New Zealand Company, discover British, European and Asian migration and investigate unique primary source personal accounts, shipping logs, printed literature and organizational papers supplemented by carefully compiled teaching and research aids.Part of the AM Explorer collection.",
    },
    {
        name: "Military & Government Collection",
        description:
            "<p>Provides current news pertaining to all branches of the military. Taken from related journals and periodicals.</p>",
        subjects: [
            "History, Human Performance and Recreation, Political Science",
        ],
        contentTypes: ["Government", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=mth&authtype=sso&custid=s8406107",
        moreInfo:
            "Some publications covered in this database are Air Force Controller, Army Reserve Magazine, Defense Studies, Global Security Review, Joint Force Quarterly, Military Technology, National Review, Defense, Combat Edge, FBI Law Enforcement Bulletin, Foreign Affairs, Military Technology, and Naval Forces. The database also includes the full text for 245 pamphlets and for the country reports from CountryWatch.Dates of full text coverage vary.&nbsp;",
    },
    {
        name: "Military and Intelligence",
        description:
            "<p>Search scholarly journals, magazines, and reports covering all aspects of past and present military affairs. Updated daily.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Government", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPMI&u=byuidaho",
        moreInfo:
            "This resource contains hand-selected content supporting key subject areas such as: governmental policies, the socioeconomic effects of war, the structure of the armed forces, and more.",
    },
    {
        name: "Mintel Market Research Reports",
        description:
            "<p>Compare international market developments and learn consumer attitudes &amp; behaviors, to better to shape informed ideas and opinions.</p><p><strong>Each user must create an individual account.</strong></p>",
        subjects: ["Business Management, Marketing"],
        contentTypes: ["Statistics", "Full-Text Articles", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://clients.mintel.com",
        moreInfo:
            "Mintel Market Research Reports allows users to monitor and compare international market developments across multiple sectors, understand consumer attitudes and behavior as well as implications for business, cite market data in research papers and business plans, and shape informed opinions and ideas to support research and coursework.&nbsp;",
    },
    {
        name: "MLA Directory of Periodicals",
        description:
            "<p>Information on periodicals &amp; books series that cover literature, folklore, dramatic arts, language, linguistics, pedagogy, rhetoric, publishing, etc.</p>",
        subjects: ["English"],
        contentTypes: ["Abstract / Citation / Index", "Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=kah&authtype=sso&custid=s8406107",
        moreInfo:
            "The MLA Directory of Periodicals provides detailed information on thousands of journals and book series that cover literature, literary theory, dramatic arts, folklore, language, linguistics, pedagogy, rhetoric and composition, and the history of printing and publishing.&nbsp;Articles published in works listed in the directory are indexed in the MLA International Bibliography.The directory is a valuable resource for scholars seeking outlets to publish their work as well as for librarians working to identify periodical publications that best meet their institutions\u2019 needs.&nbsp;",
    },
    {
        name: "MLA International Bibliography",
        description:
            '<p>This bibliography directs users to citations from journal articles, books, book chapters, dissertations, scholarly websites, editions, &amp; translations. <a style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(103, 119, 239);font-family:Nunito, &quot;Segoe UI&quot;, arial;font-size:14px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:500;letter-spacing:normal;orphans:2;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;transition:all 0.5s ease 0s;white-space:normal;widows:2;word-spacing:0px;" href="https://byui.idm.oclc.org/login?url=https://mla.moonami.com/login/index.php" target="_blank">Online Course on Researching</a></p>',
        subjects: ["English"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=mzh&authtype=sso&custid=s8406107",
        moreInfo:
            "MLA International Bibliography covers a broad range of humanities subjects, including world languages and literatures, linguistics, dramatic arts, film, folklore, rhetoric and writing studies, teaching of language, and history of publishing. Its expansive scope also makes it an excellent resource for research in history, philosophy, communications, and cross-disciplinary subjects such as gender studies and area studies.Coverage is international, encompassing scholarly publications in more than 70 languages. Numerous full-text links provide easy access to resources in the library as well as open access publications.Students at all levels rely on the bibliography to lead them to the journals, books, Web sites, and other publications they need to succeed in their research projects.Tutorials&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Online Course on Researching",
    },
    {
        name: "Mometrix eLibrary",
        description:
            "<p>Study guides, flashcards, and practice questions for standardized exams including Praxis, GRE, MCAT, NCLEX, HESI A2, GMAT, etc. Just added: NCAC &amp; POSS.</p>",
        subjects: [
            "Academic Support Centers, Accounting, Applied Plant Science, Biology, Business Management, Chemistry, Computer Science and Electrical Engineering, Design and Construction Management, Economics, English, Foundations & GE (General Education), General, Home and Family, Human Performance and Recreation, Interdisciplinary Studies, Job and Career Resources, Mechanical & Civil Engineering, Nursing, Physics, Political Science, Psychology, Sociology and Social Work, Teacher Education",
        ],
        contentTypes: ["Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://portal.mometrixelibrary.com/?__acct=12352",
        moreInfo:
            "Includes tests in these categories:&nbsp;BusinessCareerCollege Admissions and PlacementConstruction and IndustryCounseling and Social WorkEnglish LanguageFinance, Insurance, and Real EstateGraduate and Professional SchoolK-12Medical ProfessionalMedical TechnologyNursingNutritionPersonal FitnessPublic Service and LegalTeaching",
    },
    {
        name: "MotoVisuals",
        description:
            "<p>Service and repair animations for automobiles. Enhances understanding of automotive issues with accurate visualizations.</p>",
        subjects: ["Automotive Engineering / Technology"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://education.motovisuals.com/#!/home",
        moreInfo: "",
    },
    {
        name: "Mountain People: Life and Culture in Appalachia",
        description:
            "<p>Diaries and narratives of the people, culture, and life of people in the Appalachian region of the U.S. from the Colonial era through the early 1900s.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/3XNL/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "Consists of the diaries, journals, and narratives of explorers, emigrants, military men, Native Americans, and travelers in the Appalachian region (the mountainous area from Pennsylvania and Virginia, down through Ohio and West Virginia, and on into parts of Tennessee, Georgia, Arkansas, and Alabama).&nbsp;In addition, there are accounts about the development of farming and mining communities, family histories, and related folklore. These accounts provide a view of the of the vast region and information about the social, political, economic, scientific, religious and agricultural characteristics of the region.This resource is part of the Archives Unbound collection from Gale.",
    },
    {
        name: "MRI-Simmons Catalyst",
        description:
            "<p>A consumer intelligence and discovery platform that provides marketers with fast access to actionable consumer insights.</p>",
        subjects: ["Business Management, Communications"],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://insights.mrisimmons.com/university/byui",
        moreInfo:
            "&nbsp;Powered by Smart Search, the most comprehensive consumer intelligence search engine, the new platform allows marketers to mine through thousands of consumer behaviors in seconds, helping clients accelerate the development of brand consumer messaging, cross-channel marketing, and media planning tactics.&nbsp;",
    },
    {
        name: "Museum of Art (BYU)",
        description:
            "<p>Enjoy virtual tours, online resources, and art database of the MOA permanent collection. Search by title, artist, medium, description, and subject.</p>",
        subjects: ["Art"],
        contentTypes: ["Images", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://moa.byu.edu",
        moreInfo: "",
    },
    {
        name: "Music & Performing Arts",
        description:
            "<p>Cross search ASP audio &amp; video resources spanning all time periods, and countless artists, composers, choreographers, and ensembles.</p>",
        subjects: ["Dance, Humanities and Philosophy, Music, Theatre"],
        contentTypes: ["Video", "Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://search-alexanderstreet-com.byui.idm.oclc.org/music-performing-arts",
        moreInfo:
            "Music &amp; Performing Arts provides a rich environment for the learning and teaching of music. Search by genre, title, instrument, performer, ensemble, publisher, events, genres, or subject in categories of American Music, Classical Music, World Music, Popular Music, Jazz, Film, Dance, or Theatre.",
    },
    {
        name: "Music Periodicals Database",
        description:
            "<p>A database with indexes, abstracts, and full-text for hundreds of international music periodicals, most are recent; some date to the 1800s.</p>",
        subjects: ["Music"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/iimpft?accountid=9817",
        moreInfo:
            "The periodicals (journals, newspapers, magazines, reports) included come from over 20 countries. Coverage includes millions of records, the majority from the most recent ten years of publication. Some complete journal runs are included, with indexing back to 1874.Subject Coverage:Classical music and operaJazz and bluesRock, soul, and hip-hopFolk musicMusic businessSound recordingEthnomusicologyMusic educationMusic therapyInstrumentsMusical theatre",
    },
    {
        name: "MyHeritage",
        description:
            "<p>Access a variety of family history resources such as Census, Birth, Marriage, Death, Military, Immigration, Family Trees, Newspapers, etc.</p>",
        subjects: ["Family History, History"],
        contentTypes: [
            "Primary Resource",
            "Government",
            "Interactive Learning",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.myheritage.com/",
        moreInfo:
            "Members of the LDS Church can receive free access thru their FamilySearch account. Find out how.WorldVitalRecords and FamilyLink are now part of MyHeritage.&nbsp;&nbsp;",
    },
    {
        name: "National Geographic Virtual Library",
        description:
            "<p>A complete archive of the magazine to present (45-day embargo); includes all pages &amp; photographs with a browsable &amp; searchable interface.&nbsp;</p>",
        subjects: ["Art, General, Geography, History"],
        contentTypes: ["Images", "Full-Text Articles"],
        url: "http://infotrac.galegroup.com/itweb/byuidaho?db=NGMA",
        moreInfo:
            "National Geographic Society, one of the world's largest nonprofit educational and scientific organizations, is recognized world-wide as journalism's most trusted name in exploration and discovery. From its founding in 1888, the National Geographic Society has developed the iconic National Geographic magazine as well as the popular National Geographic Traveler and hundreds of books, maps, videos, and images.National Geographic Virtual Library brings the National Geographic Society to the library in a cross-searchable platform that fits the way today's students and patrons conduct their research. With standard library features and functionality common to many Gale resources, National Geographic Virtual Library is a powerful tool for research through the 100+ years of quality publications.Browse Magazines",
    },
    {
        name: "National Theatre Collection",
        description:
            "<p>World-class productions from U.K.'s National Theatre, offering significant insight in to theatre and performance studies.</p>",
        subjects: ["Theatre"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://video.alexanderstreet.com/channel/national-theatre-collection",
        moreInfo:
            "Made possible through a collaboration with the National Theatre.Partial List:&nbsp;MacbethOthelloTwelfth NightKing Lear (Donmar Warehouse)HamletCoriolanus (Donmar Warehouse)Julius Caesar (Bridge Theatre)Romeo and Juliet (adapted for younger audiences)The Winter's Tale (adapted for younger audiences)MedeaAntigoneOne Man, Two GuvnorsShe Stoops to ConquerLondon AssuranceYerma (Young Vic)The Cherry OrchardThe Deep Blue SeaTranslationsA Streetcar Named Desire (Young Vic)Cat on a Hot Tin Roof (Young Vic)Les BlancsFrankensteinJane EyreTreasure IslandPeter PanSmall IslandConsentDarawonder.land",
    },
    {
        name: "Naxos Music Library",
        description:
            '<p>The world\u00b4s largest online classical music library, offering millions of music tracks for listening and studying. After opening, users can click on \u201cPlaylists\u201d to see BYU-I playlists and to create their own account.<br />\r\nApp: &nbsp; &nbsp; &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.naxos.nml">Android&nbsp;</a> &nbsp; &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/nml/id338059159">iOS</a></p>',
        subjects: ["General, Music"],
        contentTypes: ["Audio", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://brighamyui.naxosmusiclibrary.com",
        moreInfo:
            "Complete catalogues or selected recordings of over 940 labels such as BIS, Capriccio, Chandos, CPO, CSO Resound, Decca, Deutsche Grammophon, Erato, Dynamic, Finlandia, Grand Piano, H\u00e4nssler Classic, Harmonia Mundi, Hungaroton, LSO Live, Marco Polo, Na\u00efve, Naxos, New York Philharmonic, Nimbus, Nonesuch, Ondine, Orfeo, PentaTone, RCA Records, Sony Classical, Supraphon, Teldec, Universal Classics, Vanguard Classics, Warner Classics, Warner Classics - Parlophone (former EMI Classics) and many more.&nbsp;Wide range of standard and specialist repertoireHundreds of albums added each monthMusic notes, cover artwork, tracklist, instrumentation and publisher informationLibretti of over 65 and synopses of close to 1000 operasMore than 40,000 composer and artist biographiesPronunciation guide for musical terms, composer and artist namesInteractive dictionary with music examplesStudy Guides to supplement music curriculums in Australia, Canada, Ireland, South Korea, UK and USAAural training exercises of 11 levels of difficulty, from basic to advancedJunior sectionAbility to create personal playlists or use of predefined Naxos Music Library playlistsPlaylists for graded music exams (ABRSM, Trinity/Guildhall) in various categories and gradesAvailable as an app: &nbsp; &nbsp; &nbsp; Android app &nbsp; &nbsp;iOS appFaculty members can contact eResources@byui.edu to learn how to create class playlists.",
    },
    {
        name: "Naxos Video Library ",
        description:
            "<p>A video library of Performing Arts: music, opera, ballet, live performance, documentaries, and more from some of the world's greatest in the fields.</p>",
        subjects: ["Dance, Music, Theatre"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://brighamyui.naxosvideolibrary.com",
        moreInfo:
            'To see Closed Captioning: scroll to the tabs, select "Libretto/Text", and select your language.The libretto will scroll with the action and captions will appear on-screen.',
    },
    {
        name: "Neal A. Maxwell Institute for Religious Scholarship",
        description:
            "<p>An academic research unit at BYU comprised of scholars studying Religion to inspire and fortify Latter-day Saints.</p>",
        subjects: ["nan"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://mi.byu.edu/",
        moreInfo:
            '\u201cThe Neal A. Maxwell Institute for Religious Scholarship both gathers and nurtures disciple-scholars. As a research community, the Institute supports scholars whose work inspires and fortifies Latter-day Saints in their testimonies of the restored gospel of Jesus Christ and engages the world of religious ideas"--mission statement.Includes essays, publications, podcasts, blogs, and more.Link to the Journal of Book of Mormon Studies&nbsp;&nbsp;',
    },
    {
        name: "New England Journal of Medicine",
        description:
            "<p>The <i>New England Journal of Medicine </i>(NEJM) is the world\u2019s leading medical journal and website.&nbsp;</p>",
        subjects: ["Nursing"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://content.nejm.org/",
        moreInfo:
            "Published continuously for over 200 years, NEJM delivers high-quality, peer-reviewed research and interactive clinical content to physicians, educators, and the global medical community.&nbsp;NEJM is cited more often in scientific literature than any other medical journal, and has the highest Journal Impact Factor of all general medical journals.",
    },
    {
        name: "New York Times",
        description:
            "<p>Breaking U.S. and international news and reports covering politics, business, opinion, technology, science, health, sports, arts, books, style, and more.&nbsp;</p>",
        subjects: [
            "Business Management, Communications, Finance, General, History, Interdisciplinary Studies, Political Science",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.nytimes.com",
        moreInfo:
            "New users must Register here for a complimentary NYTimes pass account, provided by the McKay Library.&nbsp;Link for existing BYU-I users.Available as an app: &nbsp; &nbsp;&nbsp;Android app&nbsp; &nbsp;&nbsp;iOS app&nbsp;&nbsp;&nbsp; Audio app for iOS (podcasts)",
    },
    {
        name: "New York Times in Education",
        description:
            '<p>A resource for faculty and students to utilize instructional strategies, activities, and teaching resources from The New York Times.<a href="https://byui.idm.oclc.org/login?url=https://nytimesineducation.com/register/"> Register here.</a></p><p>&nbsp;</p>',
        subjects: [
            "Accounting, Art, Biology, Business Management, Communications, Economics, English, General, Health Services, Nursing, Political Science, Psychology, Sociology and Social Work",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://nytimesineducation.com/",
        moreInfo:
            "Organized by area of study including American Government, Arts &amp; Visual Culture, Biology, Business, Environmental Sciences, Religious Studies, Sociology, and more.Registration link for access to the NYT in Education; use your BYU-Idaho email address.",
    },
    {
        name: "New York Times: ProQuest Historical Newspapers",
        description:
            "<p>Provides researchers, genealogists, and scholars with searchable first-hand accounts and coverage of the politics, society, and events since 1851.&nbsp;</p>",
        subjects: ["Family History, General, History, Political Science"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpnewyorktimes?accountid=9817",
        moreInfo:
            "Includes full-text and full-image articles since its beginning in 1851 (there is a 3-year embargo on current materials). Each article is available as a downloadable PDF file.&nbsp;In addition to news stories, the database includes editorials, letters to the editor, obituaries, birth and marriage announcements, photos, and advertisements.&nbsp;It is possible to display the complete image of any page in any issue or even browse individual issues page by page.&nbsp;See New York Times for current coverage (Students and Faculty can register for an NYT account, courtesy of BYU-I.)",
    },
    {
        name: "News: Gale OneFile",
        description:
            "<p>Access thousands of major U.S. regional, national, and local newspapers, papers from around the world, plus radio &amp; TV broadcasts.</p>",
        subjects: ["General, History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/STND?u=byuidaho",
        moreInfo:
            "Gale OneFile News&nbsp;provides access to several thousand major U.S. regional, national, and local newspapers, as well as leading titles from around the world.&nbsp;Also included are thousands of images, radio and TV broadcasts, and transcripts.&nbsp;Search full-text articles by title, headline, date, author, newspaper section, or other fields.&nbsp;Browse Newspapers by Title",
    },
    {
        name: "NewsBank ",
        description:
            "<p>The world's largest collection of newspapers. Find current &amp; archived state, national, &amp; international articles on issues, events, &amp; people.&nbsp;</p>",
        subjects: ["Family History, General, History, Political Science"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/apps/news/advanced-search/?p=WORLDNEWS&f=advanced",
        moreInfo:
            "Includes:&nbsp;Idaho StatesmanFinancial Times (London)New York TimesUSA TodayWashington PostAnd thousands more (Link to full list)Also includes Access Business News, Access International News, Access Military, Government, and Defense, Access Newswires &amp; Transcripts, and Acceda Noticias.",
    },
    {
        name: "Newspaper / Periodical databases from Gale",
        description:
            "<p>Search the collection of Gale's historical newspapers and periodicals to which the BYU-I McKay Library subscribes.&nbsp;</p>",
        subjects: ["General, History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://find.galegroup.com/dvnw/start.do?prodId=DVNW&userGroupName=byuidaho",
        moreInfo:
            "Includes archives of the following: (coverage dates vary)American Historical PeriodicalsBritish Library NewspapersDaily MailFinancial Times&nbsp;Nineteenth Century US NewspapersNineteenth Century UK PeriodicalsPunch&nbsp;Burney Newspapers CollectionNichols Newspaper CollectionThe Sunday TimesThe Telegraph&nbsp;The TimesThe Times Literary Supplement",
    },
    {
        name: "Newspaper Source",
        description:
            "<p>Newspaper Source provides cover-to-cover full text for hundreds of national (U.S.), international and regional newspapers plus radio &amp; tv news.</p>",
        subjects: ["General"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=nfh&authtype=sso&custid=s8406107",
        moreInfo: "",
    },
    {
        name: "Nineteenth Century British Pamphlets ",
        description:
            "<p>A collection of the most significant pamphlets; used In the 19th century as an important means of public debate on current issues.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.jstor.org/site/primary-sources/19th-century-british-pamphlets/",
        moreInfo:
            "These pamphlets cover the key political, social, technological, and environmental issues of their day.19th Century British Pamphlets, created by Research Libraries UK (RLUK), contains the most significant British pamphlets from the 19th century held in research libraries in the United Kingdom.",
    },
    {
        name: "Nineteenth Century Collections Online",
        description:
            "<p>Records from the 1800s, with its explosion in written materials describing this time of expansion, innovation, &amp; change.</p>",
        subjects: ["English, History, Political Science"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=NCCO&u=byuidaho",
        moreInfo:
            "This database is a result of partnerships between Gale and almost 100 libraries in an effort to preserve and make available some of the most unique and pertinent monographs, newspapers, pamphlets, manuscripts, ephemera, maps, photographs, statistics, and other kinds of documents in both Western and non-Western languages in an effort to document this time of rapid change.Collections Included:&nbsp;Asia and the WestBritish Politics and SocietyBritish Theatre, Music, and LiteratureChildren's Literature and ChildhoodEurope and Africa, Colonialism and CultureEuropean Literature, the Corvey Collection, 1790-1840Maps and Travel LiteraturePhotographyReligion, Reform and SocietyScience, Technology, and Medicine: 1780-1925, Part IScience, Technology, and Medicine: 1780-1925, Part IIWomen and Transnational Networks&nbsp;",
    },
    {
        name: "Nineteenth Century UK Periodicals",
        description:
            "<p>A collection of periodicals which cover the events, lives, values, and themes that shaped the 19th century world.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=NCUK&u=byuidaho",
        moreInfo:
            "This collection provides an invaluable, fully-searchable, facsimile resource for the study of British life in the 19th century - from art to business; from children to politicians. Few of the materials in this extensive online collection have ever been reissued, in any format since original publication. All the original color work has been specially captured for this collection.",
    },
    {
        name: "Nineteenth Century US Newspapers",
        description:
            "<p>Full-text content and images from numerous newspapers from a range of urban and rural regions throughout the U.S. during the 1800s.</p>",
        subjects: [
            "Family History, History, Political Science, Special Collections",
        ],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=NCNP&u=byuidaho",
        moreInfo:
            "&nbsp;A compelling and comprehensive collection, it encompasses the entire 19th century, with an emphasis on such topics as the American Civil War, African-American culture and history, Western migration, and Antebellum-era life, among other subjects.",
    },
    {
        name: "Nineteenth-Century Fiction",
        description:
            "<p>A collection of some 250 British and Irish novels from Gothic fiction to Decadent &amp; new Woman Novels from the Victorian Era.</p>",
        subjects: ["English"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343197091?accountid=9817",
        moreInfo:
            "Nineteenth-Century Fiction represents the great achievements of the Victorian canon and reflects the landmarks of the period, portraying the genre in all its energy and variety, from horror to social satire, from moral earnestness to aestheticism, from masculine adventure to feminist polemic.&nbsp;Along with well-known novels, the collection includes lesser-known and neglected works in various genres: popular romances, sensation fiction, colonial adventure novels, and children's literature.&nbsp;Includes works of:Jane AustenSir Walter ScottMary ShelleyCharles DickensGeorge EliotThomas Hardythe Bront\u00ebs&nbsp;\u2026many others&nbsp;",
    },
    {
        name: "Nixon Years, 1969-1974",
        description:
            "<p>This collection provides complete FCO 7 and FCO 82 files for the entire period of Richard Nixon\u2019s presidency.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.thenixonyears.amdigital.co.uk",
        moreInfo:
            "These files enable researchers to assess, from a British, European, and Commonwealth perspective, Nixon's handling of numerous Cold War crises, his administration's notable achievements, as well as his increasingly controversial activities and unorthodox use of executive powers culminating in Watergate and resignation.This resource is part of the Adam Matthew collection.&nbsp;",
    },
    {
        name: "North American Immigrant Letters, Diaries, & Oral Histories",
        description:
            "<p>Gathered from thousands of authors, this is a unique and personal view of what it meant to immigrate to America and Canada from 1800 - 1950.</p>",
        subjects: ["History"],
        contentTypes: ["Audio", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://imld.alexanderstreet.com",
        moreInfo:
            "Composed of contemporaneous letters and diaries, oral histories, interviews, and other personal narratives, the series provides a rich source for scholars in a wide range of disciplines. In selected cases, users can hear the actual audio voices of the immigrants.Browse by people, subject, title, historical events, place, content type, or publisher.",
    },
    {
        name: "North American Indian Drama",
        description:
            "<p>Numerous plays by dozens of creators representing the stories and creative energies of American Indian and First Nation playwrights.</p>",
        subjects: ["Dance, English, History, Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/theatre/browse/title?ff%5B0%5D=unitaccess%3AINDR-1E",
        moreInfo:
            "Representing Cherokee, M\u00e9tis, Creek, Choctaw, Pembina Chippewa, Ojibway, Lenape, Comanche, Cree, Navajo, Rappahannock, Hawaiian/Samoan, and other groups, these plays demonstrate Native theater\u2019s diversity of tribal traditions and approaches to drama\u2014melding conventional dramatic form with ancient storytelling and ritual performance elements, experimenting with traditional ideas of time and narrative, or challenging Western dramatic structure.",
    },
    {
        name: "North American Indian Thought and Culture",
        description:
            "<p>Bringing together biographies, photos, histories, and more, this collection shares perspectives of American Indians, Alaska Natives, &amp; Canadian First Peoples.</p>",
        subjects: [
            "Biographies, English, Geography, History, Humanities and Philosophy",
        ],
        contentTypes: ["Audio", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/ibio",
        moreInfo:
            "Integrating autobiographies, biographies, Indian publications, oral histories, personal writings, photographs, drawings, and audio files, this database creates a comprehensive representation of historical events as told by the individuals who lived through them.&nbsp;",
    },
    {
        name: "North American Women's Drama",
        description:
            "<p>Plays written from the Colonial times to the present by women in United States and Canada, many previously unpublished.</p>",
        subjects: ["English, History, Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/theatre/browse/title?ff%5B0%5D=unitaccess%3AWODR-1E",
        moreInfo:
            "Searchable by playwright, language, date, production company, area of interest, content type, subject, etc.The bulk of the collection consists of the full-text of the plays, but some posters, photographs, playbills, and other ephemera are also included.",
    },
    {
        name: "North American Women's Letters and Diaries",
        description:
            "<p>Scope is from Colonial times to 1950. A detailed record of clothing, food, amusements, work, &amp; religious activities.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://nwld.alexanderstreet.com",
        moreInfo: "",
    },
    {
        name: "North American Women's Magazines & Newspapers",
        description:
            "<p>A growing, award-winning collection of the most historically important North American women\u2019s magazines and newspapers from the 1800's thru the early 1900's.</p>",
        subjects: ["History, Sociology and Social Work, Special Collections"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/woco/",
        moreInfo:
            "This collection provides insight into 19th &amp; 20th Century North American social history, women's issues, reform movements, textile studies, consumer culture, health, literature, and more. &nbsp;Includes machine-readable images of the original prints.Description of the Women's Magazines &amp; Newspapers collection &nbsp; &nbsp; | &nbsp; &nbsp;This resource is part of the History Commons collection. &nbsp; &nbsp;&nbsp;Includes:Godey\u2019s Lady\u2019s BookThe Lily (1849-1856)National Citizen and Ballot Box (1878-1881)The National Standard: A Women\u2019s Suffrage and Temperance Journal (1870-1872)The New Citizen (1909-1912)The Revolution (1868-1872)The Remonstrance (1890-1913)The 19th Amendment Victory (1762-1923)The Western Woman Voter (1911-1913)The Woman\u2019s Tribune",
    },
    {
        name: "Nursing and Allied Health",
        description:
            "<p>Access authoritative content on specialized care, treatment, and patient management - includes full-text for most titles cited in CINAHL .&nbsp;</p>",
        subjects: ["Nursing"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=PPNU&u=byuidaho",
        moreInfo:
            "Updated daily, this resource will help nursing professionals already working in the field, as well as students pursuing a nursing-focused curriculum.&nbsp;This is a versatile resource featuring highlighting and note-taking tools as well as an intuitive interface, providing multiple pathways to key information.",
    },
    {
        name: "Nursing Core Collection",
        description:
            "<p>Film collection designed to help nursing students in their studies and to prepare them for long-term job success in the health care system.</p>",
        subjects: ["Health Services, Nursing"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://fod.infobase.com/PortalPlayLists.aspx?wid=104034&level=Subject&sid=1587",
        moreInfo: "Apps: Android &nbsp; &nbsp; &nbsp;iOS",
    },
    {
        name: "Nursing Databases ",
        description:
            "<p>Search three of our most popular nursing databases at once: CINAHL, Health Source: Nursing/Academic Edition, and MEDLINE.</p>",
        subjects: ["Nursing"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=cmedm,cin20,hch&authtype=sso&custid=s8406107",
        moreInfo: "",
    },
    {
        name: "Nursing Education in Video",
        description:
            "<p>Hundreds of up-to-date nurse training videos for demonstration and training for those looking to improve their clinical skills and patient care.</p><p>&nbsp;</p>",
        subjects: ["Nursing"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/mcom",
        moreInfo:
            "All of the videos in the collection have been created with the guidance of the Medcom-Trainex advisory board, and are regularly reviewed for accuracy, currency, and compliance with US Federal regulations from agencies such as OSHA and CMS.&nbsp;",
    },
    {
        name: "O'Reilly Books Online",
        description:
            '<p>Up-to-date technical books covering software development, CAD, data, design, hardware, math, engineering, leadership, etc. App:&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/app/apple-store/id881697395?pt=206943&amp;ct=oreilly-apps-page&amp;mt=8"> IOS&nbsp;</a> &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.safariflow.queue">Anroid</a></p><p>&nbsp;</p>',
        subjects: [
            "Automotive Engineering / Technology, Business Management, Communications, Computer Information Technology, Computer Science and Electrical Engineering, Design and Construction Management, General, Job and Career Resources, Mathematics",
        ],
        contentTypes: ["eBooks", "Full-Text Articles", "Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://go.oreilly.com/byu-idaho",
        moreInfo:
            "This collection offers tens of thousands of some of the best technical books, videos, and training materials.Cover popular subjects such as:Software developmentUser experience - UX/IAAutoCADBusiness &amp; LeadershipData Engineering &amp; ScienceDesignOperating SystemsHardware developmentMathScienceEngineeringProgramming languagesGame development &amp; GamingCloud computingSecuritySystem administrationArtificial intelligence - AI&nbsp;Travel &amp; HobbiesCareer developmentEntrepreneurshipMobile appsand so much more!Features titles from O'Reilly Media, Wiley, Pearson, Routledge, IBM, For Dummies, and more.",
    },
    {
        name: "OmniFile ",
        description:
            "<p>Multidisciplinary full-text articles covering topics including art, business, education, humanities, science, social sciences, and technology.&nbsp;</p>",
        subjects: ["General"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ofs&authtype=sso&custid=s8406107",
        moreInfo: "",
    },
    {
        name: "One Business",
        description:
            "<p>A business-focused database for researching business &amp; companies, marketing plans, SWOT analyses, case studies, and industry reports.</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics, Marketing",
        ],
        contentTypes: [
            "Abstract / Citation / Index",
            "eBooks",
            "Newspapers",
            "Video",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/pq1business?accountid=9817",
        moreInfo:
            "Allows search by type: scholarly journals, company reports, industry/country reports, newspapers, books, videos, and more.",
    },
    {
        name: "Opera in Video",
        description:
            "<p>Hundred of hours of opera performances from staged productions, interviews, and documentaries. &nbsp;</p>",
        subjects: ["Dance, Humanities and Philosophy, Music, Theatre"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/opiv",
        moreInfo:
            "Representing the world\u2019s best performers, conductors, and opera houses, users of Opera in Video are able to experience classical music through thousands of titles, including 200 full operas and 75 dance titles, as well as masterclasses, documentaries, and interviews. Video as a learning tool provides a rich experience for music students.&nbsp;&nbsp;",
    },
    {
        name: "Opposing Viewpoints ",
        description:
            "<p>Browse controversial subjects and view the pros and cons from both sides of frequently studied and discussed issues.</p>",
        subjects: ["General"],
        contentTypes: ["Maps", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=OVIC&u=byuidaho",
        moreInfo:
            "Draws on content from the acclaimed social issues series by Greenhaven Press as well as other from Macmillan REference USA and Gale sources. Rich resource for debaters and those exploring viewpoints. Includes reference articles, interactive maps, infographics, and more.Example of topics covered:&nbsp;Abortion\r\nAdministration of Criminal Justice\r\nAdoption\r\nAffirmative Action\r\nAIDS (Disease)\r\nAlcoholism\r\nAnimal Experimentation\r\nAnimal Rights\r\nAssisted Suicide\r\nAthletes\r\nBioethics\r\nBiological Weapons\r\nBirth Control\r\nCapital Punishment\r\nCatholic Church\r\nCensorship\r\nChemical Weapons\r\nChild Abuse\r\nChurch And State\r\nCivil Rights\r\nCloning\r\nCrime\r\nCrime Victims\r\nDeath\r\nDivorce\r\nDomestic Violence\r\nDrinking (Alcoholic Beverages)\r\nDriving While Intoxicated\r\nDrug Abuse\r\nDrug Traffic\r\nDrugs And Athletes\r\nEating Disorders\r\nEducation\r\nElderly\r\nEmigration and Immigration\r\nEmployment\r\nEndangered Species\r\nEnvironmental Policy\r\nEnvironmentalism\r\nEthnic Relations\r\nEuthanasia\r\nFamily\r\nFamily Relations\r\nFeminism\r\nGambling\r\nGangs\r\nGenetic Engineering\r\nGenocide\r\nGlobal Warming\r\nGun Control\r\nHate Crimes\r\nHealth Insurance\r\nHealth Care Reform\r\nHomelessness &nbsp; &nbsp; &nbsp;\r\nHomosexuality\r\nHuman Rights\r\nIllegal Immigrants\r\nInternet\r\nIraq\r\nIslamic Fundamentalism\r\nJuvenile Alcoholism\r\nJuvenile Drug Abuse\r\nJuvenile Offenders\r\nMarijuana\r\nMarine Resources Conservation\r\nMedia Violence\r\nMedical Care\r\nMedical Ethics\r\nMental Disorders\r\nMental Health\r\nMiddle East\r\nNarcotics Control\r\nNarcotics Legalization\r\nNational Security\r\nNuclear Weapons\r\nNutrition\r\nOceans\r\nPolitical Corruption\r\nPollution\r\nPopulation Growth\r\nPornography\r\nPoverty\r\nPrisons\r\nPublic Assistance\r\nRace Relations\r\nRacism\r\nRape\r\nReligion\r\nRenewable Energy\r\nRight of Privacy\r\nSchool Violence\r\nSex Education\r\nSexual Behavior\r\nSmoking\r\nStem Cells\r\nSuicide\r\nTeenage Pregnancy\r\nTeenage Sexual Behavior\r\nTerrorism\r\nUnited States Foreign Relations\r\nViolence\r\nWar Crimes\r\nWater Pollution\r\nWelfare Reform\r\nWomen\r\nWomen's Rights\r\nWorking Women\r\nYouth",
    },
    {
        name: "Oral History Online",
        description:
            "<p>Provides indexing and searching to several thousand Oral Histories collections (in English) from around the world, plus access to many of them.</p>",
        subjects: ["History"],
        contentTypes: ["Audio", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/orhi",
        moreInfo:
            "This release of Oral History Online provides in-depth indexing to more than 2,700 collections of Oral History in English from around the world. The collection also provides keyword searching of more than 329,400 pages of full-text by close to 10,000 individuals from all walks of life. &nbsp;It also contains pointers to over 4,200 audio and video files and almost 19,000 bibliographic records.Browse by people, subject, title, historical events, place, content type, or publisher.",
    },
    {
        name: "Organ Cinema",
        description:
            "<p>Learn the history, sound, and repertoire of the organ in these masterful films and recordings. No login required; click \u201cView Project Detail.\u201d</p>",
        subjects: ["Music"],
        contentTypes: ["Video", "Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://organcinema.com",
        moreInfo:
            "Created through a collaboration of Fugue State Films and the Royal College of Organists.Includes these documentaries with more to come:The Genius of Cavaill\u00e9-CollFranck: Father of the Organ SymphonyWidor \u2013 Master of the Organ SymphonyThe English Organ - Parts One, Two, &amp; ThreeBach and ExpressionMartinikerk RondeauAlkmaar: The Organs of the LaurenskerkMaximum RegerA Legend Reborn: The Voice of King\u2019sLouis Vierne: The Complete Organ SymphoniesApr\u00e8s Cavaill\u00e9-Coll",
    },
    {
        name: "Overland Journeys: Travels in the West, 1800-1880",
        description:
            "<p>A unique window into Western History from the view of the settlers and their journeys. Taken from various microfilm collections (listed below).</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/3FIV/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "Comprised of selections from the microfilm collections Travels in the West and Southwest &amp; the Plains and Rockies, this digital collection provides a unique window on Western History.&nbsp;Selections are based on the bibliographies, The Plains and Rockies: A Critical Bibliography of Exploration, Adventure, and Travel in the American West, 1800-1865, and The Trail West: A Bibliography-Index to Western American Trails, 1841-1869.&nbsp;This resource is part of the&nbsp;Archives Unbound&nbsp;collection from Gale.",
    },
    {
        name: "OVID",
        description:
            "<p>Health professionals rely on OVID for articles on current medical research; access OVID's medical journal &amp; book collection here.</p>",
        subjects: ["Health Services, Nursing"],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://gateway.ovid.com/autologin.html",
        moreInfo:
            "This resource helps healthcare professionals find important medical information so they can make critical decisions to improve patient care, enhance ongoing research, and fuel new discoveries. Search through academic journal articles, with over 200 titles in full-text. This resource offers market-leading medical research useful in making informed decisions regarding patient care, quality, and clinical outcomes.",
    },
    {
        name: "Oxford English Dictionary (OED)",
        description:
            "<p>The authority on the evolution of the English language over the last millennium; a guide to the meaning, history, and pronunciation to present &amp; past words.</p>",
        subjects: ["English, General"],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://www.oed.com/",
        moreInfo: "",
    },
    {
        name: "Oxford Handbooks Online - Selected",
        description:
            '<p>Contains in-depth, high-level articles by scholars at the top of their field. <a href="https://byui.idm.oclc.org/login?url=https://academic.oup.com/oxford-handbooks-online/search-results?q=&amp;tax=AcademicSubjects%2fSOC02270&amp;access_all=true">Search Politics purchased </a>content. <a href="https://byui.idm.oclc.org/login?url=https://academic.oup.com/oxford-handbooks-online/search-results?access_free=true">Search all OPU Open Access.</a></p>',
        subjects: ["Political Science"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://academic.oup.com/oxford-handbooks-online",
        moreInfo: "",
    },
    {
        name: "Oxford Music Online ",
        description:
            "<p>The &nbsp;world\u2019s premier online music encyclopedia, offering comprehensive coverage of music, musicians, music-making, and music scholarship.&nbsp;</p>",
        subjects: ["Music"],
        contentTypes: ["Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.oxfordmusiconline.com/",
        moreInfo:
            "Oxford Music Online includes Grove Music Online and related publications, along with The Oxford Companion to Music and The Oxford Dictionary of Music.Updated frequently, Grove Music Online is an essential tool for anyone interested in researching, teaching, or just learning more about music. Written and edited by nearly 9,000 subject experts, Grove\u2019s 51,000 articles offer clear overviews of topics from a scholarly perspective and include extensive bibliographies, which are curated to guide users through existing scholarship.&nbsp;",
    },
    {
        name: "Oxford Reference Online",
        description:
            "<p>Over 120 dictionaries (English and foreign languages) and reference titles from Oxford University Press's Dictionaries and Encyclopedias.</p>",
        subjects: [
            "Accounting, Applied Plant Science, Art, Biology, Chemistry, Dance, English, Family History, General, Geography, Health Services, History, Humanities and Philosophy, Languages and International Studies, Mathematics, Mechanical & Civil Engineering, Music, Physics, Political Science, Religious Education",
        ],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://www.oxfordreference.com/",
        moreInfo:
            "Subjects cover archaeology, art &amp; architecture, classical studies, History, Language Reference, Law, Linguistics, Literature, Law, Medicine &amp; Health, Media Studies, Music, Names Studies, Performing Arts, Philosophy, Quotations, Religion, Science &amp; Technology, Social Sciences, and Society &amp; Culture.",
    },
    {
        name: "Oxford Research Encyclopedia of Religion",
        description:
            '<p>Read <a href="https://byui.idm.oclc.org/login?url=https://oxfordre-com.byui.idm.oclc.org/religion/browse?submittedFilterId=by-availability&amp;subSite=religion&amp;pageSize=20&amp;sort=titlesort&amp;avail_4=free">open-access</a>, peer-reviewed, regularly updated articles on religious themes. <a href="https://byui.idm.oclc.org/login?url=http://oxfordre.com/religion">Homepage</a>.</p>',
        subjects: ["Religious Education"],
        contentTypes: ["Reference", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://oxfordre-com.byui.idm.oclc.org/religion/browse?submittedFilterId=by-availability&subSite=religion&pageSize=20&sort=titlesort&avail_3=unlocked&avail_4=free",
        moreInfo:
            "Subjects covered:Theology and Philosophy of ReligionIslamic StudiesReligion in AmericaIndigenous ReligionsJudaism and Jewish StudiesAfrican ReligionsChristianityReligion and Artand much more",
    },
    {
        name: "Papers of Amiri Baraka, Poet Laureate of the Black Power Movement ",
        description:
            "<p>A collection of materials documenting African American author and activist Amiri Baraka. Includes poetry, speeches, publications, plays, &amp; more.</p>",
        subjects: ["English, History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/3LBY/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "The collection consists of materials from the years 1913 through 1998 that document African American author and activist Amiri Baraka and were gathered by Dr. Komozi Woodard in the course of his research. The extensive documentation includes poetry, organizational records, print publications, articles, plays, speeches, personal correspondence, oral histories, as well as some personal records.&nbsp;The materials cover Baraka\u2019s involvement in the politics in Newark, N.J. and in Black Power movement organizations such as the Congress of African People, the National Black Conference movement, the Black Women\u2019s United Front. Later materials document Baraka\u2019s increasing involvement in Marxism.&nbsp;This resource is part of the Archives Unbound collection from Gale.",
    },
    {
        name: "Patrologia Latina",
        description:
            "<p>A collection of the works of the Church Fathers from Tertullian in 200 AD to the death of Pope Innocent III in 1216.</p>",
        subjects: ["History, Religious Education"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/patrologialatina",
        moreInfo:
            "The Patrologia Latina Database is an electronic version of the first edition of Jacques-Paul Migne's Patrologia Latina, published between 1844 and 1855, and the four volumes of indexes published between 1862 and 1865. Patrologia Latina comprises the works of the Church Fathers from Tertullian in 200 AD to the death of Pope Innocent III in 1216. The complete Patrologia Latina is included with all prefatory material, original texts, critical apparatus and indexes. Migne's column numbers, essential references for scholars, are included.Browse the texts using Bibliotheca Hagiographica Latina reference.",
    },
    {
        name: "PBS (Alexander Street Collection)",
        description:
            "<p>Hundreds of documentaries published by the Public Broadcasting System collected into one easily-searched interface.</p>",
        subjects: ["General"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/pbsv",
        moreInfo:
            "Providing an exceptional range of content with the most valuable video documentaries and series from PBS and covering content from science to history, art to Shakespeare, diversity to business &amp; economics, and more, the PBS Video Collection gives access to one of television\u2019s most trusted networks.",
    },
    {
        name: "Perdita Manuscripts: Women Writers, 1500-1700",
        description:
            "<p>Discover manuscripts written or compiled by women in the British Isles during the sixteenth and seventeenth centuries.&nbsp;</p>",
        subjects: ["English, History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.perditamanuscripts.amdigital.co.uk",
        moreInfo:
            "Produced in association with the Perdita Project based at the University of Warwick and Nottingham Trent University, the project seeks to rediscover early modern women authors who were \u201clost\u201d because their writing exists only in manuscript form. Brings together little-known materials from widely scattered locations.The manuscripts are remarkably varied in their content including works of poetry, religious writing, autobiographical material, cookery and medical recipes, and accounts.&nbsp;Part of the AM Explorer collection.",
    },
    {
        name: "Performing Arts Periodicals Database",
        description:
            "<p>Indexing and abstracts for hundreds of periodicals covering the arts &amp; entertainment industry such as dance, music, circus, opera, film, etc.</p>",
        subjects: ["Art, Dance, Humanities and Philosophy, Music, Theatre"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/iipaft?accountid=9817",
        moreInfo:
            "Some periodical cover is abstract only; some is full text. Majority of records are from the most recent ten years of each journal. See title list.Subject coverage:DanceTheaterDramaFilmMime / PantomimeStagecraftOperaPuppetryRadioTelevisionStorytellingVideoPerformance ArtsMusical TheaterCircus PerformanceMagic",
    },
    {
        name: "Periodicals Archive Online ",
        description:
            "<p>An archive of scholarly periodicals covering the arts, humanities and social science. Provides full-text access to most journals via the <i>Periodicals Index Online.</i></p>",
        subjects: ["General"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/pao",
        moreInfo: "",
    },
    {
        name: "Periodicals Index Online ",
        description:
            "<p>Provides citations for millions of articles published in the arts, humanities, and social sciences over the past 300 years.&nbsp;</p>",
        subjects: [
            "Art, General, History, Humanities and Philosophy, Interdisciplinary Studies",
        ],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/pio/socialsciences/fromDatabasesLayer?accountid=9817",
        moreInfo:
            "This compilation enables researchers to quickly and comprehensively identify articles relevant to their field of study and reduces what could take years of research to a matter of minutes. Journals indexed span 37 key subject areas and multiple languages.Subject coverage:AgricultureAncient civilizationsAnthropology/EthnologyApplied artsArchaeologyArchitectureArea studies \u2013 AfricaArea studies \u2013 AsiaArea studies \u2013 AustralasiaArea studies \u2013 EuropeArea studies - Middle EastBlack studiesBusiness/ManagementEconomicsEducationFine artsFolkloreGeographyHistory (General)History (The Americas)Humanities (General)Jewish studiesLawLibrary/Information scienceLinguistics/PhilologyLiteratureMusicPerforming artsPhilosophyPolitical sciencePsychologyPublic administrationReligion/TheologySocial affairsSocial sciences (General)SociologyWomen's studies",
    },
    {
        name: "Peterson's Test and Career Prep / TERC",
        description:
            "<p>Search thousands of college and graduate schools, identify scholarships, take practice tests, create resumes, and explore careers.</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics, General, Job and Career Resources, Teacher Education",
        ],
        contentTypes: ["Full-Text Articles", "Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://link-gale-com.byui.idm.oclc.org/apps/PTCP?u=byuidaho&aty=ip",
        moreInfo:
            "Find all the tools you need to discover your passion, ace your exams, and excel in your career.Create your own account to track progress and access your favorite resources.",
    },
    {
        name: "Philosopher's Index",
        description:
            "<p>A bibliographic database with abstracts covering scholarly research in all areas of philosophy going back to 1940.</p>",
        subjects: ["Humanities and Philosophy"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/philosophersindex/socialsciences/fromDatabasesLayer?accountid=9817",
        moreInfo:
            "Subject coverageAestheticsAxiologyEpistemologyEthicsLogicMetaphilosophyMetaphysicsPhilosophical AnthropologyPhilosophy of EducationPhilosophy of HistoryPhilosophy of LanguagePhilosophy of ReligionPhilosophy of SciencePolitical PhilosophySocial Philosophy",
    },
    {
        name: "Physical Therapy and Sports Medicine",
        description:
            "<p>Access to academic journals and magazines covering the fields of physical therapy, physical fitness, and sports medicine.&nbsp;</p>",
        subjects: ["Human Performance and Recreation, Nursing"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPSM&u=byuidaho",
        moreInfo:
            "The database offers a wide spectrum of information, including proven treatment techniques, experimental research, and more.&nbsp;",
    },
    {
        name: "Pittsburgh Courier (1911-2002)",
        description:
            "<p>Search and read through first-hand accounts of the politics, society, and events of the Pittsburgh &amp; the surrounding area during the years of 1911-2002.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/hnppittsburghcourier/news/fromDatabasesLayer?accountid=9817",
        moreInfo:
            "The Pittsburgh Courier was once the most widely circulated black newspaper in the U.S. in the early 20th century.The newspaper campaigned for increasing the number of black physicians and opening a hospital to serve the black community in Pittsburgh, where white facilities often refused to provide services. In the 1930s, the newspaper led a nationwide protest against the Amos \u2018n\u2019 Andy radio show and its advertisers because of the media\u2019s offensive portrayal of African-Americans. The publication\u2019s \u201cDouble V\u201d campaign during World War II demanded equal rights at home for black soldiers risking their lives overseas.Through the decades, intellectuals and influential writers such as W.E.B. DuBois, Marcus Garvey, James Weldon Johnson, Zora Neale Hurston, and others have written columns or reported for the newspaper.&nbsp;",
    },
    {
        name: "PNAS",
        description:
            "<p>Official journal of the National Academy of Sciences (NAS) - access articles and abstracts from issues 1915 to present.</p>",
        subjects: [
            "Biology, Chemistry, Computer Science and Electrical Engineering, Mathematics, Physics, Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www.pnas.org/",
        moreInfo:
            "PNAS is an authoritative source of high-impact, original research that broadly spans the biological, physical, and social sciences.&nbsp;The journal is global in scope and submission is open to all researchers worldwide. PNAS is one of the world's most-cited and comprehensive multidisciplinary scientific journals, publishing more than 3,200 research papers annually.",
    },
    {
        name: "PolicyMap",
        description:
            "<p>A mapping tool with over 50,000 indicators to perform analytics on demographic and socioeconomic analysis on areas of the US.</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics, Finance, General, Geography, Health Services, Home and Family, Interdisciplinary Studies, Job and Career Resources, Languages and International Studies, Marketing, Nursing, Political Science, Sociology and Social Work",
        ],
        contentTypes: ["Maps", "Statistics", "Government"],
        url: "https://byui.idm.oclc.org/login?url=https://byui.policymap.com/",
        moreInfo:
            "Perform analyses on areas as small as a neighborhood census block group up to the area of the entire US. Also allows the creation of custom regions for individual research &amp; study.Use to assist teaching and research on social sciences, public health, urban studies, real estate &amp; housing analysis, community &amp; economic developments, public administration, policy &amp; political science, education, business, economics, statistics, geography, etc.",
    },
    {
        name: "Pop Culture Studies",
        description:
            "<p>Access scholarly journals &amp; magazines that both analyze and contribute to popular culture; great for Social Sciences, History, Art, &amp; Liberal Arts courses.</p>",
        subjects: ["Art, History, Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPOP&u=byuidaho",
        moreInfo: "",
    },
    {
        name: "Popular Culture in Britain and America, 1950-1975",
        description:
            "<p>Popular Culture explores the dynamic period of social, political, and cultural change between 1950 and 1975.&nbsp;</p>",
        subjects: ["History, Music"],
        contentTypes: [
            "Images",
            "Video",
            "Primary Resource",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.rockandroll.amdigital.co.uk/",
        moreInfo:
            "Formerly knows as the Rock and Roll, Counterculture, Peace and Protest collection, this resource offers thousands of color images of manuscript and rare printed material as well as photographs, ephemera and memorabilia from this exciting period in our recent history.&nbsp;Explore the interactive chronology to learn a wealth of fascinating facts, take a tour of visual resources, and watch video footage to experience the spectacular sights and sounds of the period for yourself.&nbsp;Part of the AM Explorer collection.",
    },
    {
        name: "Post Register Online (Idaho Falls)",
        description:
            '<p>Access digital editions (past 30 days); plus access other southeast Idaho newspapers. For students, faculty, and staff of BYU-Idaho. Archives at &nbsp;<a href="http://infoweb.newsbank.com.byui.idm.oclc.org/resources/search/nb?p=AWNB&amp;t=state%3AID%21USA%2B-%2BIdaho%2Fpubname%3APRII%21Post%2BRegister%2B%2528Idaho%2BFalls%252C%2BID%2529" target="_blank">NewsBank</a>.</p><p>&nbsp;</p>',
        subjects: ["General"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://content.byui.edu/items/b22ae80b-6324-44da-8d64-fcb64588883d/1/?attachment.uuid=1f00f709-aafa-45bb-a2ee-836990ba74b2&attachment.stream=true",
        moreInfo: "To access past issues, go to NewsBank.\r\n&nbsp;",
    },
    {
        name: "Post War Europe: Refugees, Exile and Resettlement, 1945-1950",
        description:
            "<p>Primary sources for studying and understanding the challenges facing the European peoples in the aftermath of World War II.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/6ACO/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "This online archive covers the politics and administration of the refugee crisis in Europe after World War II as well as the day-to-day survival of the refugees themselves. From The National Archives of the UK and the Wiener Library, London.This resource is part of the Archives Unbound collection from Gale.&nbsp;",
    },
    {
        name: "PrivCo ",
        description:
            "<p>A premiere source for business and financial data on major, non-publicly traded corporations. <i><strong>Use BYU-I email to create account.&nbsp;</strong></i></p>",
        subjects: ["Business Management"],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://system.privco.com/academic",
        moreInfo:
            "Companies covered include family owned, private equity owned, venture backed, and international unlisted companies.",
    },
    {
        name: "Pronunciator",
        description:
            "<p>Real-time, life-like language instruction. Test your pronunciation in real time. Track your progress and measure your results.</p>",
        subjects: ["Languages and International Studies"],
        contentTypes: ["Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://learning.pronunciator.com/getstarted.php?library_id=8061",
        moreInfo:
            "Choose from over 300 languages, each with personalized courses, movies, music, and more. Courses taught in your choice of 144 home languages.Learn online on a desktop, laptop, or mobile device.Prefer to have Pronunciator set as a link on your phone/tablet's home screen? After creating an account, follow these steps:For iOS (Apple) devices:Open Safari (other web browsers may not work)Go to the Pronunciator app page:\r\nhttps://www.pronunciator.com/app/Select the Share icon (box with an up arrow)Navigate down the optionsSelect Add to Home ScreenAdjust the name if neededSelect AddFor Android devices:Open ChromeGo to the Pronunciator app page:\r\nhttps://www.pronunciator.com/app/Select the Menu icon (3 dots in upper right corner)Navigate down the optionsSelect Add to Home ScreenChoose a name if neededSelect Add&nbsp; (thanks to State Library of Oregon for steps)",
    },
    {
        name: "ProQuest databases",
        description:
            "<p>Select from the ProQuest databases offered at BYU-I to search across all major subject areas.</p>",
        subjects: ["General"],
        contentTypes: [
            "Abstract / Citation / Index",
            "eBooks",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/databases/index?accountid=9817",
        moreInfo:
            "Subjects covered include business, health &amp; medical, social sciences, arts &amp; humanities, education, science and technology, and religion.Resources include scholarly journals, newspapers, magazines, dissertations, working papers, and market reports.&nbsp;",
    },
    {
        name: "Psychological Warfare and Propaganda in World War II: Air Dropped and Shelled Leaflets and Periodicals ",
        description:
            "<p>View over 1,000 leaflets &amp; periodicals created and disseminated during World War II by Allied and other forces.</p>",
        subjects: ["History"],
        contentTypes: ["nan"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/4OPX/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "The majority of items in this collection were printed by the Allies then air or container dropped, or fired by artillery shell over German occupied territory. Many leaflets and periodicals have original publication codes and were printed in over 10 languages. Only shelled leaflets, Germans to Allies (115 items), are in English.&nbsp;This resource is part of the Archives Unbound collection from Gale.",
    },
    {
        name: "Psychology",
        description:
            "<p>Gives access to authoritative periodical content supporting research in all fields of psychology.</p>",
        subjects: ["Psychology"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPPC&u=byuidaho",
        moreInfo:
            "Covers fields of &nbsp;abnormal, biological, cognitive, comparative, developmental, personality, quantitative, social, and all areas of applied psychology.&nbsp;Researchers, psychologists, counselors, and behavioral scientists will discover relevant information from the thoughts, views, discoveries, and reports found in this comprehensive collection.&nbsp;",
    },
    {
        name: "Psychology and Behavioral Science Collection",
        description:
            "<p>Search journals covering emotional &amp; behavioral characteristics, psychiatry &amp; psychology, mental processes, anthropology, and observational &amp; experimental methods.</p><p>&nbsp;</p>",
        subjects: ["Psychology"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=pbh&authtype=sso&custid=s8406107",
        moreInfo: "",
    },
    {
        name: 'PsycINFO        --see "APA PsycINFO - EBSCOhost"',
        description: "",
        subjects: ["nan"],
        contentTypes: ["nan"],
        url: "https://byui.idm.oclc.org/login?url=https://libguides.byui.edu/az/databases?q=apa%20psycINFO%20-%20EBSCO",
        moreInfo: "",
    },
    {
        name: "PTSDpubs",
        description:
            "<p>Produced by the US Department of Veterans Affairs National Center for PTSD, this database provides global abstracts on PTSD &amp; trauma.</p>",
        subjects: ["Nursing, Psychology, Sociology and Social Work"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/ptsdpubs",
        moreInfo: "",
    },
    {
        name: "PubMed",
        description:
            "<p>Citations and abstracts for articles from biomedical literature, life science journals, &amp; books. Links to some full text in journals or PubMed Central.</p>",
        subjects: [
            "Animal and Food Science, Health Services, Human Performance and Recreation",
        ],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.ncbi.nlm.nih.gov/sites/entrez?otool=idbryulib",
        moreInfo: "",
    },
    {
        name: "PubMed Central",
        description:
            "<p>A full-text archive of biomedical and life science journal literature at the US National Institutes of Health's National Library of Medicine (NIH/NLM).</p>",
        subjects: [
            "Animal and Food Science, Health Services, Human Performance and Recreation, Nursing",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www.ncbi.nlm.nih.gov/pmc/",
        moreInfo: "",
    },
    {
        name: "Punch Historical Archive, 1841-1992",
        description:
            "<p>From 1841 to 1992 Punch was the world's most celebrated magazine of humor and satire; search the complete archives of this formative icon.</p>",
        subjects: ["Art, English, History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=PNCH&userGroupName=byuidaho",
        moreInfo:
            "Imitated, parodied and pirated from America to India and Japan, Punch played a central role in the formation of British identity - and how the rest of the world saw the British nation. Peruse its pages and find unique insight into the politics, culture, and society of the 19th and 20th centuries.&nbsp;This archive includes the complete issues of Punch, including special editions, prefaces, epilogues, indexes, and other specially produced material.",
    },
    {
        name: "Queen Victoria's Journals",
        description:
            "<p>The full collection of Queen Victoria's surviving diaries, from her childhood days throughout her complete reign.&nbsp;</p>",
        subjects: ["English, History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/qvj",
        moreInfo:
            "As well as detailing household and family matters, the journals reflect affairs of state, describe meetings with statesmen and other eminent figures, and comment on the literature of the day. In addition to her writings, Queen Victoria often included illustrations, which are included in full color.The journals represent a valuable primary source for scholars of nineteenth century British political and social history and for those working on gender and autobiographical writing.This collection is made possible through the work of the Bodleian Libraries, the Royal Archives, and ProQuest. Each page is being transcribed and re-keyed, allowing for improved searching.",
    },
    {
        name: "Rastafari Ephemeral Publications from the Written Rastafari Archives Project ",
        description:
            "<p>A collection of materials covering the Rastafari Movement from the early 1970s to the present, providing a historical time stamp &amp; commentary.</p>",
        subjects: ["English, History, Religious Education"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/8NJA/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "The Rastafari have traditionally used the Written Word to express the hopes and aspirations of the exiled ascendants of the kidnapped Africans who were formerly enslaved in the European colonies of the Western world.The value of these publications to African-Caribbean history is in the vast treasure of largely untapped source materials on the evolution of a major social and religious movement and its key figures from the twentieth century into the twenty-first century.This resource is part of the Archives Unbound collection from Gale.Contents of Written Rastafari Archives ProjectWRAP Scope &amp; Content OverviewWRAP Collection Timeline and InventoryVolume 1: Rasta Voice (1971 - 1985)Index- Rasta Voice Newsletter: 27 Issues/6 Supplements - 399 PagesVolume 2A: JAHUGLIMAN (1978 - 1983)Index- JAHUGLIMAN Magazine: Series 1 (Jamaica): 3 Issues - 136 PagesVolume 2B: JAHUG (1991 - 2000)Index- JAHUG Magazine: Series 2 (United Kingdom): 7 Issues - 428 PagesVolume 3: Rastafari Speaks (1980 - 2003)Index- Rastafari Speaks Newspaper Series 1 (Trinidad): (1980 - 1983) - 11 Issues -222 PagesIndex- Rastafari Speaks Newspaper Series 2 (Chicago): (1995 - 1997) - 4 Issues - 84 PagesIndex- Rastafari Speaks Newspaper Series 3 (Chicago): (2002 - 2003) - 4 Issues - 120 PagesVolume 4: Boboshanti Ephemerals (1982 - 2008)Index- Boboshanti Ephemerals: 28 Items - 260 PagesVolume 5: Rastafari International News (1987 - 1989)Index- Rastafari International News Newspaper: 8 Issues - 90 PagesVolume 6: Rasta Vibrations (1993 - 1997)Index- Rasta Vibrations Magazine: 4 Issues - 128 Pages / 1 Booklet - 40 PagesVolume 7A:Reggae Roots (1991 - 1995)Index- Reggae Roots Magazine Series 1:14 Issues - 612 PagesVolume 7B: Reggae Roots International (1996 - 1998)Index- Reggae Roots International Newspaper Series 2: 7 Issues - 196 PagesVolume 7C: Rootz Reggae &amp; Kulcha (1998 - 2014)Index- Rootz Reggae &amp; Kulcha Magazine Series 3: 34 Issues - 1336 Pages/1 Booklet - 40 PagesVolume 8: Thunder Magazine (2010 - 2014)Index- Thunder Magazine: 4 Issues - 142 Pages&nbsp;",
    },
    {
        name: "Readers' Guide Retrospective (1890-1982)",
        description:
            "<p>Indexing of general-interest periodical articles published in the U.S. from 1890 through 1982, the ultimate index of subjects in the popular press.</p>",
        subjects: ["History"],
        contentTypes: ["Abstract / Citation / Index", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=rgr&authtype=sso&custid=s8406107",
        moreInfo:
            'A digital archive of the Readers\u2019 Guide to Periodical Literature, the ultimate index of subjects in the popular press. Hailed by Library Journal as one of the "50 Best Reference Sources for the Millennium," it offers all information from 44 Readers\u2019 Guide annuals.Access the full-text of many articles thru BYU-Idaho\'s other resources.',
    },
    {
        name: "Readex AllSearch",
        description:
            "<p>A primary source archive that contains centuries of primary sources: books, pamphlets, newspapers, government documents, and more.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/apps/readex/?p=ARDX",
        moreInfo:
            "Databases included are:America's Historical ImprintsAmerica's Historical NewspapersHispanic American NewspapersAmerican State PapersForeign Broadcast Information Service (FBIS) Daily ReportsHouse and Senate Journals, Series ISenate Executive JournalsU.S. Congressional Serial Set",
    },
    {
        name: "Recreational Sports & Therapy Journals",
        description:
            '<p>Access three journals covering recreational sports &amp; therapy research and news. <a href="http://byui.idm.oclc.org/login?url=https://www.wmpllc.org/ojs/index.php/ajrt/index">American Journal of Recreation Therapy</a> | <a href="https://byui.idm.oclc.org/login?url=https://journals-sagepub-com.byui.idm.oclc.org/loi/rsj">Recreational Sports Journal </a>| <a href="https://byui.idm.oclc.org/login?url=https://js-sagamorepub-com.byui.idm.oclc.org/index.php/trj/index">Therapeutic Recreation Journal</a>.</p>',
        subjects: ["Human Performance and Recreation"],
        contentTypes: ["Full-Text Articles"],
        url: "",
        moreInfo:
            "American Journal of Recreation Therapy provides recreational therapists the latest research, techniques and advances in the use of recreational interventions.Recreational Sports Journal aims to provide a source of empirical, theoretical, and applied research to the fields of recreational sports.Therapeutic Recreation Journal is a forum for research and discussion on the needs of person with disabilities, challenges facing the professions, new types of services, and receiving therapeutic recreation services.",
    },
    {
        name: "RefWorks",
        description:
            "<p>RefWorks helps users in the research process to compile resources, store citations, and create bibliographies. Use BYU-I email to create account.</p>",
        subjects: ["General"],
        contentTypes: ["Interactive Learning"],
        url: "https://byui.idm.oclc.org/login?url=https://refworks.proquest.com/",
        moreInfo:
            "RefWorks is a web-based bibliography and database manager that allows users to create their own personal database by importing references from text files or online databases and other various sources. Users then use these references in writing papers; RefWorks will automatically format the paper and the bibliography in seconds.",
    },
    {
        name: "Regional Business News",
        description:
            "<p>Comprehensive full text coverage for over 80 regional business publications covering metropolitan and rural areas within the United States.</p>",
        subjects: ["Business Management, Communications, Economics, Marketing"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=bwh&authtype=sso&custid=s8406107",
        moreInfo: "",
    },
    {
        name: "Religion and Philosophy",
        description:
            "<p>Search journals on multiple religious &amp; philosophical topics; explore the impact of religion on literature, arts, &amp; language throughout history.</p>",
        subjects: ["Humanities and Philosophy, Religious Education"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPRP&u=byuidaho",
        moreInfo:
            "Updated daily from a comprehensive collection of pertinent periodicals, this library resource supports a broad range of topics from theological approaches to social issues.&nbsp;",
    },
    {
        name: "Religion and Philosophy Collection ",
        description:
            "<p>Searches three EBSCO databases at once: Religion, Philosophy Collection, and ATLA Religion.</p><p>&nbsp;</p>",
        subjects: ["Humanities and Philosophy, Religious Education"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=rlh&authtype=sso&custid=s8406107",
        moreInfo:
            "Provides extensive coverage of such topics as world religions, major denominations, biblical studies, religious history, epistemology, political philosophy, philosophy of language, moral philosophy, and the history of philosophy.&nbsp;With more than 300 full-text journals, this is a helpful tool for researchers and students of theology and philosophical studies.&nbsp;",
    },
    {
        name: "Religions of America",
        description:
            "<p>Discover the history and unique character of religious movements that originated in the United States and Canada in the 1800-1900s.</p>",
        subjects: ["Religious Education, Sociology and Social Work"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/ROAM?u=byuidaho",
        moreInfo:
            "Religions of America traces the history and unique character of religious movements that originated in or were re-shaped by the United States during the nineteenth and twentieth centuries. The collection pays especially close attention to America's unique role as a birthplace for new religious movements, especially after World War II. This collection includes materials from a variety of sources in an effort to capture the varieties of the American religious experience.",
    },
    {
        name: "Religious Education Archive Image Collection",
        description:
            "<p>Photographs, drawings, and paintings of LDS historic sites, Holy Land sites, and people in LDS Church history and doctrine. Curated by BYU Library.</p>",
        subjects: ["History, Religious Education"],
        contentTypes: ["Images"],
        url: "https://byui.idm.oclc.org/login?url=https://lib.byu.edu/digital/relarchive/",
        moreInfo:
            "Religious Education Image Archive contains approximately 5,000 images pertaining to the doctrines and history of the Church of Jesus Christ of Latter-day Saints. Images include photographs, drawings, and paintings of LDS historic sites, Holy Land sites, and significant people in Church history and doctrine",
    },
    {
        name: "Religious Studies Center",
        description:
            "<p>Enjoy publications of the Religious Studies Center, the research and publication arm of BYU Religious Education.&nbsp;</p>",
        subjects: ["nan"],
        contentTypes: ["Video", "Audio", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://rsc.byu.edu/",
        moreInfo:
            "Access the Religious Educator Journal available with a one-year embargo; eBooks (some by purchase only); podcasts and conference proceedings.Audio and Video include:&nbsp;Y Religion PodcastRoundtable DiscussionsChurch History SymposiumSidney B. Sperry SymposiumHistory of the Religious Studies Center",
    },
    {
        name: "Research Library",
        description:
            "<p>A multidisciplinary resource featuring full-text scholarly journals, professional and trade publications, and magazines covering multiple subjects. &nbsp;</p>",
        subjects: [
            "Art, Business Management, English, General, Health Services, History, Home and Family, Human Performance and Recreation, Interdisciplinary Studies, Music, Theatre",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/pqrl?accountid=9817",
        moreInfo:
            "ProQuest Research Library provides one-stop access to thousands of full-text periodicals from one of the broadest, most inclusive general reference databases ProQuest has to offer. Search from a highly-respected, diversified mix of scholarly journals, professional and trade publications, and magazines covering over 150 subjects and topics.&nbsp;&nbsp;",
    },
    {
        name: "RILM Abstracts of Music Literature ",
        description:
            "<p>A comprehensive bibliography of writings about music, featuring bibliographic citations, abstracts, and indexing from around the world.</p>",
        subjects: ["Music"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ram&authtype=sso&custid=s8406107",
        moreInfo:
            "&nbsp;RILM covers traditional music, popular music, jazz, classical music, and related musicology subjects. Coverage is from the 1800s to the present.In addition to journal articles, RILM covers a variety of publications and media types including:Books and monographsBibliographiesCataloguesCritical editions of musicDigital mediaDissertationsElectronic resourcesEssay collectionsEthnographic recordingsFilms and videosIconographiesReference materialsReviewsSound recordingsTechnical drawings of instruments",
    },
    {
        name: "RISM Catalog",
        description:
            "<p>The most comprehensive documentation for music manuscripts and printed music from 1600-1800 (and beyond).</p>",
        subjects: ["Music"],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Musical Scores",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://opac.rism.info/index.php?id=4",
        moreInfo:
            "Independent national working groups at libraries and archives in many countries worldwide catalog historical musical sources: music prints, music manuscripts, libretti, and theoretical writings about music. The results are edited and published by RISM.The R\u00e9pertoire International des Sources Musicales (RISM) is an international, non-profit organization with the aim of comprehensively documenting extant musical sources (including printed manuscripts &amp; music, works on music theory, and libretti) anywhere in the world.&nbsp;Cataloging musical sources is financed and carried out by various national and international institutions.&nbsp;",
    },
    {
        name: "Romanticism: Life, Literature and Landscape",
        description:
            "<p>Discover the working methods of Romantic poets and trace the evolution of celebrated verse with this collection from the Wordsworth Trust.&nbsp;</p>",
        subjects: ["Art, English"],
        contentTypes: [
            "Images",
            "Maps",
            "Primary Resource",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.romanticism.amdigital.co.uk/",
        moreInfo:
            "This digital resource offers unparalleled access to the single largest collection of working notebooks, verse manuscripts and correspondence of William Wordsworth and his fellow writers anywhere in the world. With access to the annotated full manuscripts of such notable works as The Prelude and Michael, or Samuel Taylor Coleridge\u2019s Dejection: An Ode, this project is unrivalled in its content and scope. &nbsp;The collection also has a large gallery of paintings, sketches, and prints drawn from the Wordsworth Trust's fine art collection. In addition to portraits of William Wordsworth, his family and contemporaries, the gallery includes stunning landscape representations of the Lake District and other locations that inspired, and continue to inspire, poets, writers and artists.Researchers and students can trace the interactions of key literary and political figures of the eighteenth and nineteenth century through the mass of personal correspondence and witness the close circles in which contemporary authors and artists moved and how they influenced each other\u2019s work.&nbsp;All of the resources are digitized in color and include: verse manuscripts, printed manuscripts, prose manuscripts, printed verse, correspondence, diaries, travel journals, autograph albums, guide books, fine art and maps.This resource is part of the AM Explorer collection.",
    },
    {
        name: "Roper iPOLL",
        description:
            "<p>Search data from public opinion polls conducted in the U.S. covering thousands of topics. Searchable by keyword, topic, date, or source. Available integration with Canvas.</p>",
        subjects: [
            "Business Management, Communications, Economics, Health Services, History, Political Science, Sociology and Social Work",
        ],
        contentTypes: ["Statistics"],
        url: "https://byui.idm.oclc.org/login?url=https://ropercenter.cornell.edu/ipoll",
        moreInfo:
            "Roper iPoll is the largest collection of poll data anywhere\u2014from 1935 to present. Contains data from U.S. and international polling firms with broad topical coverage of opinions and behavior on social issues, politics, pop culture, international affairs, and more. Questions, charts, demographic crosstabs, and dataset downloads are immediately available.&nbsp;Provided by the Roper Center for Public Opinion Research at Cornell University,",
    },
    {
        name: "Routledge Encyclopedia of Philosophy",
        description:
            "<p>Articles by and about major philosophers of all periods. This version features regular updates to reflect the most current philosophical thinking.</p>",
        subjects: ["Humanities and Philosophy"],
        contentTypes: ["Primary Resource", "Reference", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.rep.routledge.com/",
        moreInfo: "",
    },
    {
        name: "Routledge Handbooks Online",
        description:
            "<p>Articles by leading scholars providing an overview of classic, current, and future trends in the Social Sciences &amp; Humanities, plus theory, method, &amp; debates.</p>",
        subjects: [
            "Animal and Food Science, Biology, Business Management, Chemistry, Communications, Computer Science and Electrical Engineering, English, General, Geography, Health Services, History, Humanities and Philosophy, Languages and International Studies, Mechanical & Civil Engineering, Physics, Political Science, Psychology, Sociology and Social Work",
        ],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.taylorfrancis.com/search?context=rho&sortBy=relevance&isLicensed=true&fullyOABook=true&key=&openAccess=true&OAChapter=true",
        moreInfo:
            "Collection includes classic and current research, theory and method, and current debates covering a variety of subject areas including business, chemistry, communication, education, engineering, history, humanities, and social sciences.&nbsp;Library does not have access to all titles, but a selection; search is set up to filter for owned and open access content.",
    },
    {
        name: "Sabin Americana: History of the Americas, 1500-1926",
        description:
            "<p>Books, pamphlets, etc. on the Americas from 1500-1926, providing original accounts of exploration, trade, colonialism, Native Americans, &amp; more.</p>",
        subjects: ["Economics, English, History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=SABN&u=byuidaho",
        moreInfo:
            "This collection draws from Joseph Sabin's famed nineteenth century bibliography Bibliotheca Americana: A Dictionary of Book relating to America from its Discovery to the Present Time. Offering a perspective on life in the western hemisphere, its coverage encompasses the arrival of the Europeans on the shores of North America in the late fifteenth century to the first decades of the twentieth century.&nbsp;It covers more than 400 years and pulls from more than 65,000 volumes in North, Central, &amp; South America and the West Indies. This collection highlights the society, politics, religious beliefs, culture, contemporary opinions, and momentous events of the period through its sermons, political tracts, newspapers, books, pamphlets, maps, legislation, literature, and more.",
    },
    {
        name: "Sage Journals",
        description:
            "<p>Full-text access to hundreds of journals in Business, Humanities, Social Sciences, Science, Technology, and Medicine from SAGE Publications.</p>",
        subjects: [
            "Home and Family, Nursing, Psychology, Sociology and Social Work",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://online.sagepub.com/",
        moreInfo: "",
    },
    {
        name: "Salem Press",
        description:
            "<p>A broad range of e-books covering literature, history, science, health, and career topics published by Salem Press, H.W. Wilson, and Grey House.&nbsp;</p>",
        subjects: [
            "English, General, Health Services, History, Nursing, Psychology",
        ],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://online.salempress.com",
        moreInfo: "",
    },
    {
        name: "San Francisco Chronicle",
        description:
            "<p>Read through first-hand accounts of the politics, society, and events of San Francisco and the surrounding area; 1865-1922.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpsfchronicle/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Sanborn Digital Maps 1867-1970",
        description:
            "<p>Sanborn fire insurance maps provide maps of more than 12,000 American towns and cities; useful for urban planners, genealogists, geographers, etc.</p>",
        subjects: ["Family History, Geography, History"],
        contentTypes: ["Maps", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://digitalsanbornmaps.proquest.com/",
        moreInfo:
            "These maps are valuable historical tools for urban specialists, social historians, architects, geographers, genealogists, local historians, planners, environmentalists and anyone who wants to learn about the history, growth, and development of American cities, towns, and neighborhoods.In electronic form, Sanborn Maps take on much improved value over the microfilm versions of the same maps, allowing for greater flexibility of use and improved viewing possibilities. Users have the ability to easily manipulate the maps, magnify and zoom in on specific sections.",
    },
    {
        name: "Schlager Digital Library",
        description:
            "<p>A collection of over 2,500 primary sources covering world history, ethnic and gender studies, American government, and religious studies.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://library.schlagergroup.com/",
        moreInfo:
            "Together, the publications include more than 2,500 notable and often-studied primary documents, from government documents such as laws, legal codes, royal decrees, and court opinions to speeches, letters, and even visual sources such as paintings, illustrations, and photographs. All eBooks and articles/documents are offered DRM-free, with unlimited user access and unlimited PDF downloads of all titles.See also tutorial.",
    },
    {
        name: "Science (AAAS)",
        description:
            "<p><i>Science </i>is a leading outlet for scientific news, commentary, and cutting-edge research. Full-text access via the publisher, 1880s-present.</p><p>&nbsp;</p>",
        subjects: ["Biology, Chemistry, Physics"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://science.sciencemag.org/",
        moreInfo: "",
    },
    {
        name: "Science in Context",
        description:
            "<p><i>Science In Context </i>showcases how scientific disciplines relate to real-world issues ranging from bacteria to obesity and weather.&nbsp;</p>",
        subjects: ["Biographies, Biology, Chemistry, Health Services, Physics"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=SCIC&u=byuidaho",
        moreInfo:
            "This resource merges Gale's reference content with national and global full-text magazines, academic journals, news articles, experiments, images, videos, audio files, and links to vetted websites - all organized into a user-friendly portal experience.&nbsp;&nbsp;",
    },
    {
        name: "ScienceDirect ",
        description:
            "<p>Explore scientific, technical, and medical research in over 620 full-text journals from Elsevier. Years of coverage vary by journal.</p>",
        subjects: [
            "Animal and Food Science, Applied Plant Science, Biology, Computer Science and Electrical Engineering, Geology, Health Services, Home and Family, Human Performance and Recreation, Mathematics, Mechanical & Civil Engineering, Nursing, Psychology, Sociology and Social Work",
        ],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www.sciencedirect.com",
        moreInfo: "",
    },
    {
        name: "Scopus",
        description:
            "<p>Abstracts &amp; citations for scientific journals, books, &amp; more covering research across all scientific and technical disciplines. Can register with BYU-I email.&nbsp;</p>",
        subjects: [
            "Animal and Food Science, Applied Plant Science, Art, Automotive Engineering / Technology, Biology, Business Management, Chemistry, Economics, General, Geography, Geology, Health Services, Humanities and Philosophy, Nursing, Physics",
        ],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://www.scopus.com",
        moreInfo:
            'Many of the abstracts link to full-text documents."Scopus provides smart tools to track, analyze and visualize research, empowering you to advance your research beyond the text ."',
    },
    {
        name: "Scottish Women Poets of the Romantic Period",
        description:
            '<p>Contains 60 volumes of Romantic Poetry, extensive contemporary critical reviews, as well as material specially written for this database by leading scholars.</p><p>Project commissioned by Alexander Street Press. Part of the <a href="https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion">ProQuest Literature Online </a>series (LION)</p>',
        subjects: ["Art, English, Humanities and Philosophy"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www-proquest-com.byui.idm.oclc.org/lion/docview/2343193964?accountid=9817",
        moreInfo:
            "Scottish Women Poets of the Romantic Period is a definitive collection organized by Nancy Kushigian of the University of California along with Davis and Stephen Behrendt of the University of Nebraska.&nbsp;The collection 60 volumes of poetry, essays, and reviews amount to over 9,000 pages.",
    },
    {
        name: "Scribner Writer Series",
        description:
            "<p>Access original, scholar-signed essays on the lives and works of authors from around the world and from all time periods.&nbsp;</p>",
        subjects: ["Biographies, English"],
        contentTypes: ["Full-Text Articles"],
        url: "http://go.galegroup.com/ps/start.do?p=G-Scrib&u=byuidaho&authCount=1",
        moreInfo:
            "Entries include concise essays, citations, and biographical information that places the author and their works in personal and historical context.&nbsp;",
    },
    {
        name: "Scripture Citation Index",
        description:
            "<p>An index linking scriptures to places they are cited in general conference talks, Journal of Discourses, and Teachings of the prophet Joseph Smith.</p><p>&nbsp;</p>",
        subjects: ["General, Religious Education"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "http://scriptures.byu.edu/",
        moreInfo: "",
    },
    {
        name: "Seventeenth and Eighteenth Century Burney Newspapers Collection",
        description:
            "<p>The <i>Burney Collection</i> represents the largest single collection of 17th &amp; 18th century English news media.</p>",
        subjects: ["History, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=BBCN&u=byuidaho",
        moreInfo:
            "This collection includes more than 1,270 titles: covering pamphlets, Parliamentary debates and proclamations, coffee house newsbooks, and newspapers from the period. Complements the Nichols collection.",
    },
    {
        name: "Seventeenth and Eighteenth Century Nichols Newspapers Collection",
        description:
            "<p>The <i>Nichols Collection</i> London newspapers, broadsheets, and pamphlets collected by J. Nichols, covering the years 1672 to 1737.</p>",
        subjects: ["Geography, History, Languages and International Studies"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/NICN?u=byuidaho",
        moreInfo:
            "17th and 18th Century Nichols Newspapers Collection features London newspapers and pamphlets gathered by antiquarian and printer John Nichols. This collection, sourced from the Bodleian Library, spans the years 1672 to 1737.&nbsp;Complements the titles and issues found in the Burney Collection Newspapers.",
    },
    {
        name: "Shakespeare in Performance",
        description:
            "<p>Go behind the scenes and explore how Shakespeare\u2019s plays have been interpreted by theatre companies, actors and directors around the world. &nbsp;</p>",
        subjects: ["English, Theatre"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.shakespeareinperformance.amdigital.co.uk",
        moreInfo:
            "This resource features the world-famous prompt book collection at the Folger Shakespeare Library. These prompt books tell the story of Shakespeare\u2019s plays as they were performed in theatres throughout Great Britain, the United States and internationally, between the seventeenth and twentieth centuries.&nbsp;A prompt book is the main copy of a production script. They include personal notes, sketches and cues for lighting and music, from set design and costume to music and acting.&nbsp;Researchers can follow how each individual production unfolded; see what amendments were made to the text and stage management over the years; and explore the influences and connections between different productions of the same play. &nbsp;This remarkable resource will transform understanding of how Shakespeare\u2019s plays have been interpreted and performed since they were written. &nbsp;This resource is part of the AM Explorer collection.",
    },
    {
        name: "Shakespeare Quarterly",
        description:
            "<p>A leading journal in Shakespeare studies, published by the Oxford Press for the Folger Shakespeare Library, with essays, notes, and reviews. 5 yr. embargo.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://www.jstor.org/journals/00373222.html",
        moreInfo:
            "The essays span the field, including scholarship about new media and early modern race, textual and theater history, ecocritical and posthuman approaches, psychoanalytic and other theories, and archival and historicist work.&nbsp;The mission of the journal is to present the best scholarship on Shakespeare from his own period to the present moment.&nbsp;",
    },
    {
        name: "Short Story Index ",
        description:
            "<p>Index to English short stories that have been published in anthologies and selected periodicals.</p>",
        subjects: ["English"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=ssx&authtype=sso&custid=s8406107",
        moreInfo:
            "H.W. Wilson indexes all the important collections and anthologies of short stories that are published each year, capturing from over 200 monographs each year, compromising 3,000-4,000 chapters/stories.All literary genres are covered. Search by author, genre, or literary figure.",
    },
    {
        name: "SIRS Issues Researcher ",
        description:
            '<p>Explore complex social issues with this curated, balanced database with documents and graphics that help researchers see various points of view. <a href="https://byui.idm.oclc.org/login?url=https://www.proquest.com/sirsissuesresearcher/index?accountid=9817&amp;parentSessionId=h%2B4kXQ76RlgT8K0q4H8C4dI92hCYAkOB%2FVrL8gsDgJk%3D">Legacy search site</a></p>',
        subjects: [
            "Business Management, Communications, General, Health Services, Political Science, Sociology and Social Work",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://explore.proquest.com/sirsissuesresearcher/home?accountid=9817",
        moreInfo:
            "Find analysis and opinions covering hundreds of topics garnered from thousands of sources.Explore newspaper and magazine articles, graphics, charts, maps, primary sources, government documents, websites, timelines, multimedia resources, and critical thinking questions that will help deepen comprehension and broaden perspectives.&nbsp;Issues covered include: Business, Consumerism, Economics, Money, Work, Environment, Earth, Science, Energy, Habitat, Pollution, Population, Family, Aging, Death, Dying, Family, Youth, Global Issues, Defense, Government, History, Human Rights, Third World, World Affairs, Health, Aging, AIDS, Food, Mental Health, Substance Abuse, Human Relations ,Communication, Ethics, Ethnic Groups, Privacy, Criminal Justice, Education, Religion, Sports, Science, Applied Science, Life Science, Medical Science, Technology, Transportation, Congressional Committees, Country Profiles, Departments, Agencies, U.S. Supreme Court, Literature, Philosophy, Education, Energy, Justice, Executive Branch, Federal Elections, Intergovernmental Relations, Foreign Aid, Treaties, Agreements, Branches, Intelligence, POWs, MIAs, Applied Sciences, Medical Sciences, Physical Sciences, Historic Preservation, Interior Design, Architecture, Design, Culture, Festivals, Museums, Mythology, Folklore, Popular Culture, Biography, Literary Criticism, Nonfiction, Poetry, World Literature, Multimedia, Animation, Foreign Film, Radio, Music, Classical, Criticism, Music Industry, Rock, Roll, Performing Arts, Choreography, Comedy, Musical Theater, Opera, World Theater, Philosophy, Religion, Religious Communities, Social Issues, Visual Arts, Art History, Criticism, Collections, Painting, Photography, Politics, Art, SculptureLegacy search site",
    },
    {
        name: "Sixties: Primary Documents and Personal Narratives 1960 - 1974",
        description:
            "<p>Explore the era of the Sixties through various primary sources and scholarly commentary. NOTE: Some content might be offensive.</p>",
        subjects: ["Biographies, History, Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/sixt",
        moreInfo:
            "This collection brings the 1960s alive through diaries, letters, autobiographies and other memoirs, written and oral histories, manifestos, government documents, memorabilia, and scholarly commentary.&nbsp;With 125,000 pages of text and 50 hours of video at completion, this still-growing collection provides valuable materials for students and scholars researching this important period in American history, culture, and politics. &nbsp;",
    },
    {
        name: "Slavery and Anti-Slavery: A Transnational Archive",
        description:
            "<p>A collection devoted to the transatlantic history of slavery (1600s-1800s) through books, manuscripts, court records, and serials.&nbsp;</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=SAS&u=byuidaho",
        moreInfo:
            "The four parts to this collection cover:Debates over Slavery and AbolitionSlave Trade in the Atlantic WorldThe Institution of SlaveryAge of EmancipationFocused originally on the United States in 2005, the collection was revised to include more international coverage.",
    },
    {
        name: "Smithsonian Collections Online: World's Fairs and Expositions",
        description:
            "<p>A collection of documents and ephemera from the world's fairs of 1840-1923, capturing the spirit, design, and innovations that influenced the world.</p>",
        subjects: [
            "Art, Geography, History, Languages and International Studies, Music, Theatre",
        ],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/SMIT?u=byuidaho",
        moreInfo: "",
    },
    {
        name: "Smithsonian Global Sound for Libraries",
        description:
            "<p>Virtual encyclopedia of the world's musical and aural traditions. Produced in partnership with Smithsonian Folkways Recordings.</p>",
        subjects: ["Music"],
        contentTypes: ["Audio"],
        url: "https://byui.idm.oclc.org/login?url=https://glmu.alexanderstreet.com",
        moreInfo:
            "The collection provides educators, students, and interested listeners with an unprecedented variety of online resources that support the creation, continuity, and preservation of diverse musical forms.",
    },
    {
        name: "Social and Cultural History: Letters and Diaries Online ",
        description:
            "<p>This resource brings together the voices of ordinary men &amp; women from all walks of life sharing their unique perspectives on events of their days.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/lado",
        moreInfo:
            "A comprehensive archive of social memory, this collection allows researchers to experience hundreds of years of history through thousands of private writings and personal narratives, each sharing thoughts on life, love, faith, politics, business, and countless personal events.Brought together under a unified search interface is all the premium content from the following Alexander Street individual collections:&nbsp;North American Women\u2019s Letters and DiariesManuscript Women\u2019s Letters and Diaries&nbsp;British and Irish Women\u2019s Letters and DiariesThe American Civil War: Letters and DiariesNorth American Immigrant Letters, Diaries, and Oral HistoriesBlack Thought and Culture&nbsp;",
    },
    {
        name: "Social Theory",
        description:
            "<p>Documents that explore the complexities and interpret the nature of social behavior and organization.&nbsp;</p>",
        subjects: ["Sociology and Social Work"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/soth",
        moreInfo:
            "Particular care has been taken to index this material so that it can be searched more thoroughly than ever before.&nbsp;This final release features more than 150,000 pages of content by such major theorists as Theodor Adorno, Jean Baudrillard, Simone de Beauvoir, Charlotte Perkins Gilman, \u00c9mile Durkheim, Michel Foucault, J\u00fcrgen Habermas, Robert Merton, Dorothy E. Smith , and Talcott Parsons.",
    },
    {
        name: "Something About the Author",
        description:
            "<p>Thousands of illustrated biographical profiles of authors and illustrators for children's and young adult literature.</p>",
        subjects: ["Biographies, English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=SATA&u=byuidaho",
        moreInfo:
            "Displays personal data, addresses, career, awards and honors, writings, sidelights, adaptations, additional sources and more.",
    },
    {
        name: "Southeast Idaho Oral Histories",
        description:
            "<p>Transcribed oral histories shared by residents of Southeast Idaho. Includes histories of the area, individuals, the Teton flood, and more.</p>",
        subjects: ["History"],
        contentTypes: ["Audio", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://archives.byui.edu/s/public/page/oral-histories",
        moreInfo: "",
    },
    {
        name: "Southern Life, Slavery, and the Civil War",
        description:
            '<p>Features petitions on race &amp; slavery, state laws on slavery, &amp; records from Southern Plantations, Civil War, Reconstruction Era, &amp; industrial slavery.</p><p><a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&amp;action=Southern%20Life,%20Slavery,%20and%20the%20Civil%20War">Read more</a> |&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=advanced_ui&amp;module=52143&amp;module=395">Search</a>&nbsp;| <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&amp;mid=395#395">Browse Collections</a></p>',
        subjects: ["History, Political Science, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=whatsin&action=Southern%20Life,%20Slavery,%20and%20the%20Civil%20War",
        moreInfo:
            "Slavery and the Law features petitions on race, slavery, and free blacks that were submitted to state legislatures and county courthouses between 1775 and 1867. The petitions document the realities of slavery at the most immediate local level and with amazing candor. Slavery and the Law also includes the important State Slavery Statutes collection, a comprehensive record of the laws governing American slavery from 1789-1865.Read more |&nbsp;Search&nbsp;| Browse Slavery &amp; the Law | Browse Slavery, the Slave Trade, and Law and OrderPart of ProQuest's History Vault",
    },
    {
        name: "Southern Literary Messenger: Literature of the Old South",
        description:
            "<p>Peruse the pages of The <i>Southern Literary Messenger;</i> one of the most successful and influential literary magazines in the South.&nbsp;</p>",
        subjects: ["English"],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/4KOP/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "Founded by Thomas Willis White (and edited for a time by Edgar Allan Poe).&nbsp;Date Range: 1834-1864.&nbsp;This resource is part of the Archives Unbound collection from Gale.",
    },
    {
        name: "Special Reports",
        description:
            "<p>News articles focusing on topics of current interest. Includes content from around the world to provide a global perspective. Updated daily.</p><p>**** <i>Site under construction 10/12/23 for \u201capproximately 6 more months\u201d </i>****</p><p>&nbsp;</p>",
        subjects: ["General"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb.newsbank.com/iw-search/we/Static/?p_product=SR&p_theme=current&p_action=home",
        moreInfo: "",
    },
    {
        name: "Specialized Encyclopedias ",
        description:
            "<p>Links to specialized encyclopedias available in the BYU-I McKay Library. Arranged by topic.</p>",
        subjects: ["General"],
        contentTypes: ["Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://libguides.byui.edu/encyclopedias",
        moreInfo: "",
    },
    {
        name: "Springer Nature Link",
        description:
            "<p>Online access to millions of high-quality Science, Technology, and Medicine journals; e-books; and the entire Springer Protocols collection.</p>",
        subjects: [
            "Biology, Health Services, Home and Family, Mathematics, Mechanical & Civil Engineering",
        ],
        contentTypes: ["eBooks", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://link.springer.com",
        moreInfo: "",
    },
    {
        name: "State Papers Online [British]",
        description:
            "<p>State Papers Online provides access to the British State Papers, predominately the papers of the Secretary of State, for the Tudor era 1509-1603.</p><p>&nbsp;</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/SPOL?u=byuidaho",
        moreInfo:
            "The collection covers a wide range of documents, subjects, and importance, they concern internal English/British affairs and administration of the country, and foreign affairs, marriage alliances, treaties and wars.&nbsp;Here are original letters written during the Tudor era by Henry VIII and subsequent monarchs, ministers, officials and clerks, together with those sent from European rulers and their officials, and the people of Britain of all social levels.&nbsp;Part I is the complete series of State Papers Domestic for the Tudor era, encompassing every facet of early modern government including social and economic affairs, law and order, religious policy, crown possessions and intelligence.&nbsp;Part II reunites the Foreign, Scotland, Borders and Ireland papers with the Registers ('Minutes') of the Privy Council for the whole of the Tudor period. Together they give comprehensive coverage of international diplomacy, colonial policy, commercial and maritime law, trade and industry and naval and military policy.Note: Documents are unfortunately not searchable; browse by volume, page, and date.",
    },
    {
        name: "Statista",
        description:
            '<p>Statistical insights and facts from over 170 industries and 150 countries. Get statistics, studies, and reports in seconds in response to your query. App: <a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.statista.dailydata">Android</a> &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/statista-daily-data/id1671030438">iOS</a></p>',
        subjects: [
            "Business Management, Communications, Finance, General, Mathematics",
        ],
        contentTypes: ["Statistics", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.statista.com/",
        moreInfo: "Statista; global statistics database; 22,500+ sources; 170+ industries; charts; infographics; reports; forecasts; market analyses; business; finance; consumer behavior; health; technology; politics; media; government data; market research; trade publications; industry reports; research; strategy; insights; trends; comparisons; decision-making.",
    },
    {
        name: "Sunday Times Historical Archive ",
        description:
            "<p>World class journalism spanning more than 180 years, including news, society, sports, arts, and politics.</p>",
        subjects: ["General, History"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/STHA?u=byuidaho",
        moreInfo:
            'The Sunday Times launched its storied run on 20 October 1822, promising to instill "an invigorating spirit" in its readership, and to uphold the freedom of the press against those "emperors, kings, and their ministers" who would stifle it. Since that first issue, the newspaper has consistently provided thoughtful analysis and commentary on the week\'s news and society at large. Theater, sports, crime, and politics\u2014all meet in its pages in an abundance of colorful detail.Though they share a hometown and came under common ownership in 1966, The Sunday Times remains a separate and distinct paper from the Times with its own perspective. World class journalism that spans over 180 years.&nbsp;',
    },
    {
        name: "SUR, 1931-1992",
        description:
            "<p>The complete run of the Latin magazine, featuring fiction, poetry, philosophy, criticism, and history. Written by leading figures, primarily from Latin America.</p><p>&nbsp;</p>",
        subjects: ["History, Languages and International Studies"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/8RPY/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "Fully indexed, the collection includes images of the complete magazine, including covers, photographs, and advertisements.Contributors included leading figures in philosophy, literature, and history from Latin America plus some from North America and Western Europe.The collection also features a set of images of manuscripts from the first issue as well as an unpublished set of letters by Victoria Ocampo, the founder and sponsor of the magazine.This resource is part of the Archives Unbound collection from Gale.",
    },
    {
        name: "Swank Digital Campus",
        description:
            '<p>Allows legal viewing of course-assigned films inside and outside the classroom. (Select SAML login for school login). Mobile app available: &nbsp;&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/search?q=swank+media+player&amp;c=apps">Android</a> &nbsp; iOS (no app--view in Safari)</p>',
        subjects: ["General"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://digitalcampus.swankmp.net/byuidaho279946/",
        moreInfo:
            "Movies in Swank are selected for curriculum support.Mobile app available: &nbsp;&nbsp;Android &nbsp; &nbsp;(iOS - viewable in the Safari browser) &nbsp; &nbsp;&nbsp;",
    },
    {
        name: "SWOT Analyses in Business Source Premier",
        description:
            "<p>A SWOT Analysis provides detailed information about a company\u2019s strengths, weaknesses, opportunities, and threats.</p>",
        subjects: ["Business Management, Economics, Finance, Marketing"],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://research.ebsco.com/c/m65exo/topics/categories/TOPIC-0000156095?isDashboardExpanded=true",
        moreInfo:
            "The SWOT Analysis data indexed in EBSCOhost is provided by MarketLine, a leading provider of online database and analysis services for key industry sectors.&nbsp;MarketLine provides unbiased expert analysis and in-depth forecasts for seven industry sectors:AutomotiveConsumer MarketsEnergyFinancial ServicesPharmaceuticals and HealthcareTechnologyTransport and LogisticsFor more information about SWOT and MarketLine, please visit http://marketline.com.",
    },
    {
        name: "Taylor & Francis Online",
        description:
            "<p>Search and explore the millions of quality, peer-reviewed journal articles published under the Taylor &amp; Francis, Routledge and Dove Medical Press imprints.</p>",
        subjects: ["nan"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.tandfonline.com/",
        moreInfo: "",
    },
    {
        name: "Telegraph Historical Archive, 1855-2000",
        description:
            "<p>Gain fundamental insight into domestic and international affairs with access to both the daily and Sunday editions of The Telegraph.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/i.do?p=TGRH&sw=w&u=byuidaho&v=2.1&pg=BasicSearch&it=static&sid=bookmark-TGRH",
        moreInfo:
            "Launched in 1855 as an affordable newspaper (it quickly cut its price to a penny), by 1876 The Telegraph was the largest-selling newspaper in the world, with a circulation of 300,000.&nbsp;Over the years, it published widely on foreign affairs and gained the reputation as a pioneering yet reliable source of news reporting and journalistic innovation.&nbsp;",
    },
    {
        name: "Testaments to the Holocaust",
        description:
            "<p>Digitized holdings of the Wiener library, the first archive to collect evidence of the Holocaust and the anti-Semitic activities of the Nazi party.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/6ACL/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "The Wiener Library of London collection came from evidence collected before, during, and after World War II and includes eyewitness accounts, photographs, postcards of synagogues (most buildings were later destroyed), propaganda publications, children's books, and more.Years of coverage 1889-1965. Much of the content is written in German.&nbsp;This resource is part of the Archives Unbound collection from Gale.&nbsp;",
    },
    {
        name: "Theatre",
        description:
            "<p>Works by American, European, Asian, and other dramatists from the past several centuries; includes written works, drawings, videos, etc..</p>",
        subjects: ["Theatre"],
        contentTypes: [
            "Images",
            "Video",
            "Audio",
            "Primary Resource",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/theatre",
        moreInfo:
            "In addition to performances, Theatre also features dozens of documentaries and interviews about theatre, discussing the history of theatre, acting methods, pioneering dramatists and actors, and much more. &nbsp;North America Theatre Online includes some 40,000 pages of major reference materials, together with records to approximately 30,000 plays, 57,000 people, 5,400 theatres, 22,000 productions, and 2,500 production companies. The collection also includes approximately 10,500 images, playbills, postcards, scrapbooks, and other resources.Collection includes:&nbsp;Audio Drama: The L.A. Theatre Works CollectionBlack Drama; Black Drama: Second EditionBroadwayHD Collection; National Theatre CollectionNorth American Indian DramaNorth American Women's DramaTheatre in Context CollectionTheatre in Video: Volume ITheatre in Video: Volume IITwentieth Century North American Drama&nbsp;",
    },
    {
        name: "Theatre and Drama Premium ",
        description:
            "<p>Enjoy the spectacle of theater and drama in your room; from interviews with dramatic giants to unpublished manuscripts of theatrical geniuses.</p>",
        subjects: ["Theatre"],
        contentTypes: [
            "Images",
            "Video",
            "Primary Resource",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/drap",
        moreInfo: "",
    },
    {
        name: "Theatre in Context Collection",
        description:
            "<p>This collection helps draw connections between the people who brought key productions and dramas to life: directors, designers, actors, etc.</p><p>&nbsp;</p>",
        subjects: ["Theatre"],
        contentTypes: ["Images", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/ticc",
        moreInfo:
            "With Theatre in Context Collection, students can understand the historical significance of certain plays, their popularity, and their role in shaping dialogue outside of the world of theatre\u2014creating a complete picture of life on the historical stage.The collection includes 40,000 pages of monumental reference works, encyclopedias, images, flyers, playbills, postcards, scrapbooks, and other resources, including:Essential reference works that catalogue historic performances from the Broadway stageArchival playbills that document the major players of the dayOriginal designs that allow you to reimagine the setDecades worth of periodicals that provide contemporary reactions to performances",
    },
    {
        name: "Theatre in Video",
        description:
            "<p>Theatre in Video contains hundreds of videos, including documentaries and definitive performances of the world\u2019s most important plays.</p>",
        subjects: ["Art, Theatre"],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/ativ",
        moreInfo:
            "From celebrated productions of Shakespeare to rare, in-depth footage of the work of Samuel Beckett, this collection covers a wide range of 20th century theatre history.&nbsp;Interviews with directors, designers, writers, and actors, along with excerpts of live performances deliver an authentic, behind-the-scenes look at hundreds of productions.&nbsp;",
    },
    {
        name: "Times Digital Archive, 1785-1985, The",
        description:
            "<p>Full-text facsimile archive of each page of the highly regarded British newspaper, The Times, from its beginning in 1785 through 1985.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=TTDA&u=byuidaho",
        moreInfo:
            "This historical newspaper archive allows researchers an unparalleled opportunity to search and view the best-known and most cited newspaper in the world online in its original published context.&nbsp;Read by both world leaders and the general public, The Times has offered readers in-depth, award-winning, objective coverage of world events since its creation in 1785 and is the oldest daily newspaper in continuous publication.&nbsp;This database supports research across multiple disciplines and areas of interest, including business, humanities, political science, and philosophy, along with coverage of all major international historical events.",
    },
    {
        name: "Times Literary Supplement Historical Archive",
        description:
            "<p>Contains the full text of every issue of the <i>Times Literary Supplement</i> published between 1902 and the present (6 yr embargo)</p><p>&nbsp;</p>",
        subjects: ["English, History"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=TLSH&u=byuidaho&authCount=1",
        moreInfo:
            "For over 100 years, the TLS has served as a leading forum for fine writing, literary discoveries, and insightful debate.&nbsp;Begun as an Anglo-centric publication, it developed into a truly international publication by the mid-twentieth century with contributors from around the world and coverage ranging from literature to history, science, politics, and art.Many of the world's leading writers, critics, and thinkers have contributed to the TLS, making it a rich resource for following the developments of debate, opinion, and perspective from the early twentieth century through the present.",
    },
    {
        name: "Toronto Star",
        description:
            "<p>Search and read through first-hand accounts and other coverage of Toronto and Canada in this newspaper archive - coverage: 1894-2020.</p>",
        subjects: ["History"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnptorontostar/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Travel Writing, Spectacle, and World History",
        description:
            "<p>A resource with hundreds of accounts by women of their travels across the globe from the early 1800s thru the late 1900s.</p>",
        subjects: ["History"],
        contentTypes: ["eBooks", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www-travelwriting-amdigital-co-uk.byui.idm.oclc.org/",
        moreInfo:
            "From the chaperoned trip of the young lady to the journeys for work, exploration, leisure, charity, or enlightenment, this collection of diaries and correspondence give first-hand accounts of major historical events and provide snapshots of cities, cultures, and customs and chart the rise of modern tourism and the travel industry.Students and researchers will find sources covering a variety of topics including architecture, art, the British Empire, climate, customs, exploration, family life, housing, industry, language, monuments, mountains, natural history, politics, diplomacy, race, religion, science, shopping, and war.This resource is part of the AM Explorer collection.",
    },
    {
        name: "Trench Journal and Unit Magazines of the First World War",
        description:
            "<p>A collection of magazines created by and for servicemen &amp; women of all nations during the First World War.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/trenchjournals",
        moreInfo:
            "Numbering over 1,500 issues, these periodicals, many rare, have been scanned in full color or grayscale and indexed for ease of searching. The magazines were created by serving members of the armed forces and associated welfare organizations and were published between 1914 and 1919.&nbsp;",
    },
    {
        name: "Trials, 1600--1926",
        description:
            "<p>A comprehensive database of full-text documents from Anglo-American trials.&nbsp;</p>",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/MMLT?u=byuidaho",
        moreInfo:
            "This collection supports studies in government, psychology, critical theory, theater and performance, gender studies, race studies, and journalism. The Making of Modern Law: Trials enables researchers to access the workings of the justice system; delve into notorious dramas and sensational trials; discover an unfiltered narrative into the daily lives of everyday people -an unparalleled source for the historical examination of sex, gender, class, marriage, and divorce; and study precedent-setting trials associated with important constitutional and historic issues, including the Amistad slavery case, the Dred Scott case, and the Scopes 'monkey' trial.Users will find published trial transcripts; popular printed accounts of trials for murder, adultery, and other crimes; unofficially published accounts of trials, briefs, arguments, and other trial documents that were printed as separate publications; official records of legislative proceedings, administrative proceedings, and arbitration sessions (domestic and international); and books encompassing multiple trials as well as books and pamphlets about a single trial.&nbsp;In addition to works pertaining to English-speaking jurisdictions such as the United States, Britain, Ireland, and Canada, this digital archive also contains English-language titles about trials in other jurisdictions, such as France.&nbsp;&nbsp;",
    },
    {
        name: "Twayne's Authors Series ",
        description:
            "<p>Find in-depth critical introductions to the lives and works of major writers. Includes influences of literary movements.</p>",
        subjects: ["Biographies, English"],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.galegroup.com/ps/start.do?p=G-Twayne&u=byuidaho&authCount=1",
        moreInfo: "",
    },
    {
        name: "Twentieth Century Advice Literature: North American Guides on Race, Gender, Sex, and the Family",
        description:
            "<p>A collection of etiquette guides, self-help books, etc. from the 1900s that illustrate how American behaved and how they felt they should behave.</p>",
        subjects: ["English, History, Home and Family"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/adli",
        moreInfo:
            "This resource allows searchers to immerse themselves in the values &amp; behaviors of Americans through the various eras of the 1900s.&nbsp;It provides a window on social history by bringing together instructional, prescriptive, behavioral, and etiquette literature that defined standards of personal conduct for millions of Americans and reflected the prevailing social mores across the twentieth century.&nbsp;Includes indexed and searchable searchable handbooks, manuals, textbooks, etiquette guides, self-help books, instructional pamphlets, and how-to books.",
    },
    {
        name: "Twentieth Century North American Drama",
        description:
            "<p>Analyze the economic, historical, social, and political psyche of North America through this collection of plays and related materials.</p>",
        subjects: ["Theatre"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/theatre/browse/title?ff%5B0%5D=unitaccess%3ANADR-1E",
        moreInfo:
            "Explore 2,059 plays by 434 playwrights along with information on related productions, theaters, production companies, and more for insights into societal issues of the day. The database also includes selected playbills, production photographs and other ephemera related to the plays. More than 150 of the plays are published here for the first time, including a number by major authors.",
    },
    {
        name: "Twentieth Century Religious Thought, Volume 1, Christianity",
        description:
            "<p>A collection of works by over 250 key worldwide religious thinkers from the early 1900s until the turn of the 21st century.</p>",
        subjects: ["Religious Education"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/tcrt",
        moreInfo:
            "This collection supports research and teaching in comparative religion, theology, world religion, religion and law, and religion and politics, and serves as an important resource for courses and scholarship in social theory, feminist studies, philosophy, and world history.Includes works by:Karl BarthDonald BloeschDietrich Bonhoeffer (complete 17-volume works in German &amp; English)Leonardo BoffSergius BulgakovRudolf BultmannHelder CamaraMary DalyIvone GebaraHenri de LubacGustavo Guti\u00e8rrezStanley HauerwasAda Maria Isasi-DiazC. S. LewisBernard LonerganDmitry Sergeyeyevic MerezhkovskyJohn MilbankJurgen MoltmannMercy Amba OduyoyeWolfhart PannenbergPope Benedict XVIRosemary Radford RuetherAlbert SchweitzerJon SobrinoDorothee S\u00f6lleErnst TroeltschHans Urs von BalthasarAdolf von HarnackRowan WilliamsJohn Howard Yoder",
    },
    {
        name: "Twentieth-Century African American Poetry",
        description:
            "<p>Poems by African American poets from the early 1900s, thru the Harlem Renaissance, the Black Arts movement, and into the 1990s.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343198855?accountid=9817",
        moreInfo:
            "9,000 poems by some of the most influential African American poets including:James Weldon JohnsonGeorgia Douglas Camp JohnsonClaude McKayLangston HughesJean ToomerArna BontempsSterling BrownImamu Amiri BarakaEtheridge KnightAudre LordeSonia SanchezAiRita DoveYusef Komunyakaa&nbsp;and many young writers who have gained recognition through national poetry awards and printing in anthologies",
    },
    {
        name: "Twentieth-Century American Poetry",
        description:
            "<p>Fifty thousand poems by poets of the century - movements such as the modernist, Black Mountain School, Deep Image, &amp; underground, included.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343198879?accountid=9817",
        moreInfo:
            "The major works by over 300 poets of the modernist period \u2013 the brittle imagist lyrics of Ezra Pound, H.D. (Hilda Doolittle) and William Carlos Williams, the playful and abstract masterpieces of Wallace Stevens and e.e. cummings, the symbolist cityscapes of Hart Crane \u2013 can be read alongside contemporary works such as the Whitmanesque prophetic verse of Robinson Jeffers and the Romantic lyrics of Elinor Wylie and Edna St. Vincent Millay.Representation from movements are included: the Black Mountain school of Charles Olson and Robert Duncan, the Deep Image poetry of Robert Bly and James Wright, underground literature by the Beat poets, the influential feminist works of Adrienne Rich, and the works by the confessional poets. Selected major African American writers such as Jean Toomer, Langston Hughes and Imamu Amiri Baraka are included; however, much more comprehensive coverage is given in the complementary collection Twentieth-Century African American Poetry.&nbsp;",
    },
    {
        name: "Twentieth-Century English Poetry",
        description:
            "<p>A collection of poetry reflecting the multiple concerns and techniques of a century's writing from conventional to free-verse.</p>",
        subjects: ["English"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.proquest.com/lion/docview/2343197364?accountid=9817",
        moreInfo:
            "Coverage of multiple views and techniques are shared: from modernist experiment to post-modern playfulness, from Georgian convention to free-verse confession, and from Edwardian poetry of empire to post-imperial diversity, the collection embraces vital contrasts and continuities.This collection includes 598 volumes of poetry by 283 poets who wrote from 1900 to 2000, including W.B. Yeats, Rudyard Kipling, Thomas Hardy, Wilfred Owen, Thom Gunn, Fleur Adcock, Paul Muldoon, Tony Harrison, Benjamin Zephaniah and Carol Ann Duffy, and incorporating poets from The Faber Poetry Library.&nbsp;",
    },
    {
        name: "U.S. Congressional Serial Set : 1817-1994",
        description:
            "<p>The essential record of the United States government from the 15th thru the 103rd Congress.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Government", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb-newsbank-com.byui.idm.oclc.org/apps/readex/?p=SERIAL",
        moreInfo:
            "This monumental collection of more than 370,000 publications records nearly two centuries of American and world history. The Reports, Documents, and Journals of the U.S. Senate and U.S. House of Representatives cover subjects such as slavery and civil rights, the Civil War and Reconstruction, westward expansion and the displacement of Native Americans, women\u2019s suffrage and minority rights, international relations and conflicts, worldwide discovery, space exploration and the Hubble Space Telescope, and more.",
    },
    {
        name: "U.S. Congressional Serial Set Maps",
        description:
            "<p>This collection of historic maps illustrates the important role of rivers in shaping the history, politics, and geography of the United States.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Maps", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://infoweb-newsbank-com.byui.idm.oclc.org/apps/readex/?p=SSMAP",
        moreInfo:
            "This collection also contains maps from Asia, South America, and the Yukon Territory. Includes maps from years 1800-1999, plus a few from ancient history.",
    },
    {
        name: "U.S. History ",
        description:
            "<p>Search balanced coverage of events in U.S. history. Great for novice historians and academic researchers. Updated daily.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPUS&u=byuidaho",
        moreInfo: "",
    },
    {
        name: "U.S. History in Context",
        description:
            "<p>A database for those seeking contextual information on hundreds of the most significant people, events, and topics in US History.</p>",
        subjects: ["Biographies, History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=UHIC&u=byuidaho&aty=ip",
        moreInfo:
            "Content includes reference works, millions of news and periodical articles, and more than 5,000 rare and vital primary source documents that range from slave journals to presidential papers.&nbsp;",
    },
    {
        name: "U.S. Intelligence on Europe, 1945-1995 ",
        description:
            "<p>Declassified US government documents surveying US intelligence activities in Europe from the end of WWII to beyond the fall of the Iron Curtain.</p>",
        subjects: [
            "History, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Primary Resource", "Government"],
        url: "https://byui.idm.oclc.org/login?url=https://primarysources.brillonline.com/browse/us-intelligence-on-europe",
        moreInfo:
            "This collection of over 4,000 formerly classified U.S. government documents provides a comprehensive survey of the U.S. intelligence community\u2019s activities in Europe, including Eastern Europe, Turkey and Cyprus, covering the time period from the end of World War II to the fall of the Iron Curtain and beyond.",
    },
    {
        name: "U.S. Newsstream (PQ)",
        description:
            '<p>Full text of hundreds of U.S. and international news sources. &nbsp; &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://tls.search.proquest.com/titlelist/ListForward?format=excel&amp;ft=Y&amp;citAbs=Y&amp;other=Y&amp;issn=Y&amp;isbn=Y&amp;peer=Y&amp;pubId=Y&amp;gaps=Y&amp;subject=Y&amp;language=Y&amp;changes=Y&amp;productId=1006968:1005922:1005701:1005635:1009067:1009066:1009069:1009047:1009068:1009070:1005692:1009065:1009241&amp;productName=U.S.+Newsstream&amp;ftDetail=Y&amp;citAbsDetail=Y&amp;otherDetail=Y&amp;accountId=9817">View title list</a> (XLS)</p>',
        subjects: ["General"],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/newsstand?accountid=9817",
        moreInfo:
            "Content stretches back into the 1990's and forward to the present. Includes newspapers, newswires, blogs, and news sites. Includes access to:The New York TimesTimes of LondonLos Angeles TimesChicago TribuneWall Street Journalplus scores of smaller papersThis resource is part of ProQuest's Global Newsstream Collection.",
    },
    {
        name: "U.S. Supreme Court Records and Briefs, 1832--1978",
        description:
            "<p>A comprehensive online collection of records and briefs brought before the nation's highest court by leading legal practitioners.</p>",
        subjects: ["Political Science"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/SCRB?u=byuidaho",
        moreInfo:
            "The collection, which covers 140 years of court history, includes transcripts, applications for review, motions, petitions, supplements, and other official papers of the most-studied and talked-about cases, including many that resulted in landmark decisions. Many of the practitioners represented in the collection later became judges and associates of the court.It covers every aspect of law, including civil rights law, constitutional law, corporate law, environmental law, gender law, labor law, legal history and legal theory, property law, taxation, and trademark and intellectual property law. It also touches on nearly every major event in American history from the country's national and international wars to the most dramatic changes in the nation's economic life, society, and culture.&nbsp;This collection is especially strong on such topics as interpretations of the Constitution and its amendments; judicial review and the role of the courts in American history; states' rights and national sovereignty; discrimination and modern civil liberties; intellectual property and technology; and the evolving nature of race, gender, faith, and identity.&nbsp;In addition to full-text searching and reproduction of facsimile pages, scholars can also refine their research by focusing their search on the case name, document type and file date; opinion date; Supreme Court term year; docket number; U.S. Reports citation; Supreme Court Reporter and Lawyer's Edition citations; case heard; and author/counsel names, including personal and organizational names.",
    },
    {
        name: "UlrichsWeb Global Serials Directory - Discontinued 1/31/2025",
        description:
            "<p>An easy-to-search source of detailed information on more than 300,000 serials/periodicals.</p>",
        subjects: ["General"],
        contentTypes: ["Abstract / Citation / Index", "Reference"],
        url: "https://byui.idm.oclc.org/login?url=https://ulrichsweb.com/ulrichsweb/",
        moreInfo:
            "Includes coverage of academic and scholarly journals, e-journals, peer-reviewed titles, popular magazines, newspapers, newsletters, and more.&nbsp;Ulrichsweb service covers more than 900 subject areas. The records provide data points such as ISSN, publisher, language, subject, abstracting &amp; indexing coverage, full-text database coverage, tables of contents, and reviews written by librarians.",
    },
    {
        name: "Upper Snake River Valley Idaho Histories",
        description:
            "<p>Short historical sketches of pioneers who settled in the Upper Snake River Valley between 1883 and 1893.</p>",
        subjects: ["Family History, History, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.lib.byu.edu/dlib/byui_usrv/",
        moreInfo:
            "In addition, the collection contains a brief history of the meetings, elections and programs of the Daughters of the Snake River Valley Pioneers from 1924-1950.",
    },
    {
        name: "UpToDate",
        description:
            '<p>UpToDate is a clinical information resource covering medical specialties, calculators, Medline abstracts, drug database, etc. Apps&nbsp;<a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.uptodate.android&amp;hl=en&amp;gl=US"> Android</a> &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/uptodate/id334265345">iOS</a></p>',
        subjects: ["Health Services, Nursing"],
        contentTypes: ["Abstract / Citation / Index", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://www.uptodate.com/contents/search",
        moreInfo: "",
    },
    {
        name: "Value Line ",
        description:
            "<p>Full-page reports &amp; analyst commentaries on over 1,700 publicly traded stocks, plus reports on ~1,800 additional small &amp; mid-cap stocks.</p>",
        subjects: ["Business Management, Economics"],
        contentTypes: ["Statistics", "Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://research.valueline.com/secure/dashboard",
        moreInfo: "",
    },
    {
        name: "Victorian Popular Culture",
        description:
            "<p>A resource for the study of popular entertainment in &nbsp;1800s- early 1900s. Includes popular entertainment, sensation, magic, sideshows, etc.</p>",
        subjects: ["English, History"],
        contentTypes: [
            "Images",
            "Video",
            "Audio",
            "Primary Resource",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.victorianpopularculture.amdigital.co.uk/",
        moreInfo:
            "This innovative portal invites readers into the darkened halls, small backrooms and travelling venues that hosted everything from spectacular shows and bawdy burlesque, to the world of magic and spiritualist s\u00e9ances.&nbsp;This resource contains a wide range of source material relating to popular entertainment in America, Britain and Europe in the period from 1779 to 1930, and shows how interconnected these worlds were.&nbsp;This resource is part of the AM Explorer collection.",
    },
    {
        name: "Virginia Company Archives",
        description:
            "<p>&nbsp;A comprehensive record of the history of the Virginia Company of London, 1606-1624.</p>",
        subjects: ["History"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www.virginiacompanyarchives.amdigital.co.uk/",
        moreInfo:
            "Centred upon the archives of the Ferrar family who played a significant role in the Company's administration, this resource documents the founding and economic development of the Virginia colony, relations between colonists and indigenous peoples, and early trade between Britain and America.&nbsp;It is also a crucial source for London's economic history and the religious and social history of early modern England, with further content documenting the Ferrars' continued interest in the European colonisation of North America in the years after 1624.This resource is part of the AM Explorer collection.",
    },
    {
        name: "Vocational and Career Collection ",
        description:
            "<p>This collection provides full text coverage for nearly 340 trade and industry-related periodicals.</p>",
        subjects: ["General, Job and Career Resources"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=voh&authtype=sso&custid=s8406107",
        moreInfo: "",
    },
    {
        name: "Vocations and Careers",
        description:
            "<p>Access periodical coverage on researching a vocation, finding an appropriate institution of learning, job searching, maintaining a career, etc.</p>",
        subjects: ["General, Job and Career Resources"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPVC&u=byuidaho",
        moreInfo: "",
    },
    {
        name: "Vogue archive ",
        description:
            "<p>Searchable archive of the American <i>Vogue </i>magazine from 1892 to the present. Includes every page, covers, and foldouts.</p><p>&nbsp;</p>",
        subjects: ["Art, History, Home and Family, Humanities and Philosophy"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/vogue?accountid=9817",
        moreInfo:
            "Fully indexed to enable researchers to find images and articles by garment type, design, and brand names.The Vogue Archive preserves the work of the world's greatest fashion designers, stylists and photographers and is a unique record of American and international fashion, culture and society from the dawn of the modern era to the present day.",
    },
    {
        name: "Voices from Ellis Island: An Oral History of American Immigration",
        description:
            "<p>Stories of immigrants who underwent examination and processing at the Ellis Island facility in upper New York harbor.</p>",
        subjects: ["Family History, History, Special Collections"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&mid=48990&cid=001745&action=detailAZ",
        moreInfo:
            "The National Park Service in cooperation with the Statue of Liberty-Ellis Island Foundation conducted lengthy interviews with 185 persons who either immigrated through, or worked at, Ellis Island during the peak of mass migration to the United States.&nbsp;The histories were conducted during 1984-1985. Descriptive information for each interview includes the country of origin, place where the immigrant first settled, and alternate spellings or previous versions of the immigrant's name.",
    },
    {
        name: "Wall Street Journal ",
        description:
            "<p>Leading business &amp; economics newspaper since 1889, following advances in business, science, technology, entertainment, society, &amp; globalization.&nbsp;</p>",
        subjects: [
            "Accounting, Business Management, Communications, Economics, Finance, General, History, Political Science",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "http://library.byui.edu/resources/wsj/",
        moreInfo:
            "New users must Register here&nbsp;for a WSJ Premium account, provided by the McKay Library.&nbsp; Access must be renewed periodically.Link for Existing BYU-I users.&nbsp;Available as an app: &nbsp; Android app&nbsp; &nbsp;&nbsp;iOS appAccess to&nbsp;WSJ archives 1889-2011",
    },
    {
        name: "Wall Street Journal: ProQuest Historical Newspapers",
        description:
            "<p>Historical archive of the Wall Street Journal with access to its coverage of finance, politics, and events in the nation and world of 1889-2011.</p>",
        subjects: [
            "Business Management, Economics, Finance, General, History, Political Science",
        ],
        contentTypes: ["Newspapers", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/hnpwallstreetjournal?accountid=9817",
        moreInfo: "",
    },
    {
        name: "War and Terrorism",
        description:
            "<p>Articles providing valuable insight into conflicts and their causes, impact, and perception on a global scale.</p>",
        subjects: ["History, Political Science, Sociology and Social Work"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPWT&u=byuidaho",
        moreInfo: "",
    },
    {
        name: "Washington Post (1987-current)",
        description:
            "<p>Access the Washington Post with its coverage of news events, politics, companies, and people in the nation and world from 1987-present.</p>",
        subjects: ["History, Political Science"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://www-proquest-com.byui.idm.oclc.org/washingtonpost/news/fromDatabasesLayer?accountid=9817",
        moreInfo: "",
    },
    {
        name: "Web of Science",
        description:
            "<p>A premier research platform, helping users find, analyze, and share information in the sciences, social sciences, arts, and humanities.&nbsp;</p>",
        subjects: [
            "Animal and Food Science, Biology, Business Management, Chemistry, Finance, Geology, Mathematics, Mechanical & Civil Engineering, Nursing, Psychology, Sociology and Social Work",
        ],
        contentTypes: [
            "Abstract / Citation / Index",
            "Full-Text Articles",
            "Journals",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.webofknowledge.com/WOS",
        moreInfo:
            "The Web of Science (formerly Web of Knowledge) is today's premier research platform, helping you quickly find, analyze, and share information in the sciences (i.e. biology, medicine, zoology), social sciences (i.e. sociology, psychology), arts, and humanities. &nbsp;Access high-quality literature through a unified platform that links a wide variety of content with one seamless search. WOS has a cited reference search for performing citation analysis.List of the 250 subject areas covered in WOS.",
    },
    {
        name: "Western States Marriage Record Index",
        description:
            "<p>An index of virtually all of the pre-1900 marriages for Arizona, Idaho and Nevada, plus many into the 1930s from Idaho and Utah counties.</p>",
        subjects: ["Family History, History"],
        contentTypes: ["Abstract / Citation / Index", "Primary Resource"],
        url: "https://byui.idm.oclc.org/login?url=https://archives.byui.edu/family-history/wsmri",
        moreInfo: "",
    },
    {
        name: "What Can I Do With This Major?",
        description:
            "<p>Learn typical career areas and types of employers that hire in these fields, as well as strategies to make you a more marketable candidate.</p>",
        subjects: ["Job and Career Resources"],
        contentTypes: ["Reports / Data"],
        url: "https://byui.idm.oclc.org/login?url=https://whatcanidowiththismajor.com/major",
        moreInfo:
            "Helpful for those exploring majors or searching for information about a selected field.Provides links to related websites for further research.",
    },
    {
        name: "Wiley Online Library",
        description:
            '<p>Multi-disciplinary content from journals, books, reference works, databases, &amp; manuals. On landing page, scroll down to search by subject. Apps: <a href="https://byui.idm.oclc.org/login?url=https://play.google.com/store/apps/details?id=com.wiley.jas.wja"><strong>Android&nbsp;</strong></a><strong> &nbsp;&nbsp;</strong><a href="https://byui.idm.oclc.org/login?url=https://apps.apple.com/us/app/wiley-online-library/id1567383785"><strong> iOS &nbsp;</strong></a></p>',
        subjects: [
            "Animal and Food Science, Art, Biology, Business Management, Chemistry, Computer Information Technology, Computer Science and Electrical Engineering, Economics, English, Geography, Geology, Health Services, History, Home and Family, Humanities and Philosophy, Mathematics, Mechanical & Civil Engineering, Nursing, Physics, Political Science, Psychology, Sociology and Social Work",
        ],
        contentTypes: ["eBooks", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://onlinelibrary.wiley.com",
        moreInfo:
            "Find eBooks in these subject areas: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Available as an app: &nbsp; &nbsp;Android app&nbsp; &nbsp; iOS app&nbsp;Agriculture, Aquaculture &amp; Food ScienceArchitecture &amp; PlanningArt &amp; AppliedBusiness, Economics, Finance &amp; AccountingChemistryComputer Science &amp; Information TechnologyEarth, Space &amp; Environmental SciencesHumanitiesLaw &amp; CriminologyLife SciencesMathematics &amp; StatisticsMedicineNursing, Dentistry &amp; HealthcarePhysical Sciences &amp; EngineeringPsychologySocial &amp; Behavioral SciencesVeterinary Medicine",
    },
    {
        name: "Women and Social Movements in the United States, 1600-2000",
        description:
            "<p>A resource for students and scholars of U.S. history and U.S. women's history.&nbsp;</p>",
        subjects: ["History, Sociology and Social Work"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search-alexanderstreet-com.byui.idm.oclc.org/wass",
        moreInfo:
            "Organized around the history of women in social movements in the U.S. between 1600 and 2000, this collection seeks to advance scholarly debates and understanding about U.S. women\u2019s history.&nbsp;The collection currently includes 125 document projects and archives with more than 5,100 documents and 175,000 pages of additional full-text documents, written by 2,800 primary authors. It also includes book, film, and website reviews, notes from the archives, and teaching tools.&nbsp;",
    },
    {
        name: "Women, War, and Society, 1914-1918",
        description:
            "<p>Documents exploring the revolutionary &amp; permanent impact of the First World War on the personal, social, and professional lives of all women.</p>",
        subjects: ["History, Sociology and Social Work"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://link.gale.com/apps/collection/6ACP/GDSC?u=byuidaho&sid=bookmark-GDSC",
        moreInfo:
            "The essential contribution by women to the war in Europe is fully documented in this definitive collection of primary source materials brought together in the Imperial War Museum, London. These unique documents are published here for the first time in fully-searchable form, along with interpretative essays from leading scholars. Together these documents form an indispensable resource for the study of 20th-Century social, political, military and gender history.&nbsp;This resource is part of the Archives Unbound collection from Gale.",
    },
    {
        name: "Women's Magazine Archive",
        description:
            "<p>An archival research resource comprising the backfiles of leading women's interest consumer magazines.</p>",
        subjects: ["History, Home and Family"],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/wma",
        moreInfo:
            "ssues are scanned in high-resolution color and feature detailed article-level indexing. Coverage ranges from the late-19th century through to 2005 and these key primary sources permit the examination of the events, trends, and attitudes of this period. Among the research fields served by this material are gender studies, social history, economics/marketing, media, fashion, politics, and popular culture.",
    },
    {
        name: "Women's Periodicals: Social and Political Issues",
        description:
            "<p>Historical periodicals published by, for, and/or about women, their lives, and the issues that affected them.</p>",
        subjects: ["History, Political Science, Sociology and Social Work"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/aboutThisCollection?userGroupName=byuidaho&inPS=true&mCode=4ZHA&prodId=GDSC",
        moreInfo:
            "Historical women\u2019s periodicals provide an important resource to scholars interested in the lives of women, the role of women in society and, in particular, the development of the public lives of women as the push for women\u2019s rights\u2014woman suffrage, fair pay, better working conditions, for example\u2014grew in the United States and England. Some of the titles in this collection were conceived and published by men, for women; others, conceived and published by male editors with strong input from female assistant editors or managers; others were conceived and published by women, for women. The strongest suffrage and anti-suffrage writing was done by women for women\u2019s periodicals. Thus a variety of viewpoints are here presented for study.&nbsp;This resource is part of the&nbsp;Archives Unbound&nbsp;collection from Gale.",
    },
    {
        name: "Women's Wear Daily Archive",
        description:
            "<p>Archive of the noted fashion magazine; each page digitized in full color with searchable text &amp; indexing. From launch to present (6 mo. embargo).</p>",
        subjects: ["Home and Family"],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://search.proquest.com/wwd",
        moreInfo:
            "The Women's Wear Daily Archive preserves one of the fashion industry's most influential reads.&nbsp;Key moments in the history of the industry, as well as major designers, brands, retailers, and advertisers are all covered in this publication of record.&nbsp;",
    },
    {
        name: "World History",
        description:
            "<p>Provides balanced coverage of events in world history with relevant articles updated daily - both current thinking and established scholarly work.</p>",
        subjects: [
            "Foundations & GE (General Education), History, Humanities and Philosophy, Languages and International Studies",
        ],
        contentTypes: ["Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://go.gale.com/ps/start.do?p=PPWH&u=byuidaho",
        moreInfo: "",
    },
    {
        name: "World History Encyclopedia",
        description:
            "<p>Written for the general public with academic standards, WHE helps users gain a deep, fundamental knowledge of our interconnected human past.</p>",
        subjects: ["History, Humanities and Philosophy, Political Science"],
        contentTypes: [
            "Images",
            "Video",
            "Audio",
            "Maps",
            "Reference",
            "Full-Text Articles",
        ],
        url: "https://byui.idm.oclc.org/login?url=https://www.worldhistory.org/",
        moreInfo:
            "Covering a wide range of topics in world history, WHE is one of the world's most-read publications on history. Includes articles, images, videos, and 3D images. All submissions are reviewed before publication. Articles available in audio format.WHE's goal is to help people across the globe gain a deeper, fundamental knowledge of our interconnected human past in order to create curious, open-minded, and tolerant societies in the future.",
    },
    {
        name: "World History in Context",
        description:
            "<p>Provides balanced coverage of events in world history with relevant articles, sharing both current thinking and established scholarly work.&nbsp;</p>",
        subjects: [
            "Foundations & GE (General Education), History, Humanities and Philosophy, Languages and International Studies",
        ],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "https://byui.idm.oclc.org/login?url=https://go-gale-com.byui.idm.oclc.org/ps/start.do?p=WHIC&u=byuidaho",
        moreInfo:
            "World History In Context reaches back to the ancient world and forward to today\u2019s headlines to provide a chronicle of the great cultures and societies that have shaped history. Rare primary sources, reliable reference, and multi-media content help students gain context on a wide range of topics within this vast subject.&nbsp;Material updated daily.",
    },
    {
        name: "World History in Video",
        description:
            "<p>Documentaries covering human history from the earliest civilizations to the late twentieth century. Content is global in scope.</p>",
        subjects: [
            "Foundations & GE (General Education), History, Languages and International Studies",
        ],
        contentTypes: ["Video"],
        url: "https://byui.idm.oclc.org/login?url=https://search.alexanderstreet.com/whiv",
        moreInfo:
            "World History in Video is a wide-ranging collection of critically acclaimed documentaries that is truly global in scope, covering Africa and the Americas, Asia, Europe, the Middle East, and Oceania.&nbsp;Its unparalleled geographical and chronological coverage captures longer-term and multiple perspectives, so students can make connections across cultures and over time, incorporating people, places, events, and artifacts from around the world and across the centuries.",
    },
    {
        name: "World Religions",
        description:
            "<p>Covers all the basic information on the beliefs, practices, and history of each major world religion, including leaders, holy days, topics, and texts.&nbsp;</p>",
        subjects: ["Religious Education"],
        contentTypes: ["eBooks", "Video", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://online.infobaselearning.com/Direct.aspx?aid=104034&pid=WE30",
        moreInfo:
            "Includes Christianity, Buddhism, Confucianism, Daoism, Hinduism, Islam, Judaism, Shinto, African and Native American beliefs.",
    },
    {
        name: "World War I Military Camp Newspapers",
        description:
            "<p>A collection of military camp newspapers, much written by soldiers for soldiers, covering the experiences of American soldiers during World War I Era.</p>",
        subjects: ["Family History, History, Special Collections"],
        contentTypes: ["Newspapers", "Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://history-commons.net/modules/awco/",
        moreInfo:
            "A collection of military camp newspapers--much of it written by soldiers for soldiers--covering the experiences of American soldiers during the the World War I Era, 1916-1918.&nbsp;Description of the Camp Newspapers collection. &nbsp; &nbsp; | &nbsp; &nbsp; This resource is part History Commons'&nbsp;Accessible Archives&nbsp;collection &nbsp;",
    },
    {
        name: "World War II: U.S. Documents on Planning, Operations, Intelligence, Axis War Crimes, and Refugees",
        description:
            '<p>Firsthand accounts of the innermost workings of the top level of military planning during World War II. Part of the <a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=home">History Vault </a>Collection. &nbsp;<a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&amp;mid=34319#34319"><strong>More Info</strong></a><strong> | </strong><a href="https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=advanced_ui&amp;module=34319"><strong>Search</strong></a><strong>&nbsp;</strong></p>',
        subjects: [
            "History, Languages and International Studies, Political Science",
        ],
        contentTypes: ["Primary Resource", "Full-Text Articles"],
        url: "https://byui.idm.oclc.org/login?url=https://hv-proquest-com.byui.idm.oclc.org/historyvault/hv.jsp?pageid=browse&mid=34319#34319",
        moreInfo:
            "This module includes President Franklin D. Roosevelt's Map Room Files, Records of the Joint Chiefs of Staff, Records of the War Department Operations Division, U.S. Navy Action and Operational Reports, Records of the Office of War Information, Papers of the War Refugee Board, George C. Marshall Papers, and numerous other collections. Taken together, these collections provide many different views of World War II. Firsthand accounts of the innermost workings of the top level of military planning during World War II can be found in President Franklin D. Roosevelt's Map Room Files and Records of the Joint Chiefs of Staff. The Office of War Information Papers contain information on the U.S. homefront, as do records on the internment of Japanese civilians. World War II Combat Interviews offer firsthand accounts from the perspective of the individual soldiers who participated in the D-Day invasion. The Papers of the War Refugee Board provide documentation on the fate of civilians in Europe with a special focus on Jewish refugees. Other collections in this module include FBI Files on Tokyo Rose, Manhattan Project documents, Potsdam Conference Documents, and records on lend-lease.&nbsp;",
    },
    {
        name: "WorldCat",
        description:
            "<p>Connecting the catalogs of thousands of libraries worldwide to help users locate and access content.</p>",
        subjects: ["General"],
        contentTypes: ["Abstract / Citation / Index"],
        url: "https://byui.idm.oclc.org/login?url=https://worldcat.org/",
        moreInfo:
            "WorldCat is the world's largest network of library content and services. WorldCat libraries are dedicated to providing access to their resources on the Web, where most people start their search for information.&nbsp;Search for popular books, music CDs, and videos\u2014all of the physical items you're used to getting from libraries - and also digital content, such as downloadable audiobooks. These items are often available through InterLibraryLoan.You may also find article citations with links to their full text; authoritative research materials, such as documents and photos of local or historic significance; and digital versions of rare items that aren't available to the public.&nbsp;Because WorldCat libraries serve diverse communities in dozens of countries, resources are available in many languages.",
    },
    {
        name: "XBRL - Discontinued Dec 2024",
        description:
            '<p>A tool to help communicate, analyze, and exchange business information. <a href="https://byui.idm.oclc.org/login?url=https://xbrl.us/register">Register for an account </a>with your BYU-I email (<a href="https://byui.idm.oclc.org/login?url=https://my.byui.edu/ICS/Profile/">look-up</a>).</p>',
        subjects: ["Accounting, Business Management, Finance, Marketing"],
        contentTypes: ["Statistics"],
        url: "",
        moreInfo:
            "XBRL US is a non-profit that works with a number of stakeholder groups (accounting service providers, software developers, investors, researchers and government agencies) to promote the adoption and use of standardized financial data (XBRL) by federal, state and local governments.&nbsp;XBRL maintains a collection of 10+ years of XBRL reports in their Public Filings Database copied from US regulators \u2013 the Securities and Exchange Commission and the Federal Energy Regulatory Commission \u2013 and are continuing to add new sources.Anyone using an @byui.edu email address to register for a free Web account (https://xbrl.us/register) and can use the XBRL API to query the Public Filings Database and get all matching results. XBRL has posted links to spreadsheet extensions, sample spreadsheet templates, Jupyter notebooks, and other resources that work with the XBRL API to the XBRL Data Community page (https://xbrl.us/xbrl-api-community). Installation and troubleshooting instructions for the spreadsheet extensions are linked on the right side of the Community page.&nbsp;&nbsp;",
    },
    {
        name: "Zoological Record",
        description:
            "<p>Web of Science access to zoological resources. Covers all aspects of modern animal research from 1978 to the present.</p>",
        subjects: ["Biology"],
        contentTypes: ["Full-Text Articles", "Journals"],
        url: "http://www.webofknowledge.com/ZOOREC",
        moreInfo: "",
    },
];
