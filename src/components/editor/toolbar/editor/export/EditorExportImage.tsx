import React from 'react';
import {
  Button,
  VStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSave } from 'react-icons/fa';
import domtoimage, { Options as NodeToImageOptions } from 'dom-to-image';
import {
  selectExportCustomization,
  selectFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorExportImaageExtension } from './EditorExportImageExtension';
import { DEFAULT_EXPORT_SIZE, EXPORT_SIZES_HASH } from '@lib/Constants';
import { CustomizationSlider } from '../input/CustomizationSlider';
import { EditorExportImageSize } from './EditorExportImageSize';

interface EditorExportImageProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

export const EditorExportImage: React.FC<EditorExportImageProps> = ({
  exportRef,
}) => {
  const fontCustomization = useSelector(selectFontCustomization);
  const exportCustomization = useSelector(selectExportCustomization);
  const generateImage = ({
    format = 'png',
    exportSize = EXPORT_SIZES_HASH[exportCustomization.sizeMultiplier],
  }) => {
    const REF = exportRef.current;
    const width = REF.offsetWidth;
    const height = REF.offsetHeight;

    const config: NodeToImageOptions = {
      style: {
        transform: `scale(${exportSize})`,
        transformOrigin: 'center',
        background: 'none',
      },
      quality: 2,
      filter: (n) => {
        return true;
      },
      width,
      height,
    };

    if (format === 'svg') {
      return domtoimage
        .toSvg(REF)
        .then((dataURL) =>
          dataURL
            .replace(/&nbsp;/g, '&#160;')
            // https://github.com/tsayen/dom-to-image/blob/fae625bce0970b3a039671ea7f338d05ecb3d0e8/src/dom-to-image.js#L551
            .replace(/%23/g, '#')
            .replace(/%0A/g, '\n')
            // https://stackoverflow.com/questions/7604436/xmlparseentityref-no-name-warnings-while-loading-xml-into-a-php-file
            .replace(/&(?!#?[a-z0-9]+;)/g, '&amp;')
            // remove other fonts which are not used
            .replace(
              // current font-family used
              new RegExp(
                '@font-face\\s+{\\s+font-family: (?!"*' +
                  fontCustomization.fontFamily +
                  ').*?}',
                'g'
              ),
              ''
            )
        )
        .then((uri) => uri.slice(uri.indexOf(',') + 1))
        .then((data) => new Blob([data], { type: 'image/svg+xml' }));
    }

    if (format === 'blob') {
      return domtoimage.toBlob(REF);
    }

    // Twitter and Imgur needs regular dataURLs
    return domtoimage.toPng(REF, config);
  };

  const exportImage = async (format = 'blob', options: any = {}) => {
    const link = document.createElement('a');
    const prefix = options.filename;

    return generateImage({ format })
      .then((blob) => {
        try {
          return URL.createObjectURL(blob);
        } catch (error) {
          throw error;
        }
      })
      .then((url) => {
        link.download = `${prefix}.${format === 'svg' ? 'svg' : 'png'}`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  };

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
              onClick={() => {
                exportImage(exportCustomization.fileExtension, {
                  filename: 'snapify',
                  open: false,
                });
              }}
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
