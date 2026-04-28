import { HomePage } from "@/components/home/home-page";

import { fetchGithubRepos } from "@/lib/github";

const Home = async () => {
  const repos = await fetchGithubRepos();

  return <HomePage repos={repos} />;
};

export default Home;
