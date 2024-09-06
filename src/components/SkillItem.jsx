import { Fade } from "react-awesome-reveal";

/* eslint-disable react/prop-types */
export default function SkillItem({ item }) {
  const { name, icon } = item;
  return (
    <Fade direction="left" cascade triggerOnce>
      <li className="flex items-center gap-3 rounded-md bg-neutral-800 px-3 py-2 capitalize shadow-inner">
        <div className="w-10">
          <img src={icon} alt={name} className="" />
        </div>
        <span>{name}</span>
      </li>
    </Fade>
  );
}
