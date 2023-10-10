// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Upload scalar */
  Content: { input: any; output: any; }
  /** Date scalar type */
  Date: { input: string; output: string; }
  /** Uid custom scalar type */
  UID: { input: string; output: string; }
  /** Upload scalar */
  Upload: { input: any; output: any; }
};

export type AddPostToFrontPageInput = {
  componentUid: Scalars['UID']['input'];
  position: PositionInput;
  postUid: Scalars['String']['input'];
};

export type AssignUserGroupInput = {
  userGroupUid: Scalars['UID']['input'];
  userUid: Scalars['UID']['input'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['Date']['output'];
  name: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type CategoryItem = {
  __typename?: 'CategoryItem';
  createdAt: Scalars['Date']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CommentItem = {
  __typename?: 'CommentItem';
  author: ProfileItem;
  authorUid: Scalars['UID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  postUid: Scalars['UID']['output'];
  replyingToComment?: Maybe<CommentItem>;
  replyingToCommentUid?: Maybe<Scalars['UID']['output']>;
  status: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type CommentPagination = {
  __typename?: 'CommentPagination';
  count: Scalars['Int']['output'];
  items: Array<CommentItem>;
  page: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
};

export type Component = {
  __typename?: 'Component';
  configuration: Configuration;
  createdAt: Scalars['Date']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ComponentItem = {
  __typename?: 'ComponentItem';
  configuration: Configuration;
  createdAt: Scalars['Date']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Configuration = {
  __typename?: 'Configuration';
  h: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  w: Scalars['Int']['output'];
};

export type ConfigurationInput = {
  h: Scalars['Int']['input'];
  type: Scalars['String']['input'];
  w: Scalars['Int']['input'];
};

export type CreateCategoriesInput = {
  name: Scalars['String']['input'];
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
  postUid: Scalars['UID']['input'];
  replyingToCommentUid?: InputMaybe<Scalars['UID']['input']>;
};

export type CreateComponentInput = {
  configuration: ConfigurationInput;
  name: Scalars['String']['input'];
};

export type CreateDataSourceInput = {
  name: DataSourceName;
  source: Scalars['String']['input'];
  type: DataSourceType;
};

export type CreateDraftInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFeedInput = {
  name: Scalars['String']['input'];
  status?: InputMaybe<FeedStatus>;
  tagUids: Array<Scalars['String']['input']>;
};

export type CreateFrontPageInput = {
  title: Scalars['String']['input'];
};

export type CreatePermissionInput = {
  name: PermissionName;
};

export type CreatePostInput = {
  contentLink: Scalars['String']['input'];
};

export type CreatePrioritiesInput = {
  grade: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  login: Scalars['String']['input'];
};

export type CurrentUser = {
  __typename?: 'CurrentUser';
  commentsCount: Scalars['Float']['output'];
  login: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  postsCount: Scalars['Float']['output'];
  profile?: Maybe<Profile>;
  profileUid?: Maybe<Scalars['UID']['output']>;
  registrationDate: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
};

export type DataSource = {
  __typename?: 'DataSource';
  createdAt: Scalars['Date']['output'];
  feeds?: Maybe<Array<Feed>>;
  name: DataSourceName;
  posts?: Maybe<Array<Post>>;
  source: Scalars['String']['output'];
  type: DataSourceType;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type DataSourceItem = {
  __typename?: 'DataSourceItem';
  createdAt: Scalars['Date']['output'];
  name: DataSourceName;
  source: Scalars['String']['output'];
  type: DataSourceType;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum DataSourceName {
  Md = 'Md'
}

export enum DataSourceType {
  External = 'External',
  Internal = 'Internal'
}

export type DownloadLabelsDto = {
  projectName: Scalars['String']['input'];
  repoName: Scalars['String']['input'];
};

export type DownloadPostsDto = {
  branchName: Scalars['String']['input'];
  githubAuthorUid: Scalars['UID']['input'];
  projectName: Scalars['String']['input'];
  repoName: Scalars['String']['input'];
};

export type DraftItem = {
  __typename?: 'DraftItem';
  content?: Maybe<Scalars['Content']['output']>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type DraftPagination = {
  __typename?: 'DraftPagination';
  count: Scalars['Int']['output'];
  items: Array<DraftItem>;
  page: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
};

export type Feed = {
  __typename?: 'Feed';
  createdAt: Scalars['Date']['output'];
  dataSources?: Maybe<Array<DataSource>>;
  name: Scalars['String']['output'];
  status?: Maybe<FeedStatus>;
  tags?: Maybe<Array<TagItem>>;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type FeedItem = {
  __typename?: 'FeedItem';
  createdAt: Scalars['Date']['output'];
  name: Scalars['String']['output'];
  status?: Maybe<FeedStatus>;
  tags?: Maybe<Array<TagItem>>;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum FeedStatus {
  Hidden = 'Hidden',
  Private = 'Private',
  Public = 'Public'
}

export type FilterCommentArgs = {
  contains?: InputMaybe<Scalars['String']['input']>;
  postUid?: InputMaybe<Scalars['UID']['input']>;
};

export type FilterFeedsArgs = {
  feedStatuses?: InputMaybe<Array<FeedStatus>>;
};

export type FrontPage = {
  __typename?: 'FrontPage';
  content: Array<PostOnFrontPage>;
  createdAt: Scalars['Date']['output'];
  endDate?: Maybe<Scalars['Date']['output']>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type FrontPageItem = {
  __typename?: 'FrontPageItem';
  createdAt: Scalars['Date']['output'];
  endDate?: Maybe<Scalars['Date']['output']>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type FrontPagePagination = {
  __typename?: 'FrontPagePagination';
  count: Scalars['Int']['output'];
  items: Array<FrontPageItem>;
  page: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
};

export enum FrontPageType {
  Archive = 'Archive',
  Draft = 'Draft'
}

export type GithubAuthor = {
  __typename?: 'GithubAuthor';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  postsCount: Scalars['Float']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
  user?: Maybe<User>;
  usernameUrl: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  assignGroupToUser: UserItem;
  banUser: User;
  changePassword: UserItem;
  changePermissions: UserGroupItem;
  changePostsOnFrontPage: Array<PostOnFrontPageItem>;
  createCategory: Category;
  createComment: CommentItem;
  createComponent: Component;
  createDataSource: DataSource;
  createDraft: DraftItem;
  createFeed: FeedItem;
  createFrontPage: FrontPage;
  createPermission: PermissionItem;
  createPost: Post;
  createPriority: Priority;
  createUser: UserWithPassword;
  createUserGroup: UserGroupItem;
  downloadLabels: Array<TagItem>;
  downloadPosts: Array<ResponseStatus>;
  publishFrontPage: FrontPage;
  refreshToken: TokensDto;
  registration: UserToken;
  removeCategory: Scalars['Int']['output'];
  removeComment: CommentItem;
  removeComponent: Scalars['Int']['output'];
  removeDataSource: Scalars['Int']['output'];
  removeDraft: Scalars['Int']['output'];
  removeFeed: Scalars['Int']['output'];
  removeFrontPage: Scalars['Int']['output'];
  removeGithubAuthor: Scalars['Int']['output'];
  removePermission: Scalars['Int']['output'];
  removePost: Post;
  removePriority: Scalars['Int']['output'];
  removeProfile: Scalars['Int']['output'];
  removeUser: Scalars['Int']['output'];
  removeUserGroup: Scalars['Int']['output'];
  resetPasswordForUser: ResetPasswordDto;
  setGithubPrivateToken: ResponseStatus;
  share: PostInteractions;
  shareFrontPage: FrontPage;
  signIn: UserToken;
  signOut: ResponseStatus;
  unAssignGroupToUser: UserGroupItem;
  unbanUser: User;
  updateCategory: Scalars['Int']['output'];
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
  view: PostInteractions;
};


export type MutationAssignGroupToUserArgs = {
  data: AssignUserGroupInput;
};


export type MutationBanUserArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationChangePermissionsArgs = {
  data: UserGroupInput;
};


export type MutationChangePostsOnFrontPageArgs = {
  data: Array<AddPostToFrontPageInput>;
  frontPageUid: Scalars['UID']['input'];
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
  content?: InputMaybe<Scalars['Upload']['input']>;
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
  uid: Scalars['UID']['input'];
};


export type MutationRegistrationArgs = {
  data: CreateUserInput;
  password: Scalars['String']['input'];
};


export type MutationRemoveCategoryArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveCommentArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveComponentArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveDataSourceArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveDraftArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveFeedArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveFrontPageArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveGithubAuthorArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemovePermissionArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemovePostArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemovePriorityArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveProfileArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveUserArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationRemoveUserGroupArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationResetPasswordForUserArgs = {
  data: ResetPasswordInput;
};


export type MutationSetGithubPrivateTokenArgs = {
  data: SetGithubPrivateTokenDto;
};


export type MutationShareArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationShareFrontPageArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationSignInArgs = {
  data: SignInInput;
};


export type MutationUnAssignGroupToUserArgs = {
  data: AssignUserGroupInput;
};


export type MutationUnbanUserArgs = {
  uid: Scalars['UID']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoriesInput;
  uid: Scalars['UID']['input'];
};


export type MutationUpdateCommentArgs = {
  data: UpdateCommentDto;
  uid: Scalars['UID']['input'];
};


export type MutationUpdateComponentArgs = {
  data: UpdateComponentInput;
  uid: Scalars['UID']['input'];
};


export type MutationUpdateDataSourceArgs = {
  data: UpdateDataSourceInput;
  uid: Scalars['UID']['input'];
};


export type MutationUpdateDraftArgs = {
  content?: InputMaybe<Scalars['Upload']['input']>;
  data: UpdateDraftInput;
  uid: Scalars['UID']['input'];
};


export type MutationUpdateFeedArgs = {
  data: UpdateFeedInput;
  uid: Scalars['UID']['input'];
};


export type MutationUpdateFrontPageArgs = {
  data: UpdateFrontPageInput;
  uid: Scalars['UID']['input'];
};


export type MutationUpdatePostArgs = {
  uid: Scalars['UID']['input'];
  updatePostDto: UpdatePostInput;
};


export type MutationUpdatePriorityArgs = {
  data: UpdatePrioritiesInput;
  uid: Scalars['UID']['input'];
};


export type MutationUpdateProfileArgs = {
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  data: ProfileUpdateInput;
  uid: Scalars['UID']['input'];
};


export type MutationUpdateUserArgs = {
  data: UserInput;
  uid: Scalars['UID']['input'];
};


export type MutationViewArgs = {
  uid: Scalars['UID']['input'];
};

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['Date']['output'];
  name: PermissionName;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type PermissionItem = {
  __typename?: 'PermissionItem';
  createdAt: Scalars['Date']['output'];
  name: PermissionName;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum PermissionName {
  CreateComment = 'CreateComment',
  CreateFeed = 'CreateFeed',
  SuperAdministrator = 'SuperAdministrator'
}

export type Position = {
  __typename?: 'Position';
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

export type PositionInput = {
  x: Scalars['Int']['input'];
  y: Scalars['Int']['input'];
};

export type Post = {
  __typename?: 'Post';
  comments?: Maybe<Array<CommentItem>>;
  commentsCount?: Maybe<Scalars['Float']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  frontPages: Array<FrontPageItem>;
  githubAuthor?: Maybe<GithubAuthor>;
  githubFilename?: Maybe<Scalars['String']['output']>;
  interactions: PostInteractions;
  previewUrl?: Maybe<Scalars['String']['output']>;
  readingTime?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  tags?: Maybe<Array<TagItem>>;
  title: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type PostInteractions = {
  __typename?: 'PostInteractions';
  createdAt: Scalars['Date']['output'];
  sharesCount: Scalars['Int']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type PostOnFrontPage = {
  __typename?: 'PostOnFrontPage';
  component: ComponentItem;
  componentUid: Scalars['UID']['output'];
  createdAt: Scalars['Date']['output'];
  frontPageUid: Scalars['UID']['output'];
  position: Position;
  post: SimplePost;
  postUid: Scalars['UID']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type PostOnFrontPageItem = {
  __typename?: 'PostOnFrontPageItem';
  componentUid: Scalars['UID']['output'];
  createdAt: Scalars['Date']['output'];
  frontPageUid: Scalars['UID']['output'];
  position: Position;
  postUid: Scalars['UID']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type PostPagination = {
  __typename?: 'PostPagination';
  count: Scalars['Int']['output'];
  items: Array<Post>;
  page: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
};

export type Priority = {
  __typename?: 'Priority';
  createdAt: Scalars['Date']['output'];
  grade: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type PriorityItem = {
  __typename?: 'PriorityItem';
  createdAt: Scalars['Date']['output'];
  grade: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Profile = {
  __typename?: 'Profile';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  commentsCount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['Date']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  publicName?: Maybe<Scalars['String']['output']>;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type ProfileItem = {
  __typename?: 'ProfileItem';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  commentsCount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['Date']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  publicName?: Maybe<Scalars['String']['output']>;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ProfileUpdateInput = {
  publicName?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<CategoryItem>;
  category: Category;
  comments: CommentPagination;
  component: Component;
  components: Array<ComponentItem>;
  currentFrontPage: FrontPage;
  currentTime: Scalars['Date']['output'];
  currentUser: CurrentUser;
  dataSource: DataSource;
  dataSources: Array<DataSourceItem>;
  draft: DraftItem;
  drafts: DraftPagination;
  feed: FeedItem;
  feeds: Array<FeedItem>;
  frontPage: FrontPage;
  frontPages: FrontPagePagination;
  getTokenPayload: TokenPayloadDto;
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
  recommendation: Array<Post>;
  sharedFrontPage?: Maybe<FrontPage>;
  tags: Array<TagItem>;
  user: User;
  userGroups: Array<UserGroup>;
  users: Array<User>;
};


export type QueryCategoryArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryCommentsArgs = {
  filter?: InputMaybe<FilterCommentArgs>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortCommentsArgs>;
};


export type QueryComponentArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryDataSourceArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryDraftArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryDraftsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFeedArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryFeedsArgs = {
  filter?: InputMaybe<FilterFeedsArgs>;
  sort?: InputMaybe<SortFeedsArgs>;
};


export type QueryFrontPageArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryFrontPagesArgs = {
  frontPageType?: InputMaybe<Array<FrontPageType>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFrontPageArgs>;
};


export type QueryGithubAuthorArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryPostArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryPostsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostsByFeedArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  uid: Scalars['UID']['input'];
};


export type QueryPriorityArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryProfileArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryRecommendationArgs = {
  count?: InputMaybe<Scalars['Float']['input']>;
  type: Scalars['String']['input'];
  uid: Scalars['UID']['input'];
};


export type QuerySharedFrontPageArgs = {
  uid: Scalars['UID']['input'];
};


export type QueryUserArgs = {
  uid: Scalars['UID']['input'];
};

export type ResetPasswordDto = {
  __typename?: 'ResetPasswordDto';
  login: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type ResetPasswordInput = {
  login: Scalars['String']['input'];
};

export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  status: Scalars['Float']['output'];
};

export type SetGithubPrivateTokenDto = {
  githubLogin: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type SignInInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SimplePost = {
  __typename?: 'SimplePost';
  commentsCount?: Maybe<Scalars['Float']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  githubFilename?: Maybe<Scalars['String']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  readingTime?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type SortCommentsArgs = {
  byCreationDate?: InputMaybe<SortType>;
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
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type TokenPayloadDto = {
  __typename?: 'TokenPayloadDto';
  email: Scalars['String']['output'];
  login: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type TokensDto = {
  __typename?: 'TokensDto';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type UpdateCategoriesInput = {
  name: Scalars['String']['input'];
};

export type UpdateCommentDto = {
  content: Scalars['String']['input'];
};

export type UpdateComponentInput = {
  configuration: ConfigurationInput;
  name: Scalars['String']['input'];
};

export type UpdateDataSourceInput = {
  name: DataSourceName;
  source: Scalars['String']['input'];
  type: DataSourceType;
};

export type UpdateDraftInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeedInput = {
  name: Scalars['String']['input'];
  tagUids: Array<Scalars['UID']['input']>;
};

export type UpdateFrontPageInput = {
  title: Scalars['String']['input'];
};

export type UpdatePostInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  githubAuthorUid?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  tagUids?: InputMaybe<Array<Scalars['UID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePrioritiesInput = {
  grade: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date']['output'];
  isTransportPassword: Scalars['Boolean']['output'];
  login: Scalars['String']['output'];
  profile?: Maybe<ProfileItem>;
  profileUid?: Maybe<Scalars['UID']['output']>;
  status: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
  userGroups: Array<UserGroupItem>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  createdAt: Scalars['Date']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
  users: Array<User>;
};

export type UserGroupInput = {
  name: Scalars['String']['input'];
  permissions: Array<PermissionName>;
};

export type UserGroupItem = {
  __typename?: 'UserGroupItem';
  createdAt: Scalars['Date']['output'];
  name: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type UserInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserItem = {
  __typename?: 'UserItem';
  createdAt: Scalars['Date']['output'];
  isTransportPassword: Scalars['Boolean']['output'];
  login: Scalars['String']['output'];
  profile?: Maybe<ProfileItem>;
  profileUid?: Maybe<Scalars['UID']['output']>;
  status: Scalars['String']['output'];
  uid: Scalars['UID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type UserToken = {
  __typename?: 'UserToken';
  tokens: TokensDto;
  user: UserItem;
};

export type UserWithPassword = {
  __typename?: 'UserWithPassword';
  password: Scalars['String']['output'];
  user: UserItem;
};
