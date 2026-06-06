import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4 md:gap-6">
      <h1 className="text-foreground text-center text-4xl font-semibold tracking-wide uppercase md:text-5xl lg:text-6xl">
        Page Not Found
      </h1>
      <p className="text-muted-foreground text-center text-xl md:text-2xl">
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="bg-foreground text-background rounded-lg px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none md:px-8 md:py-4 md:text-base"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
