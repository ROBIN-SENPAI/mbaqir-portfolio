"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const stats = [
  { value: "8+", label: "Platforms Launched" },
  { value: "1st", label: "Place — Technical Competitions" },
  { value: "AD", label: "Active Directory Specialist" },
  { value: "AR", label: "High-Quality Arabic Content" },
]

const statements = [
  "Security is a discipline, not a product.",
  "Active Directory is my battlefield.",
  "Knowledge should speak Arabic too.",
  "Every learner deserves a clear path.",
  "Curiosity is the first exploit.",
  "I build what I wish I had learned from.",
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden md:py-0">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/[0.03] blur-[120px]" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-0 py-20 relative"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">03 — ABOUT ME</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-8 text-balance">
          Turning complex security into clear learning
        </h2>
        <div className="max-w-4xl font-sans text-base md:text-lg font-light leading-relaxed text-white/80 text-pretty space-y-5">
          <p>
            I&apos;m <span className="text-white font-normal">Mohammed Baqir Firas</span> — a{" "}
            <span className="text-accent font-normal">software developer</span>,{" "}
            <span className="text-accent font-normal">cybersecurity practitioner</span>, and founder of{" "}
            <span className="text-white font-normal">Senpai Academy</span>. My work centers on{" "}
            <span className="text-accent font-normal">Active Directory</span> security, where I explore{" "}
            <span className="text-white/90">offensive techniques</span>,{" "}
            <span className="text-white/90">defensive strategies</span>, and the architecture of secure enterprise
            environments.
          </p>
          <p>
            Driven by a passion for knowledge sharing, I create{" "}
            <span className="text-accent font-normal">high-quality Arabic educational content</span> that makes
            advanced cybersecurity concepts <span className="text-white/90">practical</span>,{" "}
            <span className="text-white/90">accessible</span>, and{" "}
            <span className="text-white/90">applicable</span>. Through{" "}
            <span className="text-white/90">research</span>, hands-on experience, and continuous learning, I aim to
            empower aspiring professionals and strengthen the cybersecurity community.
          </p>
          <p>
            My contributions have been recognized by several Iraqi universities, and I have been awarded{" "}
            <span className="text-accent font-normal">first place in multiple technical competitions</span>,
            reflecting my commitment to{" "}
            <span className="text-white/90">technical excellence</span>,{" "}
            <span className="text-white/90">innovation</span>, and{" "}
            <span className="text-white/90">lifelong learning</span>.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-6 md:p-8 flex flex-col gap-2 group hover:bg-white/[0.02] transition-colors duration-500 relative"
            >
              <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              <span className="font-sans text-3xl md:text-4xl font-light text-accent relative">{stat.value}</span>
              <span className="font-mono text-[10px] md:text-xs tracking-wider text-muted-foreground uppercase relative">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="relative flex items-center overflow-hidden py-0 gap-0 h-16 border-y border-white/[0.03]">
        <motion.div style={{ x: smoothX }} className="flex gap-16 md:gap-24 px-8 md:px-12 whitespace-nowrap">
          {statements.map((statement, index) => (
            <motion.p
              key={index}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-white/90 group"
              style={{
                WebkitTextStroke: index % 2 === 0 ? "none" : "1px rgba(255,255,255,0.3)",
                color: index % 2 === 0 ? "inherit" : "transparent",
              }}
            >
              {statement}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
