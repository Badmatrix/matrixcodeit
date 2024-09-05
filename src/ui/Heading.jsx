/* eslint-disable react/prop-types */
export default function Heading({children}) {
  return (
    <h2 className="text-3xl font-semibold underline underline-offset-8 w-fit pr-5 py-2 first-letter:capitalize">
      {children}
    </h2>
  );
}
