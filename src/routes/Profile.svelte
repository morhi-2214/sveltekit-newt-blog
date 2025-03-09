<script lang="ts">
	import type { Author } from '$lib/server/newt';

	type Props = {
		author: Author;
	};

	const { author }: Props = $props();
</script>

<aside class="rounded-lg bg-white p-6 shadow-md">
	<div class="text-center">
		{#if author.profileImage}
			<img
				src={author.profileImage.src}
				alt={author.profileImage.altText}
				class="mx-auto h-24 w-24 rounded-full object-cover"
			/>
		{/if}
		<h2 class="mt-4 text-lg font-bold text-gray-900">{author.fullName}</h2>
	</div>
	{#if author.biography}
		<p class="mt-4 text-sm text-gray-600">
			{@html author.biography}
		</p>
	{/if}
	<div class="mt-6">
		<a
			href="/about"
			class="block w-full rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
		>
			詳しくはこちら！
		</a>
	</div>
</aside>
