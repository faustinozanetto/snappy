import React, { createRef, useRef } from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { EditorToolBar } from './toolbar/EditorToolBar';
import { EditorContentWindow } from './content/EditorContentWindow';
import { parseBackgroundColor } from '@lib/HelperFunctions';
import {
  Color,
  selectBackgroundCustomization,
  selectCodeCustomization,
  selectWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorCodeContent } from './content/EditorCodeContent';

interface EditorProps {}

const exampleCode = `const highLightCode = (codeToHighlight: string): string | React.ReactNode => {
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

export const Editor: React.FC<EditorProps> = ({}) => {
  const savedRef = createRef<HTMLDivElement>();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);

  const generateWindowShadow = (size: number): string => {
    const BASE_COLOR: Color = windowCustomization.shadow.boxShadowColor;
    const PARSED_COLOR: string = `rgba(${BASE_COLOR.r}, ${BASE_COLOR.g}, ${BASE_COLOR.b}, ${BASE_COLOR.a})`;
    const BASE: ShadowEntry[] = [
      {
        color: PARSED_COLOR,
        size: [0, 54, 55],
      },
      {
        color: PARSED_COLOR,
        size: [0, -12, 30],
      },
      {
        color: PARSED_COLOR,
        size: [0, 4, 6],
      },
      {
        color: PARSED_COLOR,
        size: [0, 12, 12],
      },
      {
        color: PARSED_COLOR,
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

    return shadow.join(', ');
  };

  return (
    <Box my={12}>
      <Container
        maxW={['0em', '30em', '48em', '62em', '80em', '90em']}
        padding={4}
        backgroundColor={useColorModeValue('gray.200', 'gray.700')}
        borderRadius='md'
      >
        {/* Editor Tool Bar */}
        {savedRef && <EditorToolBar exportRef={savedRef} />}
        {/* Editor Content Window */}
        <Box
          ref={savedRef}
          backgroundColor={parseBackgroundColor(
            backgroundCustomization.backgroundColor
          )}
          backgroundImage={backgroundCustomization.backgroundImage}
          backgroundRepeat='no-repeat'
          backgroundSize='cover'
        >
          {/* Blur Effect */}
          <Box
            backdropFilter={`${
              backgroundCustomization.backgroudBlur > 0
                ? `blur(${backgroundCustomization.backgroudBlur}px)`
                : 'none'
            }`}
          >
            {/* Main Container */}
            <Box
              __css={{
                paddingLeft: `${windowCustomization.paddingX * 3}px !important`,
                paddingRight: `${
                  windowCustomization.paddingX * 3
                }px !important`,
                paddingTop: `${windowCustomization.paddingY * 3}px !important`,
                paddingBottom: `${
                  windowCustomization.paddingY * 3
                }px !important`,
              }}
            >
              {/* Editor Code Window */}
              <EditorCodeContent
                code={exampleCode}
                language={codeCustomization.codeLanguage}
                styles={{
                  borderRadius: `${windowCustomization.borderRadius}px`,
                  boxShadow:
                    windowCustomization.shadow.boxShadow &&
                    generateWindowShadow(
                      windowCustomization.shadow.boxShadowSize
                    ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
