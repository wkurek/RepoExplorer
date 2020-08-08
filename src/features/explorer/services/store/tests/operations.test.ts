import moxios from "moxios";

import { gitHubInstance } from "../../../../../utils/axios";
import { mockStore } from "../../../../../utils/tests";

import { RootState } from "../../../../../store/types";
import * as actions from "../actions";
import operations from "../operations";
import { IFetchUserReposResponse, ISearchUsersResponse } from "../../api/types";
import {
  generateExplorerStateWithUser,
  generateRepoModel,
  generateSearchUserResponse,
} from "./helpers";

const USER_ID_A = 123456;
const USER_ID_B = 777777;
const USER_ID_C = 888888;
const REPO_ID = 789012;
const PAGE = 2;
const SEARCH_QUERY = "test";

const USER_IDS = [USER_ID_A, USER_ID_B, USER_ID_C];

const SEARCH_USERS_RESPONSE: ISearchUsersResponse = generateSearchUserResponse(
  USER_IDS
);

const initialState: Pick<RootState, "explorer"> = {
  explorer: generateExplorerStateWithUser(USER_ID_A),
};

describe("explorer operations", () => {
  let store = mockStore(initialState);

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install(gitHubInstance);
  });

  afterEach(() => {
    moxios.uninstall(gitHubInstance);
    store.clearActions();
  });

  describe("fetchUserRepos", () => {
    it("should create FETCH_USER_REPOS_SUCCESS when successfully fetched user repos", async () => {
      const response: IFetchUserReposResponse = [
        generateRepoModel(REPO_ID, USER_ID_A),
      ];

      moxios.wait(() => {
        moxios.requests.mostRecent().respondWith({
          response,
          headers: {},
        });
      });

      const expectedActions = [
        actions.fetchUserReposStart(USER_ID_A),
        actions.fetchUserReposSuccess({
          userId: USER_ID_A,
          pageCount: 1,
          repos: response,
        }),
      ];

      await store.dispatch(operations.fetchUserRepos(USER_ID_A));

      expect(store.getActions()).toEqual(expectedActions);
    });

    it("should create FETCH_USER_REPOS_FAILURE when failed to fetch user repos", async () => {
      moxios.wait(() => {
        moxios.requests.mostRecent().respondWith({
          status: 400,
        });
      });

      const expectedActions = [
        actions.fetchUserReposStart(USER_ID_A),
        actions.fetchUserReposFailure(USER_ID_A),
      ];

      await store.dispatch(operations.fetchUserRepos(USER_ID_A));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateUserReposPage", () => {
    it("should create UPDATE_USER_REPOS_PAGE", async () => {
      const response: IFetchUserReposResponse = [
        generateRepoModel(REPO_ID, USER_ID_A),
      ];

      moxios.wait(() => {
        moxios.requests.mostRecent().respondWith({
          response,
          headers: {},
        });
      });

      const expectedActions = [
        actions.updateUserReposPage({ userId: USER_ID_A, page: PAGE }),
        actions.fetchUserReposStart(USER_ID_A),
        actions.fetchUserReposSuccess({
          userId: USER_ID_A,
          pageCount: 1,
          repos: response,
        }),
      ];

      await store.dispatch(operations.updateUserReposPage(PAGE, USER_ID_A));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("searchUser", () => {
    beforeEach(() => {
      operations.fetchUserRepos = jest.fn((id) => (dispatch) =>
        Promise.resolve(dispatch(actions.fetchUserReposStart(id)))
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should create SEARCH_USERS_SUCCESS when successfully fetched users", async () => {
      moxios.wait(() => {
        moxios.requests.mostRecent().respondWith({
          response: SEARCH_USERS_RESPONSE,
          headers: {},
        });
      });

      const expectedActions = [
        actions.searchUsersStart(),
        actions.updateUsersPage(1),
        actions.searchUsersSuccess({
          pageCount: 1,
          users: SEARCH_USERS_RESPONSE.items,
          searchQuery: SEARCH_QUERY,
        }),
        actions.fetchUserReposStart(USER_ID_A),
        actions.fetchUserReposStart(USER_ID_B),
        actions.fetchUserReposStart(USER_ID_C),
      ];

      await store.dispatch(operations.searchUser(SEARCH_QUERY));

      expect(store.getActions()).toEqual(expectedActions);
    });

    it("should create SEARCH_USERS_FAILURE when failed to fetch users", async () => {
      moxios.wait(() => {
        moxios.requests.mostRecent().respondWith({
          status: 400,
        });
      });

      const expectedActions = [
        actions.searchUsersStart(),
        actions.updateUsersPage(1),
        actions.searchUsersFailure(),
      ];

      await store.dispatch(operations.searchUser(SEARCH_QUERY));

      expect(store.getActions()).toEqual(expectedActions);
    });

    it("should not create UPDATE_USERS_PAGE when searching users with no page reset", async () => {
      moxios.wait(() => {
        moxios.requests.mostRecent().respondWith({
          response: SEARCH_USERS_RESPONSE,
          headers: {},
        });
      });

      const expectedActions = [
        actions.searchUsersStart(),
        actions.searchUsersSuccess({
          pageCount: 1,
          users: SEARCH_USERS_RESPONSE.items,
          searchQuery: SEARCH_QUERY,
        }),
        actions.fetchUserReposStart(USER_ID_A),
        actions.fetchUserReposStart(USER_ID_B),
        actions.fetchUserReposStart(USER_ID_C),
      ];

      await store.dispatch(operations.searchUser(SEARCH_QUERY, false));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateUsersPage", () => {
    it("should create UPDATE_USERS_PAGE once", async () => {
      moxios.wait(() => {
        moxios.requests.mostRecent().respondWith({
          response: SEARCH_USERS_RESPONSE,
          headers: {},
        });
      });

      const expectedActions = [
        actions.updateUsersPage(PAGE),
        actions.searchUsersStart(),
        actions.searchUsersSuccess({
          pageCount: 1,
          users: SEARCH_USERS_RESPONSE.items,
          searchQuery: null,
        }),
        actions.fetchUserReposStart(USER_ID_A),
        actions.fetchUserReposStart(USER_ID_B),
        actions.fetchUserReposStart(USER_ID_C),
      ];

      await store.dispatch(operations.updateUsersPage(PAGE));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
