/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    slug
    title
    description
    content
    image
    published
    tags {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    slug
    title
    description
    content
    image
    published
    tags {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    slug
    title
    description
    content
    image
    published
    tags {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createTag = /* GraphQL */ `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
    name
    posts {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTagMutationVariables,
  APITypes.CreateTagMutation
>;
export const updateTag = /* GraphQL */ `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
    name
    posts {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTagMutationVariables,
  APITypes.UpdateTagMutation
>;
export const deleteTag = /* GraphQL */ `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
    name
    posts {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTagMutationVariables,
  APITypes.DeleteTagMutation
>;
export const createPostTag = /* GraphQL */ `mutation CreatePostTag(
  $input: CreatePostTagInput!
  $condition: ModelPostTagConditionInput
) {
  createPostTag(input: $input, condition: $condition) {
    id
    postSlug
    tagName
    post {
      slug
      title
      description
      content
      image
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    tag {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostTagMutationVariables,
  APITypes.CreatePostTagMutation
>;
export const updatePostTag = /* GraphQL */ `mutation UpdatePostTag(
  $input: UpdatePostTagInput!
  $condition: ModelPostTagConditionInput
) {
  updatePostTag(input: $input, condition: $condition) {
    id
    postSlug
    tagName
    post {
      slug
      title
      description
      content
      image
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    tag {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostTagMutationVariables,
  APITypes.UpdatePostTagMutation
>;
export const deletePostTag = /* GraphQL */ `mutation DeletePostTag(
  $input: DeletePostTagInput!
  $condition: ModelPostTagConditionInput
) {
  deletePostTag(input: $input, condition: $condition) {
    id
    postSlug
    tagName
    post {
      slug
      title
      description
      content
      image
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    tag {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostTagMutationVariables,
  APITypes.DeletePostTagMutation
>;
