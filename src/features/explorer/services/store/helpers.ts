import { IUserModel, IUser, IRepoModel, IRepo } from "./types";
import { initialPagination } from "./reducer";

export const generateUser = ({ id, login }: IUserModel): IUser => ({
  id,
  login,
  repos: [],
  fetching: false,
  error: false,
  pagination: initialPagination,
});

export const normalizeUsers = (
  users: IUserModel[]
): {
  byId: Record<number, IUser>;
  allIds: number[];
} =>
  users.reduce<{
    byId: Record<number, IUser>;
    allIds: number[];
  }>(
    (obj, userModel) => {
      const user = generateUser(userModel);

      obj.byId[userModel.id] = user;
      obj.allIds.push(userModel.id);

      return obj;
    },
    { byId: {}, allIds: [] }
  );

export const generateRepo = ({
  id,
  name,
  description,
  stargazers_count,
}: IRepoModel): IRepo => ({
  id,
  name,
  description,
  stargazersCount: stargazers_count,
});

export const normalizeRepos = (
  repos: IRepoModel[]
): {
  byId: Record<number, IRepo>;
  allIds: number[];
} =>
  repos.reduce<{
    byId: Record<number, IRepo>;
    allIds: number[];
  }>(
    (obj, repoModel) => {
      const user = generateRepo(repoModel);

      obj.byId[repoModel.id] = user;
      obj.allIds.push(repoModel.id);

      return obj;
    },
    { byId: {}, allIds: [] }
  );
