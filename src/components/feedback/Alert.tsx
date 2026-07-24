import type { HTMLAttributes, ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertProps = HTMLAttributes<HTMLDivElement> & { title?: string; variant?: 'info' | 'success' | 'warning' | 'error'; icon?: ReactNode };
const styles = { info: 'border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-100', success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100', warning: 'border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-100', error: 'border-destructive/30 bg-destructive/10 text-destructive' };
const icons = { info: <Info className="h-4 w-4" />, success: <CheckCircle2 className="h-4 w-4" />, warning: <TriangleAlert className="h-4 w-4" />, error: <AlertCircle className="h-4 w-4" /> };
export function Alert({ children, className, icon, title, variant = 'info', ...props }: AlertProps) {
  return <div className={cn('flex gap-3 rounded-lg border p-4 text-sm', styles[variant], className)} role="alert" {...props}><div className="mt-0.5">{icon ?? icons[variant]}</div><div>{title ? <p className="font-medium">{title}</p> : null}<div className="text-current/80">{children}</div></div></div>;
}
