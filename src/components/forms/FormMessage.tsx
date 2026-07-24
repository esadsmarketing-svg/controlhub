import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type FormMessageProps = PropsWithChildren<{
  tone?: 'error' | 'success' | 'info';
}>;

const tones = {
  error: 'border-destructive/30 bg-destructive/10 text-destructive',
  success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700',
  info: 'border-border bg-muted text-muted-foreground',
};

export function FormMessage({ children, tone = 'info' }: FormMessageProps) {
  if (!children) {
    return null;
  }

  return (
    <div className={cn('rounded-md border px-3 py-2 text-sm', tones[tone])} role="status">
      {children}
    </div>
  );
}
