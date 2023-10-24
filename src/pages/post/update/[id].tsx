import React from "react";
import { GetServerSidePropsContext } from "next";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import { Flex, View } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { PageWrapper } from "@/components/PageWrapper";
import { LazyPost, Post } from "@/models";
import { Post as PostModel } from "@/models";
import { UpdatePostLayout } from "@/components/UpdatePostLayout";
import awsExports from "@/aws-exports";

Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
  ssr: true,
});

interface PostDetailProps {
  serializedPost: LazyPost;
}

export default function PostUpdatePage({ serializedPost }: PostDetailProps) {
  const post: Post = deserializeModel(Post, serializedPost);

  return (
    <>
      <PageWrapper>
        <Flex width="100%" direction="column" alignItems="center">
          <View width="100%" maxWidth="800px">
            <UpdatePostLayout post={post} />
          </View>
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

  const post = await DataStore.query(PostModel, id);

  if (post === undefined) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      serializedPost: serializeModel(post),
    },
  };
}
