import { IOwner } from './userContent.model';

export interface IRepositoryContents {
  total_count: number;
  incomplete_results: boolean;
  items: IItem[];
}

export interface IItem {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: IOwner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  created_at: string;
  watchers: number;
}
