import { supabase } from '../../lib/supabase.js';
import { nanoid } from 'nanoid';
import { isUrl } from 'check-valid-url';

export async function POST({ request, url }) {
	console.log('ran');
	let req = await request.json();
	if (isUrl(req.url)) {
		console.log('valid url');
		let urlrand = nanoid(5);
		try {
			const { data } = await supabase.from('links').insert({
				name: urlrand,
				url: req.url,
				ip: []
			});
		} catch (error) {
			console.log(error);
			return new Response('failed to register url');
		}
		
		if (url.href.replace(/registerurl/g, "") == 'https://throw-me-ten.vercel.app/') {
			return new Response('https://69x.now.sh/' + urlrand);
		}
		return new Response(url.href.replace(/registerurl/g, "") + urlrand);
	} else {
		console.log('not valid url');
		return new Response('not a valid url');
	}
}
