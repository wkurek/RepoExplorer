import React from "react";
import { Alert } from "react-bootstrap";

import { IUserResult } from "../../services/store/types";

import SearchQueryInfo from "../SearchQueryInfo";
import Users from "../Users";
import LoadingMask from "../../../../shared/LoadingMask";

interface IProps {
  searchQuery: string | null;
  fetching: boolean;
  error: boolean;
  users: IUserResult[];
  updateUsersPage: (page: number) => void;
  updateUserReposPage: (page: number, userId: number) => void;
}

const Results: React.FC<IProps> = ({
  searchQuery,
  fetching,
  error,
  users,
  updateUsersPage,
  updateUserReposPage,
}) => {
  const showSearchQueryInfo = !error && searchQuery !== null;
  const searchQueryInfo = showSearchQueryInfo && (
    <SearchQueryInfo searchQuery={searchQuery!} />
  );

  const errorAlert = error && <Alert variant="danger">Error while searching for users!</Alert>;

  const loadingMask = fetching && <LoadingMask />;

  const showNoResultsAlert =
    !error && users.length === 0 && searchQuery !== null;
  const noResultAlert = showNoResultsAlert && (
    <Alert variant="info">No results found!</Alert>
  );

  const showSearchAlert = !error && searchQuery === null;
  const searchAlert = showSearchAlert && (
    <Alert variant="info">Use browser to search for users and their repos.</Alert>
  );

  const showUsers = !error && users.length > 0;
  const usersRows = showUsers && (
    <Users
      users={users}
      updateUsersPage={updateUsersPage}
      updateUserReposPage={updateUserReposPage}
    />
  );

  return (
    <section style={{ position: "relative" }} className="mt-4">
      {searchQueryInfo}
      {errorAlert}
      {loadingMask}
      {noResultAlert}
      {searchAlert}
      {usersRows}
    </section>
  );
};

export default Results;
