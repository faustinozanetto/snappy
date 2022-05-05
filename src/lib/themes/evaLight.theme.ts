import type { HighlightTheme } from 'snappy.types';
import { CodeTheme } from 'snappy.types';

const EVA_LIGHT: HighlightTheme = {
  name: 'Eva Light',
  type: CodeTheme.EVA_LIGHT,
  plain: {
    color: '#5d5d5f',
    backgroundColor: '#ebeef5',
  },
  styles: [
    {
      types: ['url', 'regex'],
      style: {
        color: '#53A053',
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#8E8E90',
      },
    },
    {
      types: ['variable', 'property'],
      style: {
        color: '#CD6069',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#437AED',
      },
    },
    {
      types: ['builtin'],
      style: {
        color: '#FF6D12',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#A9A9AA',
      },
    },
    {
      types: ['class-name', 'attr-name', 'selector', 'string'],
      style: {
        color: '#437AED',
      },
    },
    {
      types: ['constant', 'hexcode', 'keyword'],
      style: {
        color: '#C838C6',
      },
    },
  ],
};
export default EVA_LIGHT;
