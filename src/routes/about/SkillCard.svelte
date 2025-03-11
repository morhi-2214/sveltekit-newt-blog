<script lang="ts">
	export let category: string;
	export let skills: string[];
</script>

<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
	<h3 class="text-lg font-bold text-gray-900">{category}</h3>
	<div class="mt-4 flex flex-wrap gap-2">
		{#each skills as skill}
			<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{skill}</span>
		{/each}
	</div>
</div>
