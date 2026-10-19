import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { FloatingContact } from '@/components/floating-contact';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://service365.ir'),
  title: {
    default: 'سرویس ۳۶۵ | تعمیرات، دارو، امداد خودرو، گردشگری و تجارت',
    template: '%s | سرویس ۳۶۵',
  },
  description:
    'سرویس ۳۶۵ ارائه‌دهنده خدمات تعمیر لوازم خانگی، سفارش داروی خارجی، امداد خودرو در استان‌های سمنان و تهران، مینی‌بوس ارومیه، تور و هتل، تجارت خاک توتون و صادرات خرما و طراحی سایت و سئو.',
  keywords: [
    'تعمیر لوازم خانگی',
    'سفارش داروی ترکیه',
    'امداد خودرو سمنان',
    'مینی بوس ارومیه',
    'هتل ارومیه',
    'صادرات خرما',
    'خاک توتون',
    'طراحی سایت سئو',
  ],
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://service365.ir',
    siteName: 'سرویس ۳۶۵',
    title: 'سرویس ۳۶۵ | خدمات یکپارچه سراسری',
    description:
      'تعمیرات، دارو، امداد خودرو، گردشگری و تجارت در سراسر ایران با پشتیبانی ۲۴ ساعته.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}
