import { useState } from 'react';

export function useAuthForm<TFields extends Record<string, string>>(initialValues: TFields) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof TFields, string>>>({});

  function updateField(field: keyof TFields, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
  }

  return {
    values,
    errors,
    setErrors,
    updateField,
  };
}
