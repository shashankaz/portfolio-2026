const Navbar = ({
  heroRef,
  educationRef,
  experienceRef,
  projectsRef,
  skillsRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <ul className="flex items-center justify-center gap-4 py-4 sticky top-4 z-10 backdrop-blur-sm shadow-md rounded-full mt-4">
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
            block: "center",
          })
        }
      >
        Projects
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
    </ul>
  );
};

export default Navbar;
