import type { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8">
        {children}
      </main>
    </div>
  );
}
