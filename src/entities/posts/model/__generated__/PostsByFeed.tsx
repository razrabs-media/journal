// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PostsByFeedVariables = Types.Exact<{
  uid: Types.Scalars['UID']['input'];
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type PostsByFeed = { __typename: 'Query', postsByFeed: { __typename: 'PostPagination', items: Array<{ __typename: 'Post', uid: any, title: string, previewUrl?: string | null, createdAt: any, description: string, commentsCount?: number | null, githubAuthor?: { __typename: 'GithubAuthor', name?: string | null, user?: { __typename: 'User', profile?: { __typename: 'ProfileItem', publicName?: string | null } | null } | null } | null, tags?: Array<{ __typename: 'TagItem', name: string, uid: any }> | null }> } };


export const PostsByFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsByFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsByFeed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"githubAuthor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __usePostsByFeed__
 *
 * To run a query within a React component, call `usePostsByFeed` and pass it any options that fit your needs.
 * When your component renders, `usePostsByFeed` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByFeed({
 *   variables: {
 *      uid: // value for 'uid'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function usePostsByFeed(baseOptions: Apollo.QueryHookOptions<PostsByFeed, PostsByFeedVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsByFeed, PostsByFeedVariables>(PostsByFeedDocument, options);
      }
export function usePostsByFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsByFeed, PostsByFeedVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsByFeed, PostsByFeedVariables>(PostsByFeedDocument, options);
        }
export type PostsByFeedHookResult = ReturnType<typeof usePostsByFeed>;
export type PostsByFeedLazyQueryHookResult = ReturnType<typeof usePostsByFeedLazyQuery>;
export type PostsByFeedQueryResult = Apollo.QueryResult<PostsByFeed, PostsByFeedVariables>;