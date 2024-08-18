import { createSelector } from '@reduxjs/toolkit';

const selectNavbarState = (state) => state.navbar;

export const selectedLogo = createSelector(
    [selectNavbarState],
    (navbar) => navbar.logo
);

export const selectedButtons = createSelector(
    [selectNavbarState],
    (navbar) => navbar.buttons
);

export const selectedIsMenuOpen = createSelector(
    [selectNavbarState],
    (navbar) => navbar.isMenuOpen
);

export const isProjectContentVisible = createSelector(
    [selectNavbarState],
    (navbar) => navbar.isProjectContentVisible
);

export const selectedActiveButtons = createSelector(
    [selectNavbarState],
    (navbar) => navbar.activeButtons
);