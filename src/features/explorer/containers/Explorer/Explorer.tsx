import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectExplorerState } from "../../services/store/selectors";
import operations from "../../services/store/operations";

import SearchForm from "../../components/SearchForm";

const Explorer: React.FC = () => {
  const dispatch = useDispatch();

  const explorerState = useSelector(selectExplorerState);

  const handleSearch = (query: string) =>
    dispatch(operations.searchUser(query));

  return (
    <section className="m-4">
      <SearchForm fetching={explorerState.fetching} search={handleSearch} />
    </section>
  );
};

export default Explorer;
