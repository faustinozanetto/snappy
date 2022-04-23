import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/SnapifyStore';

export enum BackgroundType {
  COLOR = 'color',
  IMAGE = 'image',
}

export enum CodeTheme {
  DARK = 'dark',
  LIGHT = 'light',
  MONOKAI = 'monokai',
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

export type BackgroundCustomization = {
  backgroundType?: BackgroundType;
  backgroundColor?: string;
};

export type FontCustomization = {
  fontFamily?: string;
  fontSize?: number;
};

export type CodeCustomization = {
  codeTheme?: CodeTheme;
  codeLanguage?: CodeLanguage;
};

export type WindowCustomization = {
  paddingX?: number;
  paddingY?: number;
  borderRadius?: number;
  boxShadow?: boolean;
  boxShadowSize?: number;
  lineNumbers?: boolean;
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
    backgroundColor: '#fff',
  },
  fontCustomization: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  codeCustomization: {
    codeTheme: CodeTheme.DARK,
    codeLanguage: CodeLanguage.JSX,
  },
  windowCustomization: {
    paddingX: 10,
    paddingY: 10,
    borderRadius: 5,
    boxShadow: true,
    boxShadowSize: 1,
    lineNumbers: true,
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
