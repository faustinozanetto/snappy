import React, { Fragment, useState } from 'react';
import Editor from 'react-simple-code-editor';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { useSelector } from 'react-redux';
import {
  selectFontFamily,
  selectFontSize,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

interface EditorCodeContentProps {
  code?: string;
  styles?: React.CSSProperties;
}

export const EditorCodeContent: React.FC<EditorCodeContentProps> = (props) => {
  const { code: propsCode, styles } = props;
  const [code, setCode] = useState(propsCode || '');
  const fontFamily = useSelector(selectFontFamily);
  const fontSize = useSelector(selectFontSize);

  /**
   *
   * @returns the css styles combining the ones from the customization, theme and the styles prop.
   */
  const generateCustomStyles = (): React.CSSProperties => {
    const newStyles: React.CSSProperties = {
      ...styles,
      ...theme.plain,
      // Font Familty from state
      fontFamily,
      // Font Size from state
      fontSize: `${fontSize}px`,
    };
    return newStyles;
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
        language='jsx'
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
