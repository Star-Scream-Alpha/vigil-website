import Link from 'next/link';

const links = [
  { name: 'Platform', href: '/platform' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Reports', href: '/reports' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-[#ebebeb] bg-white px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[#171717]" style={{ letterSpacing: '-0.3px' }}>
            VIGIL<span className="text-[#808080]">·</span>EARTH
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#808080]">
            Truth Engine for Physical Asset Risk
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map((l) => (
            <Link key={l.name} href={l.href} className="text-sm text-[#808080] hover:text-[#171717] transition-colors">
              {l.name}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-[#808080]">© 2026 VIGIL-EARTH</p>
      </div>
    </footer>
  );
}
