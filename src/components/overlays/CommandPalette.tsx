import { SearchInput } from '@/components/data';
import { Card } from '@/components/layout';
export function CommandPalette() { return <Card className="max-w-xl" padding="sm"><SearchInput placeholder="Digite um comando..." /><div className="mt-3 rounded-md bg-muted p-3 text-sm text-muted-foreground">Nenhum comando executável nesta etapa.</div></Card>; }
