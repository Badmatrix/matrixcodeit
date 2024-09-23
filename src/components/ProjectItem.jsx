/* eslint-disable react/prop-types */
import TechItem from "./TechItem";

export default function ProjectItem({ project }) {
  const { name, link, image1, image2, tech, text } = project;

  return (
    <li className="relative h-[250px] overflow-hidden rounded-lg border-neutral-500 bg-neutral-900 pb-3 transition-all duration-300 ease-linear hover:-translate-y-2 hover:border-2 md:h-[300px]">
      <a href={link} target="_blank" className="group ">
        <div className="backface-hidden group-hover:rotate-y-180 absolute transform transition duration-1000 ease-linear">
          <img src={image1} alt={name} />
        </div>
        <div className="backface-hidden -rotate-y-180 group-hover:rotate-y-0 absolute transform transition duration-1000 ease-linear">
          <img src={image2} alt={name} />
        </div>
      </a>

      <div className="absolute bottom-0 space-y-3 px-3 py-2 text-base">
        <h3 className="text-xl font-semibold capitalize italic">{name}</h3>
        <p>{text}</p>
        <ul className="bottom-0 z-10 mx-auto flex w-full items-center gap-3 px-3 text-xs text-slate-200">
          {tech.map((item, i) => (
            <TechItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </li>
  );
}
