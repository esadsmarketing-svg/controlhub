import { ArrowUpDown } from 'lucide-react';
import { Button, type ButtonProps } from '@/components/ui';
export function SortButton(props: ButtonProps) { return <Button rightIcon={<ArrowUpDown className="h-4 w-4" />} variant="ghost" {...props} />; }
