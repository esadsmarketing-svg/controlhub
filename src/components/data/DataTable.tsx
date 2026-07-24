import type { ReactNode } from 'react';
import { EmptyState } from '@/components/feedback';
import { Skeleton } from '@/components/ui';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from './Table';

type Column<TData> = { key: keyof TData; header: string; render?: (row: TData) => ReactNode };
type DataTableProps<TData extends Record<string, unknown>> = { columns: Column<TData>[]; data: TData[]; loading?: boolean; emptyMessage?: string };
export function DataTable<TData extends Record<string, unknown>>({ columns, data, emptyMessage = 'Nenhum registro encontrado.', loading }: DataTableProps<TData>) {
  if (loading) return <Skeleton className="h-40 w-full" />;
  if (!data.length) return <EmptyState title="Tabela vazia" description={emptyMessage} />;
  return <Table><TableHead><TableRow>{columns.map((column) => <TableHeaderCell key={String(column.key)}>{column.header}</TableHeaderCell>)}</TableRow></TableHead><TableBody>{data.map((row, rowIndex) => <TableRow key={rowIndex}>{columns.map((column) => <TableCell key={String(column.key)}>{column.render ? column.render(row) : String(row[column.key] ?? '')}</TableCell>)}</TableRow>)}</TableBody></Table>;
}
