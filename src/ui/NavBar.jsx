/* eslint-disable react/prop-types */
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar({ openModal, handleToggle, sticky, stickyRef }) {
  return (
    <div
      className={`w-full z-50 ${
        sticky ? "fixed top-0 left-0 bg-neutral-800" : "bg-gray-600/10"
      }`}
    >
      <nav
        className="flex justify-between items-center mx-1 lg:mx-3 py-3 "
        ref={stickyRef}
      >
        <Logo />
        <div
          className="text-4xl hover:text-gray-500 ease-in-out transition-all duration-500"
          onClick={handleToggle}
        >
          {openModal ? "" : <GiHamburgerMenu />}
        </div>
      </nav>
    </div>
  );
}
