import { createSelector } from '@reduxjs/toolkit';

const selectCarouselState = (state) => state.imageCarousel;

export const selectImages = createSelector(
  [selectCarouselState],
  (carousel) => carousel.images
);

export const selectCurrentIndex = createSelector(
  [selectCarouselState],
  (carousel) => carousel.currentIndex
);

export const selectAnimationDirection = createSelector(
  [selectCarouselState],
  (carousel) => carousel.animationDirection
);
