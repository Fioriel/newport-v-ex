"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10">
            <span className="text-white font-mono text-lg md:text-xl font-bold tracking-tighter">MH</span>
          </div>
          <span className="hidden md:block text-white/60 font-mono text-xs tracking-widest uppercase">
            Mohit Hundlani
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/"
            className={cn(
              "font-mono text-xs md:text-sm tracking-wider uppercase transition-colors duration-300",
              pathname === "/" ? "text-white" : "text-white/60 hover:text-white"
            )}
          >
            Works
          </Link>
          <Link
            href="/about"
            className={cn(
              "font-mono text-xs md:text-sm tracking-wider uppercase transition-colors duration-300",
              pathname === "/about" ? "text-white" : "text-white/60 hover:text-white"
            )}
          >
            About
          </Link>
          <a
            href="https://mohit-sable.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs md:text-sm tracking-wider uppercase text-white/60 hover:text-white transition-colors duration-300"
          >
            Full Site
          </a>
        </div>
      </nav>
    </header>
  )
}
