import React from 'react';
import {
  Button,
  HStack,
  Text,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { PopoverTrigger } from '../popover/PopoverTrigger';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackgroundType,
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from 'state/slices/toolbar/ToolbarEditorCustomization.slice';
import { EditorBackgroundConfiguration } from './EditorBackgroundConfiguration';
import { parseBackgroundColor } from '@lib/HelperFunctions';

interface EditorBackgroundProps {}

export const EditorBackground: React.FC<EditorBackgroundProps> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  const buttonShadow = (): string => {
    const BASE_COLOR = backgroundCustomization.backgroundColor;
    const SHADOW_COLOR = `rgba(${BASE_COLOR?.r}, ${BASE_COLOR?.g}, ${BASE_COLOR?.b}, 0.5)`;

    return `3px 5px 34px -4px ${SHADOW_COLOR}`;
  };

  return (
    <Popover placement='left-start'>
      <PopoverTrigger>
        <Button
          background={parseBackgroundColor(
            backgroundCustomization.backgroundColor
          )}
          shadow={buttonShadow()}
          _hover={{ bg: backgroundCustomization.backgroundColor }}
          _focus={{ bg: backgroundCustomization.backgroundColor }}
          _active={{ bg: backgroundCustomization.backgroundColor }}
          border='2px solid'
        >
          Background
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>
          <HStack>
            {/* Color && Image Buttons */}
            <Button
              variant='ghost'
              colorScheme='telegram'
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
              variant='ghost'
              colorScheme='telegram'
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
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          px={0}
          backgroundColor={useColorModeValue('gray.100', 'gray.800')}
        >
          {/* Background customization */}
          <EditorBackgroundConfiguration
            backgroundType={backgroundCustomization.backgroundType}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
