// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentTimeVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentTime = { __typename: 'Query', currentTime: any };


export const CurrentTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentTime"}}]}}]} as unknown as DocumentNode;

/**
 * __useCurrentTime__
 *
 * To run a query within a React component, call `useCurrentTime` and pass it any options that fit your needs.
 * When your component renders, `useCurrentTime` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentTime({
 *   variables: {
 *   },
 * });
 */
export function useCurrentTime(baseOptions?: Apollo.QueryHookOptions<CurrentTime, CurrentTimeVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentTime, CurrentTimeVariables>(CurrentTimeDocument, options);
      }
export function useCurrentTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentTime, CurrentTimeVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentTime, CurrentTimeVariables>(CurrentTimeDocument, options);
        }
export type CurrentTimeHookResult = ReturnType<typeof useCurrentTime>;
export type CurrentTimeLazyQueryHookResult = ReturnType<typeof useCurrentTimeLazyQuery>;
export type CurrentTimeQueryResult = Apollo.QueryResult<CurrentTime, CurrentTimeVariables>;