import Image from "next/image";

const skills = [
  { item: "TypeScript", icon: "/skills/typescript.png" },
  { item: "JavaScript", icon: "/skills/javascript.png" },
  { item: "C++", icon: "/skills/cpp.png" },
  { item: "Python", icon: "/skills/python.png" },

  { item: "HTML", icon: "/skills/html.png" },
  { item: "CSS", icon: "/skills/css.png" },
  { item: "React.js", icon: "/skills/react.png" },
  { item: "Next.js", icon: "/skills/nextjs.png" },
  { item: "Node.js", icon: "/skills/nodejs.png" },
  { item: "Express", icon: "/skills/expressjs.png" },
  { item: "Django", icon: "/skills/django.png" },
  { item: "FastAPI", icon: "/skills/fastapi.png" },
  { item: "TailwindCSS", icon: "/skills/tailwindcss.png" },

  {
    item: "AWS (ECS, ECR, S3, RDS, SES, Route 53, ACM)",
    icon: "/skills/aws.png",
  },
  { item: "Docker", icon: "/skills/docker.png" },
  { item: "GitHub Actions", icon: "/skills/github.png" },

  { item: "Git", icon: "/skills/git.png" },

  { item: "PostgreSQL", icon: "/skills/postgresql.png" },
  { item: "MongoDB", icon: "/skills/mongodb.png" },
  { item: "Prisma", icon: "/skills/prisma.png" },
  { item: "SQL", icon: "/skills/sql.png" },
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
          <div
            key={skill.item}
            className="aspect-square rounded-xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/40 shadow-lg hover:bg-white/50 transition-colors duration-200"
            title={skill.item}
          >
            <Image
              src={skill.icon}
              width={48}
              height={48}
              alt={skill.item}
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
