import type { AuthSession } from '@/types/auth';
import type { StorageAdapter } from '@/services/storage';
import type { AuthService } from './AuthService';
import type {
  AuthCredentials,
  RegisterPayload,
  ResetPasswordPayload,
  UpdatePasswordPayload,
} from '@/features/auth/types/auth.types';
import { MOCK_PASSWORD, mockUsers } from './mock/mockAuthData';
import {
  createMockSession,
  MOCK_SESSION_KEY,
  waitForMockApi,
} from './mock/mockAuthUtils';

export class MockAuthService implements AuthService {
  constructor(private readonly storage: StorageAdapter) {}

  async getSession() {
    const session = this.storage.getItem<AuthSession>(MOCK_SESSION_KEY);

    if (!session) {
      return null;
    }

    if (new Date(session.expiresAt).getTime() <= Date.now()) {
      this.storage.removeItem(MOCK_SESSION_KEY);
      return null;
    }

    return session;
  }

  async login({ email, password }: AuthCredentials) {
    await waitForMockApi();

    const user = mockUsers.find(
      (mockUser) => mockUser.email.toLowerCase() === email.toLowerCase(),
    );

    if (!user) {
      throw new Error('Não encontramos uma conta com este e-mail.');
    }

    if (password !== MOCK_PASSWORD) {
      throw new Error('Senha incorreta. Verifique os dados e tente novamente.');
    }

    return this.persistSession(user);
  }

  async logout() {
    await waitForMockApi();
    this.storage.removeItem(MOCK_SESSION_KEY);
  }

  async register({ name, email }: RegisterPayload) {
    await waitForMockApi();

    const existingUser = mockUsers.some(
      (mockUser) => mockUser.email.toLowerCase() === email.toLowerCase(),
    );

    if (existingUser) {
      throw new Error('Já existe uma conta mock com este e-mail.');
    }

    const baseUser = mockUsers[2];
    const user = {
      ...baseUser,
      id: `user-${crypto.randomUUID()}`,
      name,
      email,
      avatar: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(name)}`,
      position: 'Novo usuário',
      role: 'collaborator' as const,
    };

    return this.persistSession(user);
  }

  async resetPassword({ email }: ResetPasswordPayload) {
    await waitForMockApi();

    const existingUser = mockUsers.some(
      (mockUser) => mockUser.email.toLowerCase() === email.toLowerCase(),
    );

    if (!existingUser) {
      throw new Error('Não encontramos uma conta com este e-mail.');
    }
  }

  async updatePassword({ password, confirmPassword }: UpdatePasswordPayload) {
    await waitForMockApi();

    if (password !== confirmPassword) {
      throw new Error('As senhas informadas não conferem.');
    }

    const session = await this.getSession();

    if (session) {
      return this.persistSession(session.user);
    }

    return this.persistSession(mockUsers[0]);
  }

  async refreshSession() {
    await waitForMockApi();

    const session = await this.getSession();

    if (!session) {
      return null;
    }

    return this.persistSession(session.user);
  }

  private persistSession(user: AuthSession['user']) {
    const session = createMockSession(user);
    this.storage.setItem(MOCK_SESSION_KEY, session);

    return session;
  }
}
