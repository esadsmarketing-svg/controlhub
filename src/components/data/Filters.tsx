import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function Filters({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn('flex flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center', className)} {...props} />; }
