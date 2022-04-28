import { CodeTheme } from "@state/slices/editor/ToolbarEditorCustomization.slice";
import { HighlightThemeType } from "./HighlightTheme";

export const WINTER_IS_COMING: HighlightThemeType = {
  name: 'Winter is Coming',
  type: CodeTheme.WINTER_IS_COMING,
  plain: {
    color: '#a7dbf7',
    backgroundColor: '#011627',
  },
  styles: [
    {
      types: ['string'],
      style: {
        color: 'rgb(238, 255, 255)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(90, 190, 176)',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(153, 153, 153)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(188, 240, 192)',
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: 'rgb(141, 236, 149)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(161, 112, 198)',
      },
    },
    {
      types: ['builtin'],
      style: {
        color: 'rgb(146, 182, 244)',
      },
    },
    {
      types: ['char'],
      style: {
        color: 'rgb(130, 170, 255)',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'rgb(0, 191, 249)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(247, 236, 181)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(135, 175, 244)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(109, 189, 250)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(247, 236, 181)',
        fontStyle: 'italic',
      },
    },
  ],
};
