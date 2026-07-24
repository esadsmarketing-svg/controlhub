import type { HTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Spinner({ className, ...props }: HTMLAttributes<SVGSVGElement>) {
  return <Loader2 aria-label="Carregando" className={cn('h-5 w-5 animate-spin text-primary', className)} {...props} />;
}
