<script>
	import { post } from '$lib/api';

	import Alert from '$lib/components/Alert.svelte';
	import InputForm from '$lib/components/InputForm.svelte';
	import { updateSchema } from '$lib/schemas';
	import { alert } from '$lib/stores';

	export let item = {
		title: null,
		address: null,
		rooms: null,
		baths: null,
		type: null,
		price: null,
		rented: 0,
		rented_by: null
	};

	async function registerItem() {
		try {
			let validate = await updateSchema.validate(item);

			const data = await post(``, { item });
			$alert.push({ message: 'Propiedad ingresada', type: 'success' });
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
		<div class="text-lg font-semibold">Registro de propiedad</div>
		<div>
			<InputForm bind:item />
		</div>
		<div class=" flex justify-center mt-4">
			<button class="btn btn-primary" on:click={() => registerItem()}>Registrar Propiedad</button>
		</div>
	</div>
</div>
