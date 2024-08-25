import { createSlice } from '@reduxjs/toolkit';
import project1 from '../../assets/images/works/projects/project1.png';
import project2 from '../../assets/images/works/projects/project2.png';
import project3 from '../../assets/images/works/projects/project3.png';
import project4 from '../../assets/images/works/projects/project4.png';
import project5 from '../../assets/images/works/projects/project5.png';
import project6 from '../../assets/images/works/projects/project6.png';
import project7 from '../../assets/images/works/projects/project7.png';
import project8 from '../../assets/images/works/projects/project8.png';
import project9 from '../../assets/images/works/projects/project9.png';
import project10 from '../../assets/images/works/projects/project10.png';

const initialState = {
  projects: [
    { image: project1, name: 'Tichuca, 2020', displayname: 'tichuca', year: '2020', location: 'Bangkok', type: "Architecture", photographer: 'xxxx', link: '##' },
    { image: project2, name: 'Paper Plane Project, 2021', displayname: 'paperplaneproject', year: '2021', location: 'Bangkok', type: "Interior", photographer: 'xxxx', link: '##' },
    { image: project3, name: 'Lloyd’s Club, 2023', displayname: 'lloyd’sclub', year: '2023', location: 'Bangkok', type: "Interior", photographer: 'xxxx', link: '##' },
    { image: project4, name: 'Gir, 2023', displayname: 'gir', year: '2023', location: 'Bangkok', type: "Object", photographer: 'xxxx', link: '##' },
    { image: project5, name: 'Tichuca, 2020', displayname: 'tichuca', year: '2020', location: 'Bangkok', type: "Architecture", photographer: 'xxxx', link: '##' },
    { image: project6, name: 'Tichuca, 2020', displayname: 'tichuca', year: '2020', location: 'Bangkok', type: "Architecture", photographer: 'xxxx', link: '##' },
    { image: project7, name: 'Tichuca, 2020', displayname: 'tichuca', year: '2020', location: 'Bangkok', type: "Architecture", photographer: 'xxxx', link: '##' },
    { image: project8, name: 'Tichuca, 2020', displayname: 'tichuca', year: '2020', location: 'Bangkok', type: "Architecture", photographer: 'xxxx', link: '##' },
    { image: project9, name: 'Tichuca, 2020', displayname: 'tichuca', year: '2020', location: 'Bangkok', type: "Architecture", photographer: 'xxxx', link: '##' },
    { image: project10, name: 'Tichuca, 2020', displayname: 'tichuca', year: '2020', location: 'Bangkok', type: "Architecture", photographer: 'xxxx', link: '##' },
  ],
  filteredProjects: [],  // To hold the filtered projects
};

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    filterProjectsByType(state, action) {
      state.filteredProjects = state.projects.filter(
        (project) => project.type === action.payload
      );
    },
    filterProjectsByName(state, action) {
      const query = action.payload.toLowerCase(); // Convert the query to lowercase
      state.filteredProjects = state.projects.filter(
        (project) => project.displayname.toLowerCase().includes(query) // Match any part of the displayname
      );
    },
    resetFilter(state) {
      state.filteredProjects = state.projects;
    },
  },
});

export const { filterProjectsByType, resetFilter, filterProjectsByName } = projectSlice.actions;

export default projectSlice.reducer;