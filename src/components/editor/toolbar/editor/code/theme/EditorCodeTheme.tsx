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
import { IoMdColorPalette } from 'react-icons/io';
import { EditorFontList } from '../../font/EditorFontList';
import { EditorFontSize } from '../../font/EditorFontSize';
import { EditorCodeThemeList } from './EditorCodeThemeList';

interface EditorCodeThemeProps {}

export const EditorCodeTheme: React.FC<EditorCodeThemeProps> = ({}) => {
  return (
    <Menu placement='left-start'>
      <Tooltip label='Code Theme' aria-label='Code Theme'>
        <MenuButton
          as={IconButton}
          icon={
            <span>
              <IoMdColorPalette />
            </span>
          }
          aria-label='Code Theme'
          border='2px solid'
        />
      </Tooltip>
      <MenuList>
        <MenuGroup>
          <VStack px={4}>
            {/* Themes */}
            <EditorCodeThemeList />
          </VStack>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
