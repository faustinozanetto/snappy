import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { FaFont } from 'react-icons/fa';

interface EditorFontProps {}

export const EditorFont: React.FC<EditorFontProps> = ({}) => {
  return (
    <Menu isLazy placement='left-start'>
      <MenuButton
        as={IconButton}
        icon={<FaFont />}
        aria-label='Background Customization'
        border='2px solid'
      />
      <MenuList></MenuList>
    </Menu>
  );
};
