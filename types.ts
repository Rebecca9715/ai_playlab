export enum ToolCategory {
  EFFICIENCY = 'Efficiency',
  CREATIVITY = 'Creativity',
  NARRATIVE = 'Narrative',
  CUSTOM = 'Custom',
}

export interface Tool {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  category: ToolCategory;
  price: string;
  rating: number;
  imageUrl: string;
  isNew?: boolean;
}

export interface Experiment {
  id: string;
  title: string;
  description: string;
  status: 'Prototype' | 'Alpha' | 'Archived';
  techStack: string[];
}

export interface RequestItem {
  id: string;
  content: string;
  votes: number;
  status: 'Open' | 'In Progress' | 'Completed';
  author: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tag: string;
  readTime: string;
}