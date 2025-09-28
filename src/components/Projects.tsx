import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    title: "Contest Tracker Hub",
    description:
      "A real-time hub aggregating contests from LeetCode, Codeforces, CodeChef, AtCoder, and GeeksforGeeks. Features filtering, bookmarking, personalization, email alerts, and automated reminders — cutting manual tracking effort by 80%.",
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

interface ProjectsProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Projects = ({ forwardedRef }: ProjectsProps) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="text-2xl font-bold text-center pb-2">Projects</h1>

      <div className="mt-10 space-y-4">
        {projectsData.map((item, index) => (
          <div
            key={index}
            className="p-4 hover:bg-secondary border border-black shadow-[3px_3px_#000] hover:scale-105 transition-all rounded-xl group"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <Link
                href={item.link}
                target="_blank"
                className="md:hidden md:group-hover:block"
              >
                <span className="text-sm italic text-muted-foreground flex items-center gap-1">
                  Visit <ExternalLink className="h-4 w-4" />
                </span>
              </Link>
            </div>
            <p className="text-sm">{item.description}</p>
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-2 gap-4">
              <p className="text-sm italic capitalize text-muted-foreground">
                {item.languages.join(", ")}
              </p>
              <p className="text-sm italic text-neutral-500 text-right">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
