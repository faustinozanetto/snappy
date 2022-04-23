import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
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
      alignContent='center'
      align='center'
      borderColor={useColorModeValue('gray.600', 'gray.200')}
      borderRadius='2.5px'
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
        {/* Editor Configuration */}
        <ToolBoxEditorConfiguration />
      </HStack>
    </Flex>
  );
};
