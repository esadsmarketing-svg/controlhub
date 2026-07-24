import type { ReactNode } from 'react';
import { Popover } from './Popover';
export function Dropdown({ children, trigger }: { trigger: ReactNode; children: ReactNode }) { return <Popover trigger={trigger}>{children}</Popover>; }
