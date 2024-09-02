/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";

export default function Modal({handleToggle}) {
  return (
    <div className="modal absolute top-0 right-0 bg-slate-700/95 py-10 w-full md:w-1/3 h-screen">
      <ul className=" space-y-8 text-xl capitalize text-right px-5 lg:px-10">
        <li>
          <span
            className="text-4xl text-right hover:text-blue-700"
            onClick={handleToggle}
          >
            <MdOutlineClose />
          </span>
        </li>
        <li>blog</li>
        <li>about me</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
