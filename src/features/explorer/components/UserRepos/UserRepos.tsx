import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { IUserResult } from "../../services/store/types";

import ReposDetails from "../ReposDetails";

import classes from "./UserRepos.module.css";

interface IProps {
  user: IUserResult;
  updateUserReposPage: (page: number, userId: number) => void;
}

const UserRepos: React.FC<IProps> = ({ user, updateUserReposPage }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandToggle = () => setExpanded((value) => !value);

  const reposDetails = expanded && (
    <ReposDetails user={user} updateUserReposPage={updateUserReposPage} />
  );

  const icon = expanded ? (
    <FontAwesomeIcon icon={faChevronUp} />
  ) : (
    <FontAwesomeIcon icon={faChevronDown} />
  );

  return (
    <>
      <div className={classes.user} onClick={handleExpandToggle}>
        <span>{user.login}</span>
        <span>{icon}</span>
      </div>
      {reposDetails}
    </>
  );
};

export default UserRepos;
