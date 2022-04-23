import React from 'react';
import { BackgroundType } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { VStack } from '@chakra-ui/react';
import { EditorBackgroundColor } from './color/EditorBackgroundColor';
import { EditorBackgroundImage } from './image/EditorBackgroundImage';

interface EditorBackgroundConfigurationProps {
  backgroundType: BackgroundType;
}

export const EditorBackgroundConfiguration: React.FC<
  EditorBackgroundConfigurationProps
> = (props) => {
  const { backgroundType } = props;
  return (
    <VStack spacing={4} px={4}>
      {/* Color */}
      {backgroundType === BackgroundType.COLOR && <EditorBackgroundColor />}
      {/* Image */}
      {backgroundType === BackgroundType.IMAGE && <EditorBackgroundImage />}
    </VStack>
  );
};
