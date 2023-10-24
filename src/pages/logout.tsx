import { Flex, Text } from '@aws-amplify/ui-react'
import React, { useEffect } from 'react'
import { DataStore, Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure({
  ...awsconfig,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
  ssr: false,
});

export default function Logout() {
    const { push } = useRouter();
    useEffect(() => {
        const work = async () => {
        try {
            await Auth.signOut();
            await DataStore.clear();
          } catch(err) {
            console.error(err);
          } finally {
            push("/");
          }
        }
        work();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
   <Flex direction="column" gap="2rem" alignItems="center">
    <Text>You have been logged out.</Text>
    </Flex>
  )
}
