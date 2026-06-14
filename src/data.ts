/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Certification, SkillCategory, Achievement } from "./types";

// ─── Personal Info (extracted from joegithubpro.github.io/Profile) ────────────

export const personalInfo = {
  name: "Youssef Mohamed Ali",
  title: "Back-End .NET Developer",
  tagline: "Specialized in back-end of web applications, desktop apps, and mobile solutions.",
  birthday: "11 December 2001",
  age: 23,
  city: "Suez, Egypt",
  address: "Egypt, Suez, National Unity Street",
  phone: "+20 1067292340",
  email: "youssef.mohamed.net.eg@gmail.com",
  website: "https://joegithubpro.github.io/Profile/",
  freelance: "Available",
  degree: "Bachelor of Computer Science",
  university: "Suez Canal University, Ismailia",
  cvUrl: "./assets/files/Youssef Mohamed-Backend (.NET).pdf",
  socials: {
    github: "https://github.com/JoeGitHubPro",
    linkedin: "https://www.linkedin.com/in/youssef-mohamed-ali",
    twitter: "https://www.x.com/Y_mohamed_Ali",
    facebook: "https://www.facebook.com/profile.php?id=100004471519479",
    instagram: "https://www.instagram.com/youssef_mohamed_ali_21",
    wuzzuf: "https://wuzzuf.net/me/Youssef-Mohamed-Ali"
  }
};

// ─── Aspirations (extracted from portfolio) ────────────────────────────────────

export const aspirationsData = [
  {
    id: "dotnet-core",
    title: ".NET Core",
    priority: "High Priority",
    description:
      ".NET Core is a free, open-source, cross-platform framework for building modern, scalable, and high-performance applications. Goal: deepen expertise in monolithic, microservices, and serverless architectures."
  },
  {
    id: "software-architectures",
    title: "Software Architectures",
    priority: "Medium Priority",
    description:
      "Deepen knowledge of monolithic architecture, microservices architecture, and serverless architecture through hands-on practice."
  },
  {
    id: "angular",
    title: "Angular Framework",
    priority: "Less Priority",
    description:
      "Learn Angular — a front-end framework for building dynamic web applications using TypeScript — to complement strong back-end skills and deliver full-stack solutions."
  }
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projectsData: Project[] = [
  // ── Featured / Modern Projects ──────────────────────────────────────────────
  {
    id: "cdms-custody",
    title: "CDMS - Custody Management Platform",
    category: "Full Stack",
    role: "Lead Backend Developer",
    period: "Jul 2024 – Aug 2024",
    description:
      "An enterprise web system built for Suez Canal University to supervise high-value custody assets with automated audit trails, multi-theme layouts, and custom email notification dispatchers.",
    problemSolved:
      "Optimized critical bottleneck database queries across thousands of asset records under peak university audit periods while guaranteeing complete multi-tenant transaction isolation.",
    architectureChoices: [
      "Multi-Tenant architecture reducing database schema code redundancy by 40%",
      "Entity Framework Core query optimization via lazy vs eager evaluation testing",
      "Rigid role-based access controller separating student lockers and university administrators"
    ],
    keyFeatures: [
      "25% optimization in query speed through targeted LINQ indexers & custom projection queries",
      "Automated e-mail notifications dispatch system triggered instantaneously on custody asset transfer",
      "Robust department-specific multi-tenancy guaranteeing strict operational boundaries",
      "Awarded 1st place in the 5th Student Research Conference at Suez Canal University"
    ],
    technologies: ["C#", ".NET Core 8.0 MVC", "EF Core", "SQL Server", "LINQ", "Multi-Tenancy", "HTML5", "CSS3"],
    githubUrl: "https://github.com/JoeGitHubPro",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-6.html",
    metrics: [
      { label: "Query Speed Efficiency", value: "+25% Improvement" },
      { label: "Codebase Reuse", value: "40% Redundancy Cut" },
      { label: "Accolade Received", value: "1st Place Award" }
    ],
    featured: true
  },
  {
    id: "safesystem-pos",
    title: "CafeSystem POS Desktop Engine",
    category: "Desktop App",
    role: "Lead Backend & UI Developer",
    period: "Feb 2026 – May 2026",
    description:
      "A comprehensive café point-of-sale and backend administration system optimized for rapid high-frequency desktop checkout operations.",
    problemSolved:
      "Created a transaction engine that handles complex localized items, weight-scale parsing (fractional items), and multi-tier loyalty ledgers with zero delay.",
    architectureChoices: [
      "WinForms utilizing modern .NET 10 core runtime for high rendering performance",
      "Code-First EF Core architecture supporting streamlined offline-first tables",
      "Role-based desktop screen access preventing unauthorized price modifies"
    ],
    keyFeatures: [
      "Arabic RTL dark-themed checkout overlay designed for immediate tactile response",
      "Fractional item weight-scale computations (e.g., selling food quantities by decimal weights)",
      "Suspended/hold order queues with state restore, allowing attendants to switch customers mid-queue",
      "Dynamic nested recursive categories supporting high-density menus",
      "Custom loyalty rewards cards system and automatic discount ledgering",
      "Inventory alerts system checking stock depletion thresholds in real-time"
    ],
    technologies: ["C#", ".NET 10", "WinForms", "EF Core", "SQL Server", "ASP.NET Core Identity"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Checkout Response", value: "Sub-10ms UI latency" },
      { label: "Database Engine", value: "SQL Server LocalDB Optimized" },
      { label: "Framework Node", value: ".NET 10 modern runtime" }
    ],
    featured: true
  },
  {
    id: "smart-clinic-api",
    title: "Smart Clinic Management Web API",
    category: "Web API",
    role: "Backend Software Engineer",
    period: "Feb 2026 – May 2026",
    description:
      "A clinic management REST API featuring stateful appointment scheduling, comprehensive patient medical histories, and robust role-based access control.",
    problemSolved:
      "Protected sensitive clinical patient records while automating complex appointment conflicts and dynamic booking structures.",
    architectureChoices: [
      "Domain-Driven Design (DDD) principles separating Core Domain, Infrastructure, and Presentation",
      "Repository & Unit of Work pattern preventing memory database synchronization issues",
      "JWT Bearer authentication architecture utilizing high-security cryptographic keys"
    ],
    keyFeatures: [
      "Granular role-based access controls (RBAC) separating Doctors, Staff, and Patients",
      "Dynamic scheduler eliminating double-booking issues",
      "Comprehensive encrypted patient records log and history modifications tracker",
      "JWT Token refresh handling for persistent and secure sessions"
    ],
    technologies: ["C#", ".NET 10", "ASP.NET Core Web API", "JWT Auth", "EF Core", "SQL Server", "LINQ"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Session Security", value: "JWT Keys & Refresh" },
      { label: "Architecture Core", value: "Repository Pattern" },
      { label: "Engine Platform", value: "ASP.NET Web API 10" }
    ],
    featured: true
  },
  {
    id: "daark-realestate",
    title: "Daark Real Estate API Engine",
    category: "Web API",
    role: "Freelance Backend Developer",
    period: "Feb 2024 – May 2024",
    description:
      "A high-performance backend real estate portal managing properties, listings, and agent communications.",
    problemSolved:
      "Eliminated tightly-coupled business domains and database schemas using custom Object DTO mappers and clean database migrations.",
    architectureChoices: [
      "Clean separation of concerns with AutoMapper DTO mappings for database/presentation layers",
      "Code-First Entity Framework Core pipeline for migration stability",
      "Repository architectural pattern"
    ],
    keyFeatures: [
      "JWT Bearer identity authentication and profile dashboards",
      "Complex filtering queries on location, property parameters, and pricing tiers",
      "Automated image asset metadata linking with lazy-loaded entities"
    ],
    technologies: ["C#", ".NET Web API Core 7.0", "EF Core", "AutoMapper", "SQL Server", "DTOs"],
    githubUrl: "https://github.com/JoeGitHubPro",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-7.html",
    metrics: [
      { label: "Mapping Latency", value: "Auto-Compiled profile mapping" },
      { label: "Schema Control", value: "Robust DB Migrations" }
    ],
    featured: false
  },
  {
    id: "task-manager-mvc",
    title: "Collaborative Academic Task System",
    category: "Full Stack",
    role: "Contract Software Engineer",
    period: "Apr 2024 – May 2024",
    description:
      "A collaborative student-teacher portal built to track coursework submissions, file delivery pipelines, and grades.",
    problemSolved:
      "Subdued assignment submission bottleneck periods using smart upload queues while ensuring faculty only can modify graded records.",
    architectureChoices: [
      "Classic MVC structure paired with SQL Server transactions",
      "Filter pipelines guarding controller access based on student/teacher role claims"
    ],
    keyFeatures: [
      "Instant submission tracking state machine with due date auto-locking locks",
      "Teacher review dashboards allowing inline comments and graded entries",
      "Strict JWT session validation ensuring persistent account isolation"
    ],
    technologies: ["C#", ".NET 8 MVC", "EF Core", "SQL Server", "JWT Auth", "HTML5", "TailwindCSS"],
    githubUrl: "https://github.com/JoeGitHubPro",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-8.html",
    metrics: [
      { label: "Access Control", value: "Role claim-based filters" },
      { label: "DB Isolation", value: "Concurrent SQL Transactions" }
    ],
    featured: false
  },
  {
    id: "cryptography-tool",
    title: "Secura - Cryptography Educational Platform",
    category: "System Utility",
    role: "Lead Software Developer",
    period: "Apr 2024 – May 2024",
    description:
      "An educational workstation designed to interactively demonstrate cryptography concepts to computer science undergraduates.",
    problemSolved:
      "Simplified abstract theoretical block shifts and modular math into real-time step-by-step logic flows for computer science students.",
    architectureChoices: [
      "Robust stateful WinForms application featuring double-buffered UI frames",
      "Highly optimized modular mathematics engine processing heavy cipher tables instantly"
    ],
    keyFeatures: [
      "Step-by-step visual calculations tracking Caesar and Vigenère alphabet shifts",
      "Custom Vernam random-generator key setup supporting real-time manual entry",
      "Inline interactive developer logs documenting encryption clock cycles"
    ],
    technologies: ["C#", "WinForms", ".NET Framework 4.8", "Algebraic Engineering"],
    githubUrl: "https://github.com/JoeGitHubPro",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-12.html",
    metrics: [
      { label: "Processing Latency", value: "<1µs per cipher run" },
      { label: "Algorithms", value: "Vigenère, Vernam, Caesar" }
    ],
    featured: false
  },
  {
    id: "ecommerce-webapi",
    title: "Zephyr RESTful E-Commerce Engine",
    category: "Web API",
    role: "Backend Architect",
    period: "Feb 2023 – Mar 2023",
    description:
      "A highly-structured API backend built following clean architecture standards to support multi-product e-commerce nodes, inventory, and baskets.",
    problemSolved:
      "Engineered database transactional isolation for baskets and checkout pipelines to prevent product over-allocation.",
    architectureChoices: [
      "Repository Architectural Pattern decoupling database handlers from the core API engine",
      "Clean Web API structure utilizing comprehensive custom error filters",
      "AutoMapper-powered payload schemas protecting core models"
    ],
    keyFeatures: [
      "Robust pagination, searching, and sorting filtering queries built direct into EF core",
      "Secure JWT user roles managing catalog modifications and stock entries",
      "Transactional order submission with proper database lock guards"
    ],
    technologies: ["C#", ".NET Web API Core 7.0", "EF Core", "SQL Server", "AutoMapper", "Repository Pattern"],
    githubUrl: "https://github.com/JoeGitHubPro",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-5.html",
    metrics: [
      { label: "Database Isolation", value: "SQL Transaction Rollbacks" },
      { label: "Product Filtering", value: "Dynamic deferred-execution LINQ" }
    ],
    featured: false
  },
  {
    id: "postgrad-management",
    title: "Postgraduate Academic Administration API",
    category: "Web API",
    role: "Backend Developer",
    period: "Jan 2023 – Feb 2023",
    description:
      "An API platform to automate thesis registration, administrative workflows, and supervisor scheduling for postgraduate colleges.",
    problemSolved:
      "Replaced paperwork-heavy manual advisor registration by automating supervisor capacity counting algorithms.",
    architectureChoices: [
      "Relational database layout with index-optimized advisor tables in SQL Server",
      "EF Core DB-First approach mapped through high-level LINQ queries"
    ],
    keyFeatures: [
      "Active workload tracker capping advisor thesis assignments automatically to prevent teacher burnout",
      "Dynamic administrative status progression workflows triggers",
      "Thesis publication archive supporting nested string searches"
    ],
    technologies: ["C#", "ASP.NET Web API Core", "SQL Server", "EF Core", "LINQ"],
    githubUrl: "https://github.com/JoeGitHubPro",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-4.html",
    metrics: [
      { label: "Administrative Speed", value: "-80% paper dependency" },
      { label: "Database Search", value: "Index-Engineered sub-5ms queries" }
    ],
    featured: false
  },

  // ── Additional Projects from Portfolio Website ───────────────────────────────
  {
    id: "mail-sender",
    title: "Mail Sender App",
    category: "Desktop App",
    role: "Developer",
    period: "May 2024",
    description:
      "A WinForms utility application for composing and sending emails programmatically using .NET mail services.",
    problemSolved:
      "Provided a lightweight standalone desktop tool for automating and simplifying email dispatch tasks.",
    architectureChoices: [
      "WinForms desktop application built on .NET Framework",
      "SMTP client integration for reliable mail delivery"
    ],
    keyFeatures: [
      "Compose and send emails directly from a desktop UI",
      "Configurable SMTP server settings",
      "Lightweight utility with minimal dependencies"
    ],
    technologies: ["C#", "WinForms", ".NET Framework", "SMTP"],
    githubUrl: "https://github.com/JoeGitHubPro/MailService",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-9.html",
    metrics: [
      { label: "Type", value: "Desktop Utility" },
      { label: "Category", value: "WinForms App" }
    ],
    featured: false
  },
  {
    id: "customer-management",
    title: "Customer Management System",
    category: "Desktop App",
    role: "Developer",
    period: "Nov 2021",
    description:
      "An early file-system–based WinForms application for managing customer records without a relational database backend.",
    problemSolved:
      "Provided foundational customer record CRUD operations using flat-file persistence as a learning project.",
    architectureChoices: [
      "File-system storage with no database dependency",
      "WinForms UI for data entry and retrieval"
    ],
    keyFeatures: [
      "Create, read, update, and delete customer records stored in flat files",
      "Simple and intuitive WinForms interface",
      "Zero external database dependency"
    ],
    technologies: ["C#", "WinForms", ".NET Framework"],
    githubUrl: "https://github.com/JoeGitHubPro/costmer",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-10.html",
    metrics: [
      { label: "Storage", value: "File-system based" },
      { label: "Type", value: "Beginner Desktop App" }
    ],
    featured: false
  },
  {
    id: "mm1-queue-simulation",
    title: "MM1 Queue Simulation",
    category: "Desktop App",
    role: "Developer",
    period: "Dec 2023",
    description:
      "A WPF modeling and simulation application that visually simulates the MM1 (single-server Markovian) queuing system for educational purposes.",
    problemSolved:
      "Gave computer science students an interactive visual tool to observe queuing theory parameters such as arrival rate, service rate, and utilization in real time.",
    architectureChoices: [
      "WPF application leveraging MVVM pattern for clean data binding",
      "Mathematical simulation engine based on Poisson and Exponential distributions"
    ],
    keyFeatures: [
      "Real-time MM1 queue simulation with configurable arrival and service rates",
      "Visual throughput, utilization, and average wait-time statistics",
      "Educational interface designed for academic modeling courses"
    ],
    technologies: ["C#", "WPF", ".NET Framework", "MVVM", "Simulation Algorithms"],
    githubUrl: "https://github.com/JoeGitHubPro/MM1QueueSimulation",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-11.html",
    metrics: [
      { label: "Type", value: "Educational Simulation" },
      { label: "Pattern", value: "MM1 Queuing Theory" }
    ],
    featured: false
  },
  {
    id: "department-stock",
    title: "Department Stock Application",
    category: "Web API",
    role: "Backend Developer",
    period: "Mar 2023",
    description:
      "An inventory management API built for the Mathematics Department to track and manage stock levels across departments and locations, featuring barcode scanning, alerts, and reporting tools.",
    problemSolved:
      "Replaced manual stock tracking with a centralized system that reduces waste, prevents stockouts, and enables cross-department inventory visibility.",
    architectureChoices: [
      "Centralized relational database for unified department inventory records",
      "API-first design for barcode scanner and third-party tool integration"
    ],
    keyFeatures: [
      "Centralized inventory database with cross-department visibility",
      "Barcode scanning and RFID technology integration support",
      "Automated low-stock threshold alerts",
      "Order placement and inter-department item transfer workflows",
      "Reporting tools for inventory analytics"
    ],
    technologies: ["C#", "ASP.NET Core Web API", "SQL Server", "EF Core"],
    githubUrl: "https://github.com/JoeGitHubPro",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-3.html",
    metrics: [
      { label: "Client", value: "Mathematics Department" },
      { label: "Type", value: "Inventory Management API" }
    ],
    featured: false
  },
  {
    id: "travel-agency-api",
    title: "Travel Agency Web API",
    category: "Web API",
    role: "Backend Developer",
    period: "Oct 2022",
    description:
      "A RESTful Web API for a private travel company, covering planning, implementing, and controlling travel service operations with full project documentation.",
    problemSolved:
      "Digitized travel agency operations with a structured API backend replacing manual workflows and providing evaluation-ready documentation.",
    architectureChoices: [
      "RESTful API design following HTTP standards",
      "Comprehensive project documentation with planning and implementation reports"
    ],
    keyFeatures: [
      "Full travel service management endpoints",
      "Documented with planning and evaluation reports",
      "Designed for real private-sector client integration"
    ],
    technologies: ["C#", "ASP.NET Core Web API", "SQL Server", "EF Core"],
    githubUrl: "https://github.com/JoeGitHubPro/TravelAgancyPro",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details.html",
    metrics: [
      { label: "Client", value: "Private Travel Company" },
      { label: "Type", value: "RESTful Web API" }
    ],
    featured: false
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management System",
    category: "Full Stack",
    role: "Developer",
    period: "Nov 2022",
    description:
      "A personal web-based portfolio and shares management application featuring a full MVC dashboard and a companion REST API for third-party integration.",
    problemSolved:
      "Built a unified system for managing personal portfolio information with both a user-facing web interface and an external API layer.",
    architectureChoices: [
      "MVC architecture for web dashboard with Razor views",
      "Companion Web API layer enabling third-party integrations"
    ],
    keyFeatures: [
      "Comprehensive dashboard to view and manage portfolio entries",
      "RESTful API endpoint for third-party integrations",
      "Role-based access and authentication"
    ],
    technologies: ["C#", "ASP.NET Core MVC", "ASP.NET Core Web API", "SQL Server", "EF Core"],
    githubUrl: "https://github.com/JoeGitHubPro/Portfolio",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-1.html",
    metrics: [
      { label: "Type", value: "MVC + API" },
      { label: "Client", value: "Personal Project" }
    ],
    featured: false
  },
  {
    id: "zaker-student-platform",
    title: "Zaker – Student & Teacher Web Platform",
    category: "Full Stack",
    role: "Developer",
    period: "Dec 2021",
    description:
      "An educational MVC and API web platform for bachelor's-degree students and teachers. Students upload lectures and assignments; teachers grade them and post teaching videos.",
    problemSolved:
      "Centralized academic content sharing and grading into one collaborative platform, replacing fragmented file-sharing methods.",
    architectureChoices: [
      "MVC front-end application for student and teacher interactions",
      "Separate Web API for data operations and potential mobile client support"
    ],
    keyFeatures: [
      "Student lecture and assignment upload system",
      "Teacher grading interface with inline feedback",
      "Teacher video posting for remote lectures",
      "Role-separated access for students and teachers"
    ],
    technologies: ["C#", "ASP.NET Core MVC", "ASP.NET Core Web API", "SQL Server", "EF Core"],
    githubUrl: "https://github.com/JoeGitHubPro/Student-Book",
    portfolioDetailUrl: "https://joegithubpro.github.io/Profile/portfolio-details-2.html",
    metrics: [
      { label: "Type", value: "MVC & API" },
      { label: "Client", value: "Educational Platform" }
    ],
    featured: false
  }
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experienceData: Experience[] = [
  {
    id: "military-records",
    role: "Software Developer",
    employer: "Military Records Department (Egyptian Armed Forces)",
    location: "Egypt",
    period: "Sep 2025 – Sep 2026",
    description: [
      "Designed and maintained enterprise-grade internal management systems utilizing .NET Framework 4.8, ADO.NET, and Oracle Database serving high-volume daily operations across the records department.",
      "Handled intensive data-processing tasks and high-throughput SQL transactions, gaining extensive practical experience in big data query optimization, storage optimization, and database performance tuning.",
      "Configured, compiled, and deployed enterprise applications on host IIS (Internet Information Services) servers, establishing 99.9% uptime guidelines and server protection metrics.",
      "Worked and integrated in a highly disciplined institutional environment, enforcing zero-trust data integrity, database safety standards, and rigorous security documentation guidelines."
    ],
    keyFocus: ["High-Volume Operations", "Enterprise-Grade Safety", "Query Optimization", "IIS Deployments"],
    technologies: [".NET Framework 4.8", "ADO.NET", "Oracle Database", "IIS Server", "Windows Server", "SQL Tuning"]
  },
  {
    id: "freelance-developer",
    role: "Backend Developer (Freelance Projects)",
    employer: "Self-Employed / Remote Contracts",
    location: "Remote",
    period: "Feb 2026 – May 2026",
    description: [
      "Engineered CafeSystem POS Desktop application with Arabic RTL dark designs, fractional sales, loyalty cards, and suspended states using .NET 10, Windows Forms, SQL Server, and EF Core.",
      "Created the Smart Clinic API, a comprehensive health scheduler with patient history indexing, multi-tenant databases, and custom RBAC permissions guardrails.",
      "Collaborated direct with business stakeholders to convert target functional criteria into strict, scalable software models conforming to SOLID and Clean Architecture principles."
    ],
    keyFocus: ["Client Consultations", "SOLID Execution", "User-First Backends", "Tactile System Design"],
    technologies: ["C#", ".NET 10", "WinForms", "ASP.NET Core Web API", "SQL Server", "JWT Auth", "EF Core"]
  },
  {
    id: "cdms-developer",
    role: "Backend Lead — CDMS Project",
    employer: "Suez Canal University",
    location: "Ismailia, Egypt",
    period: "Jul 2024 – Aug 2024",
    description: [
      "Spearheaded Custody Management System (CDMS) development, organizing asset ledgers, department access claims, and custom email notification templates.",
      "Boosted data retrieval indexing speed by 25% through meticulous SQL non-vocal optimizations, query materialization, and LINQ execution plans optimization.",
      "Introduced flexible multi-tenant patterns that reduced core backend schema redundancy by 40%, optimizing cross-department structures.",
      "Awarded 1st Place at the Fifth Student Research Conference based on architectural scalability, design system standards, and direct operational efficiency."
    ],
    keyFocus: ["Multi-Tenancy", "Query Performance Boosting", "Team Leadership", "Research Award Winning"],
    technologies: [".NET Core 8.0 MVC", "EF Core", "LINQ Projectors", "SQL Server", "Multi-Tenant Architecture", "Bootstrap"]
  }
];

// ─── Certifications ───────────────────────────────────────────────────────────

export const certificationsData: Certification[] = [
  {
    id: "iti-net",
    title: ".NET Web Development",
    issuer: "Information Technology Institute (ITI)",
    date: "2025",
    credentialUrl: "./assets/files/IMG_20230530_233757.pdf",
    badgeAccent: "indigo",
    logo: "./assets/logos/iti.png",
    skillsAcquired: [
      "Enterprise .NET Arch",
      "Advanced C#",
      "ASP.NET Core MVC & Web APIs",
      "Entity Framework Core",
      "SQL Server Administration",
      "Frontend Integration",
      "SOLID & Clean Architecture",
      "Design Patterns",
      "Team Collaboration"
    ]
  },
  {
    id: "iti-101",
    title: "ITI 101 Program",
    issuer: "Information Technology Institute (ITI)",
    date: "2023",
    credentialUrl: "./assets/files/IMG_20230530_233821.pdf",
    badgeAccent: "violet",
    logo: "./assets/logos/iti.png",
    skillsAcquired: [
      "Core Programming Fundamentals",
      "Software Development Essentials",
      "Technical Foundations"
    ]
  },
  {
    id: "cs50x",
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University / edX",
    date: "2024",
    credentialUrl: "./assets/files/CS50x.pdf",
    badgeAccent: "rose",
    logo: "./assets/logos/HarvardUniversity.png",
    skillsAcquired: [
      "Algorithms & Data Structures",
      "C Programming",
      "SQL Database Schemas",
      "Assembly & Memory management",
      "Computational Complexity (Big O Notation)",
      "Core Computer Science Fundamentals"
    ]
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "./assets/files/AWS Cloud Practitioner Essentials.pdf",
    badgeAccent: "amber",
    logo: "./assets/logos/AWS.png",
    skillsAcquired: [
      "Amazon EC2 & Elastic Beanstalk",
      "AWS RDS & DynamoDB",
      "Cloud Security (IAM Roles)",
      "Serverless Architecture (AWS Lambda)",
      "AWS S3 Cloud Buckets",
      "Global Infrastructure & Well-Architected Framework"
    ]
  },
  {
    id: "banque-misr",
    title: "BanQue MisR Internship",
    issuer: "Banque Misr",
    date: "2023",
    credentialUrl: "https://drive.google.com/file/d/117sFdqBuwOLkPuaHRAsoQ-LlX7dJT3UU/view?usp=sharing",
    badgeAccent: "green",
    logo: "./assets/logos/BanqueMisr.png",
    skillsAcquired: [
      "Banking Systems Overview",
      "Professional Work Environment",
      "Enterprise Operations"
    ]
  },
  {
    id: "ibm-professional-skills",
    title: "Introduction to Professional Skills",
    issuer: "IBM (SkillsBuild)",
    date: "2023",
    credentialUrl: "./assets/files/SkillsBuild%20for%20Students.pdf",
    badgeAccent: "blue",
    logo: "./assets/logos/IBM.png",
    skillsAcquired: ["Professional Communication", "Workplace Readiness", "Career Development"]
  },
  {
    id: "ibm-emerging-tech",
    title: "Introduction to Emerging Technologies",
    issuer: "IBM (SkillsBuild)",
    date: "2023",
    credentialUrl: "./assets/files/SkillsBuild%20for%20Students.pdf%201.pdf",
    badgeAccent: "cyan",
    logo: "./assets/logos/IBM.png",
    skillsAcquired: ["AI & Machine Learning Overview", "Cloud Computing", "Blockchain Basics", "IoT Fundamentals"]
  },
  {
    id: "ibm-design-thinking",
    title: "Introduction to Problem Solving – Design Thinking",
    issuer: "IBM (SkillsBuild)",
    date: "2023",
    credentialUrl: "./assets/files/SkillsBuild%20for%20Students.pdf%202.pdf",
    badgeAccent: "teal",
    logo: "./assets/logos/IBM.png",
    skillsAcquired: ["Design Thinking Framework", "Problem Decomposition", "User-Centric Ideation"]
  },
  {
    id: "ibm-entrepreneurship",
    title: "Business Entrepreneurship",
    issuer: "IBM (SkillsBuild)",
    date: "2023",
    credentialUrl: "./assets/files/SkillsBuild%20for%20Students.pdf%203.pdf",
    badgeAccent: "orange",
    logo: "./assets/logos/IBM.png",
    skillsAcquired: ["Business Model Canvas", "Startup Fundamentals", "Market Validation"]
  },
  {
    id: "google-digital-marketing",
    title: "Basics of Digital Marketing",
    issuer: "Google Skills",
    date: "2023",
    credentialUrl: "./assets/files/%D8%B4%D9%87%D8%A7%D8%AF%D8%A9%20%D8%B9.pdf",
    badgeAccent: "yellow",
    logo: "./assets/logos/Google.png",
    skillsAcquired: ["SEO & SEM Basics", "Social Media Marketing", "Online Advertising"]
  },
  {
    id: "csharp-courseset",
    title: "C#.NET v6",
    issuer: "CourseSet",
    date: "2022",
    credentialUrl: "./assets/files/certificate.pdf",
    badgeAccent: "purple",
    logo: "./assets/logos/CourseSet.png",
    skillsAcquired: ["C# Language Fundamentals", "OOP in C#", ".NET 6 Basics", "Console & WinForms Apps"]
  },
  {
    id: "icdl",
    title: "International Computer Driving License (ICDL) Base",
    issuer: "ICDL Foundation",
    date: "2022",
    credentialUrl: "./assets/files/download.pdf",
    badgeAccent: "slate",
    logo: "./assets/logos/edraak.png",
    skillsAcquired: ["Computer Essentials", "Office Suite (Word, Excel, PowerPoint)", "Online Collaboration"]
  },
  {
    id: "hp-leadership",
    title: "Effective Leadership",
    issuer: "HP",
    date: "2023",
    credentialUrl: "./assets/files/certificate hp.pdf",
    badgeAccent: "sky",
    logo: "./assets/logos/HP.png",
    skillsAcquired: ["Leadership Principles", "Team Management", "Decision Making"]
  },
  {
  id: "tatweer-entrepreneurship",
  title: "Entrepreneurship",
  issuer: "Tatweer",
  date: "2021",
  credentialUrl: "./assets/files/5815-%D9%85%D8%AD%D9%88%D9%84.pdf",
  badgeAccent: "green",
  logo: "./assets/logos/Tatweer.png",
  skillsAcquired: ["Entrepreneurship", "Business Models", "Innovation"]
},

{
  id: "aus-career-development",
  title: "Career Development Skills",
  issuer: "AUS",
  date: "2021",
  credentialUrl: "./assets/files/3181407.pdf",
  badgeAccent: "cyan",
  logo: "./assets/logos/AUS.png",
  skillsAcquired: ["Career Planning", "Interview Skills", "Professional Growth"]
},

{
  id: "aus-personal-skills",
  title: "Personal Skills",
  issuer: "AUS",
  date: "2021",
  credentialUrl: "./assets/files/7221300.pdf",
  badgeAccent: "teal",
  logo: "./assets/logos/AUS.png",
  skillsAcquired: ["Communication", "Time Management", "Self Development"]
},

{
  id: "aus-entrepreneurship",
  title: "Entrepreneurship",
  issuer: "AUS",
  date: "2021",
  credentialUrl: "./assets/files/8389610.pdf",
  badgeAccent: "lime",
  logo: "./assets/logos/AUS.png",
  skillsAcquired: ["Business Strategy", "Innovation", "Leadership"]
},
{
  id: "cloudsim",
  title: "CloudSim",
  issuer: "CloudSim",
  date: "2021",
  credentialUrl: "./assets/files/%D9%8A%D9%88%D8%B3%D9%81_%D9%85%D8%AD%D9%85%D8%AF_%D8%B9%D9%84%D9%8A_cloud2_certificate.pdf",
  badgeAccent: "slate",
  logo: "./assets/logos/rwak.png",
  skillsAcquired: ["Cloud Simulation", "Resource Management", "Cloud Architecture"]
},
{
  id: "khamsat-freelancer",
  title: "Getting Started as a Freelancer",
  issuer: "Khamsat",
  date: "2021",
  credentialUrl: "./assets/files/mlang_enCourse_Certificate_Enmlangmlang_ar___mlang%20(1).pdf",
  badgeAccent: "emerald",
  logo: "./assets/logos/iti.png",
  skillsAcquired: ["Freelancing", "Client Communication", "Digital Services"]
},
{
  id: "mostaql-freelancer",
  title: "Getting Started as a Freelancer",
  issuer: "Mostaql",
  date: "2021",
  credentialUrl: "./assets/files/mlang_enCourse_Certificate_Enmlangmlang_ar___mlang.pdf",
  badgeAccent: "orange",
  logo: "./assets/logos/iti.png",
  skillsAcquired: ["Project Bidding", "Freelancing", "Remote Collaboration"]
},
  {

    id: "freelancing-upwork",
    title: "Getting Started as a Freelancer (Upwork)",
    issuer: "Upwork",
    date: "2023",
    credentialUrl: "./assets/files/Attendance_Certificate.pdf",
    badgeAccent: "lime",
    logo: "./assets/logos/iti.png",
    skillsAcquired: ["Freelance Platform Strategy", "Client Communication", "Proposal Writing"]
  },
  {
    id: "freelancing-basics",
    title: "Freelancing Basics",
    issuer: "Online Training Platform",
    date: "2023",
    credentialUrl: "./assets/files/Attendance_Certificate%20(1).pdf",
    badgeAccent: "emerald",
    logo: "./assets/logos/iti.png",
    skillsAcquired: ["Freelance Business Setup", "Pricing & Contracts", "Time Management"]
  }
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    description: "Core programming and syntax engines",
    iconName: "Code2",
    skills: [
      { name: "C#", level: 98, info: "Async/Await, Linq, Reflection, Memory optimization, .NET 10" },
      { name: "SQL", level: 90, info: "Oracle SQL, T-SQL, Stored Procedures, Explain Plans, Indexing" },
      { name: "C++", level: 70, info: "Pointers, OOP fundamentals, memory allocation, algorithms" },
      { name: "HTML5 & CSS3", level: 75, info: "Flexbox, Grid, Custom Properties, Responsive Styling" },
      { name: "JavaScript", level: 30, info: "DOM manipulation basics, event handling, AJAX fundamentals" },
      { name: "Java", level: 55, info: "OOP concepts, basic data structures, foundational knowledge" }
    ]
  },
  {
    id: "backend",
    name: "Backend & Web API",
    description: "Web APIs, MVC platforms, and identity management",
    iconName: "Cpu",
    skills: [
      { name: "ASP.NET Core Web API", level: 95, info: "REST compliance, middleware, custom model binding, DTO parsing" },
      { name: "ASP.NET Core MVC", level: 90, info: "Razor layout, multi-theme layouts, session management" },
      { name: "ASP.NET MVC 5", level: 88, info: "Classic MVC patterns, Razor views, routing, action filters" },
      { name: "Razor Pages", level: 82, info: "Page-based Razor model, code-behind patterns" },
      { name: "JWT Authentication", level: 95, info: "RS256 asymmetric keys, Refresh tokens, custom role claims, authorization policies" },
      { name: "WebSockets (SignalR)", level: 80, info: "Real-time client hub broadcast, multi-user sync, remote procedure calls" },
      { name: "Logging with .NET", level: 80, info: "ILogger, Serilog integration, structured log pipelines" }
    ]
  },
  {
    id: "databases",
    name: "Databases & ORM",
    description: "Relational storage systems and object-relational mapping",
    iconName: "Database",
    skills: [
      { name: "Entity Framework Core", level: 95, info: "Code-First & DB-First, Migrations, Fluent API mapping, lazy/eager loading, query filters" },
      { name: "SQL Server", level: 90, info: "Relational modeling, transaction rollbacks, index profiling, trigger events" },
      { name: "Oracle Database", level: 85, info: "Enterprise-scale tables, complex JOIN queries, ADO.NET connection pools" },
      { name: "ADO.NET", level: 88, info: "Command execution, Datasets, DataReaders, low-level high-performance queries" },
      { name: "LINQ", level: 92, info: "Deferred execution, projection queries, expression trees, query materialization" }
    ]
  },
  {
    id: "desktop",
    name: "Desktop Development",
    description: "Windows desktop application frameworks",
    iconName: "Monitor",
    skills: [
      { name: "WinForms", level: 90, info: "Event-driven UI, custom controls, double-buffering, Arabic RTL support" },
      { name: "WPF", level: 78, info: "MVVM pattern, data binding, XAML layouts, animation basics" },
      { name: "ASP.NET WebForms", level: 80, info: "Server controls, postback model, ViewState management" }
    ]
  },
  {
    id: "architecture",
    name: "Architecture & Design",
    description: "Underpinning structures and clean structural principles",
    iconName: "Layers",
    skills: [
      { name: "Clean Architecture", level: 92, info: "Domain encapsulation, Application layers, dependency inversion" },
      { name: "Domain-Driven Design (DDD)", level: 88, info: "Bounded contexts, aggregates, entities, value objects, domain events" },
      { name: "SOLID Principles", level: 95, info: "Single responsibility, open-closed, interface segregation, DI" },
      { name: "Repository & Unit of Work", level: 92, info: "Transaction isolation, structured querying repositories, decoupling" },
      { name: "MVC Pattern", level: 92, info: "Model-View-Controller separation, routing, controller design" },
      { name: "MVVM Pattern", level: 80, info: "Two-way data binding, ViewModel abstraction, WPF/desktop apps" },
      { name: "RESTful API Design", level: 93, info: "HTTP standards, status codes, resource modeling, versioning" },
      { name: "Monolithic Architecture", level: 88, info: "Layered monolith design, module separation, deployment patterns" },
      { name: "Microservices (Overview)", level: 60, info: "Service decomposition concepts, API gateways, inter-service communication" },
      { name: "Design Patterns", level: 88, info: "Singleton, Factory, Observer, Strategy, Decorator, Repository" },
      { name: "KISS & DRY Principles", level: 90, info: "Code simplicity, duplication elimination, reusable abstractions" }
    ]
  },
  {
    id: "servers",
    name: "Servers & Tools",
    description: "Deployment, hosting, and engineering workspace applications",
    iconName: "Server",
    skills: [
      { name: "IIS (Internet Info Services)", level: 90, info: "Application pool recycling, bindings, logging configurations, SSL setup" },
      { name: "Git & GitHub", level: 92, info: "Branching strategies, conflict resolution, GitHub actions pipelines" },
      { name: "Windows Server", level: 85, info: "User administration, active directories, service configurations" },
      { name: "Unit & Integration Testing", level: 88, info: "xUnit, FluentAssertions, mocking DB contexts using in-memory databases" },
      { name: "DevOps (Overview)", level: 65, info: "CI/CD concepts, Docker basics, Kubernetes overview, Azure fundamentals" },
      { name: "JSON & XML", level: 88, info: "Serialization, deserialization, API payloads, config management" },
      { name: "Version Control", level: 90, info: "Git workflows, pull requests, branching models, code reviews" }
    ]
  },
  {
    id: "methodology",
    name: "Development Methodology",
    description: "Software engineering processes and delivery approaches",
    iconName: "GitBranch",
    skills: [
      { name: "Agile Methodology", level: 82, info: "Sprints, user stories, retrospectives, iterative delivery" },
      { name: "Waterfall Model", level: 80, info: "Requirements → Design → Implementation → Testing → Deployment" },
      { name: "Prototyping", level: 78, info: "Rapid mockup development, stakeholder validation, feedback loops" },
      { name: "Clean Code Practices", level: 90, info: "Readable naming, small functions, meaningful abstractions" }
    ]
  }
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export const achievementsData: Achievement[] = [
  {
    id: "conference-1st",
    title: "1st Place – Academic Excellence Award",
    subtitle: "Fifth Student Research Conference, Suez Canal University",
    date: "May 2023",
    description:
      "Awarded top honor across university technical submissions for designing and presenting the Custody Management System (CDMS) backend. Commended for query acceleration techniques, department transaction isolation, and secure multi-tenant architecture."
  },
  {
    id: "conference-3rd",
    title: "3rd Place – Research Innovation Award",
    subtitle: "Sixth Student Research Conference, Suez Canal University",
    date: "May 2023",
    description:
      "Recognized by the Faculty of Science panel for compiling a secure and accessible cryptography simulator layout demonstrating algorithmic patterns (Vigenère and Vernam ciphers) visually to undergraduates."
  },
  {
    id: "academic-degree",
    title: "Bachelor of Computer Science – Graduated 'Good'",
    subtitle: "Suez Canal University, Ismailia",
    date: "Graduated Jan 2025",
    description:
      "Rigorous focus on software engineering, complexity analysis, database management systems, network engineering, and object-oriented algorithms."
  }
];

// ─── Technical Interests ──────────────────────────────────────────────────────

export const technicalInterestsData = [
  { category: "AI Tools", items: ["ChatGPT", "Copy AI"] },
  { category: "Programming Paradigms", items: ["Declarative Programming", "Functional Design"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "Microsoft Azure", "IIS"] },
  { category: "Web Protocols", items: ["HTTP", "FTP", "WebSockets"] },
  { category: "Mathematics", items: ["Differential Equations", "Discrete Mathematics", "Mathematical Analysis"] },
  { category: "Technical Podcasts & Influencers", items: ["Ask Developer", "Ahmed Elemam", "Metwally Labs"] }
];
