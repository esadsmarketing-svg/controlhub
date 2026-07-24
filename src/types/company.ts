export type CompanyId = string;
export type WorkspaceId = string;

export type CompanyRef = {
  id: CompanyId;
  name: string;
  tradeName?: string;
};

export type WorkspaceRef = {
  id: WorkspaceId;
  companyId: CompanyId;
  name: string;
};
