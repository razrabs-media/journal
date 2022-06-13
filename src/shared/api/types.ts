// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Upload scalar */
  Content: any;
  /** Date scalar type */
  Date: number;
  /** Uid custom scalar type */
  UID: string;
  /** Upload scalar */
  Upload: any;
};

export type AddPostToFrontPageInput = {
  componentUid: Scalars['String'];
  position: PositionInput;
  postUid: Scalars['String'];
};

export type AssignUserGroupInput = {
  userGroupsName: Array<Scalars['String']>;
  userUid: Scalars['String'];
};

export type CancelCommentDto = {
  token: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type CategoryItem = {
  __typename?: 'CategoryItem';
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};

export type CommentItem = {
  __typename?: 'CommentItem';
  author: ProfileItem;
  authorUid: Scalars['UID'];
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  post: SimplePost;
  postUid: Scalars['UID'];
  replyingToComment?: Maybe<CommentItem>;
  replyingToCommentUid?: Maybe<Scalars['UID']>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type CommentPagination = {
  __typename?: 'CommentPagination';
  count: Scalars['Int'];
  items: Array<CommentItem>;
  page: Scalars['Int'];
  pages: Scalars['Int'];
};

export type Component = {
  __typename?: 'Component';
  configuration: Configuration;
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type ComponentItem = {
  __typename?: 'ComponentItem';
  configuration: Configuration;
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type Configuration = {
  __typename?: 'Configuration';
  h: Scalars['Int'];
  type: Scalars['String'];
  w: Scalars['Int'];
};

export type ConfigurationInput = {
  h: Scalars['Int'];
  type: Scalars['String'];
  w: Scalars['Int'];
};

export type CreateCategoriesInput = {
  name: Scalars['String'];
};

export type CreateCommentDto = {
  __typename?: 'CreateCommentDto';
  token: Scalars['String'];
};

export type CreateCommentInput = {
  content: Scalars['String'];
  postUid: Scalars['String'];
  replyingToCommentUid?: InputMaybe<Scalars['String']>;
};

export type CreateComponentInput = {
  configuration: ConfigurationInput;
  name: Scalars['String'];
};

export type CreateDataSourceInput = {
  name: DataSourceName;
  source: Scalars['String'];
  type: DataSourceType;
};

export type CreateDraftInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateFeedInput = {
  name: Scalars['String'];
  status?: InputMaybe<FeedStatus>;
  tagUids: Array<Scalars['String']>;
};

export type CreateFrontPageInput = {
  title: Scalars['String'];
};

export type CreatePermissionInput = {
  name: PermissionName;
};

export type CreatePostInput = {
  contentLink: Scalars['String'];
};

export type CreatePrioritiesInput = {
  grade: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  login: Scalars['String'];
};

export type DataSource = {
  __typename?: 'DataSource';
  createdAt: Scalars['Date'];
  feeds?: Maybe<Array<Feed>>;
  name: DataSourceName;
  posts?: Maybe<Array<Post>>;
  source: Scalars['String'];
  type: DataSourceType;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type DataSourceItem = {
  __typename?: 'DataSourceItem';
  createdAt: Scalars['Date'];
  name: DataSourceName;
  source: Scalars['String'];
  type: DataSourceType;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export enum DataSourceName {
  Md = 'Md'
}

export enum DataSourceType {
  External = 'External',
  Internal = 'Internal'
}

export type DownloadLabelsDto = {
  projectName: Scalars['String'];
  repoName: Scalars['String'];
};

export type DownloadPostsDto = {
  branchName: Scalars['String'];
  projectName: Scalars['String'];
  repoName: Scalars['String'];
};

export type DraftItem = {
  __typename?: 'DraftItem';
  content?: Maybe<Scalars['Content']>;
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  title: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type DraftPagination = {
  __typename?: 'DraftPagination';
  count: Scalars['Int'];
  items: Array<DraftItem>;
  page: Scalars['Int'];
  pages: Scalars['Int'];
};

export type Feed = {
  __typename?: 'Feed';
  createdAt: Scalars['Date'];
  dataSources?: Maybe<Array<DataSource>>;
  name: Scalars['String'];
  status?: Maybe<FeedStatus>;
  tags?: Maybe<Array<TagItem>>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type FeedItem = {
  __typename?: 'FeedItem';
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  status?: Maybe<FeedStatus>;
  tags?: Maybe<Array<TagItem>>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export enum FeedStatus {
  Hidden = 'Hidden',
  Private = 'Private',
  Public = 'Public'
}

export type FilterCommentArgs = {
  contains?: InputMaybe<Scalars['String']>;
  postUid?: InputMaybe<Scalars['String']>;
};

export type FilterFeedsArgs = {
  feedStatuses?: InputMaybe<Array<FeedStatus>>;
};

export type FrontPage = {
  __typename?: 'FrontPage';
  content: Array<PostOnFrontPage>;
  createdAt: Scalars['Date'];
  endDate?: Maybe<Scalars['Date']>;
  publicationDate?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type FrontPageItem = {
  __typename?: 'FrontPageItem';
  createdAt: Scalars['Date'];
  endDate?: Maybe<Scalars['Date']>;
  publicationDate?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type FrontPagePagination = {
  __typename?: 'FrontPagePagination';
  count: Scalars['Int'];
  items: Array<FrontPageItem>;
  page: Scalars['Int'];
  pages: Scalars['Int'];
};

export enum FrontPageType {
  Archive = 'Archive',
  Draft = 'Draft'
}

export type GithubAuthor = {
  __typename?: 'GithubAuthor';
  createdAt: Scalars['Date'];
  posts?: Maybe<Array<Post>>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
  usernameUrl: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  assignGroupToUser: UserItem;
  cancelComment: ResponseStatus;
  changePassword: UserItem;
  changePermissions: UserGroupItem;
  changePostsOnFrontPage: Array<PostOnFrontPageItem>;
  createCategory: Category;
  createComment: CreateCommentDto;
  createComponent: Component;
  createDataSource: DataSource;
  createDraft: DraftItem;
  createFeed: FeedItem;
  createFrontPage: FrontPage;
  createPermission: PermissionItem;
  createPost: Post;
  createPriority: Priority;
  createUser: UserWithPasswordDto;
  createUserGroup: UserGroupItem;
  downloadLabels: Array<TagItem>;
  downloadPosts: Array<ResponseStatus>;
  publishFrontPage: FrontPage;
  refreshToken: TokensDto;
  registration: UserToken;
  removeCategory: Scalars['Int'];
  removeComment: Scalars['Int'];
  removeComponent: Scalars['Int'];
  removeDataSource: Scalars['Int'];
  removeDraft: Scalars['Int'];
  removeFeed: Scalars['Int'];
  removeFrontPage: Scalars['Int'];
  removeGithubAuthor: Scalars['Int'];
  removePermission: Scalars['Int'];
  removePost: Scalars['Int'];
  removePriority: Scalars['Int'];
  removeProfile: Scalars['Int'];
  removeUser: Scalars['Int'];
  removeUserGroup: Scalars['Int'];
  resetPasswordForUser: UserItem;
  setGithubPrivateToken: ResponseStatus;
  shareFrontPage: FrontPage;
  signIn: UserToken;
  signOut: ResponseStatus;
  unAssignGroupToUser: UserGroupItem;
  updateCategory: Scalars['Int'];
  updateComment: CommentItem;
  updateComponent: Component;
  updateDataSource: DataSource;
  updateDraft: DraftItem;
  updateFeed: FeedItem;
  updateFrontPage: FrontPage;
  updatePost: Post;
  updatePriority: Priority;
  updateProfile: ProfileItem;
  updateUser: User;
};


export type MutationAssignGroupToUserArgs = {
  data: AssignUserGroupInput;
};


export type MutationCancelCommentArgs = {
  data: CancelCommentDto;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationChangePermissionsArgs = {
  data: UserGroupInput;
};


export type MutationChangePostsOnFrontPageArgs = {
  data: Array<AddPostToFrontPageInput>;
  frontPageUid: Scalars['UID'];
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoriesInput;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationCreateComponentArgs = {
  data: CreateComponentInput;
};


export type MutationCreateDataSourceArgs = {
  data: CreateDataSourceInput;
};


export type MutationCreateDraftArgs = {
  content?: InputMaybe<Scalars['Upload']>;
  data?: InputMaybe<CreateDraftInput>;
};


export type MutationCreateFeedArgs = {
  data: CreateFeedInput;
};


export type MutationCreateFrontPageArgs = {
  data: CreateFrontPageInput;
};


export type MutationCreatePermissionArgs = {
  data: CreatePermissionInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationCreatePriorityArgs = {
  data: CreatePrioritiesInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationCreateUserGroupArgs = {
  data: UserGroupInput;
};


export type MutationDownloadLabelsArgs = {
  data: DownloadLabelsDto;
};


export type MutationDownloadPostsArgs = {
  data: DownloadPostsDto;
};


export type MutationPublishFrontPageArgs = {
  uid: Scalars['UID'];
};


export type MutationRegistrationArgs = {
  data: CreateUserInput;
  password: Scalars['String'];
};


export type MutationRemoveCategoryArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveCommentArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveComponentArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveDataSourceArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveDraftArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveFeedArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveFrontPageArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveGithubAuthorArgs = {
  uid: Scalars['UID'];
};


export type MutationRemovePermissionArgs = {
  uid: Scalars['UID'];
};


export type MutationRemovePostArgs = {
  uid: Scalars['UID'];
};


export type MutationRemovePriorityArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveProfileArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveUserArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveUserGroupArgs = {
  uid: Scalars['UID'];
};


export type MutationResetPasswordForUserArgs = {
  data: ResetPasswordInput;
};


export type MutationSetGithubPrivateTokenArgs = {
  data: SetGithubPrivateTokenDto;
};


export type MutationShareFrontPageArgs = {
  uid: Scalars['UID'];
};


export type MutationSignInArgs = {
  data: SignInInput;
};


export type MutationUnAssignGroupToUserArgs = {
  data: AssignUserGroupInput;
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoriesInput;
  uid: Scalars['UID'];
};


export type MutationUpdateCommentArgs = {
  data: UpdateCommentDto;
  uid: Scalars['UID'];
};


export type MutationUpdateComponentArgs = {
  data: UpdateComponentInput;
  uid: Scalars['UID'];
};


export type MutationUpdateDataSourceArgs = {
  data: UpdateDataSourceInput;
  uid: Scalars['UID'];
};


export type MutationUpdateDraftArgs = {
  content?: InputMaybe<Scalars['Upload']>;
  data: UpdateDraftInput;
  uid: Scalars['UID'];
};


export type MutationUpdateFeedArgs = {
  data: UpdateFeedInput;
  uid: Scalars['UID'];
};


export type MutationUpdateFrontPageArgs = {
  data: UpdateFrontPageInput;
  uid: Scalars['UID'];
};


export type MutationUpdatePostArgs = {
  uid: Scalars['UID'];
  updatePostDto: UpdatePostInput;
};


export type MutationUpdatePriorityArgs = {
  data: UpdatePrioritiesInput;
  uid: Scalars['UID'];
};


export type MutationUpdateProfileArgs = {
  avatar?: InputMaybe<Scalars['Upload']>;
  data: ProfileUpdateInput;
  uid: Scalars['UID'];
};


export type MutationUpdateUserArgs = {
  data: UserInput;
  uid: Scalars['UID'];
};

export type PermissionItem = {
  __typename?: 'PermissionItem';
  createdAt: Scalars['Date'];
  name: PermissionName;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export enum PermissionName {
  CreateComment = 'CreateComment',
  CreateFeed = 'CreateFeed',
  SuperAdministrator = 'SuperAdministrator'
}

export type Position = {
  __typename?: 'Position';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type PositionInput = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  frontPages: Array<FrontPageItem>;
  githubAuthor?: Maybe<GithubAuthor>;
  previewUrl?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<TagItem>>;
  title: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type PostOnFrontPage = {
  __typename?: 'PostOnFrontPage';
  component: ComponentItem;
  componentUid: Scalars['String'];
  createdAt: Scalars['Date'];
  frontPageUid: Scalars['String'];
  position: Position;
  post: SimplePost;
  postUid: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type PostOnFrontPageItem = {
  __typename?: 'PostOnFrontPageItem';
  componentUid: Scalars['String'];
  createdAt: Scalars['Date'];
  frontPageUid: Scalars['String'];
  position: Position;
  postUid: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type PostPagination = {
  __typename?: 'PostPagination';
  count: Scalars['Int'];
  items: Array<Post>;
  page: Scalars['Int'];
  pages: Scalars['Int'];
};

export type Priority = {
  __typename?: 'Priority';
  createdAt: Scalars['Date'];
  grade: Scalars['Int'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type PriorityItem = {
  __typename?: 'PriorityItem';
  createdAt: Scalars['Date'];
  grade: Scalars['Int'];
  name: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type Profile = {
  __typename?: 'Profile';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  publicName?: Maybe<Scalars['String']>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
  user: User;
};

export type ProfileItem = {
  __typename?: 'ProfileItem';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  publicName?: Maybe<Scalars['String']>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type ProfileUpdateInput = {
  publicName?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<CategoryItem>;
  category: Category;
  comments: CommentPagination;
  component: Component;
  components: Array<ComponentItem>;
  currentFrontPage: FrontPage;
  currentUser: User;
  dataSource: DataSource;
  dataSources: Array<DataSourceItem>;
  draft: DraftItem;
  drafts: DraftPagination;
  feed: FeedItem;
  feeds: Array<FeedItem>;
  frontPage: FrontPage;
  frontPages: FrontPagePagination;
  githubAuthor: GithubAuthor;
  githubAuthors: Array<GithubAuthor>;
  permissions: Array<PermissionItem>;
  post: Post;
  posts: PostPagination;
  postsByFeed: PostPagination;
  priorities: Array<PriorityItem>;
  priority: Priority;
  profile: Profile;
  profiles: Array<ProfileItem>;
  sharedFrontPage?: Maybe<FrontPage>;
  tags: Array<TagItem>;
  user: User;
  userGroups: Array<UserGroupItem>;
  users: Array<UserItem>;
};


export type QueryCategoryArgs = {
  uid: Scalars['UID'];
};


export type QueryCommentsArgs = {
  filter?: InputMaybe<FilterCommentArgs>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryComponentArgs = {
  uid: Scalars['UID'];
};


export type QueryDataSourceArgs = {
  uid: Scalars['UID'];
};


export type QueryDraftArgs = {
  uid: Scalars['UID'];
};


export type QueryDraftsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryFeedArgs = {
  uid: Scalars['UID'];
};


export type QueryFeedsArgs = {
  filter?: InputMaybe<FilterFeedsArgs>;
  sort?: InputMaybe<SortFeedsArgs>;
};


export type QueryFrontPageArgs = {
  uid: Scalars['UID'];
};


export type QueryFrontPagesArgs = {
  frontPageType?: InputMaybe<Array<FrontPageType>>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFrontPageArgs>;
};


export type QueryGithubAuthorArgs = {
  uid: Scalars['UID'];
};


export type QueryPostArgs = {
  uid: Scalars['UID'];
};


export type QueryPostsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryPostsByFeedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  uid: Scalars['UID'];
};


export type QueryPriorityArgs = {
  uid: Scalars['UID'];
};


export type QueryProfileArgs = {
  uid: Scalars['UID'];
};


export type QuerySharedFrontPageArgs = {
  uid: Scalars['UID'];
};


export type QueryUserArgs = {
  uid: Scalars['UID'];
};

export type ResetPasswordInput = {
  login: Scalars['String'];
};

export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  status: Scalars['Float'];
};

export type SetGithubPrivateTokenDto = {
  githubLogin: Scalars['String'];
  token: Scalars['String'];
};

export type SignInInput = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type SimplePost = {
  __typename?: 'SimplePost';
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type SortFeedsArgs = {
  byCreationDate?: InputMaybe<SortType>;
  byName?: InputMaybe<SortType>;
  byUpdateDate?: InputMaybe<SortType>;
};

export type SortFrontPageArgs = {
  byCreationDate?: InputMaybe<SortType>;
  byEndDate?: InputMaybe<SortType>;
  byPublicationDate?: InputMaybe<SortType>;
  byUpdateDate?: InputMaybe<SortType>;
};

export enum SortType {
  Asc = 'asc',
  Desc = 'desc'
}

export type TagItem = {
  __typename?: 'TagItem';
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  name: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type TokensDto = {
  __typename?: 'TokensDto';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UpdateCategoriesInput = {
  name: Scalars['String'];
};

export type UpdateCommentDto = {
  content: Scalars['String'];
};

export type UpdateComponentInput = {
  configuration: ConfigurationInput;
  name: Scalars['String'];
};

export type UpdateDataSourceInput = {
  name: DataSourceName;
  source: Scalars['String'];
  type: DataSourceType;
};

export type UpdateDraftInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateFeedInput = {
  name: Scalars['String'];
  tagUids: Array<Scalars['UID']>;
};

export type UpdateFrontPageInput = {
  title: Scalars['String'];
};

export type UpdatePostInput = {
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  tagUids?: InputMaybe<Array<Scalars['UID']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePrioritiesInput = {
  grade: Scalars['Int'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  isTransportPassword: Scalars['Boolean'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  profile?: Maybe<ProfileItem>;
  profileUid: Scalars['UID'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
  userGroups: Array<UserGroupItem>;
};

export type UserGroupInput = {
  name: Scalars['String'];
  permissions: Array<PermissionName>;
};

export type UserGroupItem = {
  __typename?: 'UserGroupItem';
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type UserInput = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type UserItem = {
  __typename?: 'UserItem';
  createdAt: Scalars['Date'];
  isTransportPassword: Scalars['Boolean'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  profile?: Maybe<ProfileItem>;
  profileUid: Scalars['UID'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type UserToken = {
  __typename?: 'UserToken';
  tokens: TokensDto;
  user: UserItem;
};

export type UserWithPasswordDto = {
  __typename?: 'UserWithPasswordDto';
  password: Scalars['String'];
  user: UserItem;
};
