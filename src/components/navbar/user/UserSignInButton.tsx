import React from 'react';
import { Button } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

interface UserSignInButtonProps {}

export const UserSignInButton: React.FC<UserSignInButtonProps> = ({}) => {
  return (
    <Button
      colorScheme='purple'
      variant='outline'
      onClick={async () => await signIn()}
    >
      Sign In
    </Button>
  );
};
