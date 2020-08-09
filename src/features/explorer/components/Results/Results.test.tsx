import { render } from "@testing-library/react";
import React from "react";

import Results from "./Results";

const SEARCH_QUERY = "test_test_test";

describe("<Results />", () => {
  const updateUsersPage = jest.fn();
  const updateUserReposPage = jest.fn();

  beforeEach(() => {
    updateUsersPage.mockClear();
    updateUserReposPage.mockClear();
  });

  function renderResults({
    searchQuery,
    fetching,
    error,
  }: {
    searchQuery: string | null;
    fetching: boolean;
    error: boolean;
  }) {
    return render(
      <Results
        searchQuery={searchQuery}
        fetching={fetching}
        error={error}
        users={[]}
        pagination={{ page: 1, pageCount: 1 }}
        updateUsersPage={updateUsersPage}
        updateUserReposPage={updateUserReposPage}
      />
    );
  }

  it("should render loading mask when fetching", () => {
    const { queryByTestId } = renderResults({
      searchQuery: null,
      fetching: true,
      error: false,
    });

    const loadingMask = queryByTestId("loading-mask");

    expect(loadingMask).not.toBeNull();
  });

  it("should render info alert when no search has been made", () => {
    const { queryByText } = renderResults({
      searchQuery: null,
      fetching: false,
      error: false,
    });

    const alert = queryByText(
      "Use browser to search for users and their repositories."
    );

    expect(alert).not.toBeNull();
  });

  it("should render error alert when search failed", () => {
    const { queryByText } = renderResults({
      searchQuery: null,
      fetching: false,
      error: true,
    });

    const alert = queryByText("Error while searching for users!");

    expect(alert).not.toBeNull();
  });

  it("should render no results found alert when no users were found", () => {
    const { queryByText } = renderResults({
      searchQuery: SEARCH_QUERY,
      fetching: false,
      error: false,
    });

    const alert = queryByText("No results found!");

    expect(alert).not.toBeNull();
  });

  it("should render search criteria info when search was made", () => {
    const { queryByText } = renderResults({
      searchQuery: SEARCH_QUERY,
      fetching: false,
      error: false,
    });

    const info = queryByText(`Showing users for "${SEARCH_QUERY}"`);

    expect(info).not.toBeNull();
  });
});
