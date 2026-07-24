import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Radio({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('h-4 w-4 border-input text-primary focus:ring-ring disabled:opacity-60', className)} type="radio" {...props} />;
}
