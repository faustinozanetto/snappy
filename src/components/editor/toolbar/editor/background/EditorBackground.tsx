import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackgroundType,
  selectBackgroundColor,
  selectBackgroundType,
  setBackgroundType,
} from 'state/slices/toolbar/ToolbarEditorCustomization.slice';
import { EditorBackgroundConfiguration } from './EditorBackgroundConfiguration';

interface EditorBackgroundProps {}

export const EditorBackground: React.FC<EditorBackgroundProps> = ({}) => {
  const dispatch = useDispatch();
  const backgroundType = useSelector(selectBackgroundType);
  const backgroundColor = useSelector(selectBackgroundColor);

  return (
    <Tooltip>
      <Menu isLazy placement='left-start'>
        <MenuButton
          as={Button}
          aria-label='Background Customization'
          background={backgroundColor}
          _hover={{ bg: backgroundColor }}
          _focus={{ bg: backgroundColor }}
          _active={{ bg: backgroundColor }}
          border='2px solid'
        />
        <MenuList>
          {/* Color && Image Buttons */}
          <MenuGroup>
            <HStack justify='center' px={4}>
              <Button
                width='50%'
                onClick={() =>
                  dispatch(setBackgroundType(BackgroundType.COLOR))
                }
              >
                Color
              </Button>
              <Button
                width='50%'
                onClick={() =>
                  dispatch(setBackgroundType(BackgroundType.IMAGE))
                }
              >
                Image
              </Button>
            </HStack>
          </MenuGroup>
          <MenuDivider />
          {/* Actual Configuration */}
          <MenuGroup>
            <EditorBackgroundConfiguration backgroundType={backgroundType} />
          </MenuGroup>
        </MenuList>
      </Menu>
    </Tooltip>
  );
};
