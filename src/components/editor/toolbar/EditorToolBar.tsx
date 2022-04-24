import React from 'react';
import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { EditorBackground } from './editor/background/EditorBackground';
import { EditorCode } from './editor/code/EditorCode';
import { EditorCodeTheme } from './editor/theme/EditorCodeTheme';
import { EditorFont } from './editor/font/EditorFont';
import { EditorWindow } from './editor/window/EditorWindow';
import { EditorExportImage } from './editor/export/EditorExportImage';

interface EditorToolBarProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

export const EditorToolBar: React.FC<EditorToolBarProps> = ({ exportRef }) => {
  return (
    <Flex
      height='60px'
      padding={2}
      position='relative'
      justifyContent='center'
      alignContent='center'
      align='center'
      backgroundColor={useColorModeValue('gray.300', 'gray.900')}
      borderRadius='md'
      mb={4}
    >
      {/* Editor Configuration */}
      <HStack spacing={4}>
        {/* Background */}
        <EditorBackground />
        {/* Font */}
        <EditorFont />
        {/* Theme */}
        <EditorCodeTheme />
        {/* Language */}
        <EditorCode />
        {/* Window */}
        <EditorWindow />
        {/* Export */}
        <EditorExportImage exportRef={exportRef} />
      </HStack>
    </Flex>
  );
};
