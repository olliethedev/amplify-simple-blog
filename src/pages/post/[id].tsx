import React, { useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import { StorageImage } from "@aws-amplify/ui-react-storage";
/* eslint-disable-next-line */
import { useStorageURL } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { BadgeElementCollection, PostDetail } from "@/ui-components";
import { LazyPost, Post as PostModel, Tag } from "@/models";
import { PageWrapper } from "@/components/PageWrapper";
import { MemoizedReactMarkdown } from "@/components/MemoizedReactMarkdown";

import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";

import awsExports from "@/aws-exports";

const SITE_NAME = "Simple Amplify Blog";

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

export default function PostDetailPage({ serializedPost }: PostDetailProps) {
  //   const router = useRouter();
  //   const id = router.query.id;
  const post: PostModel = deserializeModel(PostModel, serializedPost);

  const imageURL = useStorageURL({
    key: post.image,
  });

  const [postTags, setPostTags] = React.useState<Tag[]>([]);

  useEffect(() => {
    const work = async () => {
      const tags = await post.tags.toArray();
      setPostTags(
        tags.map(
          (tag) =>
            ({
              name: tag.tagName,
            } as Tag)
        )
      );
    };
    work();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TITLE = post.title + " | " + SITE_NAME;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:image"
          content={post.image.startsWith("http") ? post.image : imageURL}
        />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/post/${post.slug}`}
        />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content={post.image.startsWith("http") ? post.image : imageURL}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PageWrapper>
        <Flex width="100%" direction="column" alignItems="center">
          <View width="100%" maxWidth="800px">
            <PostDetail
              post={post}
              overrides={{
                PostDetail:{
                    backgroundColor: "transparent",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                },
                Tags: {
                  children: (
                    <BadgeElementCollection
                      items={postTags}
                      overrideItems={({ item, index }) => ({
                        overrides: {
                          Badge: {
                            style: {
                              cursor: "pointer",
                            },
                          },
                        },
                      })}
                    />
                  ),
                },
                MarkdownContainer: {
                  direction: "column",
                  children: (
                    <MemoizedReactMarkdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                    >
                      {post.content}
                    </MemoizedReactMarkdown>
                  ),
                },
                ImageContainer: {
                  padding: 0,
                  borderRadius: "10px",
                  children: post.image.startsWith("http") ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <Image
                      src={post.image}
                      alt="post image"
                      width={0}
                      height={0}
                      sizes="200px"
                      style={{ width: "auto", height: "100%" }}
                    />
                  ) : (
                    <StorageImage
                      imgKey={post.image}
                      accessLevel="public"
                      alt="post image"
                      width={200}
                    />
                  ),
                },
              }}
            />
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
