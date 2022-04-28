import { CodeTheme } from '@state/slices/editor/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './HighlightTheme';

export const DRACULA: HighlightThemeType = {
  name: 'Dracula',
  type: CodeTheme.DRACULA,
  plain: {
    color: '#f8f8f2',
    backgroundColor: '#282a36',
  },
  styles: [
    {
      types: ['prolog', 'constant', 'hexcode', 'builtin'],
      style: {
        color: '#BD93F9',
      },
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: '#50FA7B',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: '#FF5555',
      },
    },
    {
      types: ['changed'],
      style: {
        color: '#FFB86C',
      },
    },
    {
      types: ['punctuation', 'class-name'],
      style: {
        color: '#8BE9FD',
      },
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: '#FF79C6',
      },
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: '#BD93F9',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#6272A4',
      },
    },
    {
      types: ['attr-name', 'regex'],
      style: {
        color: '#F1FA8C',
      },
    },
    {
      types: ['operator', 'property'],
      style: {},
    },
    {
      types: ['symbol'],
      style: {
        color: '#F8F8F2',
      },
    },
  ],
};
