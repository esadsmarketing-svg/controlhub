import { FormMessage } from '@/components/forms/FormMessage';

type AuthErrorMessageProps = {
  message?: string | null;
};

export function AuthErrorMessage({ message }: AuthErrorMessageProps) {
  return <FormMessage tone="error">{message}</FormMessage>;
}
