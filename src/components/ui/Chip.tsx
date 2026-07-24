import type { HTMLAttributes } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ChipProps = HTMLAttributes<HTMLSpanElement> & { onRemove?: () => void };

export function Chip({ children, className, onRemove, ...props }: ChipProps) {
  return <span className={cn('inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium', className)} {...props}>{children}{onRemove ? <button aria-label="Remover" onClick={onRemove} type="button"><X className="h-3 w-3" /></button> : null}</span>;
}
