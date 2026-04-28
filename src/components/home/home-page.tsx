"use client";

import { useRef } from "react";

import { Education } from "@/components/home/education";
import { Experience } from "@/components/home/experience";
import { GitHubSection } from "@/components/home/github-section";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import { Projects } from "@/components/home/projects";
import { Skills } from "@/components/home/skills";

import { type GitHubRepo } from "@/lib/github";

type HomePageProps = {
  repos: GitHubRepo[];
};

export const HomePage: React.FC<HomePageProps> = ({ repos }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar
        heroRef={heroRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        githubRef={githubRef}
      />
      <Hero forwardedRef={heroRef} />
      <Experience forwardedRef={experienceRef} />
      <Projects forwardedRef={projectsRef} />
      <GitHubSection forwardedRef={githubRef} repos={repos} />
      <Education forwardedRef={educationRef} />
      <Skills forwardedRef={skillsRef} />
    </div>
  );
};
