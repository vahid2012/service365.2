import { cn } from '@/lib/utils';

interface PhoneLinkProps {
  tel: string;
  display: string;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}

/**
 * Renders a phone number with forced LTR direction inside RTL context.
 * Uses unicode-bidi: embed so the number keeps its natural digit order
 * regardless of surrounding RTL text direction.
 */
export function PhoneLink({
  tel,
  display,
  className,
  children,
  ariaLabel,
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${tel}`}
      aria-label={ariaLabel}
      className={cn('inline-block', className)}
      style={{ direction: 'ltr', unicodeBidi: 'embed' }}
    >
      {children ?? display}
    </a>
  );
}

/**
 * Inline LTR span for phone numbers that are already inside an <a> tag.
 */
export function PhoneText({
  display,
  className,
}: {
  display: string;
  className?: string;
}) {
  return (
    <span
      dir="ltr"
      className={cn('inline-block', className)}
      style={{ unicodeBidi: 'embed' }}
    >
      {display}
    </span>
  );
}
