import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface DataState {
  data: any | null;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  error: null,
};

// Define an async thunk for fetching data
const fetchData = createAsyncThunk(
  'data/fetchData', // Action type
  async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { setData, setError } = dataSlice.actions;
export { fetchData };
export default dataSlice.reducer;