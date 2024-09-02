/* eslint-disable react/prop-types */
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

export default function NavBar({ openModal, handleToggle, sticky, stickyRef }) {
  return (
    <div className={`w-full ${sticky ? "fixed top-0 left-0" : ""}`}>
      <nav
        className=" flex justify-between items-center mx-3 py-3 "
        ref={stickyRef}
      >
        <Logo />
        <div
          className="text-4xl hover:text-blue-700 transition-all duration-300"
          onClick={handleToggle}
        >
          {openModal ? <MdOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </nav>
    </div>
  );
}
