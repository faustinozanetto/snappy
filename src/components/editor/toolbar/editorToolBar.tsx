import React from 'react';
import { Wrap } from '@chakra-ui/react';

import ThemeToggler from '@components/theming/themeToggler';
import EditorToolbarBackground from './editor/background/editorToolbarBackground';
import EditorToolbarCode from './editor/code/editorToolbarCode';
import EditorToolbarExportImage from './editor/export/editorToolbarExportImage';
import EditorToolbarFont from './editor/font/editorToolbarFont';
import EditorToolbarPresets from './editor/presets/editorToolbarPresets';
import EditorToolbarWindow from './editor/window/editorToolbarWindow';

interface EditorToolBarProps {
  /** Ref used when exporting the image. */
  exportRef: React.RefObject<HTMLDivElement>;
}

const EditorToolBar: React.FC<EditorToolBarProps> = ({ exportRef }) => {
  return (
    <Wrap spacing={4} justify="center">
      {/* Background */}
      <EditorToolbarBackground />
      {/* Font */}
      <EditorToolbarFont />
      {/* Language */}
      <EditorToolbarCode />
      {/* Window */}
      <EditorToolbarWindow />
      {/* Presets */}
      <EditorToolbarPresets />
      {/* Export */}
      <EditorToolbarExportImage exportRef={exportRef} />
      {/* Theme toggler */}
      <ThemeToggler />
    </Wrap>
  );
};

export default EditorToolBar;
