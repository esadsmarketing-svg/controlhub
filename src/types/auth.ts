import type { UserProfile } from '@/types/user';

export type AuthSessionStatus = 'idle' | 'authenticated' | 'unauthenticated';

export type AuthSession = {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  user: UserProfile;
};
