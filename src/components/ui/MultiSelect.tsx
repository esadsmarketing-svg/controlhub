import type { SelectHTMLAttributes } from 'react';
import { Select } from './Select';

export function MultiSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <Select multiple {...props} />;
}
