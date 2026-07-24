export function GlobalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 shadow-sm">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">Carregando sessão...</p>
      </div>
    </div>
  );
}
