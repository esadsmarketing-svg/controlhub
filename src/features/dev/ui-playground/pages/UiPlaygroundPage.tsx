import { useMemo, useState } from 'react';
import { Page, PageHeader, Stack } from '@/components/layout';
import { Button, Select } from '@/components/ui';
import { playgroundSections } from '../data/componentExamples';

const viewports = { mobile: 'max-w-sm', tablet: 'max-w-2xl', desktop: 'max-w-5xl', wide: 'max-w-full' } as const;
type ThemeMode = 'light' | 'dark' | 'system';
type Viewport = keyof typeof viewports;

export function UiPlaygroundPage() {
  const [theme, setTheme] = useState<ThemeMode>('system');
  const [viewport, setViewport] = useState<Viewport>('wide');
  const themeClassName = useMemo(() => (theme === 'dark' ? 'dark' : ''), [theme]);

  return <Page className={themeClassName}><PageHeader title="UI Playground" description="Catálogo oficial do Design System do ControlHub. Disponível apenas em desenvolvimento." actions={<div className="flex flex-wrap gap-2"><Select aria-label="Tema" onChange={(event) => setTheme(event.target.value as ThemeMode)} value={theme}><option value="light">Light</option><option value="dark">Dark</option><option value="system">System</option></Select><Select aria-label="Viewport" onChange={(event) => setViewport(event.target.value as Viewport)} value={viewport}><option value="mobile">Mobile</option><option value="tablet">Tablet</option><option value="desktop">Desktop</option><option value="wide">Wide</option></Select><Button variant="outline">Acessibilidade: foco visível e ARIA</Button></div>} /><div className="rounded-xl border border-border bg-background p-4 transition-all"><div className={`mx-auto ${viewports[viewport]}`}><Stack>{playgroundSections.map((section) => <div key={section.title}>{section.content}</div>)}</Stack></div></div></Page>;
}
