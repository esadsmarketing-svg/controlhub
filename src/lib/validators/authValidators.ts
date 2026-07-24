const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export function validateRequired(value: string, fieldLabel: string) {
  if (!value.trim()) {
    return `${fieldLabel} é obrigatório.`;
  }

  return null;
}

export function validateEmail(email: string) {
  const requiredMessage = validateRequired(email, 'E-mail');

  if (requiredMessage) {
    return requiredMessage;
  }

  if (!EMAIL_PATTERN.test(email)) {
    return 'Informe um e-mail válido.';
  }

  return null;
}

export function validatePassword(password: string) {
  const requiredMessage = validateRequired(password, 'Senha');

  if (requiredMessage) {
    return requiredMessage;
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `A senha deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`;
  }

  return null;
}

export function validatePasswordConfirmation(
  password: string,
  confirmPassword: string,
) {
  const requiredMessage = validateRequired(confirmPassword, 'Confirmação de senha');

  if (requiredMessage) {
    return requiredMessage;
  }

  if (password !== confirmPassword) {
    return 'As senhas informadas não conferem.';
  }

  return null;
}
