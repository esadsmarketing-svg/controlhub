import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
  success?: boolean;
};

export function Textarea({ className, error, success, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
        error && 'border-destructive focus-visible:ring-destructive/30',
        success && 'border-emerald-500 focus-visible:ring-emerald-500/30',
        className,
      )}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}
