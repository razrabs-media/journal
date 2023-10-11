// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostsByFeedVariables = Types.Exact<{
  uid: Types.Scalars['UID'];
  page?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetPostsByFeed = { __typename: 'Query', postsByFeed: { __typename: 'PostPagination', items: Array<{ __typename: 'Post', uid: any, title: string, previewUrl?: string | null, createdAt: any }> } };


export const GetPostsByFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostsByFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsByFeed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetPostsByFeed__
 *
 * To run a query within a React component, call `useGetPostsByFeed` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsByFeed` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsByFeed({
 *   variables: {
 *      uid: // value for 'uid'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetPostsByFeed(baseOptions: Apollo.QueryHookOptions<GetPostsByFeed, GetPostsByFeedVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsByFeed, GetPostsByFeedVariables>(GetPostsByFeedDocument, options);
      }
export function useGetPostsByFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsByFeed, GetPostsByFeedVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsByFeed, GetPostsByFeedVariables>(GetPostsByFeedDocument, options);
        }
export type GetPostsByFeedHookResult = ReturnType<typeof useGetPostsByFeed>;
export type GetPostsByFeedLazyQueryHookResult = ReturnType<typeof useGetPostsByFeedLazyQuery>;
export type GetPostsByFeedQueryResult = Apollo.QueryResult<GetPostsByFeed, GetPostsByFeedVariables>;