'use client';

import { motion } from 'framer-motion';
import { AnimatedBg } from '../../components/AnimatedBg';

const SPRING = { ease: [0.16, 1, 0.3, 1] as const };

const contactCards = [
  { title: 'Enterprise Solutions', body: 'For insurers, operators and infrastructure risk teams managing critical asset portfolios.', email: 'solutions@vigil-earth.com' },
  { title: 'Technical Support', body: 'Platform integration, API access and technical implementation support.', email: 'support@vigil-earth.com' },
  { title: 'Partnerships', body: 'Strategic partnerships, data sharing and joint solution development.', email: 'partnerships@vigil-earth.com' },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">

      {/* ── Hero ── */}
      <section className="relative px-6 pt-20 pb-16 sm:px-10 lg:px-16 overflow-hidden">
        <AnimatedBg />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Left: copy */}
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ...SPRING }} className="mb-5">
                <span className="badge-status">
                  <span className="live-dot" style={{ width: 5, height: 5 }} />
                  <span className="eyebrow" style={{ color: '#0060d6' }}>Contact</span>
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.07, ...SPRING }}
                className="max-w-xl text-[2.75rem] font-bold text-[#171717] sm:text-[4rem] lg:text-[5rem]"
                style={{ letterSpacing: '-3.2px', lineHeight: '0.96' }}
              >
                Partner with VIGIL-EARTH
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14, ...SPRING }} className="mt-5 max-w-lg text-lg leading-8 text-[#666666]">
                Turn satellite data into urgent, trusted intelligence for your most sensitive assets.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22, ...SPRING }} className="mt-8 flex flex-wrap gap-3">
                <a href="#form" className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors">Request enterprise demo</a>
              </motion.div>

              {/* Mobile visual strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32, ...SPRING }}
                className="mt-8 lg:hidden rounded-xl overflow-hidden shadow-card"
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#ebebeb]">
                  <p className="eyebrow">Team availability</p>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" style={{ width: 5, height: 5 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>ONLINE NOW</span>
                  </div>
                </div>
                <div className="divide-y divide-[#ebebeb]">
                  {contactCards.map((card) => (
                    <div key={card.title} className="flex items-center gap-3 px-4 py-3">
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00a63e', flexShrink: 0 }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#171717]">{card.title}</p>
                        <p className="text-[11px] text-[#808080] truncate">{card.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2.5 bg-[#fafafa] border-t border-[#ebebeb] flex items-center justify-between">
                  <p className="text-[10px] text-[#666666]">Typical response</p>
                  <p className="font-mono text-xs font-medium text-[#171717]">&lt; 24 hours</p>
                </div>
              </motion.div>
            </div>

            {/* Right: team status panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ...SPRING }}
              className="hidden lg:block"
            >
              <div className="rounded-xl overflow-hidden shadow-card">
                <div className="px-5 py-4 border-b border-[#ebebeb] flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#171717]" style={{ letterSpacing: '-0.3px' }}>Team availability</p>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#00a63e' }}>ONLINE NOW</span>
                  </div>
                </div>
                <div className="divide-y divide-[#ebebeb]">
                  {contactCards.map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + i * 0.12, duration: 0.5, ...SPRING }}
                      className="flex items-start gap-3 px-5 py-4"
                    >
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00a63e', flexShrink: 0, marginTop: 4 }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#171717]" style={{ letterSpacing: '-0.3px' }}>{card.title}</p>
                        <p className="text-[11px] text-[#808080] mt-0.5">{card.email}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="px-5 py-4 bg-[#fafafa] border-t border-[#ebebeb]">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#666666]">Typical response time</p>
                    <p className="font-mono text-sm font-medium text-[#171717]">&lt; 24 hours</p>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-[#ebebeb] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-[#00a63e]"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="mt-1 text-[10px] text-[#808080]">Response satisfaction rate: 85%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="form" className="border-t border-[#ebebeb] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">

            <div>
              <div className="mb-8">
                <p className="eyebrow mb-4">Request enterprise demo</p>
                <h2 className="text-2xl font-semibold text-[#171717]" style={{ letterSpacing: '-1.28px' }}>Talk to our risk intelligence team</h2>
                <p className="mt-3 text-sm leading-6 text-[#666666]">Connect with our team to discuss your specific monitoring needs and see VIGIL-EARTH in action.</p>
              </div>

              <motion.form initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { id: 'firstName', label: 'First name', type: 'text', placeholder: 'John' },
                    { id: 'lastName', label: 'Last name', type: 'text', placeholder: 'Smith' },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-xs font-medium text-[#4d4d4d] mb-2">{f.label}</label>
                      <input type={f.type} id={f.id} name={f.id} placeholder={f.placeholder}
                        className="block w-full rounded-[6px] bg-white px-4 py-3 text-sm text-[#171717] placeholder-[#808080] focus:outline-none transition-shadow"
                        style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}
                        onFocus={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 2px rgba(0,114,245,0.3), rgb(235,235,235) 0px 0px 0px 1px'}
                        onBlur={(e) => e.currentTarget.style.boxShadow = 'rgb(235,235,235) 0px 0px 0px 1px'}
                      />
                    </div>
                  ))}
                </div>

                {[
                  { id: 'email', label: 'Work email', type: 'email', placeholder: 'john.smith@company.com' },
                  { id: 'company', label: 'Company', type: 'text', placeholder: 'Insurance Corp' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-xs font-medium text-[#4d4d4d] mb-2">{f.label}</label>
                    <input type={f.type} id={f.id} name={f.id} placeholder={f.placeholder}
                      className="block w-full rounded-[6px] bg-white px-4 py-3 text-sm text-[#171717] placeholder-[#808080] focus:outline-none transition-shadow"
                      style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}
                      onFocus={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 2px rgba(0,114,245,0.3), rgb(235,235,235) 0px 0px 0px 1px'}
                      onBlur={(e) => e.currentTarget.style.boxShadow = 'rgb(235,235,235) 0px 0px 0px 1px'}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="role" className="block text-xs font-medium text-[#4d4d4d] mb-2">Role</label>
                  <select id="role" name="role" className="block w-full rounded-[6px] bg-white px-4 py-3 text-sm text-[#171717] focus:outline-none transition-shadow" style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}>
                    <option value="">Select your role</option>
                    <option value="risk-manager">Risk Manager</option>
                    <option value="underwriter">Underwriter</option>
                    <option value="operations">Operations Manager</option>
                    <option value="executive">Executive</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#4d4d4d] mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your monitoring needs..."
                    className="block w-full rounded-[6px] bg-white px-4 py-3 text-sm text-[#171717] placeholder-[#808080] focus:outline-none transition-shadow resize-none"
                    style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0px 0px 0px 2px rgba(0,114,245,0.3), rgb(235,235,235) 0px 0px 0px 1px'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'rgb(235,235,235) 0px 0px 0px 1px'}
                  />
                </div>

                <button type="submit" className="w-full rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors">
                  Request enterprise demo
                </button>
              </motion.form>
            </div>

            <div>
              <div className="mb-8">
                <p className="eyebrow mb-4">Contact channels</p>
                <h2 className="text-2xl font-semibold text-[#171717]" style={{ letterSpacing: '-1.28px' }}>Reach the right team</h2>
              </div>
              <div className="space-y-4">
                {contactCards.map((card, i) => (
                  <motion.div key={card.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ...SPRING }}
                    className="rounded-lg bg-white p-6 shadow-card card-hover">
                    <h3 className="text-[15px] font-semibold text-[#171717]" style={{ letterSpacing: '-0.4px' }}>{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#666666]">{card.body}</p>
                    <a href={`mailto:${card.email}`} className="mt-4 block text-sm text-[#0072f5] hover:text-[#0057cc] transition-colors">{card.email}</a>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-lg bg-[#fafafa] p-5" style={{ boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px' }}>
                <span className="live-dot mt-1" />
                <div>
                  <p className="text-sm font-semibold text-[#171717]" style={{ letterSpacing: '-0.3px' }}>Typical response within 24 hours</p>
                  <p className="mt-1 text-xs text-[#808080]">For urgent infrastructure risk situations, contact solutions@vigil-earth.com directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
