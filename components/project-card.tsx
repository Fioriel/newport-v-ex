"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  thumbnail: string
  link?: string
  client: string
  isRecent?: boolean
}

interface ProjectCardProps {
  project: Project
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
  variant: "slider" | "grid"
}

export function ProjectCard({ project, isHovered, onHoverChange, variant }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  if (variant === "slider") {
    return (
      <div
        className={cn(
          "group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden cursor-pointer",
          "transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          "h-[400px] md:h-[500px] lg:h-[600px] min-w-[200px] md:min-w-[180px]",
          isHovered ? "flex-[2] shadow-2xl shadow-white/10" : "flex-[0.8] opacity-90"
        )}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
        onClick={() => project.link && window.open(project.link, "_blank")}
      >
        {project.isRecent && (
          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm">
            <span className="text-emerald-400 font-mono text-[10px] tracking-wider uppercase">Recent</span>
          </div>
        )}

        <div className="absolute inset-0">
          <img
            src={project.thumbnail}
            alt={project.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              !isHovered && "grayscale brightness-75",
              isHovered && "scale-105"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
            "transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-60"
          )} />
        </div>

        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 md:p-8",
            "transition-all duration-700",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div
            className={cn(
              "relative backdrop-blur-xl bg-black/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10",
              "shadow-2xl",
              "transition-all duration-700 ease-out",
              isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div className="space-y-2 text-left">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-mono text-sm md:text-base tracking-wide uppercase font-medium leading-relaxed">
                  {project.title}
                </h3>
                {project.link && (
                  <ExternalLink className="w-4 h-4 text-white/60 flex-shrink-0" />
                )}
              </div>
              <p className="text-white/80 font-mono text-[10px] md:text-xs tracking-wide uppercase">
                {project.category}
              </p>
              <p className="text-white/60 font-mono text-[10px] md:text-xs leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
                <p className="text-white/40 font-mono text-[10px] tracking-widest">{project.client}</p>
                <p className="text-white/60 font-mono text-[10px] tracking-widest">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6",
            "transition-all duration-500",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        >
          <p className="text-white/80 font-mono text-xs md:text-sm tracking-wide uppercase">
            {project.title}
          </p>
          <p className="text-white/40 font-mono text-[10px] tracking-wider">
            {project.year}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden cursor-pointer",
        "transition-all duration-500 ease-out",
        "aspect-[4/3]",
        isHovered && "shadow-2xl shadow-white/10 scale-[1.02]"
      )}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onClick={() => project.link && window.open(project.link, "_blank")}
    >
      {project.isRecent && (
        <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm">
          <span className="text-emerald-400 font-mono text-[9px] tracking-wider uppercase">Recent</span>
        </div>
      )}

      <div className="absolute inset-0">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            !isHovered && "grayscale brightness-75",
            isHovered && "scale-110"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent",
          "transition-opacity duration-500"
        )} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-white font-mono text-sm tracking-wide uppercase font-medium">
            {project.title}
          </h3>
          {project.link && (
            <ExternalLink className={cn(
              "w-4 h-4 text-white/40 flex-shrink-0 transition-all duration-300",
              isHovered && "text-white/80 translate-x-0.5 -translate-y-0.5"
            )} />
          )}
        </div>
        <p className="text-white/60 font-mono text-[10px] tracking-wider uppercase mb-2">
          {project.category} / {project.year}
        </p>
        <p className={cn(
          "text-white/50 font-mono text-[10px] leading-relaxed line-clamp-2 transition-all duration-500",
          isHovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
        )}>
          {project.description}
        </p>
      </div>
    </div>
  )
}
