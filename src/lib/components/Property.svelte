<script>
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let item;
</script>

<div class="flex flex-col h-full bg-base-100 p-4 rounded-xl w-full">
	<div class="w-full flex-1">
		<div class="text-lg font-semibold">
			{item.title}
		</div>
		<div class="flex items-center mt-4 justify-center">
			{#if item.type == 'Casa'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-16 w-16"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-16 w-16"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
					/>
				</svg>
			{/if}
		</div>
		<div class="divider" />
		<div>
			<span class=" font-semibold">Precio</span>: {item.price}
		</div>
		<div>
			<span class=" font-semibold">Tipo</span>: {item.type}
		</div>
		<div>
			<span class=" font-semibold">Direccion</span>: {item.address}
		</div>
		<div>
			<span class=" font-semibold">Dormitorios</span>: {item.rooms}
			<span class="font-semibold"> Banos: </span>
			{item.baths}
		</div>
		<div>
			<span class=" font-semibold">Estado</span>: {item.rented ? 'Arrendado' : 'Disponible'}
		</div>
		{#if item.rented && item.rented_by}
			<div>
				<span class="font-semibold">Arrendatario</span>: {item.rented_by}
			</div>
		{/if}
	</div>
	<div class="flex items-center justify-center mt-4 gap-2">
		<button class="btn btn-sm btn-primary" on:click={() => goto(`/${item.id}`)}>Editar</button>
		<button class="btn btn-sm btn-warning" on:click={() => dispatch('delete', item.id)}
			>Eliminar</button
		>
	</div>
</div>
