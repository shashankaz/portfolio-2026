import { USERNAME } from "@/lib/constants";

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  topics: string[];
  language: string | null;
  updated_at: string;
  fork: boolean;
  stargazers_count: number;
}

export const fetchGithubRepos = async (): Promise<GitHubRepo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  return res.json();
};
