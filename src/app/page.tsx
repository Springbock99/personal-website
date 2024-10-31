"use client";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState } from "react";

export default function Home() {
  const [columnCount, setColumnCount] = useState(12);
  const size = 80;
  const width = size * Math.sqrt(3);

  useEffect(() => {
    const updateColumnCount = () => {
      const screenWidth = window.innerWidth;
      const needed = Math.ceil((screenWidth * 1.5) / (width * 0.75)) + 4;
      setColumnCount(needed);
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, [width]);

  return (
    <div className="bg-black text-white min-h-screen">
      {" "}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 1,
          top: "-10%",
          height: "80vh", // Added height limit
        }}
      >
        <HexagonGrid columnCount={columnCount} size={size} />
      </div>
      {/* Change bg-gray-900 to bg-black */}
      {/* Header */}
      <header className="py-6 px-4 flex justify-between items-center bg-black">
        <div className="flex items-center space-x-2">
          <Image
            src="/10.png" // This should be the same image path you're using in the About section
            alt="Profile"
            width={60} // Smaller size for the header
            height={60} // Smaller size for the header
            className="rounded-full" // Makes the image circular like your larger one
          />
          <div className="text-xl font-bold text-green">Springbock99</div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-green hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-green hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-green hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-green hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-green hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Introduction Section */}
      <section className="flex flex-col items-start px-20 py-20">
        <div className="flex flex-col ml-[17%]">
          <div className="flex items-center space-x-6">
            <h1 className="text-5xl font-bold text-green">Kent Daneel</h1>
            <div className="flex space-x-4 items-center">
              <a
                href="https://github.com/Springbock99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:text-white transition-colors"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/kent-daneel-7639832a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:text-white transition-colors"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
          <p className="mt-2">
            A Blockchain Developer deeply involved in Distributed Ledger
            Technologies. Specializing in smart contract development, I am
            experienced in Solidity, Typescript, Foundry and other essential
            technologies that are critical to innovative blockchain solutions.
          </p>
        </div>
      </section>
      {/* About Me Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 px-4">
        <Image
          src="/10.png" // Ensure this image is in the public folder
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full shadow-lg md:mr-8"
        />
        <div className="md:max-w-md">
          <h2 className="text-2xl font-bold">About Me</h2>
          <section
            className="flex justify-center py-20 px-4"
            style={{ width: "500px", height: "500px" }}
          >
            <div className="w-full max-w-10xl">
              <div className="relative pt-[56.25%] bg-gray-800 rounded-lg shadow-lg width=500px height=1000px">
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  height="500"
                  width="500"
                  controls
                >
                  <source src="/IMG_8136.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
          {/* <p className="mt-2">
            Hi There! Im Edward Davis, a Visual Designer with a focus on digital
            branding. I design websites, logos, and create promotional pieces to
            respond to messages, while also aiming to make a favorable impact.
          </p>
          <p className="mt-4">
            <strong>Birthday:</strong> May 30, 1980 <br />
            <strong>Email:</strong> edwarddavis@email.com <br />
            <strong>Language:</strong> English, German <br />
            <strong>Freelance:</strong> Available
          </p> */}
          <button className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Download CV
          </button>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* Repeat this block for each service */}
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Sketches</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Product Design</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Motion Graphics</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800">
        <p>
          &copy; {new Date().getFullYear()} Springbock99. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
