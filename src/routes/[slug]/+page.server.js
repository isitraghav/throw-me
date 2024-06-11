import { supabase } from '../../lib/supabase';
    
export async function load({ params }) {
	const { data, error } = await supabase.from('links').select('url').like('name', [params.slug]);

	if (error) {
		console.log(error);
		return;
	} else {
		return {
			slug: data[0]
		};
	}
}
