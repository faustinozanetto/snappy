import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/SnapifyStore';

export enum BackgroundType {
  COLOR = 'color',
  IMAGE = 'image',
}

export type ToolBoxEditorCustomizationState = {
  backgroundType: BackgroundType;
  backgroundColor: string;
  fontFamily: string;
  fontSize: number;
};

const initialState: ToolBoxEditorCustomizationState = {
  backgroundType: BackgroundType.COLOR,
  backgroundColor: '#fff',
  fontFamily: 'Roboto',
  fontSize: 14,
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
  },
});

export const {
  rehydrate,
  setBackgroundType,
  setBackgroundColor,
  setFontFamily,
  setFontSize,
} = ToolBoxEditorCustomizationSlice.actions;

export const selectBackgroundType = (state: RootState) =>
  state.toolboxEditor.backgroundType;
export const selectBackgroundColor = (state: RootState) =>
  state.toolboxEditor.backgroundColor;
export const selectFontFamilty = (state: RootState) =>
  state.toolboxEditor.fontFamily;
export const selectFontSize = (state: RootState) =>
  state.toolboxEditor.fontSize;
