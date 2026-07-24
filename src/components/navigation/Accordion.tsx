import type { ReactNode } from 'react';
type AccordionItem = { title: string; content: ReactNode };
export function Accordion({ items }: { items: AccordionItem[] }) { return <div className="divide-y divide-border rounded-lg border border-border">{items.map((item) => <details className="p-4" key={item.title}><summary className="cursor-pointer font-medium">{item.title}</summary><div className="mt-2 text-sm text-muted-foreground">{item.content}</div></details>)}</div>; }
