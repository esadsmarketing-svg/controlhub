import type { ReactNode } from 'react';
export function Topbar({ children }: { children: ReactNode }) { return <header className="flex h-14 items-center justify-between border-b border-border bg-background px-4">{children}</header>; }
