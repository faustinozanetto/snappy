import React from 'react';
import { FiBox } from 'react-icons/fi';

import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorPresetsList from './editorToolbarPresetsList';

interface EditorToolbarPresetsProps {}

const EditorToolbarPresets: React.FC<EditorToolbarPresetsProps> = ({}) => {
  return (
    <EditorToolbarSection
      sectionName="Presets"
      sectionIcon={<FiBox />}
      sectionTabs={[
        {
          label: 'List',
          panel: <EditorPresetsList />,
        },
      ]}
    />
  );
};
export default EditorToolbarPresets;
