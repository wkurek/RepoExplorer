import { AppThunk } from "../../../../store/types";

import * as api from "../api";
import * as actions from "./actions";
import {
  selectUsersMap,
  selectUsersPagination,
  selectSearchQuery,
} from "./selectors";

const fetchUserRepos = (userId: number): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch(actions.fetchUserReposStart(userId));

  try {
    const users = selectUsersMap(getState());
    const {
      login,
      pagination: { page },
    } = users[userId];

    const result = await api.fetchUserRepos({ login, page });
    dispatch(actions.fetchUserReposSuccess({ ...result, userId }));
  } catch {
    dispatch(actions.fetchUserReposFailure(userId));
  }
};

const searchUser = (
  searchQuery: string,
  resetPagination = true
): AppThunk => async (dispatch, getState) => {
  dispatch(actions.searchUsersStart());

  if (resetPagination) {
    dispatch(actions.updateUsersPage(1));
  }

  try {
    const { page } = selectUsersPagination(getState());

    const result = await api.searchUsers({ searchQuery, page });
    dispatch(actions.searchUsersSuccess({ ...result, searchQuery }));

    for (const user of result.users) {
      await dispatch(exportFunctions.fetchUserRepos(user.id));
    }
  } catch {
    dispatch(actions.searchUsersFailure());
  }
};

const updateUsersPage = (page: number): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch(actions.updateUsersPage(page));
  const query = selectSearchQuery(getState());

  await dispatch(searchUser(query!, false));
};

const updateUserReposPage = (page: number, userId: number): AppThunk => async (
  dispatch
) => {
  dispatch(actions.updateUserReposPage({ page, userId }));
  await dispatch(fetchUserRepos(userId));
};

const exportFunctions = {
  fetchUserRepos,
  searchUser,
  updateUsersPage,
  updateUserReposPage,
};

export default exportFunctions;
