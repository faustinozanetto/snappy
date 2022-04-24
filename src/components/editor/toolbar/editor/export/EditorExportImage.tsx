import React, { useCallback } from 'react';
import {
  Button,
  VStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSave } from 'react-icons/fa';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import {
  selectExportCustomization,
  FileExtension,
  selectBackgroundCustomization,
  BackgroundType,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorExportImaageExtension } from './EditorExportImageExtension';
import { toJpeg, toPng, toSvg } from 'html-to-image';
import { EditorExportImageSize } from './EditorExportImageSize';
import { Options } from 'html-to-image/lib/options';

interface EditorExportImageProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

export const EditorExportImage: React.FC<EditorExportImageProps> = ({
  exportRef,
}) => {
  const exportCustomization = useSelector(selectExportCustomization);
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  const onButtonClick = useCallback(
    async (
      extension: FileExtension = FileExtension.PNG,
      quality: number = 1
    ) => {
      if (exportRef.current === null) {
        return;
      }

      const width = exportRef.current.offsetWidth * quality;
      const height = exportRef.current.offsetHeight * quality;

      const backgroundColor: string = `rgb(${backgroundCustomization.backgroundColor.r}, ${backgroundCustomization.backgroundColor.g}, ${backgroundCustomization.backgroundColor.b})`;

      const OPTIONS: Options = {
        style: {
          transform: `scale(${quality})`,
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
        width,
        height,
      };

      // PNG
      if (extension === FileExtension.PNG) {
        await toPng(exportRef.current, OPTIONS)
          .then((dataUrl) => {
            const link = document.createElement('a');
            const NAME = 'snappy';
            const EXTENSION = 'png';
            link.download = `${NAME}.${EXTENSION}`;
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      }

      // SVG
      if (extension === FileExtension.SVG) {
        await toSvg(exportRef.current, OPTIONS).then((dataUrl) => {
          const link = document.createElement('a');
          const NAME = 'snappy';
          const EXTENSION = 'svg';
          link.download = `${NAME}.${EXTENSION}`;
          link.href = dataUrl;
          link.click();
        });
      }
      // JPEG
      if (extension === FileExtension.JPEG) {
        await toJpeg(exportRef.current, OPTIONS).then((dataUrl) => {
          const link = document.createElement('a');
          const NAME = 'snappy';
          const EXTENSION = 'jpeg';
          link.download = `${NAME}.${EXTENSION}`;
          link.href = dataUrl;
          link.click();
        });
      }
    },
    [exportRef]
  );

  return (
    <Popover placement='left-start'>
      <PopoverTrigger>
        <Button
          leftIcon={
            <span>
              <FaSave />
            </span>
          }
          aria-label='Export Customization'
          border='2px solid'
        >
          Export
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>Export</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          px={0}
          backgroundColor={useColorModeValue('gray.100', 'gray.800')}
        >
          <VStack spacing={4} px={4}>
            {/* File Extension */}
            <EditorExportImaageExtension />
            {/* Size Multiplier */}
            <EditorExportImageSize />
            <Button
              onClick={() =>
                onButtonClick(
                  exportCustomization.fileExtension,
                  exportCustomization.sizeMultiplier
                )
              }
              colorScheme='blue'
              width='100%'
            >
              Export
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
