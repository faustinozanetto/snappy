import {
  Action,
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { ToolBoxEditorCustomizationSlice } from './slices/toolbar/ToolbarEditorCustomization.slice';

export type SnapifyState = {
  captureRef: React.RefObject<HTMLDivElement>;
};

const initialState: SnapifyState = {
  captureRef: null,
};

export const SnapifySlice = createSlice({
  name: 'snapify',
  initialState,
  reducers: {
    setCaptureRef: (state, action: PayloadAction<any>) => {
      state.captureRef = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    snapify: SnapifySlice.reducer,
    toolboxEditor: ToolBoxEditorCustomizationSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const { setCaptureRef } = SnapifySlice.actions;

export const selectCaptureRef = (state: RootState) => state.snapify.captureRef;
