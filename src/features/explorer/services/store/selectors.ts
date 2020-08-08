import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../store/types";

export const selectExplorerState = (state: RootState) => state.explorer;

export const selectUsers = createSelector(selectExplorerState, (state) =>
  state.users.allIds.map((id) => state.users.byId[id])
);

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
