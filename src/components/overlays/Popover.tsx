import type { ReactNode } from 'react';
type PopoverProps = { trigger: ReactNode; children: ReactNode };
export function Popover({ children, trigger }: PopoverProps) { return <details className="relative inline-block"><summary className="list-none cursor-pointer">{trigger}</summary><div className="absolute right-0 z-50 mt-2 min-w-56 rounded-lg border border-border bg-popover p-3 text-popover-foreground shadow-lg">{children}</div></details>; }
