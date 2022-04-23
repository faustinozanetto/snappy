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
import { FaCode } from 'react-icons/fa';
import { EditorCodeLanguageList } from './EditorCodeLanguageList';

interface EditorCodeLanguageProps {}

export const EditorCodeLanguage: React.FC<EditorCodeLanguageProps> = ({}) => {
  return (
    <Popover placement='left-start'>
      <Tooltip label='Code Language' aria-label='Code Language'>
        <PopoverTrigger>
          <IconButton
            icon={
              <span>
                <FaCode />
              </span>
            }
            aria-label='Language Customization'
            border='2px solid'
          />
        </PopoverTrigger>
      </Tooltip>
      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>Language</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          px={0}
          backgroundColor={useColorModeValue('gray.100', 'gray.800')}
        >
          <VStack spacing={4} px={4}>
            {/* Languages */}
            <EditorCodeLanguageList />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
