export type ThemeData = {
  types: string[];
  style: React.CSSProperties;
};

export type HighlightThemeType = {
  name: string;
  plain: {
    color: string;
    backgroundColor: string;
  };
  styles: ThemeData[];
};

const ConstructCSSStyle = (theme: HighlightThemeType): string => {
  const cssStyle = theme.styles.map((style) => {
    const css = style.types.map((type) => {
      // Convert CSS object to string
      const styleString = Object.entries(style.style).reduce(
        (acc, [key, value]) => {
          return `${acc}${key}: ${value};`;
        },
        ''
      );
      return `.${type} { ${styleString} }`;
    });
    return css.join('\n');
  });
  return cssStyle.join('\n');
};

export const GenerateHighlight = (theme: HighlightThemeType) => {
  return (
    <style jsx global>
      {`
        :global(.code-wrapper) {
          color: ${theme.plain.color} !important;
          background-color: ${theme.plain.backgroundColor} !important;
        }

        .prism-code {
          margin: 0 !important;
          overflow: hidden !important;
        }

        ${ConstructCSSStyle(theme)}
      `}
    </style>
  );
};
