import Link from "next/link";

const projectsData = [
  {
    title: "Contest Tracker Hub",
    description:
      "A real-time hub aggregating contests from LeetCode, Codeforces, CodeChef, AtCoder, and GeeksforGeeks. Features filtering, bookmarking, personalization, email alerts, and automated reminders — cutting manual tracking effort by 80%.",
    date: "Mar 2025",
    link: "https://github.com/shashankaz/contest-tracker",
  },
  {
    title: "Relix - Interior Design & Home Styling",
    description: "A modern single-page interior design website built with React 18, TypeScript, Vite, and Tailwind CSS. It features client-side routing, form validation, and code splitting, with full Docker and AWS ECS deployment support.",
    date: "Feb 2025",
    link: "https://github.com/shashankaz/relix",
  },
  {
    title: "Algomorph - DSA Algorithm Explorer",
    description:
      "An interactive platform to learn, visualize, and run 100+ algorithms across C, C++, Java, Python, and JavaScript. Secured 3rd prize at Appwrite Hacktoberfest Hackathon and adopted by 200+ students.",
    date: "Nov 2024",
    link: "https://github.com/shashankaz/algomorph",
  },
  {
    title: "BrainChick - Online Quiz Application",
    description:
      "A full-featured online quiz application using the MERN stack with Firebase Authentication. Features include real-time quiz participation, instant results, global leaderboard, and responsive design for seamless cross-device access.",
    date: "Aug 2024",
    link: "https://github.com/shashankaz/BrainChick",
  },
  {
    title: "Pensieve - Full-Stack Blogging Platform",
    description:
      "Full-stack blogging platform using the MERN stack with AI-powered content generation via the Gemini API. Features include Firebase auth, rich text editing, image uploads with Cloudinary, and responsive design with Tailwind CSS.",
    date: "Aug 2024",
    link: "https://github.com/shashankaz/Pensieve",
  },
  {
    title: "URL Shortener API",
    description:
      "A secure URL Shortener API using Node.js, Express, and MongoDB with user authentication, rate limiting, and QR code generation. Features include custom short URLs, click tracking, and cookie-based session management.",
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
      <h1 className="text-2xl font-semibold border-b border-black pb-2 w-1/2">
        Projects
      </h1>

      <div className="mt-10 space-y-4">
        {projectsData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            className="flex items-center justify-between gap-10 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow rounded-xl p-4"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
            <div className="text-xl font-bold uppercase text-right">
              {item.date}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
