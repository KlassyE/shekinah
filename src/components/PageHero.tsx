import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  compact?: boolean;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, image, compact, children }: Props) {
  return (
    <section className={'page-hero' + (compact ? ' compact' : '')}>
      {image && (
        <div className="page-hero-bg" style={{ backgroundImage: `url(${image})` }} aria-hidden />
      )}
      <div className="page-hero-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
