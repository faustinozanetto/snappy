import React from 'react';
import Link from 'next/link';
import { Box, Container, Stack, Text } from '@chakra-ui/react';

import SnapifyLogo from '@components/branding/snapifyLogo';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      backgroundColor="footer"
      color="textPrimary"
      width="full"
      marginTop="auto"
      py={4}
    >
      <Container as={Stack} maxW="6xl" py={4} spacing={4} justify="center" align="center">
        <SnapifyLogo size="3xl" />
        <Stack direction="row" spacing={6}>
          <Link href="/">Home</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle="solid" borderColor="background">
        <Container as={Stack} maxW="6xl" py={4} spacing={4} textAlign="center">
          <Text>© 2022 Conkis Studios. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
