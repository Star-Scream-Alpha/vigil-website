'use client';

import { motion } from 'framer-motion';

// ── ADD NEW REPORTS HERE ────────────────────────────────────────────────────
// To add a report: copy one of the objects below and fill in the details.
// Set status to 'available' to show a download/view link, or 'coming-soon'
// to show a greyed-out placeholder. Set access to 'public' or 'private'.
// ───────────────────────────────────────────────────────────────────────────

const reports: Report[] = [
  // Example — replace or delete this block and add your real reports below
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

const typeColors: Record<ReportType, { bg: string; text: string }> = {
  Quarterly: { bg: 'rgba(94,207,202,0.08)', text: '#5ecfca' },
  Annual: { bg: 'rgba(94,207,202,0.12)', text: '#5ecfca' },
  Technical: { bg: 'rgba(255,255,255,0.05)', text: '#9ca3af' },
  'Case Study': { bg: 'rgba(232,169,74,0.08)', text: '#e8a94a' },
  Whitepaper: { bg: 'rgba(255,255,255,0.05)', text: '#9ca3af' },
};

function ReportCard({ report, index }: { report: Report; index: number }) {
  const typeStyle = typeColors[report.type];
  const isAvailable = report.status === 'available';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`rounded-lg border bg-[#0d1018] p-6 ${isAvailable ? 'border-white/8 card-hover accent-teal' : 'border-white/4'}`}
      style={{ opacity: isAvailable ? 1 : 0.55 }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="rounded px-2 py-0.5 text-[10px] font-mono tracking-wide"
            style={{ background: typeStyle.bg, color: typeStyle.text }}
          >
            {report.type}
          </span>
          {report.access === 'private' && (
            <span className="rounded px-2 py-0.5 text-[10px] font-mono tracking-wide" style={{ background: 'rgba(239,68,68,0.08)', color: '#ef4444' }}>
              Private
            </span>
          )}
          {!isAvailable && (
            <span className="rounded px-2 py-0.5 text-[10px] font-mono tracking-wide" style={{ background: 'rgba(255,255,255,0.04)', color: '#4b5563' }}>
              Coming soon
            </span>
          )}
        </div>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: '#4b5563', flexShrink: 0 }}>{report.date}</p>
      </div>

      <h3 className="text-base font-semibold text-white leading-snug">{report.title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-500">{report.description}</p>

      <div className="mt-5">
        {isAvailable ? (
          <a
            href={report.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            {report.access === 'private' ? 'Request access' : 'View report'}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </a>
        ) : (
          <span className="text-sm text-neutral-700">Available soon</span>
        )}
      </div>
    </motion.div>
  );
}

export default function Reports() {
  const available = reports.filter((r) => r.status === 'available');
  const upcoming = reports.filter((r) => r.status === 'coming-soon');

  return (
    <div className="min-h-screen bg-[#07090e] text-white">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-5"
          >
            Investor Reports
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl leading-[1.04]"
          >
            Outcomes, evidence and performance data
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-8 text-neutral-500"
          >
            Transparent reporting on VIGIL-EARTH platform performance, detection outcomes and portfolio intelligence for investors and partners.
          </motion.p>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────── */}
      <div className="border-y border-white/5 px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: String(reports.length), label: 'Reports published' },
              { value: String(available.length), label: 'Available now' },
              { value: String(upcoming.length), label: 'Coming soon' },
              { value: '2026', label: 'Report cycle start' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-medium text-white">{s.value}</p>
                <p className="mt-1 text-sm text-neutral-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Available reports ──────────────────────────────── */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {available.length > 0 ? (
            <>
              <div className="mb-10">
                <p className="eyebrow mb-3">Available now</p>
                <h2 className="text-2xl font-semibold tracking-tight text-white">Published reports</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {available.map((r, i) => (
                  <ReportCard key={r.id} report={r} index={i} />
                ))}
              </div>
            </>
          ) : (
            /* Empty state */
            <div className="rounded-xl border border-white/5 bg-[#0d1018] px-10 py-20 text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/8 bg-[#111520]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(94,207,202,0.5)" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <p className="text-base font-semibold text-white">Reports coming soon</p>
              <p className="mt-2 text-sm text-neutral-600 max-w-sm mx-auto">
                Investor reports and performance outcomes will be published here. Check back or contact us to be notified on release.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-primary-300 transition-colors"
              >
                Get notified
              </a>
            </div>
          )}

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <div className="mt-16">
              <div className="mb-10">
                <p className="eyebrow mb-3">Upcoming</p>
                <h2 className="text-2xl font-semibold tracking-tight text-white">In preparation</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {upcoming.map((r, i) => (
                  <ReportCard key={r.id} report={r} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Private access CTA ─────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div
            className="rounded-xl border border-white/6 px-10 py-12"
            style={{ background: 'linear-gradient(135deg, #0d1018 0%, #0f1520 100%)' }}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', opacity: 0.8 }} />
                  <span className="eyebrow">Private access</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Detailed investor data room
                </h2>
                <p className="mt-3 text-base leading-7 text-neutral-500">
                  Qualified investors and partners can request access to detailed operational reports, detection datasets and due diligence materials.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-black hover:bg-primary-300 transition-colors text-center whitespace-nowrap"
                >
                  Request access
                </a>
                <a
                  href="mailto:solutions@vigil-earth.com"
                  className="rounded-md border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 hover:border-white/20 hover:text-white transition-colors text-center whitespace-nowrap"
                >
                  Email directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
