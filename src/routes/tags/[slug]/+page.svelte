<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '../../Card.svelte';
	import Pagination from '../../Pagination.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.tag.name}の記事一覧 - OimOyaの技術ブログ</title>
	<meta name="description" content="{data.tag.name}に関する記事の一覧ページです。" />
</svelte:head>

<div class="mx-auto max-w-7xl">
	<div class="flex items-center gap-4">
		<h1 class="text-3xl font-bold">
			<span class="inline-flex items-center rounded-full bg-gray-100 px-4 py-2">
				{data.tag.name}
			</span>
			の記事一覧
		</h1>
		<a href="/tags" class="text-sm text-gray-500 hover:text-gray-700">← タグ一覧へ戻る</a>
	</div>

	<ul class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.articles as article (article._id)}
			<Card {article} />
		{/each}
	</ul>

	{#if data.totalPages > 1}
		<Pagination totalPages={data.totalPages} currentPage={data.currentPage} />
	{/if}
</div>
