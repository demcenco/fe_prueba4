<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`/api/${params.property_id}`);
		let { item } = await res.json();

		return { props: { item } };
	}
</script>

<script>
	import { put } from '$lib/api';
	import Alert from '$lib/components/Alert.svelte';
	import { updateSchema } from '$lib/schemas';
	import { alert } from '$lib/stores';

	import InputForm from '../../lib/components/InputForm.svelte';

	export let item;
	async function updateitem() {
		try {
			let validate = await updateSchema.validate(item);
			const data = await put(`${item.id}`, { item });
			$alert.push({ message: 'Propiedad actualizada', type: 'success' });
			$alert = [...$alert];
		} catch (error) {
			$alert.push({ message: error.message, type: 'error' });
			$alert = [...$alert];
		}
	}
</script>

<div class="max-w-md  m-auto pb-4">
	<Alert />
</div>
<div class="bg-base-100 p-6 rounded-xl max-w-md m-auto">
	<div>
		<div class="text-lg font-semibold">Actualizacion de datos</div>
		<div>
			<InputForm bind:item />
		</div>
		<div class=" flex justify-center mt-4">
			<button class="btn btn-primary" on:click={() => updateitem()}>Actualizar</button>
		</div>
	</div>
</div>
