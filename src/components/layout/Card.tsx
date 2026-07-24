import type { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const cardVariants = cva('rounded-lg border border-border bg-card text-card-foreground', { variants: { padding: { none: 'p-0', sm: 'p-4', md: 'p-6', lg: 'p-8' }, elevated: { true: 'shadow-sm', false: '' } }, defaultVariants: { padding: 'md', elevated: true } });
export type CardProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;
export function Card({ className, elevated, padding, ...props }: CardProps) { return <div className={cn(cardVariants({ elevated, padding }), className)} {...props} />; }
