import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { projectsData } from "@/lib/home-content";

type ProjectsProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
};

export const Projects: React.FC<ProjectsProps> = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="pb-2 text-center text-2xl font-bold">Projects</h1>

      <div className="mt-10 space-y-4">
        {projectsData.map((item, index) => (
          <div
            key={index}
            className="group hover:bg-secondary rounded-xl border border-black p-4 shadow-[3px_3px_#000] transition-all hover:scale-105 dark:border-transparent dark:shadow-none"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <Link
                href={item.link}
                target="_blank"
                className="md:hidden md:group-hover:block"
              >
                <span className="text-muted-foreground flex items-center gap-1 text-sm italic">
                  Visit <ExternalLink className="h-4 w-4" />
                </span>
              </Link>
            </div>
            <p className="text-sm">{item.description}</p>
            <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <p className="text-muted-foreground text-sm capitalize italic">
                {item.languages.join(", ")}
              </p>
              <p className="text-muted-foreground text-right text-sm italic">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
