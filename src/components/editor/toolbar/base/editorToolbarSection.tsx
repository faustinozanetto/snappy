import React from 'react';
import {
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
} from '@chakra-ui/react';
import type { ButtonProps } from '@components/ui/button/button';
import Button from '@components/ui/button/button';
import type { ToolbarSectionTab } from 'snappy.types';

interface EditorToolbarSectionProps {
  /** Determinate the default tab to open when clicked. */
  defaultSection?: number;
  /** String to show as title */
  sectionName: string;
  /** Icon to display in the button */
  sectionIcon: React.ReactNode;
  /** Tabs of the section. */
  sectionTabs: ToolbarSectionTab[];
  sectionButtonProps?: ButtonProps;
}

const EditorToolbarSection: React.FC<EditorToolbarSectionProps> = (props) => {
  const { defaultSection = 0, sectionName, sectionIcon, sectionTabs, sectionButtonProps } = props;
  return (
    <Popover isLazy placement="bottom">
      {/* @ts-ignore */}
      <PopoverTrigger>
        <Button
          leftIcon={<span>{sectionIcon}</span>}
          aria-label={sectionName}
          width={['full', 'full', 'auto', 'auto']}
          {...sectionButtonProps}
        >
          {sectionName}
        </Button>
      </PopoverTrigger>
      <PopoverContent _focus={{ boxShadown: 'none' }}>
        <PopoverArrow />
        <PopoverBody backgroundColor="backgroundSecondary">
          <Tabs isLazy colorScheme="brand" defaultIndex={defaultSection}>
            <TabList>
              {sectionTabs.map((section) => {
                return (
                  <Tab
                    key={section.label}
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
                return <TabPanel key={section.label}>{section.panel}</TabPanel>;
              })}
            </TabPanels>
          </Tabs>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default EditorToolbarSection;
