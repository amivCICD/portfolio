

const projects = [
    {
        subtitle: "Personal AI Knowledge Assistant (RAG Application)",
        version: "Version 1.0",
        imageSrc: "/pigeon_post_3_screens.png",
        mainTitle: "Personal AI Knowledge Assistant (RAG Application)",
        bulletPoints: [
            "Architected an end-to-end Retrieval-Augmented Generation (RAG) system integrating an Android client, Spring Boot REST API, PostgreSQL/pgvector vector database, and locally hosted Llama 3 and nomic-embed-text models.",
            "Optimized semantic search and AI response generation to deliver sub-second retrieval and inference entirely on self-hosted edge infrastructure.",
            "Designed secure JWT authentication with refresh tokens, enabling user-isolated note management and AI-powered question answering over personal knowledge.",
            "Containerized and deployed the backend using Docker with PostgreSQL, Ollama, and Cloudflare Tunnel, creating a production-ready self-hosted AI platform."
        ],
        sideNote: "",
        tags: [
            "Spring Boot",
            "PostgreSQL",
            "pgvector",
            "nomic-embed-text",
            "Java",
            "Android"
        ],
        button1Link: "#",
        button1Title: "(Video Demo coming soon)",
        button2Link: "https://github.com/ArtimusMaximus/pigeon_post_android/blob/master/README.md",
        button2Title: "View Documentation",
        videoURL: null

    },
    {
        subtitle: "Router Content Management Application",
        version: "Version 2.2.0",
        imageSrc: "/NUA_portfolio_3_screens.png",
        mainTitle: "NUA (Node Unifi API)",
        bulletPoints: [
            "Engineered a full-stack network management dashboard using Node.js, Express, and React to control local device access, apply dynamic traffic rules, and enforce custom site-blocking filters.",
            "Integrated UniFi Controller REST APIs with server-side authentication to execute real-time client isolation, bandwidth management, and automated network policy updates.",
            "Implemented scheduled background jobs (Cron) for automated time-limit enforcement, state persistence, and scheduled network access toggles across connected devices.",
        ],
        sideNote: "This software only works with UniFi Cloud Gateways.",
        tags: [
            "Node.js",
            "React.js",
            "Express.js",
            "Prisma ORM",
            "SQLite",
        ],
        button1Link: "https://github.com/ArtimusMaximus/NUA",
        button1Title: "View Github Repo.",
        button2Link: "https://github.com/ArtimusMaximus/NUA/blob/master/README.md",
        button2Title: "Documentation",
        videoURL: null
    },
    {
        subtitle: "Original Website redesign",
        version: "Version: Beta",
        imageSrc: "/nt_portfolio_3_screens.png",
        mainTitle: "Northtown Company Website",
        bulletPoints: [
            "Engineered a greenfield Next.js web application featuring over 100+ content pages, dynamic product showcases, and a customizable layout engine with system-wide dark theme support.",
            "Optimized content delivery and SEO strategy by leveraging Next.js hybrid rendering (SSG/ISR), achieving sub-second page loads and seamless indexing across extensive product catalogs.",
            "Architected a modular component library with flexible page layout systems, enabling the client to dynamically customize page structures and featured product sections without developer intervention."
        ],
        sideNote: "Products and datasheets may not be current, DO NOT use them as a reference",
        tags: [
            "Next.js",
            "React.js",
            "Javascript",
            "TailwindCSS",
            "Vercel",
        ],
        button1Link: "https://northtown-company-git-master-arthurmodymanivgmailcoms-projects.vercel.app/",
        button1Title: "View Demo Page",
        button2Link: "",
        button2Title: null,
        videoURL: null
    },
    {
        subtitle: "Real Time Event Registry App.",
        version: "Version 5.0",
        imageSrc: "/claims_gifts_portfolio_3_screens.png",
        mainTitle: "'Claims Gifts' Event Organizational App.",
        bulletPoints: [
            "Brings event planning, invitations, wish lists, and participant coordination into one shared experience, reducing the need for scattered messages and spreadsheets.",
            "Helps groups avoid duplicate purchases by showing which items have been claimed and allowing participants to share responsibility for larger gifts.",
            "Gives organizers practical tools to monitor event progress, manage participants, search item lists, and export purchasing responsibilities for offline use."
        ],
        sideNote: "",
        tags: [
            "React",
            "DaisyUI",
            "Firebase",
            "React Router"
        ],
        button1Link: "https://github.com/ArtimusMaximus/claimsgiftsv5",
        button1Title: "View Github Repo.",
        button2Link: "https://github.com/ArtimusMaximus/claimsgiftsv5/blob/security/firebase-rules/README.md",
        button2Title: "Documentation",
        videoURL: null
    },
    {
        subtitle: "Wordle Multi-Player via Websockets",
        version: "2.0",
        imageSrc: "/chic_wordle_portfolio_3_screens.png",
        mainTitle: "Wordle Multi-Player",
        bulletPoints: [
            "Spring Boot, TypeScript powered \"Chic\" style and themed Wordle game that allows replayability after the initial word of the day.",
            "Play with friends in real-time with instant messaging, or play solo with a random word generator.",
        ],
        sideNote: "",
        tags: [
            "Java",
            "Spring Boot",
            "Javascript",
            "Websockets",
        ],
        button1Link: "https://github.com/amivCICD/word",
        button1Title: "View Github Repo.",
        button2Link: "https://word.es9.app",
        button2Title: "Play Game",
        videoURL: null
    },
    // {
    //     subtitle: "",
    //     version: "",
    //     imageSrc: "",
    //     mainTitle: "",
    //     bulletPoints: [
    //         "",
    //     ],
    //     sideNote: "",
    //     tags: [
    //         "",
    //     ],
    //     button1Link: "",
    //     button1Title: "View Github Repo.",
    //     button2Link: "",
    //     button2Title: "Documentation",
    //     videoURL: null
    // },
    // {
    //     subtitle: "",
    //     version: "",
    //     imageSrc: "",
    //     mainTitle: "",
    //     bulletPoints: [
    //         "",
    //     ],
    //     sideNote: "",
    //     tags: [
    //         "",
    //     ],
    //     button1Link: "",
    //     button1Title: "View Github Repo.",
    //     button2Link: "",
    //     button2Title: "Documentation",
    //     videoURL: null
    // },
    // {
    //     subtitle: "",
    //     version: "",
    //     imageSrc: "",
    //     mainTitle: "",
    //     bulletPoints: [
    //         "",
    //     ],
    //     sideNote: "",
    //     tags: [
    //         "",
    //     ],
    //     button1Link: "",
    //     button1Title: "View Github Repo.",
    //     button2Link: "",
    //     button2Title: "Documentation",
    //     videoURL: null
    // },

];
//

export default projects;