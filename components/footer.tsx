import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-lg bg-white/5 transition-all duration-300 group-hover:border-white/40">
              <span className="text-white font-mono text-sm font-bold tracking-tighter">MH</span>
            </div>
          </Link>
          <span className="text-white/40 font-mono text-xs">
            Mohit Hundlani
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-white/40 font-mono text-xs tracking-wider">
          <span>IT Architect</span>
          <span className="hidden md:inline">|</span>
          <span>4+ Years Experience</span>
        </div>

        <a
          href="https://mohit-sable.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white font-mono text-xs tracking-wider uppercase transition-colors duration-300"
        >
          View Full Portfolio
        </a>
      </div>
    </footer>
  )
}
