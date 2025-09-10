import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-semibold uppercase tracking-wide text-center text-neutral-900">
        Page Not Found
      </h1>
      <p className="text-2xl text-center text-neutral-500">
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-4 py-2 uppercase font-medium text-sm tracking-wide"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
