import {
  Tooltip,
  IconButton,
  VStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { IoMdColorPalette } from 'react-icons/io';
import { EditorCodeThemeList } from './EditorCodeThemeList';

interface EditorCodeThemeProps {}

export const EditorCodeTheme: React.FC<EditorCodeThemeProps> = ({}) => {
  return (
    <Popover placement='left-start'>
      <Tooltip label='Code Theme' aria-label='Code Theme'>
        <PopoverTrigger>
          <IconButton
            icon={
              <span>
                <IoMdColorPalette />
              </span>
            }
            aria-label='Theme Customization'
            border='2px solid'
          />
        </PopoverTrigger>
      </Tooltip>
      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>Theme</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          px={0}
          backgroundColor={useColorModeValue('gray.100', 'gray.800')}
        >
          <VStack spacing={4} px={4}>
            {/* Themes */}
            <EditorCodeThemeList />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
