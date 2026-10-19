'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: { q: string; a: string }[];
}

export function FaqSection({
  title = 'سوالات متداول',
  subtitle = 'پاسخ به پرسش‌های پرتکرار کاربران سرویس ۳۶۵',
  items,
}: FaqSectionProps) {
  return (
    <section className="container-px py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <HelpCircle className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-4">
          {items.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-right text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-8 text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
