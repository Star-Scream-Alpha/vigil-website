const particles = [
  { left: '18%', top: '22%', size: 2, anim: 'float-a 18s ease-in-out infinite' },
  { left: '74%', top: '16%', size: 1.5, anim: 'float-b 23s ease-in-out 3s infinite' },
  { left: '60%', top: '70%', size: 2, anim: 'float-a 16s ease-in-out 6s infinite' },
  { left: '88%', top: '50%', size: 1.5, anim: 'float-b 20s ease-in-out 9s infinite' },
  { left: '34%', top: '83%', size: 1, anim: 'float-a 26s ease-in-out 13s infinite' },
  { left: '8%',  top: '60%', size: 1.5, anim: 'float-b 19s ease-in-out 5s infinite' },
];

export function AnimatedBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary orb — top left */}
      <div style={{
        position: 'absolute', width: 960, height: 960,
        top: '-28%', left: '-22%',
        background: 'radial-gradient(circle, rgba(0,114,245,0.08) 0%, rgba(0,114,245,0.025) 45%, transparent 68%)',
        animation: 'drift1 24s ease-in-out infinite',
      }} />
      {/* Secondary orb — top right */}
      <div style={{
        position: 'absolute', width: 720, height: 720,
        top: '-5%', right: '-24%',
        background: 'radial-gradient(circle, rgba(0,114,245,0.06) 0%, rgba(0,114,245,0.015) 50%, transparent 70%)',
        animation: 'drift2 30s ease-in-out infinite',
      }} />
      {/* Tertiary orb — bottom center */}
      <div style={{
        position: 'absolute', width: 640, height: 640,
        bottom: '-22%', left: '18%',
        background: 'radial-gradient(circle, rgba(0,114,245,0.05) 0%, transparent 65%)',
        animation: 'drift3 20s ease-in-out infinite',
      }} />
      {/* Accent orb — mid right (mobile friendly, smaller) */}
      <div style={{
        position: 'absolute', width: 400, height: 400,
        top: '35%', right: '-10%',
        background: 'radial-gradient(circle, rgba(0,114,245,0.04) 0%, transparent 65%)',
        animation: 'drift1 28s ease-in-out 8s infinite',
      }} />

      {/* Floating micro-particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: p.left, top: p.top,
            width: p.size, height: p.size,
            borderRadius: '50%',
            background: 'rgba(0,114,245,0.45)',
            animation: p.anim,
          }}
        />
      ))}

      {/* Animated coordinate grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,114,245,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0,114,245,0.055) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        animation: 'grid-shift 35s linear infinite',
      }} />
    </div>
  );
}
