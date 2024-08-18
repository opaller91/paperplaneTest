import { updateCurrentIndex, setIntervalId, clearIntervalId, setAnimationDirection } from './imageCarouselReducer';

// Action to go to the next image
export const nextImage = () => (dispatch, getState) => {
  const state = getState();
  const { images, currentIndex } = state.imageCarousel || {};

  if (images && images.length > 0) {
    const newIndex = (currentIndex + 1) % images.length;
    dispatch(updateCurrentIndex(newIndex));
    dispatch(setAnimationDirection('next'));
  } else {
    console.error('Images array is empty or undefined.');
  }
};

// Action to go to the previous image
export const prevImage = () => (dispatch, getState) => {
  const state = getState();
  const { images, currentIndex } = state.imageCarousel || {};

  if (images && images.length > 0) {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    dispatch(updateCurrentIndex(newIndex));
    dispatch(setAnimationDirection('prev'));
  } else {
    console.error('Images array is empty or undefined.');
  }
};

// Action to set the current index directly
export const setCurrentIndex = (index) => (dispatch, getState) => {
  const state = getState();
  const { currentIndex } = state.imageCarousel;

  if (index > currentIndex) {
    dispatch(setAnimationDirection('next'));
  } else {
    dispatch(setAnimationDirection('prev'));
  }
  dispatch(updateCurrentIndex(index));
};

// Action to start automatic sliding
export const startAutomaticSliding = (interval) => (dispatch, getState) => {
  const state = getState();
  const { intervalId } = state.imageCarousel || {};

  // Clear any existing interval to prevent multiple intervals
  if (intervalId) {
    clearInterval(intervalId);
    dispatch(clearIntervalId());
  }

  // Create a new interval and store its ID
  const id = setInterval(() => {
    dispatch(nextImage());
  }, interval);

  // Dispatch an action to store the interval ID in the state
  dispatch(setIntervalId(id));
};

// Action to stop automatic sliding
export const stopAutomaticSliding = () => (dispatch, getState) => {
  const state = getState();
  const { intervalId } = state.imageCarousel || {};

  if (intervalId) {
    clearInterval(intervalId);
    dispatch(clearIntervalId());
  }
};

// Action to restart automatic sliding
export const restartAutomaticSliding = () => (dispatch) => {
  dispatch(stopAutomaticSliding());
  dispatch(startAutomaticSliding(4000));
}
