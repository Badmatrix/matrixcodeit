import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-7">
      <div className="text-center md:text-start md:flex md:justify-between items-center mx-5 space-y-5">
        <div className="text-base capitalize">
          &copy; 2024 <span className=" font-pacifico font-thin text-sm">matrix codeit</span>
        </div>
        <Socials />
      </div>
    </footer>
  );
}
