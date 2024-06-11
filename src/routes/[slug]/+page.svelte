<script>
	export let data;
	data = data.slug.url;
	import { onMount } from 'svelte';
	onMount(() => {
		window.location = data;
	});
</script>

<div>
	redirecting to <a href={data}>{data}</a>
</div>
