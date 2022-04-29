import React, { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import { FaSave } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import EditorToolbarExportImageExtension from './editorToolbarExportImageExtension';
import { toBlob, toJpeg, toPng, toSvg } from 'html-to-image';
import EditorToolbarExportImageSize from './editorToolbarExportImageSize';
import { Options } from 'html-to-image/lib/options';
import EditorToolbarExportButtons from './editorToolbarExportButtons';
import EditorToolbarSection from '../../base/editorToolbarSection';
import {
  selectExportCustomization,
  selectBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import { FileExtension, BackgroundType } from 'snappy.types';

interface EditorExportImageProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

const EditorToolbarExportImage: React.FC<EditorExportImageProps> = ({ exportRef }) => {
  const toast = useToast();
  const exportCustomization = useSelector(selectExportCustomization);
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  /**
   * Generates the actual image using the correct quality and styling.
   */
  const handleImageGeneration = useCallback(
    async (extension: FileExtension = FileExtension.PNG, quality: number = 1) => {
      if (exportRef.current === null) {
        return;
      }
      const scale = window.devicePixelRatio * quality;

      const width = exportRef.current.offsetWidth;
      const height = exportRef.current.offsetHeight;

      const backgroundColor: string = `rgb(${backgroundCustomization.backgroundColor.r}, ${backgroundCustomization.backgroundColor.g}, ${backgroundCustomization.backgroundColor.b})`;

      const OPTIONS: Options = {
        style: {
          // transform: `scale(${quality})`,
          transformOrigin: 'top left',
          backgroundOrigin: 'border-box',
          backgroundSize: 'cover',
          backgroundPosition: '0% 0%',
          background:
            backgroundCustomization.backgroundType === BackgroundType.COLOR
              ? backgroundColor
              : backgroundCustomization.backgroundImage,
        },
        filter: (n) => {
          if (n.className) {
            const className = String(n.className);
            if (className.includes('eliminateOnRender')) {
              return false;
            }
            if (className.includes('CodeMirror-cursors')) {
              return false;
            }
          }
          return true;
        },
        quality,
        width,
        height,
      };

      // PNG
      if (extension === FileExtension.PNG) {
        return await toPng(exportRef.current, OPTIONS);
      }
      // SVG
      if (extension === FileExtension.SVG) {
        return await toSvg(exportRef.current, OPTIONS);
      }
      // JPEG
      if (extension === FileExtension.JPEG) {
        return await toJpeg(exportRef.current, OPTIONS);
      }
      // BLOB
      if (extension === FileExtension.BLOB) {
        return await toBlob(exportRef.current, OPTIONS);
      }
    },
    [exportRef]
  );

  /**
   * Tries to create an a element for the image and click it to trigger the download.
   * @param extension extension of the file.
   * @param dataUrl url from the generated image.
   */
  const saveImageToFile = (extension: FileExtension, dataUrl: string | Blob) => {
    const link = document.createElement('a');
    const NAME = 'snappy';
    link.download = `${NAME}.${extension}`;
    link.href = dataUrl as string;
    link.click();
  };

  /**
   * Asks for permission and creates the clipboard object with the image data and then tries to copy it to the clipboard.
   * @param dataUrl url from the generated image.
   */
  const copyImageToClipboard = (dataUrl: string | Blob) => {
    const IS_FIREFOX: boolean = !(navigator.userAgent.indexOf('Firefox') < 0);
    if (!IS_FIREFOX) {
      navigator.permissions
        // @ts-ignore
        .query({ name: 'clipboard-write' })
        .then(async (result) => {
          if (result.state === 'granted') {
            const type = 'image/png';
            let data = [new ClipboardItem({ [type]: dataUrl })];
            await navigator.clipboard
              .write(data)
              .then(() =>
                toast({
                  title: 'Success',
                  description: 'Snippet coppied to clipboard.',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                })
              )
              .catch(() => {
                toast({
                  title: 'Error',
                  description: 'An error occurrred :/.',
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                });
              });
          }
        });
    }
  };
  //

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
              <EditorToolbarExportButtons
                onExport={async () =>
                  await handleImageGeneration(
                    exportCustomization.fileExtension,
                    exportCustomization.sizeMultiplier
                  ).then((dataUrl) => saveImageToFile(exportCustomization.fileExtension, dataUrl))
                }
                onCopy={async () =>
                  await handleImageGeneration(FileExtension.BLOB, exportCustomization.sizeMultiplier).then((dataUrl) =>
                    copyImageToClipboard(dataUrl)
                  )
                }
              />
            </>
          ),
        },
      ]}
    />
  );
};

export default EditorToolbarExportImage;
