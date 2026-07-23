/* =====================================================================
   SITE CONTENT
   ---------------------------------------------------------------------
   Everything you see on the page comes from this file. To update your
   bio, links, projects, or anything else, edit the values below and
   save — you should not need to touch index.html, styles.css, or
   app.js for normal updates. See INSTRUCTIONS.md for walkthroughs.
   ===================================================================== */

const SITE_DATA = {

  meta: {
    title: "Natnael Aklilu — Computer Science Student & Builder",
    description: "Portfolio of Natnael Aklilu, a Computer Science student at Wolaita Sodo University focused on network security, web development, and building tech ventures in Ethiopia.",
  },

  nav: {
    name: "NATNAEL",
    handle: "AKLILU",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    status: "SYSTEMS ONLINE — AVAILABLE FOR WORK",
    eyebrow: "Computer Science Student — Wolaita Sodo University",
    heading: "I'M NATNAEL",
    phrases: [
      "Building tech solutions with purpose, faith, and vision.",
      "Learning to defend networks and secure systems.",
      "Starting ventures that serve Ethiopia's digital future.",
    ],
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
    portrait: "portrait.jpg",
    portraitFallback: "avatar-placeholder.svg",
    portraitAlt: "Natnael Aklilu",
  },

  about: {
    kicker: "Who I Am",
    heading: "About Me",
    paragraphs: [
      "I'm Natnael Aklilu, a first-year Computer Science student at Wolaita Sodo University. Right now I'm learning the fundamentals of network defense and how to build secure platforms for local businesses.",
      "My goal is to start tech ventures that bring real security and value to Ethiopia's growing digital scene. Writing code is only half the job — the harder challenge is protecting data and keeping systems safe from exploits. I'm actively pursuing scholarships that will let me go deeper into security infrastructure and help build up our country's technical future.",
    ],
    quote: "My background keeps me humble, my curiosity keeps me moving, and my faith keeps me grounded.",
    values: [
      { icon: "cpu", title: "Curiosity", sub: "Constant learning" },
      { icon: "globe", title: "Impact", sub: "Real solutions" },
      { icon: "shield", title: "Integrity", sub: "Ethical work" },
    ],
  },

  skills: {
    kicker: "What I Work With",
    heading: "Skills & Tools",
    categories: [
      { name: "Languages", icon: "code", items: ["Python", "C++", "JavaScript", "SQL"] },
      { name: "Web & Frameworks", icon: "globe", items: ["Django", "React", "Next.js", "Node.js", "Tailwind CSS"] },
      { name: "Security & Networking", icon: "shield", items: ["Network Defense", "Encryption", "Secure Auth", "Linux"] },
      { name: "Currently Learning", icon: "terminal", items: ["Penetration Testing", "Cloud Security", "System Design"] },
    ],
  },

  projects: {
    kicker: "Featured Work",
    heading: "Projects",
    subheading: "A selection of my recent technical work.",
    filters: ["ALL", "SYSTEMS", "SECURITY", "WEB", "AI"],
    items: [
      {
        title: "Restaurant Sync-System",
        description: "A centralized command center for businesses — syncing inventory, sales, and employee data, built for scalable cloud ERP integration.",
        tags: ["Django", "React", "SQLite"],
        category: "SYSTEMS",
        icon: "folder",
        link: "https://github.com/nattify-x/Restaurant-System",
      },
      {
        title: "Gov & Military Ops",
        description: "Secure, high-performance logistics and monitoring software featuring military-grade authentication and encrypted data streams.",
        tags: ["Encryption", "C++", "Secure Auth"],
        category: "SECURITY",
        icon: "lock",
        link: "https://github.com/nattify-x/AION-CORE-Unified-Command",
      },
      {
        title: "Web Solutions",
        description: "Full-stack web development including domain registration, secure hosting, and ongoing brand maintenance for clients.",
        tags: ["Next.js", "Tailwind", "Node"],
        category: "WEB",
        icon: "globe",
        link: "https://github.com/nattify-x/abbapascalcatholicschool.edu.et",
      },
      {
        title: "Amharic Speech Transcription",
        description: "A system for learning and automatically transcribing Amharic speech, converting spoken words into written text.",
        tags: ["NLP", "Speech-to-Text"],
        category: "AI",
        icon: "terminal",
        link: null,
      },
      {
        title: "Breast Cancer Detection",
        description: "Uses machine learning to help identify early signs of breast cancer, supporting timely treatment and better outcomes.",
        tags: ["Machine Learning", "Healthcare"],
        category: "AI",
        icon: "cpu",
        link: null,
      },
      {
        title: "Skin Disease Detection",
        description: "Detects skin diseases early from images, supporting timely treatment and better patient outcomes.",
        tags: ["Computer Vision", "Healthcare"],
        category: "AI",
        icon: "cpu",
        link: null,
      },
    ],
  },

  blogPosts: [
    // Empty on purpose — the Blog section stays hidden until you add a post.
    // Copy this shape into the array above to add one:
    // { title: "Post title", date: "August 2026", excerpt: "Short summary.", link: "https://..." },
  ],

  community: {
    heading: "Join the Community",
    text: "Connect with other developers, share projects, and discuss the future of tech infrastructure.",
    ctaLabel: "Enter Our Community",
    ctaHref: "https://t.me/Natty_Flow",
  },

  faith: {
    kicker: "Foundation & Purpose",
    verse: "Commit to the Lord whatever you do, and He will establish your plans.",
    reference: "Proverbs 16:3 (NLT)",
    statement: "Tech is my tool, but faith is my foundation. I believe in building solutions that serve others with integrity — every project is a chance to create value grounded in truth.",
  },

  contact: {
    heading: "Get in Touch",
    text: "I'm available for freelance projects, consultation, and collaboration. Let's build something great together.",
    email: "natnaelaklilu617@gmail.com",
    telegram: "https://t.me/nattify_x",
    github: "https://www.github.com/nattify-x",
  },

  terminal: {
    label: "guest@natnael",
    welcome: "Welcome. Type 'help' to see what I can do.",
    commands: {
      "help": "Available commands: about, skills, projects, contact, faith, clear",
      "about": "Natnael Aklilu — CS student at Wolaita Sodo University, learning network defense and building secure platforms for Ethiopian businesses.",
      "whoami": "guest — but you can call yourself a curious visitor.",
      "skills": "Python, C++, JavaScript, Django, React, Network Defense, Encryption, Linux.",
      "projects": "6 projects logged. Scroll up to the Projects section to see them.",
      "contact": "Email: natnaelaklilu617@gmail.com — Telegram: @nattify_x",
      "faith": "Rooted in Proverbs 16:3 — scroll to the Faith section for the full verse.",
      "sudo make coffee": "Permission denied: you're not in the sudoers file. This incident will be reported.",
    },
  },

  footer: {
    name: "Natty",
  },
};
