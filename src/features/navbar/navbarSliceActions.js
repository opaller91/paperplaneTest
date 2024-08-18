import { toggleProjectContent, setActiveButton, toggleMenu } from './navbarSliceReducer';

export const handleProjectButtonClick = () => (dispatch) => {
  dispatch(toggleProjectContent());
};

export const setActiveButtons = (buttonTitle) => (dispatch) => {
  dispatch(setActiveButton(buttonTitle));
};

export const toggleMenuHandler = () => (dispatch) => {
  dispatch(toggleMenu());
};