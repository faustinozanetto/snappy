import { useCallback, useState } from 'react';
import { constructCSSStyle } from '@lib/themes/highlightTheme';
import { selectWindowCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useSelector } from 'react-redux';
import { HighlightTheme } from 'snappy.types';

interface CodeHighlightStylesProps {
  /** Theme to retrieve styles from. */
  theme: HighlightTheme;
}

const CodeHighlightStyles: React.FC<CodeHighlightStylesProps> = ({ theme }) => {
  const windowCustomization = useSelector(selectWindowCustomization);

  return (
    <style jsx global>{`
      ${constructCSSStyle(theme).concat(`
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
export default CodeHighlightStyles;
