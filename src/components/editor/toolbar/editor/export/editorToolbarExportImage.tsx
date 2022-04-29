import React from 'react';
import { useToast } from '@chakra-ui/react';
import { FaSave } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import EditorToolbarExportImageExtension from './editorToolbarExportImageExtension';
import EditorToolbarExportImageSize from './editorToolbarExportImageSize';
import EditorToolbarExportButtons from './editorToolbarExportButtons';
import EditorToolbarSection from '../../base/editorToolbarSection';
import {
  selectExportCustomization,
  selectBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import { FileExtension } from 'snappy.types';
import {
  copyImageToClipboard,
  handleImageGeneration,
  openImageInBrowser,
  saveImageToFile,
} from '@lib/snippet/snippetGeneration';

interface EditorExportImageProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

const EditorToolbarExportImage: React.FC<EditorExportImageProps> = ({ exportRef }) => {
  const toast = useToast();
  const exportCustomization = useSelector(selectExportCustomization);
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  /**
   * Called when export button is clicked.
   * @returns The promise of the image generation
   */
  const handleExport = async (): Promise<void> => {
    return await handleImageGeneration(exportRef.current, exportCustomization, backgroundCustomization).then(
      async (dataUrl) =>
        await saveImageToFile(exportCustomization.fileExtension, dataUrl)
          .then(() => {
            toast({
              title: 'Image exported',
              description: 'The image has been saved to your files.',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
          })
          .catch((error) => {
            toast({
              title: 'Error',
              description: error.message,
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          })
    );
  };

  /**
   * Copy the image to the clipboard
   * @returns the promise of the copy to clipboard
   */
  const handleCopy = async (): Promise<void> => {
    return await handleImageGeneration(
      exportRef.current,
      { fileExtension: FileExtension.BLOB, sizeMultiplier: exportCustomization.sizeMultiplier },
      backgroundCustomization
    ).then(
      async (dataUrl) =>
        await copyImageToClipboard(dataUrl)
          .then(() => {
            toast({
              title: 'Copied to clipboard',
              description: 'The image has been copied to your clipboard',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
          })
          .catch((error) => {
            toast({
              title: 'Error',
              description: error.message,
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          })
    );
  };

  /**
   * Copy the image to the clipboard
   * @returns the promise of the copy to clipboard
   */
  const handleOpen = async (): Promise<void> => {
    return await handleImageGeneration(
      exportRef.current,
      { fileExtension: FileExtension.BLOB, sizeMultiplier: exportCustomization.sizeMultiplier },
      backgroundCustomization
    ).then(
      async (dataUrl) =>
        await openImageInBrowser(dataUrl)
          .then(() => {
            toast({
              title: 'Image opened',
              description: 'The image has been opened in a new tab.',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
          })
          .catch((error) => {
            toast({
              title: 'Error',
              description: error.message,
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          })
    );
  };

  return (
    <EditorToolbarSection
      sectionName="Export"
      sectionIcon={<FaSave />}
      sectionTabs={[
        {
          label: 'Settings',
          panel: (
            <>
              <EditorToolbarExportImageExtension />
              <EditorToolbarExportImageSize />
              <EditorToolbarExportButtons onExport={handleExport} onCopy={handleCopy} onOpen={handleOpen} />
            </>
          ),
        },
      ]}
    />
  );
};

export default EditorToolbarExportImage;
