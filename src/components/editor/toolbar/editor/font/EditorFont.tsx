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
    <Menu placement='left-start'>
      <Tooltip label='Fonts' aria-label='Background Customization'>
        <MenuButton
          as={IconButton}
          icon={
            <span>
              <FaFont />
            </span>
          }
          aria-label='Background Customization'
          border='2px solid'
        />
      </Tooltip>
      <MenuList>
        <MenuGroup>
          <VStack px={2}>
            {/* Font list. */}
            <MenuItem>
              <EditorFontList />
            </MenuItem>
            <MenuDivider />
            {/* Font Size */}
            <MenuItem>
              <CustomizationSlider
                label='Font Size'
                range={[8, 32]}
                defaultValue={fontCustomization.fontSize}
                valueType='px'
                onUpdated={(value) =>
                  dispatch(setFontCustomization({ fontSize: value }))
                }
              />
            </MenuItem>
          </VStack>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
