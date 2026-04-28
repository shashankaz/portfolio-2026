type NavbarProps = {
  heroRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  githubRef: React.RefObject<HTMLDivElement | null>;
};

export const Navbar: React.FC<NavbarProps> = ({
  heroRef,
  educationRef,
  experienceRef,
  projectsRef,
  skillsRef,
  githubRef,
}) => {
  return (
    <ul className="bg-secondary/50 fixed top-0 right-0 left-0 z-10 border-b py-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-center justify-center gap-4 px-4">
        <li
          className="text-sm font-semibold hover:cursor-pointer"
          onClick={() =>
            heroRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          Home
        </li>
        <li
          className="text-sm font-semibold hover:cursor-pointer"
          onClick={() =>
            experienceRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          Experience
        </li>
        <li
          className="text-sm font-semibold hover:cursor-pointer"
          onClick={() =>
            projectsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          Projects
        </li>
        <li
          className="text-sm font-semibold hover:cursor-pointer"
          onClick={() =>
            githubRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          GitHub
        </li>
        <li
          className="text-sm font-semibold hover:cursor-pointer"
          onClick={() =>
            educationRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          Education
        </li>
        <li
          className="text-sm font-semibold hover:cursor-pointer"
          onClick={() =>
            skillsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          Skills
        </li>
      </div>
    </ul>
  );
};
