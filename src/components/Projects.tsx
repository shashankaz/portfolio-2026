const projectsData = [
  {
    title: "Contest Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nemo?",
    date: "Mar 2025",
  },
];

interface ProjectsProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Projects = ({ forwardedRef }: ProjectsProps) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="text-2xl font-semibold border-b border-black pb-2 w-1/2">
        Projects
      </h1>

      <div className="mt-10 space-y-4">
        {projectsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow rounded-xl p-4"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
            <div className="text-xl font-bold uppercase">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
