import React, { useEffect, useState } from 'react'
import { PageWrapper } from '@/components/PageWrapper';
import { Authenticator, Flex, Heading, Text } from '@aws-amplify/ui-react'
import Head from 'next/head';
import { Check } from '@/components/icons/Check';
import { Redirect } from '@/components/Redirect';
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure({
  ...awsconfig,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
  ssr: false,
});

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            setIsSignUp(urlParams.get('signup') === 'true');
        }
    }, []);

    let authComponent : React.ReactNode;

    if(isSignUp){
        authComponent = (
            <Authenticator key="signUp" initialState="signUp">
              {({ signOut, user }) => (
                <Flex width="100%" direction="column" justifyContent="center">
                  <Check/>
                  <Heading level={1}>Hello {user?.username}</Heading>
                  <Text>Redirecting home...</Text>
                  <Redirect to="/"/>
                </Flex>
              )}
            </Authenticator>
          )
    }else{
        authComponent = (
            <Authenticator key="signIn" initialState='signIn'>
              {({ signOut, user }) => (
                <Flex width="100%" direction="column" justifyContent="center">
                  <Check/>
                  <Heading level={1}>Hello {user?.username}</Heading>
                  <Text>Redirecting home...</Text>
                  <Redirect to="/"/>
                </Flex>
              )}
            </Authenticator>
          )
    }

    return(<>
    <Head>
        <title>Login | Simple Amplify Blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageWrapper>
        <Flex width="100%" direction="column" justifyContent="center">
          {authComponent}
        </Flex>
      </PageWrapper>
    </>);
  
}



