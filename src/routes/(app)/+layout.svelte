<script lang="ts">
	import type { LayoutProps } from './$types';
	import Profile from '../Profile.svelte';

	let { data, children }: LayoutProps = $props();
</script>

<div class="mx-auto max-w-7xl">
	<div class="flex flex-col gap-8 lg:flex-row">
		<div class="flex-1">
			{@render children()}
		</div>
		{#if data.author && data.author._id}
			<div class="flex-0 lg:w-72">
				<div class="sticky top-4">
					<Profile author={data.author} />
				</div>
			</div>
		{/if}
	</div>
</div>
