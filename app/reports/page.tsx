'use client';

import { motion } from 'framer-motion';
import { AnimatedBg } from '../../components/AnimatedBg';

const SPRING = { ease: [0.16, 1, 0.3, 1] as const };

// ── ADD NEW REPORTS HERE ────────────────────────────────────────────────────
// status: 'available' → shows a link | 'coming-soon' → greyed placeholder
// access: 'public' | 'private'
// type: 'Quarterly' | 'Annual' | 'Technical' | 'Case Study' | 'Whitepaper'
// ───────────────────────────────────────────────────────────────────────────

const reports: Report[] = [
  {
    id: 'sample-q1-2026',
    title: 'Q1 2026 Platform Performance Report',
    description: 'Operational metrics, anomaly detection rates and portfolio coverage across monitored infrastructure assets for Q1 2026.',
    date: 'April 2026',
    type: 'Quarterly',
    access: 'public',
    status: 'coming-soon',
    href: '#',
  },
];

// ───────────────────────────────────────────────────────────────────────────

type ReportType = 'Quarterly' | 'Annual' | 'Technical' | 'Case Study' | 'Whitepaper';
type ReportAccess = 'public' | 'private';
type ReportStatus = 'available' | 'coming-soon';

interface Report {
  id: string;
  title: string;
  description: string;
  date: string;
  type: ReportType;
  access: ReportAccess;
  status: ReportStatus;
  href: string;
}

const typeBadge: Record<ReportType, { bg: string; text: string }> = {
  Quarterly:    { bg: '#ebf5ff', text: '#0068d6' },
  Annual:       { bg: '#ebf5ff', text: '#0068d6' },
  Technical:    { bg: '#f0f0f0', text: '#4d4d4d' },
  'Case Study': { bg: '#f0f0f0', text: '#4d4d4d' },
  Whitepaper:   { bg: '#f0f0f0', text: '#4d4d4d' },
};

const perfMetrics = [
  { label: 'Detection accuracy', value: 98, color: '#00a63e' },
  { label: 'Alert confidence', value: 94, color: '#0072f5' },
  { label: 'Portfolio coverage', value: 87, color: '#808080' },
];

function ReportCard({ report, index }: { report: Report; index: number }) {
  const badge = typeBadge[report.type];
  const isAvailable = report.status === 'available';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ...SPRING }}
      className="rounded-lg bg-white p-6 shadow-card card-hover"
      style={{ opacity: isAvailable ? 1 : 0.65 }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ background: badge.bg, color: badge.text }}>{report.type}</span>
          {report.access === 'private' && (
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium bg-[#fff0f0] text-[#c00000]">Private</span>
          )}
          {!isAvailable && (
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium bg-[#f0f0f0] text-[#808080]">Coming soon</span>
          )}
        </div>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: '#808080', flexShrink: 0 }}>{report.date}</p>
      </div>
      <h3 className="text-base font-semibold text-[#171717] leading-snug" style={{ letterSpacing: '-0.4px' }}>{report.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#666666]">{report.description}</p>
      <div className="mt-5">
        {isAvailable ? (
          <a href={report.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#0072f5] hover:text-[#0057cc] transition-colors">
            {report.access === 'private' ? 'Request access' : 'View report'}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
          </a>
        ) : (
          <span className="text-sm text-[#808080]">Available soon</span>
        )}
      </div>
    </motion.div>
  );
}

export default function Reports() {
  const available = reports.filter((r) => r.status === 'available');
  const upcoming = reports.filter((r) => r.status === 'coming-soon');

  return (
    <div className="min-h-screen bg-white text-[#171717]">

      {/* ── Hero ── */}
      <section className="relative px-6 pt-20 pb-16 sm:px-10 lg:px-16 overflow-hidden">
        <AnimatedBg />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Left: copy */}
            <div>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ...SPRING }} className="eyebrow mb-5">Investor Reports</motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.07, ...SPRING }}
                className="max-w-xl text-5xl font-semibold text-[#171717] sm:text-6xl"
                style={{ letterSpacing: '-2.4px', lineHeight: '1.04' }}
              >
                Outcomes, evidence and performance data
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14, ...SPRING }} className="mt-6 max-w-lg text-lg leading-8 text-[#666666]">
                Transparent reporting on VIGIL-EARTH platform performance, detection outcomes and portfolio intelligence for investors and partners.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22, ...SPRING }} className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors">Request investor access</a>
              </motion.div>
            </div>

            {/* Right: performance dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ...SPRING }}
              className="hidden lg:block"
            >
              <div className="rounded-xl overflow-hidden shadow-card">
                <div className="px-5 py-4 border-b border-[#ebebeb] flex items-center justify-between">
                  <div>
                    <p className="eyebrow mb-0.5">Platform metrics</p>
                    <p className="text-sm font-semibold text-[#171717]" style={{ letterSpacing: '-0.3px' }}>2026 Performance</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>LIVE</span>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  {perfMetrics.map((m, i) => (
                    <div key={m.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs text-[#4d4d4d]">{m.label}</span>
                        <span className="font-mono text-xs font-medium text-[#171717]">{m.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#ebebeb] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: m.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${m.value}%` }}
                          transition={{ delay: 0.5 + i * 0.15, duration: 1.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Reports published', value: String(reports.length) },
                    { label: 'Report cycle', value: '2026' },
                    { label: 'Coverage', value: 'Global' },
                    { label: 'Asset types', value: '100+' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.08, ...SPRING, duration: 0.4 }}
                      className="rounded-lg bg-[#fafafa] p-3"
                      style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}
                    >
                      <p className="font-mono text-base font-medium text-[#171717]">{s.value}</p>
                      <p className="text-[10px] text-[#808080] mt-0.5 leading-4">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-[#ebebeb] bg-[#fafafa] px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: String(reports.length), label: 'Reports published' },
              { value: String(available.length), label: 'Available now' },
              { value: String(upcoming.length), label: 'Coming soon' },
              { value: '2026', label: 'Report cycle start' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-medium text-[#171717]">{s.value}</p>
                <p className="mt-1 text-sm text-[#808080]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {available.length > 0 ? (
            <>
              <div className="mb-10">
                <p className="eyebrow mb-3">Available now</p>
                <h2 className="text-2xl font-semibold text-[#171717]" style={{ letterSpacing: '-1.28px' }}>Published reports</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {available.map((r, i) => <ReportCard key={r.id} report={r} index={i} />)}
              </div>
            </>
          ) : (
            <div className="rounded-xl bg-[#fafafa] px-10 py-20 text-center" style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}>
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white" style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <p className="text-base font-semibold text-[#171717]" style={{ letterSpacing: '-0.32px' }}>Reports coming soon</p>
              <p className="mt-2 text-sm text-[#666666] max-w-sm mx-auto">Investor reports and performance outcomes will be published here. Contact us to be notified on release.</p>
              <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#333333] transition-colors">
                Get notified
              </a>
            </div>
          )}

          {upcoming.length > 0 && (
            <div className="mt-16">
              <div className="mb-10">
                <p className="eyebrow mb-3">Upcoming</p>
                <h2 className="text-2xl font-semibold text-[#171717]" style={{ letterSpacing: '-1.28px' }}>In preparation</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {upcoming.map((r, i) => <ReportCard key={r.id} report={r} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Private access CTA */}
      <section className="border-t border-[#ebebeb] bg-[#fafafa] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl bg-[#171717] px-10 py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="critical-dot" style={{ background: '#ef4444' }} />
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#666666] font-medium">Private access</p>
                </div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl" style={{ letterSpacing: '-1.28px' }}>Detailed investor data room</h2>
                <p className="mt-3 text-base leading-7 text-[#808080]">
                  Qualified investors and partners can request access to detailed operational reports, detection datasets and due diligence materials.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#171717] hover:bg-[#ebebeb] transition-colors text-center whitespace-nowrap">Request access</a>
                <a href="mailto:solutions@vigil-earth.com" className="rounded-[6px] px-6 py-3 text-sm font-medium text-[#808080] hover:text-white transition-colors text-center whitespace-nowrap" style={{ boxShadow: 'rgba(255,255,255,0.1) 0px 0px 0px 1px' }}>Email directly</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
