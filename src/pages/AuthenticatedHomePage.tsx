import { EmptyState } from '@/components/feedback/EmptyState';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks';

export function AuthenticatedHomePage() {
  const { user, refreshSession, loading } = useAuth();

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Área protegida
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Olá, {user?.name}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Você está navegando em uma sessão mock persistente. Esta área valida o fluxo de autenticação antes da integração com backend real.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
          <div className="rounded-md bg-muted p-3">
            <p className="font-medium text-foreground">Empresa atual</p>
            <p>{user?.company.name}</p>
          </div>
          <div className="rounded-md bg-muted p-3">
            <p className="font-medium text-foreground">Workspace atual</p>
            <p>{user?.workspace.name}</p>
          </div>
          <div className="rounded-md bg-muted p-3">
            <p className="font-medium text-foreground">Perfil</p>
            <p>{user?.position}</p>
          </div>
        </div>
        <Button className="mt-6" disabled={loading} onClick={() => void refreshSession()}>
          {loading ? 'Atualizando...' : 'Simular refresh da sessão'}
        </Button>
      </section>

      <EmptyState
        title="Módulos ainda não implementados"
        description="Dashboard, CRM, tarefas, financeiro e demais áreas serão criados nas próximas etapas."
      />
    </div>
  );
}
