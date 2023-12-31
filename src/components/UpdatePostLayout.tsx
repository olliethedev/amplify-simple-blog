import React from "react";
import { useRouter } from "next/navigation";
import { Flex, Heading } from "@aws-amplify/ui-react";
import { PostUpdateForm, TagCreateForm } from "@/ui-components";
import { Post } from "@/models";

interface UpdatePostLayoutProps {
  post: Post;
}

export const UpdatePostLayout = ({ post }: UpdatePostLayoutProps) => {
  const { push } = useRouter();
  return (
    <>
      <Flex direction="column" gap="2rem" alignItems="center" width="100%">
        <Heading level={2}>Create a New Tag</Heading>
        <TagCreateForm
          overrides={{
            TagCreateForm: {
              width: "100%",
            },
          }}
        />
        <Heading level={2}>Update Post</Heading>
        <PostUpdateForm
          overrides={{
            PostUpdateForm: {
              width: "100%"
            }
          }}
          onSuccess={ () => {
            push("/");
          }}
          post={post as Post}
        />
      </Flex>
    </>
  );
};
