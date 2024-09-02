import { useState } from "react";
import Header from "./ui/Header";
import useSticky from "./components/UseSticky";
import Modal from "./ui/Modal";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const { sticky, stickyRef, headerRef } = useSticky();

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
      {openModal ?<Modal/>:''}
    </div>
  );
}
