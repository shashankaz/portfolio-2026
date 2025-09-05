import Image from "next/image";

const educationData = [
  {
    institute: "Indian Institute of Information Technology Ranchi",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    year: "2022 - Present",
    logo: "/education/Indian_Institute_of_Information_Technology,_Ranchi_Logo.png",
  },
  {
    institute: "St. Karen's High School",
    degree: "12th Grade",
    year: "2020 - 2022",
    logo: "/education/St_Karen's_Logo.png",
  },
  {
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
      <h1 className="text-2xl font-semibold border-b border-black pb-2 w-1/2">
        Education
      </h1>

      <div className="mt-10 space-y-4">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow rounded-xl p-2.5"
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
