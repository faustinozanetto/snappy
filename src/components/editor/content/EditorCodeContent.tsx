import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { useSelector } from 'react-redux';
import {
  CodeLanguage,
  selectCodeCustomization,
  selectFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer';
import { HighlightThemeType } from '@lib/themes/HighlightTheme';
import { Box, Text } from '@chakra-ui/react';
import { EditorWindowControls } from './window/EditorWindowControls';

interface EditorCodeContentProps {
  code?: string;
  language?: CodeLanguage;
  styles?: React.CSSProperties;
  showWindowControls?: boolean;
  theme?: HighlightThemeType;
}

export const EditorCodeContent: React.FC<EditorCodeContentProps> = (props) => {
  const { code: propsCode, showWindowControls, styles, theme, language } = props;
  const [code, setCode] = useState(propsCode || '');
  const fontCustomization = useSelector(selectFontCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);

  /**
   *
   * @returns the css styles combining the ones from the customization, theme and the styles prop.
   */
  const generateCustomStyles = (): React.CSSProperties => {
    const newStyles: React.CSSProperties = {
      boxSizing: 'border-box',
      fontFamily: `${fontCustomization.fontFamily}, monospace`,
      fontVariantLigatures: 'contextual',
      fontFeatureSettings: 'calt 1',
      fontSmooth: 'always',
      fontSize: `${fontCustomization.fontSize}px`,
      lineHeight: `${fontCustomization.lineHeight}em`,
      transitionProperty: 'color background-color',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease-out',
    };
    return newStyles;
  };

  /**
   *
   * @param codeToHighlight code to use in the highlight process.
   * @returns the highlighed code.
   */
  const highLightCode = (codeToHighlight: string) => (
    <Highlight
      {...defaultProps}
      code={codeToHighlight}
      // @ts-ignore
      theme={theme as PrismTheme}
      // @ts-ignore
      language={codeCustomization.codeLanguage.toLowerCase()}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <Text
          as="pre"
          textAlign={'left'}
          margin={'1em 0'}
          padding={'0.5em'}
          overflow={'scroll'}
          className={className}
          style={{ ...generateCustomStyles() }}
        >
          {tokens.map((line, lineIndex) => {
            return (
              <Box display={'table-row'} key={lineIndex} {...getLineProps({ line, key: lineIndex })}>
                <Text as="span" display={'table-cell'}>
                  {line.map((token, tokenIndex) => (
                    <Text as="span" key={tokenIndex} {...getTokenProps({ token, key: tokenIndex })} />
                  ))}
                </Text>
              </Box>
            );
          })}
        </Text>
      )}
    </Highlight>
  );

  return (
    <>
      {showWindowControls && <EditorWindowControls titleColor={theme.plain.color} />}
      <Editor
        className="code-wrapper"
        value={code}
        highlight={highLightCode}
        padding={20}
        onValueChange={(newValue) => setCode(newValue)}
        style={{
          // Used to move down the editor code when window controls are enabled.
          paddingTop: showWindowControls ? '2em' : '',
          ...styles,
          ...generateCustomStyles(),
        }}
      />
    </>
  );
};
