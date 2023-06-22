import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppDispatch = typeof store.dispatch;

export default store;
