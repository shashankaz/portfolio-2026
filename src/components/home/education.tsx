import Image from "next/image";

import { educationData } from "@/lib/home-content";

type EducationProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
};

export const Education: React.FC<EducationProps> = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="pb-2 text-center text-2xl font-bold">Education</h1>

      <div className="mt-10 space-y-4">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="hover:bg-secondary flex items-start gap-3 rounded-xl border border-black p-3 shadow-[3px_3px_#000] transition-all hover:scale-105"
          >
            <div className="aspect-square min-w-12 shrink-0 rounded-lg">
              <Image
                src={item.logo}
                height={48}
                width={48}
                alt={`${item.institute} logo`}
                className="h-full w-full object-contain select-none"
                draggable="false"
              />
            </div>
            <div className="min-w-0">
              <h2 className="leading-snug font-semibold">{item.institute}</h2>
              <p className="text-sm">{item.degree}</p>
              <p className="mt-0.5 text-xs text-neutral-500">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
