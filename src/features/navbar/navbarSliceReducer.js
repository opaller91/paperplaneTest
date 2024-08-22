import { createSlice } from '@reduxjs/toolkit';
import logo from '../../assets/images/logos/logo-main.png';

const initialState = {
  logo: logo,
  buttons: [
    { title: 'HOME', link: '/', width: '116px' },
    {
      title: 'PROJECT',
      link: '/projects',
      projects: [
        { title: '', link: '', width: '116px' },
        { title: 'All', link: '/projects', width: '50px' },
        { title: 'Architecture', link: '/projects/architecture', width: '136px' },
        { title: 'Interior', link: '/projects/interior', width: '88px' },
        { title: 'Object', link: '/projects/object', width: '88px' },
      ],
      width: '126px',
    },
    { title: 'STUDIO', link: '/studio', width: '116px' },
    { title: 'CAREER', link: '/career', width: '116px' },
    { title: 'CONTACT', link: '/contact-us', width: '126px' },
  ],
  isMenuOpen: false,
  isProjectContentVisible: false,
  activeButtons: [],
};

// Redux slice code remains the same
const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setLogo(state, action) {
      state.logo = action.payload;
    },
    setButtons(state, action) {
      state.buttons = action.payload;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
      if (!state.isMenuOpen) {
        state.activeButtons = [];
        state.isProjectContentVisible = false;
      }
    },
    toggleProjectContent(state) {
      state.isProjectContentVisible = !state.isProjectContentVisible;
      if (state.isProjectContentVisible) {
        state.activeButtons = ['PROJECT'];
      } else {
        state.activeButtons = state.activeButtons.filter(title => title !== 'PROJECT');
      }
    },
    setActiveButton(state, action) {
      const buttonTitle = action.payload;

      if (buttonTitle === 'PROJECT') {
        if (state.isProjectContentVisible) {
          state.isProjectContentVisible = false;
          state.activeButtons = state.activeButtons.filter(title => title !== 'PROJECT');
        } else {
          state.isProjectContentVisible = true;
          state.activeButtons = ['PROJECT'];
        }
      } else if (['STUDIO', 'CAREER', 'CONTACT', 'HOME'].includes(buttonTitle)) {
        state.isProjectContentVisible = false;
        state.activeButtons = [buttonTitle];
      } else if (state.isProjectContentVisible) {
        state.activeButtons = ['PROJECT', buttonTitle];
      } else {
        state.activeButtons = [buttonTitle];
      }
    },
  },
});

export const { setLogo, setButtons, toggleMenu, toggleProjectContent, setActiveButton } = navbarSlice.actions;

export default navbarSlice.reducer;