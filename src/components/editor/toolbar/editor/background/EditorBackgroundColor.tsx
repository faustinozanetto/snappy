import React, { useState } from 'react';
import { Flex, Input, useColorModeValue } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { SketchPicker } from 'react-color';
import {
  selectBackgroundColor,
  setBackgroundColor,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

interface EditorBackgroundColorProps {}

export const EditorBackgroundColor: React.FC<
  EditorBackgroundColorProps
> = ({}) => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector(selectBackgroundColor);
  return (
    <Flex width='full'>
      <SketchPicker
        color={backgroundColor}
        onChange={(color) => dispatch(setBackgroundColor(color.hex))}
      />
    </Flex>
  );
};
