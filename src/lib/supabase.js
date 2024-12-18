import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

export const supabase = createClient(
	'https://qwyzbeeyemkqdnxfcmnr.supabase.co',
	process.env.SUPABASE
);
