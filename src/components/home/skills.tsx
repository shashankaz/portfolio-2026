import React from "react";

import { SKILL_ICON_NAMES } from "@/lib/constants";

type SkillsProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
};

export const Skills: React.FC<SkillsProps> = ({ forwardedRef }) => {
  const formattedName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="pb-2 text-center text-2xl font-bold">Skills</h1>

      <div className="mt-10 grid grid-cols-6 gap-4 md:grid-cols-8 lg:grid-cols-10">
        {SKILL_ICON_NAMES.map((skillName) => (
          <React.Fragment key={skillName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://skillicons.dev/icons?i=${skillName}`}
              alt={formattedName(skillName)}
              title={formattedName(skillName)}
              className="rounded-xl border border-black bg-black shadow-[3px_3px_#000] transition-all select-none hover:scale-105"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
