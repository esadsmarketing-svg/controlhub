import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCard } from '@/features/auth/components/AuthCard';
import { AuthErrorMessage } from '@/features/auth/components/AuthErrorMessage';
import { AuthFormField } from '@/features/auth/components/AuthFormField';
import { AuthSubmitButton } from '@/features/auth/components/AuthSubmitButton';
import { useAuthForm } from '@/features/auth/hooks/useAuthForm';
import { getErrorMessage } from '@/lib/helpers';
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  validateRequired,
} from '@/lib/validators';
import { useAuth } from '@/hooks';

export function RegisterPage() {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const { values, errors, setErrors, updateField } = useAuthForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const nextErrors = {
      name: validateRequired(values.name, 'Nome') ?? undefined,
      email: validateEmail(values.email) ?? undefined,
      password: validatePassword(values.password) ?? undefined,
      confirmPassword:
        validatePasswordConfirmation(values.password, values.confirmPassword) ?? undefined,
    };

    if (
      nextErrors.name ||
      nextErrors.email ||
      nextErrors.password ||
      nextErrors.confirmPassword
    ) {
      setErrors(nextErrors);
      return;
    }

    try {
      await register(values);
      navigate('/', { replace: true });
    } catch (caughtError) {
      setError(getErrorMessage(caughtError));
    }
  }

  return (
    <AuthCard
      title="Criar conta mock"
      description="Cadastro simulado para validar o fluxo de onboarding."
      footerLabel="Já tem conta?"
      footerLinkLabel="Entrar"
      footerTo="/login"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <AuthErrorMessage message={error} />
        <AuthFormField
          autoComplete="name"
          disabled={loading}
          error={errors.name}
          id="name"
          label="Nome"
          onChange={(event) => updateField('name', event.target.value)}
          value={values.name}
        />
        <AuthFormField
          autoComplete="email"
          disabled={loading}
          error={errors.email}
          id="email"
          label="E-mail"
          onChange={(event) => updateField('email', event.target.value)}
          type="email"
          value={values.email}
        />
        <AuthFormField
          autoComplete="new-password"
          disabled={loading}
          error={errors.password}
          id="password"
          label="Senha"
          onChange={(event) => updateField('password', event.target.value)}
          type="password"
          value={values.password}
        />
        <AuthFormField
          autoComplete="new-password"
          disabled={loading}
          error={errors.confirmPassword}
          id="confirmPassword"
          label="Confirmar senha"
          onChange={(event) => updateField('confirmPassword', event.target.value)}
          type="password"
          value={values.confirmPassword}
        />
        <AuthSubmitButton loading={loading}>Criar conta</AuthSubmitButton>
      </form>
    </AuthCard>
  );
}
