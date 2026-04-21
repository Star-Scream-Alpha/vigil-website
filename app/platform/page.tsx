'use client';

import { motion } from 'framer-motion';
import { FeatureCard } from '../../components/FeatureCard';
import { SectionHeading } from '../../components/SectionHeading';
import { AnimatedBg } from '../../components/AnimatedBg';

const SPRING = { ease: [0.16, 1, 0.3, 1] as const };

const pipeline = [
  { n: '01', title: 'Satellite ingestion', detail: 'Radar, optical and thermal imagery ingested across daily and weekly revisit cycles with enterprise security.' },
  { n: '02', title: 'Geospatial normalization', detail: 'Terrain, infrastructure and environmental data aligned into an asset-centric risk model.' },
  { n: '03', title: 'AI anomaly detection', detail: 'Subtle signals in deformation, moisture and operational change detected by trained ML models.' },
  { n: '04', title: 'Temporal risk modeling', detail: 'Signal trajectories converted into early warning and forensic-grade risk scores over time.' },
  { n: '05', title: 'Decision-ready output', detail: 'Alerts, dashboards and evidence packages delivered to insurers, operators and risk teams.' },
];

const pipelineStatuses = [
  { status: 'done', color: '#00a63e', icon: '✓' },
  { status: 'done', color: '#00a63e', icon: '✓' },
  { status: 'active', color: '#f59e0b', icon: '⟳' },
  { status: 'queued', color: 'rgba(255,255,255,0.18)', icon: '···' },
  { status: 'queued', color: 'rgba(255,255,255,0.18)', icon: '···' },
];

const features = [
  { title: 'Portfolio monitoring', description: 'Continuous consolidated risk view across every asset in the portfolio.' },
  { title: 'Alert engine', description: 'High-confidence signals calibrated specifically for critical infrastructure events.' },
  { title: 'Evidence layer', description: 'Time-series imagery, displacement charts and forensic context accessible on demand.' },
  { title: 'API & reporting', description: 'Integrate risk signals directly into underwriting and operations workflows.' },
];

const whyMetrics = [
  { value: '±2 mm', label: 'Ground displacement precision', note: 'Millimeter-scale accuracy from orbit' },
  { value: '6-day', label: 'Satellite revisit cycle', note: 'Continuous near real-time refresh' },
  { value: 'Full', label: 'Audit trail preserved', note: 'Forensic-grade imagery history' },
];

export default function Platform() {
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
                  <span className="eyebrow" style={{ color: '#0060d6' }}>Platform</span>
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.07, ...SPRING }}
                className="max-w-xl text-[2.75rem] font-bold text-[#171717] sm:text-[4rem] lg:text-[5rem]"
                style={{ letterSpacing: '-3.2px', lineHeight: '0.96' }}
              >
                The output layer for risk teams and underwriting workflows
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.14, ...SPRING }}
                className="mt-6 max-w-lg text-lg leading-8 text-[#666666]"
              >
                Risk signals, portfolio intelligence, evidence packages and API access — purpose-built for operational decision-making on critical assets.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ...SPRING }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="/contact" className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors">Request demo</a>
                <a href="#how-it-works" className="rounded-[6px] px-6 py-3 text-sm font-medium text-[#171717] hover:bg-[#fafafa] transition-colors" style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}>See how it works</a>
              </motion.div>

              {/* Mobile visual strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32, ...SPRING }}
                className="mt-8 lg:hidden rounded-xl overflow-hidden shadow-card"
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#ebebeb]">
                  <p className="eyebrow">Pipeline metrics</p>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" style={{ width: 5, height: 5 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>LIVE</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-[#ebebeb]">
                  {[
                    { value: '±2mm', label: 'Precision' },
                    { value: '6-day', label: 'Revisit' },
                    { value: '>98%', label: 'Accuracy' },
                  ].map((s) => (
                    <div key={s.label} className="py-5 text-center">
                      <p className="font-mono text-base font-medium text-[#171717]">{s.value}</p>
                      <p className="text-[10px] text-[#808080] mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: pipeline status panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ...SPRING }}
              className="hidden lg:block"
            >
              <div className="rounded-xl overflow-hidden" style={{ background: '#0a0a0a', boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 8px 24px' }}>
                <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between" style={{ background: 'rgba(0,0,0,0.5)' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Pipeline status</p>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" style={{ width: 5, height: 5, background: '#f59e0b' }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#f59e0b' }}>PROCESSING</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  {pipeline.map((step, i) => (
                    <motion.div
                      key={step.n}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ...SPRING }}
                      className="flex items-center gap-3"
                    >
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: pipelineStatuses[i].color, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.55)', flex: 1 }}>{step.title}</span>
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: pipelineStatuses[i].color }}>
                        {pipelineStatuses[i].icon}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
                  <p style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.18)' }}>Batch #1,847 · 2026-04-20</p>
                  <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>2/5 complete</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-24 sm:px-10 lg:px-16 grid-bg" style={{ background: '#0a0a0a' }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading dark eyebrow="How it works" title="A disciplined sequence from satellite to decision" description="Every signal is processed through proven geospatial workflows before it reaches your risk team." />
          <div className="mt-14 grid gap-px lg:grid-cols-5" style={{ background: '#1c1c1c' }}>
            {pipeline.map((item, i) => (
              <motion.div key={item.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ...SPRING }} className="p-7 card-hover" style={{ background: '#0f0f0f' }}>
                <p className="font-mono text-xs text-[#3a3a3a] mb-4">{item.n}</p>
                <h3 className="text-[15px] font-semibold text-white leading-snug" style={{ letterSpacing: '-0.4px' }}>{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#555555]">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebebeb] px-6 py-24 sm:px-10 lg:px-16 section-tint">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <SectionHeading eyebrow="Platform capabilities" title="Enterprise-grade risk intelligence tools" description="Built for continuous monitoring, claims verification and portfolio-level risk decisions." />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {features.map((f) => <FeatureCard key={f.title} title={f.title} description={f.description} />)}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="rounded-xl overflow-hidden" style={{ background: '#0a0a0a', boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 8px 24px' }}>
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5" style={{ background: 'rgba(0,0,0,0.5)' }}>
                <div>
                  <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Risk dashboard</p>
                  <p className="text-base font-semibold text-white mt-0.5" style={{ letterSpacing: '-0.5px' }}>Portfolio overview</p>
                </div>
                <div className="flex items-center gap-1.5 rounded px-2.5 py-1" style={{ background: 'rgba(0,166,62,0.12)', border: '1px solid rgba(0,166,62,0.2)' }}>
                  <span className="live-dot" style={{ width: 5, height: 5, background: '#00a63e' }} />
                  <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>LIVE</span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                {[
                  { name: 'DAM-02 · Zurich', score: 78, color: '#a84030' },
                  { name: 'BRIDGE-07 · Lyon', score: 54, color: '#b45f23' },
                  { name: 'PIPE-14 · Munich', score: 31, color: '#507837' },
                  { name: 'DAM-09 · Bern', score: 22, color: '#507837' },
                ].map((asset) => (
                  <div key={asset.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{asset.name}</span>
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: asset.color }}>{asset.score}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <motion.div className="h-full rounded-full" style={{ background: asset.color, opacity: 0.75 }} initial={{ width: 0 }} whileInView={{ width: `${asset.score}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/5" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="critical-dot" style={{ background: '#a84030' }} />
                  <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.1em', color: '#a84030', textTransform: 'uppercase' }}>Recent alert</span>
                </div>
                <p className="text-sm font-semibold text-white" style={{ letterSpacing: '-0.3px' }}>Reservoir slope shift trending upward.</p>
                <p className="mt-1.5 text-xs leading-5 text-[#4d4d4d]">Includes displacement map, confidence score and recommended inspection window.</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[{ label: 'Confidence', value: '94%' }, { label: 'Asset', value: 'DAM-02' }, { label: 'Signals', value: '7 this wk' }, { label: 'Vector', value: 'NE ↑2.8mm' }].map((d) => (
                    <div key={d.label} className="rounded p-2.5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{d.label}</p>
                      <p style={{ fontFamily: 'monospace', fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebebeb] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why it matters" title="Reduce uncertainty and act before failure is visible" description="This is not a generic monitoring tool. It is a decision support system built for operators and insurers managing high-value physical risk." />
          <div className="mt-14 grid gap-px lg:grid-cols-3" style={{ background: '#ebebeb' }}>
            {whyMetrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ...SPRING }} className="bg-white p-10 card-hover">
                <p className="font-mono text-4xl font-medium text-[#171717]">{m.value}</p>
                <p className="mt-3 text-sm font-semibold text-[#171717]" style={{ letterSpacing: '-0.3px' }}>{m.label}</p>
                <p className="mt-1.5 text-sm text-[#808080]">{m.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
