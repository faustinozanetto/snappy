import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Tooltip,
  VStack,
  MenuGroup,
} from '@chakra-ui/react';
import { BiWindow } from 'react-icons/bi';

interface EditorWindowProps {}

export const EditorWindow: React.FC<EditorWindowProps> = ({}) => {
  return (
    <Menu placement='left-start'>
      <Tooltip label='Window' aria-label='Window Customization'>
        <MenuButton
          as={IconButton}
          icon={
            <span>
              <BiWindow />
            </span>
          }
          aria-label='Window Customization'
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
