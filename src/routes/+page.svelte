<script lang="ts">
	import type { PageData } from './$types';
	import Card from './Card.svelte';
	import Profile from './Profile.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>OimOyaの技術ブログ</title>
	<meta name="description" content="フロントエンドエンジニアのOimOyaが運営する技術ブログです。" />
</svelte:head>

<div class="mx-auto max-w-7xl">
	<div class="mt-4 flex flex-col gap-8 lg:flex-row">
		<main class="flex-1">
			<h1 class="text-3xl font-bold">記事一覧</h1>
			<ul class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
				{#each data.articles as article (article._id)}
					<Card {article} />
				{/each}
			</ul>
		</main>
		{#if data.author && data.author._id}
			<div class="lg:w-80">
				<div class="sticky top-4">
					<Profile author={data.author} />
				</div>
			</div>
		{/if}
	</div>
</div>
