import React from 'react';
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import { EditorToolBar } from './toolbar/EditorToolBar';

interface EditorProps {}

export const Editor: React.FC<EditorProps> = ({}) => {
  return (
    <Box my={12}>
      <Container
        maxW='4xl'
        padding={4}
        backgroundColor={useColorModeValue('gray.200', 'gray.700')}
        borderRadius='md'
      >
        {/* Title */}
        <Box pb={4}>
          <Heading as='h1' fontSize='2xl' fontWeight={700}>
            Code Editor
          </Heading>
        </Box>
        {/* Editor Tool Bar */}
        <EditorToolBar />
      </Container>
    </Box>
  );
};
