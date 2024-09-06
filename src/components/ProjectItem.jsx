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
    <li className="overflow-hidden rounded-lg bg-neutral-900 pb-3 hover:border-2 border-slate-400">
      <div className="grid xl:grid-rows-2">
        <a href={link} target="_blank">
          <div
            className=""
            onMouseEnter={changeImage}
            onMouseLeave={changeImage}
          >
            <img src={display ? image1 : image2} alt={name} />
          </div>
        </a>
        <div className="px-3 py-2 text-base space-y-3">
          <h3 className="font-semibold capitalize text-xl italic">{name}</h3>
          <p >
            {text ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates reiciendis cum impedit aliquam nulla quidem reprehenderit architecto voluptatum expedita?"}
          </p>
          <ul className="bottom-0 z-10 flex w-full items-center gap-3 px-3 mx-auto text-xs text-slate-200">
            {tech.map((item, i) => (
              <TechItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
