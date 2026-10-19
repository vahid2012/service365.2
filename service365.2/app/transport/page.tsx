import {
  Truck,
  Phone,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Car,
  Bus,
  Clock,
  User,
} from 'lucide-react';
import { CONTACTS, FAQ_ITEMS, PARTNER_LINKS } from '@/lib/site-data';
import { PageHero, SectionHeading, CtaBand } from '@/components/section-helpers';
import { FaqSection } from '@/components/faq-section';
import {
  JsonLd,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
} from '@/lib/jsonld';

export const metadata = {
  title: 'امداد خودرو رسمی استان سمنان و تهران، مینی‌بوس ارومیه و خودرو ماکو',
  description:
    'امداد خودرو رسمی تحت مدیریت آقای ابراهیم همتی‌نیا در تمام شهرهای استان سمنان و تهران، مینی‌بوس تلفنی ارومیه و خرید و فروش خودرو منطقه آزاد ماکو. تماس 09032486073.',
};

const SEMNAN_CITIES = ['سمنان', 'شاهرود', 'گرمسار', 'دامغان', 'مهدی‌شهر', 'ایوانکی', 'بیارجمند', 'سرخه', 'امیریه', 'کلاته'];
const TEHRAN_CITIES = ['تهران', 'ورامین', 'پاکدشت', 'قرچک', 'پیشوا', 'ری', 'ری‌شهر', 'کهریزک', 'شریف‌آباد', 'قیام‌دشت'];

const TOWING_SERVICES = [
  { title: 'یدک‌کش اضطراری', desc: 'اعزام یدک‌کش ۲۴ ساعته به محل خرابی خودرو' },
  { title: 'باتری‌اندازی فوری', desc: 'شارژ باتری در محل برای خودروهای خاموش‌شده' },
  { title: 'تعمیر در محل', desc: 'تعمیرات جزئی امدادی در صحنه‌ی خرابی' },
  { title: 'تخلیه‌ی بنزین', desc: 'انتقال سوخت اضطراری به خودروی بی‌سوخت' },
  { title: 'تعویض لاستیک', desc: 'تعویض و تعمیر لاستیک پنچره‌شده در محل' },
  { title: 'حمل خودرو تصادفی', desc: 'یدک تخت و کشنده برای خودروهای تصادفی' },
];

const TOWING_PRICING = [
  { service: 'یدک‌کش درون‌شهری', from: '۲۵۰٬۰۰۰', to: '۶۰۰٬۰۰۰' },
  { service: 'یدک‌کش برون‌شهری (هر ۱۰ کیلومتر)', from: '۸۰٬۰۰۰', to: '۱۵۰٬۰۰۰' },
  { service: 'باتری‌اندازی اضطراری', from: '۱۵۰٬۰۰۰', to: '۳۰۰٬۰۰۰' },
  { service: 'تعویض لاستیک اضطراری', from: '۱۲۰٬۰۰۰', to: '۲۵۰٬۰۰۰' },
  { service: 'حمل خودرو تصادفی (یدک تخت)', from: '۶۰۰٬۰۰۰', to: '۱٬۸۰۰٬۰۰۰' },
  { service: 'تخلیه‌ی بنزین اضطراری', from: '۱۸۰٬۰۰۰', to: '۳۵۰٬۰۰۰' },
];

export default function TransportPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'امداد خودرو و حمل‌ونقل',
            description:
              'امداد خودرو رسمی استان سمنان و تهران، مینی‌بوس تلفنی ارومیه و خودرو منطقه آزاد ماکو.',
            url: '/transport',
            areaServed: [...SEMNAN_CITIES, ...TEHRAN_CITIES, 'ارومیه'],
            phone: CONTACTS.primary.tel,
          }),
          faqSchema(FAQ_ITEMS.transport),
          breadcrumbSchema([
            { name: 'خانه', url: '/' },
            { name: 'امداد خودرو', url: '/transport' },
          ]),
        ]}
      />

      <PageHero
        title="امداد خودرو رسمی استان سمنان و تهران و مینی‌بوس ارومیه"
        description="ناوگان رسمی امداد خودرو تحت مدیریت آقای ابراهیم همتی‌نیا در تمام شهرهای استان سمنان و تهران، مینی‌بوس تلفنی ارومیه و خرید و فروش خودروهای منطقه آزاد ماکو. پشتیبانی شبانه‌روزی."
        phone="primary"
        icon={<Truck className="h-7 w-7" />}
        breadcrumbs={[
          { name: 'خانه', url: '/' },
          { name: 'امداد خودرو', url: '/transport' },
        ]}
      />

      {/* Manager highlight */}
      <section className="container-px py-12">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                <User className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase text-primary">مدیر امداد خودرو</p>
                <p className="text-xl font-extrabold">{CONTACTS.towingManager.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  ناوگان رسمی امداد خودرو استان سمنان و تهران تحت مدیریت ایشان فعالیت می‌کند.
                </p>
              </div>
            </div>
            <a
              href={`tel:${CONTACTS.towingManager.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              {CONTACTS.primary.display}
            </a>
          </div>
        </div>
      </section>

      {/* Towing services */}
      <section className="container-px py-12">
        <SectionHeading
          eyebrow="امداد خودرو"
          title="خدمات امداد خودرو رسمی سرویس ۳۶۵"
          description="ناوگان ما دارای مجوز رسمی امداد خودرو است و در تمام ساعت‌های شبانه‌روز اعزام می‌شود."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOWING_SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* City coverage */}
      <section className="bg-secondary/40 py-14">
        <div className="container-px">
          <SectionHeading
            eyebrow="پوشش جغرافیایی"
            title="امداد خودرو در تمام شهرهای استان سمنان و تهران"
            description="ناوگان رسمی سرویس ۳۶۵ زیر نظر آقای ابراهیم همتی‌نیا تمام شهرهای دو استان را پوشش می‌دهد."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <MapPin className="h-5 w-5 text-primary" />
                استان سمنان
              </h3>
              <div className="flex flex-wrap gap-2">
                {SEMNAN_CITIES.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/50 px-3 py-1.5 text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <MapPin className="h-5 w-5 text-primary" />
                استان تهران
              </h3>
              <div className="flex flex-wrap gap-2">
                {TEHRAN_CITIES.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/50 px-3 py-1.5 text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-5 text-sm">
            <p className="font-bold text-primary">پیوندهای همکار امداد خودرو:</p>
            <p className="mt-2 leading-8 text-muted-foreground">
              برای اطلاعات بیشتر به{' '}
              <a href={PARTNER_LINKS.emdadSemnan.href} target="_blank" rel="noopener noreferrer">
                {PARTNER_LINKS.emdadSemnan.label}
              </a>{' '}
              و{' '}
              <a href={PARTNER_LINKS.serviceSos.href} target="_blank" rel="noopener noreferrer">
                {PARTNER_LINKS.serviceSos.label}
              </a>{' '}
              مراجعه کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Towing pricing */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="هزینه‌ها"
          title="جدول قیمت تقریبی امداد خودرو"
          description="قیمت‌ها بر حسب تومان و بر اساس میانگین بازار است. قیمت نهایی پیش از حرکت اعلام می‌شود."
        />
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-primary/10 text-xs font-bold uppercase text-primary">
                <tr>
                  <th className="px-4 py-3">نوع خدمت</th>
                  <th className="px-4 py-3">از (تومان)</th>
                  <th className="px-4 py-3">تا (تومان)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {TOWING_PRICING.map((p) => (
                  <tr key={p.service} className="hover:bg-secondary/30">
                    <td className="px-4 py-3 font-bold">{p.service}</td>
                    <td className="px-4 py-3" dir="ltr">{p.from}</td>
                    <td className="px-4 py-3" dir="ltr">{p.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Minibus & Maku */}
      <section className="container-px py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-accent/30 bg-accent/5 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Bus className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-2xl font-bold">مینی‌بوس تلفنی ارومیه</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              برای جابه‌جایی خانوادگی، کارمندی، دانشجویی و تور در ارومیه، مینی‌بوس
              تلفنی با راننده‌ای مودب و خودروی تمیز رزرو کنید. ظرفیت ۱۱ تا ۱۸ نفر،
              قیمت شفاف و اعزام سریع.
            </p>
            <a
              href={`tel:${CONTACTS.primary.tel}`}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              رزرو مینی‌بوس: {CONTACTS.primary.display}
            </a>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Car className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-2xl font-bold">خودرو منطقه آزاد ماکو در ارومیه</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              خرید و فروش خودروهای وارداتی منطقه‌ی آزاد ماکو در ارومیه. خودروهای
              آمریکایی، اروپایی و آسیایی با اسناد قانونی منطقه آزاد و مشاوره‌ی
              کامل انتقال.
            </p>
            <a
              href={CONTACTS.primary.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              استعلام در واتساپ
            </a>
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="container-px py-14">
        <div className="mx-auto max-w-4xl prose-fa">
          <h2>امداد خودرو رسمی؛ راهنمای کامل خدمات نجات جاده‌ای</h2>
          <p>
            خرابی خودرو در جاده یا در شهر می‌تواند به یک کابوس تبدیل شود؛
            به‌ویژه اگر در شب یا در مسیرهای بین‌شهری رخ دهد. سرویس ۳۶۵ با ناوگان
            رسمی امداد خودرو زیر مدیریت آقای ابراهیم همتی‌نیا، خدمات نجات جاده‌ای
            و امداد خودرو را در تمام شهرهای استان سمنان و استان تهران به‌صورت
            شبانه‌روزی ارائه می‌دهد. این ناوگان دارای مجوز رسمی امداد خودرو
            (ام امداد خودرو) است و تمام رانندگان تحت پوشش بیمه‌ی شخص ثالث و
            بیمه‌ی یدک هستند. شماره‌ی واحد امداد ۰۹۰۳۲۴۸۶۰۷۳ است که در تمام ساعات
            روز و شب پاسخگو می‌باشد.
          </p>

          <h3>دامنه‌ی خدمات امداد خودرو</h3>
          <p>
            خدمات ناوگان امداد سرویس ۳۶۵ شامل یدک‌کش اضطراری، باتری‌اندازی فوری،
            تعمیر در محل، تخلیه‌ی بنزین، تعویض لاستیک پنچره‌شده و حمل خودروهای
            تصادفی با یدک تخت و کشنده است. در هر تماس، اعزام‌گر وضعیت خرابی،
            لوکیشن دقیق و نوع خودرو را پرسیده و نزدیک‌ترین یدک‌کش را اعزام
            می‌کند. میانگین زمان رسیدن در شهرهای تحت پوشش کمتر از ۴۵ دقیقه و در
            جاده‌های بین‌شهری استان سمنان و تهران کمتر از ۶۰ دقیقه است.
          </p>

          <h3>پوشش استان سمنان</h3>
          <p>
            امداد خودرو سرویس ۳۶۵ در تمام شهرهای استان سمنان شامل سمنان، شاهرود،
            گرمسار، دامغان، مهدی‌شهر، ایوانکی، بیارجمند، سرخه، امیریه و کلاته
            فعال است. این استان به دلیل قرار گرفتن در مسیر تهران-مشهد، حجم
            بالایی از تردد خودروهای سواری و سنگین را دارد و خرابی در جاده‌های
            این استان نیاز به واکنش سریع دارد. ناوگان ما در شهرهای اصلی مستقر
            است و در شهرهای کوچک‌تر از همکاران محلی استفاده می‌کند. برای
            اطلاعات بیشتر می‌توانید به وب‌سایت همکار{' '}
            <a href={PARTNER_LINKS.emdadSemnan.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.emdadSemnan.label}
            </a>{' '}
            مراجعه کنید.
          </p>

          <h3>پوشش استان تهران</h3>
          <p>
            در استان تهران، ناوگان ما در تهران، ورامین، پاکدشت، قرچک، پیشوا، ری،
            شهر ری، کهریزک، شریف‌آباد و قیام‌دشت فعال است. این منطقه به دلیل
            تراکم بالای شهر و جاده‌های پرتردد، بیشترین تعداد درخواست امداد را
            دارد. اعزام در شهرهای شرق تهران معمولاً زیر ۳۰ دقیقه انجام می‌شود.
            برای روستاهای اطرب، قرچک و پیشوا، اعزام از پایگاه نزدیک‌ترین شهر
            انجام می‌گیرد.
          </p>

          <h3>امداد خودرو و خدمات نجات</h3>
          <p>
            سرویس ۳۶۵ علاوه بر امداد خودرو، خدمات امداد و نجات در شرایط اضطراری
            (تصادف، خودرو در دره، سیلاب) را هماهنگ می‌کند. در این موارد با
            همکاری هلال احمر و آتش‌نشانی، عملیات نجات سازماندهی می‌شود. برای
            آشنایی بیشتر با خدمات امداد و نجات به وب‌سایت{' '}
            <a href={PARTNER_LINKS.serviceSos.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.serviceSos.label}
            </a>{' '}
            مراجعه کنید. تمام امدادکاران ما آموزش‌های اولیه‌ی نجات را گذرانده‌اند
            و در صحنه‌ی تصادف می‌توانند کمک‌های اولیه ارائه دهند.
          </p>

          <h3>مینی‌بوس تلفنی ارومیه</h3>
          <p>
            سرویس ۳۶۵ در ارومیه خدمت مینی‌بوس تلفنی ارائه می‌دهد؛ خدمتی که برای
            جابه‌جایی گروهی، تورهای محلی، انتقال کارمندان و دانشجویان ایده‌آل
            است. مینی‌بوس‌های ما ظرفیت ۱۱ تا ۱۸ نفر دارند و همگی دارای بیمه‌ی
            مسافر، سرویس بهداشتی (در مدل‌های بزرگ‌تر) و راننده‌ای حرفه‌ای و
            مودب هستند. برای رزرو کافی است با ۰۹۰۳۲۴۸۶۰۷۳ تماس بگیرید؛ اعزام در
            ارومیه معمولاً کمتر از ۳۰ دقیقه انجام می‌شود. قیمت بر اساس مسافت و
            مدت زمان اعلام می‌شود و پیش از حرکت قطعی می‌گردد.
          </p>

          <h3>خرید و فروش خودرو منطقه آزاد ماکو در ارومیه</h3>
          <p>
            منطقه‌ی آزاد ماکو یکی از مهم‌ترین مسیرهای واردات خودرو به ایران است.
            سرویس ۳۶۵ در ارومیه خرید و فروش خودروهای وارداتی منطقه آزاد ماکو را
            با اسناد قانونی، مشاوره‌ی انتقال و خدمات ثبت و پلاک‌گذاری ارائه
            می‌دهد. خودروهای موجود شامل برندهای آمریکایی (GM، کرایسلر)،
            اروپایی (BMW، بنز، آئودی) و آسیایی (تویوتا، هیوندای، کیا) است. تمام
            خودروها دارای کارت خودروی منطقه آزاد و فاکتور رسمی هستند و مشاور
            حقوقی ما فرایند انتقال به نام خریدار را در ارومیه انجام می‌دهد.
          </p>

          <h3>ایمنی و بیمه</h3>
          <p>
            تمام یدک‌کش‌های ناوگان سرویس ۳۶۵ دارای بیمه‌ی یدک و بیمه‌ی شخص ثالث
            هستند. در حین یدک‌کشی، مسئولیت هرگونه آسیب به خودرو بر عهده‌ی ناوگان
            است. رانندگان آموزش دیده‌اند تا خودروهای هیبریدی و الکتریکی را با
            تسمه‌های مخصوص و بدون آسیب به باتری یدک کنند. در خودروهای تمام‌پایه
            و اسپرت، از یدک تخت استفاده می‌شود تا آسیب به سیستم تعلیق وارد
            نشود.
          </p>

          <h3>نحوه ثبت درخواست</h3>
          <ol>
            <li>تماس با ۰۹۰۳۲۴۸۶۰۷۳ یا پیام در واتساپ با لوکیشن دقیق.</li>
            <li>اعلام نوع خودرو، علامت خرابی و شماره‌ی پلاک.</li>
            <li>اعلام قیمت و زمان رسیدن یدک‌کش.</li>
            <li>اعزام نزدیک‌ترین یدک و پیگیری زنده‌ی مسیر.</li>
            <li>انجام خدمت و صدور فاکتور رسمی.</li>
          </ol>

          <h3>تعهد سرویس ۳۶۵</h3>
          <p>
            ما متعهدیم که در هر شرایط جوی و در هر ساعت از شبانه‌روز، به شما
            برسیم. تماس شما مستقیماً به اعزام‌گر منطقه‌ی شما وصل می‌شود و در
            صورت نیاز، آقای ابراهیم همتی‌نیا شخصاً پیگیر پرونده خواهد بود.
          </p>
        </div>
      </section>

      <CtaBand
        title="در خرابی خودرو تنها نمانید"
        description="ناوگان رسمی امداد خودرو سرویس ۳۶۵ آماده‌ی اعزام شبانه‌روزی در استان سمنان و تهران است."
        phone="primary"
      />

      <FaqSection items={FAQ_ITEMS.transport} />
    </>
  );
}
