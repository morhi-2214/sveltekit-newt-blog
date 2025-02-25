<script lang="ts">
	import type { PageData } from './$types';
	import Card from './Card.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>OimOyaの技術ブログ</title>
	<meta name="description" content="フロントエンドエンジニアのOimOyaが運営する技術ブログです。" />
</svelte:head>

<main class="mx-auto max-w-7xl">
	<h1 class="mt-4 text-3xl font-bold">記事一覧</h1>

	<ul class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.articles as article (article._id)}
			<Card {article} />
		{/each}
	</ul>
</main>
