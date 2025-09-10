import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 md:gap-6 px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-wide text-center text-neutral-900">
        Page Not Found
      </h1>
      <p className="text-xl md:text-2xl text-center text-neutral-500">
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 md:px-8 md:py-4 uppercase font-medium text-sm md:text-base tracking-wide rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
