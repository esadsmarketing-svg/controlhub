import { FormMessage } from '@/components/forms/FormMessage';

type AuthSuccessMessageProps = {
  message?: string | null;
};

export function AuthSuccessMessage({ message }: AuthSuccessMessageProps) {
  return <FormMessage tone="success">{message}</FormMessage>;
}
