import { createSlice } from '@reduxjs/toolkit';
import picture1 from '../../assets/images/works/instagram-pics/insta-picture1.png';
import picture2 from '../../assets/images/works/instagram-pics/insta-picture2.png';
import picture3 from '../../assets/images/works/instagram-pics/insta-picture3.png';

const initialState = {
  pictures: [
    {
      picture: picture1,
      likes: '456,156',
      caption: 'Calmness over chaos 🍃'
    },
    {
      picture: picture2,
      likes: '72,158',
      caption: '✨Flawless by paper plane ♾️'
    },
    {
      picture: picture3,
      likes: '2,458',
      caption: 'Too glam🌆'
    }
  ],
};

const instaPictureSlice = createSlice({
  name: 'instaPicture',
  initialState,
  reducers: {},
});

export default instaPictureSlice.reducer;
