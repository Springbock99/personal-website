"use client";
import Image from "next/image";
import { FileDown, Github, Linkedin } from "lucide-react";
import HexagonGrid from "./components/HexagonGrid";
import { useEffect, useState } from "react";

export default function Home() {
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
              src="/KW.png" // This should be the same image path you're using in the About section
              alt="Profile"
              width={100} // Smaller size for the header
              height={100} // Smaller size for the header
              className="rounded-full" // Makes the image circular like your larger one
            />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/projects"
                  className="text-lg text-green hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/aboutMe"
                  className="text-lg text-green hover:text-white"
                >
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-green hover:text-white">
                  Blog
                </a>
              </li>
              <li className="ml-6">
                <a
                  href="https://calendly.com/daneelkent"
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
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
        <div className="h-80"></div> {/* This adds 5rem (80px) of space */}
        <section className="py-10 px-20">
          {" "}
          {/* Match the padding with introduction section */}
          <div className="ml-[17%]">
            {" "}
            {/* Match the margin with introduction section */}
            <h2 className="text-3xl font-bold text-green mb-6">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {" "}
              {/* Service boxes with updated styling */}
              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green">
                  Blockchain Development
                </h3>
                <p className="mt-2 text-gray-300">
                  Experience in developing secure and efficient smart contracts,
                  with focus on scalability and optimal gas optimization, with
                  future upgradability in mind and sale guard against common
                  exploits.
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green">
                  DeFi Solutions
                </h3>
                <p className="mt-2 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green">Tech Stack</h3>
                <p className="mt-2 text-gray-300">
                  Solidity, Typescript, Node.js, Rust, JavaScript, Ethers.js,
                  Express.js, Remix, Hardhat, Foundry, Alchemy, ERC-20, ERC-721,
                  ERC-1155,ERC-1167, Upgradeable Patterns, React, Next.js,
                  Wagmi, MySQL, GraphQL
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green">
                  Great Team Player
                </h3>
                <p className="mt-2 text-gray-300">
                  As a former professional IceHockey player I am an absolute
                  team player. Putting in the extra effort when needed and the
                  ability to persevere have become natural aspects of my
                  personality. In any work environment I support good
                  communication and the ability to work towards a common goal.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
      </div>
    </div>
  );
}
