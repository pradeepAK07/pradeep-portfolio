export interface ExperienceType {
  role: string;
  tags?: string[];
  description: string;
  company: string;
  achievements: string[];
  period: string;
  tech_stack?: string[];
  currently_employed?: boolean;
}

export interface SkillType {
  name: string;
  description: string;
  sub_tech: string[];
  exp: string;
}

export interface EcoSystemType {
  label: string;
  techs: string[];
}
