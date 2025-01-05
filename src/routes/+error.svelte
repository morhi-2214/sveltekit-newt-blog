<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="mt-4 flex flex-col items-center">
	<h1 class="text-6xl font-bold italic tracking-wide">
		{#if page.status === 404}
			404 Not Found
		{:else}
			500 Internal Server Error
		{/if}
	</h1>
	<p
		class="mb-6 mt-4 max-w-2xl font-light leading-relaxed text-gray-500 md:text-lg lg:mb-8 lg:text-xl"
	>
		{#if page.status === 404}
			お探しのページが見つかりませんでした。
		{:else}
			予期せぬエラーが発生しました。
		{/if}
	</p>
	<div class="mt-16">
		<a href="/" class="flex items-center text-opacity-80 hover:underline">トップに戻る</a>
	</div>
</div>
