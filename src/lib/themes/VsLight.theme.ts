import { CodeTheme } from '@state/slices/editor/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './HighlightTheme';

export const VS_LIGHT: HighlightThemeType = {
  name: 'Vs Light',
  type: CodeTheme.VS_LIGHT,
  plain: {
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: '#008000',
      },
    },
    {
      types: ['builtin', 'keyword'],
      style: {
        color: '#0000FF',
      },
    },
    {
      types: ['number', 'operator'],
      style: {
        color: '#000000',
      },
    },
    {
      types: ['constant', 'hexcode', 'regex'],
      style: {
        color: '#811F3F',
      },
    },
    {
      types: ['tag'],
      style: {
        color: '#800000',
      },
    },
    {
      types: ['attr-name', 'selector', 'property', 'variable'],
      style: {
        color: '#FF0000',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: '#09885A',
      },
    },
    {
      types: ['deleted', 'string'],
      style: {
        color: '#A31515',
      },
    },
    {
      types: ['changed', 'punctuation'],
      style: {
        color: '#0451A5',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#008080',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#2B91AF',
      },
    },
  ],
};
