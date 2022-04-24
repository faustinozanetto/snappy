import SnapifyLogo from '@components/branding/SnapifyLogo';
import React from 'react';

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { FooterButton } from './FooterButton';
import Link from 'next/link';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      as='footer'
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      width='full'
      py={4}
    >
      <Container as={Stack} maxWidth='5xl' paddingY={10}>
        <SimpleGrid templateColumns={'1fr 1fr'} spacing={8}>
          <Stack spacing={6}>
            <SnapifyLogo
              size='lg'
              logoColor={useColorModeValue('black', 'white')}
            />
            <Text fontSize='md'>
              © Conkis Studios 2022. All rights reserved
            </Text>
            {/* Social Links */}
            <Stack direction='row' spacing={6}>
              <FooterButton label='Twitter' href='/'>
                <FaTwitter />
              </FooterButton>
              <FooterButton label='Discord' href='/'>
                <FaDiscord />
              </FooterButton>
            </Stack>
          </Stack>
          {/* Legal Links */}
          <Stack align='flex-start'>
            <Text fontWeight={'500'} fontSize={'xl'} mb={2}>
              Company
            </Text>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
