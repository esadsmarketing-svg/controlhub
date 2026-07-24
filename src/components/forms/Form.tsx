import type { FormHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function Form({ className, ...props }: FormHTMLAttributes<HTMLFormElement>) { return <form className={cn('space-y-4', className)} {...props} />; }
