import type { ReactNode } from 'react';
export function NavigationMenu({ children }: { children: ReactNode }) { return <nav className="flex items-center gap-2" aria-label="Navegação principal">{children}</nav>; }
