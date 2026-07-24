import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type AuthCardProps = PropsWithChildren<{
  title: string;
  description: string;
  footerLabel?: string;
  footerLinkLabel?: string;
  footerTo?: string;
}>;

export function AuthCard({
  children,
  title,
  description,
  footerLabel,
  footerLinkLabel,
  footerTo,
}: AuthCardProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-4 py-10">
      <section className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-6 space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">ControlHub</p>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {children}
        {footerLabel && footerLinkLabel && footerTo ? (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {footerLabel}{' '}
            <Link className="font-medium text-primary hover:underline" to={footerTo}>
              {footerLinkLabel}
            </Link>
          </p>
        ) : null}
      </section>
    </main>
  );
}
