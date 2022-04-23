import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { EditorBackground } from './editor/background/EditorBackground';
import { EditorCodeLanguage } from './editor/code/language/EditorCodeLanguage';
import { EditorCodeTheme } from './editor/code/theme/EditorCodeTheme';
import { EditorFont } from './editor/font/EditorFont';
import { EditorWindow } from './editor/window/EditorWindow';

interface EditorToolBarProps {}

export const EditorToolBar: React.FC<EditorToolBarProps> = ({}) => {
  return (
    <Flex
      height='60px'
      padding={2}
      position='relative'
      // border={`2px solid`}
      justifyContent='space-between'
      alignContent='center'
      align='center'
      backgroundColor={useColorModeValue('gray.100', 'gray.800')}
      // borderColor={useColorModeValue('g', 'gray.200')}
      borderRadius='md'
      mb={4}
    >
      {/* Title */}
      <Box>
        <Heading as='h2' fontWeight={700} fontSize='3xl'>
          Toolbar
        </Heading>
      </Box>
      {/* Editor Configuration */}
      <HStack spacing={4}>
        {/* Background */}
        <EditorBackground />
        {/* Font */}
        <EditorFont />
        {/* Theme */}
        <EditorCodeTheme />
        {/* Language */}
        <EditorCodeLanguage />
        {/* Window */}
        <EditorWindow />
      </HStack>
    </Flex>
  );
};
