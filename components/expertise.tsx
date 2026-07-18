"use client"

import { motion } from "framer-motion"

const areas = [
  {
    index: "01",
    title: "Active Directory Security",
    description:
      "Deep specialization in Active Directory environments — enumeration, attack paths, and defensive hardening for enterprise networks.",
  },
  {
    index: "02",
    title: "Cybersecurity Education",
    description:
      "Designing structured learning paths, certification study guides, and hands-on references that simplify the road into security.",
  },
  {
    index: "03",
    title: "Platform Development",
    description:
      "Building and shipping educational web platforms end-to-end — from concept and content to a live product used by students.",
  },
  {
    index: "04",
    title: "Privacy & Awareness",
    description:
      "Creating awareness-driven content that helps everyday users protect their digital identity and understand real threats.",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 px-8 md:px-12 md:py-32">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-20 relative"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — EXPERTISE</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-4">Areas of Focus</h2>
        <p className="max-w-xl font-mono text-xs md:text-sm leading-relaxed text-muted-foreground text-pretty">
          Where offensive insight meets defensive discipline — the domains I study, break, and teach.
        </p>
      </motion.div>

      {/* Expertise Grid */}
      <div className="grid md:grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07] relative">
        {areas.map((area, index) => (
          <motion.div
            key={area.index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group bg-background p-8 md:p-12 flex flex-col gap-6 hover:bg-white/[0.02] transition-all duration-500 relative"
          >
            {/* Hover accent line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent/0 via-accent to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"
            />
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            </div>
            <div className="flex items-start justify-between relative z-10">
              <span className="font-mono text-xs tracking-widest text-accent">{area.index}</span>
              <motion.span
                className="w-2 h-2 rounded-full border border-white/20 group-hover:bg-accent group-hover:border-accent transition-colors duration-300"
                whileHover={{ scale: 2 }}
              />
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-light tracking-tight group-hover:text-accent transition-colors duration-300 relative z-10">
              {area.title}
            </h3>
            <p className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground text-pretty relative z-10">
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
