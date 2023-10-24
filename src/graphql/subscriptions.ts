/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateTag = /* GraphQL */ `subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
  onCreateTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTagSubscriptionVariables,
  APITypes.OnCreateTagSubscription
>;
export const onUpdateTag = /* GraphQL */ `subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
  onUpdateTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTagSubscriptionVariables,
  APITypes.OnUpdateTagSubscription
>;
export const onDeleteTag = /* GraphQL */ `subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
  onDeleteTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTagSubscriptionVariables,
  APITypes.OnDeleteTagSubscription
>;
export const onCreatePostTag = /* GraphQL */ `subscription OnCreatePostTag($filter: ModelSubscriptionPostTagFilterInput) {
  onCreatePostTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostTagSubscriptionVariables,
  APITypes.OnCreatePostTagSubscription
>;
export const onUpdatePostTag = /* GraphQL */ `subscription OnUpdatePostTag($filter: ModelSubscriptionPostTagFilterInput) {
  onUpdatePostTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostTagSubscriptionVariables,
  APITypes.OnUpdatePostTagSubscription
>;
export const onDeletePostTag = /* GraphQL */ `subscription OnDeletePostTag($filter: ModelSubscriptionPostTagFilterInput) {
  onDeletePostTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostTagSubscriptionVariables,
  APITypes.OnDeletePostTagSubscription
>;
