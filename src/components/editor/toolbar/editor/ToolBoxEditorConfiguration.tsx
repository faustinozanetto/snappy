import React from 'react';
import { HStack } from '@chakra-ui/react';
import { selectBackgroundType } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorBackground } from './background/EditorBackground';
import { EditorCodeLanguage } from './code/language/EditorCodeLanguage';
import { EditorCodeTheme } from './code/theme/EditorCodeTheme';
import { EditorFont } from './font/EditorFont';
import { EditorWindow } from './window/EditorWindow';

interface ToolBoxEditorConfigurationProps {}

export const ToolBoxEditorConfiguration: React.FC<
  ToolBoxEditorConfigurationProps
> = ({}) => {
  const backgroundType = useSelector(selectBackgroundType);
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
