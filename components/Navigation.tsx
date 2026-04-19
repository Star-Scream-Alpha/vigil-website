'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Platform', href: '/platform' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled ? 'border-b border-white/5 bg-[#07090e]/96 backdrop-blur-xl' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="live-dot" />
          <span className="text-sm font-semibold tracking-tight text-white">
            VIGIL<span className="text-primary-400">·</span>EARTH
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm transition-colors duration-150 ${
                pathname === item.href
                  ? 'text-white'
                  : 'text-neutral-500 hover:text-neutral-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/contact"
            className={`text-sm transition-colors duration-150 ${
              pathname === '/contact' ? 'text-white' : 'text-neutral-500 hover:text-neutral-200'
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-primary-400 px-4 py-2 text-xs font-semibold text-black hover:bg-primary-300 transition-colors duration-150"
          >
            Request demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-400 hover:text-white transition-colors p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#07090e]/98 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4">
            {[...navLinks, { name: 'Contact', href: '/contact' }].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block border-b border-white/4 py-3 text-sm text-neutral-400 last:border-0 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                className="block w-full rounded-md bg-primary-400 px-4 py-3 text-center text-sm font-semibold text-black hover:bg-primary-300 transition-colors"
                onClick={() => setOpen(false)}
              >
                Request demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
