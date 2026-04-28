"use client";

import { useState } from "react";
import { Blend, Menu, X } from "lucide-react";

type NavbarProps = {
  heroRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  githubRef: React.RefObject<HTMLDivElement | null>;
};

const navItems = [
  { label: "Home", ref: "heroRef" },
  { label: "Experience", ref: "experienceRef" },
  { label: "Projects", ref: "projectsRef" },
  { label: "GitHub", ref: "githubRef" },
  { label: "Education", ref: "educationRef" },
  { label: "Skills", ref: "skillsRef" },
];

export const Navbar: React.FC<NavbarProps> = ({
  heroRef,
  educationRef,
  experienceRef,
  projectsRef,
  skillsRef,
  githubRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const refs = {
    heroRef,
    educationRef,
    experienceRef,
    projectsRef,
    skillsRef,
    githubRef,
  };

  const handleScroll = (refKey: keyof typeof refs) => {
    const ref = refs[refKey as keyof typeof refs];
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block:
        refKey === "projectsRef" || refKey === "githubRef" ? "start" : "center",
    });
    setIsOpen(false);
  };

  return (
    <nav className="bg-secondary/50 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto max-w-2xl px-4">
        <div className="hidden items-center justify-center gap-8 py-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="hover:text-foreground/70 text-sm font-semibold transition-colors"
              onClick={() => handleScroll(item.ref as keyof typeof refs)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between py-4 md:hidden">
          <Blend size={24} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-secondary rounded-md p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="animate-in fade-in slide-in-from-top-2 pb-4 duration-200 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="hover:bg-secondary w-full rounded-md px-4 py-3 text-left text-sm font-semibold transition-colors"
                  onClick={() => handleScroll(item.ref as keyof typeof refs)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
