import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  filteredProjects: [],
  selectedProject: null,
  loading: false,
};

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    setAllProjectsState(state, action) {
      state.projects = action.payload;
      if (state.filteredProjects.length === 0) {
        state.filteredProjects = action.payload;
      }
    },
    addProjectState(state, action) {
      state.projects.push(action.payload);
      state.filteredProjects.push(action.payload);
    },
    filterProjectsByType(state, action) {
      if (action.payload === 'All') {
        state.filteredProjects = state.projects;
      } else {
        state.filteredProjects = state.projects.filter(
          (project) => project.type === action.payload
        );
      }
    },
    // filterProjectsByName(state, action) {
    //   const query = action.payload.toLowerCase();
    //   state.filteredProjects = state.projects.filter((project) =>
    //     project.name.toLowerCase().includes(query)
    //   );
    // },
    filterProjectsByName(state, action) {
      const query = action.payload ? action.payload.toLowerCase() : '';
      if (!query) {
        state.filteredProjects = state.projects;
      } else {
        state.filteredProjects = state.projects.filter((project) => {
          return project.name && project.name.toLowerCase().includes(query);
      });
      }
    },
    resetFilter(state) {
      state.filteredProjects = state.projects;
    },
    removeProjectState(state, action) {
      state.projects = state.projects.filter((project) => project.id !== action.payload);
    },
    updateProjectState(state, action) {
      const { id, changes } = action.payload;
    
      const projectIndex = state.projects.findIndex((project) => project.id === id);
    
      if (projectIndex !== -1) {
        state.projects[projectIndex] = {
          ...state.projects[projectIndex],
          ...changes,
        };
      }
    },
    selectProjectState(state, action) {
      state.selectedProject = action.payload;
    },
    setLoadingState(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { 
  setAllProjectsState,
  addProjectState,
  updateProjectState,
  filterProjectsByType,
  filterProjectsByName,
  resetFilter,
  removeProjectState,
  selectProjectState,
  setLoadingState,
 } = projectSlice.actions;

export default projectSlice.reducer;