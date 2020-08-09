import { IRepoModel, IUser, IExplorerState, IUserModel } from "../types";
import {
  initialState as explorerInitialState,
  initialPagination,
} from "../reducer";
import { ISearchUsersResponse } from "../../api/types";

export function generateRepoModel(repoId: number, userId: number): IRepoModel {
  return {
    id: repoId,
    node_id: "MDEwOlJlcG9zaXRvcnkyMjczNDU0MTI=",
    name: "PROJECT_NAME",
    full_name: "USERNAME/PROJECT_NAME",
    private: false,
    owner: {
      login: "USERNAME",
      id: userId,
      node_id: "MDQ6VXNlcjI2MTUwNTkx",
      avatar_url: "https://avatars2.githubusercontent.com/u/26150591?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/USERNAME",
      html_url: "https://github.com/USERNAME",
      followers_url: "https://api.github.com/users/USERNAME/followers",
      following_url:
        "https://api.github.com/users/USERNAME/following{/other_user}",
      gists_url: "https://api.github.com/users/USERNAME/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/USERNAME/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/USERNAME/subscriptions",
      organizations_url: "https://api.github.com/users/USERNAME/orgs",
      repos_url: "https://api.github.com/users/USERNAME/repos",
      events_url: "https://api.github.com/users/USERNAME/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/USERNAME/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/USERNAME/PROJECT_NAME",
    description: "Genetic algorithm for PROJECT_NAME",
    fork: false,
    url: "https://api.github.com/repos/USERNAME/PROJECT_NAME",
    forks_url: "https://api.github.com/repos/USERNAME/PROJECT_NAME/forks",
    keys_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/USERNAME/PROJECT_NAME/teams",
    hooks_url: "https://api.github.com/repos/USERNAME/PROJECT_NAME/hooks",
    issue_events_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/issues/events{/number}",
    events_url: "https://api.github.com/repos/USERNAME/PROJECT_NAME/events",
    assignees_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/branches{/branch}",
    tags_url: "https://api.github.com/repos/USERNAME/PROJECT_NAME/tags",
    blobs_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/languages",
    stargazers_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/stargazers",
    contributors_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/contributors",
    subscribers_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/subscribers",
    subscription_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/subscription",
    commits_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/USERNAME/PROJECT_NAME/merges",
    archive_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/downloads",
    issues_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/labels{/name}",
    releases_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/USERNAME/PROJECT_NAME/deployments",
    created_at: "2019-12-11T11:04:03Z",
    updated_at: "2019-12-13T19:44:36Z",
    pushed_at: "2019-12-13T19:44:34Z",
    git_url: "git://github.com/USERNAME/PROJECT_NAME.git",
    ssh_url: "git@github.com:USERNAME/PROJECT_NAME.git",
    clone_url: "https://github.com/USERNAME/PROJECT_NAME.git",
    svn_url: "https://github.com/USERNAME/PROJECT_NAME",
    homepage: null,
    size: 9,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  };
}

export function generateUser(userId: number): IUser {
  return {
    id: userId,
    login: "abc",
    fetching: false,
    error: false,
    repos: [],
    pagination: initialPagination,
  };
}

export function generateExplorerStateWithUser(userId: number): IExplorerState {
  return {
    ...explorerInitialState,
    users: {
      allIds: [userId],
      byId: {
        [userId]: generateUser(userId),
      },
    },
  };
}

export function generateUserModel(userId: number): IUserModel {
  return {
    login: "test",
    id: userId,
    node_id: "MDQ6VXNlcjM4MzMxNg==",
    avatar_url: "https://avatars3.githubusercontent.com/u/383316?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/test",
    html_url: "https://github.com/test",
    followers_url: "https://api.github.com/users/test/followers",
    following_url: "https://api.github.com/users/test/following{/other_user}",
    gists_url: "https://api.github.com/users/test/gists{/gist_id}",
    starred_url: "https://api.github.com/users/test/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/test/subscriptions",
    organizations_url: "https://api.github.com/users/test/orgs",
    repos_url: "https://api.github.com/users/test/repos",
    events_url: "https://api.github.com/users/test/events{/privacy}",
    received_events_url: "https://api.github.com/users/test/received_events",
    type: "User",
    site_admin: false,
    score: 1,
  };
}

export function generateSearchUserResponse(
  userIds: number[]
): ISearchUsersResponse {
  const items = userIds.map((id) => generateUserModel(id));

  return {
    items: items,
    total_count: items.length,
    incomplete_results: false,
  };
}
