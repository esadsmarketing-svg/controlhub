import type { ReactNode } from 'react';
export function FormDescription({ children }: { children?: ReactNode }) { return children ? <p className="text-sm text-muted-foreground">{children}</p> : null; }
