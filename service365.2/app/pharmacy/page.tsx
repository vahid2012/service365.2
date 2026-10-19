import {
  Pill,
  Phone,
  MessageCircle,
  Upload,
  FileText,
  PackageCheck,
  ShieldCheck,
  Truck,
  ChevronLeft,
  Clock,
  HeartPulse,
} from 'lucide-react';
import { CONTACTS, PHARMACY_FAQ, PHARMACY_CATEGORIES } from '@/lib/site-data';
import { getIcon } from '@/lib/icons';
import { SectionHeading } from '@/components/section-helpers';
import { PhoneText, PhoneLink } from '@/components/phone-link';
import { PrescriptionForm } from '@/components/prescription-form';
import { FaqSection } from '@/components/faq-section';
import { JsonLd, faqSchema, breadcrumbSchema } from '@/lib/jsonld';

export const metadata = {
  title: 'داروخانه آنلاین | سفارش دارو و ارسال سریع به سراسر ایران',
  description:
    'سفارش آنلاین داروهای خاص، مکمل ورزشی، محصولات بهداشتی و لوازم پزشکی با اصالت تضمین‌شده و ارسال به درب منزل. تماس: 09032486073.',
  alternates: { canonical: '/pharmacy' },
};

const STEPS = [
  {
    icon: Upload,
    title: 'ارسال عکس نسخه',
    desc: 'عکس نسخه‌ی پزشک را در واتساپ یا از طریق فرم سایت ارسال کنید.',
  },
  {
    icon: FileText,
    title: 'تأیید و قیمت‌گذاری',
    desc: 'داروساز نسخه را بررسی و قیمت دقیق و زمان تحویل را اعلام می‌کند.',
  },
  {
    icon: PackageCheck,
    title: 'پرداخت و ارسال',
    desc: 'پس از تأیید، دارو بسته‌بندی و به درب منزل شما ارسال می‌شود.',
  },
];

function pharmacySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'داروخانه آنلاین سرویس ۳۶۵',
    description:
      'سفارش آنلاین داروهای خاص، مکمل ورزشی، محصولات بهداشتی و لوازم پزشکی با اصالت تضمین‌شده.',
    url: 'https://service365.ir/pharmacy',
    about: {
      '@type': 'MedicalTherapy',
      name: 'دارو و مکمل',
    },
    provider: {
      '@type': 'Pharmacy',
      name: 'سرویس ۳۶۵',
      telephone: CONTACTS.primary.tel,
    },
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'patient',
    },
  };
}

export default function PharmacyPage() {
  return (
    <>
      <JsonLd
        data={[
          pharmacySchema(),
          faqSchema(PHARMACY_FAQ),
          breadcrumbSchema([
            { name: 'خانه', url: '/' },
            { name: 'داروخانه', url: '/pharmacy' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-cyan-500/10 via-background to-background">
        <div className="absolute inset-0 -z-10 bg-grid opacity-[0.3] mask-fade-b" />
        <div className="container-px py-14 sm:py-20">
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <a href="/" className="hover:text-primary">خانه</a>
            <ChevronLeft className="h-3 w-3 opacity-50" />
            <span className="font-bold text-foreground">داروخانه</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="animate-fade-up">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600">
                <Pill className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
                سفارش آنلاین دارو و ارسال سریع به سراسر ایران
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                داروهای اصلی و با اصالت تضمین‌شده، مکمل‌های ورزشی، محصولات
                بهداشتی و لوازم پزشکی — با تأیید داروساز و ارسال به درب منزل.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={CONTACTS.primary.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  ارسال نسخه در واتساپ
                </a>
                <a
                  href={`tel:${CONTACTS.primary.tel}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" />
                  تماس: <PhoneText display={CONTACTS.primary.display} className="font-bold" />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-cyan-600" /> اصالت تضمین‌شده
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="h-4 w-4 text-cyan-600" /> ارسال به سراسر ایران
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-cyan-600" /> تحویل ۲۴ تا ۷۲ ساعت
                </span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                    <HeartPulse className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">پشتیبانی داروخانه</p>
                    <PhoneLink
                      tel={CONTACTS.primary.tel}
                      display={CONTACTS.primary.display}
                      className="text-xl font-extrabold text-foreground"
                    />
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" /> داروهای خاص و کمیاب
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" /> مکمل‌های ورزشی اصل
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" /> هولوگرام اصالت
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" /> فاکتور رسمی داروخانه
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="فرایند سفارش"
          title="سفارش دارو در سه گام ساده"
          description="از ارسال نسخه تا تحویل درب منزل؛ فرایندی شفاف و سریع."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <span className="absolute -top-3 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-sm font-extrabold text-white shadow-sm">
                {i + 1}
              </span>
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Medicine categories */}
      <section className="bg-secondary/40 py-14">
        <div className="container-px">
          <SectionHeading
            eyebrow="دسته‌بندی محصولات"
            title="دسته‌های دارویی و سلامت"
            description="چهار دسته‌ی اصلی محصولات داروخانه سرویس ۳۶۵."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PHARMACY_CATEGORIES.map((cat) => {
              const Icon = getIcon(cat.icon);
              return (
                <div
                  key={cat.name}
                  className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-500/40"
                >
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-bold">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prescription form */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="ثبت سفارش"
          title="فرم سفارش دارو"
          description="اطلاعات خود را وارد کنید و عکس نسخه را آپلود نمایید. سفارش شما در واتساپ پشتیبانی ثبت می‌شود."
        />
        <div className="mx-auto max-w-2xl">
          <PrescriptionForm />
        </div>
      </section>

      {/* SEO content */}
      <section className="container-px py-14">
        <div className="mx-auto max-w-4xl prose-fa">
          <h2>داروخانه آنلاین سرویس ۳۶۵</h2>
          <p>
            داروخانه آنلاین سرویس ۳۶۵ امکان سفارش داروهای اصل، مکمل‌های ورزشی،
            محصولات بهداشتی و لوازم پزشکی را به‌صورت آنلاین و با ارسال به سراسر
            ایران فراهم می‌کند. تمام داروها از داروخانه‌های معتبر و دارای پروانه
            تأمین می‌شوند و دارای هولوگرام اصالت هستند. برای سفارش کافی است عکس
            نسخه‌ی خود را در واتساپ{' '}
            <PhoneLink
              tel={CONTACTS.primary.tel}
              display={CONTACTS.primary.display}
              className="font-bold text-primary"
            />{' '}
            ارسال کنید تا داروساز نسخه را بررسی و قیمت‌گذاری کند.
          </p>
          <h3>سفارش داروی خاص و کمیاب</h3>
          <p>
            بسیاری از داروهای خاص مانند داروهای انکولوژی، نورولوژی و داروهای
            کمیاب خارجی به‌سختی در داروخانه‌های محلی یافت می‌شوند. سرویس ۳۶۵ با
            شبکه‌ی تأمین گسترده از ترکیه، امارات، آلمان و هند، داروهای کمیاب را
            در کوتاه‌ترین زمان تأمین می‌کند. کافی است نسخه‌ی پزشک را ارسال کنید
            تا تیم ما پیگیری تأمین را بر عهده بگیرد.
          </p>
          <h3>اصالت داروها چگونه تضمین می‌شود؟</h3>
          <p>
            تمام داروها از داروخانه‌های دارای پروانه‌ی رسمی تأمین می‌شوند و روی
            هر بسته هولوگرام اصالت تولیدکننده قرار دارد. در صورت درخواست، فاکتور
            رسمی داروخانه و کد رهگیری به مشتری ارائه می‌گردد. سرویس ۳۶۵ هیچ‌گونه
            داروی تقلبی یا قاچاق ارائه نمی‌دهد و تمام فرایندها قانونی و
            نسخه‌محور است.
          </p>
          <h3>ارسال و تحویل</h3>
          <p>
            ارسال دارو به تمام شهرهای ایران انجام می‌شود. داروهای موجود بین ۲۴
            تا ۷۲ ساعت در تهران و ۲ تا ۵ روز کاری در سایر شهرها تحویل داده
            می‌شوند. داروهای کمیاب و خارجی بین ۷ تا ۲۱ روز کاری زمان نیاز دارند.
            هزینه‌ی ارسال بر اساس وزن بسته و شهر مقصد محاسبه و پیش از تأیید
            سفارش اعلام می‌شود.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection items={PHARMACY_FAQ} />
    </>
  );
}
