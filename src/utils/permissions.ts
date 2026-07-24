import type { PermissionKey } from '@/types/permissions';

export function hasPermission(
  grantedPermissions: readonly PermissionKey[],
  requiredPermission?: PermissionKey,
) {
  if (!requiredPermission) {
    return true;
  }

  return grantedPermissions.includes(requiredPermission);
}
