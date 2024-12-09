import { supabase } from '../services/supabaseClient';
import { uploadFileService, removeFileService } from '../services/storageAPI';

const TABLE_NAME = 'studio';

export const fetchStudio = async () => {
    const { data, error } = await supabase.from(TABLE_NAME).select('*').single();
    if (error) throw new Error(`Failed to fetch studio data: ${error.message}`);
    return data;
};

export const updateDetailService = async (detail) => {
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .update({ detail: detail })
        .eq('id', 1);

    if (error) throw new Error(`Failed to update studio detail: ${error.message}`);
    
    console.log('Studio detail successfully updated!');
    return data;
};


export const updateImageService = async (file) => {
    if (!file) throw new Error('No file provided for updating.');
  
    try {

        const { data: currentData, error: fetchError } = await supabase
        .from(TABLE_NAME)
        .select('image')
        .eq('id', 1)
        .single();
  
      if (fetchError) throw new Error(`Failed to fetch current image: ${fetchError.message}`);
  
      const oldImageUrl = currentData?.image;
  
      const newImageUrl = await uploadFileService(file, TABLE_NAME);
  
      const { error: updateError } = await supabase
        .from(TABLE_NAME)
        .update({ image: newImageUrl })
        .eq('id', 1);
  
      if (updateError) throw new Error(`Failed to update image: ${updateError.message}`);
  
      if (oldImageUrl) {
        await removeFileService(oldImageUrl);
      }
  
      console.log('Image successfully updated:', newImageUrl.split('/').pop());
  
      return newImageUrl;
    } catch (error) {
      console.error('UpdateImageService Error:', error.message);
      throw error;
    }
  };
  