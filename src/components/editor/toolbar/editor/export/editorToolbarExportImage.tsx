import React from 'react';
import { useToast } from '@chakra-ui/react';

import {
  selectBackgroundCustomization,
  selectExportCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import { FaSave } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { FileExtension } from 'snappy.types';

import {
  copyImageToClipboard,
  handleImageGeneration,
  openImageInBrowser,
  saveImageToFile,
} from '@lib/snippet/snippetGeneration';
import ErrorResponse from '@lib/errors/errorHelpers';
import { trackEvent } from '@lib/google/googleTag';
import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorToolbarExportSnippet from './editorToolbarExportSnippet';

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
    if (exportRef && exportRef.current) {
      return handleImageGeneration(exportRef.current, exportCustomization, backgroundCustomization).then(
        async (dataUrl) => {
          try {
            if (dataUrl && exportCustomization.fileExtension) {
              trackEvent('exportSnippet', {
                fileExtension: exportCustomization.fileExtension,
                sizeMultiplier: exportCustomization.sizeMultiplier,
              });
              saveImageToFile(exportCustomization.fileExtension, dataUrl).then(() => {
                toast({
                  title: 'Image exported',
                  description: 'The image has been saved to your files.',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
              });
            }
          } catch (error) {
            if (error instanceof ErrorResponse) {
              toast({
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
            }
          }
        }
      );
    }
  };

  /**
   * Copy the image to the clipboard
   * @returns the promise of the copy to clipboard
   */
  const handleCopy = async (): Promise<void> => {
    if (exportRef && exportRef.current) {
      return handleImageGeneration(
        exportRef.current,
        { fileExtension: FileExtension.BLOB, sizeMultiplier: exportCustomization.sizeMultiplier },
        backgroundCustomization
      ).then(async (dataUrl) => {
        try {
          if (dataUrl) {
            trackEvent('copySnippet', {
              fileExtension: exportCustomization.fileExtension,
              sizeMultiplier: exportCustomization.sizeMultiplier,
            });
            copyImageToClipboard(dataUrl).then(() => {
              toast({
                title: 'Copied to clipboard',
                description: 'The image has been copied to your clipboard',
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
            });
          }
        } catch (error) {
          if (error instanceof ErrorResponse) {
            toast({
              title: 'Error',
              description: error.message,
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
    }
  };

  /**
   * Copy the image to the clipboard
   * @returns the promise of the copy to clipboard
   */
  const handleOpen = async (): Promise<void> => {
    if (exportRef && exportRef.current) {
      return handleImageGeneration(
        exportRef.current,
        { fileExtension: FileExtension.BLOB, sizeMultiplier: exportCustomization.sizeMultiplier },
        backgroundCustomization
      ).then(async (dataUrl) => {
        try {
          if (dataUrl) {
            trackEvent('openSnippet', {
              fileExtension: exportCustomization.fileExtension,
              sizeMultiplier: exportCustomization.sizeMultiplier,
            });
            openImageInBrowser(dataUrl).then(() => {
              toast({
                title: 'Image opened',
                description: 'The image has been opened in a new tab.',
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
            });
          }
        } catch (error) {
          if (error instanceof ErrorResponse) {
            toast({
              title: 'Error',
              description: error.message,
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
    }
  };

  return (
    <EditorToolbarSection
      sectionName="Export"
      sectionIcon={<FaSave />}
      sectionTabs={[
        {
          label: 'Settings',
          panel: (
            <EditorToolbarExportSnippet handleExport={handleExport} handleCopy={handleCopy} handleOpen={handleOpen} />
          ),
        },
      ]}
    />
  );
};

export default EditorToolbarExportImage;
