"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HexagonGrid from "../components/HexagonGrid";
import NavBar from "../components/NavBar";
import { FileDown, Github, Linkedin } from "lucide-react";

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
          <NavBar />
        </header>
        <section className="flex flex-col items-center md:items-start px-4 md:px-20 py-10">
          <div className="flex flex-col w-full md:ml-[17%] items-center md:items-start">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="rounded-full p-[3px] bg-green shadow-lg shadow-green/50">
                <Image
                  src="/StaffH.png"
                  alt="Profile"
                  width={140}
                  height={140}
                  className="rounded-full w-32 h-32 md:w-36 md:h-36"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-green">
                  Kent Daneel
                </h1>
                <div className="flex space-x-4 items-center justify-center md:justify-start mt-4">
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
                    href="/KentDaneelResume.pdf"
                    download
                    className="text-green hover:text-white transition-colors"
                    title="Download CV"
                  >
                    <FileDown size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[100px]"></div>
        <main className="flex-1">
          {" "}
          {/* Added flex-1 to push footer down */}
          <div className="px-20 py-10">
            <div className="ml-[17%] max-w-6xl">
              <div className="p-16 bg-gray-900/50 rounded-lg border border-green/20 backdrop-blur-sm text-center">
                <h2 className="text-5xl font-bold text-green mb-8">Blog</h2>
                <h3 className="text-4xl font-semibold text-green mb-6 animate-pulse">
                  Coming Soon!
                </h3>
                <p className="text-2xl text-gray-300 mb-8">
                  My Medium articles will be integrated here shortly. Stay tuned
                  for blockchain insights and technical content.
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className="h-[550px]"></div>
        <footer className="py-4 text-center border-t border-green/20 mt-20 bg-gray-900/50 backdrop-blur-sm">
          {" "}
          {/* Added background classes */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl text-green">
              {"Feel free to schedule a meeting with me!"}
            </p>
            <a
              href="https://calendly.com/daneelkent"
              target="_blank"
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
