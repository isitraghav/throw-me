<script>
	import '../app.css';
</script>

<div class="dark justify-center flex items-center">
	<slot />
</div>

<style>
	.dark {
		background-color: #1c1e21;
        height: 100vh;
        color: aliceblue;
	}
</style>
