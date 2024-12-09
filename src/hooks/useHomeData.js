import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { supabase } from '../services/supabaseClient';
import { useSelector, useDispatch } from 'react-redux';
import {
  addImageCarousel,
  removeImageCarousel,
} from '../features/image-carousel/imageCarouselActions';
import {
  addLogoCarousel,
  removeLogoCarousel,
} from '../features/logo-carousel/logoCarouselActions';
import { setHomeDescription } from '../features/home-slice/homeSliceActions';
import {
  fetchHomepage,
  addImageService,
  removeImageService,
  updateDescriptionService,
} from '../services/homepageAPI';

export const useHomeData = () => {
  const images = useSelector((state) => state.imageCarousel.images || []);
  const logos = useSelector((state) => state.logoCarousel.logos || []);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { data, status, error } = useQuery(
    'homepage',
    fetchHomepage,
    {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  // Real-time subscription for updates
  useEffect(() => {
    const channel = supabase
      .channel('homepage-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'homepage' },
        (payload) => {
          queryClient.setQueryData("homepage", (prev) => ({
            ...prev,
            ...payload.new,
          }));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  const invalidateHomepageQuery = () => queryClient.invalidateQueries('homepage');

  const addImage = async (file) => {
    try {
      const newImageUrl = await addImageService(file, 'image');
      dispatch(addImageCarousel(newImageUrl));
      invalidateHomepageQuery();
    } catch (error) {
      console.error('Error adding image:', error.message);
    }
  };

  const removeImage = async (file) => {
    try {
      await removeImageService(file, 'image');
      dispatch(removeImageCarousel(file));
      invalidateHomepageQuery();
    } catch (error) {
      console.error('Error removing image:', error.message);
    }
  };

  const addLogo = async (file) => {
    try {
      const newLogoUrl = await addImageService(file, 'logo');
      dispatch(addLogoCarousel(newLogoUrl));
      invalidateHomepageQuery();
    } catch (error) {
      console.error('Error adding logo:', error.message);
    }
  };

  const removeLogo = async (file) => {
    try {
      await removeImageService(file, 'logo');
      dispatch(removeLogoCarousel(file));
      invalidateHomepageQuery();
    } catch (error) {
      console.error('Error removing logo:', error.message);
    }
  };

  const updateDescription = async (newDescription) => {
    try {
      await updateDescriptionService(newDescription);
      dispatch(setHomeDescription(newDescription));
      invalidateHomepageQuery();
    } catch (error) {
      console.error('Error updating description:', error.message);
    }
  };

  return {
    data,
    images,
    logos,
    addImage,
    removeImage,
    addLogo,
    removeLogo,
    updateDescription,
  };
};
