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
import { Options as NodeToImageOptions } from 'dom-to-image';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import {
  selectExportCustomization,
  selectFontCustomization,
  FileExtension,
  selectBackgroundCustomization,
  BackgroundType,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorExportImaageExtension } from './EditorExportImageExtension';
import { EXPORT_SIZES_HASH } from '@lib/Constants';
import { toJpeg, toPng, toSvg } from 'html-to-image';
import { EditorExportImageSize } from './EditorExportImageSize';
import domtoimage from '../../../../../lib/DomToImage.js';

interface EditorExportImageProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

export const EditorExportImage: React.FC<EditorExportImageProps> = ({
  exportRef,
}) => {
  const exportCustomization = useSelector(selectExportCustomization);
  const fontCustomization = useSelector(selectFontCustomization);
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  const onButtonClick = useCallback(async () => {
    if (exportRef.current === null) {
      return;
    }

    await toPng(exportRef.current, {})
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [exportRef]);

  const generateImage = async (
    format: FileExtension,
    exportSize = EXPORT_SIZES_HASH[exportCustomization.sizeMultiplier]
  ) => {
    const REF = exportRef.current;
    const width = REF.offsetWidth;
    const height = REF.offsetHeight;
    exportSize = EXPORT_SIZES_HASH[exportCustomization.sizeMultiplier];
    console.log({ width, height, exportSize });

    const config: NodeToImageOptions = {
      width,
      height,
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
      style: {
        transform: `scale(${exportSize})`,
        'transform-origin': 'center',
        background:
          backgroundCustomization.backgroundType === BackgroundType.COLOR
            ? backgroundCustomization.backgroundColor
            : 'none',
      },
    };

    if (format === 'svg') {
      return domtoimage
        .toSvg(REF, config)
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

    // Twitter and Imgur needs regular dataURLs
    const data = await domtoimage.toPng(REF, config);
    console.log(data);
    return data;
  };

  const exportImage = async (format: FileExtension, options: any = {}) => {
    const link = document.createElement('a');
    const prefix = options.filename;

    return await generateImage(format)
      .then((blob) => {
        const BLOB = new Blob([blob], { type: 'image/png' });
        return URL.createObjectURL(BLOB);
      })
      .then((url) => {
        link.download = prefix + '.' + format;
        link.href = url;
        //link.target = '_blank';
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
            <Button onClick={onButtonClick} colorScheme='blue' width='100%'>
              Export
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
