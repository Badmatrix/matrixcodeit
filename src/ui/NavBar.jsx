/* eslint-disable react/prop-types */
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar({ openModal, handleToggle, sticky, stickyRef }) {
  return (
    <div
      className={`w-full z-50 ${
        sticky ? "fixed top-0 left-0 bg-neutral-800/30" : "bg-gray-600/10"
      }`}
    >
      <nav
        className="flex justify-between items-center mx-1 lg:mx-3 py-3 "
        ref={stickyRef}
      >
        <Logo />
        <div
          className="text-4xl hover:text-blue-700 transition-all duration-300"
          onClick={handleToggle}
        >
          {openModal ? "" : <GiHamburgerMenu />}
        </div>
      </nav>
    </div>
  );
}
