import { ConstructCSSStyle, HighlightThemeType } from '@lib/themes/HighlightTheme';
import { selectWindowCustomization } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';

interface ThemeStylesProps {
  theme: HighlightThemeType;
}

export const ThemeStyles: React.FC<ThemeStylesProps> = ({ theme }) => {
  const windowCustomization = useSelector(selectWindowCustomization);
  return (
    <style jsx global>{`
      ${ConstructCSSStyle(theme).concat(`
      .code-wrapper {
        color: ${theme.plain.color} !important;
        background-color: ${theme.plain.backgroundColor} !important;
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

      `)}
    `}</style>
  );
};
