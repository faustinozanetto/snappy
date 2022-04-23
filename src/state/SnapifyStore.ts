import {
  Action,
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';

export type SnapifyState = {
  hello: string;
};

const initialState: SnapifyState = {
  hello: 'world',
};

export const SnapifySlice = createSlice({
  name: 'snapify',
  initialState,
  reducers: {
    rehydrate(state, action: PayloadAction<SnapifyState>) {
      state.hello = action.payload.hello;
    },
    setHello: (state, action: PayloadAction<string>) => {
      state.hello = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    snapify: SnapifySlice.reducer,
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

export const { rehydrate, setHello } = SnapifySlice.actions;

export const selectHello = (state: RootState) => state.snapify.hello;