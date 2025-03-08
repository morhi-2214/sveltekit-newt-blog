<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>タグ一覧 - OimOyaの技術ブログ</title>
	<meta name="description" content="記事のタグ一覧ページです。" />
</svelte:head>

<div class="mx-auto max-w-7xl">
	<h1 class="text-3xl font-bold">タグ一覧</h1>
	<div class="mt-8 flex flex-wrap gap-4">
		{#each data.tags as tag}
			<a
				href="/tags/{tag.slug}"
				class="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-gray-200"
			>
				<span class="mr-2">{tag.name}</span>
				<span class="rounded-full bg-gray-200 px-2 py-0.5 text-xs">{tag.count}</span>
			</a>
		{/each}
	</div>
</div>
