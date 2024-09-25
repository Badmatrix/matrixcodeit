import { useEffect, useRef, useState } from "react";
import Header from "./ui/Header";
import useSticky from "./components/UseSticky";
import Modal from "./ui/Modal";
import ContactMe from "./components/ContactMe";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import SkillsTech from "./components/SkillsTech";

export default function App() {
  const { sticky, stickyRef, headerRef } = useSticky();
  const [openModal, setOpenModal] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(
    function () {
      openModal
        ? document.body.classList.add("modal-overlay")
        : document.body.classList.remove("modal-overlay");
    },
    [openModal],
  );
  function handleToggle() {
    setOpenModal((open) => !open);
  }

  return (
    <div className="text-lg relative">
      <Header
        openModal={openModal}
        handleToggle={handleToggle}
        sticky={sticky}
        stickyRef={stickyRef}
        headerRef={headerRef}
        contactRef={contactRef}
      />
      <Aboutme aboutRef={aboutRef} />
      <SkillsTech />
      <Projects projectRef={projectRef} />

      <ContactMe contactRef={contactRef} />
      <Footer />
      {openModal ? (
        <Modal
          handleToggle={handleToggle}
          projectRef={projectRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
          openModal={ openModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}
