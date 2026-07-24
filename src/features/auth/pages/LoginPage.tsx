import { FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthCard } from '@/features/auth/components/AuthCard';
import { AuthErrorMessage } from '@/features/auth/components/AuthErrorMessage';
import { AuthFormField } from '@/features/auth/components/AuthFormField';
import { AuthSubmitButton } from '@/features/auth/components/AuthSubmitButton';
import { useAuthForm } from '@/features/auth/hooks/useAuthForm';
import { getErrorMessage } from '@/lib/helpers';
import { validateEmail, validatePassword } from '@/lib/validators';
import { useAuth } from '@/hooks';

type LocationState = {
  from?: {
    pathname?: string;
  };
};

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading } = useAuth();
  const { values, errors, setErrors, updateField } = useAuthForm({
    email: 'admin@controlhub.test',
    password: 'controlhub123',
  });
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const nextErrors = {
      email: validateEmail(values.email) ?? undefined,
      password: validatePassword(values.password) ?? undefined,
    };

    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors);
      return;
    }

    try {
      await login(values);
      const state = location.state as LocationState | null;
      navigate(state?.from?.pathname ?? '/', { replace: true });
    } catch (caughtError) {
      setError(getErrorMessage(caughtError));
    }
  }

  return (
    <AuthCard
      title="Entrar no ControlHub"
      description="Use uma conta mock para validar a experiência antes do Supabase."
      footerLabel="Ainda não tem conta?"
      footerLinkLabel="Criar cadastro"
      footerTo="/register"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <AuthErrorMessage message={error} />
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
          autoComplete="current-password"
          disabled={loading}
          error={errors.password}
          id="password"
          label="Senha"
          onChange={(event) => updateField('password', event.target.value)}
          type="password"
          value={values.password}
        />
        <div className="flex justify-end">
          <Link className="text-sm font-medium text-primary hover:underline" to="/forgot-password">
            Esqueci minha senha
          </Link>
        </div>
        <AuthSubmitButton loading={loading}>Entrar</AuthSubmitButton>
        <div className="rounded-md bg-muted p-3 text-xs text-muted-foreground">
          <p className="font-medium text-foreground">Contas mock:</p>
          <p>admin@controlhub.test / controlhub123</p>
          <p>gerente@controlhub.test / controlhub123</p>
          <p>colaborador@controlhub.test / controlhub123</p>
        </div>
      </form>
    </AuthCard>
  );
}
