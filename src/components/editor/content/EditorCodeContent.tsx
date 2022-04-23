import React, { Fragment, useState } from 'react';
import Editor from 'react-simple-code-editor';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

interface EditorCodeContentProps {
  code?: string;
  styles?: React.CSSProperties;
}

export const EditorCodeContent: React.FC<EditorCodeContentProps> = (props) => {
  const { code: propsCode, styles } = props;
  const [code, setCode] = useState(props.code || '');
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
      // @ts-ignore
      style={{
        ...styles,
        ...theme.plain,
      }}
    />
  );
};
