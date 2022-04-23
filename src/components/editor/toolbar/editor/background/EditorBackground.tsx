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
  PopoverTrigger,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
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
    <Popover placement='left-start' >
      <Tooltip label='Background' aria-label='Background Customization'>
        <PopoverTrigger>
          <Button
            aria-label='Background Customization'
            background={backgroundCustomization.backgroundColor}
            _hover={{ bg: backgroundCustomization.backgroundColor }}
            _focus={{ bg: backgroundCustomization.backgroundColor }}
            _active={{ bg: backgroundCustomization.backgroundColor }}
            border='2px solid'
          />
        </PopoverTrigger>
      </Tooltip>
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
