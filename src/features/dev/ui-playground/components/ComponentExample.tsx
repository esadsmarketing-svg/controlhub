import type { ReactNode } from 'react';
import { Card } from '@/components/layout';

type ComponentExampleProps = { name: string; description: string; props: string[]; code: string; children: ReactNode };
export function ComponentExample({ children, code, description, name, props }: ComponentExampleProps) {
  return <Card className="space-y-4"><div><h3 className="text-lg font-semibold">{name}</h3><p className="text-sm text-muted-foreground">{description}</p></div><div className="flex flex-wrap gap-2 rounded-lg border border-border bg-background p-4">{children}</div><div><p className="text-sm font-medium">Props principais</p><ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">{props.map((item) => <li key={item}>{item}</li>)}</ul></div><pre className="overflow-auto rounded-md bg-muted p-3 text-xs"><code>{code}</code></pre></Card>;
}
