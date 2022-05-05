import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/redux/snappyStore';
import type { SnappyState } from 'snappy.types';
import { Presets } from 'snappy.types';

const initialState: SnappyState = {
  customizationPreset: Presets.DEFAULT,
};

export const snappySlice = createSlice({
  initialState,
  name: 'snappy',
  reducers: {
    setCustomizationPreset: (state, action: PayloadAction<Presets>) => {
      Object.assign(state, { customizationPreset: action.payload });
    },
  },
});

export const { setCustomizationPreset } = snappySlice.actions;

export const selectCustomizationPreset = (state: RootState) => state.snappy.customizationPreset;
