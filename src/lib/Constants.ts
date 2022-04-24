import toHash from 'tohash';

export const EXPORT_SIZES = [
  { id: '1x', name: '1x', value: 1 },
  { id: '2x', name: '2x', value: 2 },
  { id: '3x', name: '3x', value: 3 },
  { id: '4x', name: '4x', value: 4 },
];
export const EXPORT_SIZES_HASH = toHash(EXPORT_SIZES);
export const DEFAULT_EXPORT_SIZE = EXPORT_SIZES_HASH['2x'];

/**
 * @description Basic code snippet that shows up when page loads by default.
 */
export const EXAMPLE_CODE = `const highLightCode = (codeToHighlight: string): string | React.ReactNode => {
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
`;
