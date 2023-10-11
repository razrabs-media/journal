// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFeedsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFeeds = { __typename: 'Query', feeds: Array<{ __typename: 'FeedItem', uid: any, name: string }> };


export const GetFeedsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeeds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetFeeds__
 *
 * To run a query within a React component, call `useGetFeeds` and pass it any options that fit your needs.
 * When your component renders, `useGetFeeds` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeeds({
 *   variables: {
 *   },
 * });
 */
export function useGetFeeds(baseOptions?: Apollo.QueryHookOptions<GetFeeds, GetFeedsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeeds, GetFeedsVariables>(GetFeedsDocument, options);
      }
export function useGetFeedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeeds, GetFeedsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeeds, GetFeedsVariables>(GetFeedsDocument, options);
        }
export type GetFeedsHookResult = ReturnType<typeof useGetFeeds>;
export type GetFeedsLazyQueryHookResult = ReturnType<typeof useGetFeedsLazyQuery>;
export type GetFeedsQueryResult = Apollo.QueryResult<GetFeeds, GetFeedsVariables>;