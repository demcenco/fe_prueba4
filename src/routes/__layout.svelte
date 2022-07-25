<script>
	import Navbar from '$lib/components/Navbar.svelte';

	import '../app.css';
</script>

<div class="flex flex-col  bg-base-200 h-screen">
	<Navbar />
	<div class="h-full p-4 flex-1">
		<slot />
	</div>
</div>
