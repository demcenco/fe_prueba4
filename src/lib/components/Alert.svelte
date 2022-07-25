<script>
	import { alert } from '$lib/stores';

	$: $alert.length, alertHandle();
	let timeout;
	function alertHandle() {
		if ($alert.length) {
			if (!timeout) {
				timeout = setInterval(() => {
					$alert.splice(0, 1);
					$alert = [...$alert];
				}, 3000);
			}
		} else {
			if (timeout) {
				clearInterval(timeout);
				timeout = null;
			}
		}
	}
</script>

{#if $alert.length}
	<div class=" absolute bottom-0 right-0 p-5 ">
		<div
			class="alert rounded-lg font-bold "
			class:alert-warning={$alert[0].type == 'error'}
			class:alert-success={$alert[0].type == 'success'}
		>
			{$alert[0].message}
		</div>
	</div>
{/if}
