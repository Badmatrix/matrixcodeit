/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import { MdOutlineClose } from "react-icons/md";

export default function Modal({
  handleToggle,
  aboutRef,
  contactRef,
  projectRef,
  openModal,
}) {
  function gotoAbout() {
    handleToggle();
    document.body.classList.remove("modal-overlay");
    window.scrollTo({ top: aboutRef.current.offsetTop, behavior: "smooth" });
  }
  function gotoContact() {
    handleToggle();
    document.body.classList.remove("modal-overlay");
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: "smooth",
    });
  }
  function gotoProject() {
    handleToggle();
    document.body.classList.remove("modal-overlay");
    window.scrollTo({
      top: projectRef.current.offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <section className="fixed left-0 top-0 z-20 h-full w-full overflow-hidden backdrop-blur-sm">
      <div
        className={`absolute right-0 top-0 h-screen w-0 transform overflow-x-hidden bg-neutral-800 transition-all duration-500 ease-linear ${openModal ? "w-full sm:w-1/2 md:w-1/3" : "w-0"}`}
      >
        <div className="modal space-y-8">
          <div className="px-5 py-3">
            <MdOutlineClose
              className="cursor-pointer text-4xl transition-all duration-200 ease-in-out hover:text-slate-300"
              onClick={handleToggle}
            />
          </div>
          <Fade cascade direction="down" duration={500}>
            <ul className="float-right space-y-8 px-5 text-right text-xl capitalize lg:px-10">
              <li onClick={gotoAbout}>about me</li>
              <li onClick={gotoProject}>projects</li>
              <li onClick={gotoContact}>contact</li>
              {
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer"></a>
                </li>
              }
            </ul>
          </Fade>
        </div>
      </div>
    </section>
 
    //  <div>
    //   <div>
    //     <button onClick={() => setOpenPanel(true)}>Open</button>
    //   </div>
    //   <SlidingPanel
    //     type={'left'}
    //     isOpen={openPanel}
    //     size={30}
    //   >
    //     <div>
    //       <div>My Panel Content</div>
    //       <button onClick={() => setOpenPanel(false)}>close</button>
    //     </div>
    //   </SlidingPanel>
    // </div>
  );
}
