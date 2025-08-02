const Navbar = ({
  heroRef,
  educationRef,
  experienceRef,
  projectsRef,
  skillsRef,
  blogsRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  blogsRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <ul className="flex items-center justify-center gap-4 py-4">
      <li
        className="text-sm font-semibold hover:cursor-pointer"
        onClick={() => heroRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        Home
      </li>
      <li
        className="text-sm font-semibold hover:cursor-pointer"
        onClick={() =>
          educationRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Education
      </li>
      <li
        className="text-sm font-semibold hover:cursor-pointer"
        onClick={() =>
          experienceRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Experience
      </li>
      <li
        className="text-sm font-semibold hover:cursor-pointer"
        onClick={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Projects
      </li>
      <li
        className="text-sm font-semibold hover:cursor-pointer"
        onClick={() =>
          skillsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Skills
      </li>
      <li
        className="text-sm font-semibold hover:cursor-pointer"
        onClick={() => blogsRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        Blogs
      </li>
    </ul>
  );
};

export default Navbar;
