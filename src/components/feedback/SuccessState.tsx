import { Alert } from './Alert';
export function SuccessState({ message = 'Operação concluída com sucesso.' }: { message?: string }) { return <Alert title="Sucesso" variant="success">{message}</Alert>; }
