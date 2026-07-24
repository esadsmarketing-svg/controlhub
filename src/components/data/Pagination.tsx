import { Button } from '@/components/ui';
type PaginationProps = { page: number; totalPages: number; onPrevious?: () => void; onNext?: () => void };
export function Pagination({ onNext, onPrevious, page, totalPages }: PaginationProps) { return <nav aria-label="Paginação" className="flex items-center justify-between gap-2"><Button disabled={page <= 1} onClick={onPrevious} variant="secondary">Anterior</Button><span className="text-sm text-muted-foreground">Página {page} de {totalPages}</span><Button disabled={page >= totalPages} onClick={onNext} variant="secondary">Próxima</Button></nav>; }
