import {
  Code,
  Search,
  Smartphone,
  Gauge,
  ShieldCheck,
  Phone,
  MessageCircle,
  Rocket,
  Palette,
  Server,
  PenLine,
} from 'lucide-react';
import { CONTACTS, FAQ_ITEMS } from '@/lib/site-data';
import { PageHero, SectionHeading, CtaBand } from '@/components/section-helpers';
import { FaqSection } from '@/components/faq-section';
import {
  JsonLd,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
} from '@/lib/jsonld';

export const metadata = {
  title: 'طراحی سایت حرفه‌ای و سئو فنی با پشتیبانی ۲۴ ساعته',
  description:
    'طراحی سایت اختصاصی و واکنش‌گرا، بهینه‌سازی موتورهای جستجو (سئو فنی و محتوایی) و پشتیبانی شبانه‌روزی. تماس 09143403431.',
};

const SEO_SERVICES = [
  { title: 'طراحی سایت اختصاصی', desc: 'سایت شرکتی، فروشگاهی و خدماتی با کدنویسی اختصاصی و سرعت بالا', icon: 'Code' },
  { title: 'سئو فنی', desc: 'بهینه‌سازی سرعت، اسکیما، ریسپانسیو و معماری سایت برای موتورهای جستجو', icon: 'Search' },
  { title: 'سئو محتوایی', desc: 'تولید محتوای هدفمند و استراتژی کلمات کلیدی برای رتبه‌بندی پایدار', icon: 'PenLine' },
  { title: 'طراحی ریسپانسیو', desc: 'تجربه‌ی یکسان در موبایل، تبلت و دسکتاپ با طراحی موبایل‌اول', icon: 'Smartphone' },
  { title: 'بهینه‌سازی سرعت', desc: 'Core Web Vitals، کشینگ، CDN و فشرده‌سازی تصاویر', icon: 'Gauge' },
  { title: 'پشتیبانی ۲۴ ساعته', desc: 'پاسخگویی شبانه‌روزی و رفع سریع مشکلات سایت و سئو', icon: 'ShieldCheck' },
];

const PACKAGES = [
  {
    name: 'پایه (شرکتی)',
    price: 'از ۸٬۰۰۰٬۰۰۰',
    features: ['تا ۸ صفحه', 'واکنش‌گرا', 'فرم تماس', 'پنل مدیریت ساده', 'سئو پایه', 'پشتیبانی ۳ ماه'],
    popular: false,
  },
  {
    name: 'حرفه‌ای (خدماتی)',
    price: 'از ۱۸٬۰۰۰٬۰۰۰',
    features: ['تا ۲۰ صفحه', 'واکنش‌گرا + AMP', 'پنل مدیریت کامل', 'سئو فنی کامل', 'نقشه سایت و اسکیما', 'پشتیبانی ۶ ماه', 'سرعت بهینه Core Web Vitals'],
    popular: true,
  },
  {
    name: 'فروشگاهی',
    price: 'از ۳۲٬۰۰۰٬۰۰۰',
    features: ['صفحات نامحدود', 'درگاه پرداخت', 'مدیریت محصول و سفارش', 'سئو فروشگاهی', 'اپلیکیشن همراه', 'پشتیبانی ۱۲ ماه', 'آنالیتیکس پیشرفته'],
    popular: false,
  },
];

const SEO_STEPS = [
  { n: '۱', title: 'تحقیق کلمات کلیدی', text: 'شناسایی کلمات هدف بر اساس حجم جستجو، رقابت و قصد کاربر' },
  { n: '۲', title: ' ممیز فنی', text: 'بررسی سرعت، اسکیما، ریسپانسیو، نقشه‌ی سایت و خطاهای خزش' },
  { n: '۳', title: 'بهینه‌سازی فنی', text: 'رفع خطاها، بهبود Core Web Vitals و معماری محتوا' },
  { n: '۴', title: 'تولید محتوا', text: 'تولید مقالات و صفحات هدفمند با کلمات کلیدی انتخاب‌شده' },
  { n: '۵', title: 'لینک‌سازی', text: 'لینک‌سازی داخلی و خارجی اخلاقی برای افزایش اعتبار' },
  { n: '۶', title: 'پایش و گزارش', text: 'پایش ماهانه رتبه‌ها و گزارش شفاف عملکرد' },
];

export default function SeoPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'طراحی سایت و سئو',
            description:
              'طراحی سایت اختصاصی و واکنش‌گرا، بهینه‌سازی موتورهای جستجو و پشتیبانی شبانه‌روزی.',
            url: '/seo',
            areaServed: ['تهران', 'سمنان', 'ارومیه', 'مشهد', 'اصفهان', 'شیراز'],
            phone: CONTACTS.web.tel,
          }),
          faqSchema(FAQ_ITEMS.seo),
          breadcrumbSchema([
            { name: 'خانه', url: '/' },
            { name: 'طراحی سایت', url: '/seo' },
          ]),
        ]}
      />

      <PageHero
        title="طراحی سایت حرفه‌ای و سئو فنی با پشتیبانی شبانه‌روزی"
        description="ساخت سایت‌های اختصاصی، واکنش‌گرا و سریع با بهینه‌سازی فنی و محتوایی برای رتبه‌بندی پایدار در گوگل. پشتیبانی ۲۴ ساعته توسط تیم متخصص سرویس ۳۶۵."
        phone="web"
        icon={<Code className="h-7 w-7" />}
        breadcrumbs={[
          { name: 'خانه', url: '/' },
          { name: 'طراحی سایت', url: '/seo' },
        ]}
      />

      {/* Services grid */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="خدمات طراحی و سئو"
          title="شش خدمت اصلی برای حضور آنلاین حرفه‌ای"
          description="از طراحی اولیه تا رتبه‌بندی در گوگل؛ همه‌ی مراحل با یک تیم."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SEO_SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Code className="h-6 w-6" />
              </span>
              <h3 className="text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-secondary/40 py-14">
        <div className="container-px">
          <SectionHeading
            eyebrow="پکیج‌ها"
            title="بسته‌های طراحی سایت و سئو"
            description="سه بسته‌ی آماده برای نیازهای مختلف؛ همه قابل سفارشی‌سازی."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 ${
                  p.popular ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-border/60'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                    پرطرفدارترین
                  </span>
                )}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p dir="ltr" className="mt-2 text-right text-2xl font-extrabold text-primary">
                  {p.price}
                  <span className="text-sm font-normal text-muted-foreground"> تومان</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={CONTACTS.web.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-transform hover:scale-[1.02] ${
                    p.popular
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  درخواست مشاوره
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO process */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="فرایند سئو"
          title="شش گام سئو برای رتبه‌بندی پایدار"
          description="فرایند ساختارمند سرویس ۳۶۵ برای رسیدن به رتبه‌های اول گوگل."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SEO_STEPS.map((s) => (
            <div
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <span className="absolute -top-3 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground shadow-sm">
                {s.n}
              </span>
              <h3 className="mt-3 text-base font-bold">{s.title.replace(/\s+/, ' ')}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Long-form content */}
      <section className="container-px py-14">
        <div className="mx-auto max-w-4xl prose-fa">
          <h2>راهنمای کامل طراحی سایت و سئو فنی</h2>
          <p>
            در دنیای امروز، وب‌سایت شما ویترین کسب‌وکار شماست. یک سایت زیبا اما
            کند، یا یک سایت سریع اما بدون سئو، هر دو به یک اندازه بی‌فایده‌اند.
            سرویس ۳۶۵ با رویکردی یکپارچه، طراحی سایت و بهینه‌سازی موتورهای جستجو
            (سئو) را در کنار هم ارائه می‌دهد تا نه تنها سایت شما زیبا باشد، بلکه
            در گوگل دیده شود. تیم ما در تهران و ارومیه با تجربه‌ی چندساله در
            طراحی سایت‌های شرکتی، فروشگاهی و خدماتی، راهکار متناسب با کسب‌وکار
            شما را ارائه می‌دهد. شماره‌ی تماس این بخش ۰۹۱۴۳۴۰۳۴۳۱ است که به‌صورت
            شبانه‌روزی پاسخگو می‌باشد.
          </p>

          <h3>طراحی سایت اختصاصی</h3>
          <p>
            ما با قالب‌های آماده کار نمی‌کنیم. هر سایت از صفر و بر اساس نیاز
            کسب‌وکار شما طراحی می‌شود. تکنولوژی‌های مورد استفاده شامل Next.js،
            React و Tailwind CSS برای فرانت‌اند و Node.js یا PHP برای بک‌اند است.
            تمام سایت‌ها واکنش‌گرا (ریسپانسیو) هستند و در موبایل، تبلت و دسکتاپ
            تجربه‌ی یکسانی ارائه می‌دهند. سرعت بارگذاری در تمام سایت‌های ما زیر ۲
            ثانیه در شبکه‌ی ۴G است.
          </p>

          <h4>مراحل طراحی سایت</h4>
          <ol>
            <li>جلسه‌ی مشاوره و تحلیل نیاز کسب‌وکار.</li>
            <li>طراحی وایرفریم و نمونه‌ی اولیه‌ی رابط کاربری.</li>
            <li>طراحی گرافیک و هویت بصری.</li>
            <li>کدنویسی فرانت‌اند و بک‌اند.</li>
            <li>تست سرعت، امنیت و سازگاری مرورگرها.</li>
            <li>راه‌اندازی و آموزش پنل مدیریت.</li>
            <li>پشتیبانی و به‌روزرسانی مستمر.</li>
          </ol>

          <h3>سئو فنی</h3>
          <p>
            سئو فنی پایه‌ی موفقیت در گوگل است. بدون سئو فنی، حتی بهترین محتوا در
            صفحه‌ی دوم گوگل گم می‌شود. سرویس ۳۶۵ سئو فنی را در شش بخش ارائه
            می‌دهد: بهینه‌سازی سرعت (Core Web Vitals)، اسکیما مارک‌آپ (Schema
            Markup)، ریسپانسیو و موبایل‌اول، معماری محتوا و URL، نقشه‌ی سایت
            (sitemap) و فایل robots.txt، و رفع خطاهای خزش (crawl errors). هر
            سایت تحویلی با گزارش PageSpeed Insights با نمره‌ی بالای ۹۰ همراه
            است.
          </p>

          <h4>Core Web Vitals</h4>
          <p>
            گوگل سه شاخص اصلی برای تجربه‌ی کاربر در نظر می‌گیرد: LCP (بزرگترین
            محتوای قابل مشاهده زیر ۲٫۵ ثانیه)، FID (اولین تأخیر ورودی زیر ۱۰۰
            میلی‌ثانیه) و CLS (تغییرات چیدمان زیر ۰٫۱). سرویس ۳۶۵ تمام این شاخص‌ها
            را بهینه می‌کند تا سایت شما در معیارهای گوگل سبز باشد.
          </p>

          <h3>سئو محتوایی</h3>
          <p>
            محتوا پادشاه است، اما فقط محتوای هدفمند. تیم محتوای سرویس ۳۶۵ با
            تحقیق کلمات کلیدی، تحلیل قصد کاربر و رقبا، مقالات و صفحاتی تولید
            می‌کند که هم برای کاربر ارزشمند است و هم در گوگل رتبه می‌گیرد. هر
            مقاله حداقل ۱۵۰۰ کلمه، ساختارمند و دارای اسکیما است. ما به جای
            پرکردن سایت با محتوای بی‌کیفیت، روی محتوای عمیق و تخصصی تمرکز
            می‌کنیم.
          </p>

          <h3>طراحی ریسپانسیو و موبایل‌اول</h3>
          <p>
            بیش از ۷۰ درصد ترافیک وب ایران از موبایل است. گوگل هم از سال ۲۰۲۱
            به‌صورت موبایل‌اول ایندکس می‌کند. تمام سایت‌های سرویس ۳۶۵ با رویکرد
            موبایل‌اول طراحی می‌شوند؛ یعنی ابتدا نسخه‌ی موبایل بهینه می‌شود و
            سپس نسخه‌ی دسکتاپ. این رویکرد باعث می‌شود سایت شما هم در گوگل رتبه
            بالاتری بگیرد و هم برای کاربران موبایلی تجربه‌ی بهتری ارائه دهد.
          </p>

          <h3>بهینه‌سازی سرعت</h3>
          <p>
            سرعت سایت هم برای کاربر و هم برای گوگل مهم است. سرویس ۳۶۵ از
            تکنیک‌های کشینگ مرورگر، CDN، فشرده‌سازی تصاویر (WebP)، lazy loading و
            code splitting برای بهینه‌سازی سرعت استفاده می‌کند. نتیجه: سایت‌هایی
            که زیر ۲ ثانیه بارگذاری می‌شوند و در PageSpeed نمره‌ی بالای ۹۰
            می‌گیرند.
          </p>

          <h3>پشتیبانی ۲۴ ساعته</h3>
          <p>
            سایت شما در هر لحظه ممکن است با مشکل مواجه شود؛ از قطعی سرور تا
            هک شدن. سرویس ۳۶۵ پشتیبانی شبانه‌روزی ارائه می‌دهد تا در هر ساعت از
            شبانه‌روز، مشکلات سایت شما در کمترین زمان رفع شود. شماره‌ی پشتیبانی
            ۰۹۱۴۳۴۰۳۴۳۱ هم به‌صورت تماس و هم واتساپ در دسترس است. در پکیج‌های
            حرفه‌ای و فروشگاهی، مانیتورینگ ۲۴ ساعته‌ی آپتایم و امنیت ارائه
            می‌شود.
          </p>

          <h3>امنیت سایت</h3>
          <p>
            امنیت سایت یکی از مهم‌ترین فاکتورهای گوگل و اعتماد کاربر است. تمام
            سایت‌های سرویس ۳۶۵ با گواهی SSL (HTTPS)، فایروال وب (WAF)، بک‌آپ
            روزانه و محافظت در برابر حملات DDOS ارائه می‌شوند. در پکیج‌های
            پیشرفته، اسکن منظم بدافزار و تست نفوذ نیز انجام می‌شود.
          </p>

          <h3>چرا سرویس ۳۶۵؟</h3>
          <ul>
            <li>طراحی اختصاصی، نه قالب آماده</li>
            <li>سرعت زیر ۲ ثانیه و نمره‌ی PageSpeed بالای ۹۰</li>
            <li>سئو فنی و محتوایی یکپارچه</li>
            <li>پشتیبانی شبانه‌روزی</li>
            <li>گزارش شفاف ماهانه‌ی عملکرد</li>
            <li>ضمانت رضایت و تحویل فازبندی‌شده</li>
          </ul>

          <h3>تماس و مشاوره رایگان</h3>
          <p>
            برای دریافت مشاوره رایگان درباره‌ی طراحی سایت یا سئو، با{' '}
            <a href={`tel:${CONTACTS.web.tel}`}>{CONTACTS.web.display}</a> تماس
            بگیرید یا در واتساپ پیام دهید. کارشناسان ما در کمتر از ۲ ساعت پاسخ
            می‌دهند و پیشنهاد اولیه را ارسال می‌کنند.
          </p>
        </div>
      </section>

      <CtaBand
        title="وب‌سایت حرفه‌ای خود را همین امروز شروع کنید"
        description="طراحی اختصاصی، سئو فنی و پشتیبانی شبانه‌روزی؛ همه در یک پکیج."
        phone="web"
      />

      <FaqSection items={FAQ_ITEMS.seo} />
    </>
  );
}
