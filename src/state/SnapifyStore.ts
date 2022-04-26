import {
  Action,
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { ToolBoxEditorCustomizationSlice } from './slices/toolbar/ToolbarEditorCustomization.slice';
import { loadState } from './LocalStorage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const reducers = combineReducers({
  snapify: SnapifySlice.reducer,
  toolboxEditor: ToolBoxEditorCustomizationSlice.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

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
