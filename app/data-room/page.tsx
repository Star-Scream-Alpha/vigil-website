'use client';

import { motion } from 'framer-motion';

const SPRING = { ease: [0.16, 1, 0.3, 1] as const };

const tiers = [
  {
    name: 'Observer',
    price: 'Free',
    desc: 'Public summaries and aggregate performance data.',
    items: ['Quarterly platform summaries', 'Aggregate detection metrics', 'Public case study excerpts'],
    cta: 'Current access',
    current: true,
  },
  {
    name: 'Analyst',
    price: '$2,400 / yr',
    desc: 'Full detection datasets, annotated incident timelines and technical methodology.',
    items: [
      'Complete detection datasets (all asset classes)',
      'Incident timelines with satellite evidence',
      'Technical methodology & model validation',
      'Benchmark comparisons vs. traditional methods',
      'Quarterly briefing calls',
    ],
    cta: 'Request access',
    current: false,
  },
  {
    name: 'Institutional',
    price: 'By arrangement',
    desc: 'Everything in Analyst, plus raw data exports, API access and dedicated coverage.',
    items: [
      'All Analyst tier access',
      'Raw SAR / optical data exports',
      'Custom asset monitoring requests',
      'API access for portfolio integration',
      'Dedicated analyst coverage',
      'Executive briefings on demand',
    ],
    cta: 'Contact us',
    current: false,
    top: true,
  },
];

const signals = [
  { label: 'SAR displacement stacks', locked: true },
  { label: 'InSAR coherence maps (12-month rolling)', locked: true },
  { label: 'Anomaly confidence scoring per asset', locked: true },
  { label: 'Subsidence velocity fields', locked: true },
  { label: 'Incident-linked evidence packages', locked: true },
  { label: 'Model validation reports', locked: true },
  { label: 'Comparative failure case archive', locked: true },
  { label: 'Platform detection log — full history', locked: true },
];

const stats = [
  { value: '126', label: 'Intelligence reports' },
  { value: '48+', label: 'Asset classes' },
  { value: '6 days', label: 'Satellite refresh' },
  { value: '±2 mm', label: 'Displacement precision' },
];

export default function DataRoom() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#000000' }}>

      {/* Subtle grid bg */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orb */}
      <div className="pointer-events-none fixed z-0" style={{
        width: 900, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse at center, rgba(0,114,245,0.07) 0%, transparent 65%)',
        filter: 'blur(60px)',
      }} />

      <div className="relative z-10">

        {/* ── Hero ── */}
        <section className="px-6 pt-28 pb-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ...SPRING }}
              className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#aaaaaa', letterSpacing: '0.04em' }}
            >
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ef4444', display: 'inline-block', flexShrink: 0 }} />
              RESTRICTED ACCESS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ...SPRING }}
              className="text-[3rem] font-bold sm:text-[4.5rem] lg:text-[6rem]"
              style={{ letterSpacing: '-4px', lineHeight: '0.93', color: '#ffffff' }}
            >
              The intelligence<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>everyone else is missing.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ...SPRING }}
              className="mt-8 max-w-2xl text-lg leading-8"
              style={{ color: '#b0b0b0' }}
            >
              While most investors are still waiting on manual surveys and quarterly reports,
              our subscribers are acting on satellite-derived signals updated every six days —
              across 48+ asset classes, globally.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ...SPRING }}
              className="mt-4 max-w-xl text-base leading-7"
              style={{ color: '#999999' }}
            >
              The data room is not a product brochure. It is raw evidence — displacement stacks,
              anomaly logs, incident timelines and model validation records — the kind of material
              that changes how you price risk, underwrite assets, and make irreversible capital decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ...SPRING }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a href="/contact"
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-black transition-all"
                style={{ background: '#ffffff' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e0e0e0'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
              >
                Request institutional access
              </a>
              <a href="mailto:solutions@vigil-earth.com"
                className="rounded-[6px] px-7 py-3.5 text-sm font-medium transition-colors"
                style={{ color: '#aaaaaa', boxShadow: 'rgba(255,255,255,0.15) 0px 0px 0px 1px' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#aaaaaa'}
              >
                Email directly →
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div className="px-6 py-10 sm:px-10 lg:px-16" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
          <div className="mx-auto max-w-5xl grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.5, ...SPRING }}
              >
                <p className="font-mono text-3xl font-medium text-white" style={{ letterSpacing: '-1px' }}>{s.value}</p>
                <p className="mt-1.5 text-sm" style={{ color: '#888888' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Locked signals ── */}
        <section className="px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: '#777777' }}>What subscribers see</p>
              <h2 className="text-3xl font-semibold sm:text-4xl" style={{ letterSpacing: '-1.6px', lineHeight: '1.08' }}>
                Datasets not available anywhere else.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7" style={{ color: '#999999' }}>
                These are not summaries. These are the raw signals — the same data our platform
                uses to flag critical risk before it becomes visible on the ground.
              </p>
            </div>

            <div className="grid gap-px sm:grid-cols-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
              {signals.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4, ...SPRING }}
                  className="flex items-center gap-4 px-6 py-5"
                  style={{ background: '#0a0a0a' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-sm" style={{ color: '#c0c0c0' }}>{s.label}</span>
                  <span className="ml-auto font-mono text-[9px] rounded px-1.5 py-0.5" style={{ color: '#884444', background: 'rgba(180,50,50,0.12)', border: '1px solid rgba(180,50,50,0.2)' }}>LOCKED</span>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm" style={{ color: '#777777' }}>
              Analyst and Institutional subscribers have full access to all of the above, updated continuously.
            </p>
          </div>
        </section>

        {/* ── Tiers ── */}
        <section className="px-6 pb-28 sm:px-10 lg:px-16" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mx-auto max-w-5xl pt-24">
            <div className="mb-14">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: '#777777' }}>Access tiers</p>
              <h2 className="text-3xl font-semibold sm:text-4xl" style={{ letterSpacing: '-1.6px', lineHeight: '1.08' }}>
                You decide how much you see.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7" style={{ color: '#999999' }}>
                The gap between what free users know and what Institutional subscribers know
                is the gap between reacting and being ahead.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5, ...SPRING }}
                  className="flex flex-col rounded-xl p-7"
                  style={{
                    background: tier.top ? 'rgba(0,114,245,0.06)' : 'rgba(255,255,255,0.03)',
                    border: tier.top ? '1px solid rgba(0,114,245,0.2)' : '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {tier.top && (
                    <div className="mb-4 inline-flex self-start rounded-full px-2.5 py-1 text-[10px] font-medium"
                      style={{ background: 'rgba(0,114,245,0.15)', color: '#4d9fff', border: '1px solid rgba(0,114,245,0.25)' }}>
                      Most complete
                    </div>
                  )}
                  <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#777777' }}>{tier.name}</p>
                  <p className="mt-2 text-2xl font-semibold text-white" style={{ letterSpacing: '-0.8px' }}>{tier.price}</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: '#999999' }}>{tier.desc}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: tier.current ? '#777777' : '#b0b0b0' }}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="mt-0.5 flex-shrink-0"
                          stroke={tier.current ? '#555555' : '#888888'} strokeWidth="1.4" strokeLinecap="round">
                          <polyline points="2 7 5 10 11 3" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {tier.current ? (
                      <div className="rounded-[6px] px-5 py-3 text-sm font-medium text-center" style={{ color: '#555555', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {tier.cta}
                      </div>
                    ) : (
                      <a href="/contact"
                        className="block rounded-full px-5 py-3 text-sm font-semibold text-center transition-all"
                        style={{ background: tier.top ? '#ffffff' : 'rgba(255,255,255,0.08)', color: tier.top ? '#000000' : '#cccccc', border: tier.top ? 'none' : '1px solid rgba(255,255,255,0.1)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = tier.top ? '#e0e0e0' : 'rgba(255,255,255,0.14)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = tier.top ? '#ffffff' : 'rgba(255,255,255,0.08)'; }}
                      >
                        {tier.cta} →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="px-6 py-28 sm:px-10 lg:px-16" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, ...SPRING }}
              className="mb-6 font-mono text-[11px] uppercase tracking-[0.1em]"
              style={{ color: '#666666' }}
            >
              The data is updating right now
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.07, ...SPRING }}
              className="text-4xl font-bold sm:text-5xl"
              style={{ letterSpacing: '-2.5px', lineHeight: '1', color: '#ffffff' }}
            >
              The longer you wait,<br />
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>the more you've already missed.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15, ...SPRING }}
              className="mt-6 text-base leading-7"
              style={{ color: '#999999' }}
            >
              Infrastructure risk doesn't wait for you to get around to reviewing it.
              Neither does the data.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.22, ...SPRING }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <a href="/contact"
                className="rounded-full px-8 py-4 text-sm font-semibold text-black transition-all"
                style={{ background: '#ffffff' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e0e0e0'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
              >
                Request access now
              </a>
              <a href="/reports"
                className="text-sm transition-colors"
                style={{ color: '#666666' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#aaaaaa'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
              >
                ← Back to public reports
              </a>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
