import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const MAIL = "shashankstories@gmail.com";

  return (
    <div className="h-24 border-t mt-10">
      <div className="fixed bottom-6 left-0 right-0">
        <div className="mx-auto bg-black rounded-full px-4 py-3 w-52 flex justify-between items-center">
          <Link href="https://www.linkedin.com/in/shashankaz" target="_blank">
            <FaLinkedinIn className="text-white size-5" />
          </Link>
          <Link href="https://github.com/shashankaz" target="_blank">
            <FaGithub className="text-white size-5" />
          </Link>
          <Link href={`mailto:${MAIL}`}>
            <IoMailOutline className="text-white size-5" />
          </Link>
          <Link href="https://www.x.com/shashankaz" target="_blank">
            <FaXTwitter className="text-white size-5" />
          </Link>
          <Link href="https://www.instagram.com/shashankaz" target="_blank">
            <FaInstagram className="text-white size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
