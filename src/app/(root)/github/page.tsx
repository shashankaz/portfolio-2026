import { compareDesc, formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { fetchGithubRepos, type GitHubRepo } from "@/lib/github";

export const metadata: Metadata = {
  title: "Github",
  description: "Explore my GitHub repositories and projects.",
};

const Github = async () => {
  const repos: GitHubRepo[] = await fetchGithubRepos();

  repos.sort((a, b) =>
    compareDesc(new Date(a.updated_at), new Date(b.updated_at)),
  );

  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold">Github</h1>

      <div className="mt-10 space-y-5">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="group hover:bg-secondary rounded-xl border border-black p-5 shadow-[3px_3px_#000] transition-all hover:scale-105 dark:border-transparent dark:shadow-none"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-semibold capitalize">
                {repo.name
                  .split("-")
                  .join(" ")
                  .split("_")
                  .join(" ")
                  .split(".")
                  .join(" ")}
              </h2>
              <Link
                href={repo.html_url}
                target="_blank"
                className="md:hidden md:group-hover:block"
              >
                <span className="text-secondary-foreground flex items-center gap-1 text-sm italic">
                  Visit <ExternalLink className="h-4 w-4" />
                </span>
              </Link>
            </div>
            <p>{repo.description ?? "No description added yet."}</p>
            <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <p className="text-secondary-foreground text-sm capitalize italic">
                {repo.topics.join(", ") || repo.language || "Unspecified"}
              </p>
              <p className="text-secondary-foreground text-right text-sm italic">
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
