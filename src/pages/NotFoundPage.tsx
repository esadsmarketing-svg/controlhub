import { Link } from 'react-router-dom';
import { ModulePlaceholder } from '@/components/common/ModulePlaceholder';

export function NotFoundPage() {
  return (
    <div className="space-y-4">
      <ModulePlaceholder
        title="Página não encontrada"
        description="Rota reservada para tratamento de navegação fora da estrutura registrada."
      />
      <Link
        className="inline-flex h-11 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
        to="/"
      >
        Voltar para início
      </Link>
    </div>
  );
}
