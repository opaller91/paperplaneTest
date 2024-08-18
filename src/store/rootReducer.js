import { combineReducers } from 'redux';
import imageCarouselReducer from '../features/image-carousel/imageCarouselReducer';
import logoCarouselReducer from '../features/logo-carousel/logoCarouselReducer';
import instaPictureReducer from '../features/insta-pics/instaPictureReducer';
import projectSliceReducer from '../features/work-projects/projectSliceReducer';
import worktypeReducer from '../features/work-types/worktypeReducer';
import popupSliceReducer from '../features/popup/popupSliceReducer'
import navbarSliceReducer from '../features/navbar/navbarSliceReducer'
import homeSliceReducer from '../features/home-slice/homeSliceReducer'

const rootReducer = combineReducers({
  imageCarousel: imageCarouselReducer,
  logoCarousel: logoCarouselReducer,
  instaPicture: instaPictureReducer,
  projectSlice: projectSliceReducer,
  worktype: worktypeReducer,
  popup: popupSliceReducer,
  navbar: navbarSliceReducer,
  homeSlice: homeSliceReducer
});

export default rootReducer;
