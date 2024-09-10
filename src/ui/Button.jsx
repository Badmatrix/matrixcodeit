/* eslint-disable react/prop-types */
export default function Button({ children, onclick, className }) {
  return (
    <button
      onClick={onclick}
      className={`my-3 rounded-lg text-xs hover:scale-105 transition-all duration-300 ease-linear hover:underline sm:text-sm md:w-fit ${className}`}
    >
      {children}
    </button>
  );
}
