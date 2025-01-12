<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	import type { PageData } from './$types';

	export let data: PageData;
	const plugins = [gfmPlugin()];
</script>

<svelte:head>
	<title>{data.article.title}</title>
	<meta name="description" content="投稿詳細ページです" />
</svelte:head>

<div class="mx-auto my-5 max-w-5xl">
	<a href="/" class="flex items-center text-opacity-80 hover:underline"> ← 記事一覧に戻る</a>
</div>

<article class="mx-auto max-w-5xl p-4">
	<div class="text-center">
		<h1 class="mt-4 text-2xl font-bold md:text-4xl">
			{data.article.title}
		</h1>
		<time class="mt-2 block text-sm text-gray-500" datetime={data.article._sys.createdAt}>
			{data.article._sys.createdAt}
		</time>
	</div>
	<div class="prose mx-auto mt-8 w-screen rounded-lg bg-white px-8 py-4">
		<Markdown md={data.article.body} {plugins} />
	</div>
</article>
