import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

export const supabase = createClient(
	'https://goumczrrmtvftadelbms.supabase.co',
	process.env.SUPABASE
);
