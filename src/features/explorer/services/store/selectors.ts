import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../store/types";
import { IUserResult } from "./types";

export const selectExplorerState = (state: RootState) => state.explorer;

export const selectUsersMap = createSelector(
  selectExplorerState,
  (state) => state.users.byId
);

export const selectUsersPagination = createSelector(
  selectExplorerState,
  (state) => state.pagination
);

export const selectSearchQuery = createSelector(
  selectExplorerState,
  (state) => state.searchQuery
);

export const selectUsersResults = createSelector(selectExplorerState, (state) =>
  state.users.allIds.map<IUserResult>((userId) => {
    const user = state.users.byId[userId];
    const userRepos = user.repos.map((repoId) => state.repos.byId[repoId]);

    return { ...user, repos: userRepos };
  })
);
