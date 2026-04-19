'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const metrics = [
  { value: '±2 mm', label: 'Ground displacement precision' },
  { value: '6-day', label: 'Satellite revisit cycle' },
  { value: '>98%', label: 'Anomaly detection accuracy' },
  { value: 'Global', label: 'Critical infrastructure coverage' },
];

const steps = [
  {
    n: '01',
    title: 'Satellite capture',
    body: 'Radar and optical satellites pass over assets on 6-day cycles, generating displacement stacks across the full asset portfolio.',
  },
  {
    n: '02',
    title: 'AI anomaly detection',
    body: 'Machine learning models identify deformation, moisture change and instability patterns invisible to periodic human inspection.',
  },
  {
    n: '03',
    title: 'Risk intelligence output',
    body: 'Evidence-grade signals, risk scores and forensic packages delivered to insurers, operators and government risk teams.',
  },
];

const audiences = [
  {
    title: 'Insurers & Underwriters',
    description: 'Continuous portfolio risk visibility for underwriting decisions and pre-event claims intelligence.',
    signals: ['Displacement history', 'Risk score trends', 'Forensic evidence package'],
  },
  {
    title: 'Infrastructure Operators',
    description: 'Early warning intelligence for dams, bridges, pipelines and mine sites before physical failure.',
    signals: ['Real-time alert feed', 'Asset health scores', 'Inspection prioritization'],
  },
  {
    title: 'Governments & Public Sector',
    description: 'National-scale infrastructure monitoring for disaster prevention and public safety mandates.',
    signals: ['Portfolio dashboard', 'Policy-grade reporting', 'Cross-agency data access'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative px-6 pt-20 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Left: copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-7 flex items-center gap-2"
              >
                <span className="live-dot" />
                <span className="eyebrow">Satellite Intelligence Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4.25rem] leading-[1.04]"
              >
                See the ground{' '}
                <span className="text-primary-400">shift</span>{' '}
                before the asset fails.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.11 }}
                className="mt-6 max-w-lg text-lg leading-8 text-neutral-500"
              >
                Satellite intelligence, geospatial AI and evidence-grade risk signals for insurers, operators and governments monitoring critical infrastructure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.17 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-black hover:bg-primary-300 transition-colors"
                >
                  Request enterprise demo
                </Link>
                <Link
                  href="/platform"
                  className="rounded-md border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 hover:border-white/20 hover:text-white transition-colors"
                >
                  Explore the platform
                </Link>
              </motion.div>
            </div>

            {/* Right: SAR monitoring panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="relative overflow-hidden rounded-xl border border-white/8"
              style={{ height: 460, background: '#090c14' }}
            >
              {/* Coordinate grid */}
              <div className="absolute inset-0 grid-bg pointer-events-none" />

              {/* Displacement heat zones */}
              <div className="absolute" style={{
                width: 220, height: 145,
                left: '22%', top: '28%',
                background: 'radial-gradient(ellipse at center, rgba(232,169,74,0.42) 0%, rgba(232,169,74,0.12) 48%, transparent 70%)',
                filter: 'blur(6px)',
                transform: 'rotate(-12deg)',
              }} />
              <div className="absolute" style={{
                width: 90, height: 66,
                left: '50%', top: '37%',
                background: 'radial-gradient(ellipse at center, rgba(239,68,68,0.55) 0%, rgba(239,68,68,0.14) 50%, transparent 70%)',
                filter: 'blur(3px)',
              }} />
              <div className="absolute" style={{
                width: 160, height: 110,
                left: '10%', top: '50%',
                background: 'radial-gradient(ellipse at center, rgba(94,207,202,0.22) 0%, rgba(94,207,202,0.06) 50%, transparent 70%)',
                filter: 'blur(6px)',
              }} />

              {/* Crosshair at critical zone */}
              <div className="absolute" style={{ left: 'calc(50% + 13px)', top: 'calc(37% + 9px)' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="5" stroke="rgba(239,68,68,0.65)" strokeWidth="0.8" />
                  <line x1="14" y1="0" x2="14" y2="7" stroke="rgba(239,68,68,0.45)" strokeWidth="0.8" />
                  <line x1="14" y1="21" x2="14" y2="28" stroke="rgba(239,68,68,0.45)" strokeWidth="0.8" />
                  <line x1="0" y1="14" x2="7" y2="14" stroke="rgba(239,68,68,0.45)" strokeWidth="0.8" />
                  <line x1="21" y1="14" x2="28" y2="14" stroke="rgba(239,68,68,0.45)" strokeWidth="0.8" />
                </svg>
              </div>

              {/* Header bar */}
              <div
                className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5 border-b border-white/6"
                style={{ background: 'rgba(7,9,14,0.75)', backdropFilter: 'blur(8px)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="live-dot" style={{ width: 5, height: 5 }} />
                  <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.14em', color: '#5ecfca', textTransform: 'uppercase' }}>
                    LIVE · InSAR STACK-12
                  </span>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#374151' }}>
                  2026-04-19 · 14:23 UTC
                </span>
              </div>

              {/* Legend */}
              <div
                className="absolute right-3 top-10 flex flex-col gap-1.5 rounded p-2"
                style={{ background: 'rgba(7,9,14,0.7)', backdropFilter: 'blur(4px)' }}
              >
                {[
                  { color: '#ef4444', label: 'Critical' },
                  { color: '#e8a94a', label: 'Elevated' },
                  { color: '#5ecfca', label: 'Stable' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: item.color, opacity: 0.85 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 8, color: '#6b7280' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Coordinate label */}
              <div style={{ position: 'absolute', bottom: 76, left: 12, fontFamily: 'monospace', fontSize: 8, color: '#1f2937' }}>
                47.23°N  8.45°E
              </div>

              {/* Data readout strip */}
              <div
                className="absolute inset-x-0 bottom-0 border-t border-white/6 px-4 py-3"
                style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)' }}
              >
                <div className="flex items-end justify-between">
                  <div>
                    <p style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.1em', color: '#6b7280', textTransform: 'uppercase', marginBottom: 3 }}>
                      Δ Ground displacement · 7d
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: 26, color: '#e8a94a', lineHeight: 1, letterSpacing: '-0.02em' }}>
                      +2.8 mm
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: 8, color: '#4b5563', marginTop: 2 }}>
                      NE vector · DAM-02 · Zurich, CH
                    </p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.1em', color: '#6b7280', textTransform: 'uppercase', marginBottom: 3 }}>
                      Risk score
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: 26, color: '#ef4444', lineHeight: 1, letterSpacing: '-0.02em' }}>
                      78 / 100
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: 8, color: '#4b5563', marginTop: 2 }}>
                      Elevated · Δ +6 from baseline
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Metrics strip ──────────────────────────────────── */}
      <section className="border-y border-white/5 px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <p className="font-mono text-2xl font-medium text-white">{m.value}</p>
                <p className="mt-1 text-sm text-neutral-600">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From orbit to operational decision
            </h2>
          </div>

          <div className="grid gap-px lg:grid-cols-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {steps.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative bg-[#07090e] p-8 card-hover border border-transparent"
              >
                <p className="font-mono text-xs text-primary-400/50 mb-5">{item.n}</p>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{item.body}</p>
                {i < 2 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:flex items-center justify-center w-5 h-5 rounded-full bg-[#07090e] border border-white/8 z-10">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5h6M5.5 2.5l2 2-2 2" stroke="rgba(94,207,202,0.45)" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ───────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-4">Built for</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Three types of risk teams
              </h2>
              <p className="mt-4 text-sm leading-6 text-neutral-500">
                VIGIL-EARTH serves the full risk chain — underwriting, operations and government oversight.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {audiences.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="rounded-lg border border-white/6 bg-[#0d1018] p-6 card-hover"
                >
                  <h3 className="text-sm font-semibold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">{a.description}</p>
                  <ul className="mt-5 space-y-2">
                    {a.signals.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#5ecfca', flexShrink: 0 }} />
                        <span className="text-xs text-neutral-600">{s}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div
            className="rounded-xl border border-primary-400/12 px-10 py-16"
            style={{ background: 'linear-gradient(135deg, #0d1018 0%, #0f1520 100%)' }}
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow mb-4">Ready to deploy</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Monitor risk before failure becomes visible.
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-500">
                  Partner with VIGIL-EARTH to turn satellite data into urgent, trusted intelligence for your most sensitive assets.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-black hover:bg-primary-300 transition-colors text-center whitespace-nowrap"
                >
                  Request demo
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 hover:border-white/20 hover:text-white transition-colors text-center whitespace-nowrap"
                >
                  Talk to risk team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
