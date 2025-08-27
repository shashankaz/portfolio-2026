import Image from "next/image";

const experienceData = [
  {
    company: "UrbanPGM",
    position: "Full Stack Developer Freelance",
    duration: "May 2025 - Present",
    responsibilities: [],
    logo: "/experience/urbanpgm.png",
  },
  {
    company: "SEORCE",
    position: "Software Developer Intern",
    duration: "May 2025 - Aug 2025",
    responsibilities: [],
    logo: "/experience/seorce.png",
  },
  {
    company: "Precollege",
    position: "Full Stack Developer Intern",
    duration: "Jan 2025 - May 2025",
    responsibilities: [],
    logo: "/experience/precollege.png",
  },
  {
    company: "Aquarlabs",
    position: "Full Stack Developer Intern",
    duration: "Oct 2024 - Jan 2025",
    responsibilities: [],
    logo: "/experience/aquarlabs.png",
  },
];

interface ExperienceProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Experience = ({ forwardedRef }: ExperienceProps) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="text-2xl font-semibold border-b border-black pb-2 w-1/2">
        Experience
      </h1>

      <div className="mt-10 space-y-4">
        {experienceData.slice(1).map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow rounded-xl p-2.5"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-12 aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={item.logo}
                    height={48}
                    width={48}
                    alt={`${item.company} logo`}
                    className="object-contain h-full w-full"
                    draggable="false"
                  />
                </div>
                <div>
                  <h2 className="font-semibold">{item.company}</h2>
                  <p className="text-sm line-clamp-1">{item.position}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500 italic min-w-32 flex justify-end">
                {item.duration}
              </span>
            </div>

            <div
              className={`pl-[58px] ${
                item.responsibilities.length > 0 ? "mt-3" : ""
              } text-sm`}
            >
              <ul className="space-y-2">
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
