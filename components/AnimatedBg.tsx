export function AnimatedBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Drifting gradient orbs */}
      <div style={{
        position: 'absolute', width: 800, height: 800,
        top: '-20%', left: '-15%',
        background: 'radial-gradient(circle, rgba(0,114,245,0.045) 0%, transparent 65%)',
        animation: 'drift1 24s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 650, height: 650,
        top: '5%', right: '-18%',
        background: 'radial-gradient(circle, rgba(0,114,245,0.03) 0%, transparent 65%)',
        animation: 'drift2 30s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500,
        bottom: '-15%', left: '25%',
        background: 'radial-gradient(circle, rgba(0,114,245,0.025) 0%, transparent 65%)',
        animation: 'drift3 20s ease-in-out infinite',
      }} />
      {/* Subtle coordinate grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,114,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,114,245,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        animation: 'grid-shift 35s linear infinite',
      }} />
    </div>
  );
}
