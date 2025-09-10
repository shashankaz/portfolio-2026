const skills = [
  "html",
  "css",
  "js",
  "ts",
  "react",
  "nextjs",
  "redux",
  "tailwind",
  "bootstrap",
  "vite",
  "nodejs",
  "express",
  "django",
  "fastapi",
  "mongodb",
  "postgres",
  "prisma",
  "redis",
  "firebase",
  "docker",
  "aws",
  "git",
  "github",
  "githubactions",
  "postman",
  "cpp",
  "py",
  "linux",
  "bash",
];

interface SkillsProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Skills = ({ forwardedRef }: SkillsProps) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="text-2xl font-semibold border-b border-black pb-2 w-1/2">
        Skills
      </h1>

      <div className="mt-10 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {skills.map((skill) => (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={skill}
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt="Skills icons"
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;
