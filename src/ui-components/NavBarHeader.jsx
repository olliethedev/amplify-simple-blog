/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import LogoWithText from "./LogoWithText";
import { Button, Flex, SearchField } from "@aws-amplify/ui-react";
export default function NavBarHeader(props) {
  const { overrides, ...rest } = props;
  const articlesButtonOnClick = useNavigateAction({ type: "url", url: "/" });
  const publishButtonOnClick = useNavigateAction({
    type: "url",
    url: "/post/new",
  });
  const logoutButtonOnClick = useNavigateAction({
    type: "url",
    url: "/logout",
  });
  const loginButtonOnClick = useNavigateAction({ type: "url", url: "/login" });
  const signupButtonOnClick = useNavigateAction({
    type: "url",
    url: "/login?signup=true",
  });
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <LogoWithText
        width="127.88px"
        height="18.91px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        color="brand"
        {...getOverrideProps(overrides, "LogoWithText")}
      ></LogoWithText>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SiteLinks")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Articles"
          onClick={() => {
            articlesButtonOnClick();
          }}
          {...getOverrideProps(overrides, "ArticlesButton")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Publish"
          onClick={() => {
            publishButtonOnClick();
          }}
          {...getOverrideProps(overrides, "PublishButton")}
        ></Button>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Actions")}
      >
        <SearchField
          width="300px"
          height="unset"
          placeholder="Search..."
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "User")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="Log out"
            onClick={() => {
              logoutButtonOnClick();
            }}
            {...getOverrideProps(overrides, "LogoutButton")}
          ></Button>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Guest")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="Log in"
            onClick={() => {
              loginButtonOnClick();
            }}
            {...getOverrideProps(overrides, "LoginButton")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Sign up"
            onClick={() => {
              signupButtonOnClick();
            }}
            {...getOverrideProps(overrides, "SignupButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
