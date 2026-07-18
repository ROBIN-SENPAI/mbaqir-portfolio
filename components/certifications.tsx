"use client"

import { motion } from "framer-motion"
import { Shield, Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    rank: 1,
    title: "Certified Red Team Operations Management",
    acronym: "CRTOM",
    issuer: "Red Team Leaders",
    href: "https://courses.redteamleaders.com/exam-completion/d657f0cea24f0a01",
    level: "Advanced",
    description: "Advanced red team operations, attack lifecycle management, and adversary simulation.",
  },
  {
    rank: 2,
    title: "Certified Cybersecurity Educator Professional",
    acronym: "CCEP",
    issuer: "Red Team Leaders",
    href: "https://courses.redteamleaders.com/exam-completion/f0bca6d0009ba4a4",
    level: "Advanced",
    description: "Professional cybersecurity education methodologies and instructional design.",
  },
  {
    rank: 3,
    title: "Certified Threat Intelligence & Governance Analyst",
    acronym: "CTIGA",
    issuer: "Red Team Leaders",
    href: "https://courses.redteamleaders.com/exam-completion/b8450d92d9436a88",
    level: "Intermediate",
    description: "Threat intelligence collection, analysis, and cybersecurity governance frameworks.",
  },
  {
    rank: 4,
    title: "Certified LLM Security Professional",
    acronym: "CLLMSP",
    issuer: "Red Team Leaders",
    href: "https://courses.redteamleaders.com/exam-completion/390ef6e2fcffb8ef",
    level: "Intermediate",
    description: "Large Language Model security, prompt injection, and AI red teaming.",
  },
  {
    rank: 5,
    title: "Certified C++ Practitioner Professional",
    acronym: "CCPP",
    issuer: "Red Team Leaders",
    href: "https://courses.redteamleaders.com/exam-completion/8123078bdedc5980",
    level: "Intermediate",
    description: "Professional C++ programming for security tooling and exploit development.",
  },
  {
    rank: 6,
    title: "Certified Encryption and Cryptography Beginners",
    acronym: "CECB",
    issuer: "Red Team Leaders",
    href: "https://courses.redteamleaders.com/exam-completion/6fe91601f35c090a",
    level: "Foundation",
    description: "Foundational encryption principles, cryptographic algorithms, and secure communication.",
  },
  {
    rank: 7,
    title: "Certified Human Trafficking Awareness Professional",
    acronym: "CHTAP",
    issuer: "Red Team Leaders",
    href: "https://courses.redteamleaders.com/exam-completion/9ef3043a12d06c4d",
    level: "Foundation",
    description: "Human trafficking awareness, detection techniques, and preventive measures.",
  },
]

const levelColors: Record<string, string> = {
  Advanced: "text-accent border-accent/40 bg-accent/10",
  Intermediate: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  Foundation: "text-blue-400 border-blue-400/40 bg-blue-400/10",
}

const levelOrder = ["Advanced", "Intermediate", "Foundation"]

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-8 md:px-12 md:py-32">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.08) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }} />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-20 relative"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — CERTIFICATIONS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-4">Verified Credentials</h2>
        <p className="max-w-xl font-mono text-xs md:text-sm leading-relaxed text-muted-foreground text-pretty">
          Industry-recognized certifications from Red Team Leaders, ranked by expertise level.
        </p>
      </motion.div>

      {/* Certifications List */}
      <div className="space-y-3 relative">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.acronym}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative flex items-center gap-4 md:gap-6 p-4 md:p-6 border border-white/[0.07] hover:border-accent/30 bg-background hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl" />
            </div>
            {/* Rank Number */}
            <div className="hidden md:flex items-center justify-center w-10 h-10 shrink-0">
              <span className="font-mono text-lg text-muted-foreground group-hover:text-accent transition-colors duration-300">
                {String(cert.rank).padStart(2, "0")}
              </span>
            </div>

            {/* Icon */}
            <div className="hidden sm:flex items-center justify-center w-10 h-10 shrink-0 rounded-full border border-white/10 group-hover:border-accent/40 transition-colors duration-300">
              <Shield className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <h3 className="font-sans text-lg md:text-xl font-light tracking-tight group-hover:text-accent transition-colors duration-300 truncate">
                  {cert.title}
                </h3>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground shrink-0">
                  {cert.acronym}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground/70 line-clamp-1">
                {cert.description}
              </p>
            </div>

            {/* Level Badge */}
            <div className="hidden sm:block">
              <span
                className={`inline-block font-mono text-[10px] tracking-wider px-3 py-1 border rounded-full ${levelColors[cert.level]}`}
              >
                {cert.level}
              </span>
            </div>

            {/* Link Icon */}
            <div className="shrink-0">
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>

            {/* Bottom line accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          </motion.a>
        ))}
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-6 md:gap-12"
      >
        {levelOrder.map((level) => (
          <div key={level} className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${level === "Advanced" ? "bg-accent" : level === "Intermediate" ? "bg-amber-400" : "bg-blue-400"}`} />
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
              {certifications.filter((c) => c.level === level).length}x {level}
            </span>
          </div>
        ))}
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
          {certifications.length} CERTIFICATIONS TOTAL
        </span>
      </motion.div>
    </section>
  )
}
