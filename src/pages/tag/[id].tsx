import React, { useEffect } from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import { Flex, Heading } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { PageWrapper } from "@/components/PageWrapper";
import { LazyPost, LazyTag, Tag as TagModel} from "@/models";
import { CommonPostCardCollection } from "@/components/CommonPostCardCollection";
import awsExports from "@/aws-exports";

const SITE_NAME = "Simple Amplify Blog";

Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
  ssr: true,
});

interface TagPostsProps {
  serializedTag: LazyTag;
}

export default function TagPosts({ serializedTag }: TagPostsProps) {
  const tag: TagModel = deserializeModel(TagModel, serializedTag);
  const [tagPosts, setTagPosts] = React.useState<LazyPost[]>([]);

  useEffect(() => {
    const work = async () => {
      const posts = await tag.posts.toArray();
      const postsForTags = await Promise.all(
        posts.map(async (post) => {
          return post.post;
        })
      );
      setTagPosts(postsForTags);
    };
    work();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TITLE = `Posts with ${tag.name} tag | ${SITE_NAME}`;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageWrapper>
        <Flex width="100%" direction="column" alignItems="center">
          <Heading level={1}>
            Posts with <b>{tag.name}</b> tag
          </Heading>
          <CommonPostCardCollection
            posts={tagPosts}
          />
        </Flex>
      </PageWrapper>
    </>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ id: string }>) {
  const id = params?.id;

  if (!id)
    return {
      notFound: true,
    };

  const tag = await DataStore.query(TagModel, id);

  if (tag === undefined) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      serializedTag: serializeModel(tag),
    },
  };
}