import type { HighlightTheme } from 'snappy.types';
import { CodeTheme } from 'snappy.types';

const OUTRUN_NIGHT: HighlightTheme = {
  name: 'Outrun Night',
  type: CodeTheme.OUTRUN_NIGHT,
  plain: {
    color: '#ebecf8',
    backgroundColor: '#161130',
  },
  styles: [
    {
      types: ['comment', 'string'],
      style: {
        color: '#546A90',
        fontStyle: 'italic',
      },
    },
    {
      types: ['number'],
      style: {
        color: '#FFD400',
      },
    },
    {
      types: ['builtin', 'char', 'constant'],
      style: {
        color: '#DF85FF',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#A875FF',
        fontStyle: 'italic',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#FFFFFF',
      },
    },
    {
      types: ['tag'],
      style: {
        color: '#42C6FF',
      },
    },
    {
      types: ['attr-name', 'selector'],
      style: {
        color: '#FF2AFC',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: '#E61F44',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: '#A6E22E',
      },
    },
    {
      types: ['changed'],
      style: {
        color: '#F7B83D',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#6494A9',
      },
    },
    {
      types: ['hexcode'],
      style: {
        color: '#CCCCCC',
      },
    },
    {
      types: ['property'],
      style: {
        color: '#D86BFF',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#1EA8FC',
      },
    },
  ],
};
export default OUTRUN_NIGHT;
