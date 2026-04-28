import Image from "next/image";

import { experienceData } from "@/lib/home-content";

type ExperienceProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
};

export const Experience: React.FC<ExperienceProps> = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="pb-2 text-center text-2xl font-bold">Experience</h1>

      <div className="mt-10 space-y-4">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="hover:bg-secondary rounded-xl border border-black p-3 shadow-[3px_3px_#000] transition-all hover:scale-105"
          >
            <div className="flex gap-4">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.logo}
                  height={48}
                  width={48}
                  alt={`${item.company} logo`}
                  className="h-full w-full object-contain select-none"
                  draggable="false"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-base font-semibold">{item.position}</h2>

                <p className="text-sm text-neutral-700">
                  {item.company} · {item.type}
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  {item.duration} · {item.location}
                </p>
              </div>
            </div>

            {item.responsibilities.length > 0 && (
              <ul className="mt-4 ml-16 list-disc space-y-2 text-sm text-neutral-800">
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
