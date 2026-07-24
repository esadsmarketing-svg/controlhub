import type { AuthSession } from '@/types/auth';
import type { UserProfile } from '@/types/user';

export const MOCK_SESSION_KEY = 'controlhub.mock.session';

export function waitForMockApi() {
  const delay = 500 + Math.floor(Math.random() * 501);

  return new Promise((resolve) => {
    window.setTimeout(resolve, delay);
  });
}

export function createMockSession(user: UserProfile): AuthSession {
  const issuedAt = Date.now();
  const expiresAt = new Date(issuedAt + 1000 * 60 * 30).toISOString();

  return {
    accessToken: `mock-access-token-${user.id}-${issuedAt}`,
    refreshToken: `mock-refresh-token-${user.id}-${issuedAt}`,
    expiresAt,
    user,
  };
}
