/* eslint-disable react/prop-types */
export default function Button({ children, onclick, className }) {
  return (
    <button
      disabled
      onClick={onclick}
      className={`rounded-lg transition-all duration-300 ease-linear text-xs sm:text-sm my-3 md:w-fit hover:underline cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
