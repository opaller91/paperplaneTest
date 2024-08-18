import { createSlice } from '@reduxjs/toolkit';
import image1 from '../../assets/images/carousel-slice/image-slide1.png';
import image2 from '../../assets/images/carousel-slice/image-slide2.png';
import image3 from '../../assets/images/carousel-slice/image-slide3.png';

const initialState = {
  images: [image1, image2, image3],
  currentIndex: 0,
  intervalId: null,
  animationDirection: 'next',
};

const imageCarousel = createSlice({
  name: 'imageCarousel',
  initialState,
  reducers: {
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
  },
});

export const { updateCurrentIndex, setIntervalId, clearIntervalId, setAnimationDirection } = imageCarousel.actions;

export default imageCarousel.reducer;
