/* eslint-disable react/prop-types */
export default function Heading({ children, className }) {
  return (
    <h2
      className={`w-fit py-5 pr-5 text-3xl font-semibold underline underline-offset-8 first-letter:capitalize ${className}`}
    >
      {children}
    </h2>
  );
}
