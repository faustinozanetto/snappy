import React from 'react';
import { FaCode } from 'react-icons/fa';

import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorToolbarCodeLanguageList from './editorToolbarCodeLanguageList';
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
        {
          label: 'Language',
          panel: <EditorToolbarCodeLanguageList />,
        },
      ]}
    />
  );
};
export default EditorToolbarCode;
