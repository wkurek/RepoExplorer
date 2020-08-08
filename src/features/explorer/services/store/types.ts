import { IPagination } from "../../../../utils/types";
import { IFetchUserReposResult, ISearchUsersResult } from "../api/types";

export interface IUserModel {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface IUser {
  login: string;
  id: number;
  repos: number[];
  fetching: boolean;
  error: boolean;
  pagination: IPagination;
}

export interface IRepoModel {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Omit<IUserModel, "score">;
  html_url: string;
  description: string;
  fork: boolean;
  url: string | null;
  forks_url: string | null;
  keys_url: string | null;
  collaborators_url: string | null;
  teams_url: string | null;
  hooks_url: string | null;
  issue_events_url: string | null;
  events_url: string | null;
  assignees_url: string | null;
  branches_url: string | null;
  tags_url: string | null;
  blobs_url: string | null;
  git_tags_url: string | null;
  git_refs_url: string | null;
  trees_url: string | null;
  statuses_url: string | null;
  languages_url: string | null;
  stargazers_url: string | null;
  contributors_url: string | null;
  subscribers_url: string | null;
  subscription_url: string | null;
  commits_url: string | null;
  git_commits_url: string | null;
  comments_url: string | null;
  issue_comment_url: string | null;
  contents_url: string | null;
  compare_url: string | null;
  merges_url: string | null;
  archive_url: string | null;
  downloads_url: string | null;
  issues_url: string | null;
  pulls_url: string | null;
  milestones_url: string | null;
  notifications_url: string | null;
  labels_url: string | null;
  releases_url: string | null;
  deployments_url: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string | null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface IRepo {
  id: number;
  name: string;
  description: string;
  stargazersCount: number;
}

export interface IExplorerState {
  fetching: boolean;
  error: boolean;
  pagination: IPagination;
  users: {
    byId: Record<number, IUser>;
    allIds: number[];
  };
  repos: {
    byId: Record<number, IRepo>;
    allIds: number[];
  };
  searchQuery: string | null;
}

export interface IUpdateUserReposPageActionPayload {
  userId: number;
  page: number;
}

export interface IFetchUserReposSuccessActionPayload
  extends IFetchUserReposResult {
  userId: number;
}

export interface ISearchUsersSuccessActionPayload extends ISearchUsersResult {
  searchQuery: string | null;
}
