import React from 'react';
import { BackgroundType } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { VStack } from '@chakra-ui/react';
import { EditorBackgroundColor } from './EditorBackgroundColor';

interface EditorBackgroundConfigurationProps {
  backgroundType: BackgroundType;
}

export const EditorBackgroundConfiguration: React.FC<
  EditorBackgroundConfigurationProps
> = (props) => {
  const { backgroundType } = props;
  return (
    <VStack>
      {/* Color */}
      {backgroundType === BackgroundType.COLOR && <EditorBackgroundColor />}
      {/* Image */}
      {backgroundType === BackgroundType.IMAGE && <h1>Image customization</h1>}
    </VStack>
  );
};
