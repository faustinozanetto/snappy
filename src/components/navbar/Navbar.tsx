import React from 'react';
import SnapifyLogo from '@components/branding/SnapifyLogo';
import {
  Box,
  Container,
  Flex,
  HStack,
  Spacer,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavbarThemeToggler } from './NavbarThemeToggler';
import { UserSignInButton } from './user/UserSignInButton';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Box as='nav' boxShadow='2xl'>
      <Container
        maxW={['0em', '30em', '48em', '62em', '80em', '90em']}
        padding={4}
        borderRadius='md'
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <SnapifyLogo size='xl' />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
              {/* User */}
              <HStack>
                <UserSignInButton />
              </HStack>
              <NavbarThemeToggler />
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
