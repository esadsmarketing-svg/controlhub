import type { ReactNode } from 'react';
import { Button } from '@/components/ui';
type Tab = { value: string; label: ReactNode };
export function Tabs({ activeValue, items, onChange }: { activeValue: string; items: Tab[]; onChange?: (value: string) => void }) { return <div className="flex gap-1 rounded-lg bg-muted p-1" role="tablist">{items.map((item) => <Button aria-selected={item.value === activeValue} key={item.value} onClick={() => onChange?.(item.value)} size="sm" variant={item.value === activeValue ? 'secondary' : 'ghost'}>{item.label}</Button>)}</div>; }
