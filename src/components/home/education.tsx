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
            className="hover:bg-secondary flex flex-col justify-between gap-4 rounded-xl border border-black p-3 shadow-[3px_3px_#000] transition-all hover:scale-105 md:flex-row md:items-center"
          >
            <div className="flex items-start gap-2.5">
              <div className="aspect-square min-w-12 rounded-lg">
                <Image
                  src={item.logo}
                  height={48}
                  width={48}
                  alt={`${item.institute} logo`}
                  className="h-full w-full object-contain select-none"
                  draggable="false"
                />
              </div>
              <div>
                <h2 className="font-semibold">{item.institute}</h2>
                <p className="text-sm">{item.degree}</p>
              </div>
            </div>
            <span className="flex min-w-24 justify-end text-right text-sm text-neutral-500 italic">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
