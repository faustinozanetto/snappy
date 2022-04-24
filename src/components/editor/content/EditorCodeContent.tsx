import React, { Fragment, useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
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
import {
  nightOwl,
  atomOneDark,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { NIGHT_OWL } from '@lib/themes/NightOwl.theme';

// THEMES
import dracula from 'prism-react-renderer/themes/dracula';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import github from 'prism-react-renderer/themes/github';
// import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import okaidia from 'prism-react-renderer/themes/okaidia';
import synthwave84 from 'prism-react-renderer/themes/synthwave84';
import ultramin from 'prism-react-renderer/themes/ultramin';
import { CodeLineNumber } from './window/CodeLineNumber';
import { CodePre } from './window/CodePre';
import { CodeLine } from './window/CodeLine';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { EXAMPLE_CODE } from '@lib/Constants';
// import theme from 'prism-react-renderer/themes/nightOwl';
import { GenerateHighlight } from '@lib/themes/HighlightTheme';

interface EditorCodeContentProps {
  code?: string;
  language?: CodeLanguage;
  styles?: React.CSSProperties;
}

export const EditorCodeContent: React.FC<EditorCodeContentProps> = (props) => {
  const { code: propsCode, styles, language } = props;
  const [code, setCode] = useState(propsCode || '');
  const fontCustomization = useSelector(selectFontCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);

  const selectTheme = (theme: CodeTheme): any => {
    switch (theme) {
      case CodeTheme.DUOTONEDARK:
        return duotoneDark;
      case CodeTheme.DUOTONELIGHT:
        return duotoneLight;
      case CodeTheme.DRACULA:
        return dracula;
      case CodeTheme.GITHUB:
        return github;
      case CodeTheme.NIGHTOWL:
        return nightOwl;
      case CodeTheme.NIGTHOWLLIGHT:
        return nightOwlLight;
      case CodeTheme.OCEANICNEXT:
        return oceanicNext;
      case CodeTheme.SHADESOFPURPLE:
        return shadesOfPurple;
      case CodeTheme.OKAIDIA:
        return okaidia;
      case CodeTheme.SYNTHWAVE84:
        return synthwave84;

      default:
        return duotoneDark;
    }
  };

  /**
   * Update the theme object with the new one from redux state.
   */
  useEffect(() => {
    const parsedTheme = selectTheme(codeCustomization.codeTheme);
    // setTheme(parsedTheme);
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
    <React.Fragment>
      <Editor
        className='code-wrapper'
        value={code}
        highlight={(cod) =>
          Prism.highlight(cod, Prism.languages.js, 'javascript')
        }
        padding={20}
        onValueChange={(newValue) => setCode(newValue)}
        style={generateCustomStyles()}
      />
      {GenerateHighlight(NIGHT_OWL)}
    </React.Fragment>
  );
};
