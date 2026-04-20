interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-[#171717] sm:text-4xl" style={{ letterSpacing: '-1.6px', lineHeight: '1.1' }}>
        {title}
      </h2>
      {description && (
        <p className="text-base leading-7 text-[#666666]">{description}</p>
      )}
    </div>
  );
}
