import Image from "next/image";

type HeroProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
};

export const Hero: React.FC<HeroProps> = ({ forwardedRef }) => {
  return (
    <div
      ref={forwardedRef}
      className="mt-14 flex flex-col-reverse items-center justify-between gap-4 py-10"
    >
      <div className="w-full sm:w-2/3">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold">Hey, I&apos;m Shashank</h1>
          <span>/sha.shank/</span>
        </div>
        <p className="text-muted-foreground mt-2 text-center">
          A movie and show binge-watcher who never skips a good playlist.
          Between music sessions and screen time, I dive into coding adventures
          that keep me curious, creative, and caffeinated.
        </p>
      </div>
      <div className="aspect-square w-1/2 overflow-hidden rounded-full shadow-md sm:w-1/3">
        <Image
          src="/placeholder.jpeg"
          width={500}
          height={500}
          alt="Profile"
          className="h-full w-full object-cover select-none"
          draggable="false"
        />
      </div>
    </div>
  );
};
