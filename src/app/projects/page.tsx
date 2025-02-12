"use client";
import Image from "next/image";
import ProjectBox from "../components/ProjectBox";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState } from "react";
import { FileDown, Github, Linkedin } from "lucide-react";
import NavBar from "../components/NavBar";

export default function Projects() {
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
          zIndex: 0,
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

      {/* Main Content Container */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <NavBar />
        {/* Projects Title Section */}
        <section className="flex flex-col items-center px-4 md:px-20 py-10">
          <div className="flex flex-col w-full max-w-6xl mx-auto items-center">
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
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-green mb-4 md:mb-0">
                  My Personal Projects
                </h1>
                <div className="flex space-x-4 items-center justify-center mt-4">
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

            <p className="text-xl md:text-2xl mt-2 text-center max-w-3xl">
              Take a look at some of my favorite blockchain projects, from DeFi
              protocols to NFT platforms
            </p>
          </div>
        </section>

        {/* Project Boxes */}
        <section className="px-4 md:px-20">
          <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
            {/* Your existing ProjectBox components with mobile responsiveness */}
            {/* Note: The ProjectBox component itself needs to be responsive */}
            <ProjectBox
              title="DeFi & Smart Contract Development Portfolio"
              description="A comprehensive collection of smart contracts and DeFi protocols showcasing my blockchain development capabilities. This portfolio demonstrates knowledge in implementing secure financial protocols, token standards, and NFT solutions using industry best practices and testing methodologies."
              githubLink="https://github.com/Springbock99/Defi"
              slideFrom="left"
              techStack={[
                "Solidity",
                "Hardhat",
                "TypeScript",
                "ERC-20",
                "ERC-721",
                "OpenZeppelin",
                "Ethers.js",
                "Foundry",
                "Mocha/Chai",
              ]}
              extendedDescription={
                <div className="space-y-4 text-lg">
                  <p>
                    This repository showcases a diverse range of blockchain
                    development projects:
                  </p>

                  <ul className="space-y-4 list-none">
                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">DeFi Protocols:</span>{" "}
                        Implementation of lending platforms.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Token Standards:</span>{" "}
                        Custom ERC-20 tokens with advanced features like
                        staking, vesting, and governance capabilities. NFT
                        collections (ERC-721/ERC-1155) with specialized minting
                        strategies.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">
                          Smart Contract Security:
                        </span>{" "}
                        Implementations featuring reentrancy guards, access
                        controls, and upgradeable patterns following
                        OpenZeppelin standards.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">
                          Testing & Deployment:
                        </span>{" "}
                        Extensive test suites using Foundry, demonstrating
                        thorough coverage of edge cases and potential
                        vulnerabilities.
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4">
                    Each component is thoroughly documented and tested.
                  </p>
                </div>
              }
              imageUrl="/ERC-20.jpg"
            />
            <ProjectBox
              title="Token Lock Smart Contract - Vesting & Team Token Management"
              description="A secure token locking system built with Solidity, enabling controlled token distribution with time-based vesting. Features a modern Next.js frontend with Wagmi integration for wallet connectivity and contract interactions."
              githubLink="https://github.com/yourusername/lock-tokens"
              slideFrom="left"
              techStack={[
                "Solidity",
                "Next.js",
                "TypeScript",
                "Wagmi",
                "Foundry",
                "Tailwind CSS",
                "React",
                "ERC20",
              ]}
              extendedDescription={
                <div className="space-y-4 text-lg">
                  <p>
                    A comprehensive token locking system designed for secure
                    team token distribution and vesting:
                  </p>

                  <ul className="space-y-4 list-none">
                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Smart Contract:</span>{" "}
                        Built with Solidity featuring time-based token locking,
                        owner controls, and secure withdrawal mechanisms.
                        Includes comprehensive testing using Foundry framework
                        with full coverage of edge cases and security scenarios.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Web3 Integration:</span>{" "}
                        Modern frontend built with Next.js and Wagmi hooks for
                        seamless wallet connectivity and contract interactions.
                        Features real-time lock status tracking and intuitive
                        token management interface.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Security Features:</span>{" "}
                        Implements owner-only token distribution, time-based
                        locking mechanisms, and secure withdrawal functionality.
                        Contract includes safeguards against common
                        vulnerabilities and extensive input validation.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">
                          Development Workflow:
                        </span>{" "}
                        Utilized Foundry for contract development and testing,
                        featuring comprehensive test coverage. Frontend
                        developed with TypeScript for type safety and Tailwind
                        CSS for responsive design.
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4">
                    This project demonstrates proficiency in full-stack Web3
                    development, combining secure smart contract development
                    with modern frontend technologies to create a
                    production-ready token management system.
                  </p>
                </div>
              }
              imageUrl="/lockTokens.jpg"
              imageStyle="contain"
            />
            <ProjectBox
              title="Rad Reptieles - NFT Crafting Platform"
              description="A dynamic NFT platform built on ERC-1155 that enables users to mint, trade, and forge unique reptile NFTs through an innovative burning mechanism. This project showcases advanced smart contract implementation combined with a seamless web3 user interface."
              githubLink="https://github.com/Springbock99/RadReptiles"
              slideFrom="right"
              techStack={[
                "Solidity",
                "Next.js",
                "TypeScript",
                "Wagmi",
                "ERC-1155",
                "Hardhat",
                "IPFS",
                "Tailwind CSS",
                "Ethers.js",
              ]}
              extendedDescription={
                <div className="space-y-4 text-lg">
                  <p>
                    An innovative NFT platform that combines gaming mechanics
                    with NFT trading:
                  </p>

                  <ul className="space-y-4 list-none">
                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">NFT Mechanics:</span>{" "}
                        Implementation of ERC-1155 multi-token standard,
                        enabling efficient batch transfers and mixed
                        fungible/non-fungible token management.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Crafting System:</span>{" "}
                        Smart contract-based forging mechanism allowing users to
                        burn existing NFTs in specific combinations to create
                        rare, unique reptile variations.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Web3 Integration:</span>{" "}
                        Seamless blockchain interaction using Wagmi hooks and
                        Next.js, providing a smooth user experience for minting,
                        trading, and crafting.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Trading Platform:</span>{" "}
                        Built-in marketplace functionality for users to trade
                        their reptile NFTs, with support for batch transactions
                        and token approval management.
                      </span>
                    </li>
                  </ul>
                </div>
              }
              imageUrl="/RadReptiles.jpg"
            />
            <ProjectBox
              title="Advanced Upgradeable Smart Contracts"
              description="A sophisticated implementation of upgradeable smart contracts showcasing secure token and NFT upgrade patterns integrated with staking functionality. This project demonstrates professional deployment strategies using TypeScript and comprehensive testing with Foundry."
              githubLink="https://github.com/Springbock99/UpgradeableContracts"
              slideFrom="left"
              techStack={[
                "Solidity",
                "TypeScript",
                "Foundry",
                "OpenZeppelin",
                "ERC-20",
                "ERC-721",
                "UUPS",
                "Transparent Proxy",
                "Hardhat",
                "Ethers.js",
              ]}
              extendedDescription={
                <div className="space-y-4 text-lg">
                  <p>
                    A comprehensive demonstration of upgradeable smart contract
                    patterns and best practices:
                  </p>

                  <ul className="space-y-4 list-none">
                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Upgrade Patterns:</span>{" "}
                        Implementation of both UUPS and Transparent Proxy
                        patterns for ERC-20 and NFT contracts, showcasing
                        different upgrade strategies and their trade-offs.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Staking Integration:</span>{" "}
                        Advanced staking mechanism that seamlessly integrates
                        with upgraded tokens, demonstrating complex contract
                        interactions and state preservation during upgrades.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">
                          Deployment Automation:
                        </span>{" "}
                        Robust TypeScript deployment scripts handling proxy
                        deployment, implementation contract verification, and
                        upgrade processes with comprehensive error handling.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Testing Framework:</span>{" "}
                        Testing Framework: Extensive test suite using Foundry,
                        covering upgrade scenarios, security considerations, and
                        edge cases to ensure contract reliability.
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4">
                    The project exemplifies production-grade smart contract
                    development with a focus on upgradeability, security, and
                    maintainability. Each component is thoroughly tested and
                    documented, following industry best practices for
                    upgradeable contracts.
                  </p>
                </div>
              }
              imageUrl="/upgradeable.jpg"
            />
            <ProjectBox
              title="Portfolio Website - Modern Web3 Developer Portfolio"
              description="A modern, responsive portfolio website showcasing blockchain development projects and professional experience. Built with Next.js and featuring dynamic animations, interactive components, and seamless navigation."
              githubLink="https://github.com/yourusername/portfolio"
              slideFrom="right"
              techStack={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "React",
                "Lucide Icons",
                "Docker",
                "Vercel",
              ]}
              extendedDescription={
                <div className="space-y-4 text-lg">
                  <p>
                    A modern portfolio website with a focus on user experience
                    and visual appeal:
                  </p>

                  <ul className="space-y-4 list-none">
                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Dynamic Design:</span>{" "}
                        Interactive hexagon grid background animation with
                        responsive layout, featuring a sleek dark theme with
                        vibrant green accents for optimal readability and visual
                        appeal.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Project Showcase:</span>{" "}
                        Expandable project cards with detailed descriptions,
                        technology tags, and direct links to GitHub
                        repositories. Each project features comprehensive
                        documentation and technical specifications.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">
                          Professional Integration:
                        </span>{" "}
                        Seamless integration with professional platforms
                        including GitHub, LinkedIn, and Calendly for easy
                        networking and meeting scheduling.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        <span className="text-green">Technical Features:</span>{" "}
                        Implemented using modern web development practices
                        including CSS Grid, Flexbox, and Tailwind for styling,
                        with TypeScript for type safety and Docker for
                        containerization.
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4">
                    This portfolio demonstrates modern web development practices
                    while providing an engaging platform to showcase blockchain
                    development expertise and professional experience.
                  </p>
                </div>
              }
              imageUrl="/NoStaffWBeard.jpg"
            />
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
