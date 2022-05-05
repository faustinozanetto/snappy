import type { HighlightTheme } from 'snappy.types';
import { CodeTheme } from 'snappy.types';

const AURORA: HighlightTheme = {
  name: 'Aurora',
  type: CodeTheme.AURORA,
  plain: {
    color: '#f8f8f2',
    backgroundColor: '#07090f',
  },
  styles: [
    {
      types: ['comment', 'punctuation'],
      style: {
        color: 'rgb(84, 110, 122)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(238, 255, 255)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(255, 255, 255)',
      },
    },
    {
      types: ['keyword', 'builtin', 'number', 'char'],
      style: {
        color: 'rgb(247, 140, 108)',
      },
    },
    {
      types: ['tag', 'deleted', 'string'],
      style: {
        color: 'rgb(240, 113, 120)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(130, 170, 255)',
      },
    },
    {
      types: ['symbol', 'inserted'],
      style: {
        color: 'rgb(195, 232, 141)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 203, 107)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(199, 146, 234)',
      },
    },
  ],
};
export default AURORA;
