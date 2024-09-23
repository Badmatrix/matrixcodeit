/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";
import SkillItem from "./SkillItem";
import Heading from "../ui/Heading";
import Sections from "./Sections";

const technologies = [
  { id: 1, name: "html", icon: "/svg/html-5-svgrepo-com.svg" },
  { id: 2, name: "css", icon: "/svg/css-3-svgrepo-com.svg" },
  { id: 3, name: "javascript", icon: "/svg/javascript-logo-svgrepo-com.svg" },
  { id: 4, name: "react", icon: "/svg/react-svgrepo-com.svg" },
  { id: 6, name: "nextJs", icon: "/svg/nextjs-fill-svgrepo-com.svg" },
  { id: 7, name: "github", icon: "/svg/github-142-svgrepo-com.svg" },
  { id: 8, name: "git", icon: "/svg/git-svgrepo-com.svg" },
  { id: 12, name: "sass", icon: "/svg/sass-svgrepo-com (1).svg" },
  {
    id: 15,
    name: "nodejs",
    icon: "/svg/nodejs-svgrepo-com.svg",
  },
  { id: 10, name: "webpack", icon: "/svg/webpack-svgrepo-com.svg" },
  {
    id: 9,
    name: "typescript",
    icon: "/svg/typescript-icon-svgrepo-com.svg",
  },
  { id: 5, name: "tailwindcss", icon: "/svg/tailwindcss-icon-svgrepo-com.svg" },
  {
    id: 11,
    name: "material ui",
    icon: "/svg/material-ui-svgrepo-com.svg",
  },
  {
    id: 13,
    name: "supabase",
    icon: "/svg/supabase-logo-icon.svg",
  },
  {
    id: 14,
    name: "firebase",
    icon: "/svg/firebase-svgrepo-com.svg",
  },

  //   {
  //     id: 15,
  //     name: "nodejs",
  //     icon: "/public/svg/nodejs-svgrepo-com.svg",
  //   },
  //   {
  //     id: 15,
  //     name: "nodejs",
  //     icon: "/public/svg/nodejs-svgrepo-com.svg",
  //   },
  //   {
  //     id: 15,
  //     name: "nodejs",
  //     icon: "/public/svg/nodejs-svgrepo-com.svg",
  //   },
];
export default function SkillsTech() {
  return (
    <Sections className="">
      <Fade direction="left" triggerOnce>
        <Heading>skillset</Heading>
        <p className="">Technology I've worked & dabbled with:</p>
      </Fade>
      {/* <Fade> */}
      <ul className="space-y-3 sm:flex flex-wrap gap-3">
        {technologies.map((item) => (
          <SkillItem key={item.id} item={item} />
        ))}
      </ul>
      {/* </Fade> */}
    </Sections>
  );
}
