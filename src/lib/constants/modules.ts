import type { ModuleKey } from '@/types/permissions';

export const MODULE_KEYS = [
  'auth',
  'dashboard',
  'companies',
  'users',
  'permissions',
  'crm',
  'tasks',
  'calendar',
  'finance',
  'reports',
  'settings',
  'integrations',
  'notifications',
] as const satisfies readonly ModuleKey[];
