import { createSelector } from '@reduxjs/toolkit';

const selectCarouselState = (state) => state.logoCarousel;

export const selectLogos = createSelector(
  [selectCarouselState],
  (carousel) => carousel.logos
);
