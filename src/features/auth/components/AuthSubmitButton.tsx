import type { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/Button';

type AuthSubmitButtonProps = PropsWithChildren<{
  loading: boolean;
}>;

export function AuthSubmitButton({ children, loading }: AuthSubmitButtonProps) {
  return (
    <Button className="w-full" disabled={loading} type="submit">
      {loading ? 'Processando...' : children}
    </Button>
  );
}
