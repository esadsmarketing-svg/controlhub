import { Button } from '@/components/ui';

type ConfirmDialogProps = { title: string; description: string; confirmLabel?: string; cancelLabel?: string; onConfirm?: () => void; onCancel?: () => void };
export function ConfirmDialog({ cancelLabel = 'Cancelar', confirmLabel = 'Confirmar', description, onCancel, onConfirm, title }: ConfirmDialogProps) {
  return <div className="rounded-lg border border-border bg-card p-5 shadow-lg" role="dialog"><h2 className="text-lg font-semibold">{title}</h2><p className="mt-2 text-sm text-muted-foreground">{description}</p><div className="mt-4 flex justify-end gap-2"><Button onClick={onCancel} variant="secondary">{cancelLabel}</Button><Button onClick={onConfirm}>{confirmLabel}</Button></div></div>;
}
