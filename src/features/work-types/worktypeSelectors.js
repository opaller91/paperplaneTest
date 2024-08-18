import { createSelector } from '@reduxjs/toolkit';

const selectWorktypeState = (state) => state.worktype;

export const selectWorktypeImages = createSelector(
  [selectWorktypeState],
  (worktypeState) => worktypeState.worktypes
);
