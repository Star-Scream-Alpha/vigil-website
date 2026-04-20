interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-lg bg-white p-6 shadow-card card-hover">
      <h3 className="text-sm font-semibold text-[#171717]" style={{ letterSpacing: '-0.32px' }}>{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#666666]">{description}</p>
    </article>
  );
}
