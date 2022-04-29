import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { snappySlice } from '@state/slices/app/app.slice';
import { editorCustomizationSlice } from '@state/slices/editor/editorCustomization.slice';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  editor: editorCustomizationSlice.reducer,
  snappy: snappySlice.reducer,
});

const persistConfig = {
  key: 'root',
  version: 5,
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
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
