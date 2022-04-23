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
import { EditorCodeLanguageList } from './EditorCodeLanguageList';

interface EditorCodeLanguageProps {}

export const EditorCodeLanguage: React.FC<EditorCodeLanguageProps> = ({}) => {
  return (
    <Menu placement='left-start'>
      <Tooltip label='Code Language' aria-label='Code Language'>
        <MenuButton
          as={IconButton}
          icon={
            <span>
              <FaCode />
            </span>
          }
          aria-label='Code Language'
          border='2px solid'
        />
      </Tooltip>
      <MenuList>
        <MenuGroup>
          <VStack px={4}>
            {/* Languages */}
            <EditorCodeLanguageList />
          </VStack>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
