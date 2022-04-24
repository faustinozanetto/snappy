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
import {
  selectFontCustomization,
  setFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import React from 'react';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import { FaFont } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../input/CustomizationSlider';
import { EditorFontList } from './EditorFontList';

interface EditorFontProps {}

export const EditorFont: React.FC<EditorFontProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);
  return (
    <Popover placement='left-start'>
      <PopoverTrigger>
        <Button
          leftIcon={
            <span>
              <FaFont />
            </span>
          }
          aria-label='Font Customization'
          border='2px solid'
        >
          Fonts
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>Font</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          px={0}
          backgroundColor={useColorModeValue('gray.100', 'gray.800')}
        >
          <VStack spacing={4} px={4}>
            {/* Font list. */}
            <EditorFontList />
            {/* Font Size */}
            <CustomizationSlider
              label='Font Size'
              range={[8, 30]}
              defaultValue={fontCustomization.fontSize}
              valueType='px'
              onUpdated={(value) =>
                dispatch(setFontCustomization({ fontSize: value }))
              }
            />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
