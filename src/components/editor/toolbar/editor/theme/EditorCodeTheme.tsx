import React from 'react';
import {
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
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import { IoMdColorPalette } from 'react-icons/io';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import { EditorCodeThemeList } from './EditorCodeThemeList';

interface EditorCodeThemeProps {}

export const EditorCodeTheme: React.FC<EditorCodeThemeProps> = ({}) => {
  return (
    <Flex justifyContent='center' mt={4}>
      <Popover isLazy placement='bottom'>
        <PopoverTrigger>
          <Button
            leftIcon={
              <span>
                <IoMdColorPalette />
              </span>
            }
            w='fit-content'
            aria-label='Theme Customization'
            border='2px solid'
          >
            Themes
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
                  Themes
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <EditorCodeThemeList />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
