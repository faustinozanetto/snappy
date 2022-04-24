import { CodeTheme } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './HighlightTheme';

export const CELESTIAL: HighlightThemeType = {
  name: 'Celestial',
  type: CodeTheme.CELESTIAL,
  plain: {
    color: '#e95378',
    backgroundColor: '#0b0c0f',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgba(187, 187, 187, 0.30196078431372547)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['constant', 'keyword'],
      style: {
        color: 'rgba(240, 148, 131, 0.9019607843137255)',
      },
    },
    {
      types: ['char', 'function', 'builtin'],
      style: {
        color: 'rgba(37, 176, 188, 0.9019607843137255)',
      },
    },
    {
      types: ['tag', 'variable'],
      style: {
        color: 'rgba(233, 86, 120, 0.9019607843137255)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgba(240, 148, 131, 0.9019607843137255)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'rgb(187, 187, 187)',
      },
    },
    {
      types: ['string'],
      style: {
        color: 'rgba(250, 183, 149, 0.9019607843137255)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgba(233, 86, 120, 0.7019607843137254)',
      },
    },
  ],
};
