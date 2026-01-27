import { supabase } from '../config/supabase.config.js';

async function checkdb() {
  try {
    const { error } = await supabase
      .from('users')
      .select('*')
      .limit(1);

    if (error) {
      console.log('DB connection failed:', error.message);
      return false;
    }

    console.log('DB connected successfully');
    return true;
  } catch (err) {
    console.log('Error checking DB connection:', err.message);
    return false;
  }
}

export default checkdb;
