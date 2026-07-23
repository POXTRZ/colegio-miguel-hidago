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
  id: string;
  title: string;
  items: string[];
};

export type ShieldElement = {
  id: string;
  title: string;
  text: string;
};

export type InstitutionalValue = {
  id: string;
  title: string;
  description: string;
};

export type EducationalPrinciple = {
  id: string;
  title: string;
  description: string;
};
