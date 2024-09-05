/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import { MdOutlineClose } from "react-icons/md";

export default function Modal({
  handleToggle,
  aboutRef,
  contactRef,
  projectRef,
}) {
  function gotoAbout() {
    handleToggle();
    document.body.classList.remove("modal-overlay");
    window.scrollTo({ top: aboutRef.current.offsetTop, behavior: "smooth" });
  }
  function gotoContact() {
    handleToggle();
    document.body.classList.remove("modal-overlay");
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: "smooth",
    });
  }
  function gotoProject() {
    handleToggle();
    document.body.classList.remove("modal-overlay");
    window.scrollTo({
      top: projectRef.current.offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <div className="modal fixed right-0 top-0 z-50 h-screen w-full space-y-8 bg-neutral-800 py-10 md:w-1/3 xl:w-1/4">
      <div className="px-5">
        <MdOutlineClose
          className="cursor-pointer text-4xl transition-all duration-200 ease-in-out hover:text-slate-300"
          onClick={handleToggle}
        />
      </div>
      <ul className="float-right space-y-8 px-5 text-right text-xl capitalize lg:px-10">
        <Fade cascade direction="down">
          <li>blog</li>
          <li onClick={gotoAbout}>about me</li>
          <li onClick={gotoProject}>projects</li>
          <li onClick={gotoContact}>contact</li>
        </Fade>
      </ul>
    </div>
  );
}
