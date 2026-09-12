export type ThemeType = 'electric-blue' | 'crimson' | 'terminal';

export interface SocialLinks {
  github: string;
  linkedin: string;
  hackerrank: string;
  email: string;
}

export interface PhilosophyStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface BuildingArea {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface MindsetStage {
  label: string;
  sub: string;
  description: string;
}

export type SkillTier = 'WORKING WITH' | 'LEARNING' | 'EXPLORING';

export interface SkillCategory {
  name: string;
  tier: SkillTier;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companySubtitle?: string;
  period: string;
  description: string;
  focusAreas: string[];
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  institution: string;
  expectedGraduation: string;
  status: string;
}

export interface ProblemSolvingArea {
  title: string;
  tagline: string;
  description: string;
  items: string[];
}

export interface ProjectTeaser {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

export interface ConstellationNode {
  id: string;
  label: string;
  x: number; // Percentage coordinate (0-100)
  y: number; // Percentage coordinate (0-100)
  category: string;
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    primaryPosition: string;
    secondaryPosition: string;
    role: string;
    roleDescription: string;
    eyebrow: string;
    headline: {
      part1: string;
      part2: string;
      part3: string;
      part4: string;
    };
    heroBio: string;
    mottos: string[];
    avatarPath: string;
  };
  projectsUrl: string;
  socials: SocialLinks;
  techStrip: string[];
  philosophySteps: PhilosophyStep[];
  buildingAreas: BuildingArea[];
  engineeringMindset: MindsetStage[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationInfo;
  problemSolving: ProblemSolvingArea[];
  projectTeasers: ProjectTeaser[];
  vision: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    pillars: string[];
  };
  indiaVision: {
    title: string;
    paragraphs: string[];
  };
  constellation: {
    nodes: ConstellationNode[];
    connections: [string, string][];
  };
}
