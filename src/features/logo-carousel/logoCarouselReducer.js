import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logos: []
};

const logoCarousel = createSlice({
  name: 'logoCarousel',
  initialState,
  reducers: {
    setLogos(state, action) {
      state.logos = action.payload;
    },
    addLogo(state, action) {
      const newLogo = action.payload;
      if (newLogo && typeof newLogo === 'string') {
        state.logos.push(newLogo);
      }
    },
    removeLogo(state, action) {
      state.logos = state.logos.filter(logo => logo !== action.payload);
    },
  }
});

export const { setLogos, addLogo, removeLogo, updateLogo } = logoCarousel.actions;

export default logoCarousel.reducer;