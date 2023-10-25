import React from "react";
import { useRouter } from "next/navigation";
import { Flex, Heading } from "@aws-amplify/ui-react";
import { TagCreateForm, PostCreateForm } from "@/ui-components";

export default function NewPostLayout() {
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
        <Heading level={2}>Create a New Post</Heading>
        <PostCreateForm
          overrides={{
            PostCreateForm: {
              width: "100%"
            }
          }}
          onSuccess={ () => {
            push("/");
          }}
        />
      </Flex>
    </>
  );
}
