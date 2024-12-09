import { setLogos, addLogo, removeLogo }  from './logoCarouselReducer';

export const setLogosCarousel = (value) => (dispatch) => {
    dispatch(setLogos(value));
  };
  
  export const addLogoCarousel = (value) => (dispatch) => {
    dispatch(addLogo(value));
  };
  
  export const removeLogoCarousel = (value) => (dispatch) => {
    dispatch(removeLogo(value));
  };