import type { ReactNode } from 'react';
export function ContextMenu({ children }: { children: ReactNode }) { return <div className="min-w-48 rounded-lg border border-border bg-popover p-1 text-sm shadow-lg" role="menu">{children}</div>; }
