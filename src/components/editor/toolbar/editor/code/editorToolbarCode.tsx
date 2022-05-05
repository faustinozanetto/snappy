import React from 'react';
import { FaCode } from 'react-icons/fa';

import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorToolbarCodeThemeList from './editorToolbarCodeThemeList';

interface EditorToolbarCodeProps {}

const EditorToolbarCode: React.FC<EditorToolbarCodeProps> = ({}) => {
  return (
    <EditorToolbarSection
      sectionName="Code"
      sectionIcon={<FaCode />}
      sectionTabs={[
        {
          label: 'Theme',
          panel: <EditorToolbarCodeThemeList />,
        },
      ]}
    />
  );
};
export default EditorToolbarCode;
