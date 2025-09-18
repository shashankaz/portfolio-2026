"use client";

import { useRef } from "react";

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";

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
