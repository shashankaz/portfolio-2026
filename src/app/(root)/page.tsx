"use client";

import { useRef } from "react";

import { Hero } from "@/components/home/hero";
import { Experience } from "@/components/home/experience";
import { Projects } from "@/components/home/projects";
import { Education } from "@/components/home/education";
import { Skills } from "@/components/home/skills";
import { Navbar } from "@/components/home/navbar";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar
        heroRef={heroRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
      />
      <Hero forwardedRef={heroRef} />
      <Experience forwardedRef={experienceRef} />
      <Projects forwardedRef={projectsRef} />
      <Education forwardedRef={educationRef} />
      <Skills forwardedRef={skillsRef} />
    </div>
  );
};

export default Home;
