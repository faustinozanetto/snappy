import React from 'react';
import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { ToolBoxThemeSelector } from '@components/editor/toolbar/general/ToolBoxThemeSelector';
import { ToolBoxLanguageSelector } from '@components/editor/toolbar/general/ToolBoxLanguageSelector';
import { ToolBoxEditorConfiguration } from './editor/ToolBoxEditorConfiguration';

interface EditorToolBarProps {}

export const EditorToolBar: React.FC<EditorToolBarProps> = ({}) => {
  return (
    <Flex
      height='60px'
      padding={2}
      position='relative'
      border={`2px solid`}
      justifyContent='space-between'
      borderColor={useColorModeValue('gray.600', 'gray.200')}
      borderRadius='2.5px'
    >
      {/* General Customization options */}
      <HStack spacing={4}>
        {/* Theme Selection */}
        <ToolBoxThemeSelector />
        {/* Language Selection */}
        <ToolBoxLanguageSelector />
      </HStack>
      {/* Editor Configuration */}
      <HStack spacing={4}>
        {/* Editor Configuration */}
        <ToolBoxEditorConfiguration />
      </HStack>
    </Flex>
  );
};
