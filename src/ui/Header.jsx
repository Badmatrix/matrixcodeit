/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { BsDownload } from "react-icons/bs";
import Button from "./Button";
import NavBar from "./NavBar";
import Socials from "../components/Socials";
import HeaderIntro from "./HeaderIntro";

export default function Header({
  openModal,
  handleToggle,
  sticky,
  stickyRef,
  headerRef,
}) {
  function handleDownload() {
    const pdfUrl = "HAMEED OLADIMEJI CV FE.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HAMEED OLADIMEJI cv.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <header className="h-screen" ref={headerRef}>
      <div className="h-full bg-neutral-900/95">
        <NavBar
          openModal={openModal}
          handleToggle={handleToggle}
          sticky={sticky}
          stickyRef={stickyRef}
        />
        <main className="mx-5 lg:mx-10 lg:my-5 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-x-10 lg:py-7">
          <figure className="aspect-square h-fit lg:aspect-auto lg:w-1/4 w-52 mx-auto">
            <img
              src="/slackDP.jpg"
              alt="my image"
              className="h-full w-full rounded-full lg:rounded-lg border-2 border-neutral-500 "
            />
            <div className="my-2 flex justify-center py-3">
              <Socials />
            </div> 
          </figure>
          <section className="lg:w-2/4 mx-auto">
            <div className="text-base leading-7 text-ellipsis">
              <HeaderIntro />I drive to create exceptional digital experiences,
              with a strong foundation in web development and system
              administration, I deliver responsive, user-friendly solutions that
              meet the highest standards of quality.
            </div>
            <div className="mt-3 flex items-center justify-center space-x-3 text-nowrap font-semibold lg:justify-normal">
              <Button className="bg-blue-400 px-3 py-3 text-neutral-800 shadow-inner shadow-blue-800 hover:bg-blue-500">
                Get in touch
              </Button>
              <Button
                className="justify-center bg-slate-200 px-3 py-3 text-neutral-800 shadow-inner shadow-slate-600 hover:bg-slate-300"
                onclick={handleDownload}
              >
                <div className="flex items-center justify-center space-x-3">
                  <BsDownload className="text-lg font-bold" />
                  <span> Download cv</span>
                </div>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </header>
  );
}
