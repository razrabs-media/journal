// 🛑 NOTICE: __generated__ folders should be added to .gitignore
/* eslint-disable */
/* tslint:disable */
import * as Types from '../../../../shared/api/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SendCommentVariables = Types.Exact<{
  data: Types.CreateCommentInput;
}>;


export type SendComment = { __typename: 'Mutation', createComment: { __typename: 'CommentItem', uid: any, content: string, createdAt: any, author: { __typename: 'ProfileItem', uid: any, avatarUrl?: string | null, publicName?: string | null }, replyingToComment?: { __typename: 'CommentItem', uid: any, content: string } | null } };


export const SendCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replyingToComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode;
export type SendCommentMutationFn = Apollo.MutationFunction<SendComment, SendCommentVariables>;

/**
 * __useSendComment__
 *
 * To run a mutation, you first call `useSendComment` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendComment` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendComment, { data, loading, error }] = useSendComment({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendComment(baseOptions?: Apollo.MutationHookOptions<SendComment, SendCommentVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendComment, SendCommentVariables>(SendCommentDocument, options);
      }
export type SendCommentHookResult = ReturnType<typeof useSendComment>;
export type SendCommentMutationResult = Apollo.MutationResult<SendComment>;
export type SendCommentMutationOptions = Apollo.BaseMutationOptions<SendComment, SendCommentVariables>;