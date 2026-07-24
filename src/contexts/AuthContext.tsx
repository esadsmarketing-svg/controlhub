import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import { createAuthService } from '@/features/auth/services';
import type { AuthSession } from '@/types/auth';
import type {
  AuthContextValue,
  AuthCredentials,
  RegisterPayload,
  ResetPasswordPayload,
  UpdatePasswordPayload,
} from '@/features/auth/types/auth.types';

export const AuthContext = createContext<AuthContextValue | null>(null);

const authService = createAuthService();

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  const hydrateSession = useCallback(async () => {
    setLoading(true);

    try {
      const currentSession = await authService.getSession();
      setSession(currentSession);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void hydrateSession();
  }, [hydrateSession]);

  const login = useCallback(async (credentials: AuthCredentials) => {
    setLoading(true);

    try {
      const nextSession = await authService.login(credentials);
      setSession(nextSession);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);

    try {
      await authService.logout();
      setSession(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (payload: RegisterPayload) => {
    setLoading(true);

    try {
      const nextSession = await authService.register(payload);
      setSession(nextSession);
    } finally {
      setLoading(false);
    }
  }, []);

  const resetPassword = useCallback(async (payload: ResetPasswordPayload) => {
    setLoading(true);

    try {
      await authService.resetPassword(payload);
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePassword = useCallback(async (payload: UpdatePasswordPayload) => {
    setLoading(true);

    try {
      const nextSession = await authService.updatePassword(payload);
      setSession(nextSession);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshSession = useCallback(async () => {
    setLoading(true);

    try {
      const nextSession = await authService.refreshSession();
      setSession(nextSession);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      session,
      loading,
      isAuthenticated: Boolean(session),
      login,
      logout,
      register,
      resetPassword,
      updatePassword,
      refreshSession,
    }),
    [
      loading,
      login,
      logout,
      refreshSession,
      register,
      resetPassword,
      session,
      updatePassword,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
