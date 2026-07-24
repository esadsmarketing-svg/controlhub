import type { InputHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
};

export function Input({ className, error, leftIcon, loading, rightIcon, success, ...props }: InputProps) {
  return (
    <div className="relative">
      {leftIcon ? <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{leftIcon}</span> : null}
      <input
        className={cn(
          'h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
          leftIcon && 'pl-9',
          (rightIcon || loading) && 'pr-9',
          error && 'border-destructive focus-visible:ring-destructive/30',
          success && 'border-emerald-500 focus-visible:ring-emerald-500/30',
          className,
        )}
        aria-invalid={error || undefined}
        {...props}
      />
      {loading ? (
        <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
      ) : rightIcon ? (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{rightIcon}</span>
      ) : null}
    </div>
  );
}
