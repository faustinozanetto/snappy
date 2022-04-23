import React from 'react';
import { HStack } from '@chakra-ui/react';
import { EditorBackground } from './background/EditorBackground';
import { EditorCodeLanguage } from './code/language/EditorCodeLanguage';
import { EditorCodeTheme } from './code/theme/EditorCodeTheme';
import { EditorFont } from './font/EditorFont';
import { EditorWindow } from './window/EditorWindow';

interface ToolBoxEditorConfigurationProps {}

export const ToolBoxEditorConfiguration: React.FC<
  ToolBoxEditorConfigurationProps
> = ({}) => {
  return (
    <HStack spacing={4}>
      {/* Background */}
      <EditorBackground />
      {/* Font */}
      <EditorFont />
      {/* Theme */}
      <EditorCodeTheme />
      {/* Language */}
      <EditorCodeLanguage />
      {/* Window */}
      <EditorWindow />
    </HStack>
  );
};
