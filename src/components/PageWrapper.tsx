import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify';
import { NavBarHeader, Page } from '@/ui-components'
import { useModal } from '@/hooks/useModal';
import SearchResults from '@/components/SearchResults';

interface PageWrapperProps {
    children: React.ReactNode
}

export interface User {
    username: string;
    keyPrefix: string;
    userDataKey: string;
    attributes: Attributes;
    preferredMFA: string;
  }
  export interface Attributes {
    sub: string;
    email_verified: boolean;
    email: string;
  }
  
export const useUser = () => {
  const [user, setUser] = React.useState<User|null>(null);

  useEffect(() => {
    const work = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        });
        setUser(user);
      } catch(err) {
        console.error(err);
        setUser(null);
      }
    }
    work();
  }, []);
  return user;
}

export const PageWrapper = ({children}: PageWrapperProps) => {
  const user = useUser();
  const {Modal, toggleModal} = useModal();
  const [searchText, setSearchText] = React.useState<string>("");
  return (
    <>
    <Page overrides={{
        Page:{
            width:"100%",
            height:"auto",
            minHeight:"100vh",
        },
        "Frame 1": {
            children: <NavBarHeader overrides={{
                NavBarHeader:{
                    width:"100%",
                },
                Guest:{
                    display: user ? "none" : "flex",
                },
                User:{
                    display: user ? "flex" : "none",
                },
                SearchField:{
                  value: searchText,
                  onChange:(e: React.ChangeEvent<HTMLInputElement>)=>{
                    setSearchText(e.target.value);
                  },
                  onSubmit:()=>{
                    toggleModal();
                  }
                }
            }}/>,
        },
        "Frame 2" : { children }
    }}/> 
    <Modal title='Search results'>
      <SearchResults searchText={searchText} />
    </Modal>
    </>)
}
