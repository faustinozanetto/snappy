import React from 'react';
import { VStack } from '@chakra-ui/react';
import EditorToolbarExportButtons from './editorToolbarExportButtons';
import EditorToolbarExportImageExtension from './editorToolbarExportImageExtension';
import EditorToolbarExportImageSize from './editorToolbarExportImageSize';

interface EditorToolbarExportSnippetProps {
  handleExport: () => void;
  handleCopy: () => void;
  handleOpen: () => void;
}

const EditorToolbarExportSnippet: React.FC<EditorToolbarExportSnippetProps> = (props) => {
  const { handleExport, handleCopy, handleOpen } = props;
  return (
    <VStack display="flex" spacing={4}>
      {/* <EditorToolbarExportImageSize /> */}
      <EditorToolbarExportImageExtension />
      <EditorToolbarExportButtons onExport={handleExport} onCopy={handleCopy} onOpen={handleOpen} />{' '}
    </VStack>
  );
};

export default EditorToolbarExportSnippet;
