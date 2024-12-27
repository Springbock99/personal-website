import { useState, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ProjectBoxProps {
  title: string;
  description: string;
  githubLink: string;
  className?: string;
  techStack: string[];
  extendedDescription: ReactNode;
  slideFrom: "left" | "right";
  imageUrl: string;
}

const ProjectBox = ({
  title,
  description,
  githubLink,
  className = "",
  techStack,
  extendedDescription,
  slideFrom,
  imageUrl,
}: ProjectBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const variants = {
    initial: {
      x: slideFrom === "left" ? (isMobile ? -100 : -300) : isMobile ? 100 : 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={`${isMobile ? "mb-8" : "mb-4"} overflow-visible ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={variants}
    >
      <div className="flex justify-center w-full">
        <motion.div
          className={`p-6 bg-gray-900/50 rounded-lg border border-green/20 
                     hover:border-green/50 transition-colors backdrop-blur-sm
                     w-[92%] md:w-[800px] max-w-[800px]
                     ${isExpanded ? "w-full max-w-[1200px]" : ""}
                     hover:z-20 relative z-10`}
          onClick={() => setIsExpanded(!isExpanded)}
          layout
          transition={{ duration: 0.7, ease: "easeInOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className={`flex flex-col ${
              slideFrom === "left" ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8`}
          >
            {/* Content Section */}
            <motion.div
              className={`${
                isExpanded ? "w-full md:w-2/3" : "w-full md:w-1/2"
              } space-y-4`}
              layout
            >
              <motion.h3 className="text-2xl font-bold text-green" layout>
                {title}
              </motion.h3>

              <motion.div className="text-gray-300" layout>
                {isExpanded ? extendedDescription : description}
              </motion.div>

              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-green">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-900/50 rounded-lg border border-green/20 
                               text-green text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green hover:text-white transition-colors"
                  >
                    <Github className="mr-2" size={20} />
                    View on GitHub
                  </a>
                </motion.div>
              )}
            </motion.div>

            {/* Image Section */}
            <motion.div
              className={`${
                isExpanded ? "w-full md:w-1/3" : "w-full md:w-1/2"
              } relative`}
              layout
            >
              <div className="aspect-video relative w-full h-full min-h-[200px] rounded-lg overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`${title} preview`}
                  fill
                  className="object-cover"
                  quality={95}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-6 right-6 text-green"
              initial={{ rotate: 0 }}
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
