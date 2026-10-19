import {
  TrendingUp,
  Package,
  Leaf,
  FileText,
  Scale,
  Phone,
  MessageCircle,
  Globe,
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
  title: 'تجارت، خاک توتون و صادرات خرما | واردات و صادرات قانونی',
  description:
    'خرید و فروش خاک توتون کشاورزی، صادرات خرما به روسیه و کشورهای همسایه و مشاوره واردات و صادرات با مجوز و قرارداد رسمی.',
};

const TRADE_SERVICES = [
  { title: 'خاک توتون', desc: 'خاک مخصوص کشت توتون با تحلیل آزمایشگاهی و اسناد قانونی', icon: 'Leaf' },
  { title: 'صادرات خرما', desc: 'صادرات خرما به روسیه، ترکیه، عراق، امارات و آسیای میانه', icon: 'Package' },
  { title: 'واردات و صادرات', desc: 'مشاوره، ترخیص، اظهارنامه و حمل بین‌المللی', icon: 'Globe' },
  { title: 'قرارداد تجاری', desc: 'تنظیم قرارداد داخلی و صادراتی با مشاوره حقوقی', icon: 'Scale' },
];

const TOBACCO_SOIL_TYPES = [
  { type: 'خاک لومی رسی', ph: '۶٫۵ تا ۷٫۲', use: 'کشت توتون ویرجینیا', price: '۸۰٬۰۰۰' },
  { type: 'خاک شنی لومی', ph: '۵٫۸ تا ۶٫۵', use: 'کشت توتون برلی', price: '۷۰٬۰۰۰' },
  { type: 'خاک رسی سنگین', ph: '۶٫۰ تا ۷٫۰', use: 'کشت توتون شرقی', price: '۶۵٬۰۰۰' },
  { type: 'خاک اصلاح‌شده آلی', ph: '۶٫۲ تا ۶٫۸', use: 'گلخانه و کشت دقیق', price: '۱۱۰٬۰۰۰' },
];

const DATE_EXPORT_DEST = [
  { country: 'روسیه', eta: '۱۰ تا ۱۸ روز', demand: 'بسیار بالا' },
  { country: 'ترکیه', eta: '۵ تا ۱۰ روز', demand: 'بالا' },
  { country: 'عراق', eta: '۳ تا ۷ روز', demand: 'بسیار بالا' },
  { country: 'امارات', eta: '۷ تا ۱۴ روز', demand: 'متوسط' },
  { country: 'آسیای میانه', eta: '۱۴ تا ۲۱ روز', demand: 'در رشد' },
  { country: 'هند', eta: '۲۰ تا ۲۸ روز', demand: 'متوسط' },
];

export default function TradePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'تجارت و صادرات',
            description:
              'تجارت خاک توتون، صادرات خرما و خدمات واردات و صادرات با مشاوره گمرکی.',
            url: '/trade',
            areaServed: ['ایران', 'روسيه', 'ترکیه', 'عراق', 'امارات'],
            phone: CONTACTS.web.tel,
          }),
          faqSchema(FAQ_ITEMS.trade),
          breadcrumbSchema([
            { name: 'خانه', url: '/' },
            { name: 'تجارت', url: '/trade' },
          ]),
        ]}
      />

      <PageHero
        title="تجارت، خاک توتون و صادرات خرما"
        description="خرید و فروش خاک توتون کشاورزی، صادرات خرما به کشورهای همسایه و خدمات کامل واردات و صادرات با مشاوره‌ی گمرکی و حقوقی."
        phone="web"
        icon={<TrendingUp className="h-7 w-7" />}
        breadcrumbs={[
          { name: 'خانه', url: '/' },
          { name: 'تجارت', url: '/trade' },
        ]}
      />

      {/* Trade services */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="خدمات تجاری"
          title="چهار حوزه‌ی اصلی تجارت سرویس ۳۶۵"
          description="از تأمین خاک کشاورزی تا صادرات محصول؛ تمام مراحل با مشاور حقوقی و گمرکی."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRADE_SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <TrendingUp className="h-6 w-6" />
              </span>
              <h3 className="text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tobacco soil table */}
      <section className="bg-secondary/40 py-14">
        <div className="container-px">
          <SectionHeading
            eyebrow="خاک توتون"
            title="جدول خاک‌های توتون قابل تأمین"
            description="خاک‌ها با تحلیل آزمایشگاهی pH و درصد مواد آلی عرضه می‌شوند. قیمت‌ها بر حسب تومان برای هر تن است."
          />
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead className="bg-primary/10 text-xs font-bold uppercase text-primary">
                  <tr>
                    <th className="px-4 py-3">نوع خاک</th>
                    <th className="px-4 py-3">pH مناسب</th>
                    <th className="px-4 py-3">کاربرد</th>
                    <th className="px-4 py-3">قیمت هر تن (تومان)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {TOBACCO_SOIL_TYPES.map((t) => (
                    <tr key={t.type} className="hover:bg-secondary/30">
                      <td className="px-4 py-3 font-bold">{t.type}</td>
                      <td className="px-4 py-3 text-muted-foreground" dir="ltr">{t.ph}</td>
                      <td className="px-4 py-3 text-muted-foreground">{t.use}</td>
                      <td className="px-4 py-3 font-bold text-primary" dir="ltr">{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Date export table */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="صادرات خرما"
          title="مقاصد صادراتی خرما"
          description="صادرات خرما (موزائی، پیارم، کب‌کاب، زاهدی) به شش کشور اصلی با حمل دریایی و زمینی."
        />
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-accent/10 text-xs font-bold uppercase text-accent">
                <tr>
                  <th className="px-4 py-3">کشور مقصد</th>
                  <th className="px-4 py-3">زمان حمل</th>
                  <th className="px-4 py-3">تقاضای بازار</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {DATE_EXPORT_DEST.map((d) => (
                  <tr key={d.country} className="hover:bg-secondary/30">
                    <td className="px-4 py-3 font-bold">{d.country}</td>
                    <td className="px-4 py-3 text-muted-foreground" dir="ltr">{d.eta}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                        {d.demand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="container-px py-14">
        <div className="mx-auto max-w-4xl prose-fa">
          <h2>تجارت خاک توتون و صادرات خرما؛ راهنمای کامل</h2>
          <p>
            بخش تجارت سرویس ۳۶۵ در سه حوزه‌ی خاک توتون، صادرات خرما و خدمات کلی
            واردات و صادرات فعال است. ما با تیم کارشناسان کشاورزی، گمرکی و
            حقوقی، فرایند تأمین، بسته‌بندی، ترخیص و حمل بین‌المللی را به‌صورت
            یکپارچه ارائه می‌دهیم. شماره‌ی تماس این بخش ۰۹۱۴۳۴۰۳۴۳۱ است که هم به‌صورت
            تماس و هم واتساپ پاسخگو می‌باشد.
          </p>

          <h3>خرید و فروش خاک توتون</h3>
          <p>
            توتون یکی از محصولات اقتصادی حساس به خاک است. نوع خاک، pH و درصد
            مواد آلی مستقیماً بر کیفیت برگ و نیکوتین تأثیر می‌گذارد. سرویس ۳۶۵
            خاک توتون مخصوص کشت ویرجینیا، برلی و توتون شرقی را با تحلیل
            آزمایشگاهی ارائه می‌دهد. هر محموله دارای گزارش آزمایش pH، هدایت
            الکتریکی (EC) و درصد مواد آلی است. خاک‌های ما از معادن داخلی و
            اصلاح‌شده‌ی آلی تأمین می‌شوند و در بسته‌های ۲۰ تا ۵۰ کیلویی و فله‌ی
            یک‌تنی عرضه می‌گردند.
          </p>

          <h4>معیار انتخاب خاک توتون</h4>
          <ul>
            <li>pH بین ۵٫۸ تا ۷٫۲ بسته به نوع توتون</li>
            <li>هدایت الکتریکی زیر ۰٫۸ دسی‌زیمنس بر متر</li>
            <li>درصد مواد آلی حداقل ۲٪</li>
            <li>تهویه‌پذیری مناسب (خاک لومی یا شنی‌لومی)</li>
            <li>عاری از علف‌های هرز و آفات</li>
          </ul>

          <h3>صادرات خرما</h3>
          <p>
            خرما یکی از مهم‌ترین محصولات صادراتی ایران است. سرویس ۳۶۵ صادرات
            ارقام موزائی، پیارم، کب‌کاب، زاهدی و مجول را به روسیه، ترکیه، عراق،
            امارات، کشورهای آسیای میانه و هند انجام می‌دهد. فرایند صادرات شامل
            تأمین از باغات، بسته‌بندی استاندارد (کارتن ۵ و ۱۰ کیلویی با
            وکیوم)، صدور گواهی بهداشت گیاهی، اظهارنامه‌ی صادراتی و حمل بین‌المللی
            است. در مقاصد اصلی، همکاران گمرکی ما فرایند ترخیص را انجام
            می‌دهند.
          </p>

          <h4>ارقام صادراتی پرطرفدار</h4>
          <ul>
            <li><strong>موزائی:</strong> تقاضای بالا در روسیه و اروپای شرقی</li>
            <li><strong>پیارم:</strong> بازار روسیه و ترکیه</li>
            <li><strong>کب‌کاب:</strong> مصرف داخلی عراق و امارات</li>
            <li><strong>زاهدی:</strong> بازار سنتی هند و پاکستان</li>
            <li><strong>مجول:</strong> صادرات لوکس به اروپا</li>
          </ul>

          <h3>واردات و صادرات کلی</h3>
          <p>
            علاوه بر خاک توتون و خرما، سرویس ۳۶۵ مشاور واردات و صادرات برای
            کالاهای مجاز ارائه می‌دهد. خدمات شامل مشاوره‌ی تعرفه‌ی گمرکی،
            اظهارنامه، ترخیص، حمل دریایی، زمینی و هوایی، و تنظیم قرارداد با
            خریدار خارجی است. کارشناس حقوقی ما قراردادهای صادراتی را با شرط
            تحویل (FOB, CIF, EXW) و شرط پرداخت (LC, TT) تنظیم می‌کند.
          </p>

          <h3>فرایند تجاری</h3>
          <ol>
            <li>تماس با ۰۹۱۴۳۴۰۳۴۳۱ و اعلام محصول و حجم.</li>
            <li>ارسال پیشنهاد قیمت و نمونه (در صورت امکان).</li>
            <li>عقد قرارداد و دریافت پیش‌پرداخت.</li>
            <li>تأمین، بسته‌بندی و صدور گواهی‌ها.</li>
            <li>اظهارنامه‌ی گمرکی و حمل بین‌المللی.</li>
            <li>تحویل در مقصد و تسویه نهایی.</li>
          </ol>

          <h3>مجوزها و اسناد</h3>
          <p>
            تمام محموله‌های صادراتی دارای گواهی بهداشت گیاهی، گواهی مبدا (CO) و
            فاکتور رسمی هستند. برای کشورهای خاص، گواهی ایزو و حلال نیز قابل
            صدور است. در واردات، مجوز وزارت بهداشت یا صنعت و معدن (بسته به نوع
            کالا) توسط کارشناس ما تأمین می‌شود.
          </p>

          <h3>بازارهای هدف</h3>
          <p>
            تمرکز صادراتی سرویس ۳۶۵ بر روسیه، ترکیه، عراق، امارات و کشورهای
            آسیای میانه است. این بازارها به دلیل نزدیکی جغرافیایی، حجم تقاضا و
            مسیرهای حمل متعدد، بازدهی بالایی دارند. برای هر بازار، تحقیقات
            قیمت‌گذاری و رقبا به‌صورت فصلی به‌روز می‌شود و در اختیار مشتریان
            قرار می‌گیرد.
          </p>

          <h3>هزینه‌ها و شفافیت</h3>
          <p>
            تمام هزینه‌ها (تأمین، بسته‌بندی، گمرک، حمل و کارمزد) پیش از عقد
            قرارداد به‌صورت تفکیک‌شده اعلام می‌شوند. هیچ هزینه‌ی پنهانی وجود
            ندارد. در صورت لغو سفارش پیش از حمل، مبلغ پیش‌پرداخت منهای هزینه‌های
            انجام‌شده بازگردانده می‌شود.
          </p>

          <h3>تماس</h3>
          <p>
            برای استعلام قیمت خاک توتون، ثبت سفارش صادرات خرما یا مشاوره‌ی
            واردات و صادرات با{' '}
            <a href={`tel:${CONTACTS.web.tel}`}>{CONTACTS.web.display}</a>{' '}
            تماس بگیرید یا در واتساپ پیام دهید.
          </p>
        </div>
      </section>

      <CtaBand
        title="تجارت خود را به سرویس ۳۶۵ بسپارید"
        description="از تأمین تا صادرات؛ همه‌ی مراحل با کارشناسان مجرب و قرارداد رسمی."
        phone="web"
      />

      <FaqSection items={FAQ_ITEMS.trade} />
    </>
  );
}
