import React from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { EditorToolBar } from './toolbar/EditorToolBar';
import { EditorContentWindow } from './content/EditorContentWindow';

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
        {/* Editor Tool Bar */}
        <EditorToolBar />
        {/* Editor Content Window */}
        <EditorContentWindow />
      </Container>
    </Box>
  );
};
