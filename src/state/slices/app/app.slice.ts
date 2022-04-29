import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@state/redux/snappyStore';
import { SnappyState, Presets } from 'snappy.types';

const initialState: SnappyState = {
  customizationPreset: Presets.DEFAULT,
};

export const snappySlice = createSlice({
  name: 'snappy',
  initialState,
  reducers: {
    setCustomizationPreset: (state, action: PayloadAction<Presets>) => {
      state.customizationPreset = action.payload;
    },
  },
});

export const { setCustomizationPreset } = snappySlice.actions;

export const selectCustomizationPreset = (state: RootState) => state.snappy.customizationPreset;
