import React from 'react';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  useColorModeValue,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
  return (
    <Flex justifyContent='center' mt={4}>
      <Popover isLazy placement='bottom'>
        <PopoverTrigger>
          <Button
            leftIcon={
              <span>
                <BiWindow />
              </span>
            }
            w='fit-content'
            aria-label='Window Customization'
            border='2px solid'
          >
            Window
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
                  Fittment
                </Tab>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize='xs'
                  fontWeight='bold'
                  w='50%'
                >
                  Visuals
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <EditorWindowDisplay />
                </TabPanel>
                <TabPanel>
                  <EditorWindowShadow />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
