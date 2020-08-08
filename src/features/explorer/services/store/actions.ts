import { createAction } from "@reduxjs/toolkit";

import {
  IUpdateUserReposPageActionPayload,
  IFetchUserReposSuccessActionPayload,
  ISearchUsersSuccessActionPayload,
} from "./types";

export const searchUsersStart = createAction("SEARCH_USERS_START");
export const searchUsersSuccess = createAction<
  ISearchUsersSuccessActionPayload
>("SEARCH_USERS_SUCCESS");
export const searchUsersFailure = createAction("SEARCH_USERS_FAILURE");

export const updateUsersPage = createAction<number>("UPDATE_USERS_PAGE");

export const fetchUserReposStart = createAction<number>(
  "FETCH_USER_REPOS_START"
);
export const fetchUserReposSuccess = createAction<
  IFetchUserReposSuccessActionPayload
>("FETCH_USER_REPOS_SUCCESS");
export const fetchUserReposFailure = createAction<number>(
  "FETCH_USER_REPOS_FAILURE"
);

export const updateUserReposPage = createAction<
  IUpdateUserReposPageActionPayload
>("UPDATE_USER_REPOS_PAGE");
