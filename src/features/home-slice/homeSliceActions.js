import { updateHomeDescription, updateScrollPosition, updateTotalHeight } from './homeSliceReducer';

export const setHomeDescription = (value) => (dispatch) => {
  dispatch(updateHomeDescription(value));
};

export const setScrollPosition = (value) => (dispatch) => {
  dispatch(updateScrollPosition(value));
};

export const setTotalHeight = (value) => (dispatch) => {
  dispatch(updateTotalHeight(value));
};