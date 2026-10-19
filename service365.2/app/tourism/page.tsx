import Link from 'next/link';
import {
  Plane,
  Hotel,
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Globe,
  CalendarDays,
  Users,
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
  title: 'تور و رزرو هتل ۵ ستاره ایران، ارومیه، مشهد، اربیل و استانبول',
  description:
    'برگزاری تور ارومیه، وان، استانبول، مسکو، سن‌پترزبورگ، ارمنستان، اربیل و باکو و رزرو هتل‌های ۵ ستاره ایران، ارومیه، مشهد و اربیل. تماس 09143403431.',
};

const TOURS = [
  { dest: 'ارومیه', type: 'داخلی', dur: '۲ تا ۴ روز', from: '۹۸۰٬۰۰۰' },
  { dest: 'وان (ترکیه)', type: 'خارجی', dur: '۳ تا ۵ روز', from: '۲٬۸۰۰٬۰۰۰' },
  { dest: 'استانبول', type: 'خارجی', dur: '۴ تا ۷ روز', from: '۴٬۵۰۰٬۰۰۰' },
  { dest: 'مسکو', type: 'خارجی', dur: '۵ تا ۸ روز', from: '۸٬۲۰۰٬۰۰۰' },
  { dest: 'سن‌پترزبورگ', type: 'خارجی', dur: '۶ تا ۹ روز', from: '۹٬۰۰۰٬۰۰۰' },
  { dest: 'ارمنستان (ایروان)', type: 'خارجی', dur: '۴ تا ۶ روز', from: '۳٬۴۰۰٬۰۰۰' },
  { dest: 'اربیل (عراق)', type: 'خارجی', dur: '۳ تا ۵ روز', from: '۳٬۱۰۰٬۰۰۰' },
  { dest: 'باکو (آذربایجان)', type: 'خارجی', dur: '۴ تا ۶ روز', from: '۴٬۰۰۰٬۰۰۰' },
];

const HOTELS = [
  { name: 'هتل ۵ ستاره ارومیه', city: 'ارومیه', stars: 5, from: '۴۵۰٬۰۰۰' },
  { name: 'هتل‌های ۵ ستاره مشهد', city: 'مشهد', stars: 5, from: '۴۰۰٬۰۰۰' },
  { name: 'هتل‌های اقتصادی ارومیه', city: 'ارومیه', stars: 3, from: '۲۲۰٬۰۰۰' },
  { name: 'هتل‌های ۵ ستاره اربیل', city: 'اربیل', stars: 5, from: '۶۵۰٬۰۰۰' },
  { name: 'هتل‌های ۴ ستاره استانبول', city: 'استانبول', stars: 4, from: '۵۵۰٬۰۰۰' },
];

const PARTNER_CARDS = [
  { ...PARTNER_LINKS.tourviza, icon: 'Globe' },
  { ...PARTNER_LINKS.turmur, icon: 'Plane' },
  { ...PARTNER_LINKS.hotelUrmia, icon: 'Hotel' },
  { ...PARTNER_LINKS.hotelTural, icon: 'Hotel' },
  { ...PARTNER_LINKS.hotelErbil, icon: 'Hotel' },
  { ...PARTNER_LINKS.akayTravel, icon: 'Plane' },
  { ...PARTNER_LINKS.istanbulService, icon: 'MapPin' },
  { ...PARTNER_LINKS.yerevanTours, icon: 'Plane' },
  { ...PARTNER_LINKS.erbilCity, icon: 'MapPin' },
];

export default function TourismPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'گردشگری و رزرو هتل',
            description:
              'تورهای داخلی و خارجی و رزرو هتل‌های ۵ ستاره ایران، ارومیه، مشهد و اربیل.',
            url: '/tourism',
            areaServed: ['ارومیه', 'مشهد', 'استانبول', 'اربیل', 'مسکو', 'ایروان', 'باکو'],
            phone: CONTACTS.web.tel,
          }),
          faqSchema(FAQ_ITEMS.tourism),
          breadcrumbSchema([
            { name: 'خانه', url: '/' },
            { name: 'گردشگری', url: '/tourism' },
          ]),
        ]}
      />

      <PageHero
        title="تور و رزرو هتل ۵ ستاره در ایران و کشورهای همسایه"
        description="برگزاری تور ارومیه، وان، استانبول، مسکو، سن‌پترزبورگ، ارمنستان، اربیل و باکو و رزرو هتل‌های ۵ ستاره ایران و اربیل با خدمات ویزا و هماهنگی کامل."
        phone="web"
        icon={<Plane className="h-7 w-7" />}
        breadcrumbs={[
          { name: 'خانه', url: '/' },
          { name: 'گردشگری', url: '/tourism' },
        ]}
      />

      {/* Tours table */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="تورها"
          title="تورهای داخلی و خارجی سرویس ۳۶۵"
          description="هشت تور آماده با ویزا، پرواز، هتل و راهنما. قیمت‌ها بر حسب تومان و برای هر نفر در اتاق دوبل محاسبه شده‌اند."
        />
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-primary/10 text-xs font-bold uppercase text-primary">
                <tr>
                  <th className="px-4 py-3">مقصد</th>
                  <th className="px-4 py-3">نوع</th>
                  <th className="px-4 py-3">مدت</th>
                  <th className="px-4 py-3">قیمت از (تومان)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {TOURS.map((t) => (
                  <tr key={t.dest} className="hover:bg-secondary/30">
                    <td className="px-4 py-3 font-bold">{t.dest}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${
                          t.type === 'داخلی'
                            ? 'bg-accent/10 text-accent'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground" dir="ltr">{t.dur}</td>
                    <td className="px-4 py-3 font-bold" dir="ltr">{t.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="bg-secondary/40 py-14">
        <div className="container-px">
          <SectionHeading
            eyebrow="رزرو هتل"
            title="هتل‌های منتخب ایران و خارج"
            description="رزرو هتل‌های ۵ ستاره و اقتصادی با تضمین بهترین قیمت و تأیید فوری."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOTELS.map((h) => (
              <div
                key={h.name}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Hotel className="h-5 w-5" />
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: h.stars }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
                <h3 className="text-base font-bold">{h.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {h.city}
                </p>
                <div className="mt-4 flex items-end justify-between border-t border-border/60 pt-4">
                  <div>
                    <span className="text-xs text-muted-foreground">شب/هر نفر از</span>
                    <p dir="ltr" className="text-lg font-extrabold text-primary">
                      {h.from}
                    </p>
                  </div>
                  <a
                    href={CONTACTS.web.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-secondary px-3 py-2 text-xs font-bold transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    رزرو
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner network */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="شبکه همکاران"
          title="وب‌سایت‌های تخصصی گردشگری و رزرو"
          description="برای جزئیات هر مسیر یا شهر، می‌توانید به وب‌سایت‌های همکار سرویس ۳۶۵ مراجعه کنید."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNER_CARDS.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Plane className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold">{p.label}</span>
              </div>
              <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary">
                مشاهده →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Long-form content */}
      <section className="container-px py-14">
        <div className="mx-auto max-w-4xl prose-fa">
          <h2>راهنمای کامل تور و رزرو هتل در ایران و کشورهای همسایه</h2>
          <p>
            سرویس ۳۶۵ با تجربه‌ی چندساله در صنعت گردشگری، خدمات یکپارچه‌ی تور،
            ویزا، پرواز و رزرو هتل را برای مسیرهای داخلی و خارجی ارائه می‌دهد.
            تیم تخصصی ما در ارومیه و تهران با شبکه‌ای از آژانس‌های همکار در
            استانبول، ایروان، اربیل، مسکو و باکو، تجربه‌ای روان و مطمئن برای
            مسافران فراهم می‌کند. شماره‌ی تماس این بخش ۰۹۱۴۳۴۰۳۴۳۱ است که هم به‌صورت
            تماس و هم واتساپ پاسخگو می‌باشد.
          </p>

          <h3>تور ارومیه</h3>
          <p>
            ارومیه پایتخت گردشگری استان آذربایجان غربی است؛ دریاچه‌ی ارومیه،
            کلیسای تاریخی نصیرخسه، بازارهای سنتی و غذاهای محلی از جاذبه‌های اصلی
            این شهر هستند. تور ارومیه سرویس ۳۶۵ شامل اقامت در هتل‌های منتخب،
            گشت شهری با راهنما، دیدار از روستاهای توریستی و پرواز داخلی است. برای
            اطلاعات کامل به وب‌سایت{' '}
            <a href={PARTNER_LINKS.turmur.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.turmur.label}
            </a>{' '}
            مراجعه کنید.
          </p>

          <h3>رزرو هتل در ارومیه</h3>
          <p>
            رزرو هتل در ارومیه یکی از پرطرفدارترین خدمات سرویس ۳۶۵ است. از هتل‌های
            ۵ ستاره با دید دریاچه تا هتل‌های اقتصادی و خانوادگی، همه با تضمین
            بهترین قیمت و تأیید فوری رزرو می‌شوند. برای رزرو آنلاین می‌توانید به{' '}
            <a href={PARTNER_LINKS.hotelUrmia.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.hotelUrmia.label}
            </a>{' '}
            مراجعه کنید یا با واتساپ ۰۹۱۴۳۴۰۳۴۳۱ درخواست خود را ارسال کنید.
          </p>

          <h3>هتل‌های ایران</h3>
          <p>
            سرویس ۳۶۵ رزرو هتل در تمام شهرهای ایران را پوشش می‌دهد: مشهد، تهران،
            اصفهان، شیراز، تبریز، یزد، قشم و کیش. برای مشاهده‌ی فهرست کامل هتل‌ها
            به{' '}
            <a href={PARTNER_LINKS.hotelTural.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.hotelTural.label}
            </a>{' '}
            مراجعه کنید. قیمت‌ها شامل صبحانه و خدمات فرودگاهی است و در هتل‌های ۵
            ستاره، ترانسفر رایگان ارائه می‌گردد.
          </p>

          <h3>تور استانبول و خدمات گردشگری ترکیه</h3>
          <p>
            استانبول مقصد شماره یک گردشگران ایرانی است. تور استانبول سرویس ۳۶۵
            شامل پرواز، هتل ۴ ستاره در منطقه‌ی سلطان‌احمد، گشت با راهنمای فارسی،
            ویزا و ترانسفر فرودگاهی است. برای خدمات تخصصی استانبول به{' '}
            <a href={PARTNER_LINKS.istanbulService.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.istanbulService.label}
            </a>{' '}
            مراجعه کنید. ویزا و خدمات گردشگری در یک پکیج از طریق{' '}
            <a href={PARTNER_LINKS.tourviza.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.tourviza.label}
            </a>{' '}
            قابل تهیه است.
          </p>

          <h3>تور وان ترکیه</h3>
          <p>
            وان به دلیل نزدیکی به ارومیه و قیمت مناسب، انتخاب اقتصادی برای
            گردشگران است. تور وان شامل عبور مرزی با خودرو شخصی یا اتوبوس، اقامت
            در هتل‌های اقتصادی و گشت شهر است. قیمت تور وان از ۲٬۸۰۰٬۰۰۰ تومان
            شروع می‌شود.
          </p>

          <h3>تور مسکو و سن‌پترزبورگ</h3>
          <p>
            روسیه برای گردشگران تجاری و فرهنگی جذاب است. تور مسکو شامل ویزای
            روسیه، پرواز، هتل ۴ ستاره و گشت میدان سرخ است. تور سن‌پترزبورگ با
            دیدار از موزه‌ی ارمیتاژ و کاخ‌های تاریخی همراه است. ویزای روسیه بین ۷
            تا ۱۴ روز کاری صادر می‌شود.
          </p>

          <h3>تور ایروان ارمنستان</h3>
          <p>
            ارمنستان به دلیل ویزای آسان، قیمت مناسب و جاذبه‌های طبیعی، مقصدی
            محبوب است. تور ایروان شامل پرواز یا عبور زمینی، هتل ۳ تا ۴ ستاره،
            گشت شهر و دیدار از دریاچه‌ی سوان است. برای اطلاعات بیشتر به{' '}
            <a href={PARTNER_LINKS.yerevanTours.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.yerevanTours.label}
            </a>{' '}
            مراجعه کنید.
          </p>

          <h3>تور اربیل و رزرو هتل در اربیل</h3>
          <p>
            اربیل، پایت اقتصادی اقلیم کردستان عراق، مقصدی برای تجار و گردشگران
            است. تور اربیل شامل پرواز، هتل ۴ تا ۵ ستاره و ترانسفر است. برای رزرو
            هتل در اربیل به{' '}
            <a href={PARTNER_LINKS.hotelErbil.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.hotelErbil.label}
            </a>{' '}
            و برای آشنایی با شهر اربیل به{' '}
            <a href={PARTNER_LINKS.erbilCity.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.erbilCity.label}
            </a>{' '}
            مراجعه کنید.
          </p>

          <h3>تور باکو</h3>
          <p>
            باکو، پایتخت آذربایجان، با معماری مدرن و شهر قدیمی UNESCO شناخته
            می‌شود. تور باکو شامل پرواز، هتل ۴ ستاره، گشت شهر و سفر به سنگ‌های
            قبه‌ستانی گوبوستان است.
          </p>

          <h3>خدمات ویزا</h3>
          <p>
            سرویس ۳۶۵ ویزای تمام کشورهای مقصد را (در صورت نیاز) به‌صورت یکپارچه
            با تور ارائه می‌دهد. مدارک لازم شامل پاسپورت با حداقل ۶ ماه اعتبار،
            عکس و دعوت‌نامه (در برخی کشورها) است. زمان صدور ویزا بسته به کشور
            بین ۵ تا ۱۴ روز کاری متغیر است.
          </p>

          <h3>فرایند رزرو</h3>
          <ol>
            <li>تماس یا واتساپ به ۰۹۱۴۳۴۰۳۴۳۱ با اعلام مقصد و تاریخ.</li>
            <li>ارسال پیشنهاد تور یا هتل با قیمت نهایی.</li>
            <li>عقد قرارداد و پیش‌پرداخت ۳۰٪.</li>
            <li>هماهنگی ویزا، پرواز و هتل.</li>
            <li>ارسال بلیت و ووچر هتل پیش از سفر.</li>
            <li>پشتیبانی ۲۴ ساعته در طول سفر.</li>
          </ol>

          <h3>آکای تراول</h3>
          <p>
            {' '}
            <a href={PARTNER_LINKS.akayTravel.href} target="_blank" rel="noopener noreferrer">
              {PARTNER_LINKS.akayTravel.label}
            </a>{' '}
            یکی از همکاران قدیمی سرویس ۳۶۵ است که در تورهای ترکیه و اروپای شرقی
            تخصص دارد و پکیج‌های اقتصادی و لوکس ارائه می‌دهد.
          </p>

          <h3>چرا سرویس ۳۶۵؟</h3>
          <p>
            تضمین بهترین قیمت، پشتیبانی شبانه‌روزی در طول سفر، راهنمای فارسی‌زبان
            در تمام مقاصد و شفافیت کامل قیمت‌ها از مزایای سرویس ۳۶۵ است. ما
            معتقدیم سفر باید تجربه‌ای لذت‌بخش باشد، نه استرسی.
          </p>
        </div>
      </section>

      <CtaBand
        title="سفر بعدی خود را با سرویس ۳۶۵ برنامه‌ریزی کنید"
        description="تور، ویزا و رزرو هتل در یک پکیج با پشتیبانی شبانه‌روزی."
        phone="web"
      />

      <FaqSection items={FAQ_ITEMS.tourism} />
    </>
  );
}
