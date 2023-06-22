import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../store/countrySlice';
import thunkMiddleware from 'redux-thunk';


const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
