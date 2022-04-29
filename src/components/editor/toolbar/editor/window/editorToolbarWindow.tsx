import React from 'react';
import EditorToolbarSection from '../../base/editorToolbarSection';
import { BiWindow } from 'react-icons/bi';
import EditorToolbarWindowDisplay from './display/editorToolbarWindowDisplay';
import EditorToolbarWindowShadow from './shadow/editorToolbarWindowShadow';

interface EditorToolbarWindowProps {}

const EditorToolbarWindow: React.FC<EditorToolbarWindowProps> = ({}) => {
  return (
    <EditorToolbarSection
      sectionName="Window"
      sectionIcon={<BiWindow />}
      sectionTabs={[
        {
          label: 'Display',
          panel: <EditorToolbarWindowDisplay />,
        },
        {
          label: 'Shadow',
          panel: <EditorToolbarWindowShadow />,
        },
      ]}
    />
  );
};

export default EditorToolbarWindow;
