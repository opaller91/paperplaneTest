import { createSelector } from '@reduxjs/toolkit';

const selectProjectState = (state) => state.projectSlice;

export const selectAllProjects = createSelector(
  [selectProjectState],
  (projectState) => Object.values(projectState.projects)
);

export const selectProject = createSelector(
  [selectProjectState],
  (projectState) => projectState.selectedProject
);

export const selectLoading= createSelector(
  [selectProjectState],
  (projectState) => projectState.loading
);

export const selectProjectType= createSelector(
  [selectProjectState],
  (projectState) => projectState.selectedType
);

export const selectedFilteredProjects = createSelector(
  [selectProjectState],
  (projectSlice) => projectSlice.filteredProjects
);

export const selectedSearchQuery = createSelector(
  [selectProjectState],
  (projectSlice) => projectSlice.searchQuery
);