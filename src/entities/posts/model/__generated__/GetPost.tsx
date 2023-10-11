// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostVariables = Types.Exact<{
  uid: Types.Scalars['UID']['input'];
}>;


export type GetPost = { __typename: 'Query', post: { __typename: 'Post', uid: any, title: string, description: string, previewUrl?: string | null, content: string, createdAt: any, tags?: Array<{ __typename: 'TagItem', name: string }> | null, githubAuthor?: { __typename: 'GithubAuthor', uid: any, name?: string | null, usernameUrl: string, avatarUrl?: string | null } | null, comments?: Array<{ __typename: 'CommentItem', uid: any, content: string, createdAt: any, author: { __typename: 'ProfileItem', uid: any, avatarUrl?: string | null, publicName?: string | null }, replyingToComment?: { __typename: 'CommentItem', uid: any, content: string } | null }> | null } };


export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"githubAuthor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"usernameUrl"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replyingToComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetPost__
 *
 * To run a query within a React component, call `useGetPost` and pass it any options that fit your needs.
 * When your component renders, `useGetPost` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPost({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useGetPost(baseOptions: Apollo.QueryHookOptions<GetPost, GetPostVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPost, GetPostVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPost, GetPostVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPost, GetPostVariables>(GetPostDocument, options);
        }
export type GetPostHookResult = ReturnType<typeof useGetPost>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPost, GetPostVariables>;