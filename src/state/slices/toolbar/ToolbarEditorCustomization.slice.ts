import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/SnapifyStore';

export enum BackgroundType {
  COLOR = 'color',
  IMAGE = 'image',
}

export enum CodeTheme {
  DRACULA = 'dracula',
  DUOTONEDARK = 'duotoneDark',
  DUOTONELIGHT = 'duotoneLight',
  GITHUB = 'github',
  NIGHTOWL = 'nightOwl',
  NIGTHOWLLIGHT = 'nightOwlLight',
  OCEANICNEXT = 'oceanicNext',
  OKAIDIA = 'okaidia',
  PALENIGHT = 'palenight',
  SHADESOFPURPLE = 'shadesOfPurple',
  SYNTHWAVE84 = 'synthwave84',
}

export enum CodeLanguage {
  C = 'c',
  CPP = 'cpp',
  CSHARP = 'csharp',
  GO = 'go',
  HASKELL = 'haskell',
  JAVA = 'java',
  JAVASCRIPT = 'javascript',
  JSX = 'jsx',
  TYPESCRIPT = 'typescript',
}
export type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type BackgroundCustomization = {
  backgroundType?: BackgroundType;
  backgroundColor?: Color;
  backgroundImage?: string;
};

export type FontCustomization = {
  fontFamily?: string;
  fontSize?: number;
};

export type CodeCustomization = {
  codeTheme?: CodeTheme;
  codeLanguage?: CodeLanguage;
  lineNumbers?: boolean;
};

export type WindowShadow = {
  boxShadow?: boolean;
  boxShadowSize?: number;
  boxShadowColor?: Color;
};

export type WindowCustomization = {
  paddingX?: number;
  paddingY?: number;
  borderRadius?: number;
  shadow?: WindowShadow;
};

export type ToolBoxEditorCustomizationState = {
  backgroundCustomization: BackgroundCustomization;
  fontCustomization: FontCustomization;
  codeCustomization: CodeCustomization;
  windowCustomization: WindowCustomization;
};

const initialState: ToolBoxEditorCustomizationState = {
  backgroundCustomization: {
    backgroundType: BackgroundType.COLOR,
    backgroundImage: '',
    backgroundColor: {
      r: 179,
      g: 179,
      b: 179,
      a: 1.0,
    },
  },
  fontCustomization: {
    fontFamily: 'JetBrains Mono',
    fontSize: 16,
  },
  codeCustomization: {
    codeTheme: CodeTheme.NIGHTOWL,
    codeLanguage: CodeLanguage.JSX,
    lineNumbers: true,
  },
  windowCustomization: {
    paddingX: 20,
    paddingY: 20,
    borderRadius: 10,
    shadow: {
      boxShadow: true,
      boxShadowSize: 1,
      boxShadowColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 0.5,
      },
    },
  },
};

export const ToolBoxEditorCustomizationSlice = createSlice({
  name: 'toolboxEditorCustomization',
  initialState,
  reducers: {
    setBackgroundCustomization: (
      state,
      action: PayloadAction<BackgroundCustomization>
    ) => {
      Object.assign(state.backgroundCustomization, action.payload);
    },
    setFontCustomization: (state, action: PayloadAction<FontCustomization>) => {
      Object.assign(state.fontCustomization, action.payload);
    },
    setCodeCustomization: (state, action: PayloadAction<CodeCustomization>) => {
      Object.assign(state.codeCustomization, action.payload);
    },
    setWindowCustomization: (
      state,
      action: PayloadAction<WindowCustomization>
    ) => {
      Object.assign(state.windowCustomization, action.payload);
    },
  },
});

export const {
  setBackgroundCustomization,
  setCodeCustomization,
  setFontCustomization,
  setWindowCustomization,
} = ToolBoxEditorCustomizationSlice.actions;

export const selectBackgroundCustomization = (state: RootState) =>
  state.toolboxEditor.backgroundCustomization;
export const selectCodeCustomization = (state: RootState) =>
  state.toolboxEditor.codeCustomization;
export const selectFontCustomization = (state: RootState) =>
  state.toolboxEditor.fontCustomization;
export const selectWindowCustomization = (state: RootState) =>
  state.toolboxEditor.windowCustomization;
