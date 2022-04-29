import React from 'react';
import EditorToolbarWindowControlsToggle from './editorToolbarWindowControlsToggle';
import { VStack } from '@chakra-ui/react';

interface EditorToolbarWindowControlsProps {}

const EditorToolbarWindowControls: React.FC<EditorToolbarWindowControlsProps> = ({}) => {
  return (
    <VStack spacing={2} width="full">
      {/* Enable or disable window controls */}
      <EditorToolbarWindowControlsToggle />
    </VStack>
  );
};
export default EditorToolbarWindowControls;
