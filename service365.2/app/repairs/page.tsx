import Link from 'next/link';
import {
  Wrench,
  ShieldCheck,
  Phone,
  MessageCircle,
  AlertTriangle,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import {
  REPAIR_CITIES,
  REPAIR_APPLIANCES,
  CONTACTS,
  FAQ_ITEMS,
  PARTNER_LINKS,
} from '@/lib/site-data';
import { getIcon } from '@/lib/icons';
import { PageHero, SectionHeading, CtaBand } from '@/components/section-helpers';
import { FaqSection } from '@/components/faq-section';
import {
  JsonLd,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
} from '@/lib/jsonld';

export const metadata = {
  title: 'تعمیر لوازم خانگی در گرمسار، سمنان، ارومیه، آمل و شهرهای سراسری',
  description:
    'تعمیر تخصصی یخچال، لباسشویی، تلویزیون، کولر گازی، پکیج و اجاق گاز با قطعات اصل و گارانتی در گرمسار، شاهرود، سمنان، پاکدشت، قرچک، ورامین، پیشوا، ارومیه، بوکان، میاندوآب، تاکستان، بروجرد، آمل، نور، چمستان، نیشابور و سبزوار.',
};

const PRICING_ROWS = [
  { device: 'یخچال فریزر دو درب', issue: 'تعمیر کمپرسور / شارژ گاز', from: '۸۰۰٬۰۰۰', to: '۲٬۵۰۰٬۰۰۰' },
  { device: 'یخچال ساید‌بای‌ساید', issue: 'تعمیر برد / سنسور', from: '۱٬۲۰۰٬۰۰۰', to: '۳٬۸۰۰٬۰۰۰' },
  { device: 'لباسشویی اتوماتیک', issue: 'تعویض بلبرینگ / آموریسر', from: '۷۰۰٬۰۰۰', to: '۲٬۲۰۰٬۰۰۰' },
  { device: 'تلویزیون LED', issue: 'تعویض بک‌لایت / برد', from: '۵۰۰٬۰۰۰', to: '۲٬۸۰۰٬۰۰۰' },
  { device: 'کولر گازی اسپلیت', issue: 'شارژ گاز / تعویض کمپرسور', from: '۶۰۰٬۰۰۰', to: '۳٬۰۰۰٬۰۰۰' },
  { device: 'پکیج دیواری', issue: 'تعویض شیر سه‌راهه / سنسور', from: '۵۰۰٬۰۰۰', to: '۲٬۰۰۰٬۰۰۰' },
  { device: 'اجاق گاز توکار', issue: 'تعویض شمع / ترموكوپل', from: '۳۰۰٬۰۰۰', to: '۱٬۲۰۰٬۰۰۰' },
  { device: 'ظرفشویی', issue: 'تعویض پمپ تخلیه / هیتر', from: '۵۰۰٬۰۰۰', to: '۱٬۸۰۰٬۰۰۰' },
];

const TROUBLESHOOT: { device: string; symptom: string; cause: string; action: string }[] = [
  { device: 'یخچال', symptom: 'سرد نمی‌کند ولی موتور کار می‌کند', cause: 'نشتی گاز یا کثیفی کندانسور', action: 'تمیز کردن کندانسور + شارژ گاز' },
  { device: 'یخچال', symptom: 'برفک زیاد روی اواپراتور', cause: 'خرابی هیتر دیفراست یا ترموستات', action: 'تست هیتر و تعویض ترموستات' },
  { device: 'لباسشویی', symptom: 'آب تخلیه نمی‌شود', cause: 'انسداد فیلتر پمپ یا خرابی پمپ', action: 'تمیز کردن فیلتر / تعویض پمپ' },
  { device: 'لباسشویی', symptom: 'لرزش شدید هنگام استخراج', cause: 'فرسودگی بلبرینگ یا نامیزان بودن', action: 'تعویض بلبرینگ + میزان‌سازی' },
  { device: 'تلویزیون', symptom: 'تصویر تاریک یا بدون تصویر', cause: 'خرابی بک‌لایت یا اینورتر', action: 'تست LEDها و تعویض بک‌لایت' },
  { device: 'کولر گازی', symptom: 'کولر سرد نمی‌کند', cause: 'کمبود گاز یا کثیفی فیلتر', action: 'شستن فیلتر + شارژ گاز R410' },
  { device: 'پکیج', symptom: 'روشن نمی‌شود و کد E می‌دهد', cause: 'فشار آب پایین یا خرابی سنسور شعله', action: 'تنظیم فشار + تعویض سنسور' },
  { device: 'اجاق گاز', symptom: 'شعله جرقه نمی‌زند', cause: 'خرابی شمع یا ماژول جرقه‌زن', action: 'تعویض شمع / ماژول' },
];

export default function RepairsPage() {
  const applianceIcon = (name: string) => {
    const a = REPAIR_APPLIANCES.find((x) => x.name === name);
    return a ? a.icon : 'Wrench';
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'تعمیر لوازم خانگی',
            description:
              'تعمیر تخصصی یخچال، لباسشویی، تلویزیون، کولر گازی، پکیج و اجاق گاز با گارانتی.',
            url: '/repairs',
            areaServed: REPAIR_CITIES,
            phone: CONTACTS.primary.tel,
          }),
          faqSchema(FAQ_ITEMS.repairs),
          breadcrumbSchema([
            { name: 'خانه', url: '/' },
            { name: 'تعمیرات', url: '/repairs' },
          ]),
        ]}
      />

      <PageHero
        title="تعمیر تخصصی لوازم خانگی با گارانتی در سراسر ایران"
        description="اعزام تکنسین متخصص برای تعمیر یخچال، لباسشویی، تلویزیون، کولر گازی، پکیج و اجاق گاز با قطعات اصل و کارت گارانتی. خدمات در ۱۷ شهر کشور فعال است."
        phone="primary"
        icon={<Wrench className="h-7 w-7" />}
        breadcrumbs={[
          { name: 'خانه', url: '/' },
          { name: 'تعمیرات', url: '/repairs' },
        ]}
      />

      {/* Appliance cards */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="دستگاه‌های قابل تعمیر"
          title="شش گروه لوازم خانگی پوشش‌داده‌شده توسط سرویس ۳۶۵"
          description="هر گروه با تکنسین متخصص همان برند و قطعات اصل تعمیر می‌شود."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIR_APPLIANCES.map((a) => {
            const Icon = getIcon(a.icon);
            return (
              <div
                key={a.name}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold">{a.name}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {a.issues.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Troubleshooting table */}
      <section className="container-px py-12">
        <SectionHeading
          eyebrow="عیب‌یابی"
          title="جدول عیب‌یابی رایج لوازم خانگی"
          description="مرجع سریع برای تشخیص علائم و راه‌حل احتمالی پیش از اعزام تکنسین."
        />
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-secondary/60 text-xs font-bold uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">دستگاه</th>
                  <th className="px-4 py-3">علامت</th>
                  <th className="px-4 py-3">علت احتمالی</th>
                  <th className="px-4 py-3">اقدام پیشنهادی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {TROUBLESHOOT.map((t, idx) => {
                  const Icon = getIcon(applianceIcon(t.device));
                  return (
                    <tr key={idx} className="transition-colors hover:bg-secondary/30">
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-2 font-bold">
                          <Icon className="h-4 w-4 text-primary" />
                          {t.device}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{t.symptom}</td>
                      <td className="px-4 py-3 text-muted-foreground">{t.cause}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {t.action}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="bg-secondary/40 py-14">
        <div className="container-px">
          <SectionHeading
            eyebrow="قیمت‌گذاری شفاف"
            title="جدول قیمت تقريبی تعمیرات لوازم خانگی"
            description="قیمت‌ها بر اساس میانگین بازار و بر حسب تومان است. قیمت نهایی پس از عیب‌یابی دقیق اعلام می‌شود و در صورت انجام تعمیر، هزینه‌ی عیب‌یابی از فاکتور کسر می‌گردد."
          />
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead className="bg-primary/10 text-xs font-bold uppercase text-primary">
                  <tr>
                    <th className="px-4 py-3">دستگاه</th>
                    <th className="px-4 py-3">نوع خرابی</th>
                    <th className="px-4 py-3">از (تومان)</th>
                    <th className="px-4 py-3">تا (تومان)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {PRICING_ROWS.map((p, i) => (
                    <tr key={i} className="transition-colors hover:bg-secondary/30">
                      <td className="px-4 py-3 font-bold">{p.device}</td>
                      <td className="px-4 py-3 text-muted-foreground">{p.issue}</td>
                      <td className="px-4 py-3" dir="ltr">{p.from}</td>
                      <td className="px-4 py-3" dir="ltr">{p.to}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            قیمت‌ها صرفاً جهت برآورد اولیه است و با توجه به برند، مدل و قطعه‌ی
            مصرفی متفاوت خواهد بود. برای دریافت قیمت دقیق با{' '}
            <a href={`tel:${CONTACTS.primary.tel}`} className="font-bold text-primary">
              {CONTACTS.primary.display}
            </a>{' '}
            تماس بگیرید.
          </p>
        </div>
      </section>

      {/* City coverage */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="شهرهای تحت پوشش"
          title="۱۷ شهر فعال در خدمات تعمیر لوازم خانگی"
          description="برای هر شهر، تکنسین‌های محلی یا همکاران منطقه‌ای اعزام می‌شوند تا کمترین زمان انتظار را داشته باشید."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {REPAIR_CITIES.map((c) => (
            <div
              key={c}
              className="flex items-center gap-2 rounded-xl border border-border/60 bg-card px-3 py-2.5 text-sm font-medium shadow-sm transition-colors hover:border-primary/40"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {c}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-5 text-sm">
          <p className="font-bold text-primary">پیوندهای همکار تعمیرات:</p>
          <p className="mt-2 leading-8 text-muted-foreground">
            برای شهر آمل می‌توانید به{' '}
            <a href={PARTNER_LINKS.tamiratAmol.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.tamiratAmol.label}
            </a>{' '}
            و برای شهر پاکدشت به{' '}
            <a href={PARTNER_LINKS.tamirPakdasht.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.tamirPakdasht.label}
            </a>{' '}
            مراجعه کنید.
          </p>
        </div>
      </section>

      {/* Long-form content */}
      <section className="container-px py-14">
        <div className="mx-auto max-w-4xl prose-fa">
          <h2>راهنمای کامل تعمیر لوازم خانگی در محل</h2>
          <p>
            تعمیر لوازم خانگی یکی از حساس‌ترین خدمات روزمره است؛ زیرا هر ساعت
            خاموشی دستگاه، زندگی خانواده را دچار اختلال می‌کند. سرویس ۳۶۵ با
            شبکه‌ای از تکنسین‌های آموزش‌دیده و قطعات اصل، خدماتی ساختارمند در ۱۷
            شهر کشور ارائه می‌دهد. ما به سه اصل پایبندیم: عیب‌یابی دقیق، قیمت شفاف
            و گارانتی واقعی. در این صفحه با جزئیات کامل به تشریح فرایند تعمیر هر
            دستگاه، علائم رایج خرابی، علت‌های احتمالی و راه‌حل می‌پردازیم تا شما
            پیش از اعزام تکنسین، در جریان قرار بگیرید.
          </p>

          <h3>تعمیر یخچال فریزر</h3>
          <p>
            یخچال قلب آشپزخانه است و خرابی آن می‌تواند به سرعت به فساد مواد
            غذایی منجر شود. شایع‌ترین عیوب یخچال عبارت‌اند از: سرد نکردن compartmen
            فریزر، برفک زدن اواپراتور، صدای غیرعادی موتور، نشتی روغن از کمپرسور و
            خرابی ترموستات. علت این مشکلات اغلب نشتی گاز فریون، فرسودگی ترموستات،
            کثیفی کندانسور و خرابی هیتر دیفراست است. تکنسین سرویس ۳۶۵ ابتدا با
            مانومتر فشار گاز را اندازه‌گیری می‌کند، سپس نشتی را با گاز نیتروژن
            شناسایی کرده و پس از رفع، گاز R134a یا R600a را شارژ می‌کند. تعمیر
            کمپرسور در مدل‌های اینورتر تخصصی‌تر است و نیازمند برد تست اینورتر
            است. تمام شارژ گاز و تعویض قطعات با کارت گارانتی ۱۲ ماهه انجام
            می‌شود.
          </p>

          <h3>تعمیر لباسشویی اتوماتیک</h3>
          <p>
            لباسشویی‌های اتوماتیک دارای بخش‌های مکانیکی، الکتریکی و هیدرولیکی
            هستند. علائم رایج شامل ریختن آب از زیر دستگاه، لرزش شدید در دور
            استخراج، عدم تخلیه‌ی آب، روشن نشدن دستگاه و کدهای خطای برد است. علت
            ریختن آب معمولاً پارگی شلنگ آموریسر یا خرابی واشر درب است. لرزش شدید
            ناشی از فرسودگی بلبرینگ یا نامیزان بودن پایه‌هاست. تخلیه نشدن آب به
            انسداد فیلتر پمپ یا خرابی پمپ تخلیه برمی‌گردد. تکنسین ما با دستگاه
            تست موتور، آمریتر و مولتی‌متر، بخش معیوب را شناسایی و قطعه‌ی اصل
            (سامسونگ، ال‌جی، بوش یا نسخه‌ی معادل OEM) را نصب می‌کند.
          </p>

          <h3>تعمیر تلویزیون LED و QLED</h3>
          <p>
            تلویزیون‌های مدرن حساس‌ترین دستگاه‌های خانگی از نظر تعمیر هستند.
            شایع‌ترین عیب، تاریک شدن تصویر یا روشن نشدن صفحه است که اغلب به خرابی
            بک‌لایت LED یا اینورتر برمی‌گردد. خطوط افقی یا عمودی روی صفحه نشان‌دهنده‌ی
            خرابی درایور T-Con یا آسیب فیزیکی پنل است. تکنسین سرویس ۳۶۵ با
            مولتی‌متر ویدئویی و لوپ تست، نوار LED معیوب را شناسایی و تنها همان
            نوار را تعویض می‌کند تا هزینه‌ی تعمیر به‌جای تعویض کل پنل، حداقل
            ممکن بماند.
          </p>

          <h3>تعمیر کولر گازی اسپلیت</h3>
          <p>
            کولر گازی در تابستان نقش حیاتی دارد. علائم خرابی شامل سرد نکردن،
            نشتی گاز، یخ زدن لوله‌ی مسی، صدای غیرعادی فن داخلی یا بیرونی و کدهای
            خطای برد است. علت سرد نکردن معمولاً کربد گاز R410 یا R32 است. نشتی
            گاز اغلب از اتصالات فلر یا سوراخ در لوله‌ی مسی ناشی می‌شود. یخ زدن
            لوله نشان‌دهنده‌ی کثیفی فیلتر یا کمبود گاز است. تکنسین با مانومتر
            دیجیتال فشار مکش و دهش را می‌سنجد، نشتی را با گاز نیتروژن و صابون‌آب
            پیدا می‌کند، سپس پس از جوشکاری اتصال، گاز را شارژ می‌کند.
          </p>

          <h3>تعمیر پکیج دیواری</h3>
          <p>
            پکیج‌های دیواری بوش، وایانت، ایران‌رادیاتور و اسپلندید در زمستان
            حیاتی هستند. علائم رایج: روشن نشدن، کدهای خطای E (E1, E2, E4)، نشتی
            آب، گرم نکردن شوفاژ و صدای تق‌تق. کد E1 یعنی فشار آب زیر ۰٫۶ بار است
            و باید شیر پرکن باز شود. کد E4 خرابی سنسور شعله یا مشکلات دودکش را
            نشان می‌دهد. تق‌تق ناشی از هواگیری سیستم یا خرابی پمپ سیرکولاتور است.
            تکنسین با تست گازسنج، سنسور شعله و فشارسنج، ریشه‌ی مشکل را برطرف
            می‌کند.
          </p>

          <h3>تعمیر اجاق گاز توکار و رومیزی</h3>
          <p>
            اجاق گاز توکار مشکلاتی مانند جرقه نزدن، گاز سوختن نکردن، نشتی شلنگ
            و تنظیم نبودن شعله را تجربه می‌کند. خرابی شمع (ترموکوپل) باعث خاموش
            شدن شعله پس از رها کردن دسته می‌شود. نشتی شلنگ گاز بسیار خطرناک است
            و باید با کف‌صابون تست شود. ماژول جرقه‌زن در مدل‌های جدید قطعه‌ای
            الکترونیکی است که خرابی آن نیاز به تعویض دارد. سرویس ۳۶۵ برای هر
            تعمیر گاز، تست نشتی‌یاب دیجیتال انجام می‌دهد و ایمنی دستگاه را
            تأیید می‌کند.
          </p>

          <h3>فرایند اعزام تکنسین</h3>
          <ol>
            <li>تماس با ۰۹۰۳۲۴۸۶۰۷۳ و شرح علامت دستگاه.</li>
            <li>اعلام زمان اعزام (معمولاً کمتر از ۶۰ دقیقه در شهرهای تحت پوشش).</li>
            <li>عیب‌یابی رایگان در محل (در صورت انجام تعمیر).</li>
            <li>اعلام قیمت قطعات و دستمزد پیش از شروع.</li>
            <li>تعمیر با قطعه‌ی اصل و صدور کارت گارانتی.</li>
            <li>پشتیبانی پس از تعمیر و پیگیری رضایت.</li>
          </ol>

          <h3>گارانتی و تعهدات</h3>
          <p>
            تمام قطعات نصب‌شده دارای هولوگرام تولیدکننده هستند و کارت گارانتی
            ۱۲ تا ۲۴ ماهه (بسته به نوع قطعه) صادر می‌شود. اگر در دوره‌ی گارانتی
            قطعه دوباره خراب شود، تعویض و اعزام مجانی است. این تعهد باعث شده
            سرویس ۳۶۵ به مرجع مورد اعتماد تعمیرات در شهرهای گرمسار، شاهرود،
            سمنان، پاکدشت، قرچک، ورامین، پیشوا، ارومیه، بوکان، میاندوآب، تاکستان،
            بروجرد، آمل، نور، چمستان، نیشابور و سبزوار تبدیل شود.
          </p>

          <h3>پیوندهای همکار در شهرهای دیگر</h3>
          <p>
            برای شهر آمل می‌توانید به وب‌سایت تخصصی{' '}
            <a href={PARTNER_LINKS.tamiratAmol.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.tamiratAmol.label}
            </a>{' '}
            مراجعه کنید. در پاکدشت نیز{' '}
            <a href={PARTNER_LINKS.tamirPakdasht.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.tamirPakdasht.label}
            </a>{' '}
            خدمات هم‌سطح سرویس ۳۶۵ ارائه می‌دهد. این شبکه‌ی همکاران باعث می‌شود
            حتی در شهرهایی که پایگاه مستقیم نداریم، کیفیت خدمات ثابت بماند.
          </p>
        </div>
      </section>

      <CtaBand
        title="تعمیر لوازم خانگی خود را همین حالا رزرو کنید"
        description="اعزام فوری تکنسین به محل با قطعات اصل و گارانتی. تماس با ۰۹۰۳۲۴۸۶۰۷۳ یا پیام در واتساپ."
        phone="primary"
      />

      <FaqSection items={FAQ_ITEMS.repairs} />
    </>
  );
}
