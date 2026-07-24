import type { AuthSession } from '@/types/auth';
import type { UserProfile } from '@/types/user';

export type AuthCredentials = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ResetPasswordPayload = {
  email: string;
};

export type UpdatePasswordPayload = {
  password: string;
  confirmPassword: string;
};

export type AuthState = {
  user: UserProfile | null;
  session: AuthSession | null;
  loading: boolean;
  isAuthenticated: boolean;
};

export type AuthContextValue = AuthState & {
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  resetPassword: (payload: ResetPasswordPayload) => Promise<void>;
  updatePassword: (payload: UpdatePasswordPayload) => Promise<void>;
  refreshSession: () => Promise<void>;
};
