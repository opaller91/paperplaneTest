import { createSelector } from '@reduxjs/toolkit';

const selectPopupState = (state) => state.popup;

export const isPopupVisible = createSelector(
  [selectPopupState],
  (popup) => popup.isVisible
);

export const selectedImage = createSelector(
  [selectPopupState],
  (popup) => popup.selectedImage
);