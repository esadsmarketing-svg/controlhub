import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCard } from '@/features/auth/components/AuthCard';
import { AuthErrorMessage } from '@/features/auth/components/AuthErrorMessage';
import { AuthFormField } from '@/features/auth/components/AuthFormField';
import { AuthSubmitButton } from '@/features/auth/components/AuthSubmitButton';
import { useAuthForm } from '@/features/auth/hooks/useAuthForm';
import { getErrorMessage } from '@/lib/helpers';
import { validatePassword, validatePasswordConfirmation } from '@/lib/validators';
import { useAuth } from '@/hooks';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const { updatePassword, loading } = useAuth();
  const { values, errors, setErrors, updateField } = useAuthForm({
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const nextErrors = {
      password: validatePassword(values.password) ?? undefined,
      confirmPassword:
        validatePasswordConfirmation(values.password, values.confirmPassword) ?? undefined,
    };

    if (nextErrors.password || nextErrors.confirmPassword) {
      setErrors(nextErrors);
      return;
    }

    try {
      await updatePassword(values);
      navigate('/', { replace: true });
    } catch (caughtError) {
      setError(getErrorMessage(caughtError));
    }
  }

  return (
    <AuthCard title="Nova senha" description="Simule a redefinição de senha da conta.">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <AuthErrorMessage message={error} />
        <AuthFormField
          autoComplete="new-password"
          disabled={loading}
          error={errors.password}
          id="password"
          label="Nova senha"
          onChange={(event) => updateField('password', event.target.value)}
          type="password"
          value={values.password}
        />
        <AuthFormField
          autoComplete="new-password"
          disabled={loading}
          error={errors.confirmPassword}
          id="confirmPassword"
          label="Confirmar nova senha"
          onChange={(event) => updateField('confirmPassword', event.target.value)}
          type="password"
          value={values.confirmPassword}
        />
        <AuthSubmitButton loading={loading}>Redefinir senha</AuthSubmitButton>
      </form>
    </AuthCard>
  );
}
