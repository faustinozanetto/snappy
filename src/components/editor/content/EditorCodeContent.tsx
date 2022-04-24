import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism, { highlight } from 'prismjs';
import Highlight, {
  defaultProps,
  Language as PrismLanguage,
} from 'prism-react-renderer';
import { useSelector } from 'react-redux';
import {
  CodeLanguage,
  CodeTheme,
  selectCodeCustomization,
  selectFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

// THEMES
import styled from '@emotion/styled';
import { NIGHT_OWL } from '@lib/themes/NightOwl.theme';
import { ONE_DARK } from '@lib/themes/OneDark.theme';
import { SYNTHWAVE84 } from '@lib/themes/Synthwave84';
import { VS_LIGHT } from '@lib/themes/VsLight.theme';
import { VS_DARK } from '@lib/themes/VsDark.theme';
import { DRACULA } from '@lib/themes/Dracula.theme';
import { NIGHT_OWL_LIGHT } from '@lib/themes/NightOwlLight.theme';
import {
  GenerateHighlight,
  HighlightThemeType,
} from '@lib/themes/HighlightTheme';
import { Box } from '@chakra-ui/react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

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
  const [highlightCSS, setHighlightCSS] = useState(
    GenerateHighlight(highlightTheme)
  );
  const fontCustomization = useSelector(selectFontCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);

  const selectTheme = (theme: CodeTheme): HighlightThemeType => {
    switch (theme) {
      case CodeTheme.VS_LIGHT:
        return VS_LIGHT;
      case CodeTheme.VS_DARK:
        return VS_DARK;
      case CodeTheme.DRACULA:
        return DRACULA;
      case CodeTheme.NIGHT_OWL:
        return NIGHT_OWL;
      case CodeTheme.NIGHT_OWL_LIGHT:
        return NIGHT_OWL_LIGHT;
      case CodeTheme.SYNTHWAVE84:
        return SYNTHWAVE84;
      case CodeTheme.ONE_DARK:
        return ONE_DARK;
      case CodeTheme.ONE_LIGTH:
        return ONE_DARK;

      default:
        return NIGHT_OWL;
    }
  };

  /**
   * Update the theme object with the new one from redux state.
   */
  useEffect(() => {
    const parsedTheme = selectTheme(codeCustomization.codeTheme);
    setHighlightTheme(parsedTheme);
    setHighlightCSS(GenerateHighlight(parsedTheme));
  }, [codeCustomization]);

  /**
   *
   * @returns the css styles combining the ones from the customization, theme and the styles prop.
   */
  const generateCustomStyles = (): React.CSSProperties => {
    const newStyles: React.CSSProperties = {
      ...styles,
      boxSizing: 'border-box',
      fontFamily: `${fontCustomization.fontFamily}, monospace`,
      fontVariantLigatures: 'contextual',
      fontFeatureSettings: 'calt 1',
      fontSmooth: 'always',
      fontSize: `${fontCustomization.fontSize}px`,
    };
    return newStyles;
  };

  const parsePrismLanguageType = (lang: CodeLanguage): PrismLanguage => {
    // Convert CodeLanguage to PrismLanguage
    switch (lang) {
      case CodeLanguage.JAVASCRIPT:
        return 'javascript';
      case CodeLanguage.TYPESCRIPT:
        return 'typescript';
      case CodeLanguage.JSX:
        return 'jsx';
      case CodeLanguage.C:
        return 'c';
      case CodeLanguage.CPP:
        return 'cpp';
    }
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
    <Highlight {...defaultProps} code={codeToHighlight} language='jsx'>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );

  return (
    <Editor
      className='code-wrapper'
      value={code}
      highlight={(cod) => highlight(cod, Prism.languages.js, 'javascript')}
      padding={20}
      onValueChange={(newValue) => setCode(newValue)}
      style={{
        ...generateCustomStyles(),
        backgroundColor: highlightTheme.plain.backgroundColor,
        color: highlightTheme.plain.color,
      }}
    />
  );
};
