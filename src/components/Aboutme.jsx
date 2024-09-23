/* eslint-disable react/prop-types */
import Heading from "../ui/Heading";
import Sections from "../components/Sections";
import { Fade } from "react-awesome-reveal";

/* eslint-disable react/no-unescaped-entities */
export default function Aboutme({ aboutRef }) {
  // console.log(aboutRef);
  return (
    <div ref={aboutRef}>
      <Sections className="">
        <Fade direction="left" triggerOnce>
          <Heading>about me</Heading>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="hyphens-manual  leading-7 tracking-wide lg:indent-3">
            Hi, I'm Badmus Hameed, a detail-oriented Frontend Developer and IT
            Support specialist dedicated to crafting exceptional digital
            experiences. My passion lies in building responsive and
            user-friendly web applications that seamlessly interact with users. <br />
            With a strong foundation in HTML, CSS, JavaScript, and React, I
            design and develop intuitive interfaces that meet the highest
            standards of quality. Additionally, I ensure the installation,
            maintenance, and configuration of system software to guarantee
            optimal performance and stay up-to-date with the latest
            advancements. My expertise extends to TailwindCSS, NextJs, and
            software/hardware configuration, allowing me to deliver
            comprehensive solutions that meet the unique needs of each project. <br />
            As a friendly and approachable professional, I'm committed to
            providing top-notch support and collaboration to ensure the success
            of every endeavor. I'm excited to bring my skills and enthusiasm to
            new projects and collaborations. Let's work together to create
            digital experiences that inspire and delight!"
          </div>
        </Fade>
      </Sections>
    </div>
  );
}
