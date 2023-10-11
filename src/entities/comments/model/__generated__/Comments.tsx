// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CommentsVariables = Types.Exact<{
  postUid: Types.Scalars['UID']['input'];
  perPage: Types.Scalars['Int']['input'];
}>;


export type Comments = { __typename: 'Query', comments: { __typename: 'CommentPagination', items: Array<{ __typename: 'CommentItem', uid: any, content: string, createdAt: any, author: { __typename: 'ProfileItem', uid: any, avatarUrl?: string | null, publicName?: string | null }, replyingToComment?: { __typename: 'CommentItem', uid: any, content: string } | null }> } };


export const CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"postUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postUid"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replyingToComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useComments__
 *
 * To run a query within a React component, call `useComments` and pass it any options that fit your needs.
 * When your component renders, `useComments` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComments({
 *   variables: {
 *      postUid: // value for 'postUid'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useComments(baseOptions: Apollo.QueryHookOptions<Comments, CommentsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Comments, CommentsVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Comments, CommentsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Comments, CommentsVariables>(CommentsDocument, options);
        }
export type CommentsHookResult = ReturnType<typeof useComments>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<Comments, CommentsVariables>;