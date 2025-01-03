<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Newt・SvelteKitブログ</title>
	<meta name="description" content="NewtとSvelteKitを利用したブログです" />
</svelte:head>

<main>
	<ul>
		{#each data.articles as article (article._id)}
			<li>
				<a href={`articles/${article.slug}`}>{article.title}</a>
			</li>
		{/each}
	</ul>
</main>
