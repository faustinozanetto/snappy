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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  Text,
  useColorModeValue,
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
    <Popover placement='left-start'>
      <Tooltip label='Window' aria-label='Window Customization'>
        <PopoverTrigger>
          <IconButton
            icon={
              <span>
                <BiWindow />
              </span>
            }
            aria-label='Window Customization'
            border='2px solid'
          />
        </PopoverTrigger>
      </Tooltip>
      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>
          <HStack>
            <Button
              variant='ghost'
              colorScheme='telegram'
              onClick={() => setWindowConfigType(WindowConfigType.PADDING)}
            >
              Padding
            </Button>
            <Button
              variant='ghost'
              colorScheme='telegram'
              onClick={() => setWindowConfigType(WindowConfigType.SHADOW)}
            >
              Shadow
            </Button>
          </HStack>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          px={0}
          backgroundColor={useColorModeValue('gray.100', 'gray.800')}
        >
          {/* Window Padding */}
          {windowConfigType === WindowConfigType.PADDING && (
            <EditorWindowPadding />
          )}
          {/* Shadow */}
          {windowConfigType === WindowConfigType.SHADOW && (
            <EditorWindowShadow />
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
