import { Box, Container, Flex, HStack, useColorModeValue } from '@chakra-ui/react';

import type { CSSProperties } from 'react';
import { createRef, useMemo } from 'react';
import { EXAMPLE_CODE } from '@lib/constants';
import { parseBackgroundColor } from '@lib/helper/helperFunctions';
import { selectThemeFile } from '@lib/themes/highlightTheme';
import {
  selectBackgroundCustomization,
  selectCodeCustomization,
  selectWindowCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import type { Color } from 'react-color';
import { useSelector } from 'react-redux';

import type { BackgroundShadowEntry } from 'snappy.types';

import ONE_DARK from '@lib/themes/oneDark.theme';
import EditorCodeContent from './content/editorCodeContent';
import CodeHighlightStyles from './highlight/codeHighlightStyles';
import EditorToolBar from './toolbar/editorToolBar';

interface EditorProps {}

const Editor: React.FC<EditorProps> = (props) => {
  const {} = props;
  const savedRef = createRef<HTMLDivElement>();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);

  /**
   *
   * @param size size of the shadow.
   * @returns The generated css shadow matching the color and size.
   */
  const generateWindowShadow = (size: number): string => {
    if (windowCustomization.shadow?.boxShadowColor) {
      const BASE_COLOR: Color = windowCustomization.shadow.boxShadowColor;
      const PARSED_COLOR = `rgba(${BASE_COLOR?.r}, ${BASE_COLOR?.g}, ${BASE_COLOR?.b}, ${BASE_COLOR?.a})`;
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
    }
    return '';
  };

  /**
   * @returns the css styles from the theme file.
   */
  const highlightThemeStyles = useMemo(() => {
    if (codeCustomization.codeTheme) {
      const parsedTheme = selectThemeFile(codeCustomization.codeTheme);
      return parsedTheme;
    }
    return ONE_DARK;
  }, [codeCustomization.codeTheme]);

  /**
   * Generates the styles for the code content window.
   */
  const editorContentStyles = useMemo(() => {
    let styles: CSSProperties = {
      borderRadius: `${windowCustomization.borderRadius}px`,
      backgroundColor: highlightThemeStyles.plain.backgroundColor,
      color: highlightThemeStyles.plain.color,
    };
    // Valid box shadow color.
    if (
      windowCustomization.shadow &&
      windowCustomization.shadow.boxShadowColor &&
      windowCustomization.shadow.boxShadowSize
    ) {
      styles = {
        ...styles,
        boxShadow: generateWindowShadow(windowCustomization.shadow.boxShadowSize),
      };
    }
    return styles;
  }, [windowCustomization, highlightThemeStyles]);

  const codeContainerStyles = useMemo(() => {
    // BACKGROUND STYLING.
    let background = '';
    if (backgroundCustomization && backgroundCustomization.backgroundType) {
      if (backgroundCustomization.backgroundType === 'color') {
        if (backgroundCustomization.backgroundColor) {
          const parsedColor = parseBackgroundColor(backgroundCustomization.backgroundColor);
          background = parsedColor;
        }
      } else if (backgroundCustomization.backgroundType === 'image') {
        if (backgroundCustomization.backgroundImage) {
          background = `url(${backgroundCustomization.backgroundImage})`;
        }
      } else if (backgroundCustomization.backgroundType === 'gradient') {
        if (backgroundCustomization.backgroundGradient) {
          background = backgroundCustomization.backgroundGradient.generated;
        }
      }
    }

    // PADDING STYLING
    let padding = '';
    if (windowCustomization && windowCustomization.paddingX && windowCustomization.paddingY) {
      const paddingLeft = `${windowCustomization.paddingX * 3}px`;
      const paddingRight = `${windowCustomization.paddingX * 3}px`;
      let paddingTop = `${windowCustomization.paddingY * 3}px`;
      if (windowCustomization.controls) {
        paddingTop = `calc(${windowCustomization.paddingY * 3}px - 2.5em)`;
      }
      const paddingBottom = `${windowCustomization.paddingY * 3}px`;
      padding = `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`;
    }

    const styles: CSSProperties = {
      background,
      padding,
    };

    return styles;
  }, [windowCustomization.paddingX, windowCustomization.paddingY, backgroundCustomization]);

  return (
    <Container
      maxW={['35em', '45em', '60em', '80em']}
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
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
          style={codeContainerStyles}
        >
          {/* Editor Code Window */}
          <EditorCodeContent code={EXAMPLE_CODE} style={editorContentStyles} theme={highlightThemeStyles} />
          <CodeHighlightStyles theme={highlightThemeStyles} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Editor;
