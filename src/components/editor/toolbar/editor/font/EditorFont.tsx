import React from 'react';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  useColorModeValue,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { Button } from '@components/ui/Button';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import { FaFont } from 'react-icons/fa';
import { EditorFontList } from './EditorFontList';
import { EditorFontSize } from './EditorFontSize';
import { EditorLineHeigth } from './EditorLineHeigth';

interface EditorFontProps {}

export const EditorFont: React.FC<EditorFontProps> = ({}) => {
  return (
    <Flex justifyContent='center' mt={4}>
      <Popover isLazy placement='bottom'>
        <PopoverTrigger>
          <Button
            leftIcon={
              <span>
                <FaFont />
              </span>
            }
            w='fit-content'
            aria-label='Font Customization'
            border='2px solid'
          >
            Fonts
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: 'none' }}>
          <PopoverArrow />
          <PopoverBody
            w='full'
            backgroundColor={useColorModeValue('gray.100', 'gray.800')}
          >
            <Tabs isLazy isFitted colorScheme='blue'>
              {/* Options */}
              <TabList>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize='xs'
                  fontWeight='bold'
                  w='50%'
                >
                  List
                </Tab>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize='xs'
                  fontWeight='bold'
                  w='50%'
                >
                  Options
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <EditorFontList />
                </TabPanel>
                <TabPanel>
                  <EditorFontSize />
                  <EditorLineHeigth />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
