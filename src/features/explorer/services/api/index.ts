import { gitHubInstance } from "../../../../utils/axios";
import {
  ISearchUsersResult,
  ISearchUsersRequest,
  ISearchUsersResponse,
  IFetchUserReposResult,
  IFetchUserReposResponse,
  IFetchUserReposRequest,
} from "./types";
import { getPageCount } from "../../../../utils/helpers";

export const searchUsers = async ({
  searchQuery,
  page,
}: ISearchUsersRequest): Promise<ISearchUsersResult> => {
  const { data, headers } = await gitHubInstance.get<ISearchUsersResponse>(
    `/search/users?q=${searchQuery}&page=${page}&per_page=5`
  );

  const pageCount = getPageCount(headers.link);

  return { users: data.items, pageCount };
};

export const fetchUserRepos = async ({
  login,
  page,
}: IFetchUserReposRequest): Promise<IFetchUserReposResult> => {
  const { data, headers } = await gitHubInstance.get<IFetchUserReposResponse>(
    `/users/${login}/repos?page=${page}&per_page=5`
  );

  const pageCount = getPageCount(headers.link);

  return { repos: data, pageCount };
};
