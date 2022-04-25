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
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  HStack,
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
import { toBlob, toJpeg, toPng, toSvg } from 'html-to-image';
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

  const handleImageGeneration = useCallback(
    async (
      extension: FileExtension = FileExtension.PNG,
      quality: number = 1
    ) => {
      if (exportRef.current === null) {
        return;
      }

      const width = exportRef.current.offsetWidth;
      const height = exportRef.current.offsetHeight;

      const backgroundColor: string = `rgb(${backgroundCustomization.backgroundColor.r}, ${backgroundCustomization.backgroundColor.g}, ${backgroundCustomization.backgroundColor.b})`;

      const OPTIONS: Options = {
        style: {
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

  const saveImageToFile = (
    extension: FileExtension,
    dataUrl: string | Blob
  ) => {
    if (dataUrl === typeof 'string') {
      const link = document.createElement('a');
      const NAME = 'snappy';

      link.download = `${NAME}.${extension}`;
      link.href = dataUrl;
      link.click();
    }
  };

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
            console.log({ data });
            await navigator.clipboard
              .write(data)
              .then(() => console.log('Copied to clipboard'))
              .catch((err) => console.log(err));
          }
        });
    }
  };

  return (
    <Flex justifyContent='center' mt={4}>
      <Popover isLazy placement='bottom'>
        <PopoverTrigger>
          <Button
            leftIcon={
              <span>
                <FaSave />
              </span>
            }
            w='fit-content'
            aria-label='Export Customization'
            border='2px solid'
          >
            Export
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: 'none' }}>
          <PopoverArrow />
          <PopoverBody
            w='full'
            backgroundColor={useColorModeValue('gray.100', 'gray.800')}
          >
            <Tabs isLazy isFitted colorScheme='blue'>
              <TabList>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize='xs'
                  fontWeight='bold'
                  w='50%'
                >
                  Export
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* File Extension */}
                  <EditorExportImaageExtension />
                  {/* Size Multiplier */}
                  <EditorExportImageSize />
                  <HStack pt={6} width='full'>
                    <Button
                      onClick={async () =>
                        await handleImageGeneration(
                          exportCustomization.fileExtension,
                          exportCustomization.sizeMultiplier
                        ).then((dataUrl) =>
                          saveImageToFile(
                            exportCustomization.fileExtension,
                            dataUrl
                          )
                        )
                      }
                      colorScheme='blue'
                      width='100%'
                    >
                      Export
                    </Button>

                    <Button
                      onClick={async () =>
                        await handleImageGeneration(
                          FileExtension.BLOB,
                          exportCustomization.sizeMultiplier
                        ).then((dataUrl) => copyImageToClipboard(dataUrl))
                      }
                      colorScheme='green'
                      width='100%'
                    >
                      Copy
                    </Button>
                  </HStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
