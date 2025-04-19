"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/app/data/projects"
import { orbitron } from "@/app/fonts"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-background/40 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/20 card-glow"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4"
        >
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm
            ${project.status === 'LIVE' ? 'bg-green-500/20 text-green-400' : 
              project.status === 'IN DEVELOPMENT' ? 'bg-yellow-500/20 text-yellow-400' :
              project.status === 'BETA' ? 'bg-blue-500/20 text-blue-400' :
              'bg-primary/20 text-primary'}`}
          >
            {project.status}
          </span>
        </motion.div>
      </div>
      
      <div className="p-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <span className="text-primary text-sm font-medium tracking-wider">
            [{project.category}]
          </span>
        </motion.div>
        
        <motion.h3
          className={`${orbitron.className} text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-wider`}
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          className="text-muted-foreground mb-4 line-clamp-2 text-sm"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full backdrop-blur-sm font-medium tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        <Link
          href={project.link}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span
            className="relative tracking-wider"
            whileHover={{ x: 5 }}
          >
            EXPLORE PROJECT
          </motion.span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ x: 5 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </Link>
      </div>
    </motion.div>
  )
} 