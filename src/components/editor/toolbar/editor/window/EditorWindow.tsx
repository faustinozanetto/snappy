import React, { useState } from 'react';
import {
  Button,
  HStack,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import { BiWindow } from 'react-icons/bi';
import { EditorWindowDisplay } from './display/EditorWindowDisplay';
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
      <PopoverTrigger>
        <Button
          leftIcon={
            <span>
              <BiWindow />
            </span>
          }
          aria-label='Window Customization'
          border='2px solid'
        >
          Window
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>
          <HStack>
            <Button
              variant='ghost'
              colorScheme='telegram'
              onClick={() => setWindowConfigType(WindowConfigType.PADDING)}
            >
              Window
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
          {/* Window Display */}
          {windowConfigType === WindowConfigType.PADDING && (
            <EditorWindowDisplay />
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
