/* eslint-disable react/prop-types */
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Sections from "./Sections";
import { LuSend } from "react-icons/lu";
import { FaArrowCircleUp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function ContactMe({ contactRef }) {
  // console.log(contactRef)
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div ref={contactRef}>
      <Sections className="justify-between px-10 capitalize md:flex">
        <form action="" className="space-y-2 px-5 py-5 lg:w-3/5">
          <Fade direction="right">
            <Heading className="no-underline">Contact me !</Heading>
            <p className="text-base">fill form to send me a message</p>
            <div className="space-y-5">
              <div>
                <label className="space-y-2 capitalize">
                  <div>name</div>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-md border bg-transparent px-2 py-1 outline-2"
                  />
                </label>
              </div>
              <div>
                <label className="space-y-3 capitalize">
                  <div>email</div>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-md border bg-transparent px-2 py-1 outline-2"
                  />
                </label>
              </div>
              <div>
                <label className="space-y-2 capitalize">
                  <span>message</span>
                  <textarea
                    name=""
                    className="h-28 w-full rounded-md border bg-transparent px-2 py-1 outline-2"
                  ></textarea>
                </label>
              </div>
            </div>
            <Button className="my-5 flex w-fit items-center gap-3 border px-3 py-2 capitalize hover:bg-neutral-800">
              <LuSend />
              <span>send message</span>
            </Button>
          </Fade>
        </form>
        <div className="" title="scroll to top">
          <FaArrowCircleUp
            className="cursor-pointer text-6xl transition-all duration-150 ease-in-out hover:text-slate-400"
            onClick={scrollTop}
          />
        </div>
      </Sections>
    </div>
  );
}
