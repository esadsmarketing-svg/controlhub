import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
type SidebarItemProps = { icon?: ReactNode; label: string; active?: boolean };
export function SidebarItem({ active, icon, label }: SidebarItemProps) { return <div className={cn('flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground', active && 'bg-accent text-accent-foreground')}>{icon}{label}</div>; }
