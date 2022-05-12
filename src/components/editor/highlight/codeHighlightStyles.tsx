import { Global } from '@emotion/react';
import { constructCSSStyle, getThemeByType } from '@lib/themes/themeUtils';
import { selectCodeCustomization, selectWindowCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

interface CodeHighlightStylesProps {}

const CodeHighlightStyles: React.FC<CodeHighlightStylesProps> = ({}) => {
  const windowCustomization = useSelector(selectWindowCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);

  const themeStyles = useMemo(() => {
    const parsedTheme = getThemeByType(codeCustomization.codeTheme || 'night-owl');
    return parsedTheme;
  }, [codeCustomization.codeTheme]);

  return (
    <Global
      styles={`
        ${constructCSSStyle(themeStyles)}


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
