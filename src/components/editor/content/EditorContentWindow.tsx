import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import {
  selectBackgroundCustomization,
  selectCodeCustomization,
  selectWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorCodeContent } from './EditorCodeContent';

interface EditorContentWindowProps {}

const exampleCode = `
 const highLightCode = (codeToHighlight: string): string | React.ReactNode => {
    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={codeToHighlight}
        language={parsePrismLanguageType(language)}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Fragment>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Fragment>
        )}
      </Highlight>
    );
  };
`;

export const EditorContentWindow: React.FC<EditorContentWindowProps> = ({}) => {
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);
  return (
    <Flex height='100%' flexDir='column' overflow='hidden'>
      {/* Wrapper */}
      <Box backgroundColor={backgroundCustomization.backgroundColor}>
        {/* Main Container */}
        <Box
          width='100%'
          __css={{
            paddingLeft: `${windowCustomization.paddingX * 3}px !important`,
            paddingRight: `${windowCustomization.paddingX * 3}px !important`,
            paddingTop: `${windowCustomization.paddingY * 3}px !important`,
            paddingBottom: `${windowCustomization.paddingY * 3}px !important`,
          }}
        >
          {/* Editor Code Window */}
          <EditorCodeContent
            code={exampleCode}
            language={codeCustomization.codeLanguage}
            styles={{
              borderRadius: `${windowCustomization.borderRadius}px`,
              boxShadow:
                'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
            }}
          />
        </Box>
      </Box>
    </Flex>
  );
};
