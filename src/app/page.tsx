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
                  href="/blog"
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
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-6xl font-bold text-green">Kent Daneel</h1>
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

            <p className="text-2xl mt-2">
              Blockchain Developer | Solidity | Smart Contract Dev | Web3 | Defi
              | Typescript | Foundry
            </p>
            <p className="text-xl mt-2">
              {
                "Hi I'm a Blockchain Developer deeply involved in Distributed Ledger Technologies. Specializing in smart contract development, I am experienced in Solidity, Typescript, Foundry and other essential technologies that are critical to innovative blockchain solutions."
              }
            </p>

            {/* <div className="flex space-x-4 mt-6"> */}
            <ul className="flex space-x-2 mt-6 list-none">
              <div className="h-10"></div>
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
            {/* </div> */}
          </div>
        </section>
        <section className="px-20 flex justify-center mb-10">
          <div className="max-w-4xl w-full">
            <h2 className="text-2xl font-bold text-green mb-6">
              Want To Get To Know Me?
            </h2>
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
        <section className="px-20 flex justify-center">
          {" "}
          <div className="max-w-6xl fw-full">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {" "}
              {/* Service boxes with updated styling */}
              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green">
                  Blockchain Development
                </h3>
                <p className="text-lg mt-2 text-gray-300">
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
                <p className="text-lg mt-2 text-gray-300">
                  First hand experience developing on a compound like Defi
                  application and helped secure and write tests as well as
                  Oracle integration. In addition I have some understand of the
                  Automated Market Maker approach and how it Defi applications
                  use it.
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Solidity",
                    "TypeScript",
                    "Node.js",
                    "Rust",
                    "JavaScript",
                    "Ethers.js",
                    "Express.js",
                    "Remix",
                    "Hardhat",
                    "Foundry",
                    "Alchemy",
                    "ERC-20",
                    "ERC-721",
                    "ERC-1155",
                    "ERC-1167",
                    "Upgradeable Patterns",
                    "React",
                    "Next.js",
                    "Wagmi",
                    "MySQL",
                    "GraphQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
                   hover:border-green/50 transition-colors backdrop-blur-sm 
                   text-green text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green">
                  Great Team Player
                </h3>
                <p className="text-lg mt-2 text-gray-300">
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
      <footer className="py-4 text-center border-t border-green/20 mt-20 bg-gray-900/50 backdrop-blur-sm">
        {" "}
        {/* Added background classes */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-2xl text-green">
            {"Don't hesitate to book a meeting with me!"}
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
  );
}
