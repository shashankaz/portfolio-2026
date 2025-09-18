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
    <ul className="py-6 fixed left-0 right-0 top-0 z-10 backdrop-blur-sm border-b bg-white/60">
      <div className="flex items-center justify-end gap-4 max-w-2xl mx-auto px-4">
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

export default Navbar;
