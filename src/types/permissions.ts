export type ModuleKey =
  | 'auth'
  | 'dashboard'
  | 'companies'
  | 'users'
  | 'permissions'
  | 'crm'
  | 'tasks'
  | 'calendar'
  | 'finance'
  | 'reports'
  | 'settings'
  | 'integrations'
  | 'notifications';

export type PermissionAction = 'view' | 'create' | 'update' | 'delete' | 'manage';

export type PermissionKey = `${ModuleKey}:${PermissionAction}`;

export type CompanyPermissionScope = {
  companyId: string;
  workspaceId?: string;
  permissions: readonly PermissionKey[];
};
