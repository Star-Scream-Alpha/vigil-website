'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';

const pillars = [
  {
    n: '01',
    title: 'Satellite-first approach',
    body: 'Multi-source global data ingestion with enterprise security — no site visits, no manual surveys.',
  },
  {
    n: '02',
    title: 'AI-powered detection',
    body: 'Machine learning algorithms trained on geospatial risk patterns to surface signals humans cannot see.',
  },
  {
    n: '03',
    title: 'Evidence-grade output',
    body: 'Forensic-quality data accepted for underwriting decisions, claims validation and regulatory review.',
  },
];

const stats = [
  { value: '±2 mm', label: 'Ground displacement precision', sub: 'Millimeter-scale from orbit' },
  { value: '>98%', label: 'Detection accuracy', sub: 'Across validated test sites' },
  { value: '6 days', label: 'Satellite revisit cycle', sub: 'Near real-time signal refresh' },
  { value: '100+', label: 'Asset types monitored', sub: 'Dams, bridges, pipelines, mines' },
];

const tech = [
  {
    title: 'SAR Interferometry',
    body: 'Synthetic Aperture Radar measures ground displacement with millimeter precision across vast areas and through cloud cover.',
  },
  {
    title: 'Geospatial AI',
    body: 'Machine learning models identify anomalous patterns in terrain behavior, moisture and infrastructure response.',
  },
  {
    title: 'Temporal Analysis',
    body: 'Time-series processing reveals displacement trends and trajectories indicating emerging risk conditions weeks before visibility.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-5"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl leading-[1.04]"
          >
            Built for teams managing consequential infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-8 text-neutral-500"
          >
            VIGIL-EARTH is engineered to support continuous monitoring, claims verification and portfolio-level risk decisions on the world's most exposed assets.
          </motion.p>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Our mission"
                title="Truth in physical asset risk"
                description="We exist to eliminate uncertainty in infrastructure risk assessment through satellite intelligence and geospatial AI."
              />
              <p className="text-base leading-7 text-neutral-500">
                Traditional risk assessment relies on periodic inspections, historical data and expert judgment. VIGIL-EARTH provides continuous, data-driven insight that sees what the human eye cannot detect — before failure becomes visible.
              </p>
            </div>

            <div className="space-y-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09 }}
                  className="flex gap-5 rounded-lg border border-white/6 bg-[#0d1018] p-6 card-hover"
                >
                  <p className="font-mono text-xs text-primary-400/50 mt-0.5 flex-shrink-0">{p.n}</p>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-neutral-500">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16" style={{ background: '#0d1018' }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="eyebrow mb-4">By the numbers</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Proven at enterprise scale
            </h2>
          </div>

          <div className="grid gap-px sm:grid-cols-2 xl:grid-cols-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-[#0d1018] p-10 card-hover border border-transparent"
              >
                <p className="font-mono text-4xl font-medium text-white">{s.value}</p>
                <p className="mt-3 text-sm font-medium text-neutral-300">{s.label}</p>
                <p className="mt-1 text-sm text-neutral-600">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ─────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technology foundation"
            title="Proven geospatial workflows meet modern AI"
            description="Our platform combines satellite remote sensing fundamentals with machine learning to detect subtle risk signals in continuous data streams."
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {tech.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="rounded-lg border border-white/6 bg-[#0d1018] p-8 card-hover accent-teal"
              >
                <h3 className="text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-500">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
