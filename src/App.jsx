import { useEffect, useState } from "react";
import Header from "./ui/Header";
import useSticky from "./components/UseSticky";
import Modal from "./ui/Modal";
import ContactMe from "./components/ContactMe";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const { sticky, stickyRef, headerRef } = useSticky();

  useEffect(
    function () {
      openModal
        ? document.body.classList.add("modal-overlay")
        : document.body.classList.remove("modal-overlay");
    },
    [openModal]
  );
  function handleToggle() {
    setOpenModal((open) => !open);
  }
  return (
    <div className="">
      <Header
        openModal={openModal}
        handleToggle={handleToggle}
        sticky={sticky}
        stickyRef={stickyRef}
        headerRef={headerRef}
      />
      <ContactMe />

      {openModal ? <Modal handleToggle={handleToggle} /> : ""}
    </div>
  );
}
