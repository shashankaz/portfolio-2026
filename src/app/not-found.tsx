import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4 md:gap-6">
      <h1 className="text-center text-4xl font-semibold tracking-wide text-neutral-900 uppercase md:text-5xl lg:text-6xl">
        Page Not Found
      </h1>
      <p className="text-center text-xl text-neutral-500 md:text-2xl">
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-black px-6 py-3 text-sm font-medium tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none md:px-8 md:py-4 md:text-base"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
