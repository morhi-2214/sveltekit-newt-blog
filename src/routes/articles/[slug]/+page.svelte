<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils/date';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.article.title}</title>
	<meta name="description" content="投稿詳細ページです" />
</svelte:head>

<div class="mx-auto my-5">
	<a href="/" class="flex items-center text-opacity-80 hover:underline"> ← 記事一覧に戻る</a>
</div>

<article class="mx-auto p-4">
	<div class="text-center">
		<h1 class="mt-4 text-2xl font-bold md:text-4xl">
			{data.article.title}
		</h1>
		<time class="mt-2 block text-sm text-gray-500" datetime={data.article._sys.createdAt}>
			{formatDate(new Date(data.article._sys.createdAt), 'YYYY.M.D')}
		</time>
		{#if data.article.tags?.length > 0}
			<div class="mt-4 flex justify-center gap-2">
				{#each data.article.tags as tag}
					<a
						href="/tags/{tag.slug}"
						class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 transition-colors duration-300 hover:bg-gray-200"
					>
						{tag.name}
					</a>
				{/each}
			</div>
		{/if}
	</div>
	<div class="mx-auto mt-8 rounded-lg bg-white px-8 py-4">
		{@html data.article.body}
	</div>
</article>
