import Image from "next/image";

interface HeroProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Hero = ({ forwardedRef }: HeroProps) => {
  return (
    <div
      ref={forwardedRef}
      className="py-10 flex items-center flex-col-reverse justify-between gap-4 mt-14"
    >
      <div className="w-full sm:w-2/3">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-4xl font-bold">Hey, I&apos;m Shashank</h1>
          <span>/sha.shank/</span>
        </div>
        <p className="mt-2 text-center text-muted-foreground">
          A movie and show binge-watcher who never skips a good playlist.
          Between music sessions and screen time, I dive into coding adventures
          that keep me curious, creative, and caffeinated.
        </p>
      </div>
      <div className="w-1/2 sm:w-1/3 aspect-square shadow-md rounded-full overflow-hidden">
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
