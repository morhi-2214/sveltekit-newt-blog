<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '../../Card.svelte';
	import Pagination from '../../Pagination.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>OimOyaの技術ブログ</title>
	<meta name="description" content="フロントエンドエンジニアのOimOyaが運営する技術ブログです。" />
</svelte:head>

<div class="mx-auto max-w-7xl">
	<main class="flex-1">
		<h1 class="text-3xl font-bold">記事一覧</h1>
		<ul class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.articles as article (article._id)}
				<Card {article} />
			{/each}
		</ul>
		<Pagination totalPages={data.totalPages} currentPage={data.currentPage} />
	</main>
</div>
