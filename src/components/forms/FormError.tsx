export function FormError({ message }: { message?: string | null }) { return message ? <p className="text-sm text-destructive" role="alert">{message}</p> : null; }
