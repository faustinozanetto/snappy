import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/SnapifyStore';

export enum BackgroundType {
  COLOR = 'color',
  IMAGE = 'image',
}

export type ToolBoxEditorCustomizationState = {
  backgroundType: BackgroundType;
};

const initialState: ToolBoxEditorCustomizationState = {
  backgroundType: BackgroundType.COLOR,
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
  },
});

export const { rehydrate, setBackgroundType } =
  ToolBoxEditorCustomizationSlice.actions;

export const selectBackgroundType = (state: RootState) =>
  state.toolboxEditor.backgroundType;
