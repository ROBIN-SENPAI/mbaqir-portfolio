"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Senpai Academy",
    description: "The main educational hub for cybersecurity students",
    tags: ["Main Hub", "Education", "Cybersecurity"],
    href: "https://senpai-academy.netlify.app",
  },
  {
    title: "Essential Tools Setup",
    description: "Curated guide for installing essential security tools",
    tags: ["Tools", "Software", "Guide"],
    href: "https://senpai-setapp.netlify.app",
  },
  {
    title: "Kali Linux Command Guide",
    description: "Comprehensive command reference for Kali Linux",
    tags: ["Kali Linux", "Commands", "Reference"],
    href: "https://senpai-cheatsheet.netlify.app",
  },
  {
    title: "Digital Privacy Awareness",
    description: "Raising awareness about digital privacy and protection",
    tags: ["Privacy", "Security", "Awareness"],
    href: "https://prevacy.netlify.app",
  },
  {
    title: "CHTAP Guide",
    description: "Complete study guide for the CHTAP certification",
    tags: ["Certification", "CHTAP", "Study Guide"],
    href: "https://chtap-100.netlify.app",
  },
  {
    title: "Technical Roadmap",
    description: "Structured learning paths into cybersecurity",
    tags: ["Roadmap", "Learning Path", "Cybersecurity"],
    href: "https://senpai-roadmap.netlify.app",
  },
  {
    title: "Senpai Type",
    description: "Typing practice platform built for the community",
    tags: ["Typing", "Practice", "Platform"],
    href: "https://senpai-type.netlify.app",
  },
  {
    title: "CLLMSP Guide",
    description: "Complete study guide for the CLLMSP certification",
    tags: ["Certification", "CLLMSP", "Study Guide"],
    href: "https://cllmsp.netlify.app",
  },
]

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative block"
    >
      <div className="relative border-b border-white/[0.03] transition-all duration-500">
        {/* Background hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full bg-gradient-to-r from-accent/[0.02] via-transparent to-transparent" />
        </div>

        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/0 group-hover:bg-accent/30 transition-colors duration-500" />

        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

        <div className="relative px-6 py-6 md:py-7">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            {/* Large number */}
            <div className="hidden md:block md:w-14 shrink-0">
              <span className="font-mono text-[11px] tracking-widest text-muted-foreground/30 group-hover:text-accent/60 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <div className="md:w-64 shrink-0">
              <h3 className="font-sans text-xl md:text-2xl font-light tracking-tight text-white/70 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="font-mono text-xs leading-relaxed text-muted-foreground/50 flex-1 hidden md:line-clamp-1">
              {project.description}
            </p>

            {/* Tags + Arrow */}
            <div className="flex items-center gap-4 md:ml-auto shrink-0">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-wider px-2.5 py-1 rounded-sm bg-white/[0.02] border border-white/[0.06] text-muted-foreground/40 group-hover:bg-accent/[0.04] group-hover:border-accent/20 group-hover:text-accent/70 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/[0.04] transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
      </div>
    </motion.a>
  )
}

export function Works() {
  return (
    <section id="works" className="relative py-24 md:py-32 px-8 md:px-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-accent/[0.02] blur-[140px]" />
      </div>

      {/* Section Header */}
      <div className="mb-16 relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent/40" />
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">06 — PLATFORMS & PROJECTS</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl md:text-5xl font-light italic leading-tight">Official Senpai Academy Platforms</h2>
              <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground text-pretty">
                A growing ecosystem of tools, guides, and study resources — each one built to make cybersecurity learning clearer.
              </p>
            </div>
            <span className="font-mono text-xs tracking-widest text-muted-foreground shrink-0">
              ({String(projects.length).padStart(2, "0")}) PLATFORMS
            </span>
          </div>
          {/* Decorative line under header */}
          <div className="mt-10 h-px bg-gradient-to-r from-accent/20 via-accent/5 to-transparent" />
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
