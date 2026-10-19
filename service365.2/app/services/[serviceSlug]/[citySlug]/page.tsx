import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  DYNAMIC_SERVICES,
  findDynamicService,
  findCity,
  CONTACTS,
  type DynamicService,
  type CityServiceEntry,
} from '@/lib/site-data';
import { getIcon } from '@/lib/icons';
import { Phone, MessageCircle, MapPin, ChevronLeft, ShieldCheck, Clock } from 'lucide-react';
import { PhoneLink, PhoneText } from '@/components/phone-link';
import { JsonLd, faqSchema, breadcrumbSchema } from '@/lib/jsonld';

interface PageProps {
  params: { serviceSlug: string; citySlug: string };
}

export function generateStaticParams() {
  return DYNAMIC_SERVICES.flatMap((svc) =>
    svc.cities.map((c) => ({
      serviceSlug: svc.slug,
      citySlug: c.slug,
    }))
  );
}

export function generateMetadata({ params }: PageProps) {
  const svc = findDynamicService(params.serviceSlug);
  const city = svc ? findCity(svc, params.citySlug) : undefined;
  if (!svc || !city) return {};
  const title = svc.headingTemplate(city.name);
  return {
    title,
    description: `${svc.label} در ${city.name} با پشتیبانی شبانه‌روزی و گارانتی. تماس: ${CONTACTS[svc.phone].display}`,
    alternates: { canonical: `/services/${svc.slug}/${city.slug}` },
  };
}

function buildLocalBusinessSchema(svc: DynamicService, city: CityServiceEntry) {
  const c = CONTACTS[svc.phone];
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `سرویس ۳۶۵ — ${svc.label} در ${city.name}`,
    description: `${svc.label} در ${city.name} با پشتیبانی شبانه‌روزی.`,
    telephone: c.tel,
    url: `https://service365.ir/services/${svc.slug}/${city.slug}`,
    areaServed: { '@type': 'City', name: city.name },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IR',
      addressRegion: city.province,
      addressLocality: city.name,
    },
  };
}

export default function CityServicePage({ params }: PageProps) {
  const svc = findDynamicService(params.serviceSlug);
  const city = svc ? findCity(svc, params.citySlug) : undefined;

  if (!svc || !city) {
    notFound();
  }

  const c = CONTACTS[svc.phone];
  const Icon = getIcon(svc.icon);
  const h1 = svc.headingTemplate(city.name);

  const faqItems = [
    {
      q: `${svc.label} در ${city.name} چگونه رزرو می‌شود؟`,
      a: `کافی است با ${c.display} تماس بگیرید یا در واتساپ پیام دهید. کارشناسان ما در ${city.name} در کمترین زمان به شما پاسخ می‌دهند.`,
    },
    {
      q: `زمان اعزام به ${city.name} چقدر است؟`,
      a: `معمولاً کمتر از ۶۰ دقیقه در ساعات عادی و کمتر از ۹۰ دقیقه در ساعات اوج. زمان دقیق پیش از اعزام اعلام می‌شود.`,
    },
    {
      q: `آیا در ${city.name} گارانتی ارائه می‌شود؟`,
      a: 'بله؛ تمام خدمات با کارت گارانتی معتبر و قطعات اصل انجام می‌شوند.',
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(svc, city),
          faqSchema(faqItems),
          breadcrumbSchema([
            { name: 'خانه', url: '/' },
            { name: svc.label, url: `/${svc.slug === 'car-assistance' ? 'transport' : 'repairs'}` },
            { name: city.name, url: `/services/${svc.slug}/${city.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 -z-10 bg-grid opacity-[0.3] mask-fade-b" />
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="container-px py-14 sm:py-20">
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary">خانه</Link>
            <ChevronLeft className="h-3 w-3 opacity-50" />
            <Link
              href={svc.slug === 'car-assistance' ? '/transport' : '/repairs'}
              className="hover:text-primary"
            >
              {svc.label}
            </Link>
            <ChevronLeft className="h-3 w-3 opacity-50" />
            <span className="font-bold text-foreground">{city.name}</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="animate-fade-up">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
                {h1}
              </h1>
              <p className="mt-4 flex items-center gap-2 text-sm font-bold text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                استان {city.province} · شهر {city.name}
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
                    <PhoneLink
                      tel={c.tel}
                      display={c.display}
                      className="text-xl font-extrabold text-foreground"
                    />
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" /> پشتیبانی شبانه‌روزی
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-accent" /> گارانتی معتبر
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" /> اعزام به {city.name}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="container-px py-14">
        <div className="mx-auto max-w-3xl prose-fa">
          <h2>{svc.label} در {city.name}</h2>
          <p>{svc.intro1(city.name)}</p>
          <p>{svc.intro2(city.name)}</p>
          <h3>چرا سرویس ۳۶۵ در {city.name}؟</h3>
          <p>
            ما در {city.name} با پایگاه محلی و همکاران منطقه‌ای، کوتاه‌ترین زمان
            اعزام را تضمین می‌کنیم. تمام خدمات با فاکتور رسمی، قیمت شفاف و
            گارانتی معتبر ارائه می‌شوند. برای ثبت درخواست کافی است با{' '}
            <PhoneLink tel={c.tel} display={c.display} className="font-bold text-primary" />{' '}
            تماس بگیرید یا در واتساپ پیام دهید.
          </p>
        </div>
      </section>

      {/* Other cities */}
      <section className="container-px py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-xl font-bold">سایر شهرهای {svc.label}</h2>
          <div className="flex flex-wrap gap-2.5">
            {svc.cities
              .filter((ci) => ci.slug !== city.slug)
              .map((ci) => (
                <Link
                  key={ci.slug}
                  href={`/services/${svc.slug}/${ci.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {ci.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px py-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground shadow-lg sm:p-12">
          <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">همین حالا درخواست خود را ثبت کنید</h2>
              <p className="mt-2 text-sm text-primary-foreground/90">
                {svc.label} در {city.name} با یک تماس.
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
    </>
  );
}
