/* eslint-disable react/prop-types */
import Aboutme from "../components/Aboutme";
import NavBar from "./NavBar";

export default function Header({
  openModal,
  handleToggle,
  sticky,
  stickyRef,
  headerRef,
}) {
  return (
    <header className=" h-screen" ref={headerRef}>
      <div className="bg-neutral-900/90 h-full">
        <NavBar
          openModal={openModal}
          handleToggle={handleToggle}
          sticky={sticky}
          stickyRef={stickyRef}
        />
        <Aboutme />
      </div>
    </header>
  );
}
