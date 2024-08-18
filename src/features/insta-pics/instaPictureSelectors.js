import { createSelector } from '@reduxjs/toolkit';

const selectInstaPictureState = (state) => state.instaPicture;

export const selectInstaPictures = createSelector(
  [selectInstaPictureState],
  (instaPicture) => instaPicture.pictures
);
