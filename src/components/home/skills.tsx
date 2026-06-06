import React from "react";

import { SKILL_ICON_NAMES } from "@/lib/constants";

const SKILL_DISPLAY_NAMES: Record<(typeof SKILL_ICON_NAMES)[number], string> = {
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
  ts: "TypeScript",
  react: "React",
  nextjs: "Next.js",
  redux: "Redux",
  tailwind: "Tailwind CSS",
  bootstrap: "Bootstrap",
  vite: "Vite",
  nodejs: "Node.js",
  express: "Express",
  django: "Django",
  fastapi: "FastAPI",
  mongodb: "MongoDB",
  postgres: "PostgreSQL",
  prisma: "Prisma",
  redis: "Redis",
  firebase: "Firebase",
  docker: "Docker",
  aws: "AWS",
  git: "Git",
  github: "GitHub",
  githubactions: "GitHub Actions",
  postman: "Postman",
  cpp: "C++",
  py: "Python",
  linux: "Linux",
  bash: "Bash",
};

type SkillsProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
};

export const Skills: React.FC<SkillsProps> = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="pb-2 text-center text-2xl font-bold">Skills</h1>

      <div className="mt-10 grid grid-cols-6 gap-4 md:grid-cols-8 lg:grid-cols-10">
        {SKILL_ICON_NAMES.map((skillName) => (
          <React.Fragment key={skillName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://skillicons.dev/icons?i=${skillName}`}
              alt={SKILL_DISPLAY_NAMES[skillName]}
              title={SKILL_DISPLAY_NAMES[skillName]}
              className="rounded-xl border border-black bg-black shadow-[3px_3px_#000] transition-all select-none hover:scale-105 dark:border-transparent dark:shadow-none"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
