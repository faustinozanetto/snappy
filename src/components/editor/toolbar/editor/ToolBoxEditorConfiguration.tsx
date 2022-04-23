import { HStack } from '@chakra-ui/react';
import { selectBackgroundType } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import React from 'react';
import { useSelector } from 'react-redux';
import { ToolBoxEditorBackground } from './ToolBoxEditorBackground';

interface ToolBoxEditorConfigurationProps {}

export const ToolBoxEditorConfiguration: React.FC<
  ToolBoxEditorConfigurationProps
> = ({}) => {
  const backgroundType = useSelector(selectBackgroundType);
  return (
    <HStack spacing={4}>
      {/* Background */}
      <ToolBoxEditorBackground />
      <h1>{backgroundType.toString()}</h1>
    </HStack>
  );
};
