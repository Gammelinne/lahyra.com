export default defineI18nConfig(() => ({
  legacy: false,
  Home: {
    Title: {
      FirstName: "Kylian",
      LastName: "Renault",
    },
    Job: "Independent IT consultant · Computer science engineer",
    Infos: {
      Title: "My information",
      Name: "Kylian Renault",
      Age: "25 years old",
      Location: "Caen, France",
      Phone: "+33 6 67 59 06 50",
      Birth: "14 August 2001",
      Language: "French (native), English (C1, TOEIC 945/990), Spanish (basic)",
      Driving: "Driving license + vehicle",
      Company: "Lahyra (EI RENAULT Kylian)",
    },
    Resume: "Resume",
    Description: `Through Lahyra, my business, I help individuals, associations and companies in three areas: IT consulting (needs analysis, application project management, digital transformation), website creation, and PC repair and custom builds. I host each website on an affordable solution suited to its needs, such as Vercel for the Judo Club Ouistreham website. A computer science engineer who graduated from CESI and holder of a specialized master's degree in project portfolio management, I managed application projects at Agrial's IT department.`,
    GithubActivity: "My Github Activity",
    Contributions: "Contributions",
    Github: "Github",
    LinkedIn: "LinkedIn",
    Contact: "Contact",
  },
  Route: {
    Home: "Home",
    Projects: {
      Title: "Computer Science Projects",
      Development: "Development",
      Server: "My Server",
      Music: "Music",
      Games: "Games",
    },
    About: {
      Title: "About",
      Resume: "Resume",
      Skills: "Skills",
      Hobbies: "Hobbies",
    },
    Hobbies: {
      Title: "Hobbies",
      Music: "Music",
      Games: "Games",
    },
    Contact: "Contact",
    Education: "Education",
    Experience: "Experiences",
    Legal: "Legal notice",
  },
  Education: {
    Loading: "Loading...",
    Title: "Educations",
    More: "Learn more",
    Five: {
      Title: "CESI Graduate School of Engineering: Specialized Master's Degree in Project Portfolio Management (graduated), work-study program at Agrial",
      Date: "2025 - 2026",
      Website:
        "https://www.cesi.fr/formation/mastere-specialise-manager-de-portefeuille-de-projets-innovation-2108680/",
      Description:
        "Project management,Team management,English,Agility,DevOps,Cloud",
      Location: "4 Place Boston - 14200 Hérouville-Saint-Clair",
    },
    Four: {
      Title:
        "CESI Graduate School of Engineering: Engineering Degree in Computer Science with a specialization in Data Science and Artificial Intelligence (graduated), work-study program at Capgemini",
      Date: "2022 - 2025",

      Website:
        "https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/#cycleprepa",
      Description:
        "Automony, Teamwork, Network, Development, Project Management, English",
      Location: "4 place boston - 14200 Hérouville-Saint-Clair",
    },
    Three: {
      Title:
        "CESI Engineering School: Integrated preparatory class: computer science minor",
      Date: "09/2020 - 07/2022",
      Website:
        "https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/#cursusing%C3%A9",
      Description: "Group work,Mathematics,Computer science,Physics,English",
      Location: "4 place boston - 14200 Hérouville-Saint-Clair",
    },
  },
  Experience: {
    Title: "Professional Experiences",
    Website: "Learn more",
    Twelve: {
      Title: "Founder / Independent IT consultant",
      Date: "Since 11/2026",
      Website: "https://lahyra.com/",
      Description:
        "IT consulting: needs analysis, support for application and digital transformation projects. - Website creation for individuals and businesses. - Computer repair and custom PC building.",
      Location: "Lahyra (sole proprietorship) - Caen, Normandy",
    },
    Eleven: {
      Title: "IT Project Manager (work-study)",
      Date: "10/2025 - 10/2026",
      Website: "https://www.agrial.com/",
      Description:
        "Managing application projects and coordinating business teams, technical teams, software vendors and service providers. - Gathering, analysing and formalising business needs; writing functional specifications. - Organising acceptance testing, tracking defects and supporting production releases. - Handling incidents, change requests and action plans. - Managing the evolution of a document management system (DMS), OCR software and document flows. - Taking part in the study for migrating an on-premise application to a SaaS solution.",
      Location: "Agrial, IT Department - 14000 Caen",
    },
    Ten: {
      Title: "Associate Digital Technician (work-study)",
      Date: "11/2024 - 09/2025",
      Website: "https://www.capgemini.com/fr-fr/",
      Description:
        "Migrating software applications for several clients in an industrial environment. - Maintaining and evolving applications; writing and updating technical documentation. - Taking part in the follow-up of a migration project and coordinating with technical teams.",
      Location: "Capgemini (altran) - 50440 Beaumont-Hague",
    },
    Eight: {
      Title: "International Internship in Web/Python Development",
      Date: "09/2023 - 12/2023",
      Website: "https://www.resqplus.eu/partners/aalborg-university",
      Description:
        "Designing a dashboard using the Shiny framework to identify improvement opportunities for the existing dashboard, collaborating with prominent professors such as Mr. HENDRIK KNOCHE and PhD students like HAMZAH ZIADEH (Python). - Improving the existing dashboard in collaboration with doctors from across Europe who use it (R). - Creating a chatbot using the Rasa framework to generate charts tailored to the needs of doctors (Python).",
      Location: "Aalborg University - 9000 Aalborg (Denmark)",
    },
    Six: {
      Title: "Web/Mobile Developer Internship - Qwice",
      Date: "01/2023 - 04/2023",
      Website: "https://qwice.org/",
      Description:
        "Making an existing web application compatible with a native Android/iOS mobile application using the Capacitor.js framework (Android Studio / Xcode). - Adding push notifications to the app (Firebase / PHP). - Adding and fixing features on the frontend (VueJs).",
      Location: "Normandie Incubation - 14000 Caen",
    },
    Five: {
      Title: "Fullstack Developer Internship",
      Date: "04/2022 - 08/2022",
      Website: "https://boomerangweb.net/gestion-des-achats-bons-de-commande/",
      Description:
        "Creating a client management interface allowing server centralization (Laravel + Vuejs + MySQL). - Creating bash scripts to monitor server statuses (bash). - Unit testing of the most critical functions (PHPUnit + Mockery).",
      Location: "Boomerang Web - 14000 Caen",
    },
    Four: {
      Title: "Volunteer Assistant Fab Manager",
      Date: "09/2021 - 01/2022",
      Website: "https://www.facebook.com/lepavillonorb",
      Description:
        "Basic computer lessons (Word, Excel, Powerpoint, Internet, etc.) for beginners. - Use of fablab machines (3D printer, laser cutter, etc.).",
      Location: "Sociocultural Center - Ouistreham",
    },
  },

  Project: {
    Github: "Github",
    Title: "My work",
    Route: "API Routes list",
    Routes: "API routes",
    Website: "View project",
    SeeLess: "See less",
    SeeMore: "See more",
    One: {
      Title: "Judo Club Ouistreham",
      Date: "Since September 2025",
      Website: "https://judoclubouistreham.com/",
      Description:
        "Official website of the Judo Club Ouistreham, which I designed, built and launched for the club, and which I keep maintaining and updating. - The website presents the club's disciplines (judo, taiso, self-defense, Bébés Chuteurs), schedules and prices, the events calendar highlighting upcoming events, competition results, partners, the board and the shop. - It is a server-side rendered (SSR) Nuxt 3 application written in TypeScript, with prerendered static pages, responsive images optimized as WebP, Brotli/gzip compression and a strict HTTP security policy. - SEO is handled page by page (meta tags, Open Graph, canonical URLs) and code quality is checked with ESLint, TypeScript type checking and Vitest unit tests. - The website is hosted on Vercel, an affordable solution well suited to this kind of showcase website, and every update automatically goes through quality checks on GitHub Actions. I regularly publish the club's news: competition results, newsletters and event posters.",
      Technologies:
        "Nuxt 3,Vue 3,TypeScript,PrimeVue,Tailwind CSS,SSR,SEO,Vitest,Vercel,GitHub Actions",
    },
    Two: {
      Title: "lahyra.com",
      Date: "Since June 2024",
      Website: "https://github.com/Gammelinne/lahyra.com",
      Description:
        "The website you are browsing: my portfolio, which I designed, built and host on my own server. - It is built with Nuxt 3 and Vue 3 in TypeScript, using PrimeVue and Tailwind CSS for the interface and Pinia for state management. - The website is available in French and English thanks to Nuxt I18n, and offers a light/dark mode as well as several PrimeVue themes to choose from (Aura, Lara, Nora, Material). - A Nitro server route queries the GitHub GraphQL API to display my activity as a contribution calendar on the home page. - On every update of the main branch, a GitHub Actions pipeline builds the Docker image and publishes it to Docker Hub; the container is then automatically updated on my server by Watchtower.",
      Technologies:
        "Nuxt 3,Vue 3,TypeScript,PrimeVue,Tailwind CSS,Pinia,I18n,GitHub API,Docker,GitHub Actions,Self-hosting",
    },
  },
  Hobbies: {
    Music: {
      Title: "Music",
      Artist: "My favorite artists",
      Playlist: "My playlists",
      Question: "What are the French artists in the list?",
      Submit: "Submit",
      Success: "Congratulations!",
      Error: "Try again",
      SucessMessage: "You have successfully completed the quiz!",
      ErrorMessage: "You have not completed the quiz correctly! (3 answers)",
    },
    Games: {
      Title: "Jeux",
    },
  },
  Server: {
    Title: "My Server",
    Overview: "Overview",
    OverviewText: "This is my personal server hosted at home. It runs various services and projects to manage applications, databases, and monitoring.",
    Specifications: "Specifications",
    CPU: "CPU",
    RAM: "RAM",
    Storage: "Storage",
    OS: "Operating System",
    CPUValue: "Intel Core n100",
    RAMValue: "8GB DDR4",
    StorageValue: "256GB NVMe SSD",
    OSValue: "Ubuntu Server 24.04 LTS",
    Docker: "Dockerized Services",
    Dash: "Dash",
    DashDesc: "System and container monitoring.",
    Pihole: "Pi-hole",
    PiholeDesc: "Network-wide ad and tracker blocking.",
    MariaDB: "MariaDB",
    MariaDBDesc: "Database management.",
    Portfolio: "Portfolio",
    PortfolioDesc: "My personal portfolio website.",
    Watchtower: "Watchtower",
    WatchtowerDesc: "Automatic container updates.",
    GitLab: "GitLab CE",
    GitLabDesc: "Self-hosted Git and CI/CD.",
    PrimeVue: "PrimeVue Nuxt",
    PrimeVueDesc: "This website.",
    JudoClub: "Judo Club Ouistreham",
    JudoClubDesc: "Node.js web app for the Judo club.",
    Note: "Note: The embedded dashboard is read-only for security reasons."
  },
  Footer: {
    Rights: "All rights reserved",
    Legal: "Legal notice",
  },
  Legal: {
    Title: "Legal notice",
    Updated: "Last updated: November 1, 2026",
    Publisher: {
      Title: "Website publisher",
      Text: "The lahyra.com website is published by Kylian Renault, sole proprietor (entrepreneur individuel), under the trade name Lahyra.",
      TradeName: "Trade name",
      CompanyName: "Company name",
      LegalForm: "Legal form",
      LegalFormValue: "Sole proprietorship (French micro-entrepreneur scheme)",
      Address: "Address",
      Siret: "SIRET",
      SiretValue: "Registration in progress",
      Email: "Email",
      Phone: "Phone",
    },
    Director: {
      Title: "Publication director",
      Text: "The publication director is Kylian Renault.",
    },
    Hosting: {
      Title: "Hosting",
      Text: "The website is hosted on a server operated by EI RENAULT Kylian, {address}. Phone: {phone}.",
    },
    Property: {
      Title: "Intellectual property",
      Text: "The texts, images and logo of this website are the property of EI RENAULT Kylian unless otherwise stated. Any reproduction without permission is prohibited. The logos of the schools and companies mentioned belong to their respective owners.",
    },
    Privacy: {
      Title: "Personal data",
      Text: "This website does not use any advertising or analytics cookies. Your display preferences (language, theme) are only stored on your device. Information sent by email is used solely to answer your request and is never shared with third parties.",
    },
  },
}));
