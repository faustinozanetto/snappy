import {
  Tooltip,
  Button,
  VStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import { FaCode } from 'react-icons/fa';
import { EditorCodeLanguageList } from './EditorCodeLanguageList';
import { EditorCodeLineNumbers } from './EditorCodeLineNumbers';

interface EditorCodeProps {}

export const EditorCode: React.FC<EditorCodeProps> = ({}) => {
  return (
    <Popover placement='left-start'>
      <PopoverTrigger>
        <Button
          leftIcon={
            <span>
              <FaCode />
            </span>
          }
          aria-label='Language Customization'
          border='2px solid'
        >
          Code
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>Code</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          px={0}
          backgroundColor={useColorModeValue('gray.100', 'gray.800')}
        >
          <VStack spacing={4} px={4}>
            {/* Languages */}
            <EditorCodeLanguageList />
            {/* Line Numbers */}
            <EditorCodeLineNumbers />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
