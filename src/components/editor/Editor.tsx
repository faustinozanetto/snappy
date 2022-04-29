import React, { createRef, useEffect, useState } from 'react';
import { Box, Container, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { EXAMPLE_CODE } from '@lib/constants';
import { NIGHT_OWL } from '@lib/themes/nightOwl.theme';
import { selectThemeFile } from '@lib/themes/highlightTheme';
import {
  selectBackgroundCustomization,
  selectCodeCustomization,
  selectWindowCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import { Color } from 'react-color';
import { BackgroundShadowEntry, HighlightTheme } from 'snappy.types';
import EditorToolBar from './toolbar/editorToolBar';
import CodeHighlightStyles from './highlight/codeHighlightStyles';
import EditorCodeContent from './content/editorCodeContent';
import { parseBackgroundColor } from '@lib/helperFunctions';

interface EditorProps {}

const Editor: React.FC<EditorProps> = ({}) => {
  const savedRef = createRef<HTMLDivElement>();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);
  const [highlightTheme, setHighlightTheme] = useState<HighlightTheme>(NIGHT_OWL);

  /**
   *
   * @param size size of the shadow.
   * @returns The generated css shadow matching the color and size.
   */
  const generateWindowShadow = (size: number): string => {
    const BASE_COLOR: Color = windowCustomization.shadow.boxShadowColor;
    const PARSED_COLOR: string = `rgba(${BASE_COLOR?.r}, ${BASE_COLOR?.g}, ${BASE_COLOR?.b}, ${BASE_COLOR?.a})`;
    const BASE: BackgroundShadowEntry[] = [
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
      return `${entry.color} ${x * multiplier}px ${y * multiplier}px ${z * multiplier}px`;
    });

    return shadow.join(', ');
  };

  /**
   * Update the theme object with the new one from redux state.
   */
  useEffect(() => {
    const parsedTheme = selectThemeFile(codeCustomization.codeTheme);
    setHighlightTheme(parsedTheme);
  }, [codeCustomization.codeTheme]);

  return (
    <Container
      maxW={['35em', '45em', '60em', '70em']}
      padding={6}
      backgroundColor={useColorModeValue('gray.200', 'gray.900')}
      borderRadius="md"
    >
      {/* Editor Tool Bar */}
      <HStack width="100%" my={6} justifyContent="center">
        <EditorToolBar exportRef={savedRef} />
      </HStack>
      {/* Export Container */}
      <Flex ref={savedRef} position="relative" alignItems="center" justifyContent="center" overflow="hidden">
        {/* Container */}
        <Box
          width="100%"
          height="100%"
          background={
            backgroundCustomization.backgroundType === 'color'
              ? parseBackgroundColor(backgroundCustomization.backgroundColor)
              : backgroundCustomization.backgroundType === 'gradient'
              ? backgroundCustomization.backgroundGradient.generated
              : `url(${backgroundCustomization.backgroundImage})`
          }
          paddingLeft={`${windowCustomization.paddingX * 3}px`}
          paddingRight={`${windowCustomization.paddingX * 3}px`}
          paddingTop={
            windowCustomization.controls
              ? `calc(${windowCustomization.paddingY * 3}px - 2.5em)`
              : `${windowCustomization.paddingY * 3}px`
          }
          paddingBottom={`${windowCustomization.paddingY * 3}px`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
          backdropFilter={`${
            backgroundCustomization.backgroudBlur > 0 ? `blur(${backgroundCustomization.backgroudBlur}px)` : 'none'
          }`}
        >
          {/* Editor Code Window */}
          <EditorCodeContent
            code={EXAMPLE_CODE}
            language={codeCustomization.codeLanguage}
            showWindowControls={windowCustomization.controls}
            styles={{
              borderRadius: `${windowCustomization.borderRadius}px`,
              boxShadow:
                windowCustomization.shadow.boxShadow && generateWindowShadow(windowCustomization.shadow.boxShadowSize),
              backgroundColor: highlightTheme.plain.backgroundColor,
              color: highlightTheme.plain.color,
            }}
            theme={highlightTheme}
          />
          <CodeHighlightStyles theme={highlightTheme} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Editor;
