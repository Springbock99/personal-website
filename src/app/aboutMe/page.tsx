"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HexagonGrid from "../components/HexagonGrid";
import { FileDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function About() {
  const [columnCount, setColumnCount] = useState(12);
  const size = 80;
  const width = size * Math.sqrt(3);

  useEffect(() => {
    const updateColumnCount = () => {
      const screenWidth = window.innerWidth;
      const needed = Math.ceil((screenWidth * 2) / (width * 0.75)) + 4;
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
          top: "0",
          height: "100vh", // Added height limit
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HexagonGrid columnCount={columnCount} size={size} />
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        {" "}
        <header className="py-6 px-4 flex justify-between items-center bg-black">
          <div className="flex items-center space-x-2">
            <Image
              src="/KG.png" // This should be the same image path you're using in the About section
              alt="Profile"
              width={130} // Smaller size for the header
              height={130} // Smaller size for the header
              className="rounded-full" // Makes the image circular like your larger one
            />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
                            hover:border-green/50 transition-colors backdrop-blur-sm 
                            text-green hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
                            hover:border-green/50 transition-colors backdrop-blur-sm 
                            text-green hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
                            hover:border-green/50 transition-colors backdrop-blur-sm 
                            text-green hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li className="ml-6">
                <a
                  href="https://calendly.com/daneelkent"
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer"
                  className="text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
               hover:border-green/50 transition-colors backdrop-blur-sm 
               text-green hover:text-white"
                >
                  Book a Meeting
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* Introduction Section */}
        <section className="flex flex-col items-start px-20 py-10">
          <div className="flex flex-col ml-[17%]">
            <div className="flex items-center space-x-6">
              <div className="rounded-full p-[3px] bg-green shadow-lg shadow-green/50">
                <Image
                  src="/StaffH.png"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
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
                <a
                  href="/KentDaneelResume.pdf" // Make sure to put your CV PDF in the public folder
                  download
                  className="text-green hover:text-white transition-colors"
                  title="Download CV"
                >
                  <FileDown size={32} />
                </a>
              </div>
            </div>

            <div className="h-10"></div>

            <p className="text-lg mt-2">
              A Blockchain Developer deeply involved in Distributed Ledger
              Technologies. Specializing in smart contract development, I am
              experienced in Solidity, Typescript, Foundry and other essential
              technologies that are critical to innovative blockchain solutions.
            </p>
          </div>
        </section>
        {/* About Me Content */}
        <section className="px-20">
          <div className="ml-[17%] max-w-4xl">
            <div className="relative pt-[56.25%] bg-gray-900/50 rounded-lg border border-green/20 backdrop-blur-sm">
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                controls
                playsInline
              >
                <source src="/IMG_8136.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
        <section className="py-10 px-20">
          <div className="ml-[17%] flex gap-4">
            {" "}
            {/* Changed from grid to flex and adjusted gap */}
            {/* First Box */}
            <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm w-[400px]">
              {" "}
              {/* Changed to fixed width */}
              <h3 className="text-xl font-semibold text-green">
                Perseverance/Team Work
              </h3>
              <p className="mt-2 text-gray-300">
                As a former professional athlete I am an absolute team player.
                Putting in the extra effort when needed and the ability to
                persevere have become natural aspects of my personality. In any
                work environment I support good communication and the ability to
                work towards a common goal.
              </p>
            </div>
            {/* Second Box */}
            <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm w-[400px]">
              <h3 className="text-xl font-semibold text-green">
                Focused & Adaptable
              </h3>
              <p className="mt-2 text-gray-300">
                At 16, I took the bold step of living independently in various
                countries, a journey that shaped my ability to swiftly adapt to
                diverse environments and cultures, fostering resilience and
                self- reliance.
              </p>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-4 text-center bg-transparent border-t border-green/20 mt-20">
          <div className="flex flex-col items-center space-y-4">
            {" "}
            <p className="text-xl text-green">
              {"Don't hesitate to book a meeting with me!"}
            </p>
            <a
              href="https://calendly.com/daneelkent"
              target="_blank" // Opens in new tab
              rel="noopener noreferrer"
              className="text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
               hover:border-green/50 transition-colors backdrop-blur-sm 
               text-green hover:text-white"
            >
              Book a Meeting
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
