/* eslint-disable react/prop-types */
import { projects } from "../projects";
import Heading from "../ui/Heading";
import ProjectItem from "./ProjectItem";
import Sections from "./Sections";
import { Fade } from "react-awesome-reveal";


export default function Projects({projectRef}) {
  return (
    <div ref={projectRef}>
      <Fade direction="left" triggerOnce>
        <Sections className="">
          <Heading>Projects</Heading>
          <p className=" first-letter:capitalize text-lg lg:text-xl">here are some of my recent works: </p>
          <ul className="mx-5 grid gap-5 md:mx-7 md:grid-cols-2 md:gap-7 lg:mx-14 lg:grid-cols-3 lg:gap-10">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </ul>
        </Sections>
      </Fade>
    </div>
  );
}
