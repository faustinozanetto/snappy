import { Box, Flex } from '@chakra-ui/react';
import {
  selectBackgroundColor,
  selectBorderRadius,
  selectPaddingX,
  selectPaddingY,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import React from 'react';
import { useSelector } from 'react-redux';
import { EditorCodeContent } from './EditorCodeContent';

interface EditorContentWindowProps {}

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

export const EditorContentWindow: React.FC<EditorContentWindowProps> = ({}) => {
  const backgroundColor = useSelector(selectBackgroundColor);
  const paddingX = useSelector(selectPaddingX);
  const paddingY = useSelector(selectPaddingY);
  const borderRadius = useSelector(selectBorderRadius);
  return (
    <Flex
      height='100%'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      maxWidth='100%'
    >
      {/* Wrapper */}
      <Box
        backgroundColor={backgroundColor}
        height='100%'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        overflow='hidden'
        maxWidth='100%'
      >
        {/* Main Container */}
        <Box
          position='relative'
          minWidth='auto'
          maxWidth='auto'
          width='850px'
          px={paddingX}
          py={paddingY}
        >
          {/* Editor Code Window */}
          <EditorCodeContent
            code={exampleCode}
            styles={{ borderRadius: `${borderRadius}px` }}
          />
        </Box>
      </Box>
    </Flex>
  );
};
