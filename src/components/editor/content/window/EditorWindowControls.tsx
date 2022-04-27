import { Box, Grid, HStack, Input } from '@chakra-ui/react';
import React from 'react';
import { EditorWindowControlsIcons } from './EditorWindowControlsIcons';

interface EditorWindowControlsProps {
  titleColor?: string;
}

export const EditorWindowControls: React.FC<EditorWindowControlsProps> = ({ titleColor = '#fff' }) => {
  return (
    <Box position={'relative'} top={'50px'} mx={6} my={4} textAlign={'initial'} zIndex={2}>
      {/* Window Controls Icons */}
      <EditorWindowControlsIcons />
      {/* Window Title */}
      <Box position={'absolute'} top={'-15px'} margin={0} width={'100%'} textAlign={'center'}>
        <Input
          type="text"
          defaultValue={'Window Title'}
          color={titleColor}
          maxLength={60}
          fontWeight={'bold'}
          fontSize={'md'}
          textAlign={'center'}
          outline={'none'}
          border={'none'}
          _focus={{
            border: 'none',
            outline: 'none',
          }}
        />
      </Box>
    </Box>
  );
};
