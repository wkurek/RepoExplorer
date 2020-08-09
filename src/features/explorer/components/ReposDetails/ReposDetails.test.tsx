import { render } from "@testing-library/react";
import React from "react";

import { IUserResult } from "../../services/store/types";

import ReposDetails from "./ReposDetails";

const LOGIN = "test_login";
const INIT_USER: IUserResult = {
  login: LOGIN,
  id: 12345,
  repos: [],
  error: false,
  fetching: false,
  pagination: {
    page: 1,
    pageCount: 1,
  },
};

describe("<ReposDetails />", () => {
  const updateUserReposPage = jest.fn();

  beforeEach(() => {
    updateUserReposPage.mockClear();
  });

  function renderReposDetails(user: Partial<IUserResult>) {
    return render(
      <ReposDetails
        updateUserReposPage={updateUserReposPage}
        user={{ ...INIT_USER, ...user }}
      />
    );
  }

  it("should render loading mask when fetching", async () => {
    const { queryByTestId } = renderReposDetails({ fetching: true });

    const loadingMask = queryByTestId("loading-mask");

    expect(loadingMask).not.toBeNull();
  });

  it("should render error alert when fetch failed", () => {
    const { queryByText } = renderReposDetails({
      error: true,
    });

    const alert = queryByText("Error while fetching user repositories!");

    expect(alert).not.toBeNull();
  });

  it("should render no results found alert when no repositories were found", () => {
    const { queryByText } = renderReposDetails({});

    const alert = queryByText("No repositories found for the user.");

    expect(alert).not.toBeNull();
  });
});
