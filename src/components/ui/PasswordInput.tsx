import { useState, type InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from './Input';
import { IconButton } from './IconButton';

export function PasswordInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const [visible, setVisible] = useState(false);

  return (
    <Input
      {...props}
      type={visible ? 'text' : 'password'}
      rightIcon={
        <IconButton
          className="h-6 w-6 p-0"
          icon={visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          label={visible ? 'Ocultar senha' : 'Mostrar senha'}
          onClick={() => setVisible((current) => !current)}
          variant="ghost"
        />
      }
    />
  );
}
