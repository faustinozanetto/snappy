import { HStack } from '@chakra-ui/react';
import Button from '@components/ui/button';
import React from 'react';

interface EditorToolbarExportButtonsProps {
  /** Called when export button is clicked. */
  onExport: () => void;
  /** Called when import button is clicked. */
  onCopy: () => void;
}

const EditorToolbarExportButtons: React.FC<EditorToolbarExportButtonsProps> = (props) => {
  const { onExport, onCopy } = props;
  return (
    <HStack pt={6} width="full">
      <Button onClick={onExport} colorScheme="blue" width="100%">
        Export
      </Button>

      <Button onClick={onCopy} colorScheme="green" width="100%">
        Copy
      </Button>
    </HStack>
  );
};
export default EditorToolbarExportButtons;
