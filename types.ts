export enum Category {
  SYS_ADMIN = 'System Integration',
  APP_DEV = 'Application Development',
  GENERAL = 'General & Career',
}

export interface CodeSnippet {
  language: string;
  code: string;
  description?: string;
  isBadExample?: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  category: Category;
  content: string;
  quote?: {
    text: string;
    author: string;
  };
  codeSnippets?: CodeSnippet[];
  tags: string[];
  links?: { text: string; url: string }[];
}