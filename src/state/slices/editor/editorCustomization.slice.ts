import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@state/redux/snappyStore';
import type {
  BackgroundCustomization,
  CodeCustomization,
  EditorCustomizationState,
  ExportCustomization,
  FontCustomization,
  WindowCustomization,
} from 'snappy.types';
import { BackgroundType, CodeLanguage, CodeTheme, FileExtension, FontFamily } from 'snappy.types';

const initialState: EditorCustomizationState = {
  backgroundCustomization: {
    backgroundType: BackgroundType.GRADIENT,
    backgroundImage: '',
    backgroudBlur: 0,
    backgroundGradient: {
      data: {
        colors: [
          {
            r: 44,
            g: 0,
            b: 177,
            a: 1,
            position: 0,
          },
          {
            r: 245,
            g: 0,
            b: 210,
            a: 1,
            position: 1,
          },
        ],
        type: 'linear',
      },
      generated: 'linear-gradient(to right, rgba(44,0,177,1) 0%, rgba(245,0,210,1) 100%)',
    },
    backgroundColor: {
      r: 0,
      g: 195,
      b: 255,
      a: 1.0,
    },
  },
  fontCustomization: {
    fontFamily: FontFamily.JETBRAINSMONO,
    fontSize: 16,
    lineHeight: 1.35,
  },
  codeCustomization: {
    codeTheme: 'outrun-night',
    codeLanguage: CodeLanguage.JSX,
    lineNumbers: true,
  },
  windowCustomization: {
    paddingX: 20,
    paddingY: 25.5,
    borderRadius: 20,
    controls: true,
    shadow: {
      boxShadow: true,
      boxShadowSize: 3,
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
    sizeMultiplier: 1,
  },
};

export const editorCustomizationSlice = createSlice({
  name: 'editorCustomization',
  initialState,
  reducers: {
    setBackgroundCustomization: (state, action: PayloadAction<BackgroundCustomization>) => {
      Object.assign(state.backgroundCustomization, action.payload);
    },
    setFontCustomization: (state, action: PayloadAction<FontCustomization>) => {
      Object.assign(state.fontCustomization, action.payload);
    },
    setCodeCustomization: (state, action: PayloadAction<CodeCustomization>) => {
      Object.assign(state.codeCustomization, action.payload);
    },
    setWindowCustomization: (state, action: PayloadAction<WindowCustomization>) => {
      Object.assign(state.windowCustomization, action.payload);
    },
    setExportCustomization: (state, action: PayloadAction<ExportCustomization>) => {
      Object.assign(state.exportCustomization, action.payload);
    },
    setCustomization: (state, action: PayloadAction<EditorCustomizationState>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const {
  setBackgroundCustomization,
  setCodeCustomization,
  setFontCustomization,
  setWindowCustomization,
  setExportCustomization,
  setCustomization,
} = editorCustomizationSlice.actions;

export const selectBackgroundCustomization = (state: RootState) => state.editor.backgroundCustomization;
export const selectCodeCustomization = (state: RootState) => state.editor.codeCustomization;
export const selectFontCustomization = (state: RootState) => state.editor.fontCustomization;
export const selectWindowCustomization = (state: RootState) => state.editor.windowCustomization;
export const selectExportCustomization = (state: RootState) => state.editor.exportCustomization;
