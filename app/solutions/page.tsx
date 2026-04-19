'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';

const signals = [
  {
    title: 'Ground deformation',
    description: 'Detect hidden movement beneath dams, bridges, roads and mine slopes before surface damage appears.',
    accent: 'teal' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Water & moisture anomalies',
    description: 'Capture changes in reservoir spread, seepage patterns and saturation that destabilize assets over time.',
    accent: 'amber' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: 'Terrain movement',
    description: 'Monitor subsidence, uplift and slope migration across broad geographic portfolios with repeat observations.',
    accent: 'amber' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="3 20 21 20 12 4" />
      </svg>
    ),
  },
  {
    title: 'Geospatial anomalies',
    description: 'Identify unexpected activity near critical corridors, pipelines and compound infrastructure zones.',
    accent: 'teal' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5a7 7 0 0 1 7 7" />
        <path d="M12 3a9 9 0 0 1 9 9" />
        <path d="M5 12a7 7 0 0 1 7-7" />
      </svg>
    ),
  },
];

const useCases = [
  {
    label: 'Dams & reservoirs',
    detail: 'Continuous surveillance of reservoir slopes, foundations and spillways for early warning of structural compromise.',
    tag: 'Infrastructure',
  },
  {
    label: 'Roads & bridges',
    detail: 'Monitor foundation settlement, pier movement and deck deformation across transport networks.',
    tag: 'Infrastructure',
  },
  {
    label: 'Pipelines & corridors',
    detail: 'Detect ground movement, erosion and third-party interference along critical energy infrastructure.',
    tag: 'Infrastructure',
  },
  {
    label: 'Mining & industrial sites',
    detail: 'Track slope stability, tailings pond integrity and ground subsidence at high-value extraction sites.',
    tag: 'Industrial',
  },
  {
    label: 'Insurance underwriting',
    detail: 'Data-driven risk assessment for property, casualty and specialty insurance portfolios at scale.',
    tag: 'Insurance',
  },
  {
    label: 'Forensic asset review',
    detail: 'Satellite-derived displacement history and anomaly context for claims, litigation and settlement.',
    tag: 'Insurance',
  },
];

export default function Solutions() {
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
            Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl leading-[1.04]"
          >
            Mission-critical use cases for the world's most exposed assets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-8 text-neutral-500"
          >
            The platform is designed for the most consequential assets and events — where early risk detection is the difference between prevention and catastrophe.
          </motion.p>
        </div>
      </section>

      {/* ── What we see ────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What VIGIL-EARTH sees"
            title="The risk signals beneath the surface"
            description="We map hidden instability around critical assets using proven satellite and geospatial data techniques — not opinion."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {signals.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className={`rounded-lg border border-white/6 bg-[#0d1018] p-6 card-hover ${
                  item.accent === 'amber' ? 'accent-amber' : 'accent-teal'
                }`}
              >
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background: item.accent === 'amber' ? 'rgba(232,169,74,0.1)' : 'rgba(94,207,202,0.1)',
                    color: item.accent === 'amber' ? '#e8a94a' : '#5ecfca',
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ──────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Use cases"
            title="Where VIGIL-EARTH is mission-critical"
            description="Deployed across industries where infrastructure failure carries the highest consequences."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="rounded-lg border border-white/6 bg-[#0d1018] p-6 card-hover"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                  <span
                    className="flex-shrink-0 rounded px-2 py-0.5 text-[10px] font-mono tracking-wide"
                    style={{
                      background: item.tag === 'Insurance' ? 'rgba(232,169,74,0.1)' : 'rgba(94,207,202,0.08)',
                      color: item.tag === 'Insurance' ? '#e8a94a' : '#5ecfca',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm leading-6 text-neutral-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ──────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">See it in action</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Ready to discuss your specific monitoring needs?
              </h2>
              <p className="mt-3 text-base leading-7 text-neutral-500">
                Our risk intelligence experts will walk through relevant use cases for your portfolio.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-black hover:bg-primary-300 transition-colors"
              >
                Request demo
              </a>
              <a
                href="/platform"
                className="rounded-md border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 hover:border-white/20 hover:text-white transition-colors"
              >
                Explore the platform
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
