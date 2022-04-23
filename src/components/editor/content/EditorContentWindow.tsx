import { Box, Flex } from '@chakra-ui/react';
import { selectBackgroundColor } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
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
          padding={4}
        >
          <EditorCodeContent
            code={exampleCode}
            styles={{ borderRadius: '10px' }}
          />
        </Box>
      </Box>
    </Flex>
  );
};
