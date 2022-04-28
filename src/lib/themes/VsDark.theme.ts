import { CodeTheme } from '@state/slices/editor/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './HighlightTheme';

export const VS_DARK: HighlightThemeType = {
  name: 'Vs Dark',
  type: CodeTheme.VS_DARK,
  plain: {
    color: '#d4d4d4',
    backgroundColor: '#1e1e1e',
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: '#000080',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#57A64A',
      },
    },
    {
      types: ['builtin', 'tag', 'changed', 'keyword'],
      style: {
        color: '#569CD6',
      },
    },
    {
      types: ['number', 'inserted'],
      style: {
        color: '#B5CEA8',
      },
    },
    {
      types: ['constant', 'hexcode'],
      style: {
        color: '#646695',
      },
    },
    {
      types: ['attr-name', 'selector', 'property', 'variable'],
      style: {
        color: '#9CDCFE',
      },
    },
    {
      types: ['deleted', 'string'],
      style: {
        color: '#D69D85',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#6A9955',
      },
    },
    {
      types: ['regex'],
      style: {
        color: '#D16969',
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#B4B4B4',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#C8C8C8',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#4EC9B0',
      },
    },
  ],
};
