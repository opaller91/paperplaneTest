import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [],
  currentIndex: 0,
  intervalId: null,
  animationDirection: 'next'
};

const imageCarousel = createSlice({
  name: 'imageCarousel',
  initialState,
  reducers: {
    setImages(state, action) {
      state.images = action.payload;
    },
    updateCurrentIndex(state, action) {
      state.currentIndex = action.payload;
    },
    setIntervalId(state, action) {
      state.intervalId = action.payload;
    },
    clearIntervalId(state) {
      if (state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = null;
      }
    },
    setAnimationDirection(state, action) {
      state.animationDirection = action.payload;
    },
    addImage(state, action) {
      const newImage = action.payload;
      if (newImage && typeof newImage === 'string') {
        state.images.push(newImage);
      }
    },
    removeImage(state, action) {
      state.images = state.images.filter(image => image !== action.payload);
    },
  }
});

export const {
  setImages,
  updateCurrentIndex,
  setIntervalId,
  clearIntervalId,
  setAnimationDirection,
  addImage,
  removeImage,
  updateImage
} = imageCarousel.actions;

export default imageCarousel.reducer;