import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export const Footer = () => {
  const MAIL = "shashankstories@gmail.com";

  return (
    <div className="mt-10 h-24 border-t">
      <div className="fixed right-0 bottom-6 left-0">
        <div className="mx-auto flex w-52 items-center justify-between rounded-full bg-black px-4 py-3">
          <Link href="https://www.linkedin.com/in/shashankaz" target="_blank">
            <FaLinkedinIn className="size-5 text-white" />
          </Link>
          <Link href="https://github.com/shashankaz" target="_blank">
            <FaGithub className="size-5 text-white" />
          </Link>
          <Link href={`mailto:${MAIL}`}>
            <IoMailOutline className="size-5 text-white" />
          </Link>
          <Link href="https://www.x.com/shashankaz" target="_blank">
            <FaXTwitter className="size-5 text-white" />
          </Link>
          <Link href="https://www.instagram.com/shashankaz" target="_blank">
            <FaInstagram className="size-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
