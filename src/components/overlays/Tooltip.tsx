import type { ReactNode } from 'react';
type TooltipProps = { content: ReactNode; children: ReactNode };
export function Tooltip({ children, content }: TooltipProps) { return <span className="group relative inline-flex"><span>{children}</span><span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-xs text-background shadow group-hover:block">{content}</span></span>; }
