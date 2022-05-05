import React from 'react';
import { VStack } from '@chakra-ui/react';

import EditorToolbarWindowControlsToggle from './editorToolbarWindowControlsToggle';

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
