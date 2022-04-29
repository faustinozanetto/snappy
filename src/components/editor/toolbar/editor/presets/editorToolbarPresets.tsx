import React from 'react';
import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorPresetsList from './editorToolbarPresetsList';
import { FiBox } from 'react-icons/fi';

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
