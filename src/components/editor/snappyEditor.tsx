import { Box, Container, Flex } from '@chakra-ui/react';

import type { CSSProperties } from 'react';
import { createRef, useMemo } from 'react';
import { EXAMPLE_CODE } from '@lib/constants';
import { parseBackgroundColor } from '@lib/helper/helperFunctions';
import {
  selectBackgroundCustomization,
  selectCodeCustomization,
  selectWindowCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import type { Color } from 'react-color';
import { useSelector } from 'react-redux';

import type { BackgroundShadowEntry } from 'snappy.types';
import { BackgroundType } from 'snappy.types';

import { getThemeByType } from '@lib/themes/themeUtils';
import EditorCodeContent from './content/editorCodeContent';
import EditorToolBar from './toolbar/editorToolBar';

interface SnappyEditorProps {}

const SnappyEditor: React.FC<SnappyEditorProps> = (props) => {
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
    const parsedTheme = getThemeByType(codeCustomization.codeTheme || 'night-owl');
    return parsedTheme;
  }, [codeCustomization]);

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

  const backgroundStyles = useMemo(() => {
    // BACKGROUND STYLING.
    const styles: CSSProperties = {};
    if (backgroundCustomization && backgroundCustomization.backgroundType) {
      if (backgroundCustomization.backgroundType === 'color') {
        if (backgroundCustomization.backgroundColor) {
          const parsedColor = parseBackgroundColor(backgroundCustomization.backgroundColor);
          styles.background = parsedColor;
        }
      } else if (backgroundCustomization.backgroundType === BackgroundType.IMAGE) {
        if (backgroundCustomization.backgroundImage) {
          styles.background = `url(${backgroundCustomization.backgroundImage})`;
          styles.backgroundRepeat = 'no-repeat';
          styles.backgroundSize = 'cover';
          styles.backgroundPosition = 'center';
        }
      } else if (backgroundCustomization.backgroundType === 'gradient') {
        if (backgroundCustomization.backgroundGradient) {
          styles.background = backgroundCustomization.backgroundGradient.generated;
        }
      }
    }

    return styles;
  }, [backgroundCustomization]);

  const paddingStyles = useMemo(() => {
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
      padding,
    };

    return styles;
  }, [windowCustomization.paddingX, windowCustomization.paddingY]);

  return (
    <Container
      maxWidth={['20em', '30em', '45em', '55em', '70em']}
      backgroundColor="backgroundSecondary"
      padding={6}
      border="4px solid background"
      borderRadius="lg"
    >
      <EditorToolBar exportRef={savedRef} />
      {/* Export Container */}
      <Flex
        ref={savedRef}
        width="full"
        height="full"
        position="relative"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        {/* Blur effect */}
        {backgroundCustomization.backgroundType === BackgroundType.IMAGE && (
          <Box
            position="absolute"
            width="full"
            height="full"
            backdropFilter="auto"
            backdropBlur={`${backgroundCustomization.backgroudBlur}px`}
            backgroundColor="rgba(120,120,120,0.5)"
            zIndex={2}
          />
        )}
        {/* Background */}
        <Box position="absolute" style={backgroundStyles} top={0} left={0} right={0} bottom={0} zIndex={1} />
        <Box style={paddingStyles} width="full" height="full" zIndex={3}>
          {/* Editor Code Window */}
          <EditorCodeContent code={EXAMPLE_CODE} style={editorContentStyles} theme={highlightThemeStyles} />
        </Box>
      </Flex>
    </Container>
  );
};

export default SnappyEditor;
