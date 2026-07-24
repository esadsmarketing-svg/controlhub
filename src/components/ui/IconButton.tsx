import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button, type ButtonProps } from './Button';

type IconButtonProps = Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> & {
  icon: ReactNode;
  label: string;
};

export function IconButton({ icon, label, ...props }: IconButtonProps) {
  return (
    <Button aria-label={label} {...props}>
      {icon}
    </Button>
  );
}
