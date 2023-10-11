// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PostsByRecommendationVariables = Types.Exact<{
  uid: Types.Scalars['UID']['input'];
  type: Types.Scalars['String']['input'];
  count?: Types.InputMaybe<Types.Scalars['Float']['input']>;
}>;


export type PostsByRecommendation = { __typename: 'Query', recommendation: Array<{ __typename: 'Post', previewUrl?: string | null, title: string, uid: any }> };


export const PostsByRecommendationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsByRecommendation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recommendation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"count"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __usePostsByRecommendation__
 *
 * To run a query within a React component, call `usePostsByRecommendation` and pass it any options that fit your needs.
 * When your component renders, `usePostsByRecommendation` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByRecommendation({
 *   variables: {
 *      uid: // value for 'uid'
 *      type: // value for 'type'
 *      count: // value for 'count'
 *   },
 * });
 */
export function usePostsByRecommendation(baseOptions: Apollo.QueryHookOptions<PostsByRecommendation, PostsByRecommendationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsByRecommendation, PostsByRecommendationVariables>(PostsByRecommendationDocument, options);
      }
export function usePostsByRecommendationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsByRecommendation, PostsByRecommendationVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsByRecommendation, PostsByRecommendationVariables>(PostsByRecommendationDocument, options);
        }
export type PostsByRecommendationHookResult = ReturnType<typeof usePostsByRecommendation>;
export type PostsByRecommendationLazyQueryHookResult = ReturnType<typeof usePostsByRecommendationLazyQuery>;
export type PostsByRecommendationQueryResult = Apollo.QueryResult<PostsByRecommendation, PostsByRecommendationVariables>;