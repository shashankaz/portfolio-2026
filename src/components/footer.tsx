import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

import { SOCIAL_LINKS } from "@/lib/constants";

export const Footer = () => {
  return (
    <div className="mt-10 h-24 border-t">
      <div className="fixed right-0 bottom-6 left-0">
        <div className="mx-auto flex w-52 items-center justify-between rounded-full bg-black px-4 py-3">
          <Link href={SOCIAL_LINKS.linkedin} target="_blank">
            <FaLinkedinIn className="size-5 text-white" />
          </Link>
          <Link href={SOCIAL_LINKS.github} target="_blank">
            <FaGithub className="size-5 text-white" />
          </Link>
          <Link href={SOCIAL_LINKS.mailto}>
            <IoMailOutline className="size-5 text-white" />
          </Link>
          <Link href={SOCIAL_LINKS.twitter} target="_blank">
            <FaXTwitter className="size-5 text-white" />
          </Link>
          <Link href={SOCIAL_LINKS.instagram} target="_blank">
            <FaInstagram className="size-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
