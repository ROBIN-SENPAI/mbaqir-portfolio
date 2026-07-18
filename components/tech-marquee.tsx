"use client"

import { motion } from "framer-motion"

const techItems = [
  "ACTIVE DIRECTORY",
  "RED TEAM",
  "BLOODHOUND",
  "SHARPHOUND",
  "RUBEUS",
  "MIMIKATZ",
  "CERTIPY",
  "CERTIFY",
  "POWERVIEW",
  "IMPACKET",
  "NETEXEC",
  "EVIL-WINRM",
  "KERBEROS",
  "LDAP",
  "NTLM",
  "SMB",
]

const concepts = [
  "DCSYNC",
  "KERBEROASTING",
  "SHADOW CREDENTIALS",
  "PASS-THE-HASH",
  "GOLDEN TICKET",
  "AD CS",
  "ATTACK PATHS",
  "LATERAL MOVEMENT",
  "PRIVILEGE ESCALATION",
  "DEFENSE EVASION",
  "ENTERPRISE SECURITY",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className={`flex gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="group font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
              color: "transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f97316"
              e.currentTarget.style.WebkitTextStroke = "none"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "transparent"
              e.currentTarget.style.WebkitTextStroke = "1px rgba(255,255,255,0.3)"
            }}
          >
            {item}
            <span className="mx-8 text-white/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-24 overflow-hidden md:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Section Header */}
      <div className="px-8 md:px-12 mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-accent/40" />
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">07 — TECHNICAL ARSENAL</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-sans text-3xl md:text-5xl font-light italic">
                Tools & <span className="text-white/70">Technologies</span>
              </h2>
              <p className="mt-4 max-w-xl font-mono text-xs md:text-sm leading-relaxed text-muted-foreground text-pretty">
                The core technologies, protocols, and offensive security tools I work with daily in Active Directory
                environments and red team operations.
              </p>
            </div>
            <span className="font-mono text-xs tracking-widest text-muted-foreground shrink-0">
              ({String(techItems.length + concepts.length).padStart(2, "0")}) TECH
            </span>
          </div>
        </motion.div>
      </div>

      {/* Category Labels */}
      <div className="px-8 md:px-12 mb-6 relative">
        <div className="flex gap-8 md:gap-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.3em] text-accent/60 uppercase"
          >
            Domains &amp; Protocols
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40 uppercase"
          >
            Security Tools &amp; Techniques
          </motion.span>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-6 relative">
        <div className="border-y border-white/[0.03] py-2">
          <MarqueeRow items={techItems} direction="left" />
        </div>
        <div className="border-y border-white/[0.03] py-2">
          <MarqueeRow items={concepts} direction="right" />
        </div>
      </div>

      {/* Decorative bottom bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-16 mx-8 md:mx-12 h-px bg-gradient-to-r from-accent/30 via-accent/10 to-transparent origin-left"
      />
    </section>
  )
}
