import type { ReactNode } from 'react';
export function SidebarGroup({ children, title }: { title: string; children: ReactNode }) { return <div className="space-y-1"><p className="px-3 text-xs font-medium uppercase text-muted-foreground">{title}</p>{children}</div>; }
