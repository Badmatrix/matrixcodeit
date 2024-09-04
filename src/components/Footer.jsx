import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-slate-600 py-3">
      <div className="text-center md:text-start md:flex md:justify-between items-center mx-5 space-y-5">
        <div className="text-sm">&copy; Badmus Hameed</div>
        <Socials />
      </div>
    </footer>
  );
}
