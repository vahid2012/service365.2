interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://service365.ir/#business',
  name: 'سرویس ۳۶۵',
  alternateName: 'Service 365',
  url: 'https://service365.ir',
  telephone: '+989032486073',
  image: 'https://service365.ir/og.png',
  priceRange: '$$',
  description:
    'سرویس ۳۶۵ ارائه‌دهنده تعمیر لوازم خانگی، سفارش داروی خارجی، امداد خودرو، گردشگری، تجارت و طراحی سایت در سراسر ایران.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IR',
    addressRegion: 'سمنان',
  },
  areaServed: [
    'گرمسار',
    'شاهرود',
    'سمنان',
    'پاکدشت',
    'قرچک',
    'ورامین',
    'پیشوا',
    'ارومیه',
    'بوکان',
    'میاندوآب',
    'تاکستان',
    'بروجرد',
    'آمل',
    'نور',
    'چمستان',
    'نیشابور',
    'سبزوار',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+989032486073',
      contactType: 'customer service',
      availableLanguage: ['Persian'],
      areaServed: 'IR',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+989143403431',
      contactType: 'technical support',
      availableLanguage: ['Persian'],
      areaServed: 'IR',
    },
  ],
  sameAs: [],
};

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: i.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: i.name,
      item: `https://service365.ir${i.url}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed: string[];
  phone: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    description: opts.description,
    url: `https://service365.ir${opts.url}`,
    areaServed: opts.areaServed.map((c) => ({ '@type': 'City', name: c })),
    provider: {
      '@type': 'LocalBusiness',
      name: 'سرویس ۳۶۵',
      telephone: opts.phone,
    },
  };
}
