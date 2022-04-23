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

type ShadowEntry = {
  color: string;
  size: [number, number, number];
};

export const EditorContentWindow: React.FC<EditorContentWindowProps> = ({}) => {
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);

  const generateWindowShadow = (size: number): string => {
    const BASE: ShadowEntry[] = [
      {
        color: 'rgba(0, 0, 0, 0.25)',
        size: [0, 54, 55],
      },
      {
        color: 'rgba(0, 0, 0, 0.12)',
        size: [0, -12, 30],
      },
      {
        color: 'rgba(0, 0, 0, 0.12)',
        size: [0, 4, 6],
      },
      {
        color: 'rgba(0, 0, 0, 0.17)',
        size: [0, 12, 12],
      },
      {
        color: 'rgba(0, 0, 0, 0.09)',
        size: [0, -3, 5],
      },
    ];

    const shadow = BASE.map((entry) => {
      const [x, y, z] = entry.size;
      const multiplier = size / 1.5;
      return `${entry.color} ${x * multiplier}px ${y * multiplier}px ${
        z * multiplier
      }px`;
    });
    console.log(shadow);
    return shadow.join(', ');
  };

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
                windowCustomization.boxShadow &&
                generateWindowShadow(windowCustomization.boxShadowSize),
            }}
          />
        </Box>
      </Box>
    </Flex>
  );
};
