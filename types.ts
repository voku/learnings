export enum Category {
  SYS_ADMIN = 'System Integration',
  APP_DEV = 'Application Development',
  GENERAL = 'General & Career',
  AGENTIC_CODING = 'Agentic Coding',
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
  /** Lifecycle state of the lesson. Missing status is treated as 'active'. */
  status?: 'active' | 'evolved' | 'deprecated';
  /** Which engineering era the lesson was written for. */
  era?: 'pre-agent' | 'agent-era';
  /** IDs of newer lessons that refine or replace this one. */
  supersededBy?: string[];
  /** Short explanation of how the lesson's framing has changed. */
  note?: string;
}