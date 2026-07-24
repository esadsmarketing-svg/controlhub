import { Link } from 'react-router-dom';

export function AccessDeniedPage() {
  return (
    <section className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-destructive">
        Acesso negado
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        Você não tem permissão para acessar esta área
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Esta página valida o tratamento de autorização da aplicação. As regras reais serão conectadas futuramente ao backend.
      </p>
      <Link
        className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        to="/"
      >
        Voltar para início
      </Link>
    </section>
  );
}
