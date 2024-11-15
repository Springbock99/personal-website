"use client";
import { useState } from "react";
import { ProjectBoxProps } from "../../types/project.types";

export const ProjectBox = ({
  title,
  description,
  githubLink,
  className,
  techStack = [],
  extendedDescription = "",
}: ProjectBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`transform ${className}`}>
      <div
        className={`p-8 bg-gray-900/50 rounded-lg border border-green/20 
                    hover:border-green/50 transition-all duration-300 backdrop-blur-sm
                    ${isExpanded ? "max-w-4xl" : "max-w-2xl"}`}
      >
        <h3 className="text-2xl font-semibold text-green mb-4">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 space-y-6">
            <div className="prose text-gray-300">
              <h4 className="text-green text-xl mb-4">Project Details</h4>
              <p>{extendedDescription}</p>
            </div>

            {/* Tech Stack Section */}
            <div className="pt-6 border-t border-green/20">
              <h4 className="text-green text-lg mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 rounded-full border border-green/20 text-sm text-green"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-green hover:text-white transition-colors"
          >
            {isExpanded ? "View Less ↑" : "View More ↓"}
          </button>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:text-white transition-colors"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};
