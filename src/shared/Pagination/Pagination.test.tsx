import { render, fireEvent } from "@testing-library/react";
import React from "react";

import { IPagination } from "../../utils/types";

import Pagination from "./Pagination";

const PAGE = 5;
const PAGE_COUNT = 200;

describe("<Pagination />", () => {
  const onPageChange = jest.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  function renderPagination(
    pagination: IPagination,
    fetching: boolean = false
  ) {
    return render(
      <Pagination
        pagination={pagination}
        fetching={fetching}
        onPageChange={onPageChange}
      />
    );
  }

  it("should render null when only one page", () => {
    const { container } = renderPagination({ page: 1, pageCount: 1 });

    expect(container.firstChild).toBeNull();
  });

  it("should render disabled buttons when fetching", () => {
    const { queryByTestId } = renderPagination(
      { page: PAGE, pageCount: PAGE_COUNT },
      true
    );

    const firstButton = queryByTestId("first-button");
    const prevButton = queryByTestId("prev-button");
    const nextButton = queryByTestId("next-button");
    const lastButton = queryByTestId("last-button");

    expect(firstButton).toHaveAttribute("disabled");
    expect(prevButton).toHaveAttribute("disabled");
    expect(nextButton).toHaveAttribute("disabled");
    expect(lastButton).toHaveAttribute("disabled");
  });

  it("should render pagination state", () => {
    const { queryByText } = renderPagination({
      page: PAGE,
      pageCount: PAGE_COUNT,
    });

    const paginationState = queryByText(`${PAGE}/${PAGE_COUNT}`);

    expect(paginationState).not.toBeNull();
  });

  it("should invoke onPageChange on button click", async () => {
    const { findByTestId } = renderPagination({
      page: PAGE,
      pageCount: PAGE_COUNT,
    });

    const nextButton = await findByTestId("next-button");

    fireEvent.click(nextButton);

    expect(onPageChange).toBeCalledWith(PAGE + 1);
  });
});
