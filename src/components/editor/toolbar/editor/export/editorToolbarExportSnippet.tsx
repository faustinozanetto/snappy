import React from 'react';
import { Box } from '@chakra-ui/react';
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
    <Box width="full">
      <EditorToolbarExportImageExtension />
      <EditorToolbarExportImageSize />
      <EditorToolbarExportButtons onExport={handleExport} onCopy={handleCopy} onOpen={handleOpen} />{' '}
    </Box>
  );
};

export default EditorToolbarExportSnippet;
