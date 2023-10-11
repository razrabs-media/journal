// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import { FrontPageResultPartial } from './FrontPageResultPartial';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SharedFrontPageVariables = Types.Exact<{
  uid: Types.Scalars['UID']['input'];
}>;


export type SharedFrontPage = { __typename: 'Query', sharedFrontPage?: { __typename: 'FrontPage', uid: any, publicationDate?: any | null, content: Array<{ __typename: 'PostOnFrontPage', uid: any, postUid: any, component: { __typename: 'ComponentItem', name: string, configuration: { __typename: 'Configuration', h: number, w: number, type: string } }, post: { __typename: 'SimplePost', uid: any, previewUrl?: string | null, title: string, createdAt: any }, position: { __typename: 'Position', x: number, y: number } }> } | null };


export const SharedFrontPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SharedFrontPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sharedFrontPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FrontPageResultPartial"}}]}}]}},...FrontPageResultPartial.definitions]} as unknown as DocumentNode;

/**
 * __useSharedFrontPage__
 *
 * To run a query within a React component, call `useSharedFrontPage` and pass it any options that fit your needs.
 * When your component renders, `useSharedFrontPage` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSharedFrontPage({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useSharedFrontPage(baseOptions: Apollo.QueryHookOptions<SharedFrontPage, SharedFrontPageVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SharedFrontPage, SharedFrontPageVariables>(SharedFrontPageDocument, options);
      }
export function useSharedFrontPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SharedFrontPage, SharedFrontPageVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SharedFrontPage, SharedFrontPageVariables>(SharedFrontPageDocument, options);
        }
export type SharedFrontPageHookResult = ReturnType<typeof useSharedFrontPage>;
export type SharedFrontPageLazyQueryHookResult = ReturnType<typeof useSharedFrontPageLazyQuery>;
export type SharedFrontPageQueryResult = Apollo.QueryResult<SharedFrontPage, SharedFrontPageVariables>;