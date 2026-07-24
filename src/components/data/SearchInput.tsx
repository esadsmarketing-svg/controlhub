import { Search } from 'lucide-react';
import { Input, type InputProps } from '@/components/ui';
export function SearchInput(props: InputProps) { return <Input leftIcon={<Search className="h-4 w-4" />} type="search" {...props} />; }
