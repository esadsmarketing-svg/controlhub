import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string | null;
};

export function TextField({ id, label, error, className, ...props }: TextFieldProps) {
  return (
    <label className="block space-y-2" htmlFor={id}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        className={cn(
          'h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60',
          error && 'border-destructive focus:border-destructive focus:ring-destructive/20',
          className,
        )}
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <span className="block text-sm text-destructive" id={`${id}-error`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
