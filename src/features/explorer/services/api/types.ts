import { IUserModel, IRepoModel } from "../store/types";

export interface ISearchUsersRequest {
    searchQuery: string;
  page: number;
}

export interface ISearchUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IUserModel[];
}

export interface ISearchUsersResult {
  pageCount: number;
  users: IUserModel[];
}

export interface IFetchUserReposRequest {
  login: string;
  page: number;
}

export type IFetchUserReposResponse = IRepoModel[];

export interface IFetchUserReposResult {
  pageCount: number;
  repos: IRepoModel[];
}
