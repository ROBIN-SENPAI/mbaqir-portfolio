"use client"

import { motion } from "framer-motion"

export function SectionBlend() {
  return (
    <div className="relative h-40 -mt-20 z-10 pointer-events-none">
      <div
        className="absolute inset-0 h-1/2"
        style={{
          background: "linear-gradient(to bottom, transparent, #050505)",
        }}
      />
      <div
        className="absolute inset-0 top-1/2 h-1/2"
        style={{
          background: "linear-gradient(to bottom, #050505, transparent)",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  )
}
