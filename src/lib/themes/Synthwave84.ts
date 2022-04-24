import { CodeTheme } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './HighlightTheme';

export const SYNTHWAVE84: HighlightThemeType = {
  name: 'Synthwave84',
  type: CodeTheme.SYNTHWAVE84,
  plain: {
    color: '#FE4450',
    backgroundColor: '#262335',
  },
  styles: [
    {
      types: ['comment', 'string'],
      style: {
        color: '#848BBD',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#FF8B39',
      },
    },
    {
      types: ['variable', 'property'],
      style: {
        color: '#FF7EDB',
        textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475',
      },
    },
    {
      types: ['constant', 'hexcode', 'regex', 'number', 'builtin'],
      style: {
        color: '#F97E72',
      },
    },
    {
      types: ['char', 'function'],
      style: {
        color: '#36F9F6',
        textShadow:
          '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975',
      },
    },
    {
      types: ['tag'],
      style: {
        color: '#72F1B8',
      },
    },
    {
      types: ['attr-name', 'selector', 'keyword', 'operator'],
      style: {
        color: '#FEDE5D',
      },
    },
  ],
};
