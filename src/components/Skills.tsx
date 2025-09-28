import React from "react";

const skills = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "js" },
  { id: 4, name: "ts" },
  { id: 5, name: "react" },
  { id: 6, name: "nextjs" },
  { id: 7, name: "redux" },
  { id: 8, name: "tailwind" },
  { id: 9, name: "bootstrap" },
  { id: 10, name: "vite" },
  { id: 11, name: "nodejs" },
  { id: 12, name: "express" },
  { id: 13, name: "django" },
  { id: 14, name: "fastapi" },
  { id: 15, name: "mongodb" },
  { id: 16, name: "postgres" },
  { id: 17, name: "prisma" },
  { id: 18, name: "redis" },
  { id: 19, name: "firebase" },
  { id: 20, name: "docker" },
  { id: 21, name: "aws" },
  { id: 22, name: "git" },
  { id: 23, name: "github" },
  { id: 24, name: "githubactions" },
  { id: 25, name: "postman" },
  { id: 26, name: "cpp" },
  { id: 27, name: "py" },
  { id: 28, name: "linux" },
  { id: 29, name: "bash" },
];

interface SkillsProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Skills = ({ forwardedRef }: SkillsProps) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="text-2xl font-bold text-center pb-2">Skills</h1>

      <div className="mt-10 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {skills.map((skill) => (
          <React.Fragment key={skill.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://skillicons.dev/icons?i=${skill.name}`}
              alt={skill.name}
              className="border border-black bg-black shadow-[3px_3px_#000] hover:scale-105 transition-all rounded-xl"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skills;
