<script lang="ts">
	type Props = {
		totalPages: number;
		currentPage: number;
	};

	const { totalPages, currentPage }: Props = $props();

	const pages = $derived(Array.from({ length: totalPages }, (_, i) => i + 1));
	const showingPages = $derived(
		pages.filter((page) => {
			if (page === 1 || page === totalPages) return true;
			return Math.abs(page - currentPage) <= 2;
		})
	);
	const pagesWithDots = $derived(
		showingPages.reduce(
			(acc, page, i) => {
				if (i > 0 && showingPages[i - 1] !== page - 1) {
					acc.push('...');
				}
				acc.push(page);
				return acc;
			},
			[] as (number | string)[]
		)
	);
</script>

<nav class="mt-8 flex justify-center" aria-label="Pagination">
	<ul class="flex items-center gap-2">
		<li>
			<a
				href="?page={currentPage - 1}"
				class="flex h-8 w-8 items-center justify-center rounded-full text-sm text-gray-500 transition-colors duration-300 hover:bg-gray-100 {currentPage ===
				1
					? 'pointer-events-none opacity-50'
					: ''}"
				aria-label="Previous page"
			>
				←
			</a>
		</li>
		{#each pagesWithDots as page}
			{#if page === '...'}
				<li class="px-2">...</li>
			{:else}
				<li>
					<a
						href="?page={page}"
						class="flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors duration-300 {currentPage ===
						page
							? 'bg-gray-900 text-white'
							: 'text-gray-500 hover:bg-gray-100'}"
					>
						{page}
					</a>
				</li>
			{/if}
		{/each}
		<li>
			<a
				href="?page={currentPage + 1}"
				class="flex h-8 w-8 items-center justify-center rounded-full text-sm text-gray-500 transition-colors duration-300 hover:bg-gray-100 {currentPage ===
				totalPages
					? 'pointer-events-none opacity-50'
					: ''}"
				aria-label="Next page"
			>
				→
			</a>
		</li>
	</ul>
</nav>
