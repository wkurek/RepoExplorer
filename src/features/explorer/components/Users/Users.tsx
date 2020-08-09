import React from "react";

import { IUserResult } from "../../services/store/types";
import { IPagination } from "../../../../utils/types";

import UserRepos from "../UserRepos";
import Pagination from "../../../../shared/Pagination";

interface IProps {
  users: IUserResult[];
  pagination: IPagination;
  fetching: boolean;
  updateUsersPage: (page: number) => void;
  updateUserReposPage: (page: number, userId: number) => void;
}

const Users: React.FC<IProps> = ({
  users,
  pagination,
  fetching,
  updateUsersPage,
  updateUserReposPage,
}) => {
  const usersRepos = users.map((user) => (
    <UserRepos
      key={user.id}
      user={user}
      updateUserReposPage={updateUserReposPage}
    />
  ));

  return (
    <>
      {usersRepos}
      <Pagination
        pagination={pagination}
        fetching={fetching}
        onPageChange={updateUsersPage}
      />
    </>
  );
};

export default Users;
