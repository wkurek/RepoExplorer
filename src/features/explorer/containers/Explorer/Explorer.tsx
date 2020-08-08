import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSearchQuery } from "../../services/store/selectors";
import operations from "../../services/store/operations";

const Explorer: React.FC = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector(selectSearchQuery);

  useEffect(() => {
    dispatch(operations.searchUser("wkurek"));
  }, [dispatch]);

  return <p>Explorer {searchQuery}</p>;
};

export default Explorer;
