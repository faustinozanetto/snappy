import React, { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Tooltip,
  VStack,
  MenuGroup,
  Button,
  HStack,
  MenuDivider,
} from '@chakra-ui/react';
import { BiWindow } from 'react-icons/bi';
import { EditorWindowPadding } from './padding/EditorWindowPadding';
import {
  setBackgroundCustomization,
  BackgroundType,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { EditorWindowShadow } from './shadow/EditorWindowShadow';

interface EditorWindowProps {}

export enum WindowConfigType {
  PADDING = 'padding',
  SHADOW = 'shadow',
}

export const EditorWindow: React.FC<EditorWindowProps> = ({}) => {
  const [windowConfigType, setWindowConfigType] = useState<WindowConfigType>(
    WindowConfigType.PADDING
  );
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
        {/* Selection */}
        <MenuGroup>
          <HStack justify='center' px={4}>
            <Button
              width='50%'
              variant='ghost'
              colorScheme='telegram'
              onClick={() => setWindowConfigType(WindowConfigType.PADDING)}
            >
              Padding
            </Button>
            <Button
              width='50%'
              variant='ghost'
              colorScheme='telegram'
              onClick={() => setWindowConfigType(WindowConfigType.SHADOW)}
            >
              Shadow
            </Button>
          </HStack>
        </MenuGroup>
        <MenuDivider />
        {/* Configuration */}
        <MenuGroup>
          {/* Window Padding */}
          {windowConfigType === WindowConfigType.PADDING && (
            <EditorWindowPadding />
          )}
          {/* Shadow */}
          {windowConfigType === WindowConfigType.SHADOW && (
            <EditorWindowShadow />
          )}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
