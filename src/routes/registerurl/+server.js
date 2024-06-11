import { supabase } from '../../lib/supabase.js';
import { nanoid } from 'nanoid';
import { isUrl } from 'check-valid-url';

export async function POST({ request, url }) {
	console.log('ran');
	let req = await request.json();
	if (isUrl(req.url)) {
		console.log('valid url');
		let urlrand = nanoid(5);
		const { data } = await supabase.from('links').insert({
			name: urlrand,
			url: req.url,
			ip: []
		});
		if (url.href.replace(/registerurl/g, "") = 'https://throw-me-ten.vercel.app/') {
			return new Response('https://69x.vercel.app/' + urlrand);
		}
		return new Response(url.href.replace(/registerurl/g, "") + urlrand);
	} else {
		console.log('not valid url');
		return new Response('not a valid url');
	}
}
