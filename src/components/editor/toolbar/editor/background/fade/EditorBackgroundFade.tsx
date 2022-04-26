import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import { FadeEditor } from './editor/FadeEditor';

interface EditorBackgroundFadeProps {}

export const EditorBackgroundFade: React.FC<
  EditorBackgroundFadeProps
> = ({}) => {
  return (
    <Box py={2} width='full'>
      <HStack justifyContent='space-between' width='full'>
        <Text as='h2' fontWeight={600} mb={2}>
          Fade Editor
        </Text>
      </HStack>
      {/*  */}
      <FadeEditor />
    </Box>
  );
};
