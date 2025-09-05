import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-4 backdrop-blur-sm shadow-md rounded-xl mb-10">
      <div className="flex items-center justify-center gap-2">
        <Link
          href="https://www.linkedin.com/in/shashankaz"
          target="_blank"
          className="size-10"
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
          className="size-10"
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
          className="size-10"
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
          className="size-10"
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
      <div>Made with ❤️ by Shashank</div>
    </div>
  );
};

export default Footer;
