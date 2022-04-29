import React from 'react';
import EditorToolbarCodeThemeList from './editorToolbarCodeThemeList';
import EditorToolbarCodeLanguageList from './editorToolbarCodeLanguageList';
import EditorToolbarSection from '../../base/editorToolbarSection';
import { FaCode } from 'react-icons/fa';

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
