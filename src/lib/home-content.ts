export interface ProjectItem {
  title: string;
  description: string;
  languages: string[];
  date: string;
  link: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  type: string;
  location: string;
  duration: string;
  responsibilities: string[];
  logo: string;
}

export interface EducationItem {
  id: number;
  institute: string;
  degree: string;
  year: string;
  logo: string;
}

export const projectsData: ProjectItem[] = [
  {
    title: "Spark CRM - Multi-Tenant CRM Platform",
    description:
      "A production-grade multi-tenant CRM with RBAC, workflow automation, AI-powered lead research, and email tracking. Built scalable async architecture with Redis caching and AWS (SQS, S3), enabling high-performance APIs and secure tenant isolation.",
    languages: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "AWS",
      "JWT",
      "TypeScript",
    ],
    date: "Feb 2026",
    link: "https://github.com/shashankaz/spark-crm",
  },
  {
    title: "Contest Tracker Hub",
    description:
      "A real-time hub aggregating contests from LeetCode, Codeforces, CodeChef, AtCoder, and GeeksforGeeks. Features filtering, bookmarking, personalization, email alerts, and automated reminders - cutting manual tracking effort by 80%.",
    languages: [
      "NextJS",
      "ReactJS",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    date: "Mar 2025",
    link: "https://github.com/shashankaz/contest-tracker",
  },
  {
    title: "Relix - Interior Design & Home Styling",
    description:
      "A modern single-page interior design website built with React 18, TypeScript, Vite, and Tailwind CSS. It features client-side routing, form validation, and code splitting, with full Docker and AWS ECS deployment support.",
    languages: ["React", "TypeScript", "TailwindCSS", "ShadcnUI", "GSAP"],
    date: "Feb 2025",
    link: "https://github.com/shashankaz/relix",
  },
  {
    title: "Algomorph - DSA Algorithm Explorer",
    description:
      "An interactive platform to learn, visualize, and run 100+ algorithms across C, C++, Java, Python, and JavaScript. Secured 3rd prize at Appwrite Hacktoberfest Hackathon and adopted by 200+ students.",
    languages: [
      "NextJS",
      "React",
      "TailwindCSS",
      "Appwrite",
      "PostgreSQL",
      "NeonDB",
    ],
    date: "Nov 2024",
    link: "https://github.com/shashankaz/algomorph",
  },
  {
    title: "BrainChick - Online Quiz Application",
    description:
      "A full-featured online quiz application using the MERN stack with Firebase Authentication. Features include real-time quiz participation, instant results, global leaderboard, and responsive design for seamless cross-device access.",
    languages: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    date: "Aug 2024",
    link: "https://github.com/shashankaz/BrainChick",
  },
  {
    title: "Pensieve - Full-Stack Blogging Platform",
    description:
      "Full-stack blogging platform using the MERN stack with AI-powered content generation via the Gemini API. Features include Firebase auth, rich text editing, image uploads with Cloudinary, and responsive design with Tailwind CSS.",
    languages: [
      "React",
      "TailwindCSS",
      "GeminiAPI",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    date: "Aug 2024",
    link: "https://github.com/shashankaz/Pensieve",
  },
  {
    title: "URL Shortener API",
    description:
      "A secure URL Shortener API using Node.js, Express, and MongoDB with user authentication, rate limiting, and QR code generation. Features include custom short URLs, click tracking, and cookie-based session management.",
    languages: ["Node.js", "Express", "MongoDB"],
    date: "Jul 2024",
    link: "https://github.com/shashankaz/url_shortener_api",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Stealth Startup",
    position: "Software Engineer",
    type: "Apprenticeship",
    location: "Hybrid",
    duration: "May 2025 - Present",
    responsibilities: [
      "Building full-stack web applications with modern stacks (React, Node.js, PostgreSQL) focusing on performance and scalability.",
      "Designing end-to-end features including APIs, database schemas, and responsive UIs for real-world client use cases.",
    ],
    logo: "/experience/stealthstartup.png",
  },
  {
    id: 2,
    company: "Restroworks",
    position: "Member Engineering",
    type: "Internship",
    location: "On-site",
    duration: "Jan 2026 - Mar 2026 · 3 mos",
    responsibilities: [
      "Developed scalable REST APIs using Node.js, Express, and MongoDB with multi-tenant architecture and strong data isolation.",
      "Optimized frontend performance using TanStack Query, reducing redundant API calls by 40% and improving UI responsiveness.",
    ],
    logo: "/experience/restroworks.png",
  },
  {
    id: 3,
    company: "SEORCE",
    position: "Software Developer",
    type: "Internship",
    location: "Remote",
    duration: "May 2025 - Aug 2025 · 4 mos",
    responsibilities: [
      "Built a backlink analysis system (FastAPI, PostgreSQL, React) processing 10K+ links/day with advanced SEO metrics.",
      "Implemented LLM-based ranking and AI detection for 2K+ keywords, generating automated reports with multiple evaluation signals.",
    ],
    logo: "/experience/seorce.png",
  },
  {
    id: 4,
    company: "Precollege",
    position: "Full Stack Developer",
    type: "Internship",
    location: "Remote",
    duration: "Jan 2025 - May 2025 · 5 mos",
    responsibilities: [
      "Led frontend revamp of dashboards and mentor systems, improving engagement by 25% and reducing admin effort by 40%.",
      "Developed college predictor tools with 200+ attributes, enabling 10K+ students to simulate admission outcomes.",
    ],
    logo: "/experience/precollege.png",
  },
  {
    id: 5,
    company: "AquarLabs",
    position: "Full Stack Developer",
    type: "Internship",
    location: "Remote",
    duration: "Oct 2024 - Jan 2025 · 4 mos",
    responsibilities: [
      "Developed full-stack features using React and Node.js, focusing on clean architecture and maintainable code practices.",
      "Collaborated on building scalable modules and improving UI/UX for better usability and performance.",
    ],
    logo: "/experience/aquarlabs.png",
  },
];

export const educationData: EducationItem[] = [
  {
    id: 1,
    institute: "Indian Institute of Information Technology Ranchi",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    year: "2022 - Present",
    logo: "/education/Indian_Institute_of_Information_Technology,_Ranchi_Logo.png",
  },
  {
    id: 2,
    institute: "St. Karen's High School",
    degree: "12th Grade",
    year: "2020 - 2022",
    logo: "/education/St_Karen's_Logo.png",
  },
  {
    id: 3,
    institute: "St. Karen's High School",
    degree: "10th Grade",
    year: "2015 - 2020",
    logo: "/education/St_Karen's_Logo.png",
  },
];
