import type { ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & { fallback: string };

export function Avatar({ alt, className, fallback, src, ...props }: AvatarProps) {
  if (!src) {
    return <span className={cn('inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium', className)}>{fallback}</span>;
  }

  return <img alt={alt} className={cn('h-9 w-9 rounded-full border border-border bg-muted object-cover', className)} src={src} {...props} />;
}
