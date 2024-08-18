import { createSelector } from '@reduxjs/toolkit';

const selectHomeSliceState = (state) => state.homeSlice;

export const selectedScrollPosition = createSelector(
  [selectHomeSliceState],
  (slice) => slice.scrollPosition
);

export const selectedTotalHeight = createSelector(
  [selectHomeSliceState],
  (slice) => slice.totalHeight
);
