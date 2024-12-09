import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { fetchCareer } from '../services/careersAPI';
import { supabase } from '../services/supabaseClient';
import { updateCareerHeaderService, updateCareerEmailService } from '../services/careersAPI';

export const useCareersData = () => {
    const queryClient = useQueryClient();
  
    // Fetch Career Data
    const { data, status, error } = useQuery("career", fetchCareer, {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 30 * 60 * 1000, // 30 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    });
  
    // Subscribe to real-time changes
    useEffect(() => {
      const channel = supabase
        .channel("career-realtime")
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "career" }, (payload) => {
          queryClient.setQueryData("career", (prev) => ({
            ...prev,
            ...payload.new,
          }));
        })
        .subscribe();
  
      return () => {
        supabase.removeChannel(channel);
      };
    }, [queryClient]);
  
    const updateCareerHeader = async (header) => {
      await updateCareerHeaderService(header);
      queryClient.invalidateQueries("career");
    };
  
    const updateCareerEmail = async (email) => {
      await updateCareerEmailService(email);
      queryClient.invalidateQueries("career");
    };
  
    return { data, updateCareerHeader, updateCareerEmail };
  };