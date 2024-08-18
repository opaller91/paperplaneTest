import { updateScrollPosition, updateTotalHeight } from './homeSliceReducer';

export const setScrollPosition = (value) => (dispatch) => {
  dispatch(updateScrollPosition(value));
};

export const setTotalHeight = (value) => (dispatch) => {
  dispatch(updateTotalHeight(value));
};