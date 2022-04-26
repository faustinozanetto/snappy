import React from 'react';
import { Wrap } from '@chakra-ui/react';
import { EditorBackground } from './editor/background/EditorBackground';
import { EditorCodeTheme } from './editor/theme/EditorCodeTheme';
import { EditorFont } from './editor/font/EditorFont';
import { EditorWindow } from './editor/window/EditorWindow';
import { EditorExportImage } from './editor/export/EditorExportImage';
import { NavbarThemeToggler } from '@components/navbar/NavbarThemeToggler';
import { EditorCode } from './editor/code/EditorCode';

interface EditorToolBarProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

export const EditorToolBar: React.FC<EditorToolBarProps> = ({ exportRef }) => {
  return (
    <Wrap spacing={4} justify='center'>
      {/* Background */}
      <EditorBackground />
      {/* Font */}
      <EditorFont />
      {/* Theme */}
      <EditorCodeTheme />
      {/* Language */}
      {/* <EditorCode /> */}
      {/* Window */}
      <EditorWindow />
      {/* Export */}
      <EditorExportImage exportRef={exportRef} />
      {/* Theme toggler */}
      <NavbarThemeToggler />
    </Wrap>
  );
};
