import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
import { FaDev } from "react-icons/fa";
import SocialItem from "./SocialItem";
const socials = [
  // {
  //   id: 1,
  //   name: "email",
  //   icon: <IoIosMail />,
  //   link: "mailto: badmushameed2008@gmail.com",
  // },
  {
    id: 2,
    name: "X/twitter",
    icon: <FaSquareXTwitter />,
    link: "https://x.com/matrix_icode",
  },
  {
    id: 4,
    name: "Linkedln",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/badmus-hameed-37211b225",
  },
  {
    id: 3,
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/Badmatrix",
  },
  {
    id: 5,
    name: "Github",
    icon: <FaDev />,
    link: "https://dev.to/badmatrix",
  },
];
export default function Socials() {
  return (
    <ul className="flex justify-center space-x-5 text-3xl md:justify-normal">
      {socials.map((social) => (
        <SocialItem key={social.id} social={social} />
      ))}
    </ul>
  );
}
