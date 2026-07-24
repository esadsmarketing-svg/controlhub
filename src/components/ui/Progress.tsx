import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ProgressProps = HTMLAttributes<HTMLDivElement> & { value: number };

export function Progress({ className, value, ...props }: ProgressProps) {
  const safeValue = Math.min(100, Math.max(0, value));
  return <div className={cn('h-2 w-full overflow-hidden rounded-full bg-muted', className)} role="progressbar" aria-valuenow={safeValue} aria-valuemin={0} aria-valuemax={100} {...props}><div className="h-full bg-primary transition-all" style={{ width: `${safeValue}%` }} /></div>;
}
