import { CodeTheme } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './HighlightTheme';

export const NIGHT_OWL_LIGHT: HighlightThemeType = {
  name: 'Night Owl Light',
  type: CodeTheme.NIGHT_OWL_LIGHT,
  plain: {
    color: '#403f53',
    backgroundColor: '#fbfbfb',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: '#A2BFFC',
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: '#EF535090',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: '#4876D6',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#989FB1',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'builtin', 'char', 'constant', 'url'],
      style: {
        color: '#4876D6',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#C96765',
      },
    },
    {
      types: ['number', 'hexcode'],
      style: {
        color: '#AA0982',
      },
    },
    {
      types: ['punctuation', 'function', 'selector', 'doctype'],
      style: {
        color: '#994CC3',
        fontStyle: 'italic',
      },
    },
    {
      types: ['regex'],
      style: {
        color: '#5CA7E4',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#111111',
      },
    },
    {
      types: ['tag'],
      style: {
        color: '#994CC3',
      },
    },
    {
      types: ['operator', 'property', 'keyword', 'namespace'],
      style: {
        color: '#0C969B',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: '#BC5454',
      },
    },
    {
      types: ['imports', 'exports'],
      style: {
        color: '#403F53',
      },
    },
  ],
};
