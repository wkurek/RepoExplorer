import React from "react";

import { IUserResult } from "../../services/store/types";

interface IProps {
  users: IUserResult[];
  updateUsersPage: (page: number) => void;
  updateUserReposPage: (page: number, userId: number) => void;
}

const Users: React.FC<IProps> = ({
  users,
  updateUsersPage,
  updateUserReposPage,
}) => {
  const userRepos = users.map((user) => (
    <div key={user.id}>
      <span>{user.login}</span>
    </div>
  ));

  return <section>{userRepos}</section>;
};

export default Users;
