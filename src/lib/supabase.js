import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

export const supabase = createClient(
	'https://xtoynrsryzajppdnchmn.supabase.co',
	process.env.SUPABASE
);
