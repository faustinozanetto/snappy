import React from 'react';
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
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import { FaCode } from 'react-icons/fa';
import { EditorCodeLanguageList } from './EditorCodeLanguageList';
import { EditorCodeLineNumbers } from './EditorCodeLineNumbers';

interface EditorCodeProps {}

export const EditorCode: React.FC<EditorCodeProps> = ({}) => {
  return (
    <Flex justifyContent='center' mt={4}>
      <Popover isLazy placement='bottom'>
        <PopoverTrigger>
          <Button
            leftIcon={
              <span>
                <FaCode />
              </span>
            }
            w='fit-content'
            aria-label='Language Customization'
            border='2px solid'
          >
            Code
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: 'none' }}>
          <PopoverArrow />
          <PopoverBody
            w='full'
            backgroundColor={useColorModeValue('gray.100', 'gray.800')}
          >
            <Tabs isLazy isFitted colorScheme='blue'>
              <TabList>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize='xs'
                  fontWeight='bold'
                  w='50%'
                >
                  Language
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* Languages */}
                  <EditorCodeLanguageList />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
