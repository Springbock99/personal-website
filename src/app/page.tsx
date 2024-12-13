"use client";
import Image from "next/image";
import { FileDown, Github, Linkedin } from "lucide-react";
import HexagonGrid from "./components/HexagonGrid";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
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
      {/* Hexagon Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 1,
          top: "0",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HexagonGrid columnCount={columnCount} size={size} />
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <header className="py-6 px-4 flex flex-col md:flex-row justify-between items-center bg-black gap-4">
          <NavBar />
        </header>

        {/* Introduction Section */}
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

            <div className="h-10"></div>

            <div className="text-center md:text-left max-w-2xl">
              <p className="text-xl md:text-2xl mt-2">
                Blockchain Developer | Solidity | Smart Contract Dev | Web3 |
                Defi | Typescript | Foundry
              </p>
              <p className="text-lg md:text-xl mt-2">
                {
                  "Hi I'm a Blockchain Developer deeply involved in Distributed Ledger Technologies. Specializing in smart contract development, I am experienced in Solidity, Typescript, Foundry and other essential technologies that are critical to innovative blockchain solutions."
                }
              </p>
            </div>

            <ul className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <li>
                <a
                  href="/projects"
                  className="text-base md:text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
                            hover:border-green/50 transition-colors backdrop-blur-sm 
                            text-green hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/daneelkent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
                           hover:border-green/50 transition-colors backdrop-blur-sm 
                           text-green hover:text-white"
                >
                  Book a Meeting
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Video Section */}
        <section className="px-4 md:px-20 flex justify-center">
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-green mb-6 text-center">
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

        {/* Service Boxes */}
        <section className="py-10 px-4 md:px-20">
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green">
                  Blockchain Development
                </h3>
                <p className="text-base md:text-lg mt-2 text-gray-300">
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
                <p className="text-base md:text-lg mt-2 text-gray-300">
                  First hand experience developing on a compound like Defi
                  application and helped secure and write tests as well as
                  Oracle integration. In addition I have some understand of the
                  Automated Market Maker approach and how it Defi applications
                  use it.
                </p>
              </div>

              <div className="p-6 bg-gray-900/50 rounded-lg border border-green/20 hover:border-green/50 transition-colors backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green">
                  Great Team Player
                </h3>
                <p className="text-base md:text-lg mt-2 text-gray-300">
                  As a former professional IceHockey player I am an absolute
                  team player. Putting in the extra effort when needed and the
                  ability to persevere have become natural aspects of my
                  personality. In any work environment I support good
                  communication and the ability to work towards a common goal.
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
                      className="px-3 py-1 md:px-4 md:py-2 bg-gray-900/50 rounded-lg border border-green/20 
                               hover:border-green/50 transition-colors backdrop-blur-sm 
                               text-green text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 px-4 text-center border-t border-green/20 mt-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-green px-4">
              {"Don't hesitate to book a meeting with me!"}
            </p>
            <a
              href="https://calendly.com/daneelkent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
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
