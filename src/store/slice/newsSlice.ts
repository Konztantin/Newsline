import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

const initialState: any = {
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    changeNews(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export default newsSlice.reducer;

export const { changeNews } = newsSlice.actions;

export const selectFilterSession = (state: RootState) => state.news;
