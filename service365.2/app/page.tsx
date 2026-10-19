import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  ArrowLeft,
  ShieldCheck,
  Star,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import {
  SERVICES,
  REVIEWS,
  TRUST_BADGES,
  CONTACTS,
  FAQ_ITEMS,
  REPAIR_APPLIANCES,
  DYNAMIC_SERVICES,
} from '@/lib/site-data';
import { getIcon } from '@/lib/icons';
import { FaqSection } from '@/components/faq-section';
import { SectionHeading, CtaBand } from '@/components/section-helpers';
import { PhoneLink, PhoneText } from '@/components/phone-link';
import { JsonLd, localBusinessSchema, faqSchema } from '@/lib/jsonld';

export const metadata = {
  title: 'سرویس ۳۶۵ | تعمیرات، دارو، امداد خودرو، گردشگری و تجارت سراسری',
  description:
    'سرویس ۳۶۵ ارائه‌دهنده خدمات تعمیر لوازم خانگی، سفارش داروی خارجی، امداد خودرو در استان سمنان و تهران، مینی‌بوس ارومیه، تور و هتل، تجارت خاک توتون و صادرات خرما و طراحی سایت و سئو با پشتیبانی ۲۴ ساعته.',
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, faqSchema(FAQ_ITEMS.home)]} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 -z-10 bg-grid opacity-[0.3] mask-fade-b" />
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="container-px py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
              <ShieldCheck className="h-4 w-4" />
              پشتیبانی شبانه‌روزی · پوشش سراسری ایران
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-6xl">
              سرویس ۳۶۵؛ همه‌ی خدمات روزمره در یک مجموعه
            </h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              تعمیر تخصصی لوازم خانگی، سفارش قانونی داروی خارجی، امداد خودرو رسمی
              استان سمنان و تهران، مینی‌بوس تلفنی ارومیه، تور و رزرو هتل، تجارت و
              صادرات و طراحی سایت و سئو — همه با یک تماس.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${CONTACTS.primary.tel}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" />
                تماس اضطراری <PhoneText display={CONTACTS.primary.display} className="font-bold" />
              </a>
              <a
                href={CONTACTS.primary.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                گفتگو در واتساپ
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" /> گارانتی معتبر
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" /> قطعات اصل
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" /> اعزام فوری
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" /> فاکتور شفاف
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="container-px py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_BADGES.map((b) => {
            const Icon = getIcon(b.icon);
            return (
              <div
                key={b.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card p-4 text-center shadow-sm transition-colors hover:border-primary/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold">{b.label}</span>
                <span className="text-[11px] text-muted-foreground">{b.sub}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services grid */}
      <section className="container-px py-12">
        <SectionHeading
          eyebrow="خدمات سرویس ۳۶۵"
          title="شش دسته خدمت یکپارچه برای رفع نیازهای روزمره"
          description="هر یک از خدمات زیر با تیم متخصص، پشتیبانی شبانه‌روزی و گارانتی ارائه می‌شود. برای اطلاع از جزئیات، روی هر کارت کلیک کنید."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = getIcon(s.icon);
            const c = CONTACTS[s.phone];
            return (
              <Link
                key={s.slug}
                href={s.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowLeft className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">
                  {s.short}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                  <PhoneLink tel={c.tel} display={c.display} className="text-sm font-bold text-primary" />
                  <span className="text-xs text-muted-foreground">مشاهده جزئیات</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Service guide table */}
      <section className="container-px py-12">
        <SectionHeading
          eyebrow="راهنمای خدمات"
          title="جدول راهنمای سریع خدمات و دستگاه‌های قابل تعمیر"
          description="مرجع سریع برای تشخیص دستگاه‌ها و عیوب رایج؛ برای هر دستگاه فهرستی از مشکلات متداول و علائم خرابی آورده شده است."
        />
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-secondary/60 text-xs font-bold uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">دستگاه</th>
                  <th className="px-4 py-3">علائم رایج خرابی</th>
                  <th className="px-4 py-3">نحوه خدمات</th>
                  <th className="px-4 py-3">گارانتی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {REPAIR_APPLIANCES.map((a) => (
                  <tr key={a.name} className="transition-colors hover:bg-secondary/30">
                    <td className="px-4 py-3 font-bold">{a.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {a.issues.join(' · ')}
                    </td>
                    <td className="px-4 py-3">اعزام تکنسین به محل</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                        <ShieldCheck className="h-3 w-3" /> ۱۲ تا ۲۴ ماه
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* City selector */}
      <section className="container-px py-12">
        <SectionHeading
          eyebrow="پوشش شهری"
          title="شهرهای تحت پوشش سرویس ۳۶۵"
          description="خدمات تعمیرات و امداد خودرو در شهرهای زیر فعال است. روی هر شهر کلیک کنید تا صفحه‌ی اختصاصی آن شهر را ببینید."
        />
        {DYNAMIC_SERVICES.map((svc) => (
          <div key={svc.slug} className="mb-6">
            <h3 className="mb-3 text-sm font-bold text-muted-foreground">{svc.label}</h3>
            <div className="flex flex-wrap gap-2.5">
              {svc.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/services/${svc.slug}/${city.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Reviews */}
      <section className="bg-secondary/40 py-14">
        <div className="container-px">
          <SectionHeading
            eyebrow="نظرات مشتریان"
            title="تجربه‌ی واقعی کاربران سرویس ۳۶۵"
            description="بیش از هزاران درخواست سالانه با رضایت بالای مشتریان پاسخ داده می‌شود."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <div
                key={r.name + r.city}
                className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <Quote className="h-6 w-6 text-primary/40" />
                <p className="flex-1 text-sm leading-7 text-muted-foreground">{r.text}</p>
                <div className="flex items-center justify-between border-t border-border/60 pt-4">
                  <div>
                    <p className="text-sm font-bold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {r.city} · {r.service}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form SEO content */}
      <section className="container-px py-14">
        <div className="mx-auto max-w-4xl prose-fa">
          <h2>سرویس ۳۶۵؛ مرجع کامل خدمات روزمره در سراسر ایران</h2>
          <p>
            مجموعه‌ی سرویس ۳۶۵ (service365.ir) با هدف یکپارچه‌سازی خدمات روزمره‌ی
            خانوارها و کسب‌وکارها در یک پلتفرم تخصصی شکل گرفته است. ما با شبکه‌ای
            از تکنسین‌های آموزش‌دیده، داروخانه‌های همکار، ناوگان امداد خودرو رسمی
            و کارشناسان گردشگری و تجارت، در بیش از ۱۷ شهر کشور فعال هستیم. فلسفه‌ی
            ما ساده است: مشتری نباید برای هر نیاز کوچک به یک مجموعه‌ی جدید مراجعه
            کند؛ یک تماس با سرویس ۳۶۵ کافی است تا نیاز شما در کوتاه‌ترین زمان
            برطرف شود. شماره‌ی اضطراری ۰۹۰۳۲۴۸۶۰۷۳ به‌صورت شبانه‌روزی پاسخگو
            است و برای خدمات تور، هتل، طراحی سایت و سئو شماره‌ی ۰۹۱۴۳۴۰۳۴۳۱ در
            دسترس شما قرار دارد.
          </p>
          <h3>چرا سرویس ۳۶۵؟</h3>
          <p>
            ما به سه اصل پایبندیم: سرعت، شفافیت و گارانتی. سرعت به این معنا که در
            شهرهای تحت پوشش، میانگین زمان اعزام تکنسین یا یدک‌کش کمتر از ۶۰ دقیقه
            است. شفافیت به این معنا که پیش از شروع کار، هزینه‌ی عیب‌یابی و
            قطعات به‌صورت دقیق اعلام می‌شود و فاکتور رسمی صادر می‌گردد. گارانتی
            نیز به این معنا که تمام قطعات نصب‌شده اصل و دارای هولوگرام هستند و
            کارت گارانتی معتبر به مشتری تحویل داده می‌شود. این رویه‌ی ساختارمند
            باعث شده رضایت بیش از ۹۵٪ مشتریان تأیید شود.
          </p>
          <h3>دسته‌بندی خدمات سرویس ۳۶۵</h3>
          <p>
            خدمات سرویس ۳۶۵ در شش دسته‌ی اصلی سازماندهی شده‌اند. دسته‌ی اول
            <strong> تعمیر لوازم خانگی</strong> است که یخچال، لباسشویی، تلویزیون،
            کولر گازی، پکیج و اجاق گاز را پوشش می‌دهد. دسته‌ی دوم
            <strong> سفارش داروی خارجی</strong> است که شامل تأمین قانونی داروهای
            ترکیه و داروهای کمیاب انکولوژی، نورولوژی و مکمل‌ها می‌شود. دسته‌ی سوم
            <strong> امداد خودرو و حمل‌ونقل</strong> است که ناوگان رسمی امداد
            خودرو استان سمنان و تهران را تحت مدیریت آقای ابراهیم همتی‌نیا شامل
            می‌شود و همچنین مینی‌بوس تلفنی ارومیه و خرید و فروش خودروهای منطقه‌ی
            آزاد ماکو. دسته‌ی چهارم <strong>گردشگری و رزرو هتل</strong> است که تور
            ارومیه، وان، استانبول، مسکو، سن‌پترزبورگ، ارمنستان، اربیل و باکو و رزرو
            هتل‌های ۵ ستاره‌ی ایران و اربیل را پوشش می‌دهد. دسته‌ی پنجم
            <strong> تجارت و صادرات</strong> است که شامل خرید و فروش خاک توتون،
            صادرات خرما و مشاوره‌ی واردات و صادرات است. دسته‌ی ششم
            <strong> طراحی سایت و سئو</strong> است که سایت‌های اختصاصی و
            واکنش‌گرا با بهینه‌سازی فنی و پشتیبانی شبانه‌روزی ارائه می‌کند.
          </p>
          <h3>پوشش جغرافیایی و ساختار پاسخگویی</h3>
          <p>
            سرویس ۳۶۵ در گرمسار، شاهرود، سمنان، پاکدشت، قرچک، ورامین، پیشوا،
            ارومیه، بوکان، میاندوآب، تاکستان، بروجرد، آمل، نور، چمستان، نیشابور و
            سبزوار دارای پایگاه‌های خدمات یا همکاران محلی است. ساختار پاسخگویی به
            این شکل است که تماس شما به نزدیک‌ترین تکنسین یا یدک‌کش فعال در شهر
            شما اختصاص می‌یابد و پیش از حرکت، قیمت اولیه اعلام می‌شود. در خدمات
            امداد خودرو، تمام رانندگان تحت پوشش بیمه‌ی شخص ثالث و بیمه‌ی یدک هستند
            و قرارداد رسمی صادر می‌شود.
          </p>
          <h3>فرایند ثبت درخواست</h3>
          <ol>
            <li>تماس با ۰۹۰۳۲۴۸۶۰۷۳ یا ارسال پیام در واتساپ با شرح دقیق نیاز.</li>
            <li>اعلام قیمت اولیه و زمان اعزام توسط کارشناس سرویس ۳۶۵.</li>
            <li>اعزام تکنسین یا یدک‌کش به محل در کوتاه‌ترین زمان ممکن.</li>
            <li>عیب‌یابی دقیق و ارائه‌ی فاکتور قطعات و دستمزد.</li>
            <li>انجام تعمیر با قطعات اصل و صدور کارت گارانتی.</li>
            <li>پیگیری کیفیت پس از خدمات از طریق پشتیبانی سرویس ۳۶۵.</li>
          </ol>
          <h3>تعهد به کیفیت و رضایت مشتری</h3>
          <p>
            تمام فرایندهای سرویس ۳۶۵ بر اساس استانداردهای کیفی مستندسازی شده‌اند.
            هر تکنسین قبل از اعزام، آزمون دوره‌ای توانایی را می‌گذراند و هر یدک‌کش
            دارای مجوز رسمی امداد خودرو است. سیستم پایش رضایت مشتری به‌صورت
            هفتگی اجرا می‌شود و نتایج آن در ارتقای مستمر کیفیت به کار گرفته
            می‌شود. هدف ما این است که هر تماس با سرویس ۳۶۵ به یک تجربه‌ی مثبت و
            قابل اعتماد تبدیل شود.
          </p>
          <h3>تماس و پشتیبانی شبانه‌روزی</h3>
          <p>
            برای هر یک از خدمات بالا می‌توانید هم‌زمان با ما تماس بگیرید. شماره‌ی
            ۰۹۰۳۲۴۸۶۰۷۳ برای تعمیرات، دارو، امداد خودرو و مینی‌بوس ارومیه و شماره‌ی
            ۰۹۱۴۳۴۰۳۴۳۱ برای خدمات تور، هتل، تجارت، طراحی سایت و سئو در دسترس است.
            همچنین در واتساپ می‌توانید عکس دستگاه، نسخه‌ی دارو یا لوکیشن دقیق خود
            را ارسال کنید تا کارشناسان ما سریع‌ترین پاسخ را به شما ارائه دهند.
          </p>
        </div>
      </section>

      <CtaBand
        title="همین حالا درخواست خود را ثبت کنید"
        description="کارشناسان سرویس ۳۶۵ آماده‌ی پاسخگویی شبانه‌روزی به تماس و پیام شما هستند. یک تماس، یک راه‌حل."
      />

      <FaqSection items={FAQ_ITEMS.home} />
    </>
  );
}
