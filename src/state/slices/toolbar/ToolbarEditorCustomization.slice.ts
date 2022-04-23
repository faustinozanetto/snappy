import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/SnapifyStore';

export enum BackgroundType {
  COLOR = 'color',
  IMAGE = 'image',
}

export type ToolBoxEditorCustomizationState = {
  backgroundType: BackgroundType;
  backgroundColor: string;
};

const initialState: ToolBoxEditorCustomizationState = {
  backgroundType: BackgroundType.COLOR,
  backgroundColor: '#fff',
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
  },
});

export const { rehydrate, setBackgroundType, setBackgroundColor } =
  ToolBoxEditorCustomizationSlice.actions;

export const selectBackgroundType = (state: RootState) =>
  state.toolboxEditor.backgroundType;
export const selectBackgroundColor = (state: RootState) =>
  state.toolboxEditor.backgroundColor;
