import reducer, { initialState } from "../reducer";
import * as actions from "../actions";
import {
  generateUserModel,
  generateExplorerStateWithUser,
  generateRepoModel,
} from "./utils";

const ID_A = 1234567;
const ID_B = 9876543;
const ID_C = 6789098;
const PAGES_COUNT = 10;
const PAGE = 5;
const SEARCH_QUERY = "search-query";

const stateWithUser = generateExplorerStateWithUser(ID_A);

describe("explorer reducer", () => {
  it("should handle SEARCH_USERS_START", () => {
    const nextState = reducer(initialState, actions.searchUsersStart());

    expect(nextState.fetching).toBe(true);
    expect(nextState.error).toBe(false);
  });

  it("should handle SEARCH_USERS_SUCCESS", () => {
    const userIds = [ID_A, ID_B];
    const users = userIds.map((id) => generateUserModel(id));

    const nextState = reducer(
      initialState,
      actions.searchUsersSuccess({
        users,
        pageCount: PAGES_COUNT,
        searchQuery: SEARCH_QUERY,
      })
    );

    expect(nextState.fetching).toBe(false);
    expect(nextState.users.allIds).toHaveLength(userIds.length);
    expect(nextState.users.byId).toHaveProperty(ID_A.toString());
    expect(nextState.users.byId).toHaveProperty(ID_B.toString());
    expect(nextState.pagination.pageCount).toBe(PAGES_COUNT);
  });

  it("should handle SEARCH_USERS_FAILURE", () => {
    const nextState = reducer(initialState, actions.searchUsersFailure());

    expect(nextState.fetching).toBe(false);
    expect(nextState.error).toBe(true);
  });

  it("should handle UPDATE_USERS_PAGE", () => {
    const nextState = reducer(initialState, actions.updateUsersPage(PAGE));

    expect(nextState.pagination.page).toBe(PAGE);
  });

  it("should handle FETCH_USER_REPOS_START", () => {
    const nextState = reducer(stateWithUser, actions.fetchUserReposStart(ID_A));

    expect(nextState.users.byId[ID_A].fetching).toBe(true);
    expect(nextState.users.byId[ID_A].error).toBe(false);
  });

  it("should handle FETCH_USER_REPOS_SUCCESS", () => {
    const repos = [
      generateRepoModel(ID_B, ID_A),
      generateRepoModel(ID_C, ID_A),
    ];
    const nextState = reducer(
      stateWithUser,
      actions.fetchUserReposSuccess({
        userId: ID_A,
        pageCount: PAGES_COUNT,
        repos,
      })
    );

    expect(nextState.users.byId[ID_A].fetching).toBe(false);
    expect(nextState.users.byId[ID_A].pagination.pageCount).toBe(PAGES_COUNT);
    expect(nextState.users.byId[ID_A].repos).toHaveLength(repos.length);

    expect(nextState.repos.allIds).toHaveLength(repos.length);
    expect(nextState.repos.byId).toHaveProperty(ID_B.toString());
    expect(nextState.repos.byId).toHaveProperty(ID_C.toString());
  });

  it("should handle FETCH_USER_REPOS_FAILURE", () => {
    const nextState = reducer(
      stateWithUser,
      actions.fetchUserReposFailure(ID_A)
    );

    expect(nextState.users.byId[ID_A].fetching).toBe(false);
    expect(nextState.users.byId[ID_A].error).toBe(true);
  });

  it("should handle UPDATE_USER_REPOS_PAGE", () => {
    const nextState = reducer(
      stateWithUser,
      actions.updateUserReposPage({ userId: ID_A, page: PAGE })
    );

    expect(nextState.users.byId[ID_A].pagination.page).toBe(PAGE);
  });
});
