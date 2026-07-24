import { Alert } from './Alert';
export function InfoState({ message = 'Informação disponível.' }: { message?: string }) { return <Alert title="Informação" variant="info">{message}</Alert>; }
