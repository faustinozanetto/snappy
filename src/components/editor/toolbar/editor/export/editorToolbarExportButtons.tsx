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
    <HStack width="full" my={4}>
      <Button onClick={onExport} colorScheme="brand" width="100%">
        Export
      </Button>

      <Button onClick={onCopy} colorScheme="brand" width="100%">
        Copy
      </Button>
      <Button onClick={onOpen} colorScheme="brand" width="100%">
        Open
      </Button>
    </HStack>
  );
};
export default EditorToolbarExportButtons;
