import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import {
  Color,
  selectBackgroundCustomization,
  selectCodeCustomization,
  selectWindowCustomization,
  WindowShadowColor,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorCodeContent } from './EditorCodeContent';
import { parseBackgroundColor } from '@lib/HelperFunctions';

interface EditorContentWindowProps {}

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

export const EditorContentWindow: React.FC<EditorContentWindowProps> = ({}) => {
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);

  const generateWindowShadow = (size: number): string => {
    const BASE_COLOR: WindowShadowColor =
      windowCustomization.shadow.boxShadowColor;
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
    <Flex height='100%' flexDir='column' overflow='hidden'>
      {/* Wrapper */}
      <Box
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
      </Box>
    </Flex>
  );
};
