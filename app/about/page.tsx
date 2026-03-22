import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/projects"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Briefcase, Heart, ExternalLink } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "100+" },
    { label: "Technologies", value: "15+" },
  ]

  const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "MongoDB", "PostgreSQL", "Firebase",
    "Vercel", "AWS", "Git", "Figma"
  ]

  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "11 December 2006" },
    { icon: MapPin, label: "Location", value: "Vadodara, Gujarat, India" },
    { icon: Briefcase, label: "Experience", value: "4+ Years in IT" },
    { icon: Heart, label: "Interest", value: "Football" },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">

          <section className="mb-16 md:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-square max-w-[300px] md:max-w-[400px] mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="w-full h-full flex items-center justify-center bg-white/5">
                    <div className="text-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5">
                        <span className="text-white font-mono text-4xl md:text-5xl font-bold">MH</span>
                      </div>
                      <p className="text-white/60 font-mono text-sm tracking-wider">IT Architect</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-white font-mono text-2xl md:text-3xl font-bold">4+</p>
                  <p className="text-white/60 font-mono text-[10px] tracking-wider uppercase">Years</p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase mb-4">About Me</p>
                <h1 className="text-white font-mono text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                  Mohit Hundlani
                </h1>
                <p className="text-white/60 font-mono text-sm md:text-base leading-relaxed mb-6">
                  Hi, I am Mohit Hundlani and I started with frontend development when it first began.
                  I have spent most of my waking hours for the last four years designing, programming,
                  and operating web applications and digital experiences.
                </p>
                <p className="text-white/50 font-mono text-sm leading-relaxed mb-8">
                  One of my specialties is taking an idea from scratch and creating a full-fledged platform.
                  I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel.
                  With extensive knowledge of web mechanics, I am able to optimize complex integrations
                  to require little-to-no maintenance while running on their own for years.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs tracking-wider uppercase hover:bg-white/90 transition-colors duration-300"
                  >
                    View Works
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://mohit-sable.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white font-mono text-xs tracking-wider uppercase hover:bg-white/5 transition-colors duration-300"
                  >
                    Full Portfolio
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 md:mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 text-center"
                >
                  <p className="text-white font-mono text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-white/50 font-mono text-[10px] md:text-xs tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 md:mb-24">
            <p className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase mb-6">Personal Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <p className="text-white/40 font-mono text-[10px] tracking-wider uppercase">{info.label}</p>
                    <p className="text-white font-mono text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 md:mb-24">
            <p className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase mb-6">Technologies & Skills</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <span className="text-white/80 font-mono text-xs tracking-wide">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase">Recent Projects</p>
              <Link
                href="/"
                className="text-white/60 hover:text-white font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-colors duration-300"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.slice(0, 3).map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-mono text-sm tracking-wide uppercase">{project.title}</p>
                    <p className="text-white/60 font-mono text-[10px] tracking-wider">{project.category}</p>
                  </div>
                  {project.isRecent && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                      <span className="text-emerald-400 font-mono text-[9px] tracking-wider uppercase">Recent</span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="p-6 md:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-mono text-[10px] tracking-wider uppercase">Available</span>
              </div>
              <h3 className="text-white font-mono text-xl md:text-2xl mb-2">Open for Freelance</h3>
              <p className="text-white/60 font-mono text-sm mb-4">
                Looking to collaborate on exciting projects
              </p>
              <a
                href="mailto:mohithundlani123@gmail.com"
                className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-wider hover:text-emerald-300 transition-colors duration-300"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  )
}
