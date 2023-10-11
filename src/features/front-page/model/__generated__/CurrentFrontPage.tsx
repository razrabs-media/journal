// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import { FrontPageResultPartial } from './FrontPageResultPartial';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentFrontPageVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentFrontPage = { __typename: 'Query', currentFrontPage: { __typename: 'FrontPage', uid: any, publicationDate?: any | null, content: Array<{ __typename: 'PostOnFrontPage', uid: any, postUid: any, component: { __typename: 'ComponentItem', name: string, configuration: { __typename: 'Configuration', h: number, w: number, type: string } }, post: { __typename: 'SimplePost', uid: any, previewUrl?: string | null, title: string, createdAt: any }, position: { __typename: 'Position', x: number, y: number } }> } };


export const CurrentFrontPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentFrontPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentFrontPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FrontPageResultPartial"}}]}}]}},...FrontPageResultPartial.definitions]} as unknown as DocumentNode;

/**
 * __useCurrentFrontPage__
 *
 * To run a query within a React component, call `useCurrentFrontPage` and pass it any options that fit your needs.
 * When your component renders, `useCurrentFrontPage` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentFrontPage({
 *   variables: {
 *   },
 * });
 */
export function useCurrentFrontPage(baseOptions?: Apollo.QueryHookOptions<CurrentFrontPage, CurrentFrontPageVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentFrontPage, CurrentFrontPageVariables>(CurrentFrontPageDocument, options);
      }
export function useCurrentFrontPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentFrontPage, CurrentFrontPageVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentFrontPage, CurrentFrontPageVariables>(CurrentFrontPageDocument, options);
        }
export type CurrentFrontPageHookResult = ReturnType<typeof useCurrentFrontPage>;
export type CurrentFrontPageLazyQueryHookResult = ReturnType<typeof useCurrentFrontPageLazyQuery>;
export type CurrentFrontPageQueryResult = Apollo.QueryResult<CurrentFrontPage, CurrentFrontPageVariables>;