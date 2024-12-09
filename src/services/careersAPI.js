import { supabase } from "../services/supabaseClient";

const TABLE_NAME = 'career';

export const fetchCareer = async () => {
  const { data, error } = await supabase.from(TABLE_NAME).select("*").single();
  if (error) throw new Error(`Failed to fetch career data: ${error.message}`);
  return data;
};

export const updateCareerHeaderService = async (header) => {
  const { error } = await supabase.from(TABLE_NAME).update({ career_header: header }).eq("id", 1);
  if (error) throw new Error(`Failed to update header: ${error.message}`);
  console.log('Career header successfully added:', header);
};

export const updateCareerEmailService = async (email) => {
  const { error } = await supabase.from(TABLE_NAME).update({ email: email }).eq("id", 1);
  if (error) throw new Error(`Failed to update email: ${error.message}`);
  console.log('Career email successfully added:', email);
};
