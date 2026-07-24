import { Input, type InputProps } from '@/components/ui';
export function CurrencyInput(props: InputProps) { return <Input inputMode="decimal" leftIcon={<span>R$</span>} {...props} />; }
