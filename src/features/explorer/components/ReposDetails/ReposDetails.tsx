import React from "react";
import { Alert } from "react-bootstrap";

import { IUserResult } from "../../services/store/types";

import Repo from "../Repo";
import LoadingMask from "../../../../shared/LoadingMask";
import Pagination from "../../../../shared/Pagination";

import classes from "./ReposDetails.module.css";

interface IProps {
  user: IUserResult;
  updateUserReposPage: (page: number, userId: number) => void;
}

const ReposDetails: React.FC<IProps> = ({ user, updateUserReposPage }) => {
  const handleReposPageChange = (page: number) =>
    updateUserReposPage(page, user.id);

  const repos =
    !user.error && user.repos.map((repo) => <Repo key={repo.id} repo={repo} />);

  const loadingMask = user.fetching && <LoadingMask />;

  const errorAlert = user.error && (
    <Alert variant="danger">Error while fetching user repositories!</Alert>
  );

  const showNoResultsAlert = !user.error && user.repos.length === 0;
  const noResultAlert = showNoResultsAlert && (
    <Alert variant="info">No repositories found for the user.</Alert>
  );

  return (
    <div className={classes.wrapper}>
      {loadingMask}
      {errorAlert}
      {noResultAlert}
      {repos}
      <Pagination
        pagination={user.pagination}
        onPageChange={handleReposPageChange}
        fetching={user.fetching}
        size="sm"
      />
    </div>
  );
};

export default ReposDetails;
