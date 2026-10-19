import Link from 'next/link';
import { Phone, MessageCircle, ChevronLeft } from 'lucide-react';
import { CONTACTS, type PhoneKey } from '@/lib/site-data';
import { cn } from '@/lib/utils';
import { PhoneLink, PhoneText } from '@/components/phone-link';

interface PageHeroProps {
  title: string;
  description: string;
  phone?: PhoneKey;
  icon?: React.ReactNode;
  breadcrumbs?: { name: string; url: string }[];
}

export function PageHero({
  title,
  description,
  phone = 'primary',
  icon,
  breadcrumbs,
}: PageHeroProps) {
  const c = CONTACTS[phone];
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.35] mask-fade-b" />
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="container-px py-14 sm:py-20">
        {breadcrumbs && (
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            {breadcrumbs.map((b, i) => (
              <span key={b.url} className="flex items-center gap-1">
                <Link href={b.url} className="hover:text-primary">
                  {b.name}
                </Link>
                {i < breadcrumbs.length - 1 && (
                  <ChevronLeft className="h-3 w-3 opacity-50" />
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="animate-fade-up">
            {icon && (
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {icon}
              </div>
            )}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${c.tel}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" />
                تماس: <PhoneText display={c.display} className="font-bold" />
              </a>
              <a
                href={c.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                واتساپ
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  <PhoneText display={c.display} className="text-xl font-extrabold" />
                </div>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  پشتیبانی شبانه‌روزی
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  پاسخگویی سریع در واتساپ
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  اعزام فوری به محل
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('mb-8 max-w-2xl', className)}>
      {eyebrow && (
        <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base leading-8 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function CtaBand({
  title,
  description,
  phone = 'primary',
}: {
  title: string;
  description: string;
  phone?: PhoneKey;
}) {
  const c = CONTACTS[phone];
  return (
    <section className="container-px py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground shadow-lg sm:p-12">
        <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">{title}</h2>
            <p className="mt-3 text-base leading-8 text-primary-foreground/90">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${c.tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              <PhoneText display={c.display} className="font-bold" />
            </a>
            <a
              href={c.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              واتساپ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
