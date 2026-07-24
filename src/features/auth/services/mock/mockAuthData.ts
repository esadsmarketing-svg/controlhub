import type { CompanyRef, WorkspaceRef } from '@/types/company';
import type { PermissionKey } from '@/types/permissions';
import type { UserProfile } from '@/types/user';

const mockCompany: CompanyRef = {
  id: 'company-controlhub-demo',
  name: 'ControlHub Demo Ltda.',
  tradeName: 'ControlHub Demo',
};

const mockWorkspace: WorkspaceRef = {
  id: 'workspace-main',
  companyId: mockCompany.id,
  name: 'Matriz',
};

const adminPermissions: PermissionKey[] = [
  'dashboard:view',
  'companies:manage',
  'users:manage',
  'permissions:manage',
  'crm:manage',
  'tasks:manage',
  'calendar:manage',
  'finance:manage',
  'reports:manage',
  'settings:manage',
  'integrations:manage',
  'notifications:manage',
];

const managerPermissions: PermissionKey[] = [
  'dashboard:view',
  'companies:view',
  'users:view',
  'crm:manage',
  'tasks:manage',
  'calendar:manage',
  'finance:view',
  'reports:view',
  'notifications:view',
];

const collaboratorPermissions: PermissionKey[] = [
  'dashboard:view',
  'crm:view',
  'tasks:view',
  'tasks:update',
  'calendar:view',
  'notifications:view',
];

export const MOCK_PASSWORD = 'controlhub123';

export const mockUsers: UserProfile[] = [
  {
    id: 'user-admin',
    name: 'Ana Administradora',
    email: 'admin@controlhub.test',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Ana%20Administradora',
    role: 'admin',
    position: 'Administradora',
    company: mockCompany,
    workspace: mockWorkspace,
    permissions: adminPermissions,
  },
  {
    id: 'user-manager',
    name: 'Marcos Gerente',
    email: 'gerente@controlhub.test',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Marcos%20Gerente',
    role: 'manager',
    position: 'Gerente Comercial',
    company: mockCompany,
    workspace: mockWorkspace,
    permissions: managerPermissions,
  },
  {
    id: 'user-collaborator',
    name: 'Carla Colaboradora',
    email: 'colaborador@controlhub.test',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Carla%20Colaboradora',
    role: 'collaborator',
    position: 'Analista de Operações',
    company: mockCompany,
    workspace: mockWorkspace,
    permissions: collaboratorPermissions,
  },
];
