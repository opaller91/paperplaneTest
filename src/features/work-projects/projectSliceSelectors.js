import { createSelector } from '@reduxjs/toolkit';

const selectProjectState = (state) => state.projectSlice;

// Selector to get all projects
export const selectedProjects = createSelector(
  [selectProjectState],
  (projectSlice) => projectSlice.projects
);

// Selector to get filtered projects
export const selectedFilteredProjects = createSelector(
  [selectProjectState],
  (projectSlice) => projectSlice.filteredProjects
);