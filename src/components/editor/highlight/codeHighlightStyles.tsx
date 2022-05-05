import { Global } from '@emotion/react';
import { constructCSSStyle, selectThemeFile } from '@lib/themes/highlightTheme';
import { selectCodeCustomization, selectWindowCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CodeTheme } from 'snappy.types';

interface CodeHighlightStylesProps {}

const CodeHighlightStyles: React.FC<CodeHighlightStylesProps> = ({}) => {
  const windowCustomization = useSelector(selectWindowCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);

  const themeStyles = useMemo(() => {
    const parsedTheme = selectThemeFile(codeCustomization.codeTheme || CodeTheme.ONE_DARK);
    return parsedTheme;
  }, [codeCustomization.codeTheme]);

  return (
    <Global
      styles={`
        ${constructCSSStyle(themeStyles)}
        .code-wrapper {
          color: ${themeStyles.plain.color} !important;
          background-color: ${themeStyles.plain.backgroundColor} !important;
        }

        .prism-code {
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        .npm__react-simple-code-editor__textarea {
          margin-top: ${windowCustomization.controls ? '2em !important' : '0 !important'};
        }
        .npm__react-simple-code-editor__textarea:focus-visible {
          outline: none !important;
          border: none !important;
        }
      `}
    />
  );
};
export default CodeHighlightStyles;
