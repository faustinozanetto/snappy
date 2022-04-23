import React from 'react';
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import { EditorToolBar } from './toolbar/EditorToolBar';
import { useSelector } from 'react-redux';
import { selectFontFamilty } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

interface EditorProps {}

export const Editor: React.FC<EditorProps> = ({}) => {
  const fontFamily = useSelector(selectFontFamilty);
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
      </Container>
    </Box>
  );
};
