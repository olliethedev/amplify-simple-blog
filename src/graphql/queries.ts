/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const searchPosts = /* GraphQL */ `query SearchPosts($searchParameters: AWSJSON!) {
  searchPosts(searchParameters: $searchParameters)
}
` as GeneratedQuery<
  APITypes.SearchPostsQueryVariables,
  APITypes.SearchPostsQuery
>;
export const getPost = /* GraphQL */ `query GetPost($slug: ID!) {
  getPost(slug: $slug) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $slug: ID
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPosts(
    slug: $slug
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const syncPosts = /* GraphQL */ `query SyncPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPosts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncPostsQueryVariables, APITypes.SyncPostsQuery>;
export const getTag = /* GraphQL */ `query GetTag($name: ID!) {
  getTag(name: $name) {
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
` as GeneratedQuery<APITypes.GetTagQueryVariables, APITypes.GetTagQuery>;
export const listTags = /* GraphQL */ `query ListTags(
  $name: ID
  $filter: ModelTagFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTags(
    name: $name
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const syncTags = /* GraphQL */ `query SyncTags(
  $filter: ModelTagFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTags(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncTagsQueryVariables, APITypes.SyncTagsQuery>;
export const getPostTag = /* GraphQL */ `query GetPostTag($id: ID!) {
  getPostTag(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPostTagQueryVariables,
  APITypes.GetPostTagQuery
>;
export const listPostTags = /* GraphQL */ `query ListPostTags(
  $filter: ModelPostTagFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postSlug
      tagName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostTagsQueryVariables,
  APITypes.ListPostTagsQuery
>;
export const syncPostTags = /* GraphQL */ `query SyncPostTags(
  $filter: ModelPostTagFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPostTags(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      postSlug
      tagName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPostTagsQueryVariables,
  APITypes.SyncPostTagsQuery
>;
export const postTagsByPostSlug = /* GraphQL */ `query PostTagsByPostSlug(
  $postSlug: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostTagFilterInput
  $limit: Int
  $nextToken: String
) {
  postTagsByPostSlug(
    postSlug: $postSlug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postSlug
      tagName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostTagsByPostSlugQueryVariables,
  APITypes.PostTagsByPostSlugQuery
>;
export const postTagsByTagName = /* GraphQL */ `query PostTagsByTagName(
  $tagName: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostTagFilterInput
  $limit: Int
  $nextToken: String
) {
  postTagsByTagName(
    tagName: $tagName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postSlug
      tagName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostTagsByTagNameQueryVariables,
  APITypes.PostTagsByTagNameQuery
>;
