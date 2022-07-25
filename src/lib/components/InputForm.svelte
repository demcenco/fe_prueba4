<script>
	export let item;
	const options = ['Casa', 'Departamento'];
</script>

<div class="flex flex-col">
	<div class="form-control w-full ">
		<label for="" class="label">
			<span class="label-text">Titulo</span>
		</label>
		<input
			bind:value={item.title}
			type="text"
			placeholder="Titulo"
			class="input input-bordered w-full "
		/>
	</div>
	<div class="form-control w-full ">
		<label for="" class="label">
			<span class="label-text">Direccion</span>
		</label>
		<input
			bind:value={item.address}
			type="text"
			placeholder="Direccion"
			class="input input-bordered w-full "
		/>
	</div>
	<div class="form-control w-full ">
		<label for="" class="label">
			<span class="label-text">Dormitorios</span>
		</label>
		<input
			bind:value={item.rooms}
			type="number"
			placeholder="Dormitorios"
			class="input input-bordered w-full "
		/>
	</div>
	<div class="form-control w-full ">
		<label for="" class="label">
			<span class="label-text">Banos</span>
		</label>
		<input
			bind:value={item.baths}
			type="number"
			placeholder="Banos"
			class="input input-bordered w-full "
		/>
	</div>
	<div class="form-control w-full ">
		<label for="" class="label">
			<span class="label-text">Tipo de inmueble</span>
		</label>

		<select bind:value={item.type} class="select select-bordered w-full ">
			<option disabled selected>Seleccione un tipo</option>
			{#each options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	</div>
	<div class="form-control w-full ">
		<label for="" class="label">
			<span class="label-text">Precio</span>
		</label>
		<input
			bind:value={item.price}
			type="number"
			placeholder="Precio"
			class="input input-bordered w-full "
		/>
	</div>
	<div class="form-control ">
		<label class="label cursor-pointer">
			<span class="label-text text-md">Inmueble arrendado</span>
			<input
				checked={item.rented ? true : false}
				on:click={() => {
					item.rented = !item.rented ? 1 : 0;
				}}
				type="checkbox"
				class="toggle  toggle-primary transition-all duration-200"
			/>
		</label>
	</div>
	{#if item.rented}
		<!-- content here -->

		<div class="form-control w-full ">
			<label for="" class="label">
				<span class="label-text">Arrendado por</span>
			</label>
			<input
				bind:value={item.rented_by}
				type="text"
				placeholder="Arrendado por"
				class="input input-bordered w-full "
			/>
		</div>
	{/if}
</div>

<style>
	.label {
		@apply -mb-1.5 font-semibold;
	}
</style>
