import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function Grid({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)} {...props} />; }
