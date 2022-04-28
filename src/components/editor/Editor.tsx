import React, { createRef, useEffect, useState } from 'react';
import { Box, Container, Flex, HStack, useColorModeValue, VStack } from '@chakra-ui/react';
import { EditorToolBar } from './toolbar/EditorToolBar';
import { parseBackgroundColor } from '@lib/HelperFunctions';
import {
  CodeTheme,
  Color,
  selectBackgroundCustomization,
  selectCodeCustomization,
  selectWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorCodeContent } from './content/EditorCodeContent';
import { EXAMPLE_CODE } from '@lib/Constants';
import { HighlightThemeType, selectThemeFile } from '@lib/themes/HighlightTheme';
import { NIGHT_OWL } from '@lib/themes/NightOwl.theme';
import { ThemeStyles } from './highlight/ThemeStyles';

interface EditorProps {}

type ShadowEntry = {
  color: string;
  size: [number, number, number];
};

export const Editor: React.FC<EditorProps> = ({}) => {
  const savedRef = createRef<HTMLDivElement>();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const [highlightTheme, setHighlightTheme] = useState<HighlightThemeType>(NIGHT_OWL);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);

  const generateWindowShadow = (size: number): string => {
    const BASE_COLOR: Color = windowCustomization.shadow.boxShadowColor;
    const PARSED_COLOR: string = `rgba(${BASE_COLOR?.r}, ${BASE_COLOR?.g}, ${BASE_COLOR?.b}, ${BASE_COLOR?.a})`;
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
          <ThemeStyles theme={highlightTheme} />
        </Box>
      </Flex>
    </Container>
  );
};
