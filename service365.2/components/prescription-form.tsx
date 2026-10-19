'use client';

import { useState } from 'react';
import { Upload, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACTS } from '@/lib/site-data';

interface FormState {
  name: string;
  phone: string;
  notes: string;
  fileName: string;
}

export function PrescriptionForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    notes: '',
    fileName: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus('sending');
    // Simulate submission then redirect to WhatsApp with prefilled message
    setTimeout(() => {
      setStatus('sent');
      const message = `سلام، سفارش دارو:%0A نام: ${encodeURIComponent(
        form.name
      )}%0A شماره تماس: ${encodeURIComponent(form.phone)}%0A توضیحات: ${encodeURIComponent(
        form.notes
      )}%0A نسخه: ${encodeURIComponent(form.fileName || 'پیوست نشده')}`;
      window.open(`${CONTACTS.primary.whatsapp}?text=${message}`, '_blank');
    }, 900);
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-bold">سفارش شما ثبت شد</h3>
        <p className="text-sm leading-7 text-muted-foreground">
          در صورت عدم باز شدن واتساپ، مستقیماً با شماره{' '}
          <span dir="ltr" className="font-bold text-foreground">
            {CONTACTS.primary.display}
          </span>{' '}
          تماس بگیرید تا کارشناس دارو سفارش شما را تأیید کند.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm({ name: '', phone: '', notes: '', fileName: '' });
          }}
          className="mt-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          ثبت سفارش جدید
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-bold">نام و نام خانوادگی</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="مثال: محمد رضایی"
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-bold">شماره تماس</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="09xxxxxxxxx"
            dir="ltr"
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-right outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-bold">آپلود نسخه دارو</span>
        <div className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-input bg-secondary/40 px-4 py-4 transition-colors hover:border-primary hover:bg-primary/5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Upload className="h-5 w-5" />
          </span>
          <span className="flex-1 text-sm text-muted-foreground">
            {form.fileName || 'عکس نسخه را اینجا بکشید یا کلیک کنید (JPG, PNG, PDF)'}
          </span>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFile}
            className="hidden"
          />
        </div>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-bold">توضیحات (اختیاری)</span>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="نام دارو، دوز، تعداد و توضیحات تکمیلی..."
          className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending' || !form.name || !form.phone}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {status === 'sending' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {status === 'sending' ? 'در حال ارسال...' : 'ارسال سفارش'}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        با ارسال، سفارش شما در واتساپ پشتیبانی باز می‌شود.
      </p>
    </form>
  );
}
