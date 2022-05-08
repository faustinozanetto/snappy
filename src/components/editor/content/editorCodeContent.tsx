import React, { useMemo, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { useSelector } from 'react-redux';
import Editor from 'react-simple-code-editor';
import type { HighlightTheme } from 'snappy.types';

import {
  selectCodeCustomization,
  selectFontCustomization,
  selectWindowCustomization,
} from '@state/slices/editor/editorCustomization.slice';
// import CodeHighlighting from '../highlight/codeHighlighting';
import EditorWindowControls from './window/editorWindowControls';

interface EditorCodeContentProps {
  code?: string;
  style?: React.CSSProperties;
  theme: HighlightTheme;
}

const EditorCodeContent: React.FC<EditorCodeContentProps> = (props) => {
  const { code: propsCode, style, theme } = props;
  const [code, setCode] = useState(propsCode || '');
  const fontCustomization = useSelector(selectFontCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);

  /**
   *
   * @returns the css styles combining the ones from the customization, theme and the styles prop.
   */
  const generateCustomStyles = useMemo(() => {
    const newStyles: React.CSSProperties = {
      boxSizing: 'border-box',
      fontFamily: `${fontCustomization.fontFamily}, monospace`,
      fontVariantLigatures: 'contextual',
      fontFeatureSettings: 'calt 1',
      fontSmooth: 'always',
      fontSize: `${fontCustomization.fontSize}px`,
      lineHeight: `${fontCustomization.lineHeight}em`,
      transitionProperty: 'color background-color padding translate box-shadow',
      transitionDuration: '300ms',
      transitionTimingFunction: 'ease-out',
    };
    return newStyles;
  }, [fontCustomization]);

  /**
   *
   * @param codeToHighlight code to use in the highlight process.
   * @returns the highlighed code.
   */
  const highLightCode = (codeToHighlight: string) => (
    // @ts-ignore
    <Highlight
      {...defaultProps}
      code={codeToHighlight}
      // @ts-ignore
      theme={theme as PrismTheme}
      // @ts-ignore
      language={codeCustomization.codeLanguage?.toLowerCase()}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <Text
          as="pre"
          textAlign="left"
          margin="1em 0"
          padding="0.5em"
          overflow="scroll"
          className={className}
          style={generateCustomStyles}
        >
          {tokens.map((line, lineIndex) => {
            return (
              <Box display="table-row" key={`line-${lineIndex}`} {...getLineProps({ line, key: lineIndex })}>
                <Text as="span" display="table-cell">
                  {line.map((token, tokenIndex) => (
                    <Text as="span" key={`token-${tokenIndex}`} {...getTokenProps({ token, key: tokenIndex })} />
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
      {windowCustomization.controls && <EditorWindowControls titleColor={theme.plain.color} />}
      <Editor
        className="code-wrapper"
        value={code}
        highlight={highLightCode}
        padding={20}
        onValueChange={(newValue) => setCode(newValue)}
        style={{
          // Used to move down the editor code when window controls are enabled.
          paddingTop: windowCustomization.controls ? '2em' : '',
          ...style,
          ...generateCustomStyles,
        }}
      />
    </>
  );
};
export default EditorCodeContent;
