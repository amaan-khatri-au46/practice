import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  region: string;
  area: number;
  population: number;
  flags: {
    png: string
  }
}

interface CountriesState {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

const initialState: CountriesState = {
  countries: [],
  loading: false,
  error: null,
};


export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch countries.';
      });
  },
});

export default countriesSlice.reducer;








