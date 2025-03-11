<script lang="ts">
	export let title: string;
	export let period: string;
	export let description: string;
	export let techs: string[];
</script>

<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
	<h3 class="text-lg font-bold text-gray-900">{title}</h3>
	<p class="mt-1 text-sm text-gray-500">{period}</p>
	<p class="mt-4 text-gray-700">{description}</p>
	{#if techs.length > 0}
		<div class="mt-4 flex flex-wrap gap-2">
			{#each techs as tech}
				<span class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">{tech}</span>
			{/each}
		</div>
	{/if}
</div>
