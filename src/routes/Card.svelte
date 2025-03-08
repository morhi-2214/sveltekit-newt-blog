<script lang="ts">
	import type { Article } from '$lib/server/newt';
	import { formatDate } from '$lib/utils/date';

	type Props = {
		article: Article;
	};

	const { article }: Props = $props();
</script>

<a
	href="/articles/{article.slug}"
	class="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:shadow-lg"
>
	{#if article.coverImage}
		<div class="relative aspect-video w-full overflow-hidden">
			<img
				src={article.coverImage.src}
				alt={article.coverImage.altText}
				class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
		</div>
	{/if}
	<div class="flex flex-1 flex-col justify-between p-4">
		<div>
			<h2 class="line-clamp-2 text-lg font-bold text-gray-900">{article.title}</h2>
			{#if article.tags?.length > 0}
				<div class="mt-2 flex flex-wrap gap-2">
					{#each article.tags as tag}
						<button
							class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 transition-colors duration-300 hover:bg-gray-200"
							onclick={(e) => {
								e.preventDefault();
								window.location.href = `/tags/${tag.slug}`;
							}}
						>
							{tag.name}
						</button>
					{/each}
				</div>
			{/if}
		</div>
		<time class="mt-4 block text-sm text-gray-500" datetime={article._sys.createdAt}>
			{formatDate(new Date(article._sys.createdAt), 'YYYY/M/D')}
		</time>
	</div>
</a>
