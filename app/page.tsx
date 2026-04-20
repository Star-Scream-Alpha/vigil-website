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

const useCases = [
  {
    title: 'Agriculture monitoring',
    description: 'Track soil subsidence, irrigation-induced settlement and crop field deformation to protect yields and inform agri-insurance underwriting.',
    tag: 'Agriculture',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12" />
        <path d="M12 8v4l3 3" /><circle cx="6" cy="6" r="2" /><path d="M6 8v8" />
      </svg>
    ),
  },
  {
    title: 'Real estate & urban growth',
    description: 'Identify ground subsidence, foundation risk and land movement near development sites before construction begins or assets are acquired.',
    tag: 'Real Estate',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Dam & reservoir safety',
    description: 'Continuous surveillance of slopes, foundations and spillways for early structural warning — weeks before visible failure signs emerge.',
    tag: 'Infrastructure',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M5 20V8l7-6 7 6v12" /><path d="M9 20v-5h6v5" />
      </svg>
    ),
  },
  {
    title: 'Pipeline & energy corridors',
    description: 'Detect ground movement, erosion and third-party interference along critical energy infrastructure before leaks or failures occur.',
    tag: 'Energy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Mining & industrial sites',
    description: 'Monitor tailings pond integrity, pit slope stability and subsidence at active and legacy extraction sites with satellite precision.',
    tag: 'Mining',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Coastal & environmental',
    description: 'Quantify shoreline erosion, wetland loss and land reclamation dynamics using repeat-pass satellite observation across wide coastal zones.',
    tag: 'Environment',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Insurance underwriting',
    description: 'Replace subjective risk opinion with satellite-derived displacement history and risk scores for property, casualty and specialty portfolios.',
    tag: 'Insurance',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-24 sm:px-10 lg:px-16">
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
                className="text-5xl font-semibold text-[#171717] sm:text-6xl lg:text-[4.25rem]"
                style={{ letterSpacing: '-2.4px', lineHeight: '1.04' }}
              >
                See the ground{' '}
                <span className="text-[#0072f5]">shift</span>{' '}
                before the asset fails.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.11 }}
                className="mt-6 max-w-lg text-lg leading-8 text-[#666666]"
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
                  className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors"
                >
                  Request enterprise demo
                </Link>
                <Link
                  href="/platform"
                  className="rounded-[6px] px-6 py-3 text-sm font-medium text-[#171717] hover:bg-[#fafafa] transition-colors"
                  style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}
                >
                  Explore the platform
                </Link>
              </motion.div>
            </div>

            {/* Right: SAR terrain analysis panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="relative overflow-hidden rounded-xl"
              style={{ height: 460, background: '#0a0a0a', boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 8px 24px' }}
            >
              {/* Terrain coordinate grid */}
              <div className="absolute inset-0 grid-bg pointer-events-none" />

              {/* Displacement heat zones */}
              <div className="absolute" style={{ width: 220, height: 145, left: '22%', top: '28%', background: 'radial-gradient(ellipse at center, rgba(180,95,35,0.42) 0%, rgba(180,95,35,0.12) 48%, transparent 70%)', filter: 'blur(6px)', transform: 'rotate(-12deg)' }} />
              <div className="absolute" style={{ width: 90, height: 66, left: '50%', top: '37%', background: 'radial-gradient(ellipse at center, rgba(140,48,25,0.52) 0%, rgba(140,48,25,0.14) 50%, transparent 70%)', filter: 'blur(3px)' }} />
              <div className="absolute" style={{ width: 160, height: 110, left: '10%', top: '50%', background: 'radial-gradient(ellipse at center, rgba(80,120,55,0.28) 0%, rgba(80,120,55,0.07) 50%, transparent 70%)', filter: 'blur(6px)' }} />

              {/* Crosshair */}
              <div className="absolute" style={{ left: 'calc(50% + 13px)', top: 'calc(37% + 9px)' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="5" stroke="rgba(140,48,25,0.7)" strokeWidth="0.8" />
                  <line x1="14" y1="0" x2="14" y2="7" stroke="rgba(140,48,25,0.45)" strokeWidth="0.8" />
                  <line x1="14" y1="21" x2="14" y2="28" stroke="rgba(140,48,25,0.45)" strokeWidth="0.8" />
                  <line x1="0" y1="14" x2="7" y2="14" stroke="rgba(140,48,25,0.45)" strokeWidth="0.8" />
                  <line x1="21" y1="14" x2="28" y2="14" stroke="rgba(140,48,25,0.45)" strokeWidth="0.8" />
                </svg>
              </div>

              {/* Header bar */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5 border-b border-white/5" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}>
                <div className="flex items-center gap-2">
                  <span className="live-dot" style={{ width: 5, height: 5, background: '#00a63e' }} />
                  <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.14em', color: '#00a63e', textTransform: 'uppercase' }}>LIVE · InSAR STACK-12</span>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>2026-04-19 · 14:23 UTC</span>
              </div>

              {/* Legend */}
              <div className="absolute right-3 top-10 flex flex-col gap-1.5 rounded p-2" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
                {[
                  { color: '#8c3019', label: 'Critical' },
                  { color: '#b45f23', label: 'Elevated' },
                  { color: '#507837', label: 'Stable' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: item.color, opacity: 0.9 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ position: 'absolute', bottom: 76, left: 12, fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.18)' }}>47.23°N  8.45°E</div>

              {/* Data strip */}
              <div className="absolute inset-x-0 bottom-0 border-t border-white/5 px-4 py-3" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                <div className="flex items-end justify-between">
                  <div>
                    <p style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 3 }}>Δ Ground displacement · 7d</p>
                    <p style={{ fontFamily: 'monospace', fontSize: 26, color: '#c47830', lineHeight: 1, letterSpacing: '-0.02em' }}>+2.8 mm</p>
                    <p style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.2)', marginTop: 2 }}>NE vector · DAM-02 · Zurich, CH</p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 3 }}>Risk score</p>
                    <p style={{ fontFamily: 'monospace', fontSize: 26, color: '#a84030', lineHeight: 1, letterSpacing: '-0.02em' }}>78 / 100</p>
                    <p style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.2)', marginTop: 2 }}>Elevated · Δ +6 from baseline</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Metrics strip ──────────────────────────────────── */}
      <section className="border-y border-[#ebebeb] bg-[#fafafa] px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <p className="font-mono text-2xl font-medium text-[#171717]">{m.value}</p>
                <p className="mt-1 text-sm text-[#808080]">{m.label}</p>
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
            <h2 className="text-3xl font-semibold text-[#171717] sm:text-4xl" style={{ letterSpacing: '-1.6px', lineHeight: '1.1' }}>
              From orbit to operational decision
            </h2>
          </div>
          <div className="grid gap-px lg:grid-cols-3" style={{ background: '#ebebeb' }}>
            {steps.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative bg-white p-8 card-hover"
              >
                <p className="font-mono text-xs text-[#808080] mb-5">{item.n}</p>
                <h3 className="text-lg font-semibold text-[#171717]" style={{ letterSpacing: '-0.5px' }}>{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#666666]">{item.body}</p>
                {i < 2 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:flex items-center justify-center w-5 h-5 rounded-full bg-white z-10" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px' }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5h6M5.5 2.5l2 2-2 2" stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ───────────────────────────────────── */}
      <section className="border-t border-[#ebebeb] bg-[#fafafa] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-4">Built for</p>
              <h2 className="text-3xl font-semibold text-[#171717] sm:text-4xl" style={{ letterSpacing: '-1.6px', lineHeight: '1.1' }}>
                Three types of risk teams
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#666666]">VIGIL-EARTH serves the full risk chain — underwriting, operations and government oversight.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {audiences.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="rounded-lg bg-white p-6 shadow-card card-hover"
                >
                  <h3 className="text-sm font-semibold text-[#171717]" style={{ letterSpacing: '-0.32px' }}>{a.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#666666]">{a.description}</p>
                  <ul className="mt-5 space-y-2">
                    {a.signals.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#171717', flexShrink: 0 }} />
                        <span className="text-xs text-[#808080]">{s}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Use cases ──────────────────────────────────────── */}
      <section className="border-t border-[#ebebeb] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-4">Use cases</p>
              <h2 className="text-3xl font-semibold text-[#171717] sm:text-4xl" style={{ letterSpacing: '-1.6px', lineHeight: '1.1' }}>
                Where VIGIL-EARTH is deployed
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#666666]">
                From agricultural land to urban cores — any asset where ground movement, water change or structural shift represents financial or physical risk.
              </p>
            </div>
            <Link href="/solutions" className="flex-shrink-0 self-start sm:self-auto flex items-center gap-1.5 text-sm text-[#0072f5] hover:text-[#0057cc] transition-colors">
              View all solutions
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-lg bg-white p-6 shadow-card card-hover"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#fafafa] text-[#4d4d4d]">
                  {item.icon}
                </div>
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-[#171717]" style={{ letterSpacing: '-0.3px' }}>{item.title}</h3>
                  <span className="flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium bg-[#f0f0f0] text-[#4d4d4d]">{item.tag}</span>
                </div>
                <p className="text-sm leading-6 text-[#666666]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="border-t border-[#171717] bg-[#171717] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[#666666] font-medium">Ready to deploy</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl" style={{ letterSpacing: '-1.6px', lineHeight: '1.1' }}>
                Monitor risk before failure becomes visible.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#808080]">Partner with VIGIL-EARTH to turn satellite data into urgent, trusted intelligence for your most sensitive assets.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#171717] hover:bg-[#ebebeb] transition-colors text-center whitespace-nowrap">
                Request demo
              </Link>
              <Link href="/reports" className="rounded-[6px] px-6 py-3 text-sm font-medium text-[#808080] hover:text-white transition-colors text-center whitespace-nowrap" style={{ boxShadow: 'rgba(255,255,255,0.1) 0px 0px 0px 1px' }}>
                View investor reports
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
