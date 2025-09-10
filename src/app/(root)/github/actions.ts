"use server";

export const fetchGithubProfile = async () => {
  const res = await fetch("https://api.github.com/users/shashankaz/repos", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch GitHub profile");

  return res.json();
};
