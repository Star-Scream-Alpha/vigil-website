interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow" style={dark ? { color: '#444444' } : {}}>{eyebrow}</p>
      <h2
        className={`text-3xl font-semibold sm:text-4xl ${dark ? 'text-white' : 'text-[#171717]'}`}
        style={{ letterSpacing: '-1.6px', lineHeight: '1.08' }}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-7 ${dark ? 'text-[#555555]' : 'text-[#666666]'}`}>{description}</p>
      )}
    </div>
  );
}
