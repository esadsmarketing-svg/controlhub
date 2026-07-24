import type { CompanyRef, WorkspaceRef } from '@/types/company';
import type { PermissionKey } from '@/types/permissions';

export type UserId = string;

export type UserRole = 'admin' | 'manager' | 'collaborator';

export type UserProfile = {
  id: UserId;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  position: string;
  company: CompanyRef;
  workspace: WorkspaceRef;
  permissions: readonly PermissionKey[];
};
