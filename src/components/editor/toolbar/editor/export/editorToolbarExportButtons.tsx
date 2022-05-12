import React from 'react';
import Button from '@components/ui/button/button';
import { HStack } from '@chakra-ui/react';

interface EditorToolbarExportButtonsProps {
  /** Called when export button is clicked. */
  onExport: () => void;
  /** Called when import button is clicked. */
  onCopy: () => void;
  /** Called when open button is clicked */
  onOpen: () => void;
}

const EditorToolbarExportButtons: React.FC<EditorToolbarExportButtonsProps> = (props) => {
  const { onExport, onCopy, onOpen } = props;
  return (
    <HStack width="full" mt={4}>
      <Button aria-label="Export Image" onClick={onExport} colorScheme="brand" variant="outline" width="100%">
        Export
      </Button>
      <Button aria-label="Copy Image" onClick={onCopy} colorScheme="brand" variant="outline" width="100%">
        Copy
      </Button>
      <Button aria-label="Open Image" onClick={onOpen} colorScheme="brand" variant="outline" width="100%">
        Open
      </Button>
    </HStack>
  );
};
export default EditorToolbarExportButtons;
