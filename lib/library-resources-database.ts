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
        name: "David O. McKay Library",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["Equipment Checkout"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu",
        moreInfo:
            "McKay Library Skip to main content David O. McKay Library All Articles Catalog Website Formats ALL FORMATS PRINT BOOKS E-BOOKS PEER REVIEWED ARTICLES SEARCH ADVANCED SEARCH Try EBSCO's New Search Interface MEET WITH A LIBRARIAN BEGIN YOUR RESEARCH LIBRARY A-Z DATABASES EQUIPMENT & 3D PRINTS AT THE MAC LAB Library News and Announcements Ask a Librarian chat loading... Upcoming Events SEE ALL EVENTS Instagram Feed View this profile on Instagram David O. McKay Library (@ byui_mckaylibrary ) • Instagram photos and videos",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
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
        name: "Research Guides (LibGuides)",
        description:
            "Subject and course-specific curated collections of resources.",
        url: "http://libguides.byui.edu/",
        subjects: ["All Disciplines"],
        contentTypes: ["Guide"],
        moreInfo:
            "Includes video tutorials, selected databases, contact info for subject librarians.",
    },
    {
        name: "Library Contact Information",
        description:
            "<p>David O. McKay Library Contact Information HOME / CONTACT US CONTACT US David O. McKay Library 525 South Center Street Rexburg, ID 83460-1690 Phone: 208-496-9560 Fax: 208-496-9561 Email: <a href='mailto:mckaylibrary@byui.edu'>mckaylibrary@byui.edu</a></p>",
        subjects: ["General"],
        contentTypes: [
            "Web Page",
            "Contact Information",
            "Email",
            "Phone",
            "Appointment Scheduling",
        ],
        url: "https://library.byui.edu/contact",
        moreInfo:
            "David O. McKay Library Contact Information HOME / CONTACT US CONTACT US David O. McKay Library 525 South Center Street Rexburg, ID 83460-1690 Phone: 208-496-9560 Fax: 208-496-9561 Email: <a href='mailto:mckaylibrary@byui.edu'>mckaylibrary@byui.edu</a>",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Mission Statement",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["Library Mission"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/mission-statement",
        moreInfo:
            "David O. McKay Library Mission Statement HOME / MISSION STATEMENT David O. McKay Library Mission Statement The mission of the McKay Library is to collect, organize and make available appropriate materials to support the academic and religious aims of the University; to assist patrons in locating, evaluating and managing information; and to maintain an atmosphere conducive to learning “even by study and also by faith.” (Doctrine & Covenants 88:118; 109:7)",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Collection Development Policy (CD)",
        description:
            "<p>McKay Library Collection Development Policy (CD) McKay Library Collection Development Policy (CD) Effective September 2024 August 2025 OVERVIEW I. Introduction A. Purpose of Document II. Library Miss...</p>",
        subjects: [
            "Library Mission",
            "Collection Development",
            "Faculty Resources",
            "Archives",
        ],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/policies/collectionDev.html",
        moreInfo:
            "McKay Library Collection Development Policy (CD) McKay Library Collection Development Policy (CD) Effective September 2024 August 2025 OVERVIEW I. Introduction A. Purpose of Document II. Library Mission & Description A. Mission of the David O. McKay Library B. Overview of the Library: its Patrons and Collections a. Patron Description b. Collection Description C. Collection a. General i. The Church of Jesus Christ of Latter-day Saints (LDS) Materials ii. Foreign Language Materials iii. Music b. Reserve c. Demand Driven Acquisition Materials d. Popular Reading e. Newspapers and Periodicals f. Maps g. Special Collections & Archives h. Teachers Learning Center i. Juvenile Collection j. Issues Collection k. Databases l. Media (Physical and Digital) D. Organization of Collection Development Program III. Collection Development Environment A. Description of needs a. Students b. Faculty, Staff, and Administrative Employees c. Community Patrons, Employee Dependents, and Others B. Collection Lev...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Interlibrary Loan (ILL)",
        description:
            "<p>ILL Processing Workflow and Policies Receive Borrowing Request Check for appropriate information: Verify if McKay Library already owns the item. If so, the patron is notified, and the order is cancell...</p>",
        subjects: ["Circulation", "Interlibrary Loan"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/policies/ill.html",
        moreInfo:
            "ILL Processing Workflow and Policies Receive Borrowing Request Check for appropriate information: Verify if McKay Library already owns the item. If so, the patron is notified, and the order is cancelled. Confirm the existence of the requested item (using OCLC). The request is forwarded to the subject librarian. Subject Librarian Assessment If the item likely cannot be borrowed, notes are added explaining why, which may include: The item is newer than 6 months. The item does not exist in a physical format. Insufficient holdings are available for borrowing. The requested date is within a week (in this case, check for electronic access possibility). If considering purchase: Technical Services checks if the title can be purchased and proceeds if possible. The patron is then notified. If purchase is not possible, the request reverts to a Borrowing request. Interlibrary Loan (ILL) Processing Check OCLC holdings for the item. Create a lending string from a preferred set of libraries (set up b...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Policies",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: [
            "Library Mission",
            "Collection Development",
            "Circulation",
            "Interlibrary Loan",
        ],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/policies",
        moreInfo:
            "David O. McKay Library Policies HOME / POLICIES POLICIES The mission of the McKay Library is to collect, organize and make available appropriate materials to support the academic and religious aims of the University; to assist patrons in locating, evaluating, and managing information; and to maintain an atmosphere conducive to learning “even by study and also by faith.” (Doctrine and Covenants 88:118; 109:7) Loan Period & Fines David O. McKay Library Policies Collection Development Policy Interlibrary Loan Procedures",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Information Literacy",
        description:
            "<p>David O. McKay Library Mission: The mission of the McKay Library is to collect, organize and make available  appropriate materials to support the academic and religious aims of the University; to assi...</p>",
        subjects: ["Library Mission", "Information Literacy"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/policies/infoLiteracy.html",
        moreInfo:
            "David O. McKay Library Mission: The mission of the McKay Library is to collect, organize and make available appropriate materials to support the academic and religious aims of the University; to assist patrons in locating, evaluating, and managing information; and to maintain an atmosphere conducive to learning “even by study and also by faith.” (Doctrine and Covenants 88:118; 109:7) Information Literacy Instruction Instruction plan: We recognize that BYU-Idaho students are unique and individual in their backgrounds, learning needs and styles, and future goals. The McKay Library is committed to providing BYU-Idaho students with information literacy skills that will help them find and evaluate the information they need as students, future employees, family and community leaders and lifelong learners. To fulfill this goal the McKay Library professional librarians provide a variety of instructional opportunities and methods. These include but are not exclusive to: Online web ...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Policies",
        description:
            "<p>David O. McKay Library Policies (BYU Idaho Policies Page)</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/policies/libraryPolicy.html",
        moreInfo: "David O. McKay Library Policies (BYU Idaho Policies Page)",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Loan and Fine Policies",
        description:
            "<p>LOAN PERIODS Student Material Type Limit Loan Period Renewals Allowed Books 99 3 weeks 1 Issues Books No Limit 2 days 1 CDs No Limit 3 weeks 1 DVDs No Limit 1 week 1 Reserve No Limit 2 hours 0 Mac Lab...</p>",
        subjects: ["Faculty Resources", "Equipment Checkout", "Circulation"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/policies/loanFine.html",
        moreInfo:
            "LOAN PERIODS Student Material Type Limit Loan Period Renewals Allowed Books 99 3 weeks 1 Issues Books No Limit 2 days 1 CDs No Limit 3 weeks 1 DVDs No Limit 1 week 1 Reserve No Limit 2 hours 0 Mac Lab Equipment - Varies Faculty Material Type Limit Loan Period Renewals Allowed Books 99 90 days 1 Issues Books No Limit 2 days 1 CDs No Limit 3 weeks 1 DVDs No Limit 1 week 1 Reserve No Limit 2 hours 0 Mac Lab Equipment - Varies Administrative and Staff Material Type Limit Loan Period Renewals Allowed Books 99 30 days 1 Issues Books No limit 2 Days 1 CDs No Limit 3 weeks 1 DVDs No Limit 1 week 1 Reserve No Limit 2 hours 0 Mac Lab Equipment - Varies Alumni & Off Campus Material Type Limit Loan Period Renewals Allowed Books 15 3 weeks 1 CDs 15 3 weeks 1 DVD 15 1 week 1 Reserve 15 2 hours 0 FINES & FEES Item Overdue Fine or Fee Lost Replacement Fee Library Card $20.00 per year - pay at KIM 130 Books na Price of book plus $10.00 processing fee Books on Reserve: $0.25 per hour * (up to $25) Price...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Find Relevant Resources",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/relevant-resources",
        moreInfo:
            "McKay Library Find Relevant Resources HOME / Relevant Resources 1 SELECT YOUR MAJOR Majors All majors 2 BEST BET DATABASES Choose your major above to see the top databases recommended by your Subject Librarian. View More Databases 3 SUBJECT LIBRARIAN Choose your major above to see the Librarian who specializes in your area and can help you find relevant resources. Schedule Appointment 4 RESEARCH GUIDES WHAT IS A RESEARCH GUIDE? At its core, a research guide is an organized collection of library resources related to a certain topic or course. They are also sometimes known as subject guides or libguides. WHY USE A RESEARCH GUIDE? They're a great place to find best methods research. Use them to find the ...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library FLIPSTER ACCESS",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/resources/flipster",
        moreInfo:
            "David O. McKay Library FLIPSTER ACCESS HOME / FLIPSTER ACCESS GETTING STARTED WITH FLIPSTER Access digital magazines available through the McKay library on a variety of platforms. Access Flipster online using the web browser of your computer or mobile device Offline viewing available via the Flipster app for iPads and iPhones, Android Phones and Tablets, and side-loaded to Kindle Fire Tablets Search by title, keyword, or browse by category (available in three platforms, coming soon in Android) How do you access Flipster? Via a Computer Visit the Flipster website . You will be asked to login (same login used for your classes) and then you will be able to browse or search for available magazines. You can search by title or by subject. ...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library NEW YORK TIMES ACCESS",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/resources/new-york-times",
        moreInfo:
            "David O. McKay Library NEW YORK TIMES ACCESS HOME / NEW YORK TIMES ACCESS RETURNING USERS If you have already created an account, simply visit https://www.nytimes.com/ and sign in with your New York Times for full access. New York Times Website NEW USERS The McKay Library has provided you with a NYTimes.com Pass, which gives you complimentary access to NYTimes.com and NYT apps. To claim your pass, start by creating a free NYTimes.com account. You must log in to your account through their website or mobile app to have full access to the New York Times. Register MOBILE APPS NEW YORK TIMES IN EDUCATION NYTimes.com Tailored For Your Class Resources Designed For Educators From curated synopses that connect the news to specific areas of study, to exclusive...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Wall Street Journal Access",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/resources/wsj",
        moreInfo:
            "David O. McKay Library Wall Street Journal Access HOME / McKay Library Wall Street Journal Access Log in or Sign up for WSJ Premium Please be advised to sign out and sign in again using their credentials. To keep your WSJ membership active, you must periodically visit WSJ.com through your school's network. To restore access, please go to the original WSJ link you used to register for access. For technical issues, contact educational.services@dowjones.com directly. Download the Wall Street Journal App for your mobile device. Additional apps can be found at now.wsj.com/mobile/ . Wall Street Journal - Search Articles through Proquest 1984 - present Wall Street Journal Historical - Search Articles through Proquest 1889 - 1990 Introduction to Wall Street Journal For Students",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Student Employment",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["Circulation", "Student Employment", "Interlibrary Loan"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/student-employment",
        moreInfo:
            "David O. McKay Library Student Employment HOME / STUDENT EMPLOYMENT CIRCULATION AND INTERLIBRARY LOAN SERVICES Library Circulation Aides perform the daily tasks necessary to ensure quality customer service for patrons of the David O. McKay Library. Responsibilities include organizing library materials, material check ins/check outs, restocking printers with paper and toner, answering and directing phone calls, and performing other duties as assigned by the Circulation Manager. In addition, Circulation Aides assist patrons by scheduling study rooms, processing I-Card deposits, and providing information about Library databases and other resources. Required Skills: - Strong customer service skills - Ability to multitask in a variety of settings - Detail oriented - Demonstrated ability to understand and communicate clearly in English (both in person and ...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Website Tour",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["Equipment Checkout", "Orientation"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/tour",
        moreInfo:
            "McKay Library Skip to main content David O. McKay Library All Articles Catalog Website Formats ALL FORMATS PRINT BOOKS E-BOOKS PEER REVIEWED ARTICLES SEARCH ADVANCED SEARCH MEET WITH A LIBRARIAN BEGIN YOUR RESEARCH LIBRARY A-Z DATABASES EQUIPMENT & 3D PRINTS AT THE MAC LAB Library News and Announcements Ask a Librarian chat loading... Upcoming Library Events SEE ALL EVENTS Library Resources Orientation (external link)",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Research Starter",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/begin-your-research",
        moreInfo:
            "David O. McKay Library Research Starter HOME / BEGIN YOUR RESEARCH Begin Your Research: Interactive Module 'Begin Your Research' is a derivative of 'The Research Process' by the IUPUI Library used under CC BY-NC-SA . 'Begin Your Research' is licensed under CC BY-NC-SA by the BYU-Idaho David O. McKay Library.",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Begin Your Research",
        description:
            "<p>Begin-Your-Research Begin-Your-Research Internet connection lost. Please check your connection. Retry</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/begin-your-research/story.html",
        moreInfo:
            "Begin-Your-Research Begin-Your-Research Internet connection lost. Please check your connection. Retry",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Equella Digital Asset Management",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/equella",
        moreInfo:
            "David O. McKay Library Equella Digital Asset Management HOME / EQUELLA DIGITAL ASSET MANAGEMENT EQUELLA Equella is BYU-Idaho's Content Management System and allows you to host a variety of content. Microsoft Office & PDF files Images Web Pages Use the button below to schedule a consultation with an Equella Expert. GO TO EQUELLA SCHEDULE NOW Equella Sync is a desktop application to help you manage Equella content. Learn more by watching the introduction video then request installation from the FTC at 208-496-7230.",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Faculty Resources",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["Instruction", "Faculty Resources", "Orientation"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/faculty-resources",
        moreInfo:
            "David O. McKay Library Faculty Resources HOME / FACULTY RESOURCES Faculty Resources LIBRARY INSTRUCTION Schedule a class orientation or assign students to attend a session outside of class. During the orientation a professional librarian will introduce your class to the research tools and resources available through the David O. McKay Library. LEARN MORE SUBJECT LIBRARIANS A subject librarian has been assigned to each department on campus. Your subject librarian can help you find and order library materials. LEARN MORE EQU...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Journals",
        description:
            "<p>David O. McKay Library Journals HOME / JOURNALS McKay Library Contact Information JOURNALS BY TITLE Journal Lookup by DOI or PMID Browse Journals by Discipline</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/journals",
        moreInfo:
            "David O. McKay Library Journals HOME / JOURNALS McKay Library Contact Information JOURNALS BY TITLE Journal Lookup by DOI or PMID Browse Journals by Discipline",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Library Library Instruction",
        description:
            "<p>The David O. McKay Library serves university and community patrons with a vast book collection, hundreds of databases, and much more. The building also houses university archives, a special exhibition area, and instructional technology labs.</p>",
        subjects: ["Instruction", "Information Literacy"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/library-instruction",
        moreInfo:
            "David O. McKay Library Library Instruction HOME / REQUEST LIBRARY INSTRUCTION The David O. McKay Library offers information literacy instruction in developing the skills needed to locate, analyze, and evaluate information. When the remodel is complete we will be able to accommodate classes in the library, however, during the remodel a librarian can be scheduled to come to your classroom. REQUEST LIBRARY INSTRUCTION In addition to face-to-face instruction, we can support your on-campus, online, or blended class through a variety of methods. If you would help with any of the following services, please contact your Subject Librarian . Research Guides Research Guides provide links to selected library sources, videos, and other databases for a specific class or subject area. RESEARCH GUIDES Instructional Tutorials...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "The Mac Lab",
        description:
            "<p>The Mac Lab homepage. Check out our 3D Printers, equipment rentals, and more.</p>",
        subjects: ["Printing Services", "Equipment Checkout"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/maclab",
        moreInfo:
            "Mac Lab | McKay Library The Mac Lab SEE All HOURS WHAT ARE YOU LOOKING FOR? Printing Adobe Help Equipment Checkout Virtual Reality Workshops Cricut EQUIPMENT See All Canon EOS R100 2 Week Checkout Headphones 1 Day Checkout Wacom Tablets 3 Day Checkout GoPros 2 Week Checkout Calculators 2 Week Checkout UPCOMING EVENTS See All",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "3D Printing - Mac Lab | McKay Library",
        description: "<p>Everything about 3D Printing at the Mac Lab!</p>",
        subjects: ["Printing Services"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/maclab/pages/3dPrinting.html",
        moreInfo:
            "3D Printing - Mac Lab | McKay Library 3D Printing Print for academic or personal use with our collection of Prusa printers. SUBMIT A PRINT DOWNLOAD PRUSA SLICER OUR PRINTERS SEE PRICING Prusa MK4 Details PRUSA MK4 Print Area: 250 x 210 x 220 mm | 9.84 x 8.3 x 8.6 in Layer Resolution: 0.05-0.30 mm PRUSA XL - 2T Tool Heads: 2 Print Area: 360 x 360 x 360 mm | 14.17 x 14.17 x 14.17 in Layer Resolution: 0.05-0.30 mm Prusa XL Details HOW TO PRINT SUBMIT A PRINT 1. Find Your Model Design your idea from scratch with a 3D modeling program of your choice or find a model online from Printables or Thingiverse . 2. Open Library 3D Printing Click on Submit a Print SUBMIT A PRINT 3. Upload Your Print Upload your print here. If you don't know what settings to choose, leave them blank, and we'll select the ones that will work best for your print. 4. Check Your BYU-I Email We'll email your BYU-I email confirming the price of your print before start...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Adobe Help - Mac Lab | McKay Library",
        description: "<p>Profession Adobe Product help from the Mac Lab.</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/maclab/pages/adobeHelp.html",
        moreInfo:
            "Adobe Help - Mac Lab | McKay Library Adobe Help Get free access to the Adobe Creative Cloud and help with your design projects from trained lab assistants. CONTACT US IN-PERSON HELP ONLINE HELP The Mac Lab provides in-person assistance to BYU-Idaho employees and students with Adobe related questions and projects. Visit the Maclab The Mac Lab offers online assistance for students and employees who cannot visit the Mac Lab in person. Virtual and on-phone assistance are available. Ask for online help AVAILABLE PROGRAMS Illustrator Photoshop Premiere Pro Indesign Lightroom Classic After Effects Prusa Slicer Canva Office Wordpress *Due to licensing restrictions, program availability is subject to change. Additionally, more programs than listed might be available. Please call the Mac Lab or visit in person to see the full list of current programs...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Contact Us - Mac Lab | McKay Library",
        description: "<p>Learn how to get in contact with the Mac Lab.</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/maclab/pages/contactUs.html",
        moreInfo:
            "Contact Us - Mac Lab | McKay Library OUR HOURS MON - THUR 7:00 AM - 11:30 PM *TUESDAY Closed 11:30 AM - 12:30 PM FRIDAY 7:00 AM - 9:00 PM SATURDAY 9:00 AM - 9:00 PM SUNDAY CLOSED *Hours are subject to change on holidays or during semester breaks. VIEW DETAILED HOURS EMAIL mckaymaclab@byui.edu PHONE 208-496-9550 LOCATION Outside MCK 254",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Cricut - Mac Lab | McKay Library",
        description: "<p>Learn about using the Cricut machine!</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/maclab/pages/cricut.html",
        moreInfo:
            "Cricut - Mac Lab | McKay Library Cricut Cricuts are smart cutting machines to help make almost anything — custom cards, unique apparel, everyday items, and more. *Service only available in person. WHAT IS IT? A Cricut is an electronic cutting machine that can cut all sorts of designs from materials like paper, vinyl, card stock, and iron-on transfers. Some Cricut machines can even cut leather and wood! You can use the Cricut to cut just about anything you would typically cut with scissors or an X-acto knife. A Cricut can cut with much more precision and speed than would ever be achievable by hand! FREQUENTLY ASKED QUESTIONS How do I use the Cricut? Download Cricut Design Space. We recommend using Cricut’s tutorials to begin using the machine: you can use Cricut Help or Cricut Learn to access device specific tutorials. Are there materials I can buy from the Library for the Cricut? No. The local Walmart has Cricut supplies, as well as Amazon and the Cricut online store. Am I able to use ...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "Equipment - Mac Lab | McKay Library",
        description: "<p>See all our equipment available for checkout. </p>",
        subjects: ["Equipment Checkout"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/maclab/pages/equipment.html",
        moreInfo:
            "Equipment - Mac Lab | McKay Library Equipment check out only available in person. Equipment Checkout We rent out cameras, tripods, headphones, Wacom drawing tablets, Cricuts, microphones, projectors and more - for free! *Equipment check out only available in person. AVAILABLE EQUIPMENT Back Next Policies See all Policies *A fee of $10 per day will be charged to your account for any late item. Ask a Mac Lab assistant for options to renew your equipment. *All equipment should be returned at least 15 minutes prior to the Library closing to allow sufficient time for processing. FREQUENTLY ASKED QUESTIONS Am I able to renew my checkout over the phone? In order to renew your checkout, you will need to bring the equipment to the lab so we can inspect it. Some equipment may be checked out again after we have inspected it. What is the rental period for checkout items? Before checking out equipment, ask a Mac Lab employee about the checkout period for that item. Please keep in mind that overdue ...",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "VR - Mac Lab | McKay Library",
        description: "<p>Learn more about our Virtual Reality offerings.</p>",
        subjects: ["Library Mission"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/maclab/pages/vr.html",
        moreInfo:
            "VR - Mac Lab | McKay Library Virtual Reality We offer access to VR apps such as Organon, Escosphere, BRINK Traveler, and more. AVAILABLE APPS Organon Education Mondly Education Anne Frank House Documentary On the Morning Documentary Home After War Documentary Notes on Blin dness Documentary Traveling While Black Documentary Wander Explore National Geo graphic Explore Mission:ISS Explore Ecosphere Explore Lost Recipes Explore Tilt Brush Explore Healium Explore Keep Talking and Nobody Explodes Video Game Beat Saber Video Game FREQUENTLY ASKED QUESTIONS How can I check out the VR headset? Come to the Mac Lab and check it out for free! It has a 24 hour checkout period. Am I able to screen cast while playing VR? Yes! Just ask one of the employees, and we can show you how to screen cast.",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
    {
        name: "McKay Library Maps",
        description:
            "<p>David O. McKay Library Maps HOME / MAPS MAPS FIRST FLOOR SECOND FLOOR THIRD FLOOR CAMPUS MAP FIRST FLOOR POINTS OF INTEREST</p>",
        subjects: ["General"],
        contentTypes: ["Web Page"],
        url: "https://library.byui.edu/maps",
        moreInfo:
            "David O. McKay Library Maps HOME / MAPS MAPS FIRST FLOOR SECOND FLOOR THIRD FLOOR CAMPUS MAP FIRST FLOOR POINTS OF INTEREST",
        accessNote: "Available to all BYU-Idaho students, faculty, and staff.",
    },
];
