import { Metadata } from "next";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";

import { fetchGithubProfile } from "./actions";

export const metadata: Metadata = {
  title: "Github",
  description: "Explore my GitHub repositories and projects.",
};

interface GitHub {
  id: number;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  language: string;
  updated_at: string;
}

const Github = async () => {
  const repos: GitHub[] = await fetchGithubProfile();

  repos.sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });

  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold">Github</h1>

      <div className="mt-10 space-y-5">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-5 hover:bg-secondary border border-black shadow-[3px_3px_#000] hover:scale-105 transition-all rounded-xl group"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl capitalize font-semibold">
                {repo.name.split("-").join(" ")}
              </h2>
              <Link
                href={repo.html_url}
                target="_blank"
                className="md:hidden md:group-hover:block"
              >
                <span className="text-sm italic text-secondary-foreground flex items-center gap-1">
                  Visit <ExternalLink className="h-4 w-4" />
                </span>
              </Link>
            </div>
            <p>{repo.description}</p>
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-2 gap-4">
              <p className="text-sm italic capitalize text-secondary-foreground">
                {repo.topics.join(", ") || repo.language}
              </p>
              <p className="text-sm italic text-secondary-foreground text-right">
                Last updated: {formatDistanceToNow(repo.updated_at)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Github;
