// project.types.ts
import { ReactNode } from "react"; // Add this import

export interface ProjectBoxProps {
  title: string;
  description: string;
  githubLink: string;
  className?: string;
  techStack?: string[];
  extendedDescription?: string | ReactNode; // Changed this line to accept both string and ReactNode
}
