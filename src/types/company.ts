export type CompanyId = string;
export type WorkspaceId = string;

export type CompanyRef = {
  id: CompanyId;
  name: string;
};

export type WorkspaceRef = {
  id: WorkspaceId;
  companyId: CompanyId;
  name: string;
};
