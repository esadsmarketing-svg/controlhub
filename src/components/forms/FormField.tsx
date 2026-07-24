import type { ReactNode } from 'react';
import { FormDescription } from './FormDescription';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';

type FormFieldProps = { id: string; label: string; description?: ReactNode; error?: string | null; children: ReactNode };
export function FormField({ children, description, error, id, label }: FormFieldProps) { return <div className="space-y-2"><FormLabel htmlFor={id}>{label}</FormLabel>{children}<FormDescription>{description}</FormDescription><FormError message={error} /></div>; }
