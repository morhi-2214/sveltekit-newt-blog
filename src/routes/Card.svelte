<script lang="ts">
	import type { Article } from '$lib/server/newt';
	type Props = {
		article: Article;
	};

	const { article }: Props = $props();
</script>

<div
	class="flex rounded-lg bg-white p-4 shadow-md transition duration-300 ease-in-out hover:shadow-lg"
>
	<div>
		<a href="/articles/{article.slug}" class="hover:underline">
			<h2 class="text-lg font-bold">{article.title}</h2>
		</a>
		<!-- <time class="text-sm text-gray-500" datetime={article._sys.createdAt.toISOString()}>
			{article._sys.createdAt.toLocaleDateString()}
		</time> -->
	</div>
</div>
