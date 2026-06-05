"use client";

import { useEffect, useState } from "react";
import { Blend, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const refs = {
    heroRef,
    educationRef,
    experienceRef,
    projectsRef,
    skillsRef,
    githubRef,
  };

  const handleScroll = (refKey: keyof typeof refs) => {
    refs[refKey].current?.scrollIntoView({
      behavior: "smooth",
      block:
        refKey === "projectsRef" || refKey === "githubRef" ? "start" : "center",
    });
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "bg-background fixed inset-0 z-40 transition-all duration-300 ease-in-out md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-3 pt-20">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.ref as keyof typeof refs)}
              className="hover:bg-secondary flex w-full items-center rounded-xl px-4 py-4 text-left text-base font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <nav className="fixed top-0 right-0 left-0 z-50">
        <div className="bg-secondary/50 hidden border-b backdrop-blur-sm md:block">
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-8 px-4 py-5">
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
        </div>

        <div
          className={cn(
            "flex items-center justify-between px-4 py-3 transition-colors duration-200 md:hidden",
            isOpen
              ? "bg-background"
              : "bg-background/80 border-b backdrop-blur-md",
          )}
        >
          <Blend size={22} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-secondary rounded-md p-1.5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </>
  );
};
