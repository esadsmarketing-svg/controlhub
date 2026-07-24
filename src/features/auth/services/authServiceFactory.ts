import { SessionStorageAdapter } from '@/services/storage';
import { MockAuthService } from './MockAuthService';

export function createAuthService() {
  return new MockAuthService(new SessionStorageAdapter());
}
