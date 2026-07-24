import type { ReactNode } from 'react';
import { Card } from './Card';
type StatCardProps = { title: string; value: string; description?: string; icon?: ReactNode };
export function StatCard({ description, icon, title, value }: StatCardProps) { return <Card><div className="flex items-start justify-between gap-4"><div><p className="text-sm text-muted-foreground">{title}</p><p className="mt-2 text-2xl font-semibold">{value}</p>{description ? <p className="mt-1 text-xs text-muted-foreground">{description}</p> : null}</div>{icon ? <div className="rounded-md bg-muted p-2 text-muted-foreground">{icon}</div> : null}</div></Card>; }
