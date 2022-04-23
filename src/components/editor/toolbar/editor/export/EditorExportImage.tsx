import React, { useContext, useRef } from 'react';
import html2canvas from 'html2canvas';
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
import { useSelector } from 'react-redux';
import { selectCaptureRef } from '@state/SnapifyStore';
import { ExportContext } from '@state/ExportContext';

interface EditorExportImageProps {}

export const EditorExportImage: React.FC<EditorExportImageProps> = ({}) => {
  const { exportRef } = useContext(ExportContext);
  const exportAsImage = async (element, fileName) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL('image/png', 2.0);
    downloadImage(image, fileName);
  };

  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement('a');
    fakeLink.style = 'display:none;';
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
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
            <Button
              onClick={() => {
                exportAsImage(exportRef, 'test');
              }}
            >
              Export
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
