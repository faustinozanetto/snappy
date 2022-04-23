import {
  Menu,
  Tooltip,
  MenuButton,
  IconButton,
  MenuList,
  MenuGroup,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaCode } from 'react-icons/fa';
import { EditorFontList } from '../font/EditorFontList';
import { EditorFontSize } from '../font/EditorFontSize';

interface EditorCodeProps {}

export const EditorCode: React.FC<EditorCodeProps> = ({}) => {
  return (
    <Menu placement='left-start'>
      <Tooltip label='Code' aria-label='Code Customization'>
        <MenuButton
          as={IconButton}
          icon={
            <span>
              <FaCode />
            </span>
          }
          aria-label='Code Customization'
          border='2px solid'
        />
      </Tooltip>
      <MenuList>
        <MenuGroup>
          <VStack px={4}></VStack>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
