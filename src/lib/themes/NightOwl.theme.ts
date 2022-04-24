import { HighlightThemeType } from './HighlightTheme';

export const NIGHT_OWL: HighlightThemeType = {
  name: 'Night Owl',
  plain: {
    color: '#d6deeb',
    backgroundColor: '#011627',
  },
  styles: [
    {
      types: ['keyword', 'tag', 'operator'],
      style: {
        color: 'rgb(127, 219, 202)',
      },
    },
    {
      types: ['function', 'constant', 'builtin', 'char'],
      style: {
        color: 'rgb(130, 170, 255)',
      },
    },
    {
      types: ['comment', 'prolog', 'cdata'],
      style: {
        color: 'rgb(99, 119, 119)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(199, 146, 234)',
      },
    },
    {
      types: ['namespace'],
      style: {
        color: 'rgb(178, 204, 214)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['symbol', 'property'],
      style: {
        color: 'rgb(129,203,196)',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'rgb(255, 88, 116)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(247, 140, 108)',
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: 'rgb(199,146,234)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['attr-name', 'inserted'],
      style: {
        color: 'rgb(173, 219, 103)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url', 'entity'],
      style: {
        color: 'rgb(173, 219, 103)',
      },
    },
    {
      types: ['class-name', 'atrule', 'attr-value'],
      style: {
        color: 'rgb(255, 203, 139)',
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: 'rgb(214, 222, 235)',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
};
