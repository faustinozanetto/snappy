import { Flex } from '@chakra-ui/react';
import React from 'react';

interface EditorToolBarProps {}

export const EditorToolBar: React.FC<EditorToolBarProps> = ({}) => {
  return (
    <Flex
      height='60px'
      mb={2}
      padding={2}
      position='relative'
      border='2px solid white'
      borderRadius='2.5px'
    >
      Toolbar
    </Flex>
  );
};
