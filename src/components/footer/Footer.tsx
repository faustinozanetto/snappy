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
    <Box as='footer' width='full' py={4}>
      <Container as={Stack} maxWidth='5xl' paddingY={10}>
        <SimpleGrid templateColumns={'1fr 1fr'} spacing={8}>
          <Text fontSize='md'>© Conkis Studios 2022. All rights reserved</Text>

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
