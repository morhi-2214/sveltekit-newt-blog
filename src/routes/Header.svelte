<script lang="ts">
	import { page } from '$app/state';
</script>

<header class="border-b border-gray-200 bg-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a
					href="/"
					class="text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-gray-700"
				>
					OimOyaの技術ブログ
				</a>
			</div>
			<nav class="flex items-center space-x-6">
				<a
					href="/articles"
					class="relative text-gray-500 transition-colors duration-300 after:absolute after:bottom-[-0.5rem] after:left-0 after:h-1 after:w-full after:origin-left after:rounded-full after:bg-gray-900 after:transition-opacity after:duration-300 hover:text-gray-700"
					class:text-gray-900={page.url.pathname === '/articles'}
					class:after:opacity-100={page.url.pathname === '/articles'}
					class:after:opacity-0={page.url.pathname !== '/articles'}
				>
					Articles
				</a>
				<a
					href="/tags"
					class="relative text-gray-500 transition-colors duration-300 after:absolute after:bottom-[-0.5rem] after:left-0 after:h-1 after:w-full after:origin-left after:rounded-full after:bg-gray-900 after:transition-opacity after:duration-300 hover:text-gray-700"
					class:text-gray-900={page.url.pathname === '/tags'}
					class:after:opacity-100={page.url.pathname === '/tags'}
					class:after:opacity-0={page.url.pathname !== '/tags'}
				>
					Tags
				</a>
				<a
					href="/about"
					class="relative text-gray-500 transition-colors duration-300 after:absolute after:bottom-[-0.5rem] after:left-0 after:h-1 after:w-full after:origin-left after:rounded-full after:bg-gray-900 after:transition-opacity after:duration-300 hover:text-gray-700"
					class:text-gray-900={page.url.pathname === '/about'}
					class:after:opacity-100={page.url.pathname === '/about'}
					class:after:opacity-0={page.url.pathname !== '/about'}
				>
					About
				</a>
			</nav>
		</div>
	</div>
</header>
