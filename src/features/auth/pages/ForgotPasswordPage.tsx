import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthCard } from '@/features/auth/components/AuthCard';
import { AuthErrorMessage } from '@/features/auth/components/AuthErrorMessage';
import { AuthFormField } from '@/features/auth/components/AuthFormField';
import { AuthSubmitButton } from '@/features/auth/components/AuthSubmitButton';
import { AuthSuccessMessage } from '@/features/auth/components/AuthSuccessMessage';
import { useAuthForm } from '@/features/auth/hooks/useAuthForm';
import { getErrorMessage } from '@/lib/helpers';
import { validateEmail } from '@/lib/validators';
import { useAuth } from '@/hooks';

export function ForgotPasswordPage() {
  const { resetPassword, loading } = useAuth();
  const { values, errors, setErrors, updateField } = useAuthForm({ email: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const emailError = validateEmail(values.email);

    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    try {
      await resetPassword(values);
      setSuccess('E-mail de recuperação simulado com sucesso.');
    } catch (caughtError) {
      setError(getErrorMessage(caughtError));
    }
  }

  return (
    <AuthCard
      title="Recuperar senha"
      description="Simule o envio de instruções para redefinir sua senha."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <AuthErrorMessage message={error} />
        <AuthSuccessMessage message={success} />
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
        <AuthSubmitButton loading={loading}>Enviar instruções</AuthSubmitButton>
        <Link className="block text-center text-sm font-medium text-primary hover:underline" to="/login">
          Voltar para login
        </Link>
      </form>
    </AuthCard>
  );
}
