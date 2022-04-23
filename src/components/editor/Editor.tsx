import React from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';

interface EditorProps {}

export const Editor: React.FC<EditorProps> = ({}) => {
  return (
    <Box backgroundColor={useColorModeValue('gray.100', 'gray.700')} my={12}>
      <Container maxW='4xl'>Editor</Container>
    </Box>
  );
};
