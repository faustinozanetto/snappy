import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackgroundType,
  selectBackgroundType,
  setBackgroundType,
} from 'state/slices/toolbar/ToolbarEditorCustomization.slice';

interface ToolBoxEditorBackgroundProps {}

export const ToolBoxEditorBackground: React.FC<
  ToolBoxEditorBackgroundProps
> = ({}) => {
  const dispatch = useDispatch();
  const backgroundType = useSelector(selectBackgroundType);

  return (
    <Menu isLazy placement='left-start'>
      <MenuButton
        as={Button}
        aria-label='Background Customization'
        border='2px solid'
      />
      <MenuList>
        {/* Color && Image Buttons */}
        <MenuGroup>
          <HStack
            justify='center
        '
            px={4}
          >
            <Button
              width='50%'
              onClick={() => dispatch(setBackgroundType(BackgroundType.COLOR))}
            >
              Color
            </Button>
            <Button
              width='50%'
              onClick={() => dispatch(setBackgroundType(BackgroundType.IMAGE))}
            >
              Image
            </Button>
          </HStack>
        </MenuGroup>
        {/* Actual Configuration */}
        <MenuGroup>
          <VStack py={4}>
            {/* Color */}
            {backgroundType === BackgroundType.COLOR && (
              <h1>Color customization</h1>
            )}
            {/* Image */}
            {backgroundType === BackgroundType.IMAGE && (
              <h1>Image customization</h1>
            )}
          </VStack>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
