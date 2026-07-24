import { Alert } from './Alert';
export function ErrorState({ message = 'Não foi possível carregar os dados.' }: { message?: string }) { return <Alert title="Erro" variant="error">{message}</Alert>; }
