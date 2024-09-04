/* eslint-disable react/prop-types */
export default function Button({ children, onclick, className }) {
  return (
    <button
      onClick={onclick}
      className={`rounded-lg transition-all duration-300 ease-linear text-sm my-3 md:w-1/6 ${className}`}
    >
      {children}
    </button>
  );
}
