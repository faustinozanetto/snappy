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
import { FaFont } from 'react-icons/fa';
import EditorToolbarFontList from './editorToolbarFontList';
import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorToolbarFontSize from './editorToolbarFontSize';
import EditorToolbarLineHeigth from './editorToolbarFontLineHeigth';

interface EditorToolbarFontProps {}

const EditorToolbarFont: React.FC<EditorToolbarFontProps> = ({}) => {
  return (
    <EditorToolbarSection
      sectionName="Font"
      sectionIcon={<FaFont />}
      sectionTabs={[
        {
          label: 'List',
          panel: <EditorToolbarFontList />,
        },
        {
          label: 'Options',
          panel: (
            <>
              <EditorToolbarFontSize />
              <EditorToolbarLineHeigth />
            </>
          ),
        },
      ]}
    />
  );
};
export default EditorToolbarFont;
