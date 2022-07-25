<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api');
		const { data } = await res.json();

		return { props: { data } };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { del, get } from '$lib/api';
	import Alert from '$lib/components/Alert.svelte';
	import Property from '$lib/components/Property.svelte';
	import { alert } from '$lib/stores';

	export let data;
	let datos = data;
	async function deleteItem(item) {
		await del(item.detail);
		const res = await get('');
		datos = await [...res.data];
		$alert.push({ message: 'Propiedad eliminada', type: 'success' });
		$alert = [...$alert];
	}

	function newAlert() {
		$alert.push('asd');
		$alert = [...$alert];
	}
</script>

<div class="max-w-6xl m-auto  rounded-xl md:p-6 gap-4 ">
	<Alert />

	<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
		<div
			on:click={() => goto('/new')}
			class="shadow cursor-pointer flex flex-col h-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 duration-300 p-4 rounded-xl w-full items-center justify-center "
		>
			<div class="text-lg font-semibold">Agregar Nueva Propiedad</div>
			<div class=" font-extrabold text-4xl ">+</div>
		</div>
		{#each datos as item}
			<Property on:delete={deleteItem} {item} />
		{/each}
	</div>
</div>
