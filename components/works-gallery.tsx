"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { CustomCursor } from "./custom-cursor"
import { projects } from "@/lib/projects"

export function WorksGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const featuredProjects = projects.slice(0, 5)

  return (
    <>
      <CustomCursor isActive={hoveredId !== null} />

      <div className="px-4 md:px-6 mb-8 md:mb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white font-mono text-2xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Recent Works
          </h1>
          <p className="text-white/60 font-mono text-sm md:text-base tracking-wide max-w-2xl">
            A collection of web applications, e-commerce platforms, and digital experiences crafted with precision and creativity.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase mb-6">Featured Projects</p>
          <div className="flex gap-3 md:gap-4 items-stretch overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible hide-scrollbar">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredId === project.id}
                onHoverChange={(hovered) => setHoveredId(hovered ? project.id : null)}
                variant="slider"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase mb-6">Some Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredId === project.id}
                onHoverChange={(hovered) => setHoveredId(hovered ? project.id : null)}
                variant="grid"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
