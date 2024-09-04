import { useEffect, useState } from "react";
import Header from "./ui/Header";
import useSticky from "./components/UseSticky";
import Modal from "./ui/Modal";
import ContactMe from "./components/ContactMe";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";

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
    <div className="text-lg">
      <Header
        openModal={openModal}
        handleToggle={handleToggle}
        sticky={sticky}
        stickyRef={stickyRef}
        headerRef={headerRef}
      />
      <Aboutme />
      {/* <ContactMe /> */}
      <Footer />
      {openModal ? <Modal handleToggle={handleToggle} /> : ""}
    </div>
  );
}
