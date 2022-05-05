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
      <Button onClick={onExport} colorScheme="blue" width="100%" variant="outline">
        Export
      </Button>

      <Button onClick={onCopy} colorScheme="green" width="100%" variant="outline">
        Copy
      </Button>
      <Button onClick={onOpen} colorScheme="purple" width="100%" variant="outline">
        Open
      </Button>
    </HStack>
  );
};
export default EditorToolbarExportButtons;
