"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const labels = [
  "DOMAIN CONTROLLERS",
  "TRUST RELATIONS",
  "KERBEROS TGT/s",
  "SMB PIPES",
  "LDAP QUERIES",
  "DNS ZONES",
  "GPO LINKS",
  "SID FILTERING",
]

function MetricLine({ label, initial }: { label: string; initial: number }) {
  const [val, setVal] = useState(initial)

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => {
        const delta = (Math.random() - 0.45) * 3
        return Math.max(0, Math.round(prev + delta))
      })
    }, 1200 + Math.random() * 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-muted-foreground/60">
      <span className="w-28 truncate">{label}</span>
      <span className="text-white/40">&gt;</span>
      <motion.span
        key={val}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        className="text-accent/60 tabular-nums"
      >
        {String(val).padStart(4, "0")}
      </motion.span>
    </div>
  )
}

export function SecurityMetrics() {
  return (
    <motion.div
      className="absolute bottom-24 left-8 z-10 hidden md:block pointer-events-none"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      <div className="border-l border-accent/10 pl-3 py-1 space-y-0.5">
        <MetricLine label={labels[0]} initial={4} />
        <MetricLine label={labels[1]} initial={12} />
        <MetricLine label={labels[2]} initial={238} />
        <MetricLine label={labels[3]} initial={47} />
        <MetricLine label={labels[4]} initial={1} />
        <MetricLine label={labels[5]} initial={9} />
        <MetricLine label={labels[6]} initial={23} />
        <MetricLine label={labels[7]} initial={3} />
      </div>
      <div className="mt-2 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
        [ live telemetry ]
      </div>
    </motion.div>
  )
}
