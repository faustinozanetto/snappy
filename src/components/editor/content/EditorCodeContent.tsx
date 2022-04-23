import React, { Fragment, useState } from 'react';
import Editor from 'react-simple-code-editor';
import Highlight, {
  defaultProps,
  Language as PrismLanguage,
} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { useSelector } from 'react-redux';
import {
  CodeLanguage,
  selectFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

interface EditorCodeContentProps {
  code?: string;
  language?: CodeLanguage;
  styles?: React.CSSProperties;
}

export const EditorCodeContent: React.FC<EditorCodeContentProps> = (props) => {
  const { code: propsCode, styles, language } = props;
  const [code, setCode] = useState(propsCode || '');
  const fontCustomization = useSelector(selectFontCustomization);

  /**
   *
   * @returns the css styles combining the ones from the customization, theme and the styles prop.
   */
  const generateCustomStyles = (): React.CSSProperties => {
    const newStyles: React.CSSProperties = {
      ...styles,
      ...theme.plain,
      // Font Familty from state
      fontFamily: `${fontCustomization.fontFamily}, monospace`,
      fontVariantLigatures: 'contextual',
      fontFeatureSettings: 'calt 1',
      // Font Size from state
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

  /**
   *
   * @param codeToHighlight code to use in the highlight process.
   * @returns the highlighed code.
   */
  const highLightCode = (codeToHighlight: string): string | React.ReactNode => {
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
  return (
    <Editor
      value={code}
      highlight={highLightCode}
      padding={10}
      onValueChange={(newValue) => setCode(newValue)}
      style={generateCustomStyles()}
    />
  );
};
