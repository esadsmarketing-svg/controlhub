import type { ReactNode } from 'react';
import { Button } from '@/components/ui';

type AlertDialogProps = { open?: boolean; title: string; description: string; onClose?: () => void; children?: ReactNode };
export function AlertDialog({ children, description, onClose, open = true, title }: AlertDialogProps) {
  if (!open) return null;
  return <div className="rounded-lg border border-border bg-card p-5 shadow-lg" role="alertdialog" aria-modal="true"><h2 className="text-lg font-semibold">{title}</h2><p className="mt-2 text-sm text-muted-foreground">{description}</p><div className="mt-4 flex justify-end gap-2">{children}<Button onClick={onClose} variant="secondary">Fechar</Button></div></div>;
}
