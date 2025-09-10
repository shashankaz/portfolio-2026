import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const MAIL = "shashankstories@gmail.com";

  return (
    <div className="py-12 mt-20 flex flex-col items-center justify-center gap-8 border-t border-black">
      <Link
        href={`mailto:${MAIL}`}
        className="bg-neutral-700 hover:bg-neutral-600 text-white font-medium text-sm py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm"
      >
        Send Mail
      </Link>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://www.linkedin.com/in/shashankaz"
          target="_blank"
          className="size-10 hover:scale-105 transition-transform duration-200"
        >
          <Image
            src="/social/linkedin.png"
            height={40}
            width={40}
            alt="LinkedIn"
            className="h-full w-full"
            draggable="false"
          />
        </Link>
        <Link
          href="https://github.com/shashankaz"
          target="_blank"
          className="size-10 hover:scale-105 transition-transform duration-200"
        >
          <Image
            src="/social/github.png"
            height={40}
            width={40}
            alt="GitHub"
            className="h-full w-full"
            draggable="false"
          />
        </Link>
        <Link
          href="https://www.x.com/shashankaz"
          target="_blank"
          className="size-10 hover:scale-105 transition-transform duration-200"
        >
          <Image
            src="/social/x.png"
            height={40}
            width={40}
            alt="X"
            className="h-full w-full"
            draggable="false"
          />
        </Link>
        <Link
          href="https://www.instagram.com/shashankaz"
          target="_blank"
          className="size-10 hover:scale-105 transition-transform duration-200"
        >
          <Image
            src="/social/instagram.png"
            height={40}
            width={40}
            alt="Instagram"
            className="h-full w-full"
            draggable="false"
          />
        </Link>
      </div>
      <div className="text-gray-600 text-sm">Made with ❤️ by Shashank</div>
    </div>
  );
};

export default Footer;
