import type { PermissionKey } from '@/types/permissions';

export type NavigationItem = {
  label: string;
  path: string;
  requiredPermission?: PermissionKey;
};
