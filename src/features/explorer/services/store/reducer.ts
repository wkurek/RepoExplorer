import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import {
  IExplorerState,
  IFetchUserReposSuccessActionPayload,
  IUpdateUserReposPageActionPayload,
  ISearchUsersSuccessActionPayload,
} from "./types";
import { IPagination } from "../../../../utils/types";
import {
  searchUsersStart,
  searchUsersSuccess,
  searchUsersFailure,
  updateUsersPage,
  fetchUserReposStart,
  fetchUserReposSuccess,
  fetchUserReposFailure,
  updateUserReposPage,
} from "./actions";
import { normalizeUsers, normalizeRepos } from "./helpers";

const handleSearchUsersStart = (state: IExplorerState) => {
  state.error = false;
  state.fetching = true;
};

const handleSearchUsersSuccess = (
  state: IExplorerState,
  { payload }: PayloadAction<ISearchUsersSuccessActionPayload>
) => {
  state.fetching = false;
  state.pagination.pageCount = payload.pageCount;
  state.users = normalizeUsers(payload.users);
  state.searchQuery = payload.searchQuery;
};

const handleSearchUsersFailure = (state: IExplorerState) => {
  state.error = true;
  state.fetching = false;
};

const handleUpdateUsersPage = (
  state: IExplorerState,
  { payload }: PayloadAction<number>
) => {
  state.pagination.page = payload;
};

const handleFetchUserReposStart = (
  state: IExplorerState,
  { payload }: PayloadAction<number>
) => {
  state.users.byId[payload].error = false;
  state.users.byId[payload].fetching = true;
};

const handleFetchUserReposSuccess = (
  state: IExplorerState,
  { payload }: PayloadAction<IFetchUserReposSuccessActionPayload>
) => {
  const normalizedRepos = normalizeRepos(payload.repos);

  state.users.byId[payload.userId].fetching = false;
  state.users.byId[payload.userId].pagination.pageCount = payload.pageCount;
  state.users.byId[payload.userId].repos = normalizedRepos.allIds;

  state.repos.byId = { ...state.repos.byId, ...normalizedRepos.byId };
  state.repos.allIds = [ ...state.repos.allIds, ...normalizedRepos.allIds ];
};

const handleFetchUserReposFailure = (
  state: IExplorerState,
  { payload }: PayloadAction<number>
) => {
  state.users.byId[payload].error = true;
  state.users.byId[payload].fetching = false;
};

const handleUpdateUserReposPage = (
  state: IExplorerState,
  { payload }: PayloadAction<IUpdateUserReposPageActionPayload>
) => {
  state.users.byId[payload.userId].pagination.page = payload.page;
};

export const initialPagination: IPagination = {
  page: 1,
  pageCount: 1,
};

export const initialState: IExplorerState = {
  fetching: false,
  error: false,
  pagination: initialPagination,
  users: {
    byId: {},
    allIds: [],
  },
  repos: {
    byId: {},
    allIds: [],
  },
  searchQuery: null,
};

const reducer = createReducer(initialState, {
  [searchUsersStart.type]: handleSearchUsersStart,
  [searchUsersSuccess.type]: handleSearchUsersSuccess,
  [searchUsersFailure.type]: handleSearchUsersFailure,
  [updateUsersPage.type]: handleUpdateUsersPage,
  [fetchUserReposStart.type]: handleFetchUserReposStart,
  [fetchUserReposSuccess.type]: handleFetchUserReposSuccess,
  [fetchUserReposFailure.type]: handleFetchUserReposFailure,
  [updateUserReposPage.type]: handleUpdateUserReposPage,
});

export default reducer;
