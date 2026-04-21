'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { AnimatedBg } from '../../components/AnimatedBg';

const SPRING = { ease: [0.16, 1, 0.3, 1] as const };

const pillars = [
  { n: '01', title: 'Satellite-first approach', body: 'Multi-source global data ingestion with enterprise security — no site visits, no manual surveys.' },
  { n: '02', title: 'AI-powered detection', body: 'Machine learning algorithms trained on geospatial risk patterns to surface signals humans cannot see.' },
  { n: '03', title: 'Evidence-grade output', body: 'Forensic-quality data accepted for underwriting decisions, claims validation and regulatory review.' },
];

const stats = [
  { value: '±2 mm', label: 'Ground displacement precision', sub: 'Millimeter-scale from orbit' },
  { value: '>98%', label: 'Detection accuracy', sub: 'Across validated test sites' },
  { value: '6 days', label: 'Satellite revisit cycle', sub: 'Near real-time signal refresh' },
  { value: '100+', label: 'Asset types monitored', sub: 'Dams, bridges, pipelines, mines' },
];

const tech = [
  { title: 'SAR Interferometry', body: 'Synthetic Aperture Radar measures ground displacement with millimeter precision across vast areas and through cloud cover.' },
  { title: 'Geospatial AI', body: 'Machine learning models identify anomalous patterns in terrain behavior, moisture and infrastructure response.' },
  { title: 'Temporal Analysis', body: 'Time-series processing reveals displacement trends and trajectories indicating emerging risk conditions weeks before visibility.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">

      {/* ── Hero ── */}
      <section className="relative px-6 pt-20 pb-24 sm:px-10 lg:px-16 overflow-hidden">
        <AnimatedBg />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Left: copy */}
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ...SPRING }} className="mb-5">
                <span className="badge-status">
                  <span className="live-dot" style={{ width: 5, height: 5 }} />
                  <span className="eyebrow" style={{ color: '#0060d6' }}>About</span>
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.07, ...SPRING }}
                className="max-w-xl text-[2.75rem] font-bold text-[#171717] sm:text-[4rem] lg:text-[5rem]"
                style={{ letterSpacing: '-3.2px', lineHeight: '0.96' }}
              >
                Built for teams managing consequential infrastructure
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14, ...SPRING }} className="mt-6 max-w-lg text-lg leading-8 text-[#666666]">
                VIGIL-EARTH is engineered to support continuous monitoring, claims verification and portfolio-level risk decisions on the world's most exposed assets.
              </motion.p>

              {/* Mobile visual strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28, ...SPRING }}
                className="mt-8 lg:hidden rounded-xl overflow-hidden shadow-card"
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#ebebeb]">
                  <p className="eyebrow">By the numbers</p>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" style={{ width: 5, height: 5 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>VALIDATED</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-y divide-[#ebebeb]">
                  {[
                    { value: '±2mm', label: 'Displacement precision' },
                    { value: '>98%', label: 'Detection accuracy' },
                    { value: '6 days', label: 'Revisit cycle' },
                    { value: '100+', label: 'Asset types' },
                  ].map((s) => (
                    <div key={s.label} className="py-4 px-4">
                      <p className="font-mono text-base font-medium text-[#171717]">{s.value}</p>
                      <p className="text-[10px] text-[#808080] mt-0.5 leading-4">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: metrics grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ...SPRING }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ...SPRING }}
                    className="rounded-xl bg-white p-6 shadow-card"
                  >
                    <p className="font-mono text-3xl font-medium text-[#171717]" style={{ letterSpacing: '-1px' }}>{s.value}</p>
                    <p className="mt-2 text-xs font-medium text-[#171717]" style={{ letterSpacing: '-0.2px' }}>{s.label}</p>
                    <p className="mt-1 text-[10px] text-[#808080] leading-4">{s.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebebeb] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <SectionHeading eyebrow="Our mission" title="Truth in physical asset risk" description="We exist to eliminate uncertainty in infrastructure risk assessment through satellite intelligence and geospatial AI." />
              <p className="text-base leading-7 text-[#666666]">
                Traditional risk assessment relies on periodic inspections, historical data and expert judgment. VIGIL-EARTH provides continuous, data-driven insight that sees what the human eye cannot detect — before failure becomes visible.
              </p>
            </div>
            <div className="space-y-3">
              {pillars.map((p, i) => (
                <motion.div key={p.n} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09, ...SPRING }}
                  className="flex gap-5 rounded-lg bg-white p-6 shadow-card card-hover">
                  <p className="font-mono text-xs text-[#808080] mt-0.5 flex-shrink-0">{p.n}</p>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#171717]" style={{ letterSpacing: '-0.4px' }}>{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#666666]">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 grid-bg" style={{ background: '#0a0a0a' }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="eyebrow mb-4" style={{ color: '#444444' }}>By the numbers</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl" style={{ letterSpacing: '-1.6px', lineHeight: '1.08' }}>Proven at enterprise scale</h2>
          </div>
          <div className="grid gap-px sm:grid-cols-2 xl:grid-cols-4" style={{ background: '#1c1c1c' }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ...SPRING }} className="p-10 card-hover" style={{ background: '#0f0f0f' }}>
                <p className="font-mono text-4xl font-medium text-white">{s.value}</p>
                <p className="mt-3 text-sm font-semibold text-white/70" style={{ letterSpacing: '-0.3px' }}>{s.label}</p>
                <p className="mt-1 text-sm text-[#555555]">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebebeb] px-6 py-24 sm:px-10 lg:px-16 section-tint">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Technology foundation" title="Proven geospatial workflows meet modern AI" description="Our platform combines satellite remote sensing fundamentals with machine learning to detect subtle risk signals in continuous data streams." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {tech.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ...SPRING }}
                className="rounded-lg bg-white p-8 shadow-card card-hover">
                <h3 className="text-lg font-semibold text-[#171717]" style={{ letterSpacing: '-0.5px' }}>{t.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#666666]">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
