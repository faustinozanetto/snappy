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
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSave } from 'react-icons/fa';
import domtoimage, { Options as NodeToImageOptions } from 'dom-to-image';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import {
  selectExportCustomization,
  selectFontCustomization,
  FileExtension,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorExportImaageExtension } from './EditorExportImageExtension';
import { DEFAULT_EXPORT_SIZE, EXPORT_SIZES_HASH } from '@lib/Constants';
import { CustomizationSlider } from '../input/CustomizationSlider';
import { toJpeg, toPng, toSvg } from 'html-to-image';
import { EditorExportImageSize } from './EditorExportImageSize';

interface EditorExportImageProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

export const EditorExportImage: React.FC<EditorExportImageProps> = ({
  exportRef,
}) => {
  const fontCustomization = useSelector(selectFontCustomization);
  const exportCustomization = useSelector(selectExportCustomization);
  const generateImage = (
    format: FileExtension,
    exportSize = EXPORT_SIZES_HASH[exportCustomization.sizeMultiplier]
  ) => {
    const REF = exportRef.current;
    const width = REF.offsetWidth;
    const height = REF.offsetHeight;

    const config: NodeToImageOptions = {
      quality: 3,
      // style: {
      //   transform: `scale(${exportSize.value})`,
      // },
      style: {},
      cacheBust: true,
      width,
      height,
    };

    if (format === 'svg') {
      return toSvg(REF, config);
    }

    if (format === 'jpeg') {
      return toJpeg(REF, config);
    }
    // Twitter and Imgur needs regular dataURLs
    return toPng(REF, config);
  };

  const exportImage = async (format: FileExtension, options: any = {}) => {
    const link = document.createElement('a');
    const prefix = options.filename;

    return generateImage(format).then((dataURL) => {
      link.download = prefix + '.' + format;
      link.href = dataURL;
      link.click();
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
