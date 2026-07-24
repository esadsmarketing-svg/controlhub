import type { ReactNode } from 'react';

type PlaygroundSectionProps = { title: string; description: string; children: ReactNode };
export function PlaygroundSection({ children, description, title }: PlaygroundSectionProps) { return <section className="space-y-4"><div><h2 className="text-xl font-semibold tracking-tight">{title}</h2><p className="text-sm text-muted-foreground">{description}</p></div><div className="grid gap-4 xl:grid-cols-2">{children}</div></section>; }
