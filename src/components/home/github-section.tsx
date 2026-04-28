import { ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";

import { GITHUB_USERNAME, type GitHubRepo } from "@/lib/github";

type GitHubSectionProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
  repos: GitHubRepo[];
};

export const GitHubSection: React.FC<GitHubSectionProps> = ({
  forwardedRef,
  repos,
}) => {
  const originalRepos = repos.filter((repo) => !repo.fork);

  const totalStars = originalRepos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0,
  );

  const topLanguage = Array.from(
    originalRepos.reduce((map, repo) => {
      if (!repo.language) return map;
      map.set(repo.language, (map.get(repo.language) ?? 0) + 1);
      return map;
    }, new Map<string, number>()),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1)
    .map(([language]) => language);

  return (
    <div ref={forwardedRef} className="py-10">
      <div className="flex items-center justify-between gap-4 pb-2">
        <h1 className="text-2xl font-bold">GitHub</h1>
        <Link href="/github" className="text-sm underline underline-offset-4">
          View repositories
        </Link>
      </div>

      <p className="text-muted-foreground text-sm">
        A quick snapshot of recent activity and the code I ship most often.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="bg-secondary/60 rounded-xl border border-black p-4 shadow-[3px_3px_#000]">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Github className="size-4" />
            Repositories
          </div>
          <p className="mt-3 text-3xl font-bold">{originalRepos.length}</p>
        </div>
        <div className="bg-secondary/60 rounded-xl border border-black p-4 shadow-[3px_3px_#000]">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Star className="size-4" />
            Total stars
          </div>
          <p className="mt-3 text-3xl font-bold">{totalStars}</p>
        </div>
        <div className="bg-secondary/60 rounded-xl border border-black p-4 shadow-[3px_3px_#000]">
          <p className="text-muted-foreground text-sm">Top language</p>
          <p className="mt-3 text-lg font-bold">{topLanguage}</p>
        </div>
      </div>

      <div className="bg-secondary/40 mt-6 rounded-2xl border border-black p-4 shadow-[3px_3px_#000]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Contributions</h2>
            <p className="text-muted-foreground text-sm">
              Based on the last 12 months of GitHub activity.
            </p>
          </div>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
          >
            Open profile <ExternalLink className="size-4" />
          </Link>
        </div>

        <Link
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          className="mt-4 block overflow-hidden rounded-xl bg-white p-2.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/7c5c2b/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME} GitHub contribution heatmap`}
            className="w-full"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
};
