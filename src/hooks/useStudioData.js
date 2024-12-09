import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { supabase } from '../services/supabaseClient';
import {
    fetchStudio,
    updateDetailService,
    updateImageService,
} from '../services/studioAPI';

export const useStudioData = () => {
    const queryClient = useQueryClient();
  
    const { data, status, error } = useQuery(
      'studio',
      fetchStudio,
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
        .channel('studio-realtime')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'studio' },
          (payload) => {
            queryClient.setQueryData("studio", (prev) => ({
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
  
  
    const updateDetail = async (detail) => {
        await updateDetailService(detail);
        queryClient.invalidateQueries("studio");
    };

    const updateImage = async (file) => {
        await updateImageService(file);
        queryClient.invalidateQueries("studio");
    };
  
    return {
      data,
      updateDetail,
      updateImage,
    };
  };
  