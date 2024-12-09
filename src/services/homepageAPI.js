import { supabase } from '../services/supabaseClient';
import { uploadFileService, removeFileService } from '../services/storageAPI';

const TABLE_NAME = 'homepage';

export const getfolder = (type) => {
    const folders = {
      image: 'image-carousel',
      logo: 'logo-carousel',
    };
  
    if (!folders[type]) {
      throw new Error(`Invalid type "${type}". Expected one of ${Object.keys(folders).join(', ')}.`);
    }
    return folders[type];
  };
  

export const fetchHomepage = async () => {
    const { data, error } = await supabase.from(TABLE_NAME).select('*').single();
    if (error) throw new Error(`Failed to fetch homepage data: ${error.message}`);
    return data;
};

export const addImageService = async (file, type) => {
    const folder = getfolder(type);
    const fileUrl = await uploadFileService(file, folder);

    const { data: currentData, error: fetchError } = await supabase
      .from(TABLE_NAME)
      .select(`carousel_${type}s`)
      .eq('id', 1)
      .single();
  
    if (fetchError) throw new Error(`Failed to fetch current data: ${fetchError.message}`);
  
    const currentArray = currentData[`carousel_${type}s`] || [];
  
    if (!Array.isArray(currentArray)) {
      throw new Error(`Expected JSON array but got ${typeof currentArray}`);
    }
  
    const updatedArray = [...currentArray, fileUrl];
  
    const { error: updateError } = await supabase
      .from(TABLE_NAME)
      .update({
        [`carousel_${type}s`]: updatedArray,
      })
      .eq('id', 1);
  
    if (updateError) throw new Error(`Failed to add image to carousel: ${updateError.message}`);

    console.log('File successfully added:', fileUrl.split('/').pop());
  
    return fileUrl;
};

export const removeImageService = async (fileUrl, type) => {
    await removeFileService(fileUrl);
  
    const { data: currentData, error: fetchError } = await supabase
      .from(TABLE_NAME)
      .select(`carousel_${type}s`)
      .eq('id', 1)
      .single();
  
    if (fetchError) throw new Error(`Failed to fetch current data: ${fetchError.message}`);
  
    // Ensure the current data is a valid array
    const currentArray = currentData[`carousel_${type}s`] || [];
  
    if (!Array.isArray(currentArray)) {
      throw new Error(`Expected JSON array but got ${typeof currentArray}`);
    }
  
    // Remove the file URL from the array
    const updatedArray = currentArray.filter((url) => url !== fileUrl);
  
    // Update the database with the new array
    const { error: updateError } = await supabase
      .from(TABLE_NAME)
      .update({
        [`carousel_${type}s`]: updatedArray,
      })
      .eq('id', 1);
  
    if (updateError) throw new Error(`Failed to update carousel: ${updateError.message}`);
    
    console.log('File successfully removed:', fileUrl.split('/').pop());

    return updatedArray;
};
    
export const updateDescriptionService = async (newDescription) => {
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .update({ description: newDescription })
        .eq('id', 1);

    if (error) throw new Error(`Failed to update home description: ${error.message}`);
    
    console.log('Home description successfully updated!');
    return data;
};
