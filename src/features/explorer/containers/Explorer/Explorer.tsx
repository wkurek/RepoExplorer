import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectExplorerState,
  selectUsersResults,
} from "../../services/store/selectors";
import operations from "../../services/store/operations";

import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";

const Explorer: React.FC = () => {
  const dispatch = useDispatch();

  const { fetching, error, searchQuery } = useSelector(selectExplorerState);
  const users = useSelector(selectUsersResults);

  const handleSearch = (query: string) =>
    dispatch(operations.searchUser(query));

  const handleUpdateUsersPage = (page: number) =>
    dispatch(operations.updateUsersPage(page));

  const handleUpdateUserReposPage = (page: number, userId: number) =>
    dispatch(operations.updateUserReposPage(page, userId));

  return (
    <section className="m-4">
      <SearchForm fetching={fetching} search={handleSearch} />
      <Results
        fetching={fetching}
        error={error}
        searchQuery={searchQuery}
        users={users}
        updateUsersPage={handleUpdateUsersPage}
        updateUserReposPage={handleUpdateUserReposPage}
      />
    </section>
  );
};

export default Explorer;
