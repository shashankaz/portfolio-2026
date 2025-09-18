import Image from "next/image";

const educationData = [
  {
    id: 1,
    institute: "Indian Institute of Information Technology Ranchi",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    year: "2022 - Present",
    logo: "/education/Indian_Institute_of_Information_Technology,_Ranchi_Logo.png",
  },
  {
    id: 2,
    institute: "St. Karen's High School",
    degree: "12th Grade",
    year: "2020 - 2022",
    logo: "/education/St_Karen's_Logo.png",
  },
  {
    id: 3,
    institute: "St. Karen's High School",
    degree: "10th Grade",
    year: "2015 - 2020",
    logo: "/education/St_Karen's_Logo.png",
  },
];

interface EducationProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Education = ({ forwardedRef }: EducationProps) => {
  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="text-2xl font-bold text-center pb-2">Education</h1>

      <div className="mt-10 space-y-4">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-100 border border-black shadow-[3px_3px_#000] hover:scale-105 transition-all rounded-xl p-3"
          >
            <div className="flex items-start gap-2.5">
              <div className="min-w-12 aspect-square rounded-lg">
                <Image
                  src={item.logo}
                  height={48}
                  width={48}
                  alt={`${item.institute} logo`}
                  className="object-contain h-full w-full"
                  draggable="false"
                />
              </div>
              <div>
                <h2 className="font-semibold">{item.institute}</h2>
                <p className="text-sm">{item.degree}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500 italic min-w-24 flex justify-end text-right">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
