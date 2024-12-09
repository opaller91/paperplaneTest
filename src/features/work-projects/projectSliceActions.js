import {  
    setAllProjectsState,
    addProjectState,
    updateProjectState,
    removeProjectState,
    selectProjectState,
    setLoadingState,
} from './projectSliceReducer';

export const setAllProjects = (value) => (dispatch) => {
    dispatch(setAllProjectsState(value));
};

export const updateProject = (value) => (dispatch) => {
    dispatch(updateProjectState(value));
};  
  
export const addProject = (value) => (dispatch) => {
    dispatch(addProjectState(value));
};

export const removeProject = (projectId) => (dispatch) => {
    dispatch(removeProjectState(projectId));
  };

export const setSelectProject = (project) => (dispatch) => {
    dispatch(selectProjectState(project));
};

export const setLoading = (project) => (dispatch) => {
    dispatch(setLoadingState(project));
};



