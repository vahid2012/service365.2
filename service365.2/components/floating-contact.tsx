'use client';

import { useEffect, useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { CONTACTS } from '@/lib/site-data';
import { PhoneText } from '@/components/phone-link';

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-4 z-50 flex flex-col items-start gap-3 transition-all duration-300 sm:bottom-6 sm:left-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
      aria-label="تماس و واتساپ"
    >
      {open && (
        <div className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-card p-3 shadow-xl animate-fade-up">
          <a
            href={`tel:${CONTACTS.primary.tel}`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" />
            تماس اضطراری
            <PhoneText display={CONTACTS.primary.display} className="text-xs font-semibold opacity-90" />
          </a>
          <a
            href={CONTACTS.primary.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            واتساپ پشتیبانی
          </a>
          <a
            href={CONTACTS.web.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-secondary-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            واتساپ تور و سایت
            <PhoneText display={CONTACTS.web.display} className="text-xs opacity-80" />
          </a>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        <a
          href={`tel:${CONTACTS.primary.tel}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-primary/20 transition-transform hover:scale-105 active:scale-95"
          aria-label="تماس"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href={CONTACTS.primary.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg ring-4 ring-accent/20 transition-transform hover:scale-105 active:scale-95"
          aria-label="واتساپ"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm sm:flex"
          aria-label="گزینه‌های تماس"
        >
          {open ? <X className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}
