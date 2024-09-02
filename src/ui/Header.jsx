/* eslint-disable react/prop-types */
import NavBar from "./NavBar";

export default function Header({ openModal, handleToggle, sticky, stickyRef, headerRef }) {
  return (
    <header ref={headerRef}>
      <NavBar
        openModal={openModal}
        handleToggle={handleToggle}
        sticky={sticky}
        stickyRef={stickyRef}
      />
    </header>
  );
}
