import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function FieldGroup({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn('grid gap-4 sm:grid-cols-2', className)} {...props} />; }
