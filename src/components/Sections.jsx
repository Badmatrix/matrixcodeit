
/* eslint-disable react/prop-types */
export default function Sections({ children, className }) {
  return (
    <section
      className={`mt-3 h-fit space-y-4 border-b border-neutral-900 px-5 py-10 text-justify sm:mt-5 lg:mt-10 lg:px-10 ${className}`}
    >
      {children}
    </section>
  );
}
