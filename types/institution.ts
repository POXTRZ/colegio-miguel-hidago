export type InstitutionalItem = {
  id: string;
  title: string;
  body: string;
  note: string;
};

export type Differentiator = {
  title: string;
  description: string;
};

export type EducationLevel = {
  name: string;
  detail: string;
};

export type OrganizationGroup = {
  title: string;
  items: string[];
};

export type ShieldElement = {
  title: string;
  text: string;
};
