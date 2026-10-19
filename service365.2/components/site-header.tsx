'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { NAV_LINKS, CONTACTS } from '@/lib/site-data';
import { cn } from '@/lib/utils';
import { PhoneLink } from '@/components/phone-link';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-px flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight">سرویس ۳۶۵</span>
            <span className="text-[11px] font-medium text-muted-foreground">
              خدمات یکپارچه سراسری
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${CONTACTS.primary.tel}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" />
            <PhoneLink tel={CONTACTS.primary.tel} display={CONTACTS.primary.display} className="font-bold" />
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label="منو"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background lg:hidden transition-[max-height] duration-300',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="container-px flex flex-col gap-1 py-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACTS.primary.tel}`}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            تماس: <PhoneLink tel={CONTACTS.primary.tel} display={CONTACTS.primary.display} className="font-bold" />
          </a>
        </nav>
      </div>
    </header>
  );
}
