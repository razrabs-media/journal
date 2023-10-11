// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SignOutVariables = Types.Exact<{ [key: string]: never; }>;


export type SignOut = { __typename: 'Mutation', signOut: { __typename: 'ResponseStatus', status: number } };


export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode;
export type SignOutMutationFn = Apollo.MutationFunction<SignOut, SignOutVariables>;

/**
 * __useSignOut__
 *
 * To run a mutation, you first call `useSignOut` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOut` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOut, { data, loading, error }] = useSignOut({
 *   variables: {
 *   },
 * });
 */
export function useSignOut(baseOptions?: Apollo.MutationHookOptions<SignOut, SignOutVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOut, SignOutVariables>(SignOutDocument, options);
      }
export type SignOutHookResult = ReturnType<typeof useSignOut>;
export type SignOutMutationResult = Apollo.MutationResult<SignOut>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOut, SignOutVariables>;