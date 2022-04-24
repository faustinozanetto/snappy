import React from 'react';
import {
  Box,
  Divider,
  Flex,
  HStack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { EditorBackground } from './editor/background/EditorBackground';
import { EditorCode } from './editor/code/EditorCode';
import { EditorCodeTheme } from './editor/theme/EditorCodeTheme';
import { EditorFont } from './editor/font/EditorFont';
import { EditorWindow } from './editor/window/EditorWindow';
import { EditorExportImage } from './editor/export/EditorExportImage';

interface EditorToolBarProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

export const EditorToolBar: React.FC<EditorToolBarProps> = ({ exportRef }) => {
  return (
    <HStack spacing={4}>
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
    </HStack>
  );
};
