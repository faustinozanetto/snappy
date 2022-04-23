import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuList,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackgroundType,
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from 'state/slices/toolbar/ToolbarEditorCustomization.slice';
import { EditorBackgroundConfiguration } from './EditorBackgroundConfiguration';

interface EditorBackgroundProps {}

export const EditorBackground: React.FC<EditorBackgroundProps> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  return (
    <Menu placement='left-start'>
      <Tooltip label='Background' aria-label='Background Customization'>
        <MenuButton
          as={Button}
          aria-label='Background Customization'
          background={backgroundCustomization.backgroundColor}
          _hover={{ bg: backgroundCustomization.backgroundColor }}
          _focus={{ bg: backgroundCustomization.backgroundColor }}
          _active={{ bg: backgroundCustomization.backgroundColor }}
          border='2px solid'
        />
      </Tooltip>
      <MenuList>
        {/* Color && Image Buttons */}
        <MenuGroup>
          <HStack justify='center' px={4}>
            <Button
              width='50%'
              onClick={() =>
                dispatch(
                  setBackgroundCustomization({
                    backgroundType: BackgroundType.COLOR,
                  })
                )
              }
            >
              Color
            </Button>
            <Button
              width='50%'
              onClick={() =>
                dispatch(
                  setBackgroundCustomization({
                    backgroundType: BackgroundType.IMAGE,
                  })
                )
              }
            >
              Image
            </Button>
          </HStack>
        </MenuGroup>
        <MenuDivider />
        {/* Actual Configuration */}
        <MenuGroup>
          <EditorBackgroundConfiguration
            backgroundType={backgroundCustomization.backgroundType}
          />
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
