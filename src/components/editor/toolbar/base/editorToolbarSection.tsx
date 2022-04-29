import React from 'react';
import Button, { ButtonProps } from '@components/ui/button';
import {
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import { ToolbarSectionTab } from 'snappy.types';

interface EditorToolbarSectionProps {
  /** String to show as title */
  sectionName: string;
  /** Icon to display in the button */
  sectionIcon: React.ReactNode;
  /** Tabs of the section. */
  sectionTabs: ToolbarSectionTab[];
  sectionButtonProps?: ButtonProps;
}

const EditorToolbarSection: React.FC<EditorToolbarSectionProps> = (props) => {
  const { sectionName, sectionIcon, sectionTabs, sectionButtonProps } = props;
  return (
    <Flex justifyContent="center" mt={4}>
      <Popover isLazy placement="bottom">
        {/* @ts-ignore */}
        <PopoverTrigger>
          <Button
            leftIcon={<span>{sectionIcon}</span>}
            w="fit-content"
            aria-label={sectionName}
            border="2px solid"
            {...sectionButtonProps}
          >
            {sectionName}
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: 'none' }}>
          <PopoverArrow />
          <PopoverBody w="full" backgroundColor={useColorModeValue('gray.100', 'gray.800')}>
            <Tabs isLazy isFitted colorScheme="blue">
              <TabList>
                {sectionTabs.map((section, index) => {
                  return (
                    <Tab
                      key={index}
                      _focus={{ boxShadow: 'none' }}
                      fontSize="xs"
                      fontWeight="bold"
                      w="50%"
                      onClick={section.onTabSelected}
                    >
                      {section.label}
                    </Tab>
                  );
                })}
              </TabList>
              <TabPanels>
                {sectionTabs.map((section, index) => {
                  return <TabPanel key={index}>{section.panel}</TabPanel>;
                })}
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default EditorToolbarSection;
