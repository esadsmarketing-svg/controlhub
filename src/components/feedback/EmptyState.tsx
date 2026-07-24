import type { ReactNode } from 'react';
import { Inbox } from 'lucide-react';
import { Button } from '@/components/ui';

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({ actionLabel, description, icon = <Inbox className="h-8 w-8" />, onAction, title }: EmptyStateProps) {
  return <div className="rounded-lg border border-dashed border-border bg-card p-8 text-center"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">{icon}</div><h2 className="text-xl font-semibold tracking-tight">{title}</h2><p className="mt-2 text-sm text-muted-foreground">{description}</p>{actionLabel ? <Button className="mt-4" onClick={onAction} variant="secondary">{actionLabel}</Button> : null}</div>;
}
