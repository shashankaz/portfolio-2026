import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        src="/404.jpg"
        width={500}
        height={500}
        alt="404 Not Found"
        className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl"
        draggable="false"
      />
    </div>
  );
};

export default NotFound;
