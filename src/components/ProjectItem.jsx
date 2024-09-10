import { useState } from "react";
import TechItem from "./TechItem";

/* eslint-disable react/prop-types */
export default function ProjectItem({ project }) {
  const { name, link, image1, image2, tech, text } = project;
  const [display, setDisplay] = useState(true);
  function changeImage() {
    setDisplay((display) => !display);
  }
  return (
    <li className="overflow-hidden rounded-lg border-neutral-500 bg-neutral-900 pb-3 transition-all duration-500 ease-in-out hover:border-2 hover:-translate-y-2 ">
      <div
        className="grid xl:grid-rows-2"
        onMouseEnter={changeImage}
        onMouseLeave={changeImage}
      >
        <a href={link} target="_blank">
          <div className="">
            <img src={display ? image1 : image2} alt={name} />
          </div>
        </a>
        <div className="space-y-3 px-3 py-2 text-base">
          <h3 className="text-xl font-semibold capitalize italic">{name}</h3>
          <p>
            {text}
          </p>
          <ul className="bottom-0 z-10 mx-auto flex w-full items-center gap-3 px-3 text-xs text-slate-200">
            {tech.map((item, i) => (
              <TechItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
