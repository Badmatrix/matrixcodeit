/* eslint-disable react/prop-types */
import { BsDownload } from "react-icons/bs";
import Button from "./Button";
import NavBar from "./NavBar";

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
    <header className=" h-screen" ref={headerRef}>
      <div className="bg-neutral-900/95 h-full">
        <NavBar
          openModal={openModal}
          handleToggle={handleToggle}
          sticky={sticky}
          stickyRef={stickyRef}
        />
        <main className="md:flex flex-row-reverse my-5 mx-3">
          <figure className="w-fit md:w-full border-2 overflow-hidden rounded-3xl">
            {/* <img src="/slackDP.jpg" alt="my image" /> */}
          </figure>
          <div className="mx-5 text-xl font-quicksand text-gray-200 mt-5">
            <div className="">
              Hello! I'm Badmus Hameed, a passionate Frontend Developer and IT
              Support specialist with a drive to create exceptional digital
              experiences. With a strong foundation in web development and
              system administration, I deliver responsive, user-friendly
              solutions that meet the highest standards of quality.
            </div>
            <div className="flex space-x-5 font-semibold items-center">
              <Button className="bg-blue-500 px-3 py-3 hover:bg-blue-800">
                Learn more
              </Button>
              <Button
                className="bg-red-500 px-3 py-3 hover:bg-blue-800"
                onclick={handleDownload}
              >
                <div className="flex space-x-3">
                  <BsDownload className="text-xl font-bold" />
                  <span> Download cv</span>
                </div>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </header>
  );
}
