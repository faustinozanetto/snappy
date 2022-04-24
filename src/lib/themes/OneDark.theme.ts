import { CodeTheme } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './HighlightTheme';

export const ONE_DARK: HighlightThemeType = {
  name: 'One Dark',
  type: CodeTheme.ONE_DARK,
  plain: {
    color: '#abb2bf',
    backgroundColor: '#282c34',
  },
  styles: [
    {
      types: ['punctuation', 'constant', 'deleted', 'tag'],
      style: {
        color: '#E06C75',
      },
    },
    {
      types: ['variable', 'keyword', 'selector'],
      style: {
        color: '#C678DD',
      },
    },
    {
      types: ['builtin', 'changed', 'namespace', 'class-name'],
      style: {
        color: '#E5C07B',
      },
    },
    {
      types: ['operator', 'property'],
      style: {
        color: '#ABB2BF',
      },
    },
    {
      types: ['inserted', 'string'],
      style: {
        color: '#98C379',
      },
    },
    {
      types: ['char', 'number', 'hexcode', 'attr-name'],
      style: {
        color: '#D19A66',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#61AFEF',
      },
    },
    {
      types: ['symbol', 'regex'],
      style: {
        color: '#56B6C2',
      },
    },
    {
      types: ['comment'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
};