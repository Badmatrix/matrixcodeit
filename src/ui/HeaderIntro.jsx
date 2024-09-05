import { TypeAnimation } from "react-type-animation";

/* eslint-disable react/no-unescaped-entities */
export default function HeaderIntro() {
  return (
    <div className="font-nerko py-3 text-2xl md:text-3xl tracking-wider text-center">
      <span>Hello! I'm Badmus Hameed, </span>
      <TypeAnimation
        sequence={["Frontend Developer", "IT Support specialist"]}
        preRenderFirstString={true}
        speed={300}
        wrapper="span"
        cursor={true}
        repeat={3}
        className={'text-blue-600'}
        // style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
}
