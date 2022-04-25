import React from 'react';
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackgroundCustomization } from 'state/slices/toolbar/ToolbarEditorCustomization.slice';
import { parseBackgroundColor } from '@lib/HelperFunctions';
import { EditorBackgroundColor } from './color/EditorBackgroundColor';
import { EditorBackgroundImage } from './image/EditorBackgroundImage';

interface EditorBackgroundProps {}

export const EditorBackground: React.FC<EditorBackgroundProps> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  const buttonShadow = (): string => {
    const BASE_COLOR = backgroundCustomization.backgroundColor;
    const SHADOW_COLOR = `rgba(${BASE_COLOR?.r}, ${BASE_COLOR?.g}, ${BASE_COLOR?.b}, 0.5)`;

    return `3px 5px 34px -4px ${SHADOW_COLOR}`;
  };

  return (
    <Flex justifyContent='center' mt={4}>
      <Popover isLazy placement='bottom'>
        <PopoverTrigger>
          <Button
            background={parseBackgroundColor(
              backgroundCustomization.backgroundColor
            )}
            w='fit-content'
            shadow={buttonShadow()}
            _hover={{ bg: backgroundCustomization.backgroundColor }}
            _focus={{ bg: backgroundCustomization.backgroundColor }}
            _active={{ bg: backgroundCustomization.backgroundColor }}
            border='2px solid'
          >
            Background
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
                  Color
                </Tab>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize='xs'
                  fontWeight='bold'
                  w='50%'
                >
                  Image
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <EditorBackgroundColor />
                </TabPanel>
                <TabPanel>
                  <EditorBackgroundImage />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
