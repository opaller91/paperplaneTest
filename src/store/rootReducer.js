import { combineReducers } from 'redux';
import imageCarouselReducer from '../features/image-carousel/imageCarouselReducer';
import logoCarouselReducer from '../features/logo-carousel/logoCarouselReducer';
import projectSliceReducer from '../features/work-projects/projectSliceReducer';
import worktypeReducer from '../features/work-types/worktypeReducer';
import navbarSliceReducer from '../features/navbar/navbarSliceReducer'
import homeSliceReducer from '../features/home-slice/homeSliceReducer'

const rootReducer = combineReducers({
  imageCarousel: imageCarouselReducer,
  logoCarousel: logoCarouselReducer,
  projectSlice: projectSliceReducer,
  worktype: worktypeReducer,
  navbar: navbarSliceReducer,
  homeSlice: homeSliceReducer
});

export default rootReducer;