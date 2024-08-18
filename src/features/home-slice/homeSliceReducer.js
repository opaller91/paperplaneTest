import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollPosition: 0,
  totalHeight: 0,
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    updateScrollPosition(state, action) {
      state.scrollPosition = action.payload;
    },
    updateTotalHeight(state, action) {
      state.totalHeight = action.payload;
    },
  },
});

export const { updateScrollPosition, updateTotalHeight } = homeSlice.actions;

export default homeSlice.reducer;
