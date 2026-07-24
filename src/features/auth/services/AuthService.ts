import type { AuthSession } from '@/types/auth';
import type {
  AuthCredentials,
  RegisterPayload,
  ResetPasswordPayload,
  UpdatePasswordPayload,
} from '@/features/auth/types/auth.types';

export type AuthService = {
  getSession: () => Promise<AuthSession | null>;
  login: (credentials: AuthCredentials) => Promise<AuthSession>;
  logout: () => Promise<void>;
  register: (payload: RegisterPayload) => Promise<AuthSession>;
  resetPassword: (payload: ResetPasswordPayload) => Promise<void>;
  updatePassword: (payload: UpdatePasswordPayload) => Promise<AuthSession>;
  refreshSession: () => Promise<AuthSession | null>;
};
