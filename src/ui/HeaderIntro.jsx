import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

/* eslint-disable react/no-unescaped-entities */
export default function HeaderIntro() {
  return (
    <Fade direction="down">
      <div className="py-3 text-center font-nerko text-2xl tracking-wider md:text-left md:text-3xl">
        <span className="text-left">Hello! I'm Badmus Hameed, </span>
        <TypeAnimation
          sequence={["Frontend Developer", "IT support specialist"]}
          preRenderFirstString={true}
          speed={300}
          wrapper="span"
          cursor={true}
          repeat={1}
          className={"break-words text-blue-600"}
          // style={{ fontSize: "2em", display: "inline-block" }}
        />
      </div>
    </Fade>
  );
}
