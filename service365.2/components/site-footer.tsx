import Link from 'next/link';
import { Phone, MessageCircle, Wrench, Mail, MapPin } from 'lucide-react';
import { CONTACTS, NAV_LINKS, SERVICES } from '@/lib/site-data';
import { PhoneLink } from '@/components/phone-link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container-px py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold">سرویس ۳۶۵</span>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              مجموعه‌ی سرویس ۳۶۵ ارائه‌دهنده‌ی خدمات تعمیرات، دارو، امداد خودرو،
              گردشگری، تجارت و طراحی سایت در سراسر ایران با پشتیبانی شبانه‌روزی
              است.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold">دسترسی سریع</h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold">خدمات</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold">تماس با ما</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${CONTACTS.primary.tel}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <PhoneLink tel={CONTACTS.primary.tel} display={CONTACTS.primary.display} className="font-bold text-muted-foreground hover:text-primary" />
                </a>
                <span className="block pr-6 text-xs text-muted-foreground/80">
                  {CONTACTS.primary.label}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACTS.web.tel}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <PhoneLink tel={CONTACTS.web.tel} display={CONTACTS.web.display} className="font-bold text-muted-foreground hover:text-primary" />
                </a>
                <span className="block pr-6 text-xs text-muted-foreground/80">
                  {CONTACTS.web.label}
                </span>
              </li>
              <li>
                <a
                  href={CONTACTS.primary.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4 text-accent" />
                  واتساپ پشتیبانی
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                پوشش سراسری ایران
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} سرویس ۳۶۵ — تمامی حقوق محفوظ است.</p>
          <p>طراحی و توسعه توسط سرویس ۳۶۵ — service365.ir</p>
        </div>
      </div>
    </footer>
  );
}
