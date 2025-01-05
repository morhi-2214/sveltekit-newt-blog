<script lang="ts">
	import type { PageData } from './$types';
	import Card from './Card.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Newt・SvelteKitブログ</title>
	<meta name="description" content="NewtとSvelteKitを利用したブログです" />
</svelte:head>

<main>
	<h1 class="mt-4 text-3xl font-bold">記事一覧</h1>

	<ul class="mt-4 grid grid-cols-1 gap-4">
		{#each data.articles as article (article._id)}
			<Card {article} />
		{/each}
	</ul>
</main>
