import { supabase } from '../services/supabaseClient';

const TABLE_NAME = 'contact';

export const fetchContact = async () => {
  const { data, error } = await supabase.from(TABLE_NAME).select('*').single();
  if (error) throw new Error(`Failed to fetch contact data: ${error.message}`);
  return data;
};

export const updateContactHeaderService = async (header) => {
  const { error } = await supabase.from(TABLE_NAME).update({ contact_header: header }).eq('id', 1);
  if (error) throw new Error(`Failed to update contact header: ${error.message}`);
  console.log('Contact header successfully added:', header);
};

export const updateContactLocationService = async (location) => {
  const { error } = await supabase.from(TABLE_NAME).update({ location }).eq('id', 1);
  if (error) throw new Error(`Failed to update contact location: ${error.message}`);
  console.log('Contact location successfully added:', location);
};

export const updateContactTelService = async (telephone) => {
  const { error } = await supabase.from(TABLE_NAME).update({ telephone }).eq('id', 1);
  if (error) throw new Error(`Failed to update contact tel: ${error.message}`);
  console.log('Contact telephone successfully added:', telephone);
};

export const updateContactEmailService = async (email) => {
  const { error } = await supabase.from(TABLE_NAME).update({ email }).eq('id', 1);
  if (error) throw new Error(`Failed to update contact email: ${error.message}`);
  console.log('Contact email successfully added:', email);
};

export const updateContactDescriptionService = async (description) => {
  const { error } = await supabase.from(TABLE_NAME).update({ description }).eq('id', 1);
  if (error) throw new Error(`Failed to update contact description: ${error.message}`);
  console.log('Contact description successfully added:', description);
};
