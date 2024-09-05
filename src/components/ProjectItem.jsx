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
    
      <li className="overflow-hidden rounded-lg bg-neutral-900 pb-3">
        <div className="grid grid-rows-2">
          <a href={link} target="_blank">
            <div
              className=""
              onMouseEnter={changeImage}
              onMouseLeave={changeImage}
            >
              <img src={display ? image1 : image2} alt={name} />
            </div>
          </a>
          <p className="px-3 py-3 text-base">
            {text ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates reiciendis cum impedit aliquam nulla quidem reprehenderit architecto voluptatum expedita?"}
          </p>
          <ul className="bottom-0 z-10 flex w-full items-center gap-3 px-3 text-xs text-yellow-600">
            {tech.map((item, i) => (
              <TechItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </li>
    
  );
}
