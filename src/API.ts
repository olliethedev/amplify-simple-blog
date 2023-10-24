/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  slug: string,
  title: string,
  description: string,
  content: string,
  image: string,
  published: boolean,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  slug: string,
  title: string,
  description: string,
  content: string,
  image: string,
  published: boolean,
  tags?: ModelPostTagConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPostTagConnection = {
  __typename: "ModelPostTagConnection",
  items:  Array<PostTag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PostTag = {
  __typename: "PostTag",
  id: string,
  postSlug: string,
  tagName: string,
  post: Post,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Tag = {
  __typename: "Tag",
  name: string,
  posts?: ModelPostTagConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePostInput = {
  slug: string,
  title?: string | null,
  description?: string | null,
  content?: string | null,
  image?: string | null,
  published?: boolean | null,
  _version?: number | null,
};

export type DeletePostInput = {
  slug: string,
  _version?: number | null,
};

export type CreateTagInput = {
  name: string,
  _version?: number | null,
};

export type ModelTagConditionInput = {
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateTagInput = {
  name: string,
  _version?: number | null,
};

export type DeleteTagInput = {
  name: string,
  _version?: number | null,
};

export type CreatePostTagInput = {
  id?: string | null,
  postSlug: string,
  tagName: string,
  _version?: number | null,
};

export type ModelPostTagConditionInput = {
  postSlug?: ModelIDInput | null,
  tagName?: ModelIDInput | null,
  and?: Array< ModelPostTagConditionInput | null > | null,
  or?: Array< ModelPostTagConditionInput | null > | null,
  not?: ModelPostTagConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostTagInput = {
  id: string,
  postSlug?: string | null,
  tagName?: string | null,
  _version?: number | null,
};

export type DeletePostTagInput = {
  id: string,
  _version?: number | null,
};

export type ModelPostFilterInput = {
  slug?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTagFilterInput = {
  name?: ModelIDInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostTagFilterInput = {
  id?: ModelIDInput | null,
  postSlug?: ModelIDInput | null,
  tagName?: ModelIDInput | null,
  and?: Array< ModelPostTagFilterInput | null > | null,
  or?: Array< ModelPostTagFilterInput | null > | null,
  not?: ModelPostTagFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPostFilterInput = {
  slug?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  published?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionTagFilterInput = {
  name?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPostTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postSlug?: ModelSubscriptionIDInput | null,
  tagName?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostTagFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    slug: string,
    title: string,
    description: string,
    content: string,
    image: string,
    published: boolean,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    slug: string,
    title: string,
    description: string,
    content: string,
    image: string,
    published: boolean,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    slug: string,
    title: string,
    description: string,
    content: string,
    image: string,
    published: boolean,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    name: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    name: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    name: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostTagMutationVariables = {
  input: CreatePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type CreatePostTagMutation = {
  createPostTag?:  {
    __typename: "PostTag",
    id: string,
    postSlug: string,
    tagName: string,
    post:  {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostTagMutationVariables = {
  input: UpdatePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type UpdatePostTagMutation = {
  updatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postSlug: string,
    tagName: string,
    post:  {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostTagMutationVariables = {
  input: DeletePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type DeletePostTagMutation = {
  deletePostTag?:  {
    __typename: "PostTag",
    id: string,
    postSlug: string,
    tagName: string,
    post:  {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type SearchPostsQueryVariables = {
  searchParameters: string,
};

export type SearchPostsQuery = {
  searchPosts?: string | null,
};

export type GetPostQueryVariables = {
  slug: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    slug: string,
    title: string,
    description: string,
    content: string,
    image: string,
    published: boolean,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  slug?: string | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTagQueryVariables = {
  name: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    name: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTagsQueryVariables = {
  name?: string | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTagsQuery = {
  syncTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostTagQueryVariables = {
  id: string,
};

export type GetPostTagQuery = {
  getPostTag?:  {
    __typename: "PostTag",
    id: string,
    postSlug: string,
    tagName: string,
    post:  {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostTagsQueryVariables = {
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostTagsQuery = {
  listPostTags?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postSlug: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostTagsQueryVariables = {
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostTagsQuery = {
  syncPostTags?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postSlug: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PostTagsByPostSlugQueryVariables = {
  postSlug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostTagsByPostSlugQuery = {
  postTagsByPostSlug?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postSlug: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PostTagsByTagNameQueryVariables = {
  tagName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostTagsByTagNameQuery = {
  postTagsByTagName?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postSlug: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    slug: string,
    title: string,
    description: string,
    content: string,
    image: string,
    published: boolean,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    slug: string,
    title: string,
    description: string,
    content: string,
    image: string,
    published: boolean,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    slug: string,
    title: string,
    description: string,
    content: string,
    image: string,
    published: boolean,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    name: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    name: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    name: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostTagSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagFilterInput | null,
};

export type OnCreatePostTagSubscription = {
  onCreatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postSlug: string,
    tagName: string,
    post:  {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostTagSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagFilterInput | null,
};

export type OnUpdatePostTagSubscription = {
  onUpdatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postSlug: string,
    tagName: string,
    post:  {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostTagSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagFilterInput | null,
};

export type OnDeletePostTagSubscription = {
  onDeletePostTag?:  {
    __typename: "PostTag",
    id: string,
    postSlug: string,
    tagName: string,
    post:  {
      __typename: "Post",
      slug: string,
      title: string,
      description: string,
      content: string,
      image: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
