import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  selectedImage: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup: (state, action) => {
      state.isVisible = true;
      state.selectedImage = action.payload;
      console.log(state.selectedImage)
    },
    hidePopup: (state) => {
      state.isVisible = false;
      state.selectedImage = null;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export default popupSlice.reducer;
