import { createSlice } from '@reduxjs/toolkit';
import logo1 from '../../assets/images/logos/logo-brand1.png';
import logo2 from '../../assets/images/logos/logo-brand2.png';
import logo3 from '../../assets/images/logos/logo-brand3.png';
import logo4 from '../../assets/images/logos/logo-brand4.png';
import logo5 from '../../assets/images/logos/logo-brand5.png';
import logo6 from '../../assets/images/logos/logo-brand6.png';
import logo7 from '../../assets/images/logos/logo-brand7.png';
import logo8 from '../../assets/images/logos/logo-brand8.png';

const initialState = {
  logos: [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
  ],
};

const logoCarousel = createSlice({
  name: 'logoCarousel',
  initialState,
  reducers: {},
});

export default logoCarousel.reducer;