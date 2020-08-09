import React from "react";
import { Pagination as BsPagination } from "react-bootstrap";

import { IPagination } from "../../utils/types";

import classes from "./Pagination.module.css";

interface IProps {
  pagination: IPagination;
  onPageChange: (page: number) => void;
  fetching: boolean;
  size?: "sm" | "lg";
}

const Pagination: React.FC<IProps> = ({
  pagination: { page, pageCount },
  onPageChange,
  fetching,
  size,
}) => {
  if (pageCount === 1) {
    return null;
  }

  const prevDisabled = fetching || page === 1;
  const nextDisabled = fetching || page === pageCount;

  const handleFirstClick = () => onPageChange(1);
  const handlePrevClick = () => onPageChange(page - 1);
  const handleNextClick = () => onPageChange(page + 1);
  const handleLastClick = () => onPageChange(pageCount);

  return (
    <BsPagination size={size} className={classes.pagination}>
      <BsPagination.First
        disabled={prevDisabled}
        onClick={handleFirstClick}
        data-testid="first-button"
      />
      <BsPagination.Prev
        disabled={prevDisabled}
        onClick={handlePrevClick}
        data-testid="prev-button"
      />
      <BsPagination.Item active>
        {page}/{pageCount}
      </BsPagination.Item>
      <BsPagination.Next
        disabled={nextDisabled}
        onClick={handleNextClick}
        data-testid="next-button"
      />
      <BsPagination.Last
        disabled={nextDisabled}
        onClick={handleLastClick}
        data-testid="last-button"
      />
    </BsPagination>
  );
};

export default Pagination;
