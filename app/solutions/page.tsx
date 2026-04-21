'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { AnimatedBg } from '../../components/AnimatedBg';

const SPRING = { ease: [0.16, 1, 0.3, 1] as const };

const signals = [
  {
    title: 'Ground deformation',
    description: 'Detect hidden movement beneath dams, bridges, roads and mine slopes before surface damage appears.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  },
  {
    title: 'Water & moisture anomalies',
    description: 'Capture changes in reservoir spread, seepage patterns and saturation that destabilize assets over time.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>,
  },
  {
    title: 'Terrain movement',
    description: 'Monitor subsidence, uplift and slope migration across broad geographic portfolios with repeat observations.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="3 20 21 20 12 4" /></svg>,
  },
  {
    title: 'Geospatial anomalies',
    description: 'Identify unexpected activity near critical corridors, pipelines and compound infrastructure zones.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 5a7 7 0 0 1 7 7" /><path d="M12 3a9 9 0 0 1 9 9" /><path d="M5 12a7 7 0 0 1 7-7" /></svg>,
  },
];

const useCases = [
  { label: 'Dams & reservoirs', detail: 'Continuous surveillance of reservoir slopes, foundations and spillways for early warning of structural compromise.', tag: 'Infrastructure' },
  { label: 'Roads & bridges', detail: 'Monitor foundation settlement, pier movement and deck deformation across transport networks.', tag: 'Infrastructure' },
  { label: 'Pipelines & corridors', detail: 'Detect ground movement, erosion and third-party interference along critical energy infrastructure.', tag: 'Infrastructure' },
  { label: 'Mining & industrial sites', detail: 'Track slope stability, tailings pond integrity and ground subsidence at high-value extraction sites.', tag: 'Industrial' },
  { label: 'Insurance underwriting', detail: 'Data-driven risk assessment for property, casualty and specialty insurance portfolios at scale.', tag: 'Insurance' },
  { label: 'Forensic asset review', detail: 'Satellite-derived displacement history and anomaly context for claims, litigation and settlement.', tag: 'Insurance' },
];

const detections = [
  { label: 'Ground deformation', lat: '47.23°N', lon: '8.45°E', severity: 'critical', dot: '#a84030', x: '55%', y: '32%' },
  { label: 'Moisture anomaly', lat: '45.77°N', lon: '4.83°E', severity: 'elevated', dot: '#b45f23', x: '28%', y: '58%' },
  { label: 'Slope stable', lat: '46.95°N', lon: '7.44°E', severity: 'stable', dot: '#507837', x: '67%', y: '62%' },
  { label: 'Pipeline shift', lat: '48.13°N', lon: '11.57°E', severity: 'elevated', dot: '#b45f23', x: '78%', y: '40%' },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">

      {/* ── Hero ── */}
      <section className="relative px-6 pt-20 pb-24 sm:px-10 lg:px-16 overflow-hidden">
        <AnimatedBg />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Left: copy */}
            <div>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ...SPRING }} className="eyebrow mb-5">Solutions</motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.07, ...SPRING }}
                className="max-w-xl text-5xl font-semibold text-[#171717] sm:text-6xl"
                style={{ letterSpacing: '-2.4px', lineHeight: '1.04' }}
              >
                Mission-critical use cases for the world's most exposed assets
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14, ...SPRING }} className="mt-6 max-w-lg text-lg leading-8 text-[#666666]">
                The platform is designed for the most consequential assets where early risk detection is the difference between prevention and catastrophe.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22, ...SPRING }} className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors">Request demo</a>
                <a href="/platform" className="rounded-[6px] px-6 py-3 text-sm font-medium text-[#171717] hover:bg-[#fafafa] transition-colors" style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}>Explore the platform</a>
              </motion.div>

              {/* Mobile visual strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32, ...SPRING }}
                className="mt-8 lg:hidden rounded-xl overflow-hidden shadow-card"
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#ebebeb]">
                  <p className="eyebrow">Signal coverage</p>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" style={{ width: 5, height: 5 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>4 ACTIVE</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-[#ebebeb]">
                  {[
                    { value: '4', label: 'Signal types' },
                    { value: '6+', label: 'Use cases' },
                    { value: 'Global', label: 'Coverage' },
                  ].map((s) => (
                    <div key={s.label} className="py-5 text-center">
                      <p className="font-mono text-base font-medium text-[#171717]">{s.value}</p>
                      <p className="text-[10px] text-[#808080] mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Radar detection panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ...SPRING }}
              className="hidden lg:block"
            >
              <div className="rounded-xl overflow-hidden shadow-card">
                <div className="px-5 py-3.5 border-b border-[#ebebeb] flex items-center justify-between">
                  <p className="eyebrow">Signal detection</p>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>4 ACTIVE</span>
                  </div>
                </div>

                {/* Radar visualization */}
                <div className="relative overflow-hidden" style={{ height: 240 }}>

                  {/* Terrain image */}
                  <img src="/solutions-image.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />

                  {/* Darkening overlay so dots remain legible */}
                  <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />

                  {/* Coordinate grid */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240" fill="none">
                    {[0, 80, 160, 240, 320, 400].map((x) => (
                      <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    ))}
                    {[0, 60, 120, 180, 240].map((y) => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    ))}
                  </svg>

                  {/* Vignette edges */}
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)' }} />

                  {/* Detection points */}
                  {detections.map((d, i) => (
                    <motion.div
                      key={d.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 200 }}
                      className="absolute"
                      style={{ left: d.x, top: d.y, transform: 'translate(-50%, -50%)' }}
                    >
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: d.dot, boxShadow: `0 0 6px ${d.dot}` }} />
                      {/* Pulse ring */}
                      <div style={{
                        position: 'absolute', inset: -6, borderRadius: '50%',
                        border: `1px solid ${d.dot}`,
                        animation: 'radar-ping 2.5s ease-out infinite',
                        animationDelay: `${i * 0.4}s`,
                      }} />
                    </motion.div>
                  ))}
                  <div className="absolute bottom-2 left-3" style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                    SAR coverage · 46°–49°N / 4°–12°E
                  </div>
                </div>

                {/* Detection list */}
                <div className="divide-y divide-[#ebebeb]">
                  {detections.map((d, i) => (
                    <motion.div
                      key={d.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, ...SPRING, duration: 0.4 }}
                      className="flex items-center gap-3 px-5 py-2.5"
                    >
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: d.dot, flexShrink: 0 }} />
                      <span className="text-xs font-medium text-[#171717] flex-1">{d.label}</span>
                      <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#808080' }}>{d.lat} {d.lon}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebebeb] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What VIGIL-EARTH sees" title="The risk signals beneath the surface" description="We map hidden instability around critical assets using proven satellite and geospatial data techniques — not opinion." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {signals.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09, ...SPRING }}
                className="rounded-lg bg-white p-6 shadow-card card-hover">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#fafafa] text-[#4d4d4d]">{item.icon}</div>
                <h3 className="text-[15px] font-semibold text-[#171717]" style={{ letterSpacing: '-0.4px' }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#666666]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ebebeb] bg-[#fafafa] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Use cases" title="Where VIGIL-EARTH is mission-critical" description="Deployed across industries where infrastructure failure carries the highest consequences." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07, ...SPRING }}
                className="rounded-lg bg-white p-6 shadow-card card-hover">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[15px] font-semibold text-[#171717]" style={{ letterSpacing: '-0.4px' }}>{item.label}</h3>
                  <span className="flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium bg-[#f0f0f0] text-[#4d4d4d]">{item.tag}</span>
                </div>
                <p className="text-sm leading-6 text-[#666666]">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#171717] bg-[#171717] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[#666666] font-medium">See it in action</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl" style={{ letterSpacing: '-1.28px' }}>Ready to discuss your specific monitoring needs?</h2>
            <p className="mt-3 text-base leading-7 text-[#808080]">Our risk intelligence experts will walk through relevant use cases for your portfolio.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#171717] hover:bg-[#ebebeb] transition-colors">Request demo</a>
            <a href="/platform" className="rounded-[6px] px-6 py-3 text-sm font-medium text-[#808080] hover:text-white transition-colors" style={{ boxShadow: 'rgba(255,255,255,0.1) 0px 0px 0px 1px' }}>Explore the platform</a>
          </div>
        </div>
      </section>

    </div>
  );
}
