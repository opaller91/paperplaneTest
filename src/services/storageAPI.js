import { supabase } from '../services/supabaseClient';

const BUCKET_NAME = 'images'

export const uploadFileService = async (file, folder) => {
    if (!file) throw new Error('No file provided for upload.');
  
    const filePath = `${folder}/${Date.now()}_${file.name}`;
  
    try {
      // Upload file to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true,
        });
  
      if (uploadError) {
        throw new Error(`Upload error: ${uploadError.message}`);
      }
  
      // Get public URL for the uploaded file
      const { data: publicUrlData, error: urlError } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(filePath);
  
      if (urlError || !publicUrlData?.publicUrl) {
        throw new Error(`URL generation error: ${urlError?.message || 'Unknown error'}`);
      }
  
      return publicUrlData.publicUrl;
    } catch (error) {
      console.error('UploadFileService Error:', error.message);
      throw error;
    }
  };

  export const removeFileService = async (fileUrl, folder) => {
    if (!fileUrl) throw new Error('No file URL provided for deletion.');
  
    try {
        const match = fileUrl.match(/https:\/\/[^/]+\/storage\/v1\/object\/public\/images\/([^/]+)\/(.+)/);

        if (!match || match.length < 3) {
        throw new Error('Invalid file URL format. Could not extract folder or file path.');
        }

        const folder = match[1];
        const filePath = match[2];

        const { error: removeError } = await supabase.storage
        .from(BUCKET_NAME)
        .remove([`${folder}/${filePath}`]);

        if (removeError) {
        throw new Error(`File removal error: ${removeError.message}`);
        }
  
    } catch (error) {
      console.error('RemoveFileService Error:', error.message);
      throw error;
    }
  };  