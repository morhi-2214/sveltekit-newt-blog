<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '../Card.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>OimOyaの技術ブログ</title>
	<meta name="description" content="フロントエンドエンジニアのOimOyaが運営する技術ブログです。" />
</svelte:head>

<div class="mt-8 max-w-none">
	<h1 class="mb-8 text-4xl font-bold">OimOyaの技術ブログへようこそ！</h1>
	<p class="mb-8 text-lg leading-8">
		フロントエンドエンジニアとして日々の開発で得た知見や、技術的な発見を共有していきます。
		主にフロントエンド開発、特にReactやTypeScriptに関する記事を投稿しています。
	</p>
	<div class="flex gap-4">
		<a
			href="/articles"
			class="inline-flex items-center rounded-md bg-gray-900 px-6 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
		>
			記事を見る →
		</a>
		<a
			href="/about"
			class="inline-flex items-center rounded-md border border-gray-900 px-6 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100"
		>
			ポートフォリオを見る →
		</a>
	</div>
</div>

<section class="mt-16">
	<h2 class="text-2xl font-bold">最新の記事</h2>
	<ul class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.latestArticles as article (article._id)}
			<Card {article} />
		{/each}
	</ul>
	<div class="mt-8 text-center">
		<a
			href="/articles"
			class="inline-flex items-center rounded-md bg-gray-900 px-6 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
		>
			すべての記事を見る →
		</a>
	</div>
</section>
