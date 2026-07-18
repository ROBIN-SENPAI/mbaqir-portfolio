"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const links = [
  { label: "Academy Website", href: "https://senpai-academy.netlify.app" },
  { label: "Academy Channel", href: "https://t.me/SENPAI_ACADMEY" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/ROBiN" },
]

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative">
      {/* CTA */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden border-t border-white/10"
      >
        {/* Dot Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundImage: isHovered
                ? "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.25) 0%, transparent 60%)"
                : "radial-gradient(circle at 50% 100%, rgba(249,115,22,0) 0%, transparent 60%)",
            }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="relative py-28 md:py-36 px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-mono text-xs tracking-[0.3em] uppercase mb-6 text-muted-foreground">
                  08 — CONTACT
                </p>
                <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
                  Let&apos;s <span className="italic text-accent">Collaborate</span>
                </h2>
                <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
                  Building the future of Arabic cybersecurity education. Have an idea, a project, or a question? Reach
                  out.
                </p>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-col items-start gap-6"
              >
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Reach out directly
                </p>
                <a
                  href="https://t.me/xFFBI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-4 px-8 py-5 overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 border"
                    animate={{
                      borderColor: isHovered ? "#f97316" : "rgba(255,255,255,0.15)",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.span
                    className="absolute inset-0"
                    animate={{
                      background: isHovered
                        ? "linear-gradient(135deg, rgba(249,115,22,0.1), transparent)"
                        : "transparent",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative flex items-center gap-4">
                    <span className="relative flex h-3 w-3">
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full"
                        animate={{ backgroundColor: isHovered ? "#f97316" : "rgba(255,255,255,0.3)" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full"
                        animate={{
                          backgroundColor: isHovered ? "#f97316" : "rgba(255,255,255,0.3)",
                          scale: isHovered ? [1, 2, 1] : 1,
                          opacity: isHovered ? [0.5, 0, 0.5] : 0.5,
                        }}
                        transition={{ duration: isHovered ? 1.5 : 0.3, repeat: isHovered ? Infinity : 0 }}
                      />
                    </span>
                    <span className="relative font-mono text-sm tracking-[0.2em] uppercase">
                      <motion.span
                        animate={{ color: isHovered ? "#f97316" : "#fafafa" }}
                        transition={{ duration: 0.3 }}
                      >
                        Message on Telegram
                      </motion.span>
                    </span>
                  </span>
                  <motion.span
                    animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="relative w-5 h-5" />
                  </motion.span>
                </a>
                <div className="flex items-center gap-4 font-mono text-[10px] tracking-wider text-muted-foreground">
                  <span className="w-8 h-px bg-white/10" />
                  <span>@xFFBI</span>
                  <span className="w-8 h-px bg-white/10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-8 md:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Time & Copyright */}
            <div className="flex items-center gap-4 order-3 md:order-1">
              <div className="font-mono text-[11px] tracking-widest text-muted-foreground">
                <span className="text-white/30 mr-1.5">LOCAL</span>
                <span className="text-white tabular-nums">{time}</span>
              </div>
              <span className="hidden md:inline text-white/10">|</span>
              <p className="font-mono text-[11px] tracking-widest text-muted-foreground">
                &copy; {new Date().getFullYear()} M. BAQER FIRAS
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-5 order-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300 order-4 md:order-3"
            >
              BACK TO TOP
              <ArrowUpRight className="w-3 h-3 -rotate-45 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
