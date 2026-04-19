'use client';

import { motion } from 'framer-motion';
import { FeatureCard } from '../../components/FeatureCard';
import { SectionHeading } from '../../components/SectionHeading';

const pipeline = [
  {
    n: '01',
    title: 'Satellite ingestion',
    detail: 'Radar, optical and thermal imagery ingested across daily and weekly revisit cycles with enterprise security.',
  },
  {
    n: '02',
    title: 'Geospatial normalization',
    detail: 'Terrain, infrastructure and environmental data aligned into an asset-centric risk model.',
  },
  {
    n: '03',
    title: 'AI anomaly detection',
    detail: 'Subtle signals in deformation, moisture and operational change detected by trained ML models.',
  },
  {
    n: '04',
    title: 'Temporal risk modeling',
    detail: 'Signal trajectories converted into early warning and forensic-grade risk scores over time.',
  },
  {
    n: '05',
    title: 'Decision-ready output',
    detail: 'Alerts, dashboards and evidence packages delivered to insurers, operators and risk teams.',
  },
];

const features = [
  {
    title: 'Portfolio monitoring',
    description: 'Continuous consolidated risk view across every asset in the portfolio.',
  },
  {
    title: 'Alert engine',
    description: 'High-confidence signals calibrated specifically for critical infrastructure events.',
  },
  {
    title: 'Evidence layer',
    description: 'Time-series imagery, displacement charts and forensic context accessible on demand.',
  },
  {
    title: 'API & reporting',
    description: 'Integrate risk signals directly into underwriting and operations workflows.',
  },
];

const whyMetrics = [
  { value: '±2 mm', label: 'Ground displacement precision', note: 'Millimeter-scale accuracy from orbit' },
  { value: '6-day', label: 'Satellite revisit cycle', note: 'Continuous near real-time refresh' },
  { value: 'Full', label: 'Audit trail preserved', note: 'Forensic-grade imagery history' },
];

export default function Platform() {
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
            Platform
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl leading-[1.04]"
          >
            The output layer for risk teams and underwriting workflows
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-8 text-neutral-500"
          >
            Risk signals, portfolio intelligence, evidence packages and API access — purpose-built for operational decision-making on critical assets.
          </motion.p>
        </div>
      </section>

      {/* ── Pipeline ───────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title="A disciplined sequence from satellite to decision"
            description="Every signal is processed through proven geospatial workflows before it reaches your risk team."
          />

          <div className="mt-14 grid gap-px lg:grid-cols-5" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {pipeline.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-[#07090e] p-7 card-hover border border-transparent"
              >
                <p className="font-mono text-xs text-primary-400/50 mb-4">{item.n}</p>
                <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 text-neutral-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features + Dashboard mockup ────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Platform capabilities"
                title="Enterprise-grade risk intelligence tools"
                description="Built for continuous monitoring, claims verification and portfolio-level risk decisions."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <FeatureCard key={f.title} title={f.title} description={f.description} />
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-xl border border-white/8 overflow-hidden"
              style={{ background: '#090c14' }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-3 border-b border-white/6"
                style={{ background: 'rgba(0,0,0,0.4)' }}
              >
                <div>
                  <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#5ecfca', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Risk dashboard
                  </p>
                  <p className="text-base font-semibold text-white mt-0.5">Portfolio overview</p>
                </div>
                <div className="flex items-center gap-1.5 rounded px-2.5 py-1" style={{ background: 'rgba(94,207,202,0.1)', border: '1px solid rgba(94,207,202,0.2)' }}>
                  <span className="live-dot" style={{ width: 5, height: 5 }} />
                  <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#5ecfca' }}>LIVE</span>
                </div>
              </div>

              {/* Asset risk bars */}
              <div className="p-5 space-y-4">
                {[
                  { name: 'DAM-02 · Zurich', score: 78, color: '#ef4444' },
                  { name: 'BRIDGE-07 · Lyon', score: 54, color: '#e8a94a' },
                  { name: 'PIPE-14 · Munich', score: 31, color: '#5ecfca' },
                  { name: 'DAM-09 · Bern', score: 22, color: '#5ecfca' },
                ].map((asset) => (
                  <div key={asset.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#9ca3af' }}>{asset.name}</span>
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: asset.color }}>{asset.score}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${asset.score}%`, background: asset.color, opacity: 0.7 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/5" />

              {/* Recent alert */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="critical-dot" />
                  <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.1em', color: '#ef4444', textTransform: 'uppercase' }}>
                    Recent alert
                  </span>
                </div>
                <p className="text-sm font-medium text-white">Reservoir slope shift trending upward.</p>
                <p className="mt-1.5 text-xs leading-5 text-neutral-600">
                  Includes displacement map, confidence score and recommended inspection window.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Confidence', value: '94%' },
                    { label: 'Asset', value: 'DAM-02' },
                    { label: 'Signals', value: '7 this wk' },
                    { label: 'Vector', value: 'NE ↑2.8mm' },
                  ].map((d) => (
                    <div key={d.label} className="rounded p-2.5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p style={{ fontFamily: 'monospace', fontSize: 8, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{d.label}</p>
                      <p style={{ fontFamily: 'monospace', fontSize: 13, color: '#e2e4e9', marginTop: 2 }}>{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why it matters ─────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why it matters"
            title="Reduce uncertainty and act before failure is visible"
            description="This is not a generic monitoring tool. It is a decision support system built for operators and insurers managing high-value physical risk."
          />

          <div className="mt-14 grid gap-px lg:grid-cols-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {whyMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-[#07090e] p-10 card-hover border border-transparent"
              >
                <p className="font-mono text-4xl font-medium text-white">{m.value}</p>
                <p className="mt-3 text-sm font-medium text-neutral-300">{m.label}</p>
                <p className="mt-1.5 text-sm text-neutral-600">{m.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
