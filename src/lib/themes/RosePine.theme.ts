import { CodeTheme } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './HighlightTheme';

export const ROSE_PINE: HighlightThemeType = {
  name: 'Rose Pine',
  type: CodeTheme.ROSE_PINE,
  plain: {
    color: '#e0def4',
    backgroundColor: '#191724',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: '#6E6A86',
        fontStyle: 'italic',
      },
    },
    {
      types: ['constant', 'hexcode', 'punctuation'],
      style: {
        color: '#31748F',
      },
    },
    {
      types: ['number', 'builtin'],
      style: {
        color: '#EBBCBA',
      },
    },
    {
      types: ['tag', 'inserted'],
      style: {
        color: '#9CCFD8',
      },
    },
    {
      types: ['attr-name', 'selector'],
      style: {
        color: '#C4A7E7',
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: '#EB6F92',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#F6C177',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#EBBCBA',
        fontStyle: 'italic',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#31748F',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#908CAA',
      },
    },
  ],
};
