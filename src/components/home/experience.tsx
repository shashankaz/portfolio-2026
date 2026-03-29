import Image from "next/image";

const experienceData = [
  {
    id: 1,
    company: "Restroworks",
    position: "Member Engineering Intern",
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
    id: 2,
    company: "UrbanPGM",
    position: "Full Stack Developer",
    type: "Freelance",
    location: "Remote",
    duration: "May 2025 - Present",
    responsibilities: [
      "Building full-stack web applications with modern stacks (React, Node.js, PostgreSQL) focusing on performance and scalability.",
      "Designing end-to-end features including APIs, database schemas, and responsive UIs for real-world client use cases.",
    ],
    logo: "/experience/urbanpgm.png",
  },
  {
    id: 3,
    company: "SEORCE",
    position: "Software Developer Intern",
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
    position: "Full Stack Developer Intern",
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
    company: "Aquarlabs",
    position: "Full Stack Developer Intern",
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

type ExperienceProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
};

export const Experience: React.FC<ExperienceProps> = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="text-2xl font-bold text-center pb-2">Experience</h1>

      <div className="mt-10 space-y-4">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="hover:bg-secondary border border-black shadow-[3px_3px_#000] hover:scale-105 transition-all rounded-xl p-3"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.logo}
                  height={48}
                  width={48}
                  alt={`${item.company} logo`}
                  className="object-contain h-full w-full"
                  draggable="false"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-base">{item.position}</h2>

                <p className="text-sm text-neutral-700">
                  {item.company} · {item.type}
                </p>

                <p className="text-xs text-neutral-500 mt-1">
                  {item.duration} · {item.location}
                </p>
              </div>
            </div>

            {item.responsibilities.length > 0 && (
              <ul className="mt-4 ml-16 list-disc text-sm space-y-2 text-neutral-800">
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
