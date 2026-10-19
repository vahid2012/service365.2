import { Pill, Phone, MessageCircle, ShieldCheck, Clock, FileText } from 'lucide-react';
import { CONTACTS, FAQ_ITEMS, REPAIR_CITIES } from '@/lib/site-data';
import { PageHero, SectionHeading, CtaBand } from '@/components/section-helpers';
import { FaqSection } from '@/components/faq-section';
import {
  JsonLd,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
} from '@/lib/jsonld';

export const metadata = {
  title: 'سفارش قانونی داروی ترکیه و داروهای کمیاب خارجی',
  description:
    'تأمین قانونی داروی خارجی از ترکیه، امارات، آلمان و هند با نسخه پزشک، فرایند گمرکی و تحویل سریع. سفارش از طریق واتساپ 09032486073.',
};

const STEPS = [
  { n: '۱', title: 'ارسال نسخه', text: 'نسخه‌ی معتبر پزشک، شناسنامه و کارت ملی بیمار را در واتساپ ارسال کنید.' },
  { n: '۲', title: 'بررسی و استعلام', text: 'کارشناس دارو، داروی درخواستی را در شبکه‌ی تأمین خارجی بررسی و قیمت می‌کند.' },
  { n: '۳', title: 'قرارداد و پیش‌پرداخت', text: 'پس از تأیید قیمت، قرارداد رسمی منعقد و پیش‌پرداخت دریافت می‌شود.' },
  { n: '۴', title: 'تأمین و ارسال', text: 'دارو از کشور مبدأ تهیه و از مسیر قانونی پستی/پرازی به ایران ارسال می‌شود.' },
  { n: '۵', title: 'ترخیص گمرکی', text: 'کارشناس گمرک سرویس ۳۶۵ فرایند ترخیص و اظهارنامه را انجام می‌دهد.' },
  { n: '۶', title: 'تحویل به بیمار', text: 'دارو با فاکتور، برگه‌ی ورود قانونی و بسته‌بندی استاندارد تحویل می‌شود.' },
];

const MED_CATEGORIES = [
  { name: 'داروهای انکولوژی', note: 'تأمین داروهای ضدسرطان کمیاب با زنجیره‌ی سرد' },
  { name: 'داروهای نورولوژی', note: 'داروهای صرع، پارکینسون و مولتیپل اسکلروزیس' },
  { name: 'داروهای قلب و عروق', note: 'آنتی‌کواگولانت و داروهای اختصاصی' },
  { name: 'مکمل‌ها و ویتامین‌ها', note: 'مکمل‌های اصل ترکیه و آلمان' },
  { name: 'داروهای کمیاب کودکان', note: 'سیروپ‌ها و فرم‌های خاص pediatric' },
  { name: 'داروهای ایمونولوژی', note: 'بیولوژیک و ایمونوساپرسانت' },
];

const SUPPLY_COUNTRIES = [
  { country: 'ترکیه', eta: '۷ تا ۱۴ روز کاری', popular: true },
  { country: 'امارات', eta: '۱۰ تا ۱۸ روز کاری', popular: false },
  { country: 'آلمان', eta: '۱۴ تا ۲۱ روز کاری', popular: false },
  { country: 'هند', eta: '۱۸ تا ۲۸ روز کاری', popular: false },
];

export default function MedicinePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'سفارش داروی خارجی',
            description:
              'تأمین قانونی داروی ترکیه و داروهای کمیاب خارجی با نسخه و فرایند گمرکی.',
            url: '/medicine',
            areaServed: REPAIR_CITIES,
            phone: CONTACTS.primary.tel,
          }),
          faqSchema(FAQ_ITEMS.medicine),
          breadcrumbSchema([
            { name: 'خانه', url: '/' },
            { name: 'دارو', url: '/medicine' },
          ]),
        ]}
      />

      <PageHero
        title="سفارش قانونی داروی ترکیه و داروهای کمیاب خارجی"
        description="تأمین داروهای خارجی و کمیاب با نسخه‌ی پزشک، فرایند گمرکی شفاف و تحویل سریع. تمام سفارش‌ها قانونی و دارای مجوز ورود هستند."
        phone="primary"
        icon={<Pill className="h-7 w-7" />}
        breadcrumbs={[
          { name: 'خانه', url: '/' },
          { name: 'دارو', url: '/medicine' },
        ]}
      />

      {/* WhatsApp CTA banner */}
      <section className="container-px py-10">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-base font-bold text-accent">
            برای سفارش فوری دارو، نسخه خود را در واتساپ ارسال کنید
          </p>
          <a
            href={CONTACTS.primary.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            واتساپ: {CONTACTS.primary.display}
          </a>
        </div>
      </section>

      {/* Process steps */}
      <section className="container-px py-12">
        <SectionHeading
          eyebrow="فرایند سفارش"
          title="شش گام تا تحویل داروی خارجی"
          description="فرایند کاملاً قانونی، نسخه‌محور و شفاف است. در هر گام از کارشناس دارو و گمرک سرویس ۳۶۵ پشتیبانی دریافت می‌کنید."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <span className="absolute -top-3 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground shadow-sm">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/40 py-14">
        <div className="container-px">
          <SectionHeading
            eyebrow="دسته‌بندی داروها"
            title="گروه‌های دارویی قابل تأمین"
            description="شبکه‌ی تأمین سرویس ۳۶۵ طیف وسیعی از داروهای کمیاب و خارجی را پوشش می‌دهد."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MED_CATEGORIES.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Pill className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold">{c.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply countries table */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="کشورهای تأمین"
          title="جدول زمان تحویل بر اساس کشور مبدأ"
          description="زمان‌های اعلام‌شده کاری است و به موجودی دارو در کشور مبدأ بستگی دارد."
        />
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-primary/10 text-xs font-bold uppercase text-primary">
                <tr>
                  <th className="px-4 py-3">کشور مبدأ</th>
                  <th className="px-4 py-3">زمان تحویل تقریبی</th>
                  <th className="px-4 py-3">وضعیت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {SUPPLY_COUNTRIES.map((c) => (
                  <tr key={c.country} className="hover:bg-secondary/30">
                    <td className="px-4 py-3 font-bold">{c.country}</td>
                    <td className="px-4 py-3 text-muted-foreground" dir="ltr">{c.eta}</td>
                    <td className="px-4 py-3">
                      {c.popular ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                          <ShieldCheck className="h-3 w-3" /> پرطرفدارترین
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-bold text-muted-foreground">
                          <Clock className="h-3 w-3" /> در دسترس
                        </span>
                      )}
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
          <h2>راهنمای کامل سفارش قانونی داروی خارجی از ترکیه</h2>
          <p>
            دسترسی به داروهای کمیاب و خارجی یکی از چالش‌های جدی بیماران ایرانی
            است. بسیاری از داروهای انکولوژی، نورولوژی، قلب‌وعروق و مکمل‌های
            اختصاصی در بازار داخلی یا موجود نیستند یا با کیفیت قابل اعتماد عرضه
            نمی‌شوند. سرویس ۳۶۵ با شبکه‌ی تأمین قانونی در ترکیه، امارات، آلمان و
            هند، فرایند سفارش، تأمین، ترخیص و تحویل دارو را به‌صورت شفاف و
            نسخه‌محور انجام می‌دهد. شماره‌ی پشتیبانی این بخش ۰۹۰۳۲۴۸۶۰۷۳ است که
            هم به‌صورت تماس و هم واتساپ پاسخگو می‌باشد.
          </p>

          <h3>چرا سفارش دارو باید قانونی باشد؟</h3>
          <p>
            ورود دارو به کشور از مسیر غیرقانونی علاوه بر خطرات کیفری، سلامت بیمار
            را به خطر می‌اندازد؛ داروهای قاچاق اغلب بدون زنجیره‌ی سرد نگهداری
            شده‌اند، تاریخ مصرف آن‌ها گذشته است یا اصالت آن‌ها تأیید نشده است.
            سرویس ۳۶۵ تمام سفارش‌ها را از مسیر قانونی گمرکی انجام می‌دهد: نسخه‌ی
            پزشک دریافت می‌شود، اظهارنامه‌ی دارویی تکمیل می‌گردد، دارو با فاکتور
            و مجوز کشور مبدأ وارد می‌شود و در گمرک ایران ترخیص می‌گردد. خروجی این
            فرایند، دارویی است که اصالت آن توسط وزارت بهداشت قابل ردیابی است.
          </p>

          <h3>داروهای ترکیه؛ چرا انتخاب اول؟</h3>
          <p>
            ترکیه به دلیل نزدیکی جغرافیکی، کیفیت بالای صنعت دارویی و قیمت مناسب،
            انتخاب اول بیماران ایرانی است. داروخانه‌های معتبر استانبول، آنکارا و
            ازمیر اکثر برندهای اروپایی را با قیمت پایین‌تر از اروپا عرضه
            می‌کنند. علاوه بر این، بسیاری از داروهای ایرانی‌الاصل که در بازار
            داخلی کمیاب شده‌اند، در ترکیه با همان فرمولاسیون موجودند. سرویس ۳۶۵
            با داروخانه‌های همکار در سه شهر بزرگ ترکیه قرارداد دارد و سفارش شما
            را مستقیماً از داروخانه تأمین می‌کند، نه از واسطه‌ها.
          </p>

          <h3>داروهای کمیاب انکولوژی و زنجیره‌ی سرد</h3>
          <p>
            داروهای ضدسرطان و بیولوژیک به زنجیره‌ی سرد (۲ تا ۸ درجه) نیاز دارند.
            هر اختلال در دما باعث کاهش اثربخشی می‌شود. سرویس ۳۶۵ برای این داروها
            از جعبه‌ی یخ‌بسته‌بندی شده‌ی فریزر پک و نشانگر دما (data logger)
            استفاده می‌کند و در تمام مسیر دما را پایش می‌کند. پس از تحویل، بیمار
            یا نماینده‌ی او می‌تواند گزارش دما را دریافت کند. این سطح از کنترل
            کیفیت، تفاوت اصلی سرویس ۳۶۵ با تأمین‌کنندگان غیررسمی است.
          </p>

          <h3>فرایند گمرکی و اظهارنامه</h3>
          <p>
            ورود دارو به ایران نیازمند اظهارنامه‌ی گمرکی، مجوز وزارت بهداشت و در
            برخی موارد مجوز سازمان غذا و دارو است. کارشناس گمرک سرویس ۳۶۵ تمام
            این مراحل را از طرف بیمار انجام می‌دهد. هزینه‌ی گمرکی بر اساس ارزش
            دارو و نوع آن محاسبه می‌شود و پیش از شروع فرایند به اطلاع بیمار
            می‌رسد. در صورت نیاز به مجوز ویژه (مانند داروهای کنترل‌شده)،
            کارشناس حقوقی ما پرونده‌ را تنظیم می‌کند.
          </p>

          <h3>مدت زمان تحویل</h3>
          <p>
            داروهای موجود در ترکیه معمولاً بین ۷ تا ۱۴ روز کاری تحویل داده
            می‌شوند. داروهای کمیاب که در امارات یا آلمان تأمین می‌شوند، بین ۱۴
            تا ۲۱ روز کاری زمان نیاز دارند. داروهای هندی به دلیل مسافت هوایی
            بیشتر، تا ۲۸ روز کاری ممکن است طول بکشند. در تمام این مدت،
            پشتیبانی سرویس ۳۶۵ وضعیت سفارش را به‌صورت هفتگی به بیمار گزارش
            می‌دهد.
          </p>

          <h3>هزینه‌ها و شفافیت</h3>
          <p>
            هزینه‌ی نهایی شامل قیمت دارو در کشور مبدأ، هزینه‌ی ارسال، گمرک و
            کارمزد خدمات است. تمام این موارد پیش از شروع فرایند به‌صورت کتبی
            اعلام می‌شود و هیچ هزینه‌ی پنهان وجود ندارد. پیش‌پرداخت ۵۰٪ در ابتدا
            و ۵۰٪ در زمان تحویل دریافت می‌شود. در صورت عدم تأمین دارو، مبلغ
            پیش‌پرداخت کامل بازگردانده می‌شود.
          </p>

          <h3>مدارک لازم</h3>
          <ul>
            <li>نسخه‌ی معتبر پزشک با مهر و تاریخ</li>
            <li>کپی شناسنامه و کارت ملی بیمار</li>
            <li>گواهی پزشک متخصص (برای داروهای اختصاصی)</li>
            <li>آدرس و شماره تماس تحویل‌گیرنده</li>
            <li>فرم سفارش سرویس ۳۶۵ (در واتساپ ارسال می‌شود)</li>
          </ul>

          <h3>سوالات ایمنی</h3>
          <p>
            اگر دارو در مسیر آسیب ببیند، سرویس ۳۶۵ مسئولیت آن را می‌پذیرد و
            داروی جایگزین رایگان ارسال می‌کند. اگر دارو پس از دریافت معیوب
            تشخیص داده شود (با گزارش داروخانه)، مبلغ بازگردانده می‌شود. تمام
            این تعهدات در قرارداد کتبی درج می‌گردد.
          </p>

          <h3>تماس و ثبت سفارش</h3>
          <p>
            برای ثبت سفارش کافی است نسخه و مدارک خود را در واتساپ به شماره‌ی{' '}
            <a href={CONTACTS.primary.whatsapp} target="_blank" rel="noopener noreferrer">
              {CONTACTS.primary.display}
            </a>{' '}
            ارسال کنید. کارشناس دارو در کمتر از ۲ ساعت پاسخ می‌دهد و فرایند
            آغاز می‌شود. در موارد فوری (داروهای انکولوژی با شروع درمان)،
            اولویت ویژه اعمال می‌شود.
          </p>
        </div>
      </section>

      <CtaBand
        title="نسخه خود را ارسال کنید، دارو را تحویل بگیرید"
        description="کارشناسان دارو و گمرک سرویس ۳۶۵ در کنار شما هستند تا داروی مورد نیاز را قانونی و سریع تأمین کنند."
        phone="primary"
      />

      <FaqSection items={FAQ_ITEMS.medicine} />
    </>
  );
}
