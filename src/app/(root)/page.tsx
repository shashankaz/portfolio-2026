"use client";

import { useRef } from "react";

import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
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
      <Education forwardedRef={educationRef} />
      <Experience forwardedRef={experienceRef} />
      <Projects forwardedRef={projectsRef} />
      <Skills forwardedRef={skillsRef} />
    </div>
  );
};

export default Home;
