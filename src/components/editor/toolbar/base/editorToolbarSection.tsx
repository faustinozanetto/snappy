import React from 'react';
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
import type { ButtonProps } from '@components/ui/button/button';
import Button from '@components/ui/button/button';
import type { ToolbarSectionTab } from 'snappy.types';

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
    <Flex justifyContent="center">
      <Popover isLazy placement="bottom">
        {/* @ts-ignore */}
        <PopoverTrigger>
          <Button leftIcon={<span>{sectionIcon}</span>} aria-label={sectionName} {...sectionButtonProps}>
            {sectionName}
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: 'none' }}>
          <PopoverArrow />
          <PopoverBody backgroundColor="backgroundSecondary">
            <Tabs isLazy colorScheme="brand">
              <TabList>
                {sectionTabs.map((section) => {
                  return (
                    <Tab
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
                {sectionTabs.map((section) => {
                  return <TabPanel>{section.panel}</TabPanel>;
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
