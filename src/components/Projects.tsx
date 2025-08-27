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
    title: "Algomorph - DSA Algorithm Explorer",
    description:
      "An interactive platform to learn, visualize, and run 100+ algorithms across C, C++, Java, Python, and JavaScript. Secured 3rd prize at Appwrite Hacktoberfest Hackathon and adopted by 200+ students.",
    date: "Nov 2024",
    link: "https://github.com/shashankaz/algomorph",
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
            <div className="text-xl font-bold uppercase">{item.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
