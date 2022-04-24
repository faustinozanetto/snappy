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
  backgroudBlur?: number;
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

export enum FileExtension {
  PNG = 'png',
  SVG = 'svg',
  JPEG = 'jpeg',
}

export type ExportCustomization = {
  fileExtension?: FileExtension;
  sizeMultiplier?: '1x' | '2x' | '3x' | '4x' | '5x';
};

export type ToolBoxEditorCustomizationState = {
  backgroundCustomization: BackgroundCustomization;
  fontCustomization: FontCustomization;
  codeCustomization: CodeCustomization;
  windowCustomization: WindowCustomization;
  exportCustomization: ExportCustomization;
};

const initialState: ToolBoxEditorCustomizationState = {
  backgroundCustomization: {
    backgroundType: BackgroundType.COLOR,
    backgroundImage: '',
    backgroudBlur: 0,
    backgroundColor: {
      r: 0,
      g: 195,
      b: 255,
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
    paddingX: 15,
    paddingY: 25,
    borderRadius: 15,
    shadow: {
      boxShadow: true,
      boxShadowSize: 2,
      boxShadowColor: {
        r: 43,
        g: 70,
        b: 231,
        a: 0.65,
      },
    },
  },
  exportCustomization: {
    fileExtension: FileExtension.PNG,
    sizeMultiplier: '1x',
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
    setExportCustomization: (
      state,
      action: PayloadAction<ExportCustomization>
    ) => {
      Object.assign(state.exportCustomization, action.payload);
    },
  },
});

export const {
  setBackgroundCustomization,
  setCodeCustomization,
  setFontCustomization,
  setWindowCustomization,
  setExportCustomization,
} = ToolBoxEditorCustomizationSlice.actions;

export const selectBackgroundCustomization = (state: RootState) =>
  state.toolboxEditor.backgroundCustomization;
export const selectCodeCustomization = (state: RootState) =>
  state.toolboxEditor.codeCustomization;
export const selectFontCustomization = (state: RootState) =>
  state.toolboxEditor.fontCustomization;
export const selectWindowCustomization = (state: RootState) =>
  state.toolboxEditor.windowCustomization;
export const selectExportCustomization = (state: RootState) =>
  state.toolboxEditor.exportCustomization;
