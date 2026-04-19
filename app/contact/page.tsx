'use client';

import { motion } from 'framer-motion';

const contactCards = [
  {
    title: 'Enterprise Solutions',
    body: 'For insurers, operators and infrastructure risk teams managing critical asset portfolios.',
    email: 'solutions@vigil-earth.com',
  },
  {
    title: 'Technical Support',
    body: 'Platform integration, API access and technical implementation support.',
    email: 'support@vigil-earth.com',
  },
  {
    title: 'Partnerships',
    body: 'Strategic partnerships, data sharing and joint solution development.',
    email: 'partnerships@vigil-earth.com',
  },
];

export default function Contact() {
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
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="max-w-2xl text-5xl font-bold tracking-tight text-white sm:text-6xl leading-[1.04]"
          >
            Partner with VIGIL-EARTH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-lg text-lg leading-8 text-neutral-500"
          >
            Turn satellite data into urgent, trusted intelligence for your most sensitive assets.
          </motion.p>
        </div>
      </section>

      {/* ── Main contact section ───────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* Left: form */}
            <div>
              <div className="mb-8">
                <p className="eyebrow mb-4">Request enterprise demo</p>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Talk to our risk intelligence team
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Connect with our team to discuss your specific monitoring needs and see VIGIL-EARTH in action.
                </p>
              </div>

              <motion.form
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { id: 'firstName', label: 'First name', type: 'text', placeholder: 'John' },
                    { id: 'lastName', label: 'Last name', type: 'text', placeholder: 'Smith' },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-xs font-medium text-neutral-400 mb-2">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        id={f.id}
                        name={f.id}
                        placeholder={f.placeholder}
                        className="block w-full rounded-lg border border-white/8 bg-[#0d1018] px-4 py-3 text-sm text-white placeholder-neutral-700 focus:border-primary-400/40 focus:outline-none focus:ring-1 focus:ring-primary-400/30 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.smith@company.com"
                    className="block w-full rounded-lg border border-white/8 bg-[#0d1018] px-4 py-3 text-sm text-white placeholder-neutral-700 focus:border-primary-400/40 focus:outline-none focus:ring-1 focus:ring-primary-400/30 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-neutral-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Insurance Corp"
                    className="block w-full rounded-lg border border-white/8 bg-[#0d1018] px-4 py-3 text-sm text-white placeholder-neutral-700 focus:border-primary-400/40 focus:outline-none focus:ring-1 focus:ring-primary-400/30 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-xs font-medium text-neutral-400 mb-2">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="block w-full rounded-lg border border-white/8 bg-[#0d1018] px-4 py-3 text-sm text-white focus:border-primary-400/40 focus:outline-none focus:ring-1 focus:ring-primary-400/30 transition-colors"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-[#0d1018]">Select your role</option>
                    <option value="risk-manager" className="bg-[#0d1018]">Risk Manager</option>
                    <option value="underwriter" className="bg-[#0d1018]">Underwriter</option>
                    <option value="operations" className="bg-[#0d1018]">Operations Manager</option>
                    <option value="executive" className="bg-[#0d1018]">Executive</option>
                    <option value="other" className="bg-[#0d1018]">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your monitoring needs..."
                    className="block w-full rounded-lg border border-white/8 bg-[#0d1018] px-4 py-3 text-sm text-white placeholder-neutral-700 focus:border-primary-400/40 focus:outline-none focus:ring-1 focus:ring-primary-400/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-black hover:bg-primary-300 transition-colors"
                >
                  Request enterprise demo
                </button>
              </motion.form>
            </div>

            {/* Right: contact channels */}
            <div>
              <div className="mb-8">
                <p className="eyebrow mb-4">Contact channels</p>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Reach the right team
                </h2>
              </div>

              <div className="space-y-4">
                {contactCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-lg border border-white/6 bg-[#0d1018] p-6 card-hover accent-teal"
                  >
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">{card.body}</p>
                    <a
                      href={`mailto:${card.email}`}
                      className="mt-4 block text-sm text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      {card.email}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Response time note */}
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-white/5 bg-[#0d1018] p-5">
                <span className="live-dot mt-1" />
                <div>
                  <p className="text-sm font-medium text-white">Typical response within 24 hours</p>
                  <p className="mt-1 text-xs text-neutral-600">
                    For urgent infrastructure risk situations, contact solutions@vigil-earth.com directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
