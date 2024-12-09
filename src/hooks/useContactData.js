import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { 
  fetchContact, 
  updateContactHeaderService, 
  updateContactLocationService, 
  updateContactTelService, 
  updateContactEmailService, 
  updateContactDescriptionService 
} from '../services/contactAPI';
import { supabase } from '../services/supabaseClient';

export const useContactData = () => {
  const queryClient = useQueryClient();

  // Fetch Contact Data
  const { data, status, error } = useQuery('contact', fetchContact, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // Real-time subscription for updates
  useEffect(() => {
    const channel = supabase
      .channel('contact-realtime')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'contact' },
        (payload) => {
          const updatedData = payload.new;

          // Update cache incrementally
          queryClient.setQueryData('contact', (prev) => ({
            ...prev,
            ...updatedData,
          }));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  const updateContactHeader = async (header) => {
    await updateContactHeaderService(header);
    queryClient.invalidateQueries('contact');
  };

  const updateContactLocation = async (location) => {
    await updateContactLocationService(location);
    queryClient.invalidateQueries('contact');
  };

  const updateContactTel = async (tel) => {
    await updateContactTelService(tel);
    queryClient.invalidateQueries('contact');
  };

  const updateContactEmail = async (email) => {
    await updateContactEmailService(email);
    queryClient.invalidateQueries('contact');
  };

  const updateContactDescription = async (description) => {
    await updateContactDescriptionService(description);
    queryClient.invalidateQueries('contact');
  };

  return {
    data,
    updateContactHeader,
    updateContactLocation,
    updateContactTel,
    updateContactEmail,
    updateContactDescription,
  };
};
