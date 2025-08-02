import Image from "next/image";

interface HeroProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Hero = ({ forwardedRef }: HeroProps) => {
  return (
    <div
      ref={forwardedRef}
      className="py-10 flex items-center flex-col-reverse sm:flex-row justify-between gap-4"
    >
      <div className="w-full sm:w-2/3">
        <div className="flex items-baseline gap-2">
          <h1 className="text-3xl font-semibold">Hey, I&apos;m Shashank</h1>
          <span>/sha.shank/</span>
        </div>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          eius vitae, sit numquam earum ducimus amet modi aliquam quaerat nulla
          labore nemo impedit ex minima asperiores. Placeat hic provident
          itaque.
        </p>
      </div>
      <div className="w-1/2 sm:w-1/3 aspect-square shadow-md rounded-xl overflow-hidden">
        <Image
          src="/placeholder.jpeg"
          width={500}
          height={500}
          alt="Profile"
          className="h-full w-full object-cover"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Hero;
