import {
  Menu,
  MenuButton,
  Button,
  Text,
  MenuList,
  IconButton,
  Tooltip,
  VStack,
  MenuGroup,
  MenuDivider,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { FaFont } from 'react-icons/fa';
import { EditorFontList } from './EditorFontList';
import { EditorFontSize } from './EditorFontSize';

interface EditorFontProps {}

export const EditorFont: React.FC<EditorFontProps> = ({}) => {
  return (
    <Menu placement='left-start'>
      <Tooltip label='Fonts' aria-label='Background Customization'>
        <MenuButton
          as={IconButton}
          icon={
            <span>
              <FaFont />
            </span>
          }
          aria-label='Background Customization'
          border='2px solid'
        />
      </Tooltip>
      <MenuList>
        <MenuGroup>
          <VStack px={4}>
            {/* Font list. */}
            <EditorFontList />
            {/* Font Size */}
            <EditorFontSize />
          </VStack>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
