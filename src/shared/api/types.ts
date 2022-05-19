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
  login: Scalars['String'];
  userGroupsName: Array<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  posts?: Maybe<Array<PostItem>>;
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

export type CreateFeedsInput = {
  name: Scalars['String'];
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
  posts?: Maybe<Array<PostItem>>;
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
  tags?: Maybe<Array<TagItem>>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type FeedItem = {
  __typename?: 'FeedItem';
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  tags?: Maybe<Array<TagItem>>;
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
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

export type Mutation = {
  __typename?: 'Mutation';
  assignGroupToUser: UserItem;
  changePassword: UserItem;
  changePermissions: UserGroupItem;
  changePostsOnFrontPage: Array<PostOnFrontPageItem>;
  createCategory: Category;
  createComponent: Component;
  createDataSource: DataSource;
  createDraft: DraftItem;
  createFeed: Feed;
  createFrontPage: FrontPage;
  createPermission: PermissionItem;
  createPost: PostItem;
  createPriority: Priority;
  createUser: ShortUserItem;
  createUserGroup: UserGroupItem;
  downloadLabels: Array<TagItem>;
  publishFrontPage: FrontPage;
  removeCategory: Scalars['Int'];
  removeComponent: Scalars['Int'];
  removeDataSource: Scalars['Int'];
  removeDraft: Scalars['Int'];
  removeFeed: Scalars['Int'];
  removeFrontPage: Scalars['Int'];
  removePermission: Scalars['Int'];
  removePost: Scalars['Int'];
  removePriority: Scalars['Int'];
  removeProfile: Scalars['Int'];
  removeUser: Scalars['Int'];
  removeUserGroup: Scalars['Int'];
  resetPasswordForUser: UserItem;
  signIn: UserToken;
  signOut: ResponseStatus;
  unAssignGroupToUser: UserGroupItem;
  updateCategory: Scalars['Int'];
  updateComponent: Component;
  updateDataSource: DataSource;
  updateDraft: DraftItem;
  updateFeed: Feed;
  updateFrontPage: FrontPage;
  updatePost: Post;
  updatePriority: Priority;
  updateUser: User;
};


export type MutationAssignGroupToUserArgs = {
  data: AssignUserGroupInput;
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
  data: CreateFeedsInput;
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


export type MutationPublishFrontPageArgs = {
  uid: Scalars['UID'];
};


export type MutationRemoveCategoryArgs = {
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
  AddPosts = 'AddPosts',
  CreateDrafts = 'CreateDrafts',
  DeletePosts = 'DeletePosts',
  EditPosts = 'EditPosts',
  ManageCategories = 'ManageCategories',
  ManageComponents = 'ManageComponents',
  ManageDataSource = 'ManageDataSource',
  ManageFeeds = 'ManageFeeds',
  ManageFrontPage = 'ManageFrontPage',
  ManagePriorities = 'ManagePriorities',
  ManageUserGroups = 'ManageUserGroups',
  ManageUsers = 'ManageUsers',
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
  category: CategoryItem;
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  dataSource: DataSourceItem;
  description: Scalars['String'];
  frontPages: Array<FrontPageItem>;
  previewUrl?: Maybe<Scalars['String']>;
  priority: PriorityItem;
  readingTime?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<TagItem>>;
  title: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type PostItem = {
  __typename?: 'PostItem';
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  frontPages: Array<FrontPageItem>;
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
  items: Array<PostItem>;
  page: Scalars['Int'];
  pages: Scalars['Int'];
};

export type Priority = {
  __typename?: 'Priority';
  createdAt: Scalars['Date'];
  grade: Scalars['Int'];
  name: Scalars['String'];
  posts?: Maybe<Array<PostItem>>;
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
  permissions: Array<PermissionItem>;
  post: PostItem;
  posts: PostPagination;
  priorities: Array<PriorityItem>;
  priority: Priority;
  profile: Profile;
  profiles: Array<ProfileItem>;
  tags: Array<TagItem>;
  updateProfile: ProfileItem;
  user: User;
  userGroups: Array<UserGroupItem>;
  users: Array<UserItem>;
};


export type QueryCategoryArgs = {
  uid: Scalars['UID'];
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


export type QueryFrontPageArgs = {
  uid: Scalars['UID'];
};


export type QueryFrontPagesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  uid: Scalars['UID'];
};


export type QueryPostsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryPriorityArgs = {
  uid: Scalars['UID'];
};


export type QueryProfileArgs = {
  uid: Scalars['UID'];
};


export type QueryUpdateProfileArgs = {
  avatar?: InputMaybe<Scalars['Upload']>;
  data: ProfileUpdateInput;
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

export type ShortUserItem = {
  __typename?: 'ShortUserItem';
  login: Scalars['String'];
  password: Scalars['String'];
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

export type TagItem = {
  __typename?: 'TagItem';
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  name: Scalars['String'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type UpdateCategoriesInput = {
  name: Scalars['String'];
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
  author: Scalars['String'];
  categoryUid: Scalars['UID'];
  dataSourceUid: Scalars['UID'];
  description: Scalars['String'];
  previewUrl: Scalars['String'];
  priorityUid: Scalars['UID'];
  publicationDate: Scalars['Date'];
  title: Scalars['String'];
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
  profile: ProfileItem;
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
  profile: ProfileItem;
  profileUid: Scalars['UID'];
  uid: Scalars['UID'];
  updatedAt: Scalars['Date'];
};

export type UserToken = {
  __typename?: 'UserToken';
  isTransportPassword: Scalars['Boolean'];
  token: Scalars['String'];
  user: UserItem;
};
