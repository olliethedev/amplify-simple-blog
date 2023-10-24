import React from "react";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import { useModal } from "@/hooks/useModal";
import { TagCreateForm, PostCreateForm } from "@/ui-components";

export default function NewPostLayout() {
  const { Modal, toggleModal } = useModal();
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
              width: "100%",
            },
            SectionalElement0: {
              children: <Button onClick={toggleModal}>New Category</Button>,
            },
          }}
        />
      </Flex>
      <Modal title="New Category">
        <TagCreateForm onSuccess={toggleModal} />
      </Modal>
    </>
  );
}
