import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface BlogBoxProps {
  title: string;
  description: string;
  articleLink: string;
  imageUrl: string;
  date: string;
  readTime: string;
  slideFrom: "left" | "right";
}

const BlogBox = ({
  title,
  description,
  articleLink,
  imageUrl,
  date,
  readTime,
  slideFrom,
}: BlogBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    initial: {
      x: slideFrom === "left" ? -100 : 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="mb-8 overflow-visible"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={variants}
    >
      <div className="flex justify-center w-full">
        <motion.a
          href={articleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-3xl"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className={`p-6 bg-gray-900/50 rounded-lg border border-green/20 
                       hover:border-green/50 transition-colors backdrop-blur-sm
                       relative overflow-hidden group`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image Section */}
              <div className="w-full md:w-1/3 relative">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${title} thumbnail`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={90}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-green">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{readTime} read</span>
                  </div>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="text-green" size={20} />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-green group-hover:text-white transition-colors">
                  {title}
                </h3>

                <p className="text-gray-300">{description}</p>
              </div>
            </div>
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default BlogBox;
