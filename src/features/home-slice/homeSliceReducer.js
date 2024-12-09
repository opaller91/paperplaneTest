import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollPosition: 0,
  totalHeight: 0,
  description: '',
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    updateHomeDescription(state, action) {
      state.description = action.payload;
    },
    updateScrollPosition(state, action) {
      state.scrollPosition = action.payload;
    },
    updateTotalHeight(state, action) {
      state.totalHeight = action.payload;
    },
  },
});

export const { updateHomeDescription, updateScrollPosition, updateTotalHeight } = homeSlice.actions;

export default homeSlice.reducer;