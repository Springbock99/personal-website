"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HexagonGrid from "../components/HexagonGrid";
import NavBar from "../components/NavBar";
import BlogBox from "../components/BlogBox";
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

  const blogPosts = [
    {
      title: "Interoperability Between Blockchains Using Bridges and Relays",
      description:
        "Blockchain technology has created numerous decentralised ecosystems, each with its own strengths and characteristics. However, one of the significant challenges in the blockchain space is the lack direct interoperability between these blockchains. For the decentralised ecosystem to reach its full potential, its crucial that assets, data and functionalities can move seamlessly between different chains. This is where bridges and relays come into play, facilitating cross-chain communication..",
      articleLink:
        "https://medium.com/@daneelkent/interoperability-between-blockchains-using-bridges-and-relays-4b2ad7545cfd",
      imageUrl: "/Bridges.jpg",
      date: "Oct 03 2024",
      readTime: "6 min",
      slideFrom: "left" as const,
    },
    {
      title: "What is the Difference Between Layer 1 and Layer 2 Networks?",
      description:
        "In the realm of blockchain technology, understanding the differences between Layer 1 and Layer 2 networks is crucial for grasping how the ecosystem is evolving to meet the demands of scalability, speed, and efficiency. This article delves into the distinctions between these two layers, highlighting their unique characteristics, use cases, and examples to provide a comprehensive understanding.",
      articleLink:
        "https://medium.com/@daneelkent/what-is-the-difference-between-layer-1-and-layer-2-networks-24acb43efd91",
      imageUrl: "/layer1.jpg",
      date: "Jul 11 2024",
      readTime: "3 min",
      slideFrom: "right" as const,
    },
    {
      title: "Implementing Automated Market Makers (AMMs) in Solidity",
      description:
        "Automated Market Makers (AMMs) have transformed how decentralised exchanges (DEXs) operate by removing the need for traditional order books. AMMs allow users to trade assets directly against a liquidity pool instead of matching buyers and sellers. This model powers many popular DEXs like Uniswap and Balancer. In this article, we will explore what AMMs are, how they work and the key concepts behind their implementation.",
      articleLink:
        "https://medium.com/@daneelkent/implementing-automated-market-makers-amms-in-solidity-ada78857605d",
      imageUrl: "/markets.jpg",
      date: "Oct 2, 2024",
      readTime: "4 min",
      slideFrom: "right" as const,
    },
    {
      title: "Understanding Storage, Memory, and Calldata in Solidity",
      description:
        "Solidity, the programming language for Ethereum smart contracts, uses different data locations to manage how and where data is stored. The three primary data locations are storage, memory, and calldata. Each serves a distinct purpose and impacts gas costs and performance in different ways. In this article, we will dive deep into each of these data locations, their use cases, and how to choose the appropriate one for different scenarios.",
      articleLink:
        "https://medium.com/@daneelkent/understanding-storage-memory-and-calldata-in-solidity-395328162083",
      imageUrl: "/storage.jpg",
      date: "Sep 13, 2024",
      readTime: "4 min",
      slideFrom: "right" as const,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
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
        <NavBar />
        {/* Profile Section */}
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
                <h1 className="text-4xl md:text-6xl font-bold text-green">
                  Kent Daneel
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
          </div>
        </section>

        {/* Blog Section */}
        <main className="flex-1 px-4 md:px-20 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-green mb-6">Blog Posts</h2>
              <p className="text-xl text-gray-300">
                Sharing insights about blockchain development, DeFi, and Web3
                technology
              </p>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <BlogBox key={index} {...post} />
              ))}
            </div>

            <div className="text-center mt-16">
              <a
                href="https://medium.com/@daneelkent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-lg px-6 py-3 bg-gray-900/50 rounded-lg border border-green/20 
                         hover:border-green/50 transition-colors backdrop-blur-sm 
                         text-green hover:text-white"
              >
                View All Articles on Medium
              </a>
            </div>
          </div>
        </main>

        <footer className="py-4 text-center border-t border-green/20 mt-20 bg-gray-900/50 backdrop-blur-sm">
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
