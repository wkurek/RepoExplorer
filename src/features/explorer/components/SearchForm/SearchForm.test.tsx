import { fireEvent, render } from "@testing-library/react";
import React from "react";

import SearchForm from "./SearchForm";

describe("<SearchForm />", () => {
  const search = jest.fn();

  beforeEach(() => {
    search.mockClear();
  });

  function renderSearchForm(fetching: boolean) {
    return render(<SearchForm search={search} fetching={fetching} />);
  }

  it("should render disabled button when fetching", () => {
    const { queryByText } = renderSearchForm(true);

    const searchButton = queryByText("Search");

    expect(searchButton).toBeDisabled();
  });

  it("should invoke search method on button click", async () => {
    const QUERY = "test_test";

    const { findByText, findByPlaceholderText } = renderSearchForm(true);

    const queryInput = await findByPlaceholderText("Enter username");
    const searchButton = await findByText("Search");

    fireEvent.change(queryInput, { target: { value: QUERY } });

    fireEvent.submit(searchButton)

    expect(search).toBeCalledWith(QUERY);
  });
});
