import { createSlice } from '@reduxjs/toolkit';
import worktype1 from '../../assets/images/works/worktypes/arch-design.png';
import worktype2 from '../../assets/images/works/worktypes/interior-design.png';
import worktype3 from '../../assets/images/works/worktypes/product-design.png';

const initialState = {
  worktypes: [
    {
      image: worktype1,
      title: 'ARCHITECTURAL DESIGN',
      link: '/projects/architecture'  // Add the correct path here
    },
    {
      image: worktype2,
      title: 'INTERIOR DESIGN',
      link: '/projects/interior'  // Add the correct path here
    },
    {
      image: worktype3,
      title: 'PRODUCT DESIGN',
      link: '/projects/object'  // Add the correct path here
    }
  ],
};


const worktypeSlice = createSlice({
  name: 'worktype',
  initialState,
  reducers: { },
});

export default worktypeSlice.reducer;
