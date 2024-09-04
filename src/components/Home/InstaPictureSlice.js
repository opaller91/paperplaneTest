import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInstaPictures } from '../../features/insta-pics/instaPictureSelectors';
import { showPopup, hidePopup } from '../../features/popup/popupSliceReducer';
import { isPopupVisible, selectedImage } from '../../features/popup/popupSliceSelectors';
import InstaPost from './InstaPost';

const InstaPictureSlice = () => {
    const dispatch = useDispatch();
    const pictures = useSelector(selectInstaPictures);
    const isVisible = useSelector(isPopupVisible);
    const selectImage = useSelector(selectedImage);

    const handleImageClick = (pic) => {
      dispatch(showPopup(pic));
    };
  
    const handleClosePopup = () => {
      dispatch(hidePopup());
    };


  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="grid grid-col-position gap-8 w-screen">
        {pictures && pictures.map((pic, index) => (
          <img
            key={index}
            src={pic.picture}
            alt={`Insta Pic ${index}`}
            className="object-cover cursor-pointer"
            onClick={() => handleImageClick(pic)}
          />
        ))}
      </div>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleClosePopup} >
          <div className="relative">
            <InstaPost 
                img={selectImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(InstaPictureSlice);