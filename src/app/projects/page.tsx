"use client";
import Image from "next/image";
import { ProjectBox } from "../components/ProjectBox";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Projects() {
  // Your existing columnCount state and useEffect...
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
        style={
          {
            /* your existing hexagon grid styles */
          }
        }
      >
        <HexagonGrid columnCount={columnCount} size={size} />
      </div>

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
                href="/aboutMe"
                className="text-lg px-4 py-2 bg-gray-900/50 rounded-lg border border-green/20 
                            hover:border-green/50 transition-colors backdrop-blur-sm 
                            text-green hover:text-white"
              >
                About Me
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

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Projects Title */}
        <section className="px-20 py-10">
          <div className="ml-[17%]">
            <h1 className="text-5xl font-bold text-green mb-12">Projects</h1>
          </div>
        </section>

        {/* Project Boxes */}
        <section className="px-20">
          <div className="ml-[17%] flex flex-col gap-12">
            <ProjectBox
              title="DeFi & Smart Contract Development Portfolio"
              description="A comprehensive collection of smart contracts and DeFi protocols showcasing my blockchain development capabilities. This portfolio demonstrates knowledge in implementing secure financial protocols, token standards, and NFT solutions using industry best practices and
             testing methodologies."
              githubLink="https://github.com/yourusername/defi"
              className="translate-x-0"
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
                        DeFi Protocols: Implementation of lending platforms.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        Token Standards: Custom ERC-20 tokens with advanced
                        features like staking, vesting, and governance
                        capabilities. NFT collections (ERC-721/ERC-1155) with
                        specialized minting strategies.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        Smart Contract Security: Implementations featuring
                        reentrancy guards, access controls, and upgradeable
                        patterns following OpenZeppelin standards.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        Testing & Deployment: Extensive test suites using
                        Foundry, demonstrating thorough coverage of edge cases
                        and potential vulnerabilities.
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4">
                    Each component is thoroughly documented and tested,
                    demonstrating production-ready code quality and security
                    considerations.
                  </p>
                </div>
              }
            />

            <ProjectBox
              title="Rad Reptieles - NFT Crafting Platform"
              description="A dynamic NFT platform built on ERC-1155 that enables users to mint, trade, and forge unique reptile NFTs through an innovative burning mechanism. This project showcases advanced smart contract implementation combined with a seamless web3 user interface."
              githubLink="https://github.com/yourusername/rad-reptieles"
              className="translate-x-[100px]"
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
                        NFT Mechanics: Implementation of ERC-1155 multi-token
                        standard, enabling efficient batch transfers and mixed
                        fungible/non-fungible token management.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        Crafting System: Smart contract-based forging mechanism
                        allowing users to burn existing NFTs in specific
                        combinations to create rare, unique reptile variations.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        Web3 Integration: Seamless blockchain interaction using
                        Wagmi hooks and Next.js, providing a smooth user
                        experience for minting, trading, and crafting.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        Trading Platform: Built-in marketplace functionality for
                        users to trade their reptile NFTs, with support for
                        batch transactions and token approval management.
                      </span>
                    </li>
                  </ul>
                </div>
              }
            />

            <ProjectBox
              title="Advanced Upgradeable Smart Contracts"
              description="A sophisticated implementation of upgradeable smart contracts showcasing secure token and NFT upgrade patterns integrated with staking functionality. This project demonstrates professional deployment strategies using TypeScript and comprehensive testing with Foundry."
              githubLink="https://github.com/yourusername/upgradeable-contracts"
              className="translate-x-[200px]"
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
                        Upgrade Patterns: Implementation of both UUPS and
                        Transparent Proxy patterns for ERC-20 and NFT contracts,
                        showcasing different upgrade strategies and their
                        trade-offs.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        Staking Integration: Advanced staking mechanism that
                        seamlessly integrates with upgraded tokens,
                        demonstrating complex contract interactions and state
                        preservation during upgrades.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
                        Deployment Automation: Robust TypeScript deployment
                        scripts handling proxy deployment, implementation
                        contract verification, and upgrade processes with
                        comprehensive error handling.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2 text-green">•</span>
                      <span>
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
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center bg-transparent border-t border-green/20 mt-20">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Springbock99. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
