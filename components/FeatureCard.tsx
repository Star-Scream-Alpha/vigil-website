interface FeatureCardProps {
  title: string;
  description: string;
  accent?: 'teal' | 'amber';
}

export function FeatureCard({ title, description, accent = 'teal' }: FeatureCardProps) {
  return (
    <article
      className={`border border-white/6 bg-[#0d1018] rounded-lg p-6 card-hover ${
        accent === 'amber' ? 'accent-amber' : 'accent-teal'
      }`}
    >
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-500">{description}</p>
    </article>
  );
}
