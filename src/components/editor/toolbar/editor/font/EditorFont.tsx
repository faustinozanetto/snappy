import {
  Menu,
  MenuButton,
  Button,
  Text,
  MenuList,
  IconButton,
  Tooltip,
  VStack,
  MenuGroup,
  MenuDivider,
  Divider,
  MenuItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  selectFontCustomization,
  setFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import React from 'react';
import { FaFont } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../input/CustomizationSlider';
import { EditorFontList } from './EditorFontList';
import { EditorFontSize } from './EditorFontSize';

interface EditorFontProps {}

export const EditorFont: React.FC<EditorFontProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);
  return (
    <Popover placement='left-start'>
      <Tooltip label='Fonts' aria-label='Background Customization'>
        <PopoverTrigger>
          <IconButton
            icon={
              <span>
                <FaFont />
              </span>
            }
            aria-label='Font Customization'
            border='2px solid'
          />
        </PopoverTrigger>
      </Tooltip>
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
