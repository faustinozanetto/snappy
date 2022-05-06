import { VStack } from '@chakra-ui/react';
import React from 'react';
import { FaFont } from 'react-icons/fa';

import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorToolbarLineHeigth from './editorToolbarFontLineHeigth';
import EditorToolbarFontList from './editorToolbarFontList';
import EditorToolbarFontSize from './editorToolbarFontSize';

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
            <VStack spacing={4}>
              <EditorToolbarFontSize />
              <EditorToolbarLineHeigth />
            </VStack>
          ),
        },
      ]}
    />
  );
};
export default EditorToolbarFont;
