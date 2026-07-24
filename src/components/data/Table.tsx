import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) { return <div className="w-full overflow-auto rounded-lg border border-border"><table className={cn('w-full caption-bottom text-sm', className)} {...props} /></div>; }
export function TableHead(props: HTMLAttributes<HTMLTableSectionElement>) { return <thead className="bg-muted/50" {...props} />; }
export function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) { return <tbody {...props} />; }
export function TableRow(props: HTMLAttributes<HTMLTableRowElement>) { return <tr className="border-b border-border last:border-0" {...props} />; }
export function TableHeaderCell(props: ThHTMLAttributes<HTMLTableCellElement>) { return <th className="h-10 px-3 text-left font-medium text-muted-foreground" {...props} />; }
export function TableCell(props: TdHTMLAttributes<HTMLTableCellElement>) { return <td className="px-3 py-3" {...props} />; }
