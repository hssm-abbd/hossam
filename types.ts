
export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
}
