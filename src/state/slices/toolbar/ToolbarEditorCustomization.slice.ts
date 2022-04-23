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
  TYPESCRIPT = 'typescript',
}

export type ToolBoxEditorCustomizationState = {
  backgroundType: BackgroundType;
  backgroundColor: string;
  fontFamily: string;
  fontSize: number;
  codeTheme: CodeTheme;
  codeLanguage: CodeLanguage;
  paddingX: number;
  paddingY: number;
  borderRadius: number;
};

const initialState: ToolBoxEditorCustomizationState = {
  backgroundType: BackgroundType.COLOR,
  backgroundColor: '#fff',
  fontFamily: 'Roboto',
  fontSize: 14,
  codeTheme: CodeTheme.DARK,
  codeLanguage: CodeLanguage.TYPESCRIPT,
  paddingX: 10,
  paddingY: 10,
  borderRadius: 5,
};

export const ToolBoxEditorCustomizationSlice = createSlice({
  name: 'toolboxEditorCustomization',
  initialState,
  reducers: {
    rehydrate(state, action: PayloadAction<ToolBoxEditorCustomizationState>) {
      state.backgroundType = action.payload.backgroundType;
    },
    setBackgroundType: (state, action: PayloadAction<BackgroundType>) => {
      state.backgroundType = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      if (action.payload > 0 && action.payload <= 40) {
        state.fontSize = action.payload;
      }
    },
    setCodeTheme: (state, action: PayloadAction<CodeTheme>) => {
      state.codeTheme = action.payload;
    },
    setCodeLanguage: (state, action: PayloadAction<CodeLanguage>) => {
      state.codeLanguage = action.payload;
    },
    setPaddingX: (state, action: PayloadAction<number>) => {
      state.paddingX = action.payload;
    },
    setPaddingY: (state, action: PayloadAction<number>) => {
      state.paddingY = action.payload;
    },
    setBorderRadius: (state, action: PayloadAction<number>) => {
      state.borderRadius = action.payload;
    },
  },
});

export const {
  rehydrate,
  setBackgroundType,
  setBackgroundColor,
  setFontFamily,
  setFontSize,
  setCodeLanguage,
  setCodeTheme,
  setPaddingX,
  setPaddingY,
  setBorderRadius,
} = ToolBoxEditorCustomizationSlice.actions;

export const selectBackgroundType = (state: RootState) =>
  state.toolboxEditor.backgroundType;
export const selectBackgroundColor = (state: RootState) =>
  state.toolboxEditor.backgroundColor;
export const selectFontFamily = (state: RootState) =>
  state.toolboxEditor.fontFamily;
export const selectFontSize = (state: RootState) =>
  state.toolboxEditor.fontSize;
export const selectCodeLanguage = (state: RootState) =>
  state.toolboxEditor.codeLanguage;
export const selectCodeTheme = (state: RootState) =>
  state.toolboxEditor.codeTheme;
export const selectPaddingX = (state: RootState) =>
  state.toolboxEditor.paddingX;
export const selectPaddingY = (state: RootState) =>
  state.toolboxEditor.paddingY;
export const selectBorderRadius = (state: RootState) =>
  state.toolboxEditor.borderRadius;
