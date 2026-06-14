/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: "Web API" | "Full Stack" | "Desktop App" | "System Utility";
  role: string;
  period: string;
  description: string;
  problemSolved: string;
  architectureChoices: string[];
  keyFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  employer: string;
  location: string;
  period: string;
  description: string[];
  keyFocus: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeAccent: string;
  logo: string;
  skillsAcquired: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: { name: string; level: number; info?: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}
