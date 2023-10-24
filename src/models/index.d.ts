import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Post, 'slug'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly content: string;
  readonly image: string;
  readonly published: boolean;
  readonly tags?: (PostTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Post, 'slug'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly content: string;
  readonly image: string;
  readonly published: boolean;
  readonly tags: AsyncCollection<PostTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Tag, 'name'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly name: string;
  readonly posts?: (PostTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Tag, 'name'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly name: string;
  readonly posts: AsyncCollection<PostTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerPostTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postSlug?: string | null;
  readonly tagName?: string | null;
  readonly post: Post;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postSlug?: string | null;
  readonly tagName?: string | null;
  readonly post: AsyncItem<Post>;
  readonly tag: AsyncItem<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostTag = LazyLoading extends LazyLoadingDisabled ? EagerPostTag : LazyPostTag

export declare const PostTag: (new (init: ModelInit<PostTag>) => PostTag) & {
  copyOf(source: PostTag, mutator: (draft: MutableModel<PostTag>) => MutableModel<PostTag> | void): PostTag;
}