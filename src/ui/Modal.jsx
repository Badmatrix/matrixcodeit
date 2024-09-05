/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";

export default function Modal({ handleToggle }) {
  return (
    <div className="modal absolute top-0 right-0 bg-slate-700 py-10 w-full md:w-1/3 xl:w-1/4 h-screen space-y-8">
      <div className="px-5">
        <MdOutlineClose
          className="text-4xl hover:text-slate-300 cursor-pointer transition-all ease-in-out duration-200"
          onClick={handleToggle}
        />
      </div>
      <ul className=" space-y-8 text-xl capitalize text-right px-5 lg:px-10 float-right">
        <li>blog</li>
        <li>about me</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
