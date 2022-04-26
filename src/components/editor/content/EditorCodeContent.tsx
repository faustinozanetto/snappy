// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { useSelector } from 'react-redux';
import {
  CodeLanguage,
  selectCodeCustomization,
  selectFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import Highlight, { defaultProps } from 'prism-react-renderer';
// THEMES
import styled from '@emotion/styled';
import { NIGHT_OWL } from '@lib/themes/NightOwl.theme';
import {
  HighlightThemeType,
  selectThemeFile,
} from '@lib/themes/HighlightTheme';

interface EditorCodeContentProps {
  code?: string;
  language?: CodeLanguage;
  styles?: React.CSSProperties;
}

export const EditorCodeContent: React.FC<EditorCodeContentProps> = (props) => {
  const { code: propsCode, styles, language } = props;
  const [code, setCode] = useState(propsCode || '');
  const [highlightTheme, setHighlightTheme] =
    useState<HighlightThemeType>(NIGHT_OWL);
  const fontCustomization = useSelector(selectFontCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);

  /**
   * Update the theme object with the new one from redux state.
   */
  useEffect(() => {
    const parsedTheme = selectThemeFile(codeCustomization.codeTheme);
    setHighlightTheme(parsedTheme);
  }, [codeCustomization]);

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
    };
    return newStyles;
  };

  const Pre = styled.pre`
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;
    overflow: scroll;
  `;

  const Line = styled.div`
    display: table-row;
  `;

  const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding-right: 1em;
    user-select: none;
    opacity: 0.5;
  `;

  const LineContent = styled.span`
    display: table-cell;
  `;

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
      language={codeCustomization.codeLanguage.toLowerCase()}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{ ...generateCustomStyles() }}>
          {tokens.map((line, lineIndex) => {
            return (
              <Line key={lineIndex} {...getLineProps({ line, key: lineIndex })}>
                <LineContent>
                  {line.map((token, tokenIndex) => (
                    <span
                      key={tokenIndex}
                      {...getTokenProps({ token, key: tokenIndex })}
                    />
                  ))}
                </LineContent>
              </Line>
            );
          })}
        </Pre>
      )}
    </Highlight>
  );

  return (
    <Editor
      className='code-wrapper'
      value={code}
      highlight={highLightCode}
      padding={20}
      onValueChange={(newValue) => setCode(newValue)}
      style={{
        ...styles,
        ...generateCustomStyles(),
        backgroundColor: highlightTheme.plain.backgroundColor,
        color: highlightTheme.plain.color,
      }}
    />
  );
};
