import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type SwitchProps = ButtonHTMLAttributes<HTMLButtonElement> & { checked?: boolean };

export function Switch({ checked = false, className, ...props }: SwitchProps) {
  return (
    <button
      aria-checked={checked}
      className={cn('relative h-6 w-11 rounded-full bg-input transition-colors data-[state=checked]:bg-primary', checked && 'bg-primary', className)}
      role="switch"
      type="button"
      {...props}
    >
      <span className={cn('absolute left-1 top-1 h-4 w-4 rounded-full bg-background shadow transition-transform', checked && 'translate-x-5')} />
    </button>
  );
}
