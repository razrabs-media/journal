// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentUserVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentUser = { __typename: 'Query', currentUser: { __typename: 'CurrentUser', login: string, commentsCount: number, postsCount: number, profile?: { __typename: 'Profile', avatarUrl?: string | null, createdAt: any, fullName?: string | null } | null } };


export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"postsCount"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useCurrentUser__
 *
 * To run a query within a React component, call `useCurrentUser` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUser` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUser({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUser(baseOptions?: Apollo.QueryHookOptions<CurrentUser, CurrentUserVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUser, CurrentUserVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUser, CurrentUserVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUser, CurrentUserVariables>(CurrentUserDocument, options);
        }
export type CurrentUserHookResult = ReturnType<typeof useCurrentUser>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUser, CurrentUserVariables>;