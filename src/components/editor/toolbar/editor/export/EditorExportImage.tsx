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
                  <Box pt={6} width='full'>
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
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
